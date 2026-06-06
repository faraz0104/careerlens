import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Backend Developer Resume Checker India 2026 — ATS Score Free | CareerLens",
  description: "AI resume checker for backend developers in India. ATS score, missing Node.js/Python/Java/SQL keywords, system design signals, and specific fixes. Free, instant.",
  keywords: [
    "backend developer resume checker India",
    "backend resume ATS score India 2026",
    "Node.js developer resume India",
    "Python backend resume checker India",
    "Java developer resume review India",
    "backend engineer resume India 2026",
    "API developer resume India",
    "server side developer resume India",
  ],
  alternates: { canonical: "https://www.carrerlens.com/backend-developer-resume-checker" },
  openGraph: {
    title: "Backend Developer Resume Checker India 2026 | CareerLens",
    description: "ATS score + Node/Python/Java keyword gaps for backend devs in India. Free instant review.",
    url: "https://www.carrerlens.com/backend-developer-resume-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Backend Developer Resume Checker",
  url: "https://www.carrerlens.com/backend-developer-resume-checker",
  description: "Free AI resume checker for backend developers in India — Node.js, Python, Java, SQL, system design keyword analysis",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1120" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What keywords should a backend developer resume have in India?", acceptedAnswer: { "@type": "Answer", text: "Must-have backend keywords for India: Node.js/Express or Python/Django/FastAPI or Java/Spring Boot, REST APIs, GraphQL, SQL (PostgreSQL/MySQL), Redis, Docker, Kubernetes, AWS/GCP, microservices, system design, message queues (Kafka/RabbitMQ), CI/CD. For senior roles: distributed systems, high availability, database sharding, event-driven architecture. Match keywords exactly to the job description — ATS does literal string matching." } },
    { "@type": "Question", name: "How do I show system design skills on a backend resume in India?", acceptedAnswer: { "@type": "Answer", text: "Mention system design implicitly through your experience bullets: 'Designed event-driven order processing system using Kafka, handling 200K messages/day with 99.99% delivery guarantee.' Or: 'Architected multi-tenant SaaS platform with schema-per-tenant PostgreSQL isolation, supporting 300+ enterprise clients.' You don't need to say 'I know system design' — show it through the scale and architecture of what you've built." } },
    { "@type": "Question", name: "Should I include database design on a backend resume in India?", acceptedAnswer: { "@type": "Answer", text: "Yes, especially for mid-to-senior roles. Mention: specific databases used (PostgreSQL, MySQL, MongoDB, Redis), schema design decisions, query optimisation results ('reduced query time from 4s to 180ms by adding composite index'), and data volume handled ('managing 500M+ records'). For fintech and e-commerce roles (Razorpay, Meesho, etc.), database performance is a key hiring signal." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/software-engineer-resume-checker", label: "SWE Checker" },
  { href: "/frontend-developer-resume-checker", label: "Frontend Checker" },
  { href: "/devops-resume-checker", label: "DevOps Checker" },
  { href: "/builder", label: "AI Builder" },
];

export default function BackendResumeCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Backend Developer Resume Checker India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          AI checks your backend resume for missing Node.js, Python, Java, and SQL keywords, system design signals, and ATS compatibility. Instant score — free, no login.
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
