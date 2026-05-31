import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../content/blog");

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function getExistingSlugs() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function todayIST() {
  return new Date()
    .toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

const TOPIC_POOL = [
  // Career growth & switching
  "How to get a job at Google India 2026",
  "MAANG vs service companies India – which to choose",
  "How to switch from TCS/Infosys to a product company",
  "Notice period negotiation India – how to reduce 90 days",
  "How to get promoted from SDE-1 to SDE-2 in India",
  "Moonlighting policy India – what is allowed legally",
  "Bond/service agreement in IT companies India – is it legal",
  "How to get a referral at top tech companies India",
  "H1B visa chances for Indian software engineers 2026",
  "Work from office vs remote debate India 2026",
  "Highest paying non-coding tech jobs in India 2026",
  "How to become a data analyst in India with no experience",
  "Freelancing vs full-time job India – income comparison",
  "How to crack Zepto, Blinkit, Meesho interviews India",
  "Best certifications that actually matter for IT jobs India 2026",
  "How to get a 50% salary hike by switching jobs India",
  "Appraisal season India 2026 – how to negotiate a raise",
  "Which MBA is worth it for IT professionals India",
  "Startup vs MNC for freshers India – honest comparison",
  "How to write the perfect LinkedIn headline for software engineers India",
  "10 LPA to 20 LPA – how to double your salary in 2 years India",
  "Data science vs software engineering India – salary and career",
  "How to get your first tech job without coding bootcamp India",
  "What does SDE-1 SDE-2 SDE-3 mean in Indian tech companies",
  "Bangalore vs Hyderabad vs Pune – best city for IT jobs India",
  "How to explain employment gap in interview India",
  "Background verification in India – what IT companies actually check",
  "How to resign professionally in India without burning bridges",
  "Tech layoffs India 2026 – which companies are still hiring",
  "GATE exam vs direct job – which is better for CS students India",
  "How to crack Flipkart SDE interview 2026",
  "Second year slump – why engineers stop growing at 2-3 years",
  "Should I join TCS for my first job in 2026 – honest answer",
  "Wipro vs Infosys vs TCS – which IT company is better for freshers",
  "How to crack Amazon SDE interview in India 2026",
  "How to become a product manager in India with no PM experience",

  // Salary & compensation
  "Software engineer salary in Pune 2026 – complete guide",
  "Data scientist salary in Hyderabad 2026 – what to expect",
  "Product manager salary in India 2026 – complete breakdown",
  "How to read your CTC offer letter India – what to negotiate",
  "Variable pay in India IT companies – how it actually works",
  "ESOPs in Indian startups – how to value and negotiate them",
  "Salary hike percentage India 2026 – what is normal",
  "How much should a fresher expect as first salary in India",
  "Counter offer after resignation India – should you accept",

  // Interview prep – specific
  "TCS NQT preparation guide 2026 – pattern, syllabus, tips",
  "Infosys interview process 2026 – all rounds explained",
  "Wipro NLTH interview 2026 – what to expect",
  "How to crack system design interview for mid-level engineers India",
  "DSA preparation in 3 months for product company interviews India",
  "HR round questions India – what they actually want to hear",
  "How to prepare for LLD machine coding round India 2026",
  "Capgemini interview 2026 – rounds, questions, salary",
  "Accenture interview process for freshers India 2026",

  // Learning & skills
  "Best free resources to learn system design in India 2026",
  "React developer roadmap 2026 – what to learn and in what order",
  "Python for data science roadmap India 2026 – beginner to job ready",
  "Cloud computing certifications worth it India – AWS vs Azure vs GCP",
  "How long does it take to learn full stack development India",
  "Best DSA resources for beginners India 2026 – free and paid",
  "Kubernetes learning roadmap for DevOps engineers India",
  "SQL for software engineers India – what you actually need to know",
  "How to build side projects that impress interviewers India",
  "Open source contribution guide for Indian developers 2026",

  // Job search strategy
  "How to use LinkedIn job search effectively in India 2026",
  "Naukri vs LinkedIn vs Instahyre – which job board is best India",
  "How to write a cold email to a recruiter in India that gets replies",
  "Resume format for freshers in India 2026 – what actually works",
  "How to get off-campus placements after college India",
  "Job portals for remote work India 2026 – complete list",
  "How to negotiate joining bonus in India",
  "When to switch jobs in India – signs you should move on",
  "Contract vs full-time job in India – pros and cons",

  // Tech career trends
  "AI ML jobs for freshers India 2026 – how to get in",
  "Is coding still the best career in India in 2026",
  "Prompt engineering as a career in India – is it real",
  "Cybersecurity jobs in India 2026 – scope and salary",
  "Web3 and blockchain jobs India 2026 – is it worth learning",
  "No-code tools for developers India – jobs and opportunities",
  "Data engineering vs data science India – which to choose",
  "SRE vs DevOps in India – difference and which pays more",
  "QA automation engineer career India 2026 – is it worth it",
];

async function pickTopicAndWrite(existingSlugs) {
  const today = todayIST();
  const usedTopics = existingSlugs.join(", ");

  const systemPrompt = `You are a senior SEO content strategist and writer for CareerLens — India's AI career tool for software engineers and IT professionals.

Your writing style:
- Conversational and direct, like a smart senior engineer explaining things to a friend
- Use specific numbers, rupee amounts, real company names (TCS, Infosys, Wipro, Zepto, Razorpay, etc.)
- Write as if you've lived this experience in India
- NO corporate fluff, NO generic advice
- Short sentences. Punchy paragraphs.
- Use **bold** for key terms and numbers
- India-specific, 2026 context throughout
- Every post should make the reader feel "this was written for me"`;

  const userPrompt = `Today is ${today}.

ALREADY PUBLISHED (avoid these topics): ${usedTopics}

CANDIDATE TOPICS:
${TOPIC_POOL.map((t, i) => `${i + 1}. ${t}`).join("\n")}

Pick the ONE topic from the list above that:
1. Has the highest Google search volume potential for Indian IT job seekers
2. Is NOT already covered by existing slugs
3. Is most relevant right now (June 2026 — fresher hiring season, mid-year appraisals, job switch season)

Then write a COMPLETE blog post in MDX format. Output ONLY the raw MDX content, nothing else — no explanation, no code block wrapper.

The post MUST follow this exact structure:

---
title: "[Full engaging title]"
metaTitle: "[SEO title under 65 chars with India 2026]"
metaDesc: "[Meta description 150-160 chars, includes primary keyword]"
category: "[One of: Career Growth | Salary Insights | Interview Prep | Skills & Learning | AI & Future of Work | Job Search]"
readTime: "[X min read]"
publishedAt: "${today}"
author: "CareerLens Editorial"
authorRole: "Career Research Team"
coverEmoji: "[single relevant emoji]"
coverColor: "[dark hex color like #1a1916]"
intro: "[2-3 sentence hook that makes the reader feel this was written for them. Conversational, India-specific, start with a relatable situation]"
tags: ["tag1", "tag2", "tag3", "tag4", "tag5"]
relatedSlugs: ["slug-of-related-post-1", "slug-of-related-post-2"]
---

[Full blog post content here]

CONTENT REQUIREMENTS:
- Minimum 2500 words of actual content (not counting frontmatter). This is non-negotiable.
- 7-9 H2 sections with descriptive, keyword-rich headings
- At least 3 H3 subsections
- Include specific numbers: salary figures in LPA/INR, years of experience, percentages, timelines
- Include at least 2 comparison tables or structured lists
- REQUIRED: Include 3-5 internal markdown links to CareerLens pages naturally within the content body, using these exact formats:
  * When discussing resumes or ATS: [check your ATS score on CareerLens](/resume)
  * When discussing interview prep: [practice with AI mock interviews](/interview)
  * When discussing salary: [benchmark your salary on CareerLens](/salary)
  * When discussing jobs: [browse matched jobs on CareerLens](/jobs)
  * When discussing interview questions for a tech: [React interview questions](/interview-questions/react) or [system design questions](/interview-questions/system-design) etc.
  Use these links naturally in sentences, not as a list at the end.
- REQUIRED: End with an "## FAQ" section with 4-5 questions and detailed answers (minimum 80 words each — these rank as featured snippets)
- REQUIRED: Include a "## Bottom Line" section with 4-6 specific, actionable bullet point takeaways
- Naturally mention CareerLens 2-3 times where it genuinely helps
- NO keyword stuffing — write naturally, mention the topic keyword 4-6 times total
- CRITICAL: Never write "<" followed immediately by a number (e.g. write "less than 2%" NOT "<2%", write "under 10%" NOT "<10%"). This breaks the MDX parser.
- CRITICAL: In MDX, never use raw HTML tags like <br>, <div>, <span> in the content body. Use markdown only.`;

  console.log("Calling Claude API to generate blog post...");

  const message = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 10000,
    messages: [{ role: "user", content: userPrompt }],
    system: systemPrompt,
  });

  const content = message.content[0].text.trim();

  const titleMatch = content.match(/^title:\s*"(.+?)"/m);
  if (!titleMatch) throw new Error("Could not extract title from generated post");

  const slug = slugify(titleMatch[1]);

  if (existingSlugs.includes(slug)) {
    throw new Error(`Slug already exists: ${slug}`);
  }

  return { slug, content };
}

async function main() {
  const existingSlugs = getExistingSlugs();
  console.log(`Found ${existingSlugs.length} existing posts`);

  const { slug, content } = await pickTopicAndWrite(existingSlugs);

  const outputPath = path.join(POSTS_DIR, `${slug}.mdx`);
  fs.writeFileSync(outputPath, content, "utf8");

  console.log(`✓ Blog post written: content/blog/${slug}.mdx`);
  console.log(`  Slug: ${slug}`);

  const preview = content.split("\n").slice(0, 5).join("\n");
  console.log(`\nPreview:\n${preview}`);
}

main().catch((err) => {
  console.error("Error generating blog post:", err.message);
  process.exit(1);
});
