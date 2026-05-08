import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.carrerlens.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/resume`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/cover-letter`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/linkedin-optimizer`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/jobs`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/cold-email`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/interview`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/salary`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/roadmap`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
