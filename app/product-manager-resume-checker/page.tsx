import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Product Manager Resume Checker India 2026 — ATS Score | CareerLens",
  description: "Check your product manager resume for ATS keywords, missing PM skills and weak content. Get your score and exact fixes for PM roles at Flipkart, Amazon, Google and Indian startups. Free.",
  keywords: ["product manager resume checker India","PM resume checker India","product manager resume review India","APM resume India","product manager resume India 2026","associate product manager resume India","PM resume keywords India"],
  alternates: { canonical: "https://www.carrerlens.com/product-manager-resume-checker" },
  openGraph: {
    title: "Free Product Manager Resume Checker India 2026 | CareerLens",
    description: "ATS score and keyword gaps for your PM resume. Tailored for Google APM, Amazon PM and top Indian startup product roles. Free.",
    url: "https://www.carrerlens.com/product-manager-resume-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Product Manager Resume Checker",
  url: "https://www.carrerlens.com/product-manager-resume-checker",
  description: "Free ATS resume checker for product manager and APM roles in India",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What keywords should a product manager resume have in India?", acceptedAnswer: { "@type": "Answer", text: "Key PM resume keywords for Indian companies: product roadmap, OKRs, KPIs, A/B testing, user research, PRD, sprint planning, stakeholder management, go-to-market, growth, retention, MAU/DAU, NPS, user journey, Jira, Figma, SQL, analytics (Mixpanel, Amplitude, Google Analytics), and GTM strategy. Include role-specific metrics — 'grew DAU by 40%' beats 'improved user engagement'." } },
    { "@type": "Question", name: "How do I write a PM resume with no product experience?", acceptedAnswer: { "@type": "Answer", text: "For APM/PM roles with no direct product experience: reframe engineering, consulting, or analytics roles using product language (identify which problems you solved, who the users were, what metrics improved). Build a PM portfolio — write case studies on publicly available apps. Include PM certifications (AIPMM, Pragmatic). Show SQL and basic analytics skills." } },
    { "@type": "Question", name: "What is a good ATS score for a product manager resume?", acceptedAnswer: { "@type": "Answer", text: "PM resumes typically score 45–60 on first scan because they're narrative-heavy and keyword-light. A score of 70+ will clear ATS at most Indian companies. The key fixes: add a Skills section with explicit tools (Jira, Figma, Mixpanel, SQL), include measurable outcomes in every bullet, and add product-specific keywords from the job description." } },
    { "@type": "Question", name: "What do top companies look for in a PM resume in India?", acceptedAnswer: { "@type": "Answer", text: "Google, Flipkart, Amazon, Razorpay and fast-growing Indian startups look for: measurable impact (what metric did you move and by how much?), cross-functional work (engineering, design, data), customer obsession evidence, analytical depth (can you read data?), and product sense. GPA is less important than what you built or shipped." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/software-engineer-resume-checker", label: "SDE Resume" },
  { href: "/data-scientist-resume-checker", label: "Data Scientist Resume" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/interview/flipkart", label: "Flipkart Interview" },
  { href: "/interview/amazon", label: "Amazon Interview" },
];

export default function ProductManagerResumeCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Product Manager Resume Checker India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Get your PM resume scored against what Google, Flipkart, Amazon and top Indian startups look for. See your ATS score, missing product keywords (OKRs, A/B testing, PRD, Jira), and what to fix to land more PM interviews.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0 0 6px" }}>
          {["✓ PM-specific keyword check","✓ Metrics & impact phrasing","✓ ATS score out of 100","✓ APM & senior PM roles","✓ Free, no login"].map(f => (
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
