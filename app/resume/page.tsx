import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free AI Resume Analyzer India – ATS Score & Instant Feedback",
  description:
    "Upload your resume and get an instant AI-powered ATS score, skill gap analysis, and actionable improvements. Free resume checker for Indian job seekers. Powered by Claude AI.",
  keywords: [
    "free resume analyzer India",
    "ATS resume scanner India",
    "AI resume checker online",
    "resume score checker India",
    "resume review for freshers India",
    "best resume analyzer India 2024",
    "resume feedback AI India",
  ],
  alternates: {
    canonical: "https://carrerlens.com/resume",
  },
  openGraph: {
    title: "Free AI Resume Analyzer India – ATS Score & Instant Feedback",
    description:
      "Get your resume ATS score, find skill gaps, and receive personalised improvement tips in seconds. Free for Indian job seekers.",
    url: "https://carrerlens.com/resume",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Resume Analyzer",
  url: "https://carrerlens.com/resume",
  description:
    "Free AI-powered resume analyzer that scores your resume for ATS compatibility and gives personalised improvement tips",
  applicationCategory: "BusinessApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
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
