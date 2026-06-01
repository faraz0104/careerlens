import type { MetadataRoute } from "next";
import { ALL_TECHS } from "@/lib/interview-data";
import { getAllPosts, getAllCategories } from "@/lib/mdx";

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

  const jobCategories = [
    "software-engineer-jobs-india", "frontend-developer-jobs-india",
    "backend-developer-jobs-india", "data-scientist-jobs-india",
    "product-manager-jobs-india", "devops-jobs-india",
    "digital-marketing-jobs-india", "ux-designer-jobs-india",
    "finance-jobs-india", "hr-jobs-india",
  ];
  const jobCategoryPages: MetadataRoute.Sitemap = jobCategories.map((cat) => ({
    url: `${base}/jobs/${cat}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // City salary pages: 8 roles × 7 cities = 56 pages
  const salaryRoles = ["software-engineer","frontend-developer","backend-developer","data-scientist","devops-engineer","product-manager","full-stack-developer","mobile-developer"];
  const salaryCities = ["bangalore","hyderabad","pune","mumbai","delhi-ncr","chennai","remote"];
  const salaryPages: MetadataRoute.Sitemap = salaryRoles.flatMap(role =>
    salaryCities.map(city => ({
      url: `${base}/salary/${role}-in-${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.88,
    }))
  );

  // Company interview pages: 12 companies
  const interviewCompanies = ["google","amazon","microsoft","flipkart","zomato","swiggy","razorpay","tcs","infosys","wipro","meta","zepto"];
  const companyInterviewPages: MetadataRoute.Sitemap = interviewCompanies.map(company => ({
    url: `${base}/interview/${company}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const posts = getAllPosts();
  const categories = getAllCategories();

  const blogIndex: MetadataRoute.Sitemap = [
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.95 },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogCategoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${base}/blog/category/${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...appPages, ...salaryPages, ...companyInterviewPages, ...jobCategoryPages, ...interviewIndex, ...interviewPages, ...topNPages, ...blogIndex, ...blogPages, ...blogCategoryPages];
}
