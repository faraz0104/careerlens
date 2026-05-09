import type { Metadata } from "next";
import Link from "next/link";
import { ALL_TECHS } from "@/lib/interview-data";

export const metadata: Metadata = {
  title: "Interview Questions – Free Study Guide for Every Technology (2025) | CareerLens",
  description: "Free interview questions and answers for React, JavaScript, Java, Python, Node.js, SQL, TypeScript, System Design, DSA, HTML & CSS, and Angular. Crack your next tech interview.",
  alternates: { canonical: "https://www.carrerlens.com/interview-questions" },
  openGraph: {
    title: "Interview Questions – Free Study Guide for Every Technology (2025)",
    description: "Free interview Q&A for React, JavaScript, Java, Python, Node.js, SQL, TypeScript, System Design, DSA, and more. Updated for 2025.",
    url: "https://www.carrerlens.com/interview-questions",
  },
};

const counts: Record<string, number> = {
  react: 25, javascript: 25, java: 20, python: 20, nodejs: 20,
  sql: 20, typescript: 15, "system-design": 16, "data-structures": 20,
  "html-css": 15, angular: 15,
};

export default function InterviewQuestionsIndex() {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f6f2", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* NAV */}
      <nav style={{ background: "#1a1916", padding: "0 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8, color: "#f7f6f2", fontWeight: 800, fontSize: "1rem", letterSpacing: "-.02em" }}>
            <span style={{ background: "#e85a2a", color: "#fff", width: 26, height: 26, borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: ".75rem", fontWeight: 900 }}>C</span>
            CareerLens
          </Link>
          <Link href="/" style={{ color: "rgba(247,246,242,.7)", fontSize: ".82rem", textDecoration: "none" }}>← Back to tools</Link>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ background: "#1a1916", padding: "48px 2rem 56px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: ".72rem", fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#e85a2a", background: "rgba(232,90,42,.15)", border: "1px solid rgba(232,90,42,.3)", padding: "4px 12px", borderRadius: 99, marginBottom: 18 }}>
            ✦ Free for Indian Job Seekers · Updated 2025
          </div>
          <h1 style={{ color: "#f7f6f2", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-.04em", lineHeight: 1.15, margin: "0 0 16px" }}>
            Interview Questions &amp; Answers
          </h1>
          <p style={{ color: "rgba(247,246,242,.7)", fontSize: ".95rem", lineHeight: 1.7, margin: 0 }}>
            Free Q&amp;A for every technology tested in Indian tech interviews — React, JavaScript, Java, Python, SQL, System Design, and more. All pages are searchable on Google.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {ALL_TECHS.map((tech) => (
            <Link
              key={tech.slug}
              href={`/interview-questions/${tech.slug}`}
              className="iq-card-link"
              style={{ textDecoration: "none" }}
            >
              <div className="iq-card" style={{
                background: "#fff", border: "1px solid #e5e2de", borderRadius: 12, padding: "20px 22px",
                transition: "box-shadow .15s, border-color .15s", cursor: "pointer",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: 10 }}>{tech.icon}</div>
                <div style={{ fontWeight: 700, fontSize: ".95rem", color: "#1a1916", marginBottom: 4 }}>{tech.title}</div>
                <div style={{ fontSize: ".78rem", color: "#9a958f", marginBottom: 12 }}>
                  {counts[tech.slug] ?? tech.questions.length} questions · Free
                </div>
                <div style={{ fontSize: ".76rem", color: "#5a5650", lineHeight: 1.5 }}>
                  {tech.intro.slice(0, 80)}...
                </div>
                <div style={{ marginTop: 14, fontSize: ".78rem", color: "#e85a2a", fontWeight: 700 }}>Study now →</div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 64, background: "#1a1916", borderRadius: 14, padding: "32px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <div>
            <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#e85a2a", marginBottom: 8 }}>Pro Tip</div>
            <div style={{ color: "#f7f6f2", fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>Practice with company-specific questions</div>
            <div style={{ color: "rgba(247,246,242,.7)", fontSize: ".85rem" }}>Upload your resume and get interview questions tailored to your target company — Google, Amazon, TCS, and 50+ more.</div>
          </div>
          <Link href="/interview" style={{ display: "inline-block", background: "#e85a2a", color: "#fff", padding: "12px 28px", borderRadius: 10, fontWeight: 700, fontSize: ".9rem", textDecoration: "none", whiteSpace: "nowrap" }}>
            Try AI Interview Prep →
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #e5e2de", padding: "24px 2rem", textAlign: "center", fontSize: ".75rem", color: "#9a958f" }}>
        © 2025 CareerLens · <Link href="/" style={{ color: "#9a958f" }}>Home</Link> · <Link href="/pricing" style={{ color: "#9a958f" }}>Pricing</Link>
      </div>

      <style>{`
        .iq-card-link:hover .iq-card {
          box-shadow: 0 4px 20px rgba(0,0,0,.08);
          border-color: #e85a2a !important;
        }
      `}</style>
    </div>
  );
}
