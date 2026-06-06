import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Resume Maker India 2026 — AI Builds It in 2 Minutes | CareerLens",
  description: "Free online resume maker for India. Fill your details, AI writes your bullets and summary, download PDF. No sign-up, no watermark, no payment. Best free resume maker 2026.",
  keywords: [
    "free resume maker India 2026",
    "online resume maker free India",
    "resume maker free download India",
    "best free resume maker India",
    "resume creator free India",
    "make resume online free India",
    "AI resume maker free India",
    "resume generator free India 2026",
    "resume builder free no sign up India",
    "free CV maker India 2026",
    "create resume free India",
    "resume making tool free India",
  ],
  alternates: { canonical: "https://www.carrerlens.com/free-resume-maker" },
  openGraph: {
    title: "Free Resume Maker India 2026 — AI Builds in 2 Minutes | CareerLens",
    description: "Fill details, AI writes your bullets. Free, no sign-up, download PDF instantly. Best resume maker India 2026.",
    url: "https://www.carrerlens.com/free-resume-maker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Free Resume Maker",
  url: "https://www.carrerlens.com/free-resume-maker",
  description: "Free AI resume maker for Indian job seekers — fill in details, AI builds your resume with polished bullets and professional summary",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2140" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is CareerLens resume maker really free?", acceptedAnswer: { "@type": "Answer", text: "Yes — completely free with no sign-up required. Fill your details, choose a template style, click Generate, and download the PDF. No watermark, no payment, no account needed. Pro plan (₹399/month) adds unlimited AI scans, resume tailoring per job description, and cover letter generation." } },
    { "@type": "Question", name: "How does the AI write my resume?", acceptedAnswer: { "@type": "Answer", text: "You enter rough notes for your experience bullets — things like 'worked on backend, built APIs, helped with deployment'. The AI rewrites them into strong action-verb statements with impact: 'Designed and deployed 8 REST APIs serving 50K daily requests, reducing average response time by 42%'. It adds industry keywords, removes filler language, and writes a 2-sentence professional summary tailored to your role." } },
    { "@type": "Question", name: "Can I download my resume as PDF for free?", acceptedAnswer: { "@type": "Answer", text: "Yes — click Download PDF and the resume opens in a print-ready view. Use your browser's print-to-PDF (Ctrl+P → Save as PDF) to download it. No account, no watermark, no payment required. Works on all browsers including Chrome, Firefox, Safari, and Edge on mobile and desktop." } },
    { "@type": "Question", name: "Which template should I choose in the resume maker?", acceptedAnswer: { "@type": "Answer", text: "Modern: best for tech, SaaS, startups, consulting. Traditional: banking, FMCG, pharma, government. Creative: design, marketing, advertising, media. Simple: universal, maximum ATS compatibility, safest choice for Naukri/LinkedIn uploads. When in doubt, choose Modern — it looks professional and passes every ATS system." } },
  ],
};

const relatedTools = [
  { href: "/builder", label: "AI Resume Builder" },
  { href: "/templates", label: "Resume Templates" },
  { href: "/resume", label: "Resume Checker" },
  { href: "/resume-format-for-freshers", label: "Fresher Resume Format" },
  { href: "/examples", label: "Resume Examples" },
  { href: "/ats-resume-checker", label: "ATS Score Checker" },
];

export default function FreeResumeMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Resume Maker India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Fill your details, pick a template, AI writes your bullets and summary. Download PDF in one click. No sign-up, no watermark — completely free resume maker for Indian job seekers.
        </p>
        <div style={{ margin: "0 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>Related: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#5046e4", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="builder" />
    </>
  );
}
