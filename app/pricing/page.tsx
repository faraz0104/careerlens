import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "CareerLens Pro Pricing — ₹299/mo for Unlimited AI Resume & Job Matching India",
  description:
    "Unlock everything on CareerLens for ₹299/month. Unlimited job matches, all interview prep questions, full salary insights, AI resume tailoring, and career roadmap. Cancel anytime.",
  keywords: [
    "CareerLens Pro pricing India",
    "AI career tool subscription India",
    "resume checker pro India",
    "job matching tool price India",
    "career intelligence tool India 2026",
    "AI interview prep tool price India",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/pricing",
  },
  openGraph: {
    title: "CareerLens Pro — ₹299/mo for Full AI Career Intelligence India",
    description:
      "Unlimited job matches, all interview questions, full salary insights, AI resume tailoring and career roadmap. ₹299/month. Cancel anytime.",
    url: "https://www.carrerlens.com/pricing",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function PricingPage() {
  return <App defaultTab="pricing" />;
}
