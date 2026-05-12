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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Resume Analyzer",
  url: "https://www.carrerlens.com/resume",
  description:
    "Free AI resume analyzer with ATS scoring, cover letter generation, LinkedIn optimizer and resume tailoring for Indian job seekers",
  applicationCategory: "BusinessApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  featureList: [
    "ATS Resume Score",
    "Skill Gap Analysis",
    "AI Cover Letter Generator",
    "LinkedIn About Optimizer",
    "Resume Tailoring per Job Description",
  ],
};

export default function ResumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <App defaultTab="resume" />
    </>
  );
}
