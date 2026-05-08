import type { Metadata } from "next";
import App from "./CareerLens";

export const metadata: Metadata = {
  title: "CareerLens – Free AI Resume Analyzer & Career Tools India",
  description:
    "Free AI resume analyzer with ATS score, job matching, interview questions, salary calculator & career roadmap. No signup needed. Built for Indian job seekers.",
  alternates: {
    canonical: "https://www.carrerlens.com",
  },
};

export default function HomePage() {
  return <App />;
}
