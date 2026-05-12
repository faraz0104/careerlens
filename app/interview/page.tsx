import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "AI Interview Prep India 2026 — Company-Specific Questions | CareerLens",
  description:
    "Crack interviews at Google, Amazon, TCS, Infosys, Flipkart & 20+ companies. AI generates company-specific behavioral, technical & coding questions based on your resume. Free to try.",
  keywords: [
    "interview preparation India 2026",
    "Google interview questions India",
    "Amazon interview questions India",
    "TCS interview questions 2026",
    "Infosys interview preparation 2026",
    "company specific interview questions India",
    "AI interview prep India",
    "software engineer interview questions India",
    "behavioral interview questions India",
    "FAANG interview prep India",
    "how to crack TCS interview",
    "how to prepare for Amazon interview India",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/interview",
  },
  openGraph: {
    title: "AI Interview Prep India 2026 — Company-Specific Questions | CareerLens",
    description:
      "AI generates company-specific interview questions for Google, Amazon, TCS, Infosys & 20+ companies based on your resume. Behavioral, technical & coding rounds covered.",
    url: "https://www.carrerlens.com/interview",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are common Google interview questions in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google interviews in India typically cover system design, data structures & algorithms, behavioral questions (STAR format), and coding problems. Common questions include designing distributed systems, array/graph problems, and leadership principles.",
      },
    },
    {
      "@type": "Question",
      name: "How to prepare for TCS interview?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TCS interviews typically include aptitude tests, technical rounds covering Java/Python/C++, HR round with behavioral questions, and sometimes a technical interview on your final year project. Focus on data structures, OOPs concepts, and DBMS.",
      },
    },
    {
      "@type": "Question",
      name: "What are common Amazon interview questions in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amazon interviews follow the Leadership Principles framework. Expect 14 leadership principle questions, system design rounds, coding problems on LeetCode medium/hard, and bar raiser interviews. Practice STAR method answers.",
      },
    },
    {
      "@type": "Question",
      name: "How many interview rounds does Infosys have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Infosys typically has 3 rounds: an online assessment (aptitude + coding), a technical interview, and an HR interview. Focus on programming fundamentals, data structures, and verbal communication.",
      },
    },
  ],
};

export default function InterviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <App defaultTab="interview" />
    </>
  );
}
