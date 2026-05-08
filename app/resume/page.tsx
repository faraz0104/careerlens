import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free AI Resume Analyzer India – ATS Score, Cover Letter & LinkedIn Optimizer",
  description:
    "Upload your resume and get an instant ATS score, skill gap analysis, AI-generated cover letter for any job, LinkedIn profile optimizer, and resume tailoring per JD. Free for Indian job seekers.",
  keywords: [
    "free resume analyzer India",
    "ATS resume scanner India",
    "AI resume checker online India",
    "resume score checker India",
    "resume review for freshers India",
    "cover letter generator India",
    "LinkedIn profile optimizer India",
    "resume tailoring per job description India",
    "AI resume feedback India",
    "resume ATS score India 2024",
    "resume improvement tips India",
    "best resume analyzer India",
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
