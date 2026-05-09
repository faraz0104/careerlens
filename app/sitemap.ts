import type { MetadataRoute } from "next";
import { ALL_TECHS } from "@/lib/interview-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.carrerlens.com";
  const now = new Date();

  const appPages: MetadataRoute.Sitemap = [
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

  const interviewIndex: MetadataRoute.Sitemap = [
    { url: `${base}/interview-questions`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
  ];

  const interviewPages: MetadataRoute.Sitemap = ALL_TECHS.map((tech) => ({
    url: `${base}/interview-questions/${tech.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const topNPages: MetadataRoute.Sitemap = ALL_TECHS.flatMap((tech) =>
    [10, 20, 30, 50].map((n) => ({
      url: `${base}/interview-questions/${tech.slug}/top-${n}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }))
  );

  return [...appPages, ...interviewIndex, ...interviewPages, ...topNPages];
}
