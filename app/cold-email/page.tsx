import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Cold Email Generator India – Email Hiring Managers & Get Interviews",
  description:
    "AI writes a personalised cold email to any hiring manager in India. Enter company + role → get a 4-line email that actually gets replies. Used by 10,000+ job seekers. Free to try.",
  keywords: [
    "cold email hiring manager India",
    "cold email template for job India",
    "how to email hiring manager India",
    "cold outreach email job India",
    "cold email for software engineer India",
    "referral email template India",
    "how to reach out to recruiter India",
    "cold email for fresher India",
    "cold email Flipkart Swiggy Zomato Zepto",
    "networking email template India",
    "job application email template India",
    "how to contact hiring manager LinkedIn India",
  ],
  alternates: {
    canonical: "https://carrerlens.com/cold-email",
  },
  openGraph: {
    title: "Cold Email Generator India – Email Hiring Managers & Get Interviews",
    description:
      "AI writes a 4-line cold email to any hiring manager. No templates. Personalised to the company and role. Gets replies.",
    url: "https://carrerlens.com/cold-email",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Email Generator India – Get Hiring Manager Replies",
    description:
      "Enter company + role → AI writes a cold email that gets replies. Free for Indian job seekers.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Cold Email Generator",
  url: "https://carrerlens.com/cold-email",
  description:
    "AI-powered cold email generator that writes personalised outreach emails to hiring managers at any company in India",
  applicationCategory: "BusinessApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  featureList: [
    "Personalised subject line per company",
    "4-line email body — no fluff",
    "References real company details",
    "Proven high reply-rate format",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I cold email a hiring manager in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To cold email a hiring manager in India: (1) Find their email on LinkedIn, company website, or use [name]@company.com format. (2) Subject line should be specific — 'SDE-2 application — 4 years React, previously at Razorpay'. (3) Email body: 4 lines max — compliment about the company, your one relevant achievement, clear ask for a 15-minute call, sign off. Never ask 'are there any openings?' — they will ignore it.",
      },
    },
    {
      "@type": "Question",
      name: "Does cold emailing work for getting jobs in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — especially at Indian startups and product companies. For companies like Zepto, Meesho, CRED, Groww, Razorpay, and other funded startups, a well-written cold email to the hiring manager or CTO gets a reply rate of 15–30%. For service companies like TCS and Infosys, apply through official portals instead.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a hiring manager's email address in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To find hiring manager emails in India: (1) LinkedIn — message them directly. (2) Try [firstname]@company.com or [firstname].[lastname]@company.com. (3) Use Hunter.io to find email patterns for the company domain. (4) Check the company's 'About' or 'Team' page. (5) AngelList / Wellfound lists founders and hiring managers at Indian startups.",
      },
    },
  ],
};

export default function ColdEmailPage() {
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
      <App defaultTab="jobs" />
    </>
  );
}
