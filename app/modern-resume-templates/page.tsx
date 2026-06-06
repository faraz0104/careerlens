import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Modern Resume Templates India 2026 — ATS-Friendly | CareerLens",
  description: "Download free modern resume templates for Indian job seekers. Clean layouts, subtle colour accents — ATS-friendly for tech, consulting and product roles. AI builds your resume instantly.",
  keywords: ["modern resume templates India","modern resume format 2026 India","modern resume design India","clean resume templates India","professional modern resume India","tech resume templates India 2026"],
  alternates: { canonical: "https://www.carrerlens.com/modern-resume-templates" },
  openGraph: {
    title: "Free Modern Resume Templates India 2026 | CareerLens",
    description: "3 modern ATS-friendly templates for tech and consulting. AI builds your resume in any style — free.",
    url: "https://www.carrerlens.com/modern-resume-templates",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Are modern resume templates ATS-friendly in India?", acceptedAnswer: { "@type": "Answer", text: "Yes — CareerLens modern templates use single-column or clean two-column layouts that pass ATS parsers at Flipkart, Amazon, Google, Razorpay, and all major Indian companies. They use HTML text (not images or tables) so every keyword is readable by ATS. The coloured header bands are purely decorative and don't affect parsing." } },
    { "@type": "Question", name: "Which industries should use a modern resume template in India?", acceptedAnswer: { "@type": "Answer", text: "Modern templates work best for: software engineering, product management, data science, UX design, fintech, SaaS startups, and consulting. They signal that you're up-to-date and design-aware. For banking, FMCG, and government roles, use Traditional templates instead." } },
  ],
};

const relatedTools = [
  { href: "/templates", label: "All Templates" },
  { href: "/creative-resume-templates", label: "Creative Templates" },
  { href: "/traditional-resume-templates", label: "Traditional Templates" },
  { href: "/simple-resume-templates", label: "Simple Templates" },
  { href: "/builder", label: "AI Builder" },
  { href: "/resume", label: "Resume Checker" },
];

export default function ModernTemplatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Modern Resume Templates India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          3 modern ATS-friendly templates — clean lines, subtle indigo accents, and whitespace that recruiters appreciate. Best for tech, product, and consulting roles. Pick one, use AI to build your resume.
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
