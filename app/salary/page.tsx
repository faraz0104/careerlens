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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the average software engineer salary in India in 2026?",
      acceptedAnswer: { "@type": "Answer", text: "The average software engineer salary in India in 2026 ranges from ₹4–8 LPA for freshers, ₹10–20 LPA for 1–3 years experience, ₹22–38 LPA for mid-level (3–5 years), and ₹40–70 LPA for senior engineers. Salaries vary significantly by city — Bangalore and Hyderabad pay 20–30% more than other cities." },
    },
    {
      "@type": "Question",
      name: "What is a good salary for a software engineer in Bangalore?",
      acceptedAnswer: { "@type": "Answer", text: "A good salary for a software engineer in Bangalore depends on experience: ₹6–10 LPA is decent for freshers, ₹18–30 LPA is competitive for mid-level, and ₹40–70 LPA is strong for senior roles. Product companies and startups like Zepto, Razorpay, and CRED typically pay 30–50% more than IT services companies." },
    },
    {
      "@type": "Question",
      name: "How do I know if I am underpaid as a software engineer in India?",
      acceptedAnswer: { "@type": "Answer", text: "Compare your CTC against market benchmarks for your role, experience, city, and company type. Use CareerLens salary calculator to see the range for your specific profile. If you are earning more than 20% below the median for similar roles, you are likely underpaid and should consider negotiating or switching." },
    },
    {
      "@type": "Question",
      name: "What is the salary difference between TCS and a startup like Zepto?",
      acceptedAnswer: { "@type": "Answer", text: "At the same experience level, startups like Zepto or Razorpay typically pay 40–80% more than TCS or Infosys. A TCS SDE-2 might earn ₹12–16 LPA while a Zepto SDE-2 earns ₹35–50 LPA. However, startups come with higher risk, variable pay, and ESOPs." },
    },
  ],
};

export default function SalaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <App defaultTab="salary" />
    </>
  );
}
