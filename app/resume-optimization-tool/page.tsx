import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Resume Optimization Tool India 2026 — Fix & Improve Your Resume | CareerLens",
  description: "Optimize your resume for ATS and recruiters. Get your score, keyword gaps, formatting fixes and AI-generated improvements. Free resume optimization tool for Indian job seekers.",
  keywords: ["resume optimization tool","resume optimizer India","optimize resume for ATS India","resume improvement tool India","best resume optimizer India 2026","AI resume optimizer"],
  alternates: { canonical: "https://www.carrerlens.com/resume-optimization-tool" },
  openGraph: {
    title: "Free Resume Optimization Tool India 2026 | CareerLens",
    description: "Optimize your resume for ATS — keywords, formatting, content. Free, instant, no login.",
    url: "https://www.carrerlens.com/resume-optimization-tool",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Resume Optimization Tool",
  url: "https://www.carrerlens.com/resume-optimization-tool",
  description: "Free AI resume optimizer for ATS — keywords, formatting and content improvements for Indian job seekers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/resume-keywords-scanner", label: "Keywords Scanner" },
  { href: "/free-resume-review", label: "Free Review" },
  { href: "/software-engineer-resume-checker", label: "SDE Resume" },
  { href: "/fresher-resume-checker", label: "Fresher Resume" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I optimize my resume for ATS in India?", acceptedAnswer: { "@type": "Answer", text: "To optimize your resume for ATS in India: use a single-column format, include role-specific keywords (check the job description), use standard section headers (Experience, Education, Skills), replace all weak verbs with strong action verbs, add measurable results to every bullet point, and keep it to 1–2 pages. CareerLens checks all of these automatically." } },
    { "@type": "Question", name: "What is the best resume format for ATS in India 2026?", acceptedAnswer: { "@type": "Answer", text: "The best ATS-friendly resume format is a clean single-column layout in Word or PDF. Avoid tables, graphics, headers/footers, and text boxes. Use standard fonts (Calibri, Arial, Times New Roman), size 10–12pt, and clear section headers. Most Indian companies use Workday, Greenhouse or iCIMS — all prefer single-column formats." } },
    { "@type": "Question", name: "How long does resume optimization take?", acceptedAnswer: { "@type": "Answer", text: "CareerLens gives you your optimization report in under 30 seconds. Fixing the issues typically takes 30–60 minutes depending on how many changes are needed. Pro users can generate an AI-optimized version of their entire resume in one click." } },
  ],
};

export default function ResumeOptimizationToolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Resume Optimization Tool
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Optimize your resume for ATS and recruiters in 30 seconds. Get your score, see exactly what's wrong, and fix it with AI-powered suggestions.
        </p>
        <div style={{ margin: "0 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>Related tools: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#c26b3a", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="resume" />
    </>
  );
}
