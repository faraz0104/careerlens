import type { Metadata } from "next";
import App from "./CareerLens";

export const metadata: Metadata = {
  title: "CareerLens – Free AI Resume Analyzer, Job Matching & Interview Prep India",
  description:
    "Upload your resume and get instant AI analysis, personalised job matches, company-specific interview questions, salary insights and a career roadmap. 100% free for Indian job seekers.",
  alternates: {
    canonical: "https://carrerlens.com",
  },
};

export default function HomePage() {
  return <App />;
}
