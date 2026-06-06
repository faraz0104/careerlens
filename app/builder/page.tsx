import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free AI Resume Builder India 2026 — Build in 2 Minutes | CareerLens",
  description: "Build a professional resume in 2 minutes with AI. Fill in your details, pick a template style, and Claude AI writes your bullets, summary and formats everything. Free, no sign-up.",
  keywords: [
    "free AI resume builder India 2026",
    "AI resume maker India",
    "create resume online free India",
    "build resume with AI India",
    "free resume creator India",
    "AI resume generator India",
    "online resume builder free India",
    "resume builder for freshers India",
    "best resume builder India 2026",
    "resume maker free download India",
  ],
  alternates: { canonical: "https://www.carrerlens.com/builder" },
  openGraph: {
    title: "Free AI Resume Builder India 2026 — 2 Minutes | CareerLens",
    description: "Fill in your details, pick a template, AI writes your bullets and summary. Free resume builder for Indian job seekers.",
    url: "https://www.carrerlens.com/builder",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens AI Resume Builder",
  url: "https://www.carrerlens.com/builder",
  description: "Free AI resume builder for India — fill in details, pick template style, AI polishes bullets and generates professional resume in seconds",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1240" },
  featureList: [
    "AI bullet point polishing",
    "Professional summary generation",
    "4 template styles (Modern, Traditional, Creative, Simple)",
    "PDF download",
    "ATS-optimised output",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the AI resume builder work?",
      acceptedAnswer: { "@type": "Answer", text: "Enter your name, role, work experience (rough notes are fine), skills, and education. Choose a template style (Modern, Traditional, Creative, or Simple). Click Generate — Claude AI polishes your bullet points to use strong action verbs and add measurable impact, writes a 2-sentence professional summary, and renders everything in your chosen template. Download the PDF in one click." },
    },
    {
      "@type": "Question",
      name: "Is the AI resume builder really free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — completely free with no sign-up required. You can build and download your resume in any template style at no cost. Pro plan (₹399/month) adds resume tailoring per specific job descriptions, ATS score checking, and cover letter generation." },
    },
    {
      "@type": "Question",
      name: "Will the AI-built resume pass ATS systems?",
      acceptedAnswer: { "@type": "Answer", text: "Modern and Simple templates are single-column and fully ATS-readable. Traditional templates use clean formatting that passes all major ATS systems. Creative templates (sidebar layout) are HTML-based and ATS-compatible with most modern systems, but for highly conservative ATS like older Taleo versions, stick to Modern or Simple." },
    },
    {
      "@type": "Question",
      name: "How does AI improve my resume bullets?",
      acceptedAnswer: { "@type": "Answer", text: "The AI rewrites weak, vague bullets ('worked on backend', 'helped with deployments') into strong action-verb statements with impact ('Built and deployed microservices handling 50K requests/day, reducing latency by 40%'). It adds metrics where you've given numbers, uses industry-standard keywords, and removes filler language that wastes space." },
    },
    {
      "@type": "Question",
      name: "What template should I choose for my resume in India?",
      acceptedAnswer: { "@type": "Answer", text: "Modern: best for tech, startups, and consulting. Traditional: banking, finance, FMCG, government PSUs. Creative: design, marketing, media, advertising. Simple: works for everything when ATS compatibility is the top priority. When in doubt, choose Modern — it looks professional and passes every ATS." },
    },
  ],
};

const relatedTools = [
  { href: "/templates", label: "Resume Templates" },
  { href: "/resume", label: "Resume Checker" },
  { href: "/examples", label: "Resume Examples" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/cover-letter", label: "Cover Letter AI" },
  { href: "/linkedin-optimizer", label: "LinkedIn Optimizer" },
];

export default function BuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 12px" }}>
          Free AI Resume Builder India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Enter your details, choose a template, and AI writes your resume in 2 minutes. Polished bullets, professional summary, 4 template styles. Download as PDF — free, no account needed.
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
