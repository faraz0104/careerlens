import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Interview Questions India – Google, Amazon, TCS, Infosys, Wipro & More",
  description:
    "Company-specific interview questions for Google, Amazon, Microsoft, TCS, Infosys, Wipro, Flipkart, Swiggy and 20+ top companies in India. AI-generated behavioral, technical and coding questions.",
  keywords: [
    "interview questions India",
    "Google interview questions India",
    "Amazon interview questions India",
    "Microsoft interview questions",
    "TCS interview questions 2024",
    "Infosys interview preparation",
    "Wipro interview questions",
    "Flipkart interview questions",
    "Swiggy Zomato interview prep",
    "software engineer interview India",
    "behavioral interview questions India",
    "technical interview questions India",
    "coding interview preparation India",
    "FAANG interview India",
  ],
  alternates: {
    canonical: "https://carrerlens.com/interview",
  },
  openGraph: {
    title: "Interview Questions India – Google, Amazon, TCS, Infosys & 20+ Companies",
    description:
      "Prepare for interviews at top Indian and global companies with AI-generated company-specific questions covering behavioral, technical, and coding rounds.",
    url: "https://carrerlens.com/interview",
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
