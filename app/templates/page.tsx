import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Resume Templates India 2026 — ATS-Friendly Modern & Creative | CareerLens",
  description: "12 free ATS-friendly resume templates for Indian job seekers. Modern, Traditional, Creative, and Simple designs. Pick a template, fill your details, AI builds your resume in seconds.",
  keywords: [
    "free resume templates India 2026",
    "ATS friendly resume templates India",
    "professional resume templates download",
    "best resume templates for freshers India",
    "resume templates software engineer India",
    "modern resume templates free India",
    "creative resume templates India",
    "simple resume templates India",
    "resume template word format India",
    "resume format for freshers 2026",
  ],
  alternates: { canonical: "https://www.carrerlens.com/templates" },
  openGraph: {
    title: "Free Resume Templates India 2026 — ATS-Friendly | CareerLens",
    description: "12 ATS-friendly templates across Modern, Traditional, Creative and Simple styles. AI builds your resume in seconds.",
    url: "https://www.carrerlens.com/templates",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Resume Template Builder",
  url: "https://www.carrerlens.com/templates",
  description: "Free AI-powered resume template builder for Indian job seekers — 12 ATS-friendly templates, AI fills your resume in any style",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1840" },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Resume Templates India 2026",
  description: "ATS-friendly resume templates for Indian job seekers",
  numberOfItems: 12,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Modern Professional Template", url: "https://www.carrerlens.com/modern-resume-templates" },
    { "@type": "ListItem", position: 2, name: "Classic Traditional Template", url: "https://www.carrerlens.com/traditional-resume-templates" },
    { "@type": "ListItem", position: 3, name: "Creative Sidebar Template", url: "https://www.carrerlens.com/creative-resume-templates" },
    { "@type": "ListItem", position: 4, name: "Simple Minimal Template", url: "https://www.carrerlens.com/simple-resume-templates" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which resume template is best for ATS in India 2026?",
      acceptedAnswer: { "@type": "Answer", text: "Single-column Modern or Simple templates score best with ATS in India. Avoid Creative templates with sidebars for companies using Workday or iCIMS (Flipkart, Amazon, Google) — their parsers struggle with multi-column layouts. Use Modern or Simple for product companies and Traditional for banking, consulting, and government roles." },
    },
    {
      "@type": "Question",
      name: "Should I use a creative resume template in India?",
      acceptedAnswer: { "@type": "Answer", text: "Only for design, marketing, advertising, and media roles where visual presentation matters and resumes are reviewed by humans. For tech, finance, and consulting roles, creative templates with sidebars and graphics often fail ATS parsing and should be avoided. CareerLens's Creative templates are still ATS-readable — they use clean HTML layouts, not images." },
    },
    {
      "@type": "Question",
      name: "How does the AI resume builder work with templates?",
      acceptedAnswer: { "@type": "Answer", text: "Select a template, fill in your basics (name, role, experience, skills), and click Generate. Claude AI polishes your bullet points to use strong action verbs and quantified achievements, writes a professional summary, and renders everything in your chosen template style. You get a print-ready PDF download instantly." },
    },
    {
      "@type": "Question",
      name: "Are these resume templates free to download?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — all 12 templates and the AI builder are completely free. No sign-up, no watermark, no hidden fees. Build your resume, download the PDF, and use it anywhere. Pro plan (₹399/month) adds unlimited AI scans, cover letter generator, and resume tailoring per job description." },
    },
    {
      "@type": "Question",
      name: "What is the best resume format for freshers in India 2026?",
      acceptedAnswer: { "@type": "Answer", text: "For freshers in India 2026: use a single-column Simple or Modern template, put your projects and skills above experience (since experience is limited), include a GitHub or portfolio link, lead with a 2-sentence summary of what you build and what technologies you use, and keep it to exactly 1 page. Reverse chronological format is expected by Indian recruiters." },
    },
  ],
};

const relatedTools = [
  { href: "/builder", label: "AI Resume Builder" },
  { href: "/resume", label: "Resume Checker" },
  { href: "/examples", label: "Resume Examples" },
  { href: "/modern-resume-templates", label: "Modern Templates" },
  { href: "/creative-resume-templates", label: "Creative Templates" },
  { href: "/simple-resume-templates", label: "Simple Templates" },
  { href: "/traditional-resume-templates", label: "Traditional Templates" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
];

export default function TemplatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 12px" }}>
          Free Resume Templates India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          12 ATS-friendly resume templates across Modern, Traditional, Creative, and Simple styles. Pick one, fill in your details, and AI builds your resume in under 2 minutes — free, no sign-up.
        </p>
        <div style={{ margin: "0 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>Related: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#5046e4", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="templates" />
    </>
  );
}
