import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Scrum Master Resume Example India 2026 — CSM, PSM, SAFe | CareerLens",
  description: "Scrum Master resume example for India 2026. CSM, PSM, SAFe certifications. Sprint velocity, team coaching, impediment removal. Agile transformation bullets. Download free PDF.",
  keywords: ["scrum master resume example India","scrum master CV India 2026","CSM resume India","agile scrum master resume India","SAFe resume India","PSM resume India","scrum master resume format India"],
  alternates: { canonical: "https://www.carrerlens.com/scrum-master-resume-example" },
  openGraph: {
    title: "Scrum Master Resume Example India 2026 | CareerLens",
    description: "CSM/PSM/SAFe Scrum Master resume with sprint velocity, team coaching, and Agile transformation bullets. Free.",
    url: "https://www.carrerlens.com/scrum-master-resume-example",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What should a Scrum Master resume include in India?", acceptedAnswer: { "@type": "Answer", text: "A strong Scrum Master resume needs: CSM, PSM I/II, or SAFe Agilist certification prominently placed, sprint velocity metrics (e.g., 'improved team velocity from 38 to 67 story points over 6 sprints'), team size and product context, impediment removal examples, ceremonies facilitated (sprint planning, retrospectives, daily standups), tools (Jira, Confluence, Azure DevOps), and coaching/mentoring outcomes." } },
    { "@type": "Question", name: "How do I quantify Scrum Master achievements on a resume?", acceptedAnswer: { "@type": "Answer", text: "Use these patterns: 'Coached 3 cross-functional teams (28 engineers total) through Agile transformation, increasing sprint predictability from 61% to 89%' or 'Reduced average sprint carry-over from 4.2 to 0.8 story points by facilitating root-cause retrospectives' or 'Led SAFe PI Planning across 6 Agile Release Trains, aligning 140+ stakeholders on quarterly objectives.' Always show before/after metrics where possible." } },
    { "@type": "Question", name: "Is a CSM or PSM certification better for Indian companies?", acceptedAnswer: { "@type": "Answer", text: "Both are well-recognised in India. CSM (Certified ScrumMaster from Scrum Alliance) is more widely known among HR teams and shows up better in ATS keyword searches. PSM I/II (Professional Scrum Master from Scrum.org) is considered more technically rigorous and is preferred at product companies like Flipkart, Swiggy, and MNCs. Having either certification is far more important than which one — but list both if you hold them." } },
  ],
};

const relatedTools = [
  { href: "/examples", label: "All Resume Examples" },
  { href: "/project-manager-resume-example", label: "PM Resume" },
  { href: "/data-scientist-resume-example", label: "Data Scientist Resume" },
  { href: "/business-analyst-resume-example", label: "BA Resume" },
  { href: "/builder", label: "AI Resume Builder" },
  { href: "/resume", label: "Check My Resume" },
];

export default function ScrumMasterResumeExamplePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Scrum Master Resume Example India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          CSM, PSM, and SAFe Scrum Master resume with sprint velocity metrics, team coaching outcomes, and Agile transformation bullets. See what recruiters at Indian product companies want. Download free PDF.
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
