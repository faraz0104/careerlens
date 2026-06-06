import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Resume Tips India 2026 — 15 Fixes That Get More Callbacks | CareerLens",
  description: "15 proven resume tips for Indian job seekers in 2026. ATS fixes, bullet formulas, cliché removal, LinkedIn sync. Upload your resume for instant AI analysis — free.",
  keywords: [
    "resume tips India 2026",
    "resume writing tips India",
    "resume improvement tips India",
    "how to improve resume India",
    "resume tips for freshers India",
    "resume tips to get shortlisted India",
    "resume advice India 2026",
    "resume hacks India",
    "resume mistakes to avoid India",
    "resume tips software engineer India",
    "resume tips for job India 2026",
  ],
  alternates: { canonical: "https://www.carrerlens.com/resume-tips" },
  openGraph: {
    title: "Resume Tips India 2026 — 15 Fixes That Get More Callbacks | CareerLens",
    description: "15 proven tips: ATS fixes, bullet formulas, cliché removal. Free AI checker finds yours instantly.",
    url: "https://www.carrerlens.com/resume-tips",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "15 Resume Tips for Indian Job Seekers in 2026",
  description: "15 proven resume tips to get more callbacks in the Indian job market",
  author: { "@type": "Organization", name: "CareerLens" },
  publisher: { "@type": "Organization", name: "CareerLens" },
  datePublished: "2026-01-01",
  dateModified: "2026-06-01",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the most important resume tips for India 2026?", acceptedAnswer: { "@type": "Answer", text: "The 5 highest-impact resume tips for India: (1) Replace every cliché ('team player', 'passionate', 'hard working') with a specific achievement. (2) Add numbers to every bullet — if you can't quantify it, question whether it belongs. (3) Use a single-column layout — no tables, sidebars, or text boxes. (4) Match keywords exactly to the job description — copy-paste the role's tech stack. (5) Include LinkedIn URL and GitHub in your header — recruiters check both before calls." } },
    { "@type": "Question", name: "What clichés should I remove from my Indian resume?", acceptedAnswer: { "@type": "Answer", text: "Remove these immediately: 'Team player', 'Hard working', 'Passionate about technology', 'Excellent communication skills', 'Result-oriented', 'Detail-oriented', 'Self-starter', 'Quick learner', 'Problem solver', 'Go-getter'. Replace each with a specific example: instead of 'team player' write 'led 4-person squad delivering ₹2 Cr feature on time'. Every claim needs proof — if you can't prove it, cut it." } },
    { "@type": "Question", name: "How do I make my resume stand out in India?", acceptedAnswer: { "@type": "Answer", text: "Three things that make Indian resumes stand out: (1) Quantified bullets — 90% of Indian resumes have no numbers. Add '50K daily users', '₹40L cost reduction', '40% faster' to every achievement. (2) Project links — GitHub URL + live demo URL separates you from 80% of candidates. (3) Specific company names — 'Built payment integration for Razorpay, Paytm, and Juspay' beats 'worked on payment integrations'. Specific > generic, every time." } },
  ],
};

const tips = [
  ["Remove all clichés", "Replace 'team player/passionate/hard working' with a specific achievement."],
  ["Quantify every bullet", "Add users, %, ₹, time, team size to every achievement statement."],
  ["Single-column layout", "No tables or sidebars — ATS at Flipkart, Amazon, Google can't parse them."],
  ["Mirror the job description", "Copy the exact tech keywords from the JD — ATS does literal string matching."],
  ["LinkedIn + GitHub in header", "Recruiters check both before every phone screen. Link them."],
  ["Professional Summary, not Objective", "2 lines: your role + experience + top achievement. No goals or wishes."],
  ["Reverse chronological order", "Most recent job first. Indian recruiters and every ATS expect this."],
  ["1 page for freshers", "No exceptions. 2 pages for 3-8 years experience. 3 pages only for 15+ years."],
  ["Skip photo, DOB, marital status", "These are irrelevant and waste space. MNCs may reject biased-seeming resumes."],
  ["Strong action verbs", "Start each bullet: Built, Designed, Deployed, Reduced, Led, Increased, Launched."],
  ["Show tech stack in project bullets", "Always state: language + framework + database + deployment in each project."],
  ["Education: CGPA only if ≥7.5", "If below 7.5, leave it off. Compensate with certifications and projects."],
  ["File format: PDF", "Always send PDF — .docx formatting breaks on different Word versions."],
  ["Check ATS score before applying", "Upload to CareerLens — know your score before the recruiter sees it."],
  ["Tailor per job description", "One generic resume gets 2% response rate. Tailored resumes get 30%+."],
];

const relatedTools = [
  { href: "/resume", label: "Check My Resume" },
  { href: "/how-to-write-a-resume", label: "How to Write a Resume" },
  { href: "/resume-format-for-freshers", label: "Fresher Resume Format" },
  { href: "/ats-resume-checker", label: "ATS Score Checker" },
  { href: "/builder", label: "AI Resume Builder" },
];

export default function ResumeTipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Resume Tips India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 12px" }}>
          15 fixes Indian recruiters actually want to see. Upload your resume below — AI finds which of these you're missing in 30 seconds.
        </p>

        <div style={{ display: "grid", gap: 6, margin: "0 0 12px" }}>
          {tips.map(([title, desc], i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "8px 12px", background: i % 2 === 0 ? "#f0f2fc" : "#fff", borderRadius: 8, border: "1px solid #e4e7f8", fontSize: ".82rem" }}>
              <span style={{ color: "#5046e4", fontWeight: 800, flexShrink: 0, minWidth: 22 }}>{i + 1}.</span>
              <div>
                <strong style={{ color: "#1a1916" }}>{title}</strong>
                <span style={{ color: "#5a5650" }}> — {desc}</span>
              </div>
            </div>
          ))}
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
