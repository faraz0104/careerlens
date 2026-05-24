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
  // High-traffic career topics for India
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
  "How to build a portfolio that gets you hired India",
  "GATE exam vs direct job – which is better for CS students India",
  "How to crack Flipkart SDE interview 2026",
  "Visa options for Indian software engineers to work abroad",
  "Second year slump – why engineers stop growing at 2-3 years",
  "How to use AI tools to double your productivity as a developer India",
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
3. Is highly relevant for May 2026 (appraisal season, fresher hiring, etc.)

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
relatedSlugs: ["software-engineer-salary-india-2025", "how-to-negotiate-tech-salary"]
---

[Full blog post content here]

CONTENT REQUIREMENTS:
- Minimum 1800 words of actual content (not counting frontmatter)
- 6-8 H2 sections with descriptive headings
- At least 2 H3 subsections
- Include specific numbers: salary figures in LPA/INR, years of experience, percentages
- Include at least one comparison table or structured list
- End with an "## FAQ" section with 3-4 questions and answers (these rank as featured snippets)
- Last section should be "## Bottom Line" with 3-5 bullet point takeaways
- Naturally mention CareerLens once or twice where it genuinely helps (e.g., "you can check your salary benchmark on CareerLens" or "run your resume through CareerLens to see your ATS score")
- NO keyword stuffing — write naturally, mention the topic keyword 3-5 times
- CRITICAL: Never write "<" followed immediately by a number (e.g. write "less than 2%" NOT "<2%", write "under 10%" NOT "<10%"). This breaks the MDX parser and will cause a build failure.`;

  console.log("Calling Claude API to generate blog post...");

  const message = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 8192,
    messages: [{ role: "user", content: userPrompt }],
    system: systemPrompt,
  });

  const content = message.content[0].text.trim();

  // Extract slug from the title in frontmatter
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

  // Print first 3 lines so CI log shows what was generated
  const preview = content.split("\n").slice(0, 5).join("\n");
  console.log(`\nPreview:\n${preview}`);
}

main().catch((err) => {
  console.error("Error generating blog post:", err.message);
  process.exit(1);
});
