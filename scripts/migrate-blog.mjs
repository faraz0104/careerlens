// Run with: node scripts/migrate-blog.mjs
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Read blog-data.ts as text and extract the array via eval workaround
// We'll use a simpler approach: require the compiled output via tsx
// Instead, let's read the file and parse manually using regex isn't practical
// Best approach: write the MDX files directly here based on the data we know

const outDir = join(root, "content/blog");
mkdirSync(outDir, { recursive: true });

function toMdx(post) {
  const tags = JSON.stringify(post.tags);
  const relatedSlugs = JSON.stringify(post.relatedSlugs);
  const updatedAt = post.updatedAt ? `\nupdatedAt: "${post.updatedAt}"` : "";

  const frontmatter = `---
title: "${post.title.replace(/"/g, '\\"')}"
metaTitle: "${post.metaTitle.replace(/"/g, '\\"')}"
metaDesc: "${post.metaDesc.replace(/"/g, '\\"')}"
category: "${post.category}"
readTime: "${post.readTime}"
publishedAt: "${post.publishedAt}"${updatedAt}
author: "${post.author}"
authorRole: "${post.authorRole}"
coverEmoji: "${post.coverEmoji}"
coverColor: "${post.coverColor}"
intro: "${post.intro.replace(/"/g, '\\"')}"
tags: ${tags}
relatedSlugs: ${relatedSlugs}
---

${post.intro}

${post.sections.map((s) => `## ${s.heading}\n\n${s.body}`).join("\n\n")}
`;

  return frontmatter;
}

// Import blog data dynamically
const { BLOG_POSTS } = await import("../lib/blog-data.js").catch(() => {
  console.error("Could not import blog-data.js — trying .ts via tsx");
  process.exit(1);
});

let count = 0;
for (const post of BLOG_POSTS) {
  const mdx = toMdx(post);
  const outPath = join(outDir, `${post.slug}.mdx`);
  writeFileSync(outPath, mdx, "utf8");
  console.log(`✅ ${post.slug}.mdx`);
  count++;
}

console.log(`\nMigrated ${count} posts to content/blog/`);
