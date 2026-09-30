import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Resume Checker – Free ATS Resume Score & Analysis",
  description:
    "Check your ATS resume score, keyword gaps, skill match, and role fit with CareerLens. Free AI resume analysis for job seekers, freshers, and experienced professionals.",
  alternates: {
    canonical: "https://www.carrerlens.com/ai-resume-checker",
  },
  openGraph: {
    title: "AI Resume Checker – Free ATS Resume Score & Analysis",
    description:
      "Upload a resume, review ATS compatibility, and find missing keywords and skill gaps before applying. Free and fast.",
    url: "https://www.carrerlens.com/ai-resume-checker",
    type: "website",
    siteName: "CareerLens",
  },
};

const metrics = [
  { value: "ATS", label: "resume scan" },
  { value: "87%", label: "keyword match average" },
  { value: "5 min", label: "to review results" },
  { value: "Free", label: "no login required" },
];

const features = [
  "Resume upload in PDF or DOC/DOCX if supported",
  "ATS compatibility score and estimated fit",
  "Keyword analysis and missing skill suggestions",
  "Skills detected and role-specific gaps",
  "Experience, education, and formatting review",
  "Actionable improvement steps and job description match",
];

export default function AIResumeCheckerPage() {
  return (
    <main style={{ background: "#f8f7f4", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <nav style={{ background: "#111827", padding: "0 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", minHeight: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 800, letterSpacing: "-0.04em" }}>CareerLens</Link>
          <div style={{ display: "flex", gap: 16, alignItems: "center", fontSize: ".83rem" }}>
            <Link href="/resume" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Resume tools</Link>
            <Link href="/jobs" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Jobs</Link>
            <Link href="/interview-questions" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Interview prep</Link>
          </div>
        </div>
      </nav>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "44px 1.5rem 24px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(79,70,229,0.25)", background: "rgba(79,70,229,0.08)", color: "#4338ca", borderRadius: 999, padding: "7px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
          Free AI resume analysis
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 28, marginTop: 20, alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.08, letterSpacing: "-0.06em", color: "#111827", margin: "0 0 18px" }}>
              Free AI Resume Checker &amp; ATS Resume Score
            </h1>
            <p style={{ fontSize: "1.04rem", lineHeight: 1.75, color: "#4b5563", margin: "0 0 24px", maxWidth: 700 }}>
              Upload your resume to get an estimate of ATS compatibility, missing keywords, skill gaps, section-level feedback, and how well it matches a target job description.
              This is a helpful screening estimate, not a guarantee of an interview.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
              <Link href="/resume" style={{ background: "#4338ca", color: "#fff", textDecoration: "none", padding: "12px 18px", borderRadius: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                Check My Resume →
              </Link>
              <Link href="/tools" style={{ background: "#fff", color: "#111827", border: "1px solid rgba(17,24,39,0.12)", textDecoration: "none", padding: "12px 18px", borderRadius: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                Explore Resume Tools
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(120px, 1fr))", gap: 12 }}>
              {metrics.map((item) => (
                <div key={item.label} style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 14, padding: "16px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#111827" }}>{item.value}</div>
                  <div style={{ fontSize: ".72rem", color: "#6b7280", marginTop: 4 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 18, padding: 22, boxShadow: "0 10px 30px rgba(17,24,39,0.05)" }}>
            <div style={{ fontSize: ".74rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#4338ca", marginBottom: 14 }}>What the report checks</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "#374151", lineHeight: 1.8, fontSize: ".9rem" }}>
              {features.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "18px 1.5rem 50px" }}>
        <div style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 18, padding: 24 }}>
          <h2 style={{ margin: "0 0 12px", fontSize: "clamp(1.4rem, 3vw, 2.1rem)", lineHeight: 1.1, letterSpacing: "-0.04em", color: "#111827" }}>
            What you should expect from an ATS score
          </h2>
          <p style={{ margin: "0 0 20px", color: "#4b5563", lineHeight: 1.75 }}>
            ATS scoring is an estimate used to identify likely issues like missing keywords, poor structure, or weak job-description alignment. It helps you understand whether your resume is easy for a recruiter system to parse and whether it is targeted enough for the role you want.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            <div style={{ background: "#f8fafc", borderRadius: 14, padding: 18 }}>
              <div style={{ fontSize: ".72rem", fontWeight: 800, color: "#4338ca", letterSpacing: ".08em", textTransform: "uppercase" }}>ATS fit</div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#111827", marginTop: 10 }}>78–90</div>
              <p style={{ margin: "8px 0 0", color: "#4b5563", lineHeight: 1.6 }}>Often strong compatibility if the resume structure is clean and keywords are aligned.</p>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 14, padding: 18 }}>
              <div style={{ fontSize: ".72rem", fontWeight: 800, color: "#4338ca", letterSpacing: ".08em", textTransform: "uppercase" }}>Skills gap</div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#111827", marginTop: 10 }}>Missing</div>
              <p style={{ margin: "8px 0 0", color: "#4b5563", lineHeight: 1.6 }}>Common issues: weak bullet points, missing role keywords, or no measurable impact numbers.</p>
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 14, padding: 18 }}>
              <div style={{ fontSize: ".72rem", fontWeight: 800, color: "#4338ca", letterSpacing: ".08em", textTransform: "uppercase" }}>Job match</div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#111827", marginTop: 10 }}>Role fit</div>
              <p style={{ margin: "8px 0 0", color: "#4b5563", lineHeight: 1.6 }}>The best resumes align wording, skills, and impact with the target role or job description.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          <Link href="/resume" style={{ textDecoration: "none", background: "#111827", color: "#fff", borderRadius: 16, padding: 22 }}>
            <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", color: "#cbd5e1", textTransform: "uppercase" }}>Try the tool</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, marginTop: 12 }}>Resume Checker</div>
            <div style={{ color: "rgba(255,255,255,0.75)", marginTop: 8, lineHeight: 1.6 }}>Get an instant ATS score and actionable feedback.</div>
          </Link>

          <Link href="/tools/resume-job-match" style={{ textDecoration: "none", background: "#fff", color: "#111827", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 16, padding: 22 }}>
            <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", color: "#4338ca", textTransform: "uppercase" }}>Match</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, marginTop: 12 }}>Resume vs Job Description</div>
            <div style={{ color: "#4b5563", marginTop: 8, lineHeight: 1.6 }}>Understand which skills and keywords are missing from a target role.</div>
          </Link>

          <Link href="/tools/resume-keyword-checker" style={{ textDecoration: "none", background: "#fff", color: "#111827", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 16, padding: 22 }}>
            <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", color: "#4338ca", textTransform: "uppercase" }}>Keywords</div>
            <div style={{ fontSize: "1.4rem", fontWeight: 800, marginTop: 12 }}>Keyword Scanner</div>
            <div style={{ color: "#4b5563", marginTop: 8, lineHeight: 1.6 }}>See the exact job keywords to add for stronger ATS alignment.</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
