import type { Metadata } from "next";
import App from "./CareerLens";

export const metadata: Metadata = {
  title: "Free ATS Resume Checker India — Get More Interview Calls | CareerLens",
  description:
    "Upload your resume and find out why you're not getting callbacks. Instant ATS score, skill gaps, real job matches & interview prep. Free, no login, 30 seconds. Used by 3,200+ Indian job seekers.",
  keywords: [
    "free ATS resume checker India",
    "resume analyzer India",
    "ATS score checker free",
    "why resume not getting shortlisted",
    "resume review India",
    "job search tools India",
    "interview prep India",
    "AI career tools India",
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
