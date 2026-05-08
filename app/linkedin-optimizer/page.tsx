import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free LinkedIn Profile Optimizer India – More Recruiter Views in 2024",
  description:
    "Optimize your LinkedIn About section with AI to rank higher in recruiter searches. Get more profile views, more connection requests, and more job interviews. Free for Indian professionals.",
  keywords: [
    "LinkedIn profile optimizer India",
    "LinkedIn about section generator India",
    "LinkedIn bio optimizer India",
    "how to optimize LinkedIn profile India",
    "LinkedIn profile tips India 2024",
    "LinkedIn for software engineers India",
    "LinkedIn recruiter search optimization India",
    "improve LinkedIn profile India",
    "LinkedIn headline generator India",
    "LinkedIn keywords for IT professionals India",
    "LinkedIn profile for freshers India",
  ],
  alternates: {
    canonical: "https://carrerlens.com/linkedin-optimizer",
  },
  openGraph: {
    title: "Free LinkedIn Profile Optimizer India – More Recruiter Views",
    description:
      "AI rewrites your LinkedIn About section with recruiter-search keywords so you get found by the right people. Free to try.",
    url: "https://carrerlens.com/linkedin-optimizer",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free LinkedIn Profile Optimizer India",
    description:
      "Get more recruiter views. AI rewrites your LinkedIn bio with the right keywords for your role and industry.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens LinkedIn Profile Optimizer",
  url: "https://carrerlens.com/linkedin-optimizer",
  description:
    "AI-powered LinkedIn profile optimizer that rewrites your About section to rank higher in recruiter searches in India",
  applicationCategory: "BusinessApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  featureList: [
    "LinkedIn About section rewriter",
    "ATS and recruiter keyword optimization",
    "Role-specific keyword insertion",
    "Under 220 words (LinkedIn limit)",
    "One-click copy to LinkedIn",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I optimize my LinkedIn profile to get more recruiter messages in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To get more recruiter messages on LinkedIn India: (1) Use keywords in your headline that recruiters search — e.g. 'Full Stack Developer | React | Node.js | Bangalore' instead of just 'Software Engineer'. (2) Write an About section with 3–5 skills in the first 2 lines. (3) Add your current city. (4) Set 'Open to Work' to recruiter-only. CareerLens AI rewrites your About section automatically with the right keywords.",
      },
    },
    {
      "@type": "Question",
      name: "What should I write in LinkedIn About section as a fresher in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a fresher in India, your LinkedIn About should include: your degree and specialization, your strongest technical skills (React, Python, Java etc.), your final year project and what problem it solved, the type of roles you are looking for, and your location. Keep it under 200 words and start with a strong first line that shows up before 'see more'.",
      },
    },
    {
      "@type": "Question",
      name: "Which keywords should software engineers use on LinkedIn India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indian recruiters search for specific skills, not job titles. Add keywords like: your programming languages (Python, Java, JavaScript), frameworks (React, Spring Boot, Django), cloud (AWS, Azure, GCP), databases (MySQL, MongoDB, PostgreSQL), and methodologies (Agile, DevOps, Microservices). Also add your city name — Bangalore, Mumbai, Hyderabad, Pune, Chennai, Delhi.",
      },
    },
  ],
};

export default function LinkedInOptimizerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <App defaultTab="resume" />
    </>
  );
}
