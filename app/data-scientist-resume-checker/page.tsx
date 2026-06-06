import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Data Scientist Resume Checker India 2026 — ATS Score | CareerLens",
  description: "Check your data scientist resume for ATS keywords, missing skills (Python, SQL, ML, deep learning) and formatting issues. Free resume checker for data science roles in India.",
  keywords: ["data scientist resume checker India","data scientist resume review India","data analyst resume checker India","ML engineer resume India","data science resume India 2026","AI engineer resume checker","data scientist resume keywords India"],
  alternates: { canonical: "https://www.carrerlens.com/data-scientist-resume-checker" },
  openGraph: {
    title: "Free Data Scientist Resume Checker India 2026 | CareerLens",
    description: "ATS score and keyword gaps for your data science resume. See what Google, Amazon, Flipkart data teams look for. Free.",
    url: "https://www.carrerlens.com/data-scientist-resume-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Data Scientist Resume Checker",
  url: "https://www.carrerlens.com/data-scientist-resume-checker",
  description: "Free ATS resume checker for data scientist and data analyst roles in India",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What keywords should a data scientist resume have in India 2026?", acceptedAnswer: { "@type": "Answer", text: "Core keywords for data scientist resumes in India: Python, SQL, pandas, NumPy, scikit-learn, TensorFlow or PyTorch, machine learning, deep learning, NLP, data visualization (Tableau, Power BI), statistics, A/B testing, feature engineering, model deployment, MLflow, Spark (for senior roles), and cloud (AWS SageMaker, GCP Vertex AI). Include the exact tool names from the job description — ATS matches exact strings." } },
    { "@type": "Question", name: "How long should a data scientist resume be in India?", acceptedAnswer: { "@type": "Answer", text: "1 page for 0–3 years experience, 2 pages for 3+ years. Lead with a technical skills section, then experience with quantified model outcomes (improved model accuracy by X%, reduced inference time by Y%), then projects (with GitHub links), then education. For freshers with no work experience, projects and Kaggle rankings are the core." } },
    { "@type": "Question", name: "What ATS score should a data scientist resume have?", acceptedAnswer: { "@type": "Answer", text: "Data scientist roles at top Indian companies have ATS cutoffs around 65–70. Scores above 75 are strong and will clear most automated screens. Common reasons data science resumes score low: missing specific library names, describing results qualitatively instead of quantitatively, and not listing the business impact of models built." } },
    { "@type": "Question", name: "What companies hire data scientists in India?", acceptedAnswer: { "@type": "Answer", text: "Top data science employers in India: Flipkart, Amazon, Google, Microsoft, Zomato, Swiggy, PhonePe, Razorpay, CRED, Dream11, Juspay, Meesho, MindTree, TCS, Infosys. MNCs pay ₹12–40 LPA for 2–5 years experience; unicorns pay ₹15–50 LPA for strong ML backgrounds." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/software-engineer-resume-checker", label: "SDE Resume" },
  { href: "/product-manager-resume-checker", label: "PM Resume" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/resume-keywords-scanner", label: "Keywords Scanner" },
  { href: "/interview-questions/python", label: "Python Interview Qs" },
];

export default function DataScientistResumeCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Data Scientist Resume Checker India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Get your data science resume scored against what Flipkart, Amazon, Zomato and top Indian tech companies actually look for. See your ATS score, missing ML keywords (Python, SQL, TensorFlow, scikit-learn), and skill gaps. Free, 30 seconds.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0 0 6px" }}>
          {["✓ ML & AI keyword check","✓ Python/SQL skills gap","✓ ATS score out of 100","✓ Model impact phrasing","✓ Free, no login"].map(f => (
            <span key={f} style={{ background: "#f5f4f0", color: "#3a3632", fontSize: ".82rem", padding: "4px 10px", borderRadius: 20, fontWeight: 500 }}>{f}</span>
          ))}
        </div>
        <div style={{ margin: "14px 0 4px", fontSize: ".8rem", color: "#888" }}>
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
