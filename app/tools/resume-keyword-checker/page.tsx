import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume Keyword Checker – Find Missing Role Keywords",
  description:
    "Review the main skill keywords on your resume and compare them with a target role to improve ATS fit and recruiter relevance.",
  alternates: {
    canonical: "https://www.carrerlens.com/tools/resume-keyword-checker",
  },
};

export default function ToolResumeKeywordCheckerPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8f7f4", padding: "48px 1.5rem 80px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(79,70,229,0.25)", background: "rgba(79,70,229,0.08)", color: "#4338ca", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
          Keywords
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.06em", margin: "18px 0 14px" }}>
          Resume Keyword Checker
        </h1>
        <p style={{ color: "#4b5563", fontSize: "1rem", lineHeight: 1.7, maxWidth: 760, margin: "0 0 26px" }}>
          Strong resumes usually include the words and tools recruiters use for filtering. This checker helps surface the keywords and technical phrases that are missing from your resume compared with a target job description.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 30 }}>
          <Link href="/resume" style={{ background: "#111827", color: "#fff", textDecoration: "none", padding: "12px 18px", borderRadius: 12, fontWeight: 700 }}>Review Keywords</Link>
          <Link href="/tools/resume-job-match" style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", color: "#111827", textDecoration: "none", padding: "12px 18px", borderRadius: 12, fontWeight: 700 }}>Job match</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[
            "Technology keywords and frameworks",
            "Role-specific terms and skills",
            "Weak match areas in your resume",
            "Clearer wording for ATS and recruiters",
          ].map((item) => (
            <div key={item} style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 16, padding: 22 }}>
              <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#4338ca" }}>Signal</div>
              <p style={{ margin: "12px 0 0", color: "#4b5563", lineHeight: 1.7 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
