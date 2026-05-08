import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://carrerlens.com"),
  title: {
    template: "%s | CareerLens",
    default: "CareerLens – Free AI Resume Analyzer, Job Matching & Interview Prep India",
  },
  description:
    "Free AI-powered resume analyzer, job matcher, interview questions generator, salary calculator and career roadmap for India. Upload your resume and get instant career insights powered by Claude AI.",
  keywords: [
    "resume analyzer India",
    "free resume checker online India",
    "ATS resume scanner",
    "AI resume review India",
    "interview questions India",
    "interview questions Google Amazon Microsoft",
    "TCS interview questions",
    "Infosys interview prep",
    "Wipro interview questions",
    "software engineer interview India",
    "salary calculator India 2024",
    "IT salary India fresher",
    "career roadmap India",
    "how to become software engineer India",
    "job matching AI India",
    "fresher jobs India",
    "AI career advice India",
    "CareerLens",
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
    url: "https://carrerlens.com",
    siteName: "CareerLens",
    title: "CareerLens – Free AI Resume Analyzer & Career Intelligence India",
    description:
      "Upload your resume and get AI-powered job matches, interview questions, salary insights, and a personalised career roadmap. Free for Indian job seekers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CareerLens – AI Career Intelligence for India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerLens – Free AI Resume Analyzer & Career Intelligence India",
    description:
      "AI resume analyzer, job matching, interview questions, salary insights & career roadmap for India. Free to use.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://carrerlens.com",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CareerLens",
  url: "https://carrerlens.com",
  logo: "https://carrerlens.com/logo.png",
  description: "AI-powered career intelligence platform for India",
  sameAs: [],
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CareerLens",
  url: "https://carrerlens.com",
  description:
    "Free AI-powered career intelligence platform with resume analysis, job matching, interview prep, salary calculator and career roadmap for India",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  inLanguage: "en-IN",
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      name: "Free Plan",
    },
    {
      "@type": "Offer",
      price: "299",
      priceCurrency: "INR",
      name: "Pro Plan",
    },
  ],
  featureList: [
    "AI Resume Analyzer with ATS Score",
    "Personalised Job Matching",
    "Company-specific Interview Questions",
    "IT Salary Calculator India",
    "Career Roadmap Generator",
    "Coding Interview Preparation",
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
    </html>
  );
}
