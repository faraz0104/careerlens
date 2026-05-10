import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carrerlens.com"),
  title: {
    template: "%s | CareerLens",
    default: "CareerLens – Free AI Resume Analyzer, ATS Score, Interview Prep & Career Tools",
  },
  description:
    "Free AI career tools: resume analyzer with ATS score, cover letter generator, LinkedIn optimizer, cold email writer, job matching, interview questions, salary calculator and career roadmap. Trusted by 50,000+ job seekers globally.",
  keywords: [
    // Resume & ATS
    "resume analyzer", "ATS resume scanner", "AI resume checker", "resume score checker",
    "free resume review", "ATS score", "resume keywords", "resume optimization",
    // Cover letter
    "cover letter generator", "AI cover letter", "cover letter for software engineer",
    "professional cover letter", "free cover letter maker",
    // Interview prep
    "interview questions", "technical interview prep", "system design interview",
    "behavioral interview questions", "coding interview preparation",
    "react interview questions", "javascript interview questions", "python interview questions",
    "sql interview questions", "java interview questions", "FAANG interview prep",
    // Career
    "software engineer career", "software engineer salary", "tech salary negotiation",
    "remote software engineer jobs", "how to get a programming job",
    "full stack developer roadmap", "devops roadmap", "programming roadmap 2026",
    // Blog topics
    "best programming languages 2026", "will ai replace programmers",
    "how to learn coding", "developer portfolio", "github portfolio",
    "leetcode study plan", "system design study plan",
    // Tools
    "AI job matching", "LinkedIn profile optimizer", "cold email templates",
    "salary calculator", "career roadmap generator",
    // Brand
    "CareerLens", "AI career tools", "career intelligence platform",
  ],
  authors: [{ name: "CareerLens" }],
  creator: "CareerLens",
  publisher: "CareerLens",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://www.carrerlens.com",
    siteName: "CareerLens",
    title: "CareerLens – Free AI Resume Analyzer, ATS Score & Career Tools",
    description:
      "Free AI career platform: resume ATS scanner, cover letter generator, LinkedIn optimizer, interview prep, salary data, and job matching for developers and tech professionals.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "CareerLens – AI Career Tools for Developers" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerLens – Free AI Career Tools for Developers",
    description:
      "Resume ATS scanner, cover letter generator, interview prep, salary data, and job matching. Free for all tech professionals.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.carrerlens.com",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CareerLens",
  url: "https://www.carrerlens.com",
  logo: { "@type": "ImageObject", url: "https://www.carrerlens.com/logo.png", width: 180, height: 60 },
  description: "AI-powered career intelligence platform for developers and tech professionals worldwide.",
  sameAs: [
    "https://twitter.com/careerlens",
    "https://linkedin.com/company/careerlens",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@careerlens.io",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CareerLens",
  url: "https://www.carrerlens.com",
  description: "Free AI career tools: resume ATS scanner, interview prep, salary data, and job matching for tech professionals.",
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.carrerlens.com/interview-questions?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CareerLens",
  url: "https://www.carrerlens.com",
  description:
    "Free AI career platform with resume ATS analysis, cover letter generator, LinkedIn optimizer, cold email writer, job matching, interview prep, salary calculator and career roadmap for tech professionals worldwide.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  inLanguage: "en",
  isAccessibleForFree: true,
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free Plan", description: "Resume scanner, job matching, interview questions" },
    { "@type": "Offer", price: "20", priceCurrency: "USD", name: "Pro Plan", description: "Unlimited scans, resume generation, all AI features" },
  ],
  featureList: [
    "AI Resume Analyzer with ATS Score",
    "Cover Letter Generator",
    "LinkedIn Profile Optimizer",
    "Cold Email to Hiring Manager",
    "Personalised Job Matching",
    "Company-specific Interview Questions",
    "Salary Calculator",
    "Career Roadmap Generator",
    "Resume Tailoring per Job Description",
    "Salary Negotiation Script",
    "500+ Free Interview Questions",
    "Career Blog with Expert Articles",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1240",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
      <GoogleAnalytics gaId="G-V1GBKC8MJZ" />
    </html>
  );
}
