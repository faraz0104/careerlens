import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "AI Career Roadmap India 2026 — Step-by-Step Path to Your Dream IT Role | CareerLens",
  description:
    "Get a personalised AI career roadmap based on your resume. Know exactly which skills to learn next to become a software engineer, data scientist, or product manager in India. Free, instant.",
  keywords: [
    "career roadmap India 2026",
    "how to become software engineer India",
    "data scientist career path India",
    "product manager roadmap India",
    "DevOps career path India",
    "AI career roadmap India 2026",
    "career guidance India freshers",
    "skills to learn for IT jobs India",
    "career switch IT India 2026",
    "career planning India 2026",
    "what skills to learn for software engineer India",
    "career path IT freshers India",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/roadmap",
  },
  openGraph: {
    title: "AI Career Roadmap India 2026 — Personalised Step-by-Step Path | CareerLens",
    description:
      "Know exactly which skills to learn next. AI builds a personalised roadmap to your target IT role based on your current resume. Free, instant, no login.",
    url: "https://www.carrerlens.com/roadmap",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Career Roadmap – CareerLens",
  url: "https://www.carrerlens.com/roadmap",
  description:
    "Personalised AI-generated career roadmap for IT professionals in India based on current skills and target role",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Roadmap", item: "https://www.carrerlens.com/roadmap" },
    ],
  },
};

export default function RoadmapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 20px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eef0ff", color: "#5046e4", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
            Career roadmap
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.7rem)", lineHeight: 1.15, letterSpacing: "-.04em", margin: "16px 0 10px" }}>
            Plan the next skills that move you toward your target role.
          </h1>
          <p style={{ maxWidth: 740, margin: "0 auto", color: "#4b5568", fontSize: ".96rem", lineHeight: 1.7 }}>
            A strong roadmap connects your current skills to the next promotion, job switch, or role transition. It focuses on practical gaps, role requirements, and a manageable sequence of projects and learning milestones.
          </p>
        </div>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginBottom: 22 }}>
          {[
            ["Skill gaps", "Identify the specific technical, domain, and communication gaps that prevent you from being competitive for your target role."],
            ["Project prioritization", "Choose work that adds evidence and portfolio depth rather than random learning without visible outcomes."],
            ["Career transitions", "Build a realistic step-by-step plan to move from one role to another with stronger alignment and credibility."],
          ].map(([title, text]) => (
            <div key={title} style={{ background: "#fff", border: "1px solid rgba(15,23,42,0.08)", borderRadius: 14, padding: 18 }}>
              <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
              <p style={{ margin: 0, color: "#5a5650", fontSize: ".82rem", lineHeight: 1.7 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <App defaultTab="roadmap" />
    </>
  );
}
