import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "How to Write a Resume in India 2026 — Step by Step Guide | CareerLens",
  description: "Complete guide on how to write a resume in India 2026. Sections, bullet formula, ATS keywords, common mistakes. Includes free AI resume checker and builder.",
  keywords: [
    "how to write a resume India 2026",
    "how to make resume India",
    "resume writing guide India",
    "how to write resume for job India",
    "resume tips India 2026",
    "how to create resume India",
    "resume writing tips freshers India",
    "how to write good resume India",
    "resume advice India 2026",
    "resume mistakes India",
    "resume writing format India",
    "how to write resume for software engineer India",
  ],
  alternates: { canonical: "https://www.carrerlens.com/how-to-write-a-resume" },
  openGraph: {
    title: "How to Write a Resume India 2026 — Complete Guide | CareerLens",
    description: "Step-by-step: sections, bullet formula, ATS keywords, common mistakes. Free AI checker included.",
    url: "https://www.carrerlens.com/how-to-write-a-resume",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Resume in India 2026 — Complete Guide",
  description: "Step-by-step guide to writing an ATS-friendly resume for the Indian job market in 2026",
  author: { "@type": "Organization", name: "CareerLens" },
  publisher: { "@type": "Organization", name: "CareerLens", logo: { "@type": "ImageObject", url: "https://www.carrerlens.com/logo.png" } },
  datePublished: "2026-01-01",
  dateModified: "2026-06-01",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What sections should a resume have in India?", acceptedAnswer: { "@type": "Answer", text: "An Indian resume in 2026 needs: (1) Contact Information with LinkedIn and GitHub URLs, (2) Professional Summary — 2-3 lines stating your role, years of experience, and top achievement, (3) Work Experience in reverse chronological order with quantified bullet points, (4) Technical Skills — tools, languages, frameworks (no soft skills), (5) Education with CGPA if 7.5+, (6) Projects if relevant, (7) Certifications. Omit Objective statement, photo, date of birth, marital status, and references — these are outdated." } },
    { "@type": "Question", name: "How do you write strong resume bullet points in India?", acceptedAnswer: { "@type": "Answer", text: "Use the formula: Action Verb + What You Did + Technology/Method + Quantified Result. Example: 'Reduced' (verb) + 'API response time' (what) + 'by optimising N+1 queries with Django select_related' (how) + 'from 2.1s to 340ms, improving user retention by 18%' (result). Every bullet should have a number — users, requests, %, ₹ savings, hours saved, team size. If you don't have exact numbers, use 'approximately' or relative terms like 'handling 10K+ daily requests'." } },
    { "@type": "Question", name: "How do you make a resume ATS-friendly in India?", acceptedAnswer: { "@type": "Answer", text: "To pass ATS in India: (1) Use standard section headers like 'Work Experience' not 'My Journey', (2) Single-column layout — no tables, text boxes, or sidebars, (3) Use .docx or PDF format (not image PDFs), (4) Include exact keywords from the job description — ATS does literal string matching, (5) Avoid headers/footers for contact info — some ATS can't read them, (6) Use 10.5-11pt standard fonts (Arial, Calibri, Times New Roman), (7) Don't put skills only in graphics or charts. Upload to CareerLens to get your ATS score before applying." } },
    { "@type": "Question", name: "What are the biggest resume mistakes Indian job seekers make?", acceptedAnswer: { "@type": "Answer", text: "The 7 most common mistakes: (1) Using clichés like 'team player', 'hard working', 'passionate' — no recruiter believes these, replace with proof, (2) No metrics — every achievement needs a number, (3) Objective statement instead of Professional Summary, (4) Including photo, DOB, marital status — these are irrelevant and waste space, (5) Sending the same resume to every job without tailoring keywords, (6) Two-column layouts that fail ATS parsers, (7) More than 2 pages for under 8 years of experience." } },
    { "@type": "Question", name: "How long should a resume be in India 2026?", acceptedAnswer: { "@type": "Answer", text: "Freshers and under 3 years experience: 1 page strictly. 3-8 years experience: 1-2 pages. 8+ years or senior/leadership roles: 2 pages maximum. Indian recruiters are explicit about this — a 3-page fresher resume signals poor communication skills. Quality over quantity: 5 strong bullets are worth more than 15 weak ones." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Check My Resume" },
  { href: "/resume-format-for-freshers", label: "Fresher Resume Format" },
  { href: "/builder", label: "AI Resume Builder" },
  { href: "/templates", label: "Resume Templates" },
  { href: "/ats-resume-checker", label: "ATS Score Checker" },
  { href: "/examples", label: "Resume Examples" },
];

export default function HowToWriteResumePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          How to Write a Resume in India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 6px" }}>
          Complete step-by-step guide: sections, bullet formula, ATS keywords, common mistakes, and what Indian recruiters actually look for. Then check yours with AI — free.
        </p>

        <div style={{ background: "#f0f2fc", borderRadius: 10, padding: "14px 16px", margin: "0 0 6px", fontSize: ".82rem", lineHeight: 1.8, color: "#1a1916" }}>
          <strong style={{ color: "#5046e4" }}>Strong bullet formula:</strong>
          <div style={{ margin: "6px 0 0", color: "#4b5568", background: "#fff", borderRadius: 8, padding: "10px 13px", border: "1px solid #e4e7f8", fontFamily: "monospace", fontSize: ".8rem" }}>
            [Action Verb] + [What You Did] + [How/Technology] + [Quantified Result]<br /><br />
            ✗ "Worked on backend services for the application"<br />
            ✓ "Engineered 6 REST microservices using Node.js handling 80K req/day, cutting P99 latency 55%"
          </div>
        </div>

        <div style={{ margin: "0 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>Tools: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#5046e4", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="resume" />
    </>
  );
}
