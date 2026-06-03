import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Resume Review India 2026 — Instant AI Feedback | CareerLens",
  description: "Get a free resume review with AI feedback. Detailed analysis of your resume's ATS score, skill gaps, content quality and formatting. No login, instant results.",
  keywords: ["free resume review India","free resume review India 2026","AI resume review India","resume feedback free India","online resume review India","resume review tool India"],
  alternates: { canonical: "https://www.carrerlens.com/free-resume-review" },
  openGraph: {
    title: "Free Resume Review India 2026 — AI Feedback in 30 Seconds | CareerLens",
    description: "Get honest AI feedback on your resume. ATS score, skill gaps, improvements. Free, no login.",
    url: "https://www.carrerlens.com/free-resume-review",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is CareerLens resume review really free?", acceptedAnswer: { "@type": "Answer", text: "Yes. CareerLens gives you a full AI resume review for free — including your ATS score, missing keywords, skill gap analysis, and top 5 improvements. No credit card or sign-up required. Pro features (AI resume rewrite, unlimited scans, cover letter generator) require upgrading." } },
    { "@type": "Question", name: "How is AI resume review better than a human review?", acceptedAnswer: { "@type": "Answer", text: "AI resume review is instant (30 seconds vs days), checks against ATS criteria that humans often miss, is unbiased, and available 24/7. Human reviewers are better for industry-specific advice and personal branding. CareerLens combines both — AI analysis for ATS and data, with actionable human-readable feedback." } },
    { "@type": "Question", name: "What does a good resume review include?", acceptedAnswer: { "@type": "Answer", text: "A thorough resume review should cover: ATS compatibility score, keyword gap analysis, content quality (are achievements quantified?), formatting review, skills assessment vs the target role, and specific actionable improvements. CareerLens covers all of these." } },
  ],
};

export default function FreeResumeReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Resume Review — Instant AI Feedback
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 6px" }}>
          Get an honest AI review of your resume in 30 seconds. No sugarcoating — see your ATS score, what keywords are missing, and the exact changes that will get you more callbacks.
        </p>
      </div>
      <App defaultTab="resume" />
    </>
  );
}
