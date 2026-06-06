import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Resume Examples India 2026 — PM, Data Scientist, BA, Scrum Master | CareerLens",
  description: "Real resume examples for popular roles in India: Project Manager, Data Scientist, Scrum Master, Business Analyst. See what a high-scoring resume looks like — download free.",
  keywords: [
    "resume examples India 2026",
    "project manager resume example India",
    "data scientist resume sample India",
    "business analyst resume example India",
    "scrum master resume India",
    "resume samples for Indian job seekers",
    "good resume examples India",
    "resume format examples India 2026",
    "resume example with quantified achievements",
    "professional resume examples India",
  ],
  alternates: { canonical: "https://www.carrerlens.com/examples" },
  openGraph: {
    title: "Resume Examples India 2026 — PM, Data Scientist, BA | CareerLens",
    description: "See what high-scoring resumes look like for PM, Data Scientist, BA, Scrum Master roles. Download free.",
    url: "https://www.carrerlens.com/examples",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Resume Examples India 2026",
  numberOfItems: 4,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Project Manager Resume Example India", url: "https://www.carrerlens.com/project-manager-resume-example" },
    { "@type": "ListItem", position: 2, name: "Data Scientist Resume Example India", url: "https://www.carrerlens.com/data-scientist-resume-example" },
    { "@type": "ListItem", position: 3, name: "Scrum Master Resume Example India", url: "https://www.carrerlens.com/scrum-master-resume-example" },
    { "@type": "ListItem", position: 4, name: "Business Analyst Resume Example India", url: "https://www.carrerlens.com/business-analyst-resume-example" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a good resume look like for Indian job seekers?",
      acceptedAnswer: { "@type": "Answer", text: "A strong Indian resume in 2026 has: quantified achievements in every bullet (₹ impact, % improvements, team sizes), a 2–3 line professional summary tailored to the role, an explicit Skills section with role-specific keywords, education with CGPA if above 7.5, certifications (AWS, PMP, etc.), and clean single-column formatting. Every example on CareerLens follows these principles with role-specific variations." },
    },
    {
      "@type": "Question",
      name: "How do I write a Project Manager resume in India?",
      acceptedAnswer: { "@type": "Answer", text: "Lead with your PMP or CSM certification prominently. Quantify everything: budget managed (₹ Cr), team size, timeline (X weeks ahead), cost savings. Use PM keywords: Agile, Scrum, Jira, sprint velocity, stakeholder management, risk management, PRINCE2. Show progression from junior to senior PM roles. Include specific company names and project types." },
    },
    {
      "@type": "Question",
      name: "What should a Data Scientist resume include in India?",
      acceptedAnswer: { "@type": "Answer", text: "Include: Python, SQL, and ML framework proficiencies (TensorFlow/PyTorch/Scikit-learn), model performance metrics and business impact (revenue lift, latency reduction), data scale (millions of records, daily active users), tools (Airflow, MLflow, Tableau), and cloud experience (AWS SageMaker, GCP). Lead with the biggest business impact from your models — not the techniques used." },
    },
    {
      "@type": "Question",
      name: "Can I download these resume examples?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — every example has a 'Download as PDF' button that opens a print-ready version. You can then save it as PDF using your browser. You can also use CareerLens's AI Resume Builder to create your own resume in the same style with your actual details." },
    },
  ],
};

const relatedTools = [
  { href: "/project-manager-resume-example", label: "PM Resume" },
  { href: "/data-scientist-resume-example", label: "Data Scientist Resume" },
  { href: "/scrum-master-resume-example", label: "Scrum Master Resume" },
  { href: "/business-analyst-resume-example", label: "BA Resume" },
  { href: "/builder", label: "AI Resume Builder" },
  { href: "/templates", label: "Resume Templates" },
  { href: "/resume", label: "Check My Resume" },
];

export default function ExamplesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 12px" }}>
          Resume Examples India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Real-world resume examples for Project Manager, Data Scientist, Scrum Master, and Business Analyst roles. See what a high-scoring resume with quantified achievements looks like — download any example as PDF.
        </p>
        <div style={{ margin: "0 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>Jump to: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#5046e4", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="examples" />
    </>
  );
}
