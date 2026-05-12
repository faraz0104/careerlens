import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free AI Cover Letter Generator India 2026 — Personalised in 10 Seconds | CareerLens",
  description:
    "Paste any job description and get a personalised cover letter in 10 seconds. Tailored to each company — not a template. Beats ATS filters and impresses hiring managers. Free, no login required.",
  keywords: [
    "cover letter generator India 2026",
    "AI cover letter generator free India",
    "cover letter for software engineer India",
    "cover letter generator online India",
    "professional cover letter India 2026",
    "cover letter for fresher India",
    "cover letter TCS Infosys Wipro",
    "cover letter for IT jobs India",
    "how to write cover letter India",
    "cover letter generator no signup",
    "best cover letter generator India 2026",
    "cover letter for product manager India",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/cover-letter",
  },
  openGraph: {
    title: "Free AI Cover Letter Generator India – Personalised in 10 Seconds",
    description:
      "Paste any job description and get a personalised cover letter instantly. No templates, no fluff — sounds like you, not a robot.",
    url: "https://www.carrerlens.com/cover-letter",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Cover Letter Generator India",
    description:
      "Paste any JD → get a personalised cover letter in 10 seconds. Free for Indian job seekers.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens AI Cover Letter Generator",
  url: "https://www.carrerlens.com/cover-letter",
  description:
    "Free AI-powered cover letter generator for Indian job seekers. Paste any job description and get a personalised, professional cover letter in seconds.",
  applicationCategory: "BusinessApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  featureList: [
    "Personalised cover letter per job description",
    "ATS-optimised language",
    "Tone matched to company culture",
    "One-click copy",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I write a cover letter for IT jobs in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For IT jobs in India, a good cover letter should be 3 paragraphs: (1) why you're excited about the specific company, (2) one quantified achievement relevant to the role, (3) a clear call to action. Keep it under 250 words. CareerLens generates this automatically when you paste the job description.",
      },
    },
    {
      "@type": "Question",
      name: "Do Indian companies read cover letters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — especially startups, product companies, and foreign MNCs in India. For TCS, Infosys, Wipro walk-ins, cover letters matter less. For companies like Razorpay, Swiggy, Google India, Zepto, or any startup, a strong cover letter significantly increases your chances.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a good cover letter for freshers in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For freshers, focus on: (1) your final year project and what problem it solved, (2) skills that match the JD, (3) genuine excitement about the company's product. Avoid generic phrases like 'I am a hardworking and dedicated individual'.",
      },
    },
  ],
};

export default function CoverLetterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <App defaultTab="resume" />
    </>
  );
}
