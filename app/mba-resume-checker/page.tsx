import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free MBA Resume Checker India 2026 — ATS Score for MBA | CareerLens",
  description: "Check your MBA resume for ATS issues, missing keywords and content gaps. Free resume checker for MBA freshers and experienced professionals in India. IIM, ISB, XLRI graduates.",
  keywords: ["MBA resume checker India","MBA resume review India","MBA fresher resume India","IIM resume checker","ISB resume India","MBA resume India 2026","PGDM resume checker India","MBA placement resume India"],
  alternates: { canonical: "https://www.carrerlens.com/mba-resume-checker" },
  openGraph: {
    title: "Free MBA Resume Checker India 2026 — ATS Score | CareerLens",
    description: "ATS score and keyword gaps for your MBA resume. Tailored for IIM, ISB and top B-school graduates. Free, 30 seconds.",
    url: "https://www.carrerlens.com/mba-resume-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens MBA Resume Checker",
  url: "https://www.carrerlens.com/mba-resume-checker",
  description: "Free ATS resume checker for MBA and PGDM graduates in India",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What should an MBA fresher resume include in India 2026?", acceptedAnswer: { "@type": "Answer", text: "An MBA fresher resume in India should: lead with education (MBA institution, specialisation, GPA), list summer internship with quantified outcomes, add a Skills section (Excel, SQL, PowerPoint, tools relevant to your domain — Salesforce, Tableau, SAP for consulting/finance), add leadership roles from B-school (club head, case competition wins), and keep to 1 page. Do not use a functional format — use reverse chronological." } },
    { "@type": "Question", name: "Why is my MBA resume not getting shortlisted?", acceptedAnswer: { "@type": "Answer", text: "Common reasons MBA resumes fail: too generic (lacking role-specific keywords), no measurable outcomes in internship bullets, two-column format that ATS rejects, missing skills section, and describing responsibilities instead of impact. ATS doesn't know you went to IIM — it only looks for keywords. Fix the keywords and format first." } },
    { "@type": "Question", name: "What keywords should an MBA resume have for consulting?", acceptedAnswer: { "@type": "Answer", text: "Consulting MBA resume keywords: stakeholder management, root cause analysis, business strategy, financial modelling, market research, process improvement, cost reduction, revenue growth, Excel, PowerPoint, case study, hypothesis-driven analysis, cross-functional teams, FMCG/BFSI/retail (add your sector). McKinsey, BCG, Bain, Deloitte, Accenture ATS look for these." } },
    { "@type": "Question", name: "What do investment banking and finance roles look for in an MBA resume?", acceptedAnswer: { "@type": "Answer", text: "Finance/IB MBA resume keywords: DCF, LBO, M&A, financial modelling, valuation, equity research, Bloomberg, Capital IQ, Excel (advanced), PowerPoint, deal structuring, IRR, EBITDA, CFA (if pursuing), portfolio management. Always list your internship bank name, deal size if possible, and the financial models you built." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/product-manager-resume-checker", label: "PM Resume" },
  { href: "/marketing-resume-checker", label: "Marketing Resume" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/free-resume-review", label: "Free Review" },
];

export default function MBAResumeCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free MBA Resume Checker India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Get your MBA resume scored for ATS and content quality. Whether you're targeting consulting, finance, product, or marketing roles — see your score, missing keywords, and what top Indian companies actually look for. Free, 30 seconds.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0 0 6px" }}>
          {["✓ Domain-specific keyword check","✓ Internship impact analysis","✓ ATS score out of 100","✓ IIM/ISB/XLRI tailored","✓ Free, no login"].map(f => (
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
