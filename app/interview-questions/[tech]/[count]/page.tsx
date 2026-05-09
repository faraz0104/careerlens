import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TECHS, ALL_TECHS } from "@/lib/interview-data";

const COUNT_OPTIONS = [10, 20, 30, 50] as const;
type CountOption = typeof COUNT_OPTIONS[number];

function parseCount(count: string): CountOption | null {
  const match = count.match(/^top-(\d+)$/);
  if (!match) return null;
  const n = parseInt(match[1]) as CountOption;
  return COUNT_OPTIONS.includes(n) ? n : null;
}

interface Props {
  params: Promise<{ tech: string; count: string }>;
}

export async function generateStaticParams() {
  const params: { tech: string; count: string }[] = [];
  for (const tech of Object.keys(TECHS)) {
    for (const n of COUNT_OPTIONS) {
      params.push({ tech, count: `top-${n}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tech, count } = await params;
  const data = TECHS[tech];
  const n = parseCount(count);
  if (!data || !n) return {};

  const actualCount = Math.min(n, data.questions.length);
  const techName = data.title.replace(" Interview Questions", "");
  const title = `Top ${actualCount} ${techName} Interview Questions & Answers (2025)`;
  const desc = `Crack your ${techName} interview with the top ${actualCount} most-asked questions and detailed answers for 2025. Free study guide for freshers and experienced developers.`;

  return {
    title: `${title} | CareerLens`,
    description: desc,
    alternates: { canonical: `https://www.carrerlens.com/interview-questions/${data.slug}/${count}` },
    openGraph: {
      title,
      description: desc,
      url: `https://www.carrerlens.com/interview-questions/${data.slug}/${count}`,
    },
  };
}

export default async function TopNInterviewPage({ params }: Props) {
  const { tech, count } = await params;
  const data = TECHS[tech];
  const n = parseCount(count);
  if (!data || !n) notFound();

  const questions = data.questions.slice(0, n);
  const actualCount = questions.length;
  const techName = data.title.replace(" Interview Questions", "");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Interview Questions", item: "https://www.carrerlens.com/interview-questions" },
      { "@type": "ListItem", position: 3, name: data.title, item: `https://www.carrerlens.com/interview-questions/${data.slug}` },
      { "@type": "ListItem", position: 4, name: `Top ${actualCount}`, item: `https://www.carrerlens.com/interview-questions/${data.slug}/${count}` },
    ],
  };

  const related = data.related.map((slug) => TECHS[slug]).filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div style={{ minHeight: "100vh", background: "#f7f6f2", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {/* NAV */}
        <nav style={{ background: "#1a1916", padding: "0 2rem", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8, color: "#f7f6f2", fontWeight: 800, fontSize: "1rem", letterSpacing: "-.02em" }}>
              <span style={{ background: "#e85a2a", color: "#fff", width: 26, height: 26, borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: ".75rem", fontWeight: 900 }}>C</span>
              CareerLens
            </Link>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <Link href="/interview-questions" style={{ color: "rgba(247,246,242,.7)", fontSize: ".82rem", textDecoration: "none" }}>All Topics</Link>
              <Link href="/interview" style={{ background: "#e85a2a", color: "#fff", padding: "6px 16px", borderRadius: 8, fontWeight: 700, fontSize: ".8rem", textDecoration: "none" }}>AI Interview Prep</Link>
            </div>
          </div>
        </nav>

        {/* BREADCRUMB */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e5e2de", padding: "10px 2rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: ".76rem", color: "#9a958f" }}>
            <Link href="/" style={{ color: "#9a958f", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 6px" }}>›</span>
            <Link href="/interview-questions" style={{ color: "#9a958f", textDecoration: "none" }}>Interview Questions</Link>
            <span style={{ margin: "0 6px" }}>›</span>
            <Link href={`/interview-questions/${data.slug}`} style={{ color: "#9a958f", textDecoration: "none" }}>{data.title}</Link>
            <span style={{ margin: "0 6px" }}>›</span>
            <span style={{ color: "#1a1916" }}>Top {actualCount}</span>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 2rem", display: "grid", gridTemplateColumns: "1fr 300px", gap: 32, alignItems: "start" }}>

          {/* MAIN CONTENT */}
          <main>
            {/* HERO */}
            <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 14, padding: "28px 32px", marginBottom: 24 }}>
              <div style={{ fontSize: "2.2rem", marginBottom: 12 }}>{data.icon}</div>
              <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#e85a2a", marginBottom: 10 }}>
                Free Study Guide · 2025
              </div>
              <h1 style={{ fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-.04em", lineHeight: 1.2, color: "#1a1916", margin: "0 0 14px" }}>
                Top {actualCount} {techName} Interview Questions &amp; Answers (2025)
              </h1>
              <p style={{ color: "#5a5650", fontSize: ".9rem", lineHeight: 1.7, margin: "0 0 20px" }}>
                {data.intro}
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: ".8rem", color: "#5a5650" }}>
                  <span style={{ color: "#2d8a4e", fontWeight: 700 }}>✓</span> {actualCount} questions
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: ".8rem", color: "#5a5650" }}>
                  <span style={{ color: "#2d8a4e", fontWeight: 700 }}>✓</span> Detailed answers
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: ".8rem", color: "#5a5650" }}>
                  <span style={{ color: "#2d8a4e", fontWeight: 700 }}>✓</span> 100% free
                </div>
              </div>

              {/* Count switcher */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: ".75rem", color: "#9a958f", alignSelf: "center" }}>Also available:</span>
                {COUNT_OPTIONS.filter(c => c !== n && c <= data.questions.length).map(c => (
                  <Link key={c} href={`/interview-questions/${data.slug}/top-${c}`}
                    style={{ fontSize: ".75rem", fontWeight: 700, padding: "4px 12px", borderRadius: 99, border: "1px solid #e5e2de", color: "#5a5650", textDecoration: "none", background: "#f7f6f2" }}>
                    Top {c}
                  </Link>
                ))}
                <Link href={`/interview-questions/${data.slug}`}
                  style={{ fontSize: ".75rem", fontWeight: 700, padding: "4px 12px", borderRadius: 99, border: "1px solid #e85a2a", color: "#e85a2a", textDecoration: "none", background: "rgba(232,90,42,.07)" }}>
                  All {data.questions.length} questions →
                </Link>
              </div>
            </div>

            {/* QUESTIONS */}
            <div>
              {questions.map((item, idx) => (
                <details
                  key={idx}
                  style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 10, marginBottom: 8, overflow: "hidden" }}
                  open={idx < 3}
                >
                  <summary style={{
                    padding: "16px 20px", cursor: "pointer", fontWeight: 700, fontSize: ".9rem", color: "#1a1916",
                    display: "flex", alignItems: "flex-start", gap: 12, lineHeight: 1.4,
                    listStyle: "none", userSelect: "none",
                  }}>
                    <span style={{ minWidth: 26, height: 26, borderRadius: "50%", background: "#e85a2a", color: "#fff", fontSize: ".7rem", fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      {idx + 1}
                    </span>
                    <span style={{ flex: 1 }}>{item.q}</span>
                    <span style={{ color: "#9a958f", fontSize: ".75rem", fontWeight: 400, marginLeft: 8, flexShrink: 0 }}>▼</span>
                  </summary>
                  <div style={{ padding: "14px 20px 18px 58px", color: "#3a3632", fontSize: ".88rem", lineHeight: 1.8, borderTop: "1px solid #f0ede8" }}>
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            {/* See more CTA */}
            {data.questions.length > actualCount && (
              <div style={{ marginTop: 16, textAlign: "center" }}>
                <Link href={`/interview-questions/${data.slug}`} style={{ display: "inline-block", background: "#fff", border: "2px solid #e85a2a", color: "#e85a2a", padding: "11px 28px", borderRadius: 9, fontWeight: 700, fontSize: ".88rem", textDecoration: "none" }}>
                  See all {data.questions.length} {techName} questions →
                </Link>
              </div>
            )}

            {/* AI CTA */}
            <div style={{ marginTop: 32, background: "linear-gradient(135deg, #1a1916, #2d2c28)", borderRadius: 14, padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <div>
                <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#e8a020", marginBottom: 6 }}>Level up your prep</div>
                <div style={{ color: "#f7f6f2", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>Get company-specific {techName} questions</div>
                <div style={{ color: "rgba(247,246,242,.65)", fontSize: ".82rem" }}>Upload your resume → get questions tailored to Google, Amazon, TCS, and 50+ companies.</div>
              </div>
              <Link href="/interview" style={{ display: "inline-block", background: "#e85a2a", color: "#fff", padding: "11px 24px", borderRadius: 9, fontWeight: 700, fontSize: ".85rem", textDecoration: "none", whiteSpace: "nowrap" }}>
                Try AI Interview Prep →
              </Link>
            </div>
          </main>

          {/* SIDEBAR */}
          <aside style={{ position: "sticky", top: 68 }}>
            <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 12, padding: "18px 20px", marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: ".82rem", color: "#1a1916", marginBottom: 12 }}>{techName} Question Sets</div>
              <Link href={`/interview-questions/${data.slug}`} style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid #f0ede8" }}>
                <span style={{ fontSize: ".82rem", color: "#5a5650" }}>All questions</span>
                <span style={{ fontSize: ".75rem", fontWeight: 700, color: "#e85a2a" }}>{data.questions.length} →</span>
              </Link>
              {COUNT_OPTIONS.filter(c => c <= data.questions.length).map(c => (
                <Link key={c} href={`/interview-questions/${data.slug}/top-${c}`}
                  style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid #f0ede8" }}>
                  <span style={{ fontSize: ".82rem", fontWeight: c === n ? 700 : 400, color: c === n ? "#e85a2a" : "#5a5650" }}>Top {c} questions</span>
                  {c === n && <span style={{ fontSize: ".7rem", background: "#e85a2a", color: "#fff", borderRadius: 4, padding: "2px 6px", fontWeight: 700 }}>you are here</span>}
                </Link>
              ))}
            </div>

            {related.length > 0 && (
              <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 12, padding: "18px 20px", marginBottom: 16 }}>
                <div style={{ fontWeight: 700, fontSize: ".82rem", color: "#1a1916", marginBottom: 12 }}>Related Topics</div>
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/interview-questions/${rel.slug}`} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid #f0ede8" }}>
                    <span style={{ fontSize: "1.1rem" }}>{rel.icon}</span>
                    <div>
                      <div style={{ fontSize: ".82rem", fontWeight: 600, color: "#1a1916" }}>{rel.title}</div>
                      <div style={{ fontSize: ".72rem", color: "#9a958f" }}>{rel.questions.length} questions</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ fontWeight: 700, fontSize: ".82rem", color: "#1a1916", marginBottom: 12 }}>All Interview Topics</div>
              {ALL_TECHS.map((t) => (
                <Link key={t.slug} href={`/interview-questions/${t.slug}`} style={{
                  textDecoration: "none", display: "flex", alignItems: "center", gap: 8,
                  padding: "7px 0", borderBottom: "1px solid #f0ede8",
                  color: t.slug === data.slug ? "#e85a2a" : "#5a5650",
                  fontWeight: t.slug === data.slug ? 700 : 400,
                  fontSize: ".8rem",
                }}>
                  <span>{t.icon}</span> {t.title.replace(" Interview Questions", "")}
                </Link>
              ))}
            </div>
          </aside>
        </div>

        <div style={{ borderTop: "1px solid #e5e2de", padding: "24px 2rem", textAlign: "center", fontSize: ".75rem", color: "#9a958f", marginTop: 24 }}>
          © 2025 CareerLens · <Link href="/" style={{ color: "#9a958f" }}>Home</Link> · <Link href="/interview-questions" style={{ color: "#9a958f" }}>Interview Questions</Link> · <Link href="/pricing" style={{ color: "#9a958f" }}>Pricing</Link>
        </div>

        <style>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 300px"] { grid-template-columns: 1fr !important; }
            aside { position: static !important; }
          }
          details summary::-webkit-details-marker { display: none; }
          details[open] summary span:last-child { transform: rotate(180deg); }
        `}</style>
      </div>
    </>
  );
}
