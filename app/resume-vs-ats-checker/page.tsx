import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume Score Checker vs ATS Checker — Which One Do You Need? | CareerLens",
  description: "Understand the difference between a resume score checker and an ATS checker, and learn which one helps you improve your job applications faster.",
  keywords: ["resume score checker vs ATS checker","ATS checker vs resume score checker","resume score vs ATS score","resume evaluation tool"],
  alternates: { canonical: "https://www.carrerlens.com/resume-vs-ats-checker" },
  openGraph: {
    title: "Resume Score Checker vs ATS Checker | CareerLens",
    description: "Learn the difference between score-based and ATS-based resume analysis so you can target the right fixes.",
    url: "https://www.carrerlens.com/resume-vs-ats-checker",
    type: "website",
    siteName: "CareerLens",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CareerLens resume score checker vs ATS checker" }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a resume score checker and an ATS checker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A resume score checker gives you an overall quality score, usually across ATS compatibility, skills match, formatting, and content clarity. An ATS checker focuses more directly on whether your resume will survive automated screening systems used by employers.",
      },
    },
    {
      "@type": "Question",
      name: "Which one should I use first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with an ATS checker if your main goal is to pass automated filters. Use a resume score checker if you want a broader view of how strong your resume is overall and what needs improvement.",
      },
    },
  ],
};

export default function ResumeVsATSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "36px 20px 60px", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <div style={{ background: "#1a1916", color: "#fff", borderRadius: 16, padding: "24px 28px", marginBottom: 20 }}>
          <h1 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 900, margin: "0 0 10px" }}>Resume Score Checker vs ATS Checker</h1>
          <p style={{ margin: 0, lineHeight: 1.7, color: "rgba(247,246,242,.82)" }}>
            These tools overlap, but they answer slightly different questions. One helps you understand overall strength, while the other helps you survive automated screening.
          </p>
        </div>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 14, padding: "20px 22px" }}>
            <h2 style={{ fontSize: "1.02rem", fontWeight: 800, margin: "0 0 8px" }}>Resume score checker</h2>
            <p style={{ margin: 0, color: "#5a5650", lineHeight: 1.75 }}>
              Gives you a broad score based on ATS compatibility, skills match, relevance, content quality, and presentation.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 14, padding: "20px 22px" }}>
            <h2 style={{ fontSize: "1.02rem", fontWeight: 800, margin: "0 0 8px" }}>ATS checker</h2>
            <p style={{ margin: 0, color: "#5a5650", lineHeight: 1.75 }}>
              Focuses on parser-friendly formatting, keyword match, role alignment, and the likelihood of passing automated screening systems.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 14, padding: "20px 22px", marginTop: 16 }}>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 800, margin: "0 0 12px" }}>Which should you use?</h2>
          <p style={{ margin: "0 0 10px", color: "#5a5650", lineHeight: 1.8 }}>
            If you are applying to large companies and want to maximize your chances of getting through the first filter, use an ATS checker first. If you want an overall health check for your resume quality, use a score checker.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link href="/ats-resume-checker" style={{ background: "#e85a2a", color: "#fff", padding: "11px 18px", borderRadius: 9, fontWeight: 700, textDecoration: "none" }}>
              Try ATS checker
            </Link>
            <Link href="/resume-score-checker" style={{ background: "#f0ede8", color: "#1a1916", padding: "11px 18px", borderRadius: 9, fontWeight: 700, textDecoration: "none" }}>
              Try score checker
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
