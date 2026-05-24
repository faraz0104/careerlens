import type { Metadata } from "next";
import App from "./CareerLens";

export const metadata: Metadata = {
  title: "Free AI Resume Checker India 2026 — ATS Score, Jobs & Interview Prep | CareerLens",
  description:
    "Upload your resume and instantly get your ATS score, missing keywords, skill gaps, matched jobs and interview questions. Free, no login, 30 seconds. Trusted by 50,000+ Indian job seekers in 2026.",
  keywords: [
    "free ATS resume checker India 2026",
    "resume analyzer India free",
    "ATS score checker free India",
    "why resume not getting shortlisted India",
    "AI resume review India 2026",
    "resume score checker India",
    "job search tool India 2026",
    "interview prep tool India",
    "AI career tools India free",
    "resume keyword checker India",
    "free career tools for freshers India",
    "resume scanner India no login",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com",
  },
  openGraph: {
    title: "Free ATS Resume Checker India — Get More Interview Calls | CareerLens",
    description: "Find out why your resume isn't getting responses. ATS score, skill gaps, job matches — free, 30 seconds, no login.",
    url: "https://www.carrerlens.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return <App />;
}
