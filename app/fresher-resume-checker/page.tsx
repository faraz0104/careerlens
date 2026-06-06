import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Fresher Resume Checker India 2026 — ATS Score for Freshers | CareerLens",
  description: "Check your fresher resume for ATS issues, missing keywords and weak content. Get your score out of 100 and exact fixes. Free resume checker for freshers and recent graduates in India.",
  keywords: ["fresher resume checker India","fresher resume review India","resume for freshers India 2026","fresh graduate resume checker","entry level resume checker India","resume for 0 experience India","resume for college students India","fresher ATS resume India"],
  alternates: { canonical: "https://www.carrerlens.com/fresher-resume-checker" },
  openGraph: {
    title: "Free Fresher Resume Checker India 2026 | CareerLens",
    description: "ATS score and keyword fixes for your fresher resume. See why you're not getting calls and how to fix it. Free, 30 seconds.",
    url: "https://www.carrerlens.com/fresher-resume-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Fresher Resume Checker",
  url: "https://www.carrerlens.com/fresher-resume-checker",
  description: "Free ATS resume checker for freshers and recent graduates in India",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How should a fresher resume look in India 2026?", acceptedAnswer: { "@type": "Answer", text: "A strong fresher resume in India 2026 should be 1 page, lead with education (degree, GPA if above 7.5, relevant coursework), have a strong Projects section with GitHub links and measurable outcomes, list skills explicitly (languages, frameworks, tools), and include internships or certifications. Avoid objectives — use a 2-line summary instead." } },
    { "@type": "Question", name: "Why is my fresher resume not getting shortlisted?", acceptedAnswer: { "@type": "Answer", text: "Freshers most often get rejected because: resume has no role-specific keywords (companies use ATS that scans for exact tech names), projects are described generically without numbers, no skills section, two-column format that ATS can't read, or the resume is too short (under 400 words). CareerLens shows you exactly what's wrong." } },
    { "@type": "Question", name: "What ATS score should a fresher aim for?", acceptedAnswer: { "@type": "Answer", text: "Freshers typically score 35–50 on their first scan due to limited experience. A score of 65+ is achievable with the right keywords, strong project descriptions, and clean formatting — and this score will get you shortlisted. Fix the issues CareerLens flags and rescan; most freshers improve by 20–30 points." } },
    { "@type": "Question", name: "Should freshers use a resume template from Canva or Naukri?", acceptedAnswer: { "@type": "Answer", text: "No. Canva templates use tables, text boxes, and two-column layouts that ATS software cannot parse correctly. Naukri's format is optimised for Naukri's own system but not for Workday, Greenhouse, or LinkedIn. Use a clean single-column Word or Google Docs template, then export as PDF." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/resume-score-checker", label: "Resume Score" },
  { href: "/free-resume-review", label: "Free Review" },
  { href: "/software-engineer-resume-checker", label: "SDE Resume" },
  { href: "/data-scientist-resume-checker", label: "Data Scientist Resume" },
];

export default function FresherResumeCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Fresher Resume Checker India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Just graduated or have under 1 year of experience? Most fresher resumes score below 50 on ATS — and never reach a recruiter. Upload yours below and see your score, missing keywords, and the exact fixes that will get you shortlisted.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0 0 6px" }}>
          {["✓ ATS score for fresher resumes","✓ Projects & internship analysis","✓ Missing tech keywords","✓ Skills section check","✓ Free, no login"].map(f => (
            <span key={f} style={{ background: "#f5f4f0", color: "#3a3632", fontSize: ".82rem", padding: "4px 10px", borderRadius: 20, fontWeight: 500 }}>{f}</span>
          ))}
        </div>
        <div style={{ margin: "14px 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>Related tools: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#c26b3a", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="resume" />
    </>
  );
}
