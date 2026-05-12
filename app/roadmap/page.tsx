import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "AI Career Roadmap India 2026 — Step-by-Step Path to Your Dream IT Role | CareerLens",
  description:
    "Get a personalised AI career roadmap based on your resume. Know exactly which skills to learn next to become a software engineer, data scientist, or product manager in India. Free, instant.",
  keywords: [
    "career roadmap India 2026",
    "how to become software engineer India",
    "data scientist career path India",
    "product manager roadmap India",
    "DevOps career path India",
    "AI career roadmap India 2026",
    "career guidance India freshers",
    "skills to learn for IT jobs India",
    "career switch IT India 2026",
    "career planning India 2026",
    "what skills to learn for software engineer India",
    "career path IT freshers India",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/roadmap",
  },
  openGraph: {
    title: "AI Career Roadmap India 2026 — Personalised Step-by-Step Path | CareerLens",
    description:
      "Know exactly which skills to learn next. AI builds a personalised roadmap to your target IT role based on your current resume. Free, instant, no login.",
    url: "https://www.carrerlens.com/roadmap",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Career Roadmap – CareerLens",
  url: "https://www.carrerlens.com/roadmap",
  description:
    "Personalised AI-generated career roadmap for IT professionals in India based on current skills and target role",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Roadmap", item: "https://www.carrerlens.com/roadmap" },
    ],
  },
};

export default function RoadmapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <App defaultTab="roadmap" />
    </>
  );
}
