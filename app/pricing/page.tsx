import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "CareerLens Pro Pricing — ₹299/mo for Unlimited AI Resume & Job Matching India",
  description:
    "Unlock everything on CareerLens for ₹299/month. Unlimited job matches, all interview prep questions, full salary insights, AI resume tailoring, and career roadmap. Cancel anytime.",
  keywords: [
    "CareerLens Pro pricing India",
    "AI career tool subscription India",
    "resume checker pro India",
    "job matching tool price India",
    "career intelligence tool India 2026",
    "AI interview prep tool price India",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/pricing",
  },
  openGraph: {
    title: "CareerLens Pro — ₹299/mo for Full AI Career Intelligence India",
    description:
      "Unlimited job matches, all interview questions, full salary insights, AI resume tailoring and career roadmap. ₹299/month. Cancel anytime.",
    url: "https://www.carrerlens.com/pricing",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is CareerLens free to use?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, CareerLens has a free plan that includes resume ATS scanning, basic job matching, and interview questions. The Pro plan (₹299/month) unlocks unlimited scans, AI cover letter generation, resume tailoring per job description, salary negotiation scripts, and all interview questions." },
    },
    {
      "@type": "Question",
      name: "What does CareerLens Pro include?",
      acceptedAnswer: { "@type": "Answer", text: "CareerLens Pro includes: unlimited resume scans, AI cover letter for any job, resume tailored to job description, cold email to hiring manager, salary negotiation script, 15+ personalised job matches with exact match %, all company interview questions with AI model answers, and a personalised career roadmap." },
    },
    {
      "@type": "Question",
      name: "How much does CareerLens cost?",
      acceptedAnswer: { "@type": "Answer", text: "CareerLens Pro costs ₹299 per month or ₹1,999 per year (save 44%). There is no free trial but you can use the free plan indefinitely with basic features." },
    },
    {
      "@type": "Question",
      name: "Can I cancel CareerLens Pro anytime?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, you can cancel CareerLens Pro at any time. There are no lock-in contracts or hidden fees." },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <App defaultTab="pricing" />
    </>
  );
}
