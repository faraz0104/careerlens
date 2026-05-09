import Anthropic from "@anthropic-ai/sdk";
import { rateLimit } from "@/lib/rateLimit";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req) {
  const { allowed, minutesLeft } = rateLimit(req, "jobs", 10, 60);
  if (!allowed) {
    return Response.json(
      { error: `Too many requests. Try again in ${minutesLeft} minute${minutesLeft !== 1 ? "s" : ""}.` },
      { status: 429 }
    );
  }

  try {
    const { skills, role, experience, missing } = await req.json();

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 3000,
      messages: [
        {
          role: "user",
          content: `Generate 15 realistic job openings for a candidate with the following profile:
Role: ${role}
Experience: ${experience}
Skills they have: ${skills.join(", ")}
Skills they are missing: ${missing.join(", ")}

Return ONLY a valid JSON array with no extra text, no markdown, no backticks:
[{
  "id": 1,
  "title": "exact job title",
  "company": "real company name (Indian startups, MNCs, IT firms)",
  "logo": "single relevant emoji",
  "location": "City, India or Remote",
  "type": "Full-time",
  "salary": "₹XX-XX LPA",
  "match": <integer 55-98 based on skills overlap>,
  "skills": ["skill1", "skill2", "skill3"],
  "posted": "Xd ago or Xh ago",
  "why": "one sentence explaining why this job matches their profile",
  "apply_url": "see rules below"
}]

Rules:
- Order by match % descending
- Include a realistic mix: Indian startups (Swiggy, Zomato, Razorpay, CRED, PhonePe, Meesho, Zepto, Ola), MNCs (Google, Microsoft, Amazon, Adobe, Salesforce), IT firms (TCS, Infosys, Wipro, Freshworks)
- Match % should honestly reflect how well their skills align — not everything above 90
- Salary ranges must be realistic for India market at their experience level
- The "why" field should mention specific skills from their resume
- apply_url rules — use the EXACT careers page URL for these companies:
  Google → https://careers.google.com/jobs/results/
  Microsoft → https://jobs.careers.microsoft.com/global/en/search
  Amazon → https://www.amazon.jobs/en/search?base_query=${role}
  Adobe → https://careers.adobe.com/us/en/search-results
  Salesforce → https://careers.salesforce.com/en/jobs/
  TCS → https://www.tcs.com/careers/india-jobs
  Infosys → https://career.infosys.com/joblist
  Wipro → https://careers.wipro.com/careers-home/
  Freshworks → https://careers.freshworks.com/jobs
  Swiggy → https://careers.swiggy.com/
  Zomato → https://www.zomato.com/careers
  Razorpay → https://razorpay.com/jobs/
  CRED → https://careers.cred.club/
  PhonePe → https://careers.phonepe.com/
  Meesho → https://meesho.io/careers
  Zepto → https://jobs.lever.co/zepto
  Ola → https://ola.careers/
  Flipkart → https://careers.flipkart.com/
  Paytm → https://jobs.paytm.com/
  Groww → https://groww.in/careers
  For any other company → use: https://www.naukri.com/${title}-jobs-in-${company}?title=${title}&companyNames=${company} (replace spaces with + in the URL)`,
        },
      ],
    });

    const text = response.content[0].text.trim();
    const match = text.match(/\[[\s\S]*\]/);
    const jobs = match ? JSON.parse(match[0]) : [];

    return Response.json(jobs);
  } catch (error) {
    console.error("Jobs API error:", error);
    return Response.json([], { status: 500 });
  }
}
