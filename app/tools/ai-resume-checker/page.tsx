import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Resume Checker – Free Resume Analysis and ATS Score",
  description:
    "AI resume checker for ATS score, missing keywords, resume quality, and role fit. Use CareerLens to find resume gaps before you apply.",
  alternates: {
    canonical: "https://www.carrerlens.com/tools/ai-resume-checker",
  },
};

export default function ToolAIDesktopPage() {
  return (
    <main style={{ background: "#f8f7f4", minHeight: "100vh", padding: "48px 1.5rem 80px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(79,70,229,0.25)", background: "rgba(79,70,229,0.08)", color: "#4338ca", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
          AI resume analysis
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.06em", margin: "18px 0 14px" }}>
          AI Resume Checker for ATS score and keyword gaps
        </h1>
        <p style={{ color: "#4b5563", fontSize: "1rem", lineHeight: 1.7, maxWidth: 760, margin: "0 0 26px" }}>
          CareerLens reviews your resume for structure, keywords, skills, and relevance to a target role. The score is an estimate used to spot likely ATS or role-fit issues before you apply.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 30 }}>
          <Link href="/resume" style={{ background: "#4338ca", color: "#fff", textDecoration: "none", padding: "12px 18px", borderRadius: 12, fontWeight: 700 }}>Run Resume Analysis</Link>
          <Link href="/ai-resume-checker" style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", color: "#111827", textDecoration: "none", padding: "12px 18px", borderRadius: 12, fontWeight: 700 }}>SEO landing page</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[
            ["ATS score", "See how likely your resume is to pass parsing and screening systems."],
            ["Missing keywords", "Compare the resume against the target job description and role-level vocabulary."],
            ["Skill gaps", "Identify the missing abilities, frameworks, and keywords that weaken fit."],
            ["Action plan", "Prioritise improvements based on impact, clarity, and resume fit."],
          ].map(([title, desc]) => (
            <div key={title} style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 16, padding: 22 }}>
              <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#4338ca" }}>{title}</div>
              <p style={{ margin: "10px 0 0", color: "#4b5563", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
