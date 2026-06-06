import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Project Manager Resume Example India 2026 — PMP, Agile, IT PM | CareerLens",
  description: "Real project manager resume example for India 2026. See how to write PM bullets with ₹ budget, team size, sprint velocity. Agile, PMP, and IT PM formats. Download free PDF.",
  keywords: ["project manager resume example India 2026","PM resume India","project manager resume format India","IT project manager resume India","agile project manager resume India","PMP resume India","project manager CV sample India 2026"],
  alternates: { canonical: "https://www.carrerlens.com/project-manager-resume-example" },
  openGraph: {
    title: "Project Manager Resume Example India 2026 | CareerLens",
    description: "See how to write a high-scoring PM resume with quantified achievements. Agile, IT PM, PMP. Free PDF download.",
    url: "https://www.carrerlens.com/project-manager-resume-example",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What should a project manager resume include in India 2026?", acceptedAnswer: { "@type": "Answer", text: "A strong PM resume in India should include: PMP, CSM, or PRINCE2 certification prominently (above fold), quantified achievements (₹ budget managed, team size, % delivered on-time, cost savings ₹ Cr), key PM skills (Agile, Scrum, Jira, MS Project, risk management, stakeholder management), specific project types and industries, and a 2-line summary stating years of experience, specialisation, and top metric." } },
    { "@type": "Question", name: "How do I quantify project manager achievements on a resume?", acceptedAnswer: { "@type": "Answer", text: "Use these patterns: 'Managed ₹12 Cr digital transformation project across 8 teams, delivered 3 weeks ahead of schedule' or 'Led Agile team of 14 developers, achieving 94% sprint velocity over 18 months' or 'Reduced project delivery costs by 22% (₹3.2 Cr savings) through vendor renegotiation and scope optimisation.' Always include budget size (₹), team size, timeline, and the business outcome." } },
    { "@type": "Question", name: "What is the ideal resume format for a project manager in India?", acceptedAnswer: { "@type": "Answer", text: "Use a Modern or Traditional single-column template. Sections in order: Professional Summary → Certifications (PMP/CSM) → Work Experience (reverse chronological with 4-5 bullets each) → Skills (PM tools + methodologies) → Education. Keep to 2 pages if 10+ years experience; 1 page for under 5 years. Use bold for company names and dates. Avoid functional or hybrid formats — Indian recruiters and ATS prefer chronological." } },
  ],
};

const relatedTools = [
  { href: "/examples", label: "All Resume Examples" },
  { href: "/data-scientist-resume-example", label: "Data Scientist Resume" },
  { href: "/scrum-master-resume-example", label: "Scrum Master Resume" },
  { href: "/business-analyst-resume-example", label: "BA Resume" },
  { href: "/builder", label: "AI Resume Builder" },
  { href: "/resume", label: "Check My Resume" },
];

export default function PMResumeExamplePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Project Manager Resume Example India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          See a high-scoring PM resume with quantified achievements — ₹ budget, team size, Agile velocity. Covers IT PM, PMP, and Scrum-based roles. Download as PDF or build yours with AI.
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
