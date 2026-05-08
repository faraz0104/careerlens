import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "CareerLens Pro – Pricing Plans India | Unlock Full AI Career Intelligence",
  description:
    "Upgrade to CareerLens Pro for just ₹299. Unlock unlimited job matches, all interview questions, full salary insights, complete career roadmap and priority AI analysis.",
  keywords: [
    "CareerLens Pro pricing",
    "AI career tool India price",
    "career intelligence subscription India",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/pricing",
  },
  openGraph: {
    title: "CareerLens Pro – Pricing Plans India",
    description:
      "Get full access to AI resume analysis, unlimited job matches, all interview questions, salary insights and career roadmap for just ₹299.",
    url: "https://www.carrerlens.com/pricing",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function PricingPage() {
  return <App defaultTab="pricing" />;
}
