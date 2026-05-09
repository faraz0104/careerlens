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
              text: `First check if this document is a resume or CV. A resume contains a person's work experience, education, and/or skills. If it is NOT a resume (e.g. it's an invoice, ID card, certificate, article, blank page, or any other document), return ONLY this JSON:
{"is_resume": false, "error": "This doesn't look like a resume. Please upload your CV or resume in PDF format."}

If it IS a resume, analyze it and return ONLY a valid JSON object with no extra text, no markdown, no backticks:
{
  "is_resume": true,
  "name": "full name from resume",
  "role": "current or most recent job title",
  "experience": "X years",
  "score": <integer, see rubric below>,
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

SCORING RUBRIC — be strict and honest, most resumes score 40-65:
20-35: Bare minimum info, no structure, no quantified achievements, generic descriptions
36-50: Basic structure present but missing metrics, weak action verbs, poor ATS keywords, job descriptions are vague duties not achievements
51-65: Decent structure, some metrics, but still has generic phrases ("responsible for", "helped with"), missing key skills section, inconsistent formatting
66-75: Good structure, has quantified achievements (%, numbers, $), strong action verbs, relevant skills listed, minor formatting issues
76-85: Strong resume — clear impact metrics, tailored skills, ATS-optimised keywords, clean formatting, no fluff
86-95: Exceptional — every bullet has measurable impact, perfectly ATS-optimised, strong personal brand, no wasted space

Deduct points for: no quantified achievements (-15), generic job descriptions (-10), missing skills section (-8), poor formatting (-5), unexplained gaps (-5), objective statement instead of summary (-5), using "responsible for" or "helped with" (-8).
Add points for: strong action verbs (+5), specific metrics in every bullet (+15), industry keywords (+8), clear career progression (+5), links to portfolio/GitHub (+3).`,
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

    if (data.is_resume === false) {
      return Response.json(
        { error: data.error || "This doesn't look like a resume. Please upload your CV or resume." },
        { status: 422 }
      );
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
