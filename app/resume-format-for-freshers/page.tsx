import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Resume Format for Freshers India 2026 — Free Download + AI Builder | CareerLens",
  description: "Best resume format for freshers in India 2026. 1-page ATS-friendly template, sections order, what to write with no experience. Download free or build with AI in 2 minutes.",
  keywords: [
    "resume format for freshers India 2026",
    "resume format for freshers without experience India",
    "best resume format for freshers India",
    "fresher resume format download free India",
    "resume format for freshers 2026",
    "resume for freshers India",
    "1 page resume format freshers India",
    "resume format for BE BTech freshers India",
    "resume format for MBA freshers India",
    "how to write resume as fresher India",
    "resume template for freshers free India",
    "first job resume India 2026",
  ],
  alternates: { canonical: "https://www.carrerlens.com/resume-format-for-freshers" },
  openGraph: {
    title: "Resume Format for Freshers India 2026 — Free Download | CareerLens",
    description: "1-page ATS resume for freshers in India. Sections, order, what to write with no experience. AI builds it free.",
    url: "https://www.carrerlens.com/resume-format-for-freshers",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Write a Resume for Freshers in India 2026",
  description: "Step-by-step guide to writing a 1-page ATS-friendly fresher resume for Indian job market",
  totalTime: "PT15M",
  step: [
    { "@type": "HowToStep", name: "Write a 2-line professional summary", text: "State what you build and what technologies you use. e.g. 'Final year CS student specialising in backend development with Python and Django. Built 3 projects handling real-world data. Looking for SDE-1 roles at product companies.'" },
    { "@type": "HowToStep", name: "Add your Skills section", text: "List: Programming languages (Python/Java/JS), frameworks (React/Spring/Django), databases (MySQL/MongoDB), tools (Git, Docker). No soft skills — they waste space. Max 12 items." },
    { "@type": "HowToStep", name: "List your Projects", text: "2-3 projects with: project name, tech stack used, what problem it solved, scale or impact (users, requests/second, accuracy %). Add GitHub link. This is your experience substitute." },
    { "@type": "HowToStep", name: "Add Education", text: "Degree, college, graduation year, CGPA (only if 7.5+). Add relevant coursework if useful (Data Structures, DBMS, OS, CN)." },
    { "@type": "HowToStep", name: "List Certifications and Achievements", text: "AWS/GCP/Azure certifications, HackerRank/LeetCode badges, hackathon wins, open source contributions, relevant online courses (Coursera, NPTEL)." },
    { "@type": "HowToStep", name: "Check ATS compatibility", text: "Upload to CareerLens resume checker. Fix any missing keywords for your target role before applying." },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the best resume format for freshers in India 2026?", acceptedAnswer: { "@type": "Answer", text: "1-page reverse-chronological format. Sections in this order: Contact Info (with LinkedIn + GitHub) → Professional Summary (2 lines) → Technical Skills → Projects (2-3, with GitHub links) → Education → Certifications. Put Projects before Experience since you likely have none. Use a clean single-column Modern or Simple template — ATS at Infosys, TCS, Flipkart, Amazon all parse single-column better than two-column or table-based layouts." } },
    { "@type": "Question", name: "What should a fresher write in the experience section?", acceptedAnswer: { "@type": "Answer", text: "If you have zero experience: skip the Experience section entirely and expand your Projects section instead. If you have internship experience: list it as work experience with company name, duration, role, and 2-3 bullet points with specific technologies used and something you built or improved. Even a 2-month internship counts — describe it with impact: 'Built REST API used by 300+ daily active users, reducing response time by 35%.'" } },
    { "@type": "Question", name: "How long should a fresher resume be in India?", acceptedAnswer: { "@type": "Answer", text: "Exactly 1 page. No exceptions for freshers. Recruiters at product companies (Flipkart, Razorpay, CRED, Zepto) spend 6-7 seconds scanning a fresher resume. Everything must fit on one page. Use 10.5-11pt font, 0.5 inch margins, remove all padding/spacing that wastes vertical space. If it spills to 1.1 pages, cut ruthlessly." } },
    { "@type": "Question", name: "Should a fresher include CGPA on their resume in India?", acceptedAnswer: { "@type": "Answer", text: "Yes, if it's 7.5 or above. Include it as 'CGPA: 8.4/10'. If your CGPA is below 7.5, leave it off — ATS systems at many MNCs filter below 7.0, and low GPA raises questions you'll have to answer in interviews. Compensate with strong projects, open source contributions, or certifications instead." } },
    { "@type": "Question", name: "What skills should a fresher put on their resume in India?", acceptedAnswer: { "@type": "Answer", text: "Only list skills you can discuss in an interview. For SDE: Python/Java/JS + 1-2 frameworks + SQL + Git + basic system design. For Data Analyst: Python/R + SQL + Excel/Tableau + statistics. For DevOps: Linux + Docker + CI/CD basics + AWS. For Frontend: HTML/CSS + JavaScript + React + Git. List languages/tools you've actually used in projects — not things you've only watched tutorials about." } },
    { "@type": "Question", name: "What resume format do Indian companies like TCS, Infosys, Wipro want?", acceptedAnswer: { "@type": "Answer", text: "Service companies (TCS, Infosys, Wipro, HCL, Accenture) use basic ATS parsers — any clean single-column format works. Keep: Contact → Education → Projects/Skills → Certifications. They care about CGPA (above 7.0 threshold), no backlogs, and basic technical skills. For product companies (Flipkart, Amazon, Zomato, CRED), focus heavily on Projects with quantified impact and GitHub links." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Check My Resume Score" },
  { href: "/builder", label: "AI Resume Builder" },
  { href: "/fresher-resume-checker", label: "Fresher Resume Checker" },
  { href: "/templates", label: "Resume Templates" },
  { href: "/simple-resume-templates", label: "Simple Templates" },
  { href: "/modern-resume-templates", label: "Modern Templates" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
];

export default function FresherResumeFormatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Resume Format for Freshers India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 6px" }}>
          The complete 1-page ATS-friendly resume format for Indian freshers — sections order, what to write with no experience, CGPA tips, and project bullet formulas. Build yours with AI in 2 minutes, free.
        </p>

        <div style={{ background: "#f0f2fc", borderRadius: 10, padding: "14px 16px", margin: "0 0 10px", fontSize: ".82rem", lineHeight: 1.8, color: "#1a1916" }}>
          <strong style={{ color: "#5046e4" }}>Fresher resume sections (in order):</strong>
          <ol style={{ margin: "6px 0 0 18px", color: "#4b5568" }}>
            <li>Contact Info — name, phone, email, LinkedIn, GitHub</li>
            <li>Professional Summary — 2 lines, what you build + target role</li>
            <li>Technical Skills — languages, frameworks, tools only (no soft skills)</li>
            <li>Projects — 2-3 with stack, problem solved, scale/impact + GitHub link</li>
            <li>Education — degree, college, CGPA if ≥7.5</li>
            <li>Certifications — AWS, Google, Coursera, hackathon wins</li>
          </ol>
        </div>

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
