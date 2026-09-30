import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ATS Resume Checker – Free Resume Screening Review",
  description:
    "Use a free ATS resume checker to review formatting, keyword coverage, and role fit before applications are sent. Improve resume screening odds with actionable feedback.",
  alternates: {
    canonical: "https://www.carrerlens.com/tools/ats-resume-checker",
  },
};

export default function ToolATSPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8f7f4", padding: "48px 1.5rem 80px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(79,70,229,0.25)", background: "rgba(79,70,229,0.08)", color: "#4338ca", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
          ATS checker
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.06em", margin: "18px 0 14px" }}>
          ATS Resume Checker for easier job screening
        </h1>
        <p style={{ color: "#4b5563", fontSize: "1rem", lineHeight: 1.7, maxWidth: 760, margin: "0 0 26px" }}>
          Many candidate resumes are filtered before a recruiter sees them. ATS scoring helps spot issues like weak structure, missing keywords, incompatible formats, and role mismatch.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 30 }}>
          <Link href="/resume" style={{ background: "#111827", color: "#fff", textDecoration: "none", padding: "12px 18px", borderRadius: 12, fontWeight: 700 }}>Check Resume</Link>
          <Link href="/ai-resume-checker" style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", color: "#111827", textDecoration: "none", padding: "12px 18px", borderRadius: 12, fontWeight: 700 }}>AI resume checker</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {[
            "Keyword coverage for the target job",
            "Section structure and readability",
            "Skill misalignment and missing role terms",
            "Formatting issues that can hurt parsing",
          ].map((item) => (
            <div key={item} style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 16, padding: 22 }}>
              <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#4338ca" }}>Review</div>
              <p style={{ margin: "12px 0 0", color: "#4b5563", lineHeight: 1.7 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
