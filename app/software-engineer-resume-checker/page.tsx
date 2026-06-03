import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Software Engineer Resume Checker India 2026 | CareerLens",
  description: "Check your software engineer resume for ATS keywords, missing skills, and formatting issues. See your score and get specific fixes for SDE roles at Google, Amazon, Flipkart and more.",
  keywords: ["software engineer resume checker","SDE resume checker India","software developer resume review","software engineer resume India 2026","React developer resume checker","Python developer resume review India"],
  alternates: { canonical: "https://www.carrerlens.com/software-engineer-resume-checker" },
  openGraph: {
    title: "Software Engineer Resume Checker India 2026 | CareerLens",
    description: "ATS score, missing keywords and skill gaps for your SDE resume. Tailored for Google, Amazon, Flipkart and top Indian startups.",
    url: "https://www.carrerlens.com/software-engineer-resume-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What should a software engineer resume include in India 2026?", acceptedAnswer: { "@type": "Answer", text: "A strong software engineer resume in India 2026 should include: your tech stack with proficiency levels, quantified project impact (improved performance by X%, handled Y requests/sec), DSA and system design skills for product companies, cloud experience (AWS/GCP/Azure), GitHub profile or portfolio link, and education. Keep it to 1 page for 0–3 years experience, 2 pages for senior roles." } },
    { "@type": "Question", name: "How do I make my software engineer resume pass ATS at Indian companies?", acceptedAnswer: { "@type": "Answer", text: "For ATS at Indian companies (Flipkart, Zepto, Razorpay, TCS etc.): include technology keywords exactly as they appear in job descriptions (React not ReactJS, not React.js — check the JD), use a single-column format, list skills explicitly in a Skills section, use standard section headers, and include measurable achievements. CareerLens checks all of these." } },
    { "@type": "Question", name: "What is the ATS score for a software engineer resume?", acceptedAnswer: { "@type": "Answer", text: "The average ATS score for software engineer resumes is 55–65 out of 100. A score above 75 means your resume is well-optimized and likely to pass automated screening. Most freshers score 40–55 due to missing tech keywords and generic descriptions. Fix the issues CareerLens flags to get above 75." } },
  ],
};

export default function SoftwareEngineerResumeCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Software Engineer Resume Checker
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 6px" }}>
          Get your SDE resume scored against what Google, Amazon, Flipkart and top Indian startups actually look for. See your ATS score, missing tech keywords and skill gaps. Free, 30 seconds.
        </p>
      </div>
      <App defaultTab="resume" />
    </>
  );
}
