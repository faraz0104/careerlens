import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Software Engineer vs Data Scientist — Which Career Should You Choose? | CareerLens",
  description:
    "Compare software engineering vs data science in India for salary, skills, hiring trends, work style, and long-term growth to choose the right career path.",
  keywords: [
    "software engineer vs data scientist",
    "data scientist vs software engineer salary",
    "software engineer job vs data scientist",
    "which career is better software engineer or data scientist",
    "best career for IT India 2026",
    "data scientist vs software developer",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/software-engineer-vs-data-scientist",
  },
  openGraph: {
    title: "Software Engineer vs Data Scientist — Career Comparison 2026 | CareerLens",
    description:
      "Understand the difference in salary, skills, hiring, and long-term growth between software engineering and data science.",
    url: "https://www.carrerlens.com/software-engineer-vs-data-scientist",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const comparisonRows = [
  { label: "Core work", softwareEngineer: "Build features and systems", dataScientist: "Model data and answer business questions" },
  { label: "Main skills", softwareEngineer: "DSA, coding, frameworks, system design", dataScientist: "Python, SQL, ML, statistics, experimentation" },
  { label: "Typical salary", softwareEngineer: "₹8–35+ LPA", dataScientist: "₹10–40+ LPA" },
  { label: "Hiring volume", softwareEngineer: "Highest across all tech roles", dataScientist: "Good, but more concentrated in analytics and AI" },
  { label: "Best for", softwareEngineer: "Builders and system designers", dataScientist: "Analytical and research-oriented thinkers" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Software Engineer vs Data Scientist – CareerLens",
  url: "https://www.carrerlens.com/software-engineer-vs-data-scientist",
  description:
    "Compare software engineer and data scientist careers across salary, skills, hiring and long-term opportunity.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Software Engineer vs Data Scientist", item: "https://www.carrerlens.com/software-engineer-vs-data-scientist" },
    ],
  },
};

export default function SoftwareEngineerVsDataScientistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eef0ff", color: "#5046e4", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
            Career comparison
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-.04em", margin: "16px 0 12px" }}>
            Software Engineer vs Data Scientist
          </h1>
          <p style={{ maxWidth: 760, margin: "0 auto", color: "#4b5568", fontSize: ".97rem", lineHeight: 1.7 }}>
            Both careers are highly valuable in 2026, but they reward different strengths. Software engineers typically deliver systems at scale, while data scientists turn messy data into decisions and business signals.
          </p>
        </div>

        <div style={{ overflowX: "auto", marginBottom: 28, border: "1px solid rgba(15, 23, 42, 0.08)", borderRadius: 16, background: "#fff" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
            <thead>
              <tr style={{ background: "#f7f6f2" }}>
                <th style={{ textAlign: "left", padding: "16px 18px", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".06em", color: "#5a5650" }}>Factor</th>
                <th style={{ textAlign: "left", padding: "16px 18px", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".06em", color: "#5a5650" }}>Software engineer</th>
                <th style={{ textAlign: "left", padding: "16px 18px", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".06em", color: "#5a5650" }}>Data scientist</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} style={{ borderTop: "1px solid rgba(15, 23, 42, 0.08)" }}>
                  <td style={{ padding: "16px 18px", fontWeight: 700, color: "#1a1916" }}>{row.label}</td>
                  <td style={{ padding: "16px 18px", color: "#4b5568" }}>{row.softwareEngineer}</td>
                  <td style={{ padding: "16px 18px", color: "#4b5568" }}>{row.dataScientist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginBottom: 24 }}>
          {[
            ["Choose software engineering if", "You enjoy coding, technical debugging, building at scale, and solving engineering problems with a broad set of opportunities across all industries."],
            ["Choose data science if", "You enjoy mathematics, experimentation, product insight, and using data to influence decisions instead of shipping features directly."],
            ["Which is easier to break into?", "Software engineering is usually easier to enter quickly because the job market is broader and the skill path is very structured. Data science often has a steeper learning curve if you do not enjoy statistics and experimentation."],
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
            <a href="/tools/resume-job-match" style={{ background: "#111827", color: "#fff", textDecoration: "none", padding: "10px 14px", borderRadius: 10, fontWeight: 700 }}>Job match checker</a>
            <a href="/tools" style={{ background: "#eef0ff", color: "#4338ca", textDecoration: "none", padding: "10px 14px", borderRadius: 10, fontWeight: 700 }}>Explore tools</a>
            <a href="/roadmap" style={{ background: "#f3f4f6", color: "#111827", textDecoration: "none", padding: "10px 14px", borderRadius: 10, fontWeight: 700 }}>AI roadmap</a>
          </div>
        </div>

        <div style={{ background: "#f7f6f2", borderRadius: 12, padding: "20px 18px", marginBottom: 20, color: "#4b5568", lineHeight: 1.7 }}>
          <strong style={{ color: "#1a1916" }}>Practical takeaway:</strong> software engineering is usually the stronger option if you want more job openings and broader flexibility. Data science wins if you are genuinely fascinated by analysis, AI, and turning data into strategic decisions. The best fit is the path that matches how you enjoy solving problems day to day.
        </div>
      </div>
      <App defaultTab="salary" />
    </>
  );
}
