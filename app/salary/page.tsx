import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "IT Salary Calculator India 2024 – Software Engineer, Data Scientist & More",
  description:
    "Find out what you should be earning. Free salary calculator for software engineers, data scientists, product managers and other IT roles in India. Compare by city, experience level, and company.",
  keywords: [
    "IT salary India 2024",
    "software engineer salary India",
    "fresher salary India IT",
    "data scientist salary India",
    "product manager salary India",
    "salary calculator India",
    "average salary Bangalore Mumbai Delhi Hyderabad",
    "TCS Infosys Wipro salary",
    "FAANG salary India",
    "how much do software engineers earn India",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/salary",
  },
  openGraph: {
    title: "IT Salary Calculator India 2024 – Find Your Market Rate",
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
