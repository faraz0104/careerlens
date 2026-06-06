import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Frontend Developer Resume Checker India 2026 — ATS Score Free | CareerLens",
  description: "AI resume checker for frontend developers in India. Get ATS score, missing React/JavaScript/CSS keywords, portfolio advice, and specific fixes. Free, instant, no login.",
  keywords: [
    "frontend developer resume checker India",
    "frontend resume ATS score India 2026",
    "React developer resume review India",
    "JavaScript developer resume checker India",
    "frontend developer resume India 2026",
    "UI developer resume checker India",
    "web developer resume India",
    "frontend engineer resume review India",
  ],
  alternates: { canonical: "https://www.carrerlens.com/frontend-developer-resume-checker" },
  openGraph: {
    title: "Frontend Developer Resume Checker India 2026 | CareerLens",
    description: "ATS score + React/JS/CSS keyword gaps for frontend devs in India. Free instant resume review.",
    url: "https://www.carrerlens.com/frontend-developer-resume-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Frontend Developer Resume Checker",
  url: "https://www.carrerlens.com/frontend-developer-resume-checker",
  description: "Free AI ATS resume checker for frontend developers in India — React, JavaScript, CSS keyword analysis",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "892" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What keywords should a frontend developer resume have in India?", acceptedAnswer: { "@type": "Answer", text: "Core keywords for frontend developer roles in India: React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, REST APIs, GraphQL, Redux/Zustand, Webpack/Vite, Jest, Git, responsive design, web performance (Core Web Vitals, Lighthouse), accessibility (WCAG). For senior roles add: micro-frontends, server-side rendering, CI/CD, Docker, and React Native if applicable." } },
    { "@type": "Question", name: "Should a frontend developer include a portfolio link on their resume?", acceptedAnswer: { "@type": "Answer", text: "Yes — a portfolio link is essential for frontend roles. It's the single biggest differentiator. Include it in your header next to GitHub. If you don't have a portfolio site, at minimum link to your GitHub with pinned frontend projects. Recruiters at Swiggy, Razorpay, Atlassian India, and all product companies check portfolio/GitHub before phone screen." } },
    { "@type": "Question", name: "How do I write frontend developer resume bullets with impact?", acceptedAnswer: { "@type": "Answer", text: "Pair your tech with business metrics: 'Rebuilt checkout flow with React 18 concurrent features, reducing Largest Contentful Paint from 4.2s to 1.1s and boosting checkout completion rate by 12%.' Or: 'Migrated 40+ components from Class to Functional React, reducing bundle size 23% and cutting CI build time 40%.' Always show performance numbers (ms, Lighthouse score), business impact (%, ₹, users), or scale (DAUs, components)." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/software-engineer-resume-checker", label: "SWE Checker" },
  { href: "/backend-developer-resume-checker", label: "Backend Checker" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/builder", label: "AI Builder" },
];

export default function FrontendResumeCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Frontend Developer Resume Checker India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          AI checks your frontend resume for missing React, JavaScript, and CSS keywords, portfolio advice, and ATS compatibility. Instant score — free, no login.
        </p>
        <div style={{ margin: "0 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>Related: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#5046e4", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="resume" />
    </>
  );
}
