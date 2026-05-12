import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Software Engineer Salary India 2026 — Know Your Market Rate | CareerLens",
  description:
    "What should you be earning? Free salary calculator for software engineers, data scientists & IT roles in India 2026. Compare by city, experience & company. See if you're underpaid.",
  keywords: [
    "software engineer salary India 2026",
    "IT salary India 2026",
    "fresher salary India IT",
    "data scientist salary India 2026",
    "am I underpaid software engineer India",
    "salary calculator India 2026",
    "average developer salary Bangalore Hyderabad Pune",
    "TCS Infosys Wipro salary 2026",
    "FAANG salary India",
    "12 lpa in hand salary India",
    "how much do software engineers earn India 2026",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/salary",
  },
  openGraph: {
    title: "Software Engineer Salary India 2026 — Know Your Market Rate | CareerLens",
    description:
      "Discover your market salary for software engineering, data science, product management and other IT roles across Indian cities. AI-powered insights based on real market data.",
    url: "https://www.carrerlens.com/salary",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IT Salary Calculator India – CareerLens",
  url: "https://www.carrerlens.com/salary",
  description:
    "Free salary calculator for IT professionals in India. Get accurate salary benchmarks for software engineers, data scientists, and product managers.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Salary", item: "https://www.carrerlens.com/salary" },
    ],
  },
};

export default function SalaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <App defaultTab="salary" />
    </>
  );
}
