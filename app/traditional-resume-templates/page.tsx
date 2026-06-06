import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Traditional Resume Templates India 2026 — Banking & Consulting | CareerLens",
  description: "Traditional resume templates for Indian banking, consulting, FMCG, and government roles. Classic serif layouts, conservative formatting — fully ATS-friendly. Build free with AI.",
  keywords: ["traditional resume templates India","classic resume format India 2026","banking resume templates India","consulting resume format India","FMCG resume templates India","government resume format India 2026","traditional CV format India"],
  alternates: { canonical: "https://www.carrerlens.com/traditional-resume-templates" },
  openGraph: {
    title: "Free Traditional Resume Templates India 2026 | CareerLens",
    description: "Classic layouts for banking, consulting, FMCG, and government. ATS-friendly and recruiter-approved. Free AI builder.",
    url: "https://www.carrerlens.com/traditional-resume-templates",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "When should I use a traditional resume format in India?", acceptedAnswer: { "@type": "Answer", text: "Traditional formats are expected in: banking (HDFC, ICICI, Kotak, SBI), private equity and investment banking, Big 4 consulting (Deloitte, EY, KPMG, PwC), FMCG (HUL, P&G, ITC), pharma (Sun Pharma, Cipla), government PSUs, and most large traditional Indian corporates. Recruiters in these sectors see modern or creative templates as unprofessional — a classic format signals maturity and fit." } },
    { "@type": "Question", name: "What makes a traditional resume template ATS-friendly?", acceptedAnswer: { "@type": "Answer", text: "CareerLens traditional templates use: clean single-column layout, no tables or text boxes (common ATS killers), Times New Roman or Georgia serif fonts (widely supported), standard section headers (Experience, Education, Skills), no graphics or columns, and clean line breaks. This format parses perfectly with every ATS system including legacy Taleo, SAP SuccessFactors, and Oracle Fusion." } },
    { "@type": "Question", name: "Should I include a photo in a traditional Indian resume?", acceptedAnswer: { "@type": "Answer", text: "No — do not include a photo. While older Indian CV conventions included photos, modern recruiters (especially at MNCs and consulting firms) consider it unprofessional and a potential bias vector. Most job portals explicitly state 'no photo required.' Skip the photo, use the space for an extra achievement bullet instead." } },
  ],
};

const relatedTools = [
  { href: "/templates", label: "All Templates" },
  { href: "/modern-resume-templates", label: "Modern Templates" },
  { href: "/creative-resume-templates", label: "Creative Templates" },
  { href: "/simple-resume-templates", label: "Simple Templates" },
  { href: "/builder", label: "AI Builder" },
  { href: "/resume", label: "Resume Checker" },
];

export default function TraditionalTemplatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Traditional Resume Templates India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Classic serif layouts for banking, consulting, FMCG, pharma, and government roles. Conservative, professional, and fully ATS-compatible. Build your traditional resume with AI — free.
        </p>
        <div style={{ margin: "0 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>See also: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#5046e4", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="templates" />
    </>
  );
}
