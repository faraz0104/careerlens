import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Resume ATS Score Checker India 2026 — Check Your Score | CareerLens",
  description: "Get your resume's ATS score instantly. Find out why your resume is being filtered out and what keywords are missing. Free ATS score checker for Indian job seekers.",
  keywords: ["resume ATS score","ATS score resume India","check ATS score resume","resume ATS score checker free","ATS score checker India 2026","how to check ATS score resume"],
  alternates: { canonical: "https://www.carrerlens.com/resume-ats-score" },
  openGraph: {
    title: "Resume ATS Score Checker India 2026 — Free | CareerLens",
    description: "Find your resume's ATS score in 30 seconds. See what's failing and get instant fixes.",
    url: "https://www.carrerlens.com/resume-ats-score",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Resume ATS Score Checker",
  url: "https://www.carrerlens.com/resume-ats-score",
  description: "Free resume ATS score checker — find out your ATS score out of 100 and why your resume is being filtered out",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/resume-score-checker", label: "Resume Score" },
  { href: "/resume-keywords-scanner", label: "Keywords Scanner" },
  { href: "/resume-optimization-tool", label: "Resume Optimizer" },
  { href: "/fresher-resume-checker", label: "Fresher Resume" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a good ATS score for a resume?", acceptedAnswer: { "@type": "Answer", text: "A good ATS score is 75 or above out of 100. Scores of 80–90 mean your resume is well-optimised and unlikely to be filtered. Scores below 60 indicate significant issues — missing keywords, formatting problems, or weak content — that are causing your resume to be automatically rejected before reaching recruiters." } },
    { "@type": "Question", name: "How do companies use ATS in India?", acceptedAnswer: { "@type": "Answer", text: "Most Indian companies with 200+ employees use ATS software (Workday, Greenhouse, Lever, iCIMS, or custom systems like Naukri's recruiter portal). The ATS automatically scans resumes for keywords matching the job description, ranks candidates, and filters out those below a threshold score. Recruiter typically never sees resumes that fail ATS." } },
    { "@type": "Question", name: "Why is my ATS score low?", acceptedAnswer: { "@type": "Answer", text: "Common reasons for a low ATS score: not having role-specific keywords (check the exact job description), using a two-column or table-based layout that ATS can't parse properly, missing or non-standard section headers, too few measurable achievements, and using images or graphics for text content." } },
  ],
};

export default function ResumeATSScorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Resume ATS Score Checker
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Find out your resume's ATS score in 30 seconds. See exactly which keywords are missing, what formatting issues are hurting you, and how to fix it.
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
