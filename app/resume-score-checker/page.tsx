import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Resume Score Checker India 2026 — Get Your Score in 30 Seconds | CareerLens",
  description: "Check your resume score out of 100. See your ATS compatibility, skills match, content quality and formatting score. Free, instant, no login needed.",
  keywords: ["resume score checker","resume score checker free","check resume score India","resume rating checker","resume grade checker India 2026"],
  alternates: { canonical: "https://www.carrerlens.com/resume-score-checker" },
  openGraph: {
    title: "Free Resume Score Checker India — Score Out of 100 | CareerLens",
    description: "Get your resume scored out of 100 across ATS compatibility, skills, content and formatting. Instant, free, no login.",
    url: "https://www.carrerlens.com/resume-score-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Resume Score Checker",
  url: "https://www.carrerlens.com/resume-score-checker",
  description: "Free resume score checker — get your resume scored out of 100 across ATS, skills, content and formatting",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/free-resume-review", label: "Free Review" },
  { href: "/resume-keywords-scanner", label: "Keywords Scanner" },
  { href: "/resume-ats-score", label: "ATS Score" },
  { href: "/fresher-resume-checker", label: "Fresher Resume" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How is the resume score calculated?", acceptedAnswer: { "@type": "Answer", text: "CareerLens scores your resume out of 100 across 4 dimensions: ATS Compatibility (keyword matching, format), Skills Match (relevant skills for your role), Content Quality (measurable achievements, strong verbs), and Formatting (layout, length, readability). Most real-world resumes score between 40 and 65." } },
    { "@type": "Question", name: "What is a good resume score?", acceptedAnswer: { "@type": "Answer", text: "A score of 75 or above is strong and likely to pass ATS filters and impress recruiters. 55–74 is average — you'll get some callbacks but miss many. Below 55 means significant issues that are actively costing you interviews." } },
    { "@type": "Question", name: "How do I improve my resume score?", acceptedAnswer: { "@type": "Answer", text: "The fastest ways to improve: add role-specific keywords, replace weak verbs (responsible for, helped with) with strong ones (built, reduced, increased), add measurable results to at least 60% of bullets, ensure clean single-column formatting." } },
  ],
};

export default function ResumeScoreCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Resume Score Checker
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Get your resume scored out of 100 — ATS compatibility, skills match, content quality and formatting. See exactly what's hurting your score and how to fix it.
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
