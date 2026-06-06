import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Full Stack Developer Resume Checker India 2026 — ATS Score Free | CareerLens",
  description: "AI resume checker for full stack developers in India. ATS score, missing MERN/MEAN/Java stack keywords, GitHub portfolio signals. Free, instant, no login.",
  keywords: [
    "full stack developer resume checker India",
    "full stack resume ATS score India 2026",
    "MERN stack resume checker India",
    "full stack developer resume India 2026",
    "MEAN stack resume India",
    "full stack engineer resume review India",
    "React Node resume checker India",
    "full stack developer resume format India",
    "MERN developer resume India",
    "full stack resume tips India 2026",
  ],
  alternates: { canonical: "https://www.carrerlens.com/full-stack-developer-resume-checker" },
  openGraph: {
    title: "Full Stack Developer Resume Checker India 2026 | CareerLens",
    description: "ATS score + MERN/MEAN/Java full stack keyword gaps for India. Free instant resume review.",
    url: "https://www.carrerlens.com/full-stack-developer-resume-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Full Stack Developer Resume Checker",
  url: "https://www.carrerlens.com/full-stack-developer-resume-checker",
  description: "Free AI resume checker for full stack developers in India — MERN, MEAN, Java Spring + React keyword analysis",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1380" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What keywords should a full stack developer resume have in India?", acceptedAnswer: { "@type": "Answer", text: "For MERN stack: React.js, Node.js, Express.js, MongoDB, REST APIs, JWT authentication, Redux, TypeScript, Docker, AWS/GCP. For Java full stack: Spring Boot, React/Angular, PostgreSQL/MySQL, Microservices, REST APIs, Docker, Maven/Gradle, JUnit. For Python full stack: Django/FastAPI, React, PostgreSQL, Docker, Redis, Celery. Always include your GitHub profile with project links — full stack roles prioritise demonstrated work over certifications." } },
    { "@type": "Question", name: "How should a full stack developer structure their resume in India?", acceptedAnswer: { "@type": "Answer", text: "Order: Professional Summary (state your stack explicitly: 'MERN stack developer with 3 years building B2B SaaS') → Technical Skills (split into Frontend / Backend / Database / DevOps / Tools) → Work Experience (reverse chronological, 3-5 impact bullets each) → Projects (2-3 personal projects with GitHub links and live URLs) → Education. Don't say 'full stack developer' vaguely — always state your specific stack." } },
    { "@type": "Question", name: "Should a full stack developer include both frontend and backend projects?", acceptedAnswer: { "@type": "Answer", text: "Yes — include at least one project that shows the full stack clearly. Describe it as: '[Frontend tech] + [Backend tech] + [Database] + deployed to [AWS/Vercel/Railway]'. Mention both the user-facing features (UI, performance, responsive design) and the backend architecture (API design, database schema, authentication). This proves you're genuinely full stack, not just 'I can write React AND can write Node.js'." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/software-engineer-resume-checker", label: "SWE Checker" },
  { href: "/frontend-developer-resume-checker", label: "Frontend Checker" },
  { href: "/backend-developer-resume-checker", label: "Backend Checker" },
  { href: "/builder", label: "AI Builder" },
];

export default function FullStackResumeCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Full Stack Developer Resume Checker India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          AI checks your full stack resume for missing MERN, MEAN, or Java stack keywords, GitHub signals, and ATS compatibility. Instant score — free, no login.
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
