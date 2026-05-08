import Anthropic from "@anthropic-ai/sdk";
import { PDFParse } from "pdf-parse";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume");

    if (!file) {
      return Response.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Extract text from PDF
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let resumeText = "";

    try {
      const parser = new PDFParse({ data: buffer });
      const result = await parser.getText();
      resumeText = result.text;
    } catch (e) {
      return Response.json(
        { error: "Could not read PDF. Make sure it is not scanned or image-based." },
        { status: 400 }
      );
    }

    if (!resumeText || resumeText.trim().length < 50) {
      return Response.json(
        { error: "Resume appears to be empty or image-based. Please use a text-based PDF." },
        { status: 400 }
      );
    }

    // Send extracted text to Haiku
    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: `Analyze this resume text and return ONLY a valid JSON object with no extra text, no markdown, no backticks. Use exactly this structure:
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

Score based on: clarity, quantified achievements, ATS keywords, skills relevance, formatting. Be honest and specific.

Resume text:
${resumeText.slice(0, 8000)}`,
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