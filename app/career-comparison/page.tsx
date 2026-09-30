import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Software Engineer vs Data Scientist vs Product Manager — Career Comparison 2026 | CareerLens",
  description:
    "Compare software engineer, data scientist, and product manager careers in India. See salary range, skill requirements, job market, learning curve, and which path fits your goals best.",
  keywords: [
    "software engineer vs data scientist",
    "software engineer vs product manager",
    "frontend vs backend developer",
    "career comparison India",
    "which career is better in IT India",
    "best IT career 2026",
    "software engineer role comparison",
    "data scientist vs software engineer salary",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/career-comparison",
  },
  openGraph: {
    title: "Career Comparison 2026 — Software Engineer vs Data Scientist vs Product Manager | CareerLens",
    description:
      "Compare the real trade-offs between IT career paths: salary, skills, job market, work style, and learning curve.",
    url: "https://www.carrerlens.com/career-comparison",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const comparisonRows = [
  { label: "Primary focus", values: ["Building software systems", "Data, models, analysis", "Product decisions and strategy"] },
  { label: "Typical salary range", values: ["₹8–35+ LPA", "₹10–40+ LPA", "₹15–45+ LPA"] },
  { label: "Skill emphasis", values: ["DSA, systems, coding", "Python, SQL, ML, stats", "Product thinking, strategy, analytics"] },
  { label: "Best for", values: ["Builders and system designers", "Analytical problem solvers", "Cross-functional leaders"] },
  { label: "Career ramp", values: ["Fast for coding jobs", "Medium, but role-specific", "Higher ambiguity, more stakeholder work"] },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Career Comparison – CareerLens",
  url: "https://www.carrerlens.com/career-comparison",
  description:
    "Compare software engineer, data scientist, and product manager career paths in India including jobs, salary, skills, and learning curve.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Career Comparison", item: "https://www.carrerlens.com/career-comparison" },
    ],
  },
};

export default function CareerComparisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eef0ff", color: "#5046e4", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
            Career comparison
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-.04em", margin: "16px 0 12px" }}>
            Software Engineer vs Data Scientist vs Product Manager
          </h1>
          <p style={{ maxWidth: 760, margin: "0 auto", color: "#4b5568", fontSize: ".97rem", lineHeight: 1.7 }}>
            Every tech career has a different mix of coding depth, business impact, and pace of learning. The right choice depends on whether you enjoy building systems, extracting insight from data, or shaping product direction.
          </p>
        </div>

        <div style={{ overflowX: "auto", marginBottom: 28, border: "1px solid rgba(15, 23, 42, 0.08)", borderRadius: 16, background: "#fff" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
            <thead>
              <tr style={{ background: "#f7f6f2" }}>
                <th style={{ textAlign: "left", padding: "16px 18px", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".06em", color: "#5a5650" }}>Dimension</th>
                <th style={{ textAlign: "left", padding: "16px 18px", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".06em", color: "#5a5650" }}>Software engineer</th>
                <th style={{ textAlign: "left", padding: "16px 18px", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".06em", color: "#5a5650" }}>Data scientist</th>
                <th style={{ textAlign: "left", padding: "16px 18px", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".06em", color: "#5a5650" }}>Product manager</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} style={{ borderTop: "1px solid rgba(15, 23, 42, 0.08)" }}>
                  <td style={{ padding: "16px 18px", fontWeight: 700, color: "#1a1916" }}>{row.label}</td>
                  <td style={{ padding: "16px 18px", color: "#4b5568" }}>{row.values[0]}</td>
                  <td style={{ padding: "16px 18px", color: "#4b5568" }}>{row.values[1]}</td>
                  <td style={{ padding: "16px 18px", color: "#4b5568" }}>{row.values[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginBottom: 24 }}>
          {[
            ["Choose software engineering if", "You enjoy coding, systems thinking, and shipping stable products at scale. This is the strongest path if you want broad job availability and strong engineering fundamentals."],
            ["Choose data science if", "You like statistics, experimentation, and deriving signals from large datasets. This path often rewards strong analytical depth and business problem framing."],
            ["Choose product management if", "You enjoy connecting business goals, customer problems, and execution across teams. It is less coding-heavy but more strategic and cross-functional."],
          ].map(([title, text]) => (
            <div key={title} style={{ background: "#fff", border: "1px solid rgba(15,23,42,0.08)", borderRadius: 14, padding: 18 }}>
              <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
              <p style={{ margin: 0, color: "#5a5650", fontSize: ".82rem", lineHeight: 1.7 }}>{text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 14, padding: "18px 20px", marginBottom: 20 }}>
          <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#5046e4", marginBottom: 8 }}>Next step</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a href="/ai-resume-checker" style={{ background: "#111827", color: "#fff", textDecoration: "none", padding: "10px 14px", borderRadius: 10, fontWeight: 700 }}>Check your resume</a>
            <a href="/tools" style={{ background: "#eef0ff", color: "#4338ca", textDecoration: "none", padding: "10px 14px", borderRadius: 10, fontWeight: 700 }}>Explore job tools</a>
            <a href="/salary" style={{ background: "#f3f4f6", color: "#111827", textDecoration: "none", padding: "10px 14px", borderRadius: 10, fontWeight: 700 }}>Compare salaries</a>
          </div>
        </div>

        <div style={{ background: "#f7f6f2", borderRadius: 12, padding: "20px 18px", marginBottom: 20, color: "#4b5568", lineHeight: 1.7 }}>
          <strong style={{ color: "#1a1916" }}>The practical answer:</strong> if you want the best balance of job availability, salary flexibility, and broad career options, software engineering is usually the safest bet. If you love analytics and experimentation, data science can be a stronger fit. If you enjoy strategy, stakeholder management, and product impact, product management is compelling.
        </div>
      </div>
      <App defaultTab="salary" />
    </>
  );
}
