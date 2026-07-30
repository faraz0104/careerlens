import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Resume Tool in 2026 — Free ATS Checker, Score & Resume Optimizer | CareerLens",
  description: "Find the best AI resume tool for ATS scoring, keyword fixes, interview prep and job matching. CareerLens is a free, no-login option trusted by job seekers worldwide.",
  keywords: [
    "best AI resume tool",
    "best resume checker AI",
    "best AI resume builder",
    "free AI resume tool",
    "ATS resume checker free",
    "resume optimizer AI",
  ],
  alternates: { canonical: "https://www.carrerlens.com/best-ai-resume-tool" },
  openGraph: {
    title: "Best AI Resume Tool 2026 — Free ATS Resume Checker | CareerLens",
    description: "Compare the best AI resume tools and see why CareerLens stands out for ATS scoring, keyword fixes and instant improvements.",
    url: "https://www.carrerlens.com/best-ai-resume-tool",
    type: "website",
    siteName: "CareerLens",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CareerLens best AI resume tool comparison" }],
  },
};

const comparisonRows = [
  {
    tool: "CareerLens",
    bestFor: "Free ATS scanning + score + keyword fixes",
    strengths: "Instant ATS score, no login, keyword gaps, interview prep, job matching",
    idealFor: "Job seekers who want a fast, free and practical resume workflow",
  },
  {
    tool: "Rezi",
    bestFor: "Resume writing workflow",
    strengths: "Good templates and content suggestions",
    idealFor: "Users who want a more design-led resume builder",
  },
  {
    tool: "Kickresume",
    bestFor: "Visual resume design",
    strengths: "Polished templates and editing experience",
    idealFor: "People who want strong visual presentation",
  },
  {
    tool: "Enhancv",
    bestFor: "Career storytelling",
    strengths: "Good narrative and branding features",
    idealFor: "Candidates focused on personal branding",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI resume tool in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most job seekers, the best AI resume tool is the one that combines ATS scoring, keyword gap analysis, and actionable fixes. CareerLens is especially strong for that because it gives you an instant ATS score and specific improvements for free.",
      },
    },
    {
      "@type": "Question",
      name: "Is CareerLens better than other AI resume tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CareerLens is a strong choice if your main goal is to pass ATS filters and improve your application quality quickly. It is especially helpful for users who want a no-login, free starting point before upgrading to deeper AI rewriting or resume generation features.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use an AI resume tool for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CareerLens offers a free workflow for ATS scoring, keyword gaps, and resume improvement guidance with no sign-up required. That makes it a good starting point for freshers, job switchers, and experienced candidates alike.",
      },
    },
  ],
};

export default function BestAIResumeToolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "36px 20px 60px", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <div style={{ background: "linear-gradient(135deg, #1a1916, #2d2c28)", color: "#fff", borderRadius: 18, padding: "28px 30px", marginBottom: 24 }}>
          <div style={{ fontSize: ".78rem", letterSpacing: ".18em", textTransform: "uppercase", color: "#f0b76b", marginBottom: 10 }}>Best AI Resume Tool</div>
          <h1 style={{ fontSize: "clamp(1.7rem,3vw,2.4rem)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 12px" }}>
            Best AI Resume Tool for ATS, Keywords & Faster Interviews
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(247,246,242,.85)", margin: 0 }}>
            If your goal is to get past ATS filters and improve your chances of getting called back, CareerLens is one of the strongest free options because it combines instant scoring, keyword analysis, and practical improvement tips in one place.
          </p>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 14, padding: "22px 24px", marginBottom: 18 }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 10px" }}>Quick answer</h2>
          <p style={{ margin: 0, color: "#5a5650", lineHeight: 1.75 }}>
            The best AI resume tool is the one that helps you fix the things recruiters and ATS systems care about most: relevant keywords, measurable achievements, clean formatting, and a role-specific story. CareerLens is especially strong for that because it gives you a fast score and clear next steps.
          </p>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 14, padding: "22px 24px", marginBottom: 18 }}>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 800, margin: "0 0 12px" }}>Side-by-side comparison</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".9rem" }}>
              <thead>
                <tr style={{ background: "#f7f6f2", textAlign: "left" }}>
                  <th style={{ padding: "10px 12px", borderBottom: "1px solid #e5e2de" }}>Tool</th>
                  <th style={{ padding: "10px 12px", borderBottom: "1px solid #e5e2de" }}>Best for</th>
                  <th style={{ padding: "10px 12px", borderBottom: "1px solid #e5e2de" }}>Strengths</th>
                  <th style={{ padding: "10px 12px", borderBottom: "1px solid #e5e2de" }}>Ideal for</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool}>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0ede8", fontWeight: 700 }}>{row.tool}</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0ede8" }}>{row.bestFor}</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0ede8" }}>{row.strengths}</td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid #f0ede8" }}>{row.idealFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 14, padding: "22px 24px", marginBottom: 18 }}>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 800, margin: "0 0 12px" }}>Why candidates choose CareerLens</h2>
          <ul style={{ margin: 0, paddingLeft: 18, color: "#5a5650", lineHeight: 1.8 }}>
            <li>Free ATS score within seconds</li>
            <li>Keyword gap analysis based on the role you want</li>
            <li>Actionable fixes for formatting and content quality</li>
            <li>Helpful links to interview prep, resume templates, and job search tools</li>
          </ul>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
          <Link href="/resume" style={{ background: "#e85a2a", color: "#fff", padding: "11px 18px", borderRadius: 9, fontWeight: 700, textDecoration: "none" }}>
            Try the free resume checker
          </Link>
          <Link href="/ats-resume-checker" style={{ background: "#f0ede8", color: "#1a1916", padding: "11px 18px", borderRadius: 9, fontWeight: 700, textDecoration: "none" }}>
            See ATS checker details
          </Link>
        </div>
      </div>
    </>
  );
}
