import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Resume Keywords Scanner India 2026 — Find Missing Keywords | CareerLens",
  description: "Scan your resume for missing keywords that ATS systems look for. See which keywords you have and which ones are costing you callbacks. Free, instant.",
  keywords: ["resume keywords scanner","resume keyword checker India","missing resume keywords","ATS keywords resume India","resume keyword optimization India 2026"],
  alternates: { canonical: "https://www.carrerlens.com/resume-keywords-scanner" },
  openGraph: {
    title: "Resume Keywords Scanner India — Find What's Missing | CareerLens",
    description: "See exactly which keywords your resume is missing for your target role. Free keyword gap analysis.",
    url: "https://www.carrerlens.com/resume-keywords-scanner",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Resume Keywords Scanner",
  url: "https://www.carrerlens.com/resume-keywords-scanner",
  description: "Free resume keyword gap scanner — find which ATS keywords your resume is missing for any role",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What keywords should a software engineer resume have?", acceptedAnswer: { "@type": "Answer", text: "For a software engineer resume in India 2026, key keywords include: your primary tech stack (React, Node.js, Python, Java etc.), cloud platforms (AWS, GCP, Azure), DevOps tools (Docker, Kubernetes, CI/CD), databases (MySQL, PostgreSQL, MongoDB), and methodologies (Agile, microservices, REST APIs). CareerLens detects which ones are missing for your specific role." } },
    { "@type": "Question", name: "How do I add keywords to my resume without keyword stuffing?", acceptedAnswer: { "@type": "Answer", text: "Add keywords naturally in context: in your skills section, in job descriptions where they genuinely apply, and in your summary. For example, instead of just listing 'Kubernetes', write 'Deployed microservices using Kubernetes on AWS, reducing infrastructure costs by 30%'. This passes ATS and impresses human readers." } },
    { "@type": "Question", name: "Which keywords matter most for IT jobs in India?", acceptedAnswer: { "@type": "Answer", text: "The highest-impact keywords for IT jobs in India vary by role: Software engineers need DSA, system design, and their tech stack. Data scientists need Python, ML, TensorFlow/PyTorch, SQL. DevOps engineers need Kubernetes, Terraform, AWS. Product managers need agile, roadmapping, stakeholder management, SQL." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/resume-score-checker", label: "Resume Score" },
  { href: "/resume-optimization-tool", label: "Resume Optimizer" },
  { href: "/software-engineer-resume-checker", label: "SDE Resume" },
  { href: "/data-scientist-resume-checker", label: "Data Scientist Resume" },
];

export default function ResumeKeywordsScannerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Resume Keywords Scanner
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Upload your resume to see which keywords you have and which critical ones are missing for your target role. Missing keywords = missed interviews.
        </p>
        <div style={{ margin: "0 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>Related tools: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#c26b3a", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="resume" />
    </>
  );
}
