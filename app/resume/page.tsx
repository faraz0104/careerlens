import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free AI Resume Checker India 2026 — ATS Score + Skill Gaps + Job Matches | CareerLens",
  description:
    "Get your resume ATS score instantly. See exactly which keywords you're missing, which skills cost you callbacks, and get matched to live jobs — all free, no login, in 30 seconds.",
  keywords: [
    "free resume checker India 2026",
    "ATS resume scanner India",
    "resume ATS score checker free",
    "why is my resume not getting shortlisted",
    "resume review freshers India",
    "AI resume analyzer India",
    "resume keyword checker India",
    "resume score checker free",
    "best resume analyzer India 2026",
    "resume improvement tool India",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/resume",
  },
  openGraph: {
    title: "Free AI Resume Analyzer India – ATS Score, Cover Letter & LinkedIn",
    description:
      "Get your resume ATS score, AI cover letter for any job, LinkedIn bio optimizer, and tailored resume bullets. All in one place. Free.",
    url: "https://www.carrerlens.com/resume",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Resume Analyzer",
  url: "https://www.carrerlens.com/resume",
  description: "Free AI resume analyzer with ATS scoring, cover letter generation, LinkedIn optimizer and resume tailoring for Indian job seekers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "2340" },
  featureList: ["ATS Resume Score","Skill Gap Analysis","AI Cover Letter Generator","LinkedIn About Optimizer","Resume Tailoring per Job Description"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How does the free resume checker work?", acceptedAnswer: { "@type": "Answer", text: "Upload your resume (PDF or Word) and enter your target role. CareerLens extracts your resume text, compares it against ATS criteria and role-specific keyword databases, and returns your score out of 100 across ATS compatibility, skills match, content quality and formatting — all in under 30 seconds, free, no login." } },
    { "@type": "Question", name: "Why is my resume not getting shortlisted in India?", acceptedAnswer: { "@type": "Answer", text: "72% of resumes are filtered by ATS before a recruiter sees them. Common causes: missing role-specific keywords, two-column layouts ATS can't parse, generic bullet points without numbers, and missing skills sections. CareerLens shows you exactly which of these is hurting your resume." } },
    { "@type": "Question", name: "Is CareerLens free for Indian job seekers?", acceptedAnswer: { "@type": "Answer", text: "Yes — the full ATS score, keyword gap analysis, skill gaps, and top 5 improvements are free with no sign-up. Pro plan (₹399/month) adds unlimited scans, AI resume rewrite, cover letter generator, and LinkedIn optimizer." } },
    { "@type": "Question", name: "Which companies in India use ATS?", acceptedAnswer: { "@type": "Answer", text: "All major Indian companies with 200+ employees use ATS: Flipkart, Razorpay, Zomato, Swiggy, Zepto, TCS, Infosys, Wipro use systems like Workday, iCIMS, Greenhouse, or custom portals. MNCs like Google, Amazon, Microsoft, Meta use Workday or Greenhouse. Your resume must pass ATS before any human sees it." } },
    { "@type": "Question", name: "How do I improve my resume score?", acceptedAnswer: { "@type": "Answer", text: "The fastest improvements: add role-specific keywords from the job description, switch to a single-column layout, replace weak verbs (responsible for, helped) with strong ones (built, reduced, increased), add measurable results to 60%+ of bullets, and add an explicit Skills section. Most users raise their score by 20+ points after applying CareerLens suggestions." } },
  ],
};

const relatedTools = [
  { href: "/ats-resume-checker", label: "ATS Resume Checker" },
  { href: "/resume-score-checker", label: "Resume Score Checker" },
  { href: "/free-resume-review", label: "Free Resume Review" },
  { href: "/resume-keywords-scanner", label: "Keywords Scanner" },
  { href: "/resume-optimization-tool", label: "Resume Optimizer" },
  { href: "/software-engineer-resume-checker", label: "SDE Resume Checker" },
  { href: "/fresher-resume-checker", label: "Fresher Resume Checker" },
  { href: "/data-scientist-resume-checker", label: "Data Scientist Resume" },
  { href: "/product-manager-resume-checker", label: "PM Resume Checker" },
];

export default function ResumePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 12px" }}>
          Free AI Resume Checker India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 14px" }}>
          Upload your resume and get your ATS score, missing keywords, and top improvements in 30 seconds. 72% of resumes are rejected by ATS before a recruiter reads them — find out if yours is one of them.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0 0 6px" }}>
          {["✓ ATS Score out of 100","✓ Missing keywords for your role","✓ Skill gap analysis","✓ AI cover letter generator","✓ Free, no login required"].map(f => (
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
