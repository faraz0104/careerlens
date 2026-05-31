/**
 * expand-thin-posts.mjs
 * Expands all blog posts under 1400 words to 2000+ words.
 * Run once: node scripts/expand-thin-posts.mjs
 * Set ANTHROPIC_API_KEY env var before running.
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../content/blog");
const MIN_WORDS = 1400;

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  return { frontmatter: match[1], body: match[2].trim() };
}

function getThinPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const thin = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const parsed = parseFrontmatter(raw);
    if (!parsed) continue;
    const words = countWords(parsed.body);
    if (words < MIN_WORDS) {
      thin.push({ file, words, frontmatter: parsed.frontmatter, body: parsed.body });
    }
  }
  return thin.sort((a, b) => a.words - b.words);
}

async function expandPost(post) {
  const titleMatch = post.frontmatter.match(/title:\s*"(.+?)"/);
  const title = titleMatch ? titleMatch[1] : post.file;

  console.log(`  Expanding: ${title} (${post.words} words → 2000+)`);

  const result = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 10000,
    system: `You are a senior SEO content writer for CareerLens — India's AI career tool.
You are expanding an existing blog post to be more comprehensive and rank higher on Google.
Your writing style: conversational, direct, India-specific, no fluff, short punchy paragraphs.
Use **bold** for key terms and numbers. Include specific rupee amounts, company names, real data.`,
    messages: [
      {
        role: "user",
        content: `Expand this existing blog post to at least 2000 words.

RULES:
1. Keep the existing content exactly as-is — only ADD new sections and depth
2. Add 3-4 new H2 sections with detailed content between the existing sections and before the FAQ
3. Add more specific examples, data points, salary figures, company names
4. Add 2-3 internal markdown links naturally: [check ATS score](/resume), [benchmark salary](/salary), [practice interviews](/interview), [browse jobs](/jobs)
5. If there is no FAQ section, add one with 4 questions and detailed answers (80+ words each)
6. If there is no "Bottom Line" section, add one with 5 bullet takeaways
7. Output ONLY the expanded body content — no frontmatter, no explanation
8. NEVER write "<" followed by a number (write "less than 5%" not "<5%")
9. Use only markdown — no raw HTML tags

EXISTING CONTENT:
${post.body}`,
      },
    ],
  });

  return result.content[0].text.trim();
}

async function main() {
  const thin = getThinPosts();

  if (thin.length === 0) {
    console.log("✓ No thin posts found — all posts are above 1400 words.");
    return;
  }

  console.log(`Found ${thin.length} thin posts (under ${MIN_WORDS} words):\n`);
  thin.forEach((p) => console.log(`  ${p.words} words — ${p.file}`));
  console.log();

  let expanded = 0;
  let failed = 0;

  for (const post of thin) {
    try {
      const newBody = await expandPost(post);
      const newWords = countWords(newBody);

      const fullContent = `---\n${post.frontmatter}\n---\n\n${newBody}`;
      fs.writeFileSync(path.join(POSTS_DIR, post.file), fullContent, "utf8");

      console.log(`  ✓ ${post.file}: ${post.words} → ${newWords} words`);
      expanded++;

      // Rate limit — wait 2s between calls
      await new Promise((r) => setTimeout(r, 2000));
    } catch (err) {
      console.error(`  ✗ Failed: ${post.file} — ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone. Expanded: ${expanded}, Failed: ${failed}`);
  console.log("Run: git add content/blog/ && git commit -m 'expand thin blog posts for SEO' && git push");
}

main().catch((err) => {
  console.error("Fatal error:", err.message);
  process.exit(1);
});
