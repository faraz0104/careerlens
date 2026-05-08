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
    default: "CareerLens – Free AI Resume Analyzer, Cover Letter, Job Matching & Interview Prep India",
  },
  description:
    "Free AI career tools for India: resume analyzer with ATS score, cover letter generator, LinkedIn profile optimizer, cold email to hiring managers, job matching, interview questions, salary calculator and career roadmap.",
  keywords: [
    // Resume
    "resume analyzer India", "ATS resume scanner India", "AI resume checker India",
    "resume score checker India", "free resume review India",
    // Cover letter
    "cover letter generator India", "AI cover letter India", "cover letter for software engineer India",
    "cover letter for fresher India", "professional cover letter India",
    // LinkedIn
    "LinkedIn profile optimizer India", "LinkedIn about section generator India",
    "LinkedIn bio optimizer India", "LinkedIn tips India 2024",
    // Cold email
    "cold email hiring manager India", "cold email template job India",
    "how to email hiring manager India",
    // Interview
    "interview questions India", "Google interview questions India",
    "Amazon interview questions India", "TCS interview questions",
    "Infosys interview prep India", "Wipro interview questions",
    // Jobs
    "AI job matching India", "jobs for freshers India 2024",
    "software engineer jobs India", "IT jobs India",
    // Salary
    "salary calculator India 2024", "software engineer salary India",
    "IT salary India fresher",
    // Roadmap
    "career roadmap India", "how to become software engineer India",
    // Brand
    "CareerLens", "AI career intelligence India",
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
    locale: "en_IN",
    url: "https://www.carrerlens.com",
    siteName: "CareerLens",
    title: "CareerLens – Free AI Resume, Cover Letter, Jobs & Interview Prep India",
    description:
      "Free AI career tools: resume analyzer, cover letter generator, LinkedIn optimizer, cold email writer, job matching, interview questions, salary calculator & career roadmap.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "CareerLens – AI Career Intelligence for India" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerLens – Free AI Career Tools India",
    description:
      "Resume analyzer, cover letter generator, LinkedIn optimizer, cold email, job matching, interview questions & salary calculator. All free.",
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
  logo: "https://www.carrerlens.com/logo.png",
  description: "AI-powered career intelligence platform for India",
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CareerLens",
  url: "https://www.carrerlens.com",
  description:
    "Free AI career platform with resume analysis, cover letter generator, LinkedIn optimizer, cold email writer, job matching, interview prep, salary calculator and career roadmap for India",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  inLanguage: "en-IN",
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "INR", name: "Free Plan" },
    { "@type": "Offer", price: "299", priceCurrency: "INR", name: "Pro Plan" },
  ],
  featureList: [
    "AI Resume Analyzer with ATS Score",
    "Cover Letter Generator",
    "LinkedIn Profile Optimizer",
    "Cold Email to Hiring Manager",
    "Personalised Job Matching",
    "Company-specific Interview Questions",
    "IT Salary Calculator India",
    "Career Roadmap Generator",
    "Resume Tailoring per Job Description",
    "Salary Negotiation Script",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
      <GoogleAnalytics gaId="G-V1GBKC8MJZ" />
    </html>
  );
}
