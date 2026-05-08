import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Career Roadmap India – How to Become a Software Engineer, Data Scientist & More",
  description:
    "Get a personalised AI-generated career roadmap based on your resume. Step-by-step paths to become a software engineer, data scientist, product manager, DevOps engineer and more in India.",
  keywords: [
    "career roadmap India",
    "how to become software engineer India",
    "data scientist career path India",
    "product manager roadmap India",
    "DevOps career path India",
    "AI career roadmap India",
    "career guidance India freshers",
    "skills to learn for IT jobs India",
    "career switch IT India",
    "career planning India 2024",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/roadmap",
  },
  openGraph: {
    title: "Career Roadmap India – Personalised AI-Powered Career Path",
    description:
      "Get a step-by-step personalised career roadmap based on your current skills. AI identifies gaps and creates a learning path to reach your dream role in India.",
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
