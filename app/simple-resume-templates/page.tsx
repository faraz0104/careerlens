import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Simple Resume Templates India 2026 — ATS-Optimised Minimal | CareerLens",
  description: "Simple, minimal resume templates for Indian job seekers. Maximum ATS compatibility — single column, no graphics, clean formatting. Best for freshers and senior engineers. Free AI builder.",
  keywords: ["simple resume templates India","minimal resume format India 2026","clean simple resume India","ATS resume templates India","simple resume format freshers India","basic resume template India","simple CV format India 2026"],
  alternates: { canonical: "https://www.carrerlens.com/simple-resume-templates" },
  openGraph: {
    title: "Free Simple Resume Templates India 2026 | CareerLens",
    description: "Minimal single-column templates with maximum ATS compatibility for all roles. Free AI builder.",
    url: "https://www.carrerlens.com/simple-resume-templates",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is a simple resume template good for ATS in India?", acceptedAnswer: { "@type": "Answer", text: "Simple templates are the most ATS-compatible option. They use single-column layouts, standard section headings, no tables or text boxes, and zero graphics — exactly what every ATS parser from Workday to Zoho Recruit expects. If ATS compatibility is your top priority (and for most Indian job portals, it should be), Simple is the safest choice." } },
    { "@type": "Question", name: "Who should use a simple resume template in India?", acceptedAnswer: { "@type": "Answer", text: "Simple templates work for everyone but are especially recommended for: freshers and recent graduates who want content to shine without design distractions, senior engineers and managers applying to large corporates with older ATS systems, candidates uploading to Naukri or LinkedIn where parsers are strict, and anyone who prioritises maximum keyword extraction over visual design." } },
    { "@type": "Question", name: "Does a simple resume look unprofessional to Indian recruiters?", acceptedAnswer: { "@type": "Answer", text: "No — a well-structured simple resume with strong quantified bullets looks more professional than a flashy template with weak content. Indian recruiters at MNCs, startups, and consulting firms all appreciate clean, scannable layouts. The resume content (achievements, metrics, skills) is what gets callbacks — not the template design. A simple template lets your content speak." } },
  ],
};

const relatedTools = [
  { href: "/templates", label: "All Templates" },
  { href: "/modern-resume-templates", label: "Modern Templates" },
  { href: "/creative-resume-templates", label: "Creative Templates" },
  { href: "/traditional-resume-templates", label: "Traditional Templates" },
  { href: "/builder", label: "AI Builder" },
  { href: "/resume", label: "Resume Checker" },
];

export default function SimpleTemplatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Simple Resume Templates India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Minimal single-column layouts with maximum ATS compatibility. No graphics, no clutter — just your achievements presented clearly. Works for all roles, essential for freshers. Build yours free with AI.
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
