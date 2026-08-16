import type { Metadata } from "next";
import App from "./CareerLens";

export const metadata: Metadata = {
  title: "Free AI Resume Checker India 2026 — ATS Score, Jobs & Interview Prep | CareerLens",
  description:
    "Upload your resume and instantly get your ATS score, missing keywords, skill gaps, matched jobs and interview questions. Free, no login, 30 seconds. Trusted by 50,000+ Indian job seekers in 2026.",
  category: "Career Development",
  classification: "BusinessApplication",
  keywords: [
    "free ATS resume checker India 2026",
    "resume analyzer India free",
    "ATS score checker free India",
    "why resume not getting shortlisted India",
    "AI resume review India 2026",
    "resume score checker India",
    "job search tool India 2026",
    "interview prep tool India",
    "AI career tools India free",
    "resume keyword checker India",
    "free career tools for freshers India",
    "resume scanner India no login",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com",
  },
  openGraph: {
    title: "Free ATS Resume Checker India — Get More Interview Calls | CareerLens",
    description: "Find out why your resume isn't getting responses. ATS score, skill gaps, job matches — free, 30 seconds, no login.",
    url: "https://www.carrerlens.com",
    type: "website",
    siteName: "CareerLens",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CareerLens ATS resume checker and career tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Resume Checker India 2026 — ATS Score, Jobs & Interview Prep",
    description: "Get your ATS score, missing keywords, skill gaps and targeted interview prep in 30 seconds.",
    images: ["/og-image.png"],
  },
};

const valuePoints = [
  {
    title: "ATS score before sending",
    text: "See whether your resume is likely to pass recruiter and applicant tracking systems before you apply to another role.",
  },
  {
    title: "Gap analysis that is actionable",
    text: "Find missing keywords, weak bullets, and role-specific skill gaps instead of vague generic feedback.",
  },
  {
    title: "Career choices backed by evidence",
    text: "Compare your experience with live job requirements, interview patterns, and the skills you need next.",
  },
];

const workflow = [
  "Upload your resume or paste your experience into CareerLens.",
  "Check the ATS score and match percentage against target roles.",
  "Fix the strongest gaps: keywords, projects, metrics, and role fit.",
  "Prepare interview questions and job search outreach with clearer direction.",
];

export default function HomePage() {
  return (
    <>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eef0ff", color: "#5046e4", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
            Career growth toolkit
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.7rem)", lineHeight: 1.15, letterSpacing: "-.04em", margin: "16px 0 10px" }}>
            Build a resume, job search, and interview strategy that actually matches modern hiring.
          </h2>
          <p style={{ maxWidth: 720, margin: "0 auto", color: "#4b5568", fontSize: ".96rem", lineHeight: 1.7 }}>
            CareerLens helps Indian and global job seekers identify what is blocking interview calls, which skills to add next, and how to present experience in a way recruiters and ATS systems can understand.
          </p>
        </div>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginBottom: 28 }}>
          {valuePoints.map((item) => (
            <div key={item.title} style={{ background: "#fff", border: "1px solid rgba(15,23,42,0.08)", borderRadius: 16, padding: 20, boxShadow: "0 1px 3px rgba(15,23,42,.05)" }}>
              <div style={{ fontSize: ".74rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#5046e4", marginBottom: 10 }}>{item.title}</div>
              <p style={{ margin: 0, color: "#4b5568", fontSize: ".85rem", lineHeight: 1.7 }}>{item.text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, #f5f3ff, #ffffff)", border: "1px solid rgba(80,70,228,.14)", borderRadius: 18, padding: "22px 24px", marginBottom: 24 }}>
          <div style={{ fontSize: ".74rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#5046e4", marginBottom: 14 }}>How the workflow works</div>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {workflow.map((step, index) => (
              <div key={step} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#5046e4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, flexShrink: 0 }}>{index + 1}</div>
                <p style={{ margin: 0, color: "#374151", fontSize: ".84rem", lineHeight: 1.7 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <App />
    </>
  );
}
