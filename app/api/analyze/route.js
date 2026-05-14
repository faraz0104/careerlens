import Anthropic from "@anthropic-ai/sdk";
import { supabase } from "@/lib/supabase";
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
      max_tokens: 2800,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "document",
              source: { type: "base64", media_type: "application/pdf", data: base64 },
            },
            {
              type: "text",
              text: `First check if this document is a resume/CV. If NOT a resume, return ONLY:
{"is_resume": false, "error": "This doesn't look like a resume. Please upload your CV or resume in PDF format."}

If it IS a resume, analyze it deeply and return ONLY valid JSON (no markdown, no backticks):

{
  "is_resume": true,
  "name": "full name",
  "role": "current or most recent job title",
  "experience": "X years",
  "score": <integer 20-95, see main rubric>,
  "breakdown": {
    "ats": {
      "score": <integer 0-100>,
      "label": "ATS Compatibility",
      "reason": "One specific sentence explaining this score — name the exact missing keywords or what's hurting ATS parsing"
    },
    "skills": {
      "score": <integer 0-100>,
      "label": "Skills & Keywords",
      "reason": "One specific sentence — e.g. 'Has 7 of 12 expected skills for a Senior SDE role. Missing: Docker, Kubernetes, CI/CD'"
    },
    "content": {
      "score": <integer 0-100>,
      "label": "Content Quality",
      "reason": "One specific sentence — count actual bullets with metrics vs total. E.g. '3 of 9 experience bullets have measurable impact. Add % or numbers to the other 6.'"
    },
    "format": {
      "score": <integer 0-100>,
      "label": "Formatting",
      "reason": "One specific sentence about actual formatting issues or strengths found in this resume"
    }
  },
  "keywords_found": ["keyword1", "keyword2"],
  "keywords_missing": ["missing1", "missing2", "missing3", "missing4", "missing5"],
  "bullets_with_metrics": <integer — count of bullet points that have a number, %, $ or measurable result>,
  "bullets_total": <integer — total number of experience bullet points in the resume>,
  "action_verb_quality": <integer 0-100 — score for use of strong action verbs vs weak ones like "responsible for", "helped with", "worked on">,
  "skills": ["skill1", "skill2", "skill3", "skill4", "skill5"],
  "missing": ["important missing skill1", "missing skill2", "missing skill3"],
  "summary": "2 sentence summary of the candidate",
  "improvements": [
    "specific, actionable improvement 1 with example",
    "specific, actionable improvement 2 with example",
    "specific, actionable improvement 3 with example",
    "specific, actionable improvement 4 with example",
    "specific, actionable improvement 5 with example"
  ]
}

MAIN SCORE RUBRIC (be strict — most real resumes score 40–65):
20–35: Bare minimum info, no structure, no metrics, generic descriptions
36–50: Basic structure but no metrics, weak verbs, poor ATS keywords, vague duty lists
51–65: Decent structure, some metrics, but generic phrases ("responsible for"), inconsistent formatting
66–75: Good — quantified achievements, strong verbs, relevant skills, minor formatting issues
76–85: Strong — clear impact metrics throughout, ATS-optimised keywords, clean formatting
86–95: Exceptional — every bullet has measurable impact, perfectly ATS-optimised, strong brand

ATS SCORE rubric:
- 80–100: Uses role-specific technical keywords throughout, no text in images/tables, clean section headers, no headers/footers with critical info
- 60–79: Has most keywords, minor ATS issues
- 40–59: Missing major keywords for the role, or has ATS-unfriendly formatting
- 0–39: Major ATS issues — tables, columns, missing keywords, images with text

SKILLS SCORE rubric:
- Count keywords found vs what's expected for this role/seniority
- 80+: Has 80%+ of expected skills
- 60–79: Has 60–79% of expected skills
- Below 60: Has fewer than 60% of expected skills

CONTENT SCORE rubric:
- Based on ratio of bullets_with_metrics / bullets_total, plus action verb quality
- 80+: 70%+ of bullets have metrics + strong verbs
- 60–79: 40–69% have metrics
- Below 60: Under 40% have metrics or heavy use of passive/weak language

FORMAT SCORE rubric:
- 80+: One page (or clean 2-page for 8+ years exp), consistent fonts, clear sections, ATS-readable
- 60–79: Minor inconsistencies, slightly long, but readable
- Below 60: Multiple columns, tables, graphics, excessive length, or hard to parse`,
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
      if (match) data = JSON.parse(match[0]);
      else throw new Error("Could not parse AI response");
    }

    if (data.is_resume === false) {
      return Response.json(
        { error: data.error || "This doesn't look like a resume. Please upload your CV or resume." },
        { status: 422 }
      );
    }

    // Increment global scan counter (awaited — serverless kills fire-and-forget)
    try {
      const { data: stat } = await supabase
        .from("resume_stats")
        .select("value")
        .eq("id", "total_scans")
        .single();
      if (stat) {
        await supabase
          .from("resume_stats")
          .update({ value: stat.value + 1 })
          .eq("id", "total_scans");
      }
    } catch (_) {}

    // Notify owner
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const result = await resend.emails.send({
        from: "CareerLens <onboarding@resend.dev>",
        to: "faraz01041997@gmail.com",
        subject: `📄 Resume scan — ${data.name || "Someone"} scored ${data.score}/100`,
        html: `
          <p style="font-family:sans-serif;font-size:14px;">
            <strong>${data.name || "Someone"}</strong> just scanned their resume.<br><br>
            <b>Role:</b> ${data.role || "—"}<br>
            <b>Experience:</b> ${data.experience || "—"}<br>
            <b>Score:</b> ${data.score}/100<br>
            <b>ATS:</b> ${data.breakdown?.ats?.score ?? "—"} &nbsp;
            <b>Skills:</b> ${data.breakdown?.skills?.score ?? "—"} &nbsp;
            <b>Content:</b> ${data.breakdown?.content?.score ?? "—"} &nbsp;
            <b>Format:</b> ${data.breakdown?.format?.score ?? "—"}
          </p>
        `,
      });
      console.log("Notify email sent:", result);
    } catch (err) {
      console.error("Notify email failed:", err?.message || err);
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
