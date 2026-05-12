import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "AI Job Matching India 2026 — Jobs Matched to Your Resume | CareerLens",
  description:
    "Get jobs matched to your exact resume with a match score. See live openings from LinkedIn, Naukri & Indeed for your role. Plus cold email generator to reach hiring managers directly. Free.",
  keywords: [
    "jobs matched to my resume India",
    "AI job matching India 2026",
    "software engineer jobs India 2026",
    "IT jobs for freshers India 2026",
    "jobs in Bangalore Hyderabad Pune 2026",
    "cold email hiring manager India",
    "job search tools India",
    "tech jobs India 2026",
    "remote jobs India 2026",
    "startup jobs India 2026",
    "job recommendations based on skills India",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/jobs",
  },
  openGraph: {
    title: "AI Job Matching India – Personalised Jobs + Cold Email Generator",
    description:
      "AI matches jobs to your resume with a match score. Then write a cold email to the hiring manager in one click. Free to try.",
    url: "https://www.carrerlens.com/jobs",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Job Matching – CareerLens",
  url: "https://www.carrerlens.com/jobs",
  description:
    "AI-powered job matching with cold email generator for Indian job seekers",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Jobs", item: "https://www.carrerlens.com/jobs" },
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
