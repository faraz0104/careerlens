import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Data Scientist Resume Example India 2026 — ML, Python, SQL | CareerLens",
  description: "Real data scientist resume example for India 2026. Python, ML models, SQL, business impact metrics. Freshers and senior DS formats. See quantified AI/ML achievements. Download free PDF.",
  keywords: ["data scientist resume example India 2026","data scientist resume India","ML engineer resume India","data science resume format India","Python resume India 2026","machine learning resume India","data analyst resume sample India 2026"],
  alternates: { canonical: "https://www.carrerlens.com/data-scientist-resume-example" },
  openGraph: {
    title: "Data Scientist Resume Example India 2026 | CareerLens",
    description: "Python, ML, SQL resume example with business impact quantification for India. Fresher and senior formats. Free.",
    url: "https://www.carrerlens.com/data-scientist-resume-example",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What should a data scientist resume include in India 2026?", acceptedAnswer: { "@type": "Answer", text: "A strong DS resume must have: Python and SQL prominently (top skills section), ML framework experience (TensorFlow/PyTorch/Scikit-learn), model performance metrics (accuracy, AUC, F1) AND business impact (revenue lift %, latency reduction ms, DAU increase), data scale (millions of records, real-time pipelines), MLOps tools (MLflow, Airflow, Docker), and cloud (AWS SageMaker, GCP Vertex AI, Azure ML). Start each bullet with the business outcome, not the technique." } },
    { "@type": "Question", name: "How do I write data science resume bullets with impact?", acceptedAnswer: { "@type": "Answer", text: "Weak: 'Built a recommendation model using collaborative filtering.' Strong: 'Deployed collaborative filtering recommendation engine serving 2.4M users, lifting GMV by 8.3% (₹14 Cr annual revenue impact).' Always pair the model/technique with: scale of data/users, model metric, and business outcome in ₹ or %. If you don't have ₹ figures, use % improvement and relative scale." } },
    { "@type": "Question", name: "What is the best resume format for data scientists in India?", acceptedAnswer: { "@type": "Answer", text: "Order: Professional Summary (2 lines: specialisation + top metric) → Technical Skills (Python, SQL, frameworks, cloud) → Work Experience (reverse chronological, 4-5 impact bullets each) → Projects (2-3 with GitHub links) → Education + Certifications. Use a Modern template. Keep GitHub profile URL in header. For freshers, put Projects before Experience. 1 page for under 3 years, 2 pages for senior." } },
  ],
};

const relatedTools = [
  { href: "/examples", label: "All Resume Examples" },
  { href: "/project-manager-resume-example", label: "PM Resume" },
  { href: "/scrum-master-resume-example", label: "Scrum Master Resume" },
  { href: "/business-analyst-resume-example", label: "BA Resume" },
  { href: "/builder", label: "AI Resume Builder" },
  { href: "/resume", label: "Check My Resume" },
];

export default function DataScientistResumeExamplePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Data Scientist Resume Example India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Python, ML models, SQL — with business impact quantification. See how to write DS resume bullets that show revenue lift and model scale. Fresher and senior formats. Download as PDF free.
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
