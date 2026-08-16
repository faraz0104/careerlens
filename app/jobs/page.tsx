import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "AI Job Matching India 2026 — Jobs Matched to Your Resume | CareerLens",
  description:
    "Get jobs matched to your exact resume with a match score. See live openings from LinkedIn, Naukri & Indeed for your role. Plus cold email generator to reach hiring managers directly. Free.",
  keywords: [
    "jobs matched to my resume India",
    "AI job matching India 2026",
    "software engineer jobs India 2026",
    "IT jobs for freshers India 2026",
    "jobs in Bangalore Hyderabad Pune 2026",
    "cold email hiring manager India",
    "job search tools India",
    "tech jobs India 2026",
    "remote jobs India 2026",
    "startup jobs India 2026",
    "job recommendations based on skills India",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/jobs",
  },
  openGraph: {
    title: "AI Job Matching India – Personalised Jobs + Cold Email Generator",
    description:
      "AI matches jobs to your resume with a match score. Then write a cold email to the hiring manager in one click. Free to try.",
    url: "https://www.carrerlens.com/jobs",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Job Matching – CareerLens",
  url: "https://www.carrerlens.com/jobs",
  description:
    "AI-powered job matching with cold email generator for Indian job seekers",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Jobs", item: "https://www.carrerlens.com/jobs" },
    ],
  },
};

export default function JobsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 20px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eef0ff", color: "#5046e4", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
            Job fit strategy
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.7rem)", lineHeight: 1.15, letterSpacing: "-.04em", margin: "16px 0 10px" }}>
            Find roles that match your background instead of applying blindly.
          </h1>
          <p style={{ maxWidth: 740, margin: "0 auto", color: "#4b5568", fontSize: ".96rem", lineHeight: 1.7 }}>
            Matching your experience to the right openings helps you avoid low-conversion applications. The best search strategies combine skill alignment, role profile fit, and outreach to hiring teams that are actually open to your profile.
          </p>
        </div>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginBottom: 22 }}>
          {[
            ["Role alignment", "Focus on jobs where your experience matches the majority of skills, scope, and seniority requirements."],
            ["Application quality", "Tailor the resume and cover note to the role instead of sending a generic application to every company."],
            ["Hiring manager outreach", "Use concise, relevant outreach when a job description is a strong match but the ATS signal is weak."],
          ].map(([title, text]) => (
            <div key={title} style={{ background: "#fff", border: "1px solid rgba(15,23,42,0.08)", borderRadius: 14, padding: 18 }}>
              <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
              <p style={{ margin: 0, color: "#5a5650", fontSize: ".82rem", lineHeight: 1.7 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <App defaultTab="jobs" />
    </>
  );
}
