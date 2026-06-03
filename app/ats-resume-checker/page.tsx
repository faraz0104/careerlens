import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free ATS Resume Checker India 2026 — Pass Any ATS Instantly | CareerLens",
  description: "Check if your resume passes ATS filters. Instant ATS score, missing keywords, formatting issues and fixes. Free, no login, 30 seconds. Used by 50,000+ Indian job seekers.",
  keywords: ["ATS resume checker","free ATS checker India","ATS resume scanner India","ATS score checker free","resume ATS check India 2026","beat ATS resume India"],
  alternates: { canonical: "https://www.carrerlens.com/ats-resume-checker" },
  openGraph: {
    title: "Free ATS Resume Checker India — Pass Any ATS | CareerLens",
    description: "Instant ATS score. See exactly which keywords you're missing and why your resume gets filtered out. Free.",
    url: "https://www.carrerlens.com/ats-resume-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is an ATS resume checker?", acceptedAnswer: { "@type": "Answer", text: "An ATS resume checker scans your resume the same way Applicant Tracking Systems (ATS) used by companies do. It checks if your resume has the right keywords, correct formatting, and proper section headers so it isn't automatically rejected before a human reads it." } },
    { "@type": "Question", name: "Why does my resume fail ATS?", acceptedAnswer: { "@type": "Answer", text: "Common reasons resumes fail ATS: missing role-specific keywords, two-column layouts that ATS can't parse, tables or graphics, generic section headers, no measurable achievements. CareerLens identifies exactly which issue is hurting your score." } },
    { "@type": "Question", name: "Is this ATS checker really free?", acceptedAnswer: { "@type": "Answer", text: "Yes — CareerLens gives you a full ATS score, missing keywords, and top 3 improvements for free, with no login required. Pro users get deeper analysis and AI resume rewrites." } },
    { "@type": "Question", name: "How accurate is the ATS score?", acceptedAnswer: { "@type": "Answer", text: "CareerLens uses the same logic as major ATS platforms (Workday, Greenhouse, Lever) — keyword matching, format parsing, and section detection. Most users see their callback rate improve after fixing the issues flagged." } },
  ],
};

export default function ATSCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free ATS Resume Checker
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 6px" }}>
          72% of resumes are rejected by ATS before a human ever reads them. Upload yours below — get your ATS score, missing keywords, and exact fixes in 30 seconds. Free, no login.
        </p>
      </div>
      <App defaultTab="resume" />
    </>
  );
}
