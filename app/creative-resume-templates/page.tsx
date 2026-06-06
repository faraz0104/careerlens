import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Creative Resume Templates India 2026 — Designers & Marketers | CareerLens",
  description: "Creative resume templates for designers, marketers, and media professionals in India. Sidebar layouts, colour accents, ATS-compatible HTML. AI builds your creative resume free.",
  keywords: ["creative resume templates India","creative CV templates designers India","graphic designer resume template India","marketing resume templates India 2026","creative resume format India","colourful resume templates India"],
  alternates: { canonical: "https://www.carrerlens.com/creative-resume-templates" },
  openGraph: {
    title: "Free Creative Resume Templates India 2026 | CareerLens",
    description: "Sidebar layouts with colour accents for designers, marketers, media. ATS-compatible. AI builds it free.",
    url: "https://www.carrerlens.com/creative-resume-templates",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Will a creative resume template pass ATS in India?", acceptedAnswer: { "@type": "Answer", text: "CareerLens creative templates use clean HTML sidebar layouts — not image-based or table-based designs — so they pass modern ATS systems like Lever, Greenhouse, and newer Taleo versions. However, for companies using older ATS (some large enterprises), a Modern or Simple template is safer. Use creative templates for design, marketing, advertising, and media roles where a human reviews your CV first." } },
    { "@type": "Question", name: "What roles should use a creative resume template in India?", acceptedAnswer: { "@type": "Answer", text: "Creative templates are ideal for: UX/UI designers, graphic designers, brand managers, digital marketers, content strategists, advertising copywriters, social media managers, and media production roles. For engineering, finance, or consulting roles — even creative ones — stick to Modern or Simple templates to avoid ATS issues." } },
    { "@type": "Question", name: "Can I use a creative resume as a fresher in India?", acceptedAnswer: { "@type": "Answer", text: "Yes, if you're applying to design or marketing roles. Freshers applying to product companies or engineering roles should use Modern or Simple templates. A creative template for a fresher applying to Zomato's brand team is appropriate; the same template for a fresher applying to Infosys's engineering program is not." } },
  ],
};

const relatedTools = [
  { href: "/templates", label: "All Templates" },
  { href: "/modern-resume-templates", label: "Modern Templates" },
  { href: "/traditional-resume-templates", label: "Traditional Templates" },
  { href: "/simple-resume-templates", label: "Simple Templates" },
  { href: "/builder", label: "AI Builder" },
  { href: "/resume", label: "Resume Checker" },
];

export default function CreativeTemplatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Creative Resume Templates India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Sidebar layouts with indigo colour accents for designers, marketers, and media professionals. ATS-compatible HTML layouts — not image-based. Use AI to build your creative resume free.
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
