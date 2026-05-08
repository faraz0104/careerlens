import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "AI Job Matching India – Find Jobs + Cold Email Hiring Managers",
  description:
    "Get AI-curated job recommendations based on your resume plus a cold email to the hiring manager at any company. Find software engineer, data scientist, product manager jobs in India with match score.",
  keywords: [
    "AI job matching India",
    "jobs for freshers India 2024",
    "software engineer jobs India",
    "IT jobs India Bangalore Mumbai Hyderabad",
    "cold email hiring manager India",
    "job search AI India",
    "job recommendations based on resume India",
    "tech jobs India 2024",
    "product manager jobs India",
    "data scientist jobs India",
    "remote jobs India",
    "startup jobs India",
  ],
  alternates: {
    canonical: "https://carrerlens.com/jobs",
  },
  openGraph: {
    title: "AI Job Matching India – Personalised Jobs + Cold Email Generator",
    description:
      "AI matches jobs to your resume with a match score. Then write a cold email to the hiring manager in one click. Free to try.",
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
    "AI-powered job matching with cold email generator for Indian job seekers",
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
