import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "CareerLens Blog — Career Tips, Salary Insights & Tech Trends 2026",
  description: "Expert articles on tech careers in India — salary data, in-demand skills, resume tips, interview prep, and the latest trends shaping the IT job market in 2026.",
  alternates: { canonical: "https://www.carrerlens.com/blog" },
  openGraph: {
    title: "CareerLens Blog — Career Tips, Salary Insights & Tech Trends",
    description: "Expert articles on tech careers, salary data, interview prep, and the skills driving India's IT job market in 2026.",
    url: "https://www.carrerlens.com/blog",
  },
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return new Date(dateStr).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.carrerlens.com/blog" },
    ],
  };

  return (
    <>
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
              <Link href="/interview-questions" style={{ color: "rgba(247,246,242,.7)", fontSize: ".82rem", textDecoration: "none" }}>Interview Q&A</Link>
              <Link href="/blog" style={{ color: "#f7f6f2", fontSize: ".82rem", textDecoration: "none", fontWeight: 600 }}>Blog</Link>
              <Link href="/" style={{ background: "#e85a2a", color: "#fff", padding: "6px 16px", borderRadius: 8, fontWeight: 700, fontSize: ".8rem", textDecoration: "none" }}>Analyze Resume</Link>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <div style={{ background: "#1a1916", padding: "52px 2rem 44px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#e85a2a", marginBottom: 12 }}>CareerLens Blog</div>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f7f6f2", letterSpacing: "-.04em", lineHeight: 1.15, margin: "0 0 14px", maxWidth: 640 }}>
              Career insights, salary data &amp; tech trends for India's job market
            </h1>
            <p style={{ color: "rgba(247,246,242,.65)", fontSize: ".95rem", lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
              Real data. No fluff. Articles written to help you land better jobs, earn more, and stay ahead of what's changing in tech.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 2rem" }}>

          {/* FEATURED POST */}
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: 40 }}>
            <div style={{
              background: featured.coverColor,
              borderRadius: 16,
              padding: "clamp(24px, 4vw, 40px)",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 32,
              alignItems: "center",
              transition: "transform .2s, box-shadow .2s",
            }}
              className="blog-featured"
            >
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
                  <span style={{ background: "#e85a2a", color: "#fff", fontSize: ".68rem", fontWeight: 700, padding: "3px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>Featured</span>
                  <span style={{ background: "rgba(255,255,255,.12)", color: "rgba(247,246,242,.8)", fontSize: ".68rem", fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>{featured.category}</span>
                </div>
                <h2 style={{ fontWeight: 800, fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", color: "#f7f6f2", letterSpacing: "-.03em", lineHeight: 1.3, margin: "0 0 14px" }}>
                  {featured.title}
                </h2>
                <p style={{ color: "rgba(247,246,242,.7)", fontSize: ".88rem", lineHeight: 1.7, margin: "0 0 20px" }}>
                  {featured.intro.slice(0, 180)}...
                </p>
                <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                  <span style={{ color: "rgba(247,246,242,.5)", fontSize: ".76rem" }}>{featured.author}</span>
                  <span style={{ color: "rgba(247,246,242,.3)", fontSize: ".76rem" }}>·</span>
                  <span style={{ color: "rgba(247,246,242,.5)", fontSize: ".76rem" }}>{featured.readTime}</span>
                  <span style={{ color: "rgba(247,246,242,.3)", fontSize: ".76rem" }}>·</span>
                  <span style={{ color: "rgba(247,246,242,.5)", fontSize: ".76rem" }}>{timeAgo(featured.publishedAt)}</span>
                </div>
              </div>
              <div style={{ fontSize: "4rem", display: "flex", alignItems: "center", justifyContent: "center", minWidth: 80, opacity: .9 }}>
                {featured.coverEmoji}
              </div>
            </div>
          </Link>

          {/* CATEGORIES ROW */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
            <span style={{ background: "#1a1916", color: "#f7f6f2", fontSize: ".76rem", fontWeight: 700, padding: "6px 14px", borderRadius: 20 }}>All Articles</span>
            {BLOG_CATEGORIES.map(cat => (
              <span key={cat} style={{ background: "#fff", border: "1px solid #e5e2de", color: "#5a5650", fontSize: ".76rem", fontWeight: 600, padding: "6px 14px", borderRadius: 20 }}>
                {cat}
              </span>
            ))}
          </div>

          {/* POST GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20, marginBottom: 48 }}>
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }} className="blog-card-link">
                <article className="blog-card" style={{
                  background: "#fff",
                  border: "1px solid #e5e2de",
                  borderRadius: 12,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow .2s, border-color .2s",
                }}>
                  {/* Card header band */}
                  <div style={{ background: post.coverColor, padding: "20px 22px", display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: "1.8rem" }}>{post.coverEmoji}</span>
                    <span style={{ background: "rgba(255,255,255,.15)", color: "rgba(247,246,242,.9)", fontSize: ".68rem", fontWeight: 700, padding: "3px 10px", borderRadius: 20, letterSpacing: ".04em" }}>
                      {post.category}
                    </span>
                  </div>
                  <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontWeight: 700, fontSize: ".95rem", color: "#1a1916", letterSpacing: "-.02em", lineHeight: 1.4, margin: "0 0 10px", flex: 1 }}>
                      {post.title}
                    </h3>
                    <p style={{ color: "#6a6460", fontSize: ".82rem", lineHeight: 1.6, margin: "0 0 16px" }}>
                      {post.intro.slice(0, 120)}...
                    </p>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", paddingTop: 12, borderTop: "1px solid #f0ede8" }}>
                      <span style={{ color: "#9a958f", fontSize: ".73rem" }}>{post.readTime}</span>
                      <span style={{ color: "#ccc", fontSize: ".73rem" }}>·</span>
                      <span style={{ color: "#9a958f", fontSize: ".73rem" }}>{timeAgo(post.publishedAt)}</span>
                      <span style={{ marginLeft: "auto", color: "#e85a2a", fontWeight: 700, fontSize: ".73rem" }}>Read →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div style={{ background: "linear-gradient(135deg, #1a1916, #2d2c28)", borderRadius: 14, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#e8a020", marginBottom: 6 }}>Free for all freshers</div>
              <div style={{ color: "#f7f6f2", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>Check your resume's ATS score before your next application</div>
              <div style={{ color: "rgba(247,246,242,.6)", fontSize: ".82rem" }}>Upload your resume → get keyword match score, skill gaps, and a ranked list of matching jobs.</div>
            </div>
            <Link href="/" style={{ display: "inline-block", background: "#e85a2a", color: "#fff", padding: "12px 24px", borderRadius: 9, fontWeight: 700, fontSize: ".88rem", textDecoration: "none", whiteSpace: "nowrap" }}>
              Scan My Resume Free →
            </Link>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ borderTop: "1px solid #e5e2de", padding: "24px 2rem", textAlign: "center", fontSize: ".75rem", color: "#9a958f", marginTop: 16 }}>
          © 2026 CareerLens ·{" "}
          <Link href="/" style={{ color: "#9a958f" }}>Home</Link> ·{" "}
          <Link href="/blog" style={{ color: "#9a958f" }}>Blog</Link> ·{" "}
          <Link href="/interview-questions" style={{ color: "#9a958f" }}>Interview Q&A</Link> ·{" "}
          <Link href="/pricing" style={{ color: "#9a958f" }}>Pricing</Link>
        </div>

        <style>{`
          .blog-featured { cursor: pointer; }
          .blog-featured:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,.25); }
          .blog-card-link:hover .blog-card { box-shadow: 0 4px 20px rgba(0,0,0,.1); border-color: #e85a2a; }
          @media (max-width: 680px) {
            .blog-featured > div:first-child > div:last-child { display: none; }
          }
        `}</style>
      </div>
    </>
  );
}
