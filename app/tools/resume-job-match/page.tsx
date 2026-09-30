import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume Job Match – Compare Resume vs Job Description",
  description:
    "Measure resume-to-job alignment, find missing keywords, and identify the skills or experience gaps preventing a stronger role match.",
  alternates: {
    canonical: "https://www.carrerlens.com/tools/resume-job-match",
  },
};

export default function ToolResumeJobMatchPage() {
  return (
    <main style={{ background: "#f8f7f4", minHeight: "100vh", padding: "48px 1.5rem 80px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(79,70,229,0.25)", background: "rgba(79,70,229,0.08)", color: "#4338ca", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
          Role fit
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.06em", margin: "18px 0 14px" }}>
          Resume vs Job Description Match
        </h1>
        <p style={{ color: "#4b5563", fontSize: "1rem", lineHeight: 1.7, maxWidth: 760, margin: "0 0 26px" }}>
          Compare your resume to a target job and understand which skills, tools, years of experience, or keywords are missing. This gives you a clearer roadmap to improve fit without rewriting everything from scratch.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 30 }}>
          <Link href="/resume" style={{ background: "#4338ca", color: "#fff", textDecoration: "none", padding: "12px 18px", borderRadius: 12, fontWeight: 700 }}>Match My Resume</Link>
          <Link href="/tools/resume-keyword-checker" style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", color: "#111827", textDecoration: "none", padding: "12px 18px", borderRadius: 12, fontWeight: 700 }}>Keyword checker</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[
            "Match percentage against a target job description",
            "Role-specific skill present vs missing",
            "Actionable edits to improve resume alignment",
            "Better shortlist odds with more relevant wording",
          ].map((item) => (
            <div key={item} style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 16, padding: 22 }}>
              <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#4338ca" }}>Focus</div>
              <p style={{ margin: "12px 0 0", color: "#4b5563", lineHeight: 1.7 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
