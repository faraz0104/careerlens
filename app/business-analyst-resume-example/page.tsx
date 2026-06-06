import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Business Analyst Resume Example India 2026 — CBAP, BRD, SQL | CareerLens",
  description: "Business Analyst resume example for India 2026. BRD writing, stakeholder management, SQL, Tableau. CBAP and ECBA formats. See quantified BA achievements. Download free PDF.",
  keywords: ["business analyst resume example India 2026","BA resume India","business analyst CV India","CBAP resume India","business analyst resume format India","requirement analyst resume India","BA resume with SQL India"],
  alternates: { canonical: "https://www.carrerlens.com/business-analyst-resume-example" },
  openGraph: {
    title: "Business Analyst Resume Example India 2026 | CareerLens",
    description: "BRD, SQL, Tableau BA resume with quantified stakeholder and delivery achievements. CBAP format. Free PDF.",
    url: "https://www.carrerlens.com/business-analyst-resume-example",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What should a Business Analyst resume include in India 2026?", acceptedAnswer: { "@type": "Answer", text: "A strong BA resume in India should have: CBAP, ECBA, or CCBA certification (if held), BRD/FRD writing experience with scope (N requirements, N modules), stakeholder count and seniority managed, SQL proficiency and specific queries used (reporting, data validation), tools (JIRA, Confluence, Visio, Tableau, Power BI), process improvement quantification (reduced UAT cycles by N%, saved N hours/week), and domain knowledge (banking, insurance, e-commerce, healthcare)." } },
    { "@type": "Question", name: "How do I quantify Business Analyst achievements on a resume?", acceptedAnswer: { "@type": "Answer", text: "Use these patterns: 'Authored 120-page BRD for core banking migration, coordinating 14 stakeholders across 3 business units, delivering requirements sign-off 2 weeks ahead of schedule' or 'Reduced UAT defect rate by 34% by introducing structured test scenario reviews with development team' or 'Built Tableau dashboard used by C-suite, cutting weekly reporting time from 6 hours to 20 minutes.' Show process impact, not just activity." } },
    { "@type": "Question", name: "What is the best resume format for a Business Analyst in India?", acceptedAnswer: { "@type": "Answer", text: "Use a Traditional or Modern single-column template. Sections: Professional Summary → Certifications → Work Experience (reverse chronological, 4-5 bullets emphasising requirements gathering, stakeholder management, and delivery metrics) → Technical Skills (SQL, tools, methodologies) → Education. For BFSI or consulting BA roles, a Traditional format signals domain maturity. For tech BA roles at startups, Modern is fine." } },
  ],
};

const relatedTools = [
  { href: "/examples", label: "All Resume Examples" },
  { href: "/project-manager-resume-example", label: "PM Resume" },
  { href: "/data-scientist-resume-example", label: "Data Scientist Resume" },
  { href: "/scrum-master-resume-example", label: "Scrum Master Resume" },
  { href: "/builder", label: "AI Resume Builder" },
  { href: "/resume", label: "Check My Resume" },
];

export default function BAResumeExamplePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Business Analyst Resume Example India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          BRD writing, SQL, stakeholder management, and Tableau — with quantified delivery achievements. CBAP and entry-level ECBA formats for BFSI, consulting, and tech BA roles. Download free PDF.
        </p>
        <div style={{ margin: "0 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>See also: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#5046e4", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="examples" />
    </>
  );
}
