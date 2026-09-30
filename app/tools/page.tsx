import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume and Career Tools – ATS Checker, Job Match, Keyword Scanner",
  description:
    "Explore CareerLens resume tools, ATS checker, job description match, keyword analyzer, and prep tools built to improve job-search outcomes.",
  alternates: {
    canonical: "https://www.carrerlens.com/tools",
  },
};

const toolCards = [
  {
    href: "/tools/ai-resume-checker",
    title: "AI Resume Checker",
    description: "Get resume analysis, ATS score, skills gap review, and personalized improvement suggestions.",
  },
  {
    href: "/tools/ats-resume-checker",
    title: "ATS Resume Checker",
    description: "Test resume structure, formatting, and keyword fit for job tracker systems used by recruiters.",
  },
  {
    href: "/tools/resume-job-match",
    title: "Resume vs Job Match",
    description: "Compare your resume with a role description and identify missing keywords and skill gaps.",
  },
  {
    href: "/tools/resume-keyword-checker",
    title: "Resume Keyword Checker",
    description: "See which role-specific terms are missing from your current resume draft.",
  },
  {
    href: "/resume",
    title: "Resume Analyzer",
    description: "Use the main resume tool to review the strongest opportunities for improvement.",
  },
  {
    href: "/interview-questions",
    title: "Interview Questions",
    description: "Practice questions for React, JavaScript, DSA, DBMS, computer networks, and more.",
  },
  {
    href: "/career-comparison",
    title: "Career Comparison",
    description: "Compare software engineering, product management, and data science paths to pick the right next move.",
  },
  {
    href: "/salary",
    title: "Salary Insights",
    description: "Check salary benchmarks by role, company type, and Indian city before negotiating or switching jobs.",
  },
];

export default function ToolsIndexPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8f7f4", padding: "48px 1.5rem 80px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 28px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(79,70,229,0.25)", background: "rgba(79,70,229,0.08)", color: "#4338ca", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
            Career tools
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.06em", margin: "18px 0 12px" }}>
            Resume tools for better ATS scores and job matches
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#4b5563", margin: 0 }}>
            Use the CareerLens resume suite to check ATS fit, identify missing skills, compare against job descriptions, and improve the resume content that recruiters actually look for.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {toolCards.map((tool) => (
            <Link key={tool.href} href={tool.href} style={{ display: "block", background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 16, padding: 22, textDecoration: "none", color: "#111827", boxShadow: "0 8px 18px rgba(17,24,39,0.04)" }}>
              <div style={{ fontSize: ".72rem", fontWeight: 800, color: "#4338ca", letterSpacing: ".08em", textTransform: "uppercase" }}>Tool</div>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.04em", margin: "12px 0 8px" }}>{tool.title}</div>
              <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.65 }}>{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
