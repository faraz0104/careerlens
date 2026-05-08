import Anthropic from "@anthropic-ai/sdk";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req) {
  const { allowed, minutesLeft } = rateLimit(req, "analyze", 3, 60);
  if (!allowed) {
    return Response.json(
      { error: `Too many requests. Try again in ${minutesLeft} minute${minutesLeft !== 1 ? "s" : ""}.` },
      { status: 429 }
    );
  }

  try {
    const formData = await req.formData();
    const file = formData.get("resume");

    if (!file) {
      return Response.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "document",
              source: {
                type: "base64",
                media_type: "application/pdf",
                data: base64,
              },
            },
            {
              type: "text",
              text: `Analyze this resume and return ONLY a valid JSON object with no extra text, no markdown, no backticks. Use exactly this structure:
{
  "name": "full name from resume",
  "role": "current or most recent job title",
  "experience": "X years",
  "score": <number between 0-100 based on resume quality>,
  "skills": ["skill1", "skill2", "skill3"],
  "missing": ["important missing skill1", "missing skill2", "missing skill3"],
  "summary": "2 sentence summary of the resume",
  "improvements": [
    "specific improvement 1",
    "specific improvement 2",
    "specific improvement 3",
    "specific improvement 4",
    "specific improvement 5"
  ]
}

Score based on: clarity, quantified achievements, ATS keywords, skills relevance, formatting. Be honest and specific.`,
            },
          ],
        },
      ],
    });

    const text = response.content[0].text.trim();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      const match = text.match(/\{[\s\S]*\}/);
      if (match) {
        data = JSON.parse(match[0]);
      } else {
        throw new Error("Could not parse AI response");
      }
    }

    return Response.json(data);
  } catch (error) {
    console.error("Resume analysis error:", error);
    return Response.json(
      { error: error.message || "Failed to analyze resume" },
      { status: 500 }
    );
  }
}
