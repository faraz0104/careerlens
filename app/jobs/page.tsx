import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "AI Job Matching India – Find Jobs That Fit Your Resume",
  description:
    "Get AI-curated job recommendations based on your resume. Find software engineer, data scientist, product manager & other IT jobs in India with match percentage and personalised tips.",
  keywords: [
    "AI job matching India",
    "jobs for freshers India 2024",
    "software engineer jobs India",
    "IT jobs India",
    "job search AI India",
    "job recommendations based on resume",
    "best job sites India",
    "tech jobs Bangalore Mumbai Delhi",
  ],
  alternates: {
    canonical: "https://carrerlens.com/jobs",
  },
  openGraph: {
    title: "AI Job Matching India – Find Jobs That Fit Your Resume",
    description:
      "AI analyses your resume and recommends the best-matched jobs in India with match score and actionable tips to land the role.",
    url: "https://carrerlens.com/jobs",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Job Matching – CareerLens",
  url: "https://carrerlens.com/jobs",
  description:
    "AI-powered job matching that analyses your resume and recommends the best-fit jobs in India",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Jobs", item: "https://carrerlens.com/jobs" },
    ],
  },
};

export default function JobsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <App defaultTab="jobs" />
    </>
  );
}
