import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req) {
  try {
    const { name, role, experience, skills, missing, summary, improvements } = await req.json();

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2000,
      messages: [{
        role: "user",
        content: `You are an expert resume writer. Generate a complete, professional, ATS-optimised resume for this candidate. Apply all the improvement points listed below.

Candidate Profile:
- Name: ${name}
- Role: ${role}
- Experience: ${experience}
- Current Skills: ${skills.join(", ")}
- Skills to add: ${missing.join(", ")}
- Current Summary: ${summary}
- Improvement points to fix:
${improvements.map((imp, i) => `  ${i + 1}. ${imp}`).join("\n")}

Generate a complete resume. Return ONLY valid JSON, no markdown, no backticks:
{
  "name": "${name}",
  "role": "${role}",
  "email": "your.email@example.com",
  "phone": "+91 98765 43210",
  "linkedin": "linkedin.com/in/${name.toLowerCase().replace(/\s+/g, "")}",
  "location": "India",
  "summary": "2-3 sentence professional summary using strong keywords, ATS-optimised, addressing the improvement points",
  "experience": [
    {
      "title": "job title",
      "company": "company name",
      "duration": "duration",
      "bullets": [
        "quantified achievement bullet 1 with metrics (%, $, numbers)",
        "quantified achievement bullet 2",
        "quantified achievement bullet 3",
        "quantified achievement bullet 4"
      ]
    }
  ],
  "skills": {
    "technical": ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6"],
    "soft": ["Leadership", "Problem Solving", "Communication", "Team Collaboration"]
  },
  "education": {
    "degree": "relevant degree",
    "institution": "institution name",
    "year": "graduation year"
  },
  "certifications": ["relevant certification 1", "relevant certification 2"]
}

Rules:
- Every experience bullet must start with a strong action verb (Led, Built, Increased, Reduced, Delivered, Optimised)
- Every bullet must have a measurable metric (%, numbers, $ or scale)
- Include ALL the missing skills in the technical skills section
- Summary must be 2-3 sentences, keyword-rich, ATS-friendly
- Generate 2 realistic experience entries matching the ${role} role and ${experience} experience level
- Make certifications relevant to the ${role} role`
      }]
    });

    const text = response.content[0].text.trim();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      const match = text.match(/\{[\s\S]*\}/);
      if (match) data = JSON.parse(match[0]);
      else throw new Error("Could not parse resume");
    }

    return Response.json(data);
  } catch (error) {
    console.error("Resume generate error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
