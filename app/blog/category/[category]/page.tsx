import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";

interface Props {
  params: Promise<{ category: string }>;
}

function slugToTitle(slug: string) {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function findCategory(slug: string) {
  return BLOG_CATEGORIES.find(
    c => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") === slug
  );
}

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map(cat => ({ category: cat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catName = findCategory(category);
  if (!catName) return {};
  const posts = BLOG_POSTS.filter(p => p.category === catName);
  return {
    title: `${catName} Articles — CareerLens Blog`,
    description: `${posts.length} expert articles on ${catName.toLowerCase()} — salary data, career tips, interview prep, and the latest tech industry insights for developers.`,
    alternates: { canonical: `https://www.carrerlens.com/blog/category/${category}` },
    openGraph: {
      title: `${catName} Articles | CareerLens Blog`,
      description: `Expert articles on ${catName.toLowerCase()} for developers and tech professionals.`,
      url: `https://www.carrerlens.com/blog/category/${category}`,
    },
  };
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const catName = findCategory(category);
  if (!catName) notFound();

  const posts = BLOG_POSTS.filter(p => p.category === catName);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.carrerlens.com/blog" },
      { "@type": "ListItem", position: 3, name: catName, item: `https://www.carrerlens.com/blog/category/${category}` },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${catName} — CareerLens Blog`,
    description: `Expert articles on ${catName.toLowerCase()} for developers and tech professionals.`,
    url: `https://www.carrerlens.com/blog/category/${category}`,
    numberOfItems: posts.length,
    hasPart: posts.map(p => ({
      "@type": "Article",
      headline: p.title,
      url: `https://www.carrerlens.com/blog/${p.slug}`,
      datePublished: p.publishedAt,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <div style={{ minHeight: "100vh", background: "#f7f6f2", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <nav style={{ background: "#1a1916", padding: "0 2rem", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8, color: "#f7f6f2", fontWeight: 800, fontSize: "1rem" }}>
              <span style={{ background: "#e85a2a", color: "#fff", width: 26, height: 26, borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: ".75rem", fontWeight: 900 }}>C</span>
              CareerLens
            </Link>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <Link href="/blog" style={{ color: "rgba(247,246,242,.7)", fontSize: ".82rem", textDecoration: "none" }}>← All Articles</Link>
              <Link href="/" style={{ background: "#e85a2a", color: "#fff", padding: "6px 16px", borderRadius: 8, fontWeight: 700, fontSize: ".8rem", textDecoration: "none" }}>Check Resume</Link>
            </div>
          </div>
        </nav>

        <div style={{ background: "#1a1916", padding: "44px 2rem 36px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ fontSize: ".75rem", color: "#9a958f", marginBottom: 10 }}>
              <Link href="/blog" style={{ color: "#9a958f", textDecoration: "none" }}>Blog</Link> › {catName}
            </div>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#f7f6f2", letterSpacing: "-.04em", lineHeight: 1.15, margin: "0 0 10px" }}>
              {catName}
            </h1>
            <p style={{ color: "rgba(247,246,242,.6)", fontSize: ".9rem", margin: 0 }}>
              {posts.length} article{posts.length !== 1 ? "s" : ""} — expert insights for developers and tech professionals
            </p>
          </div>
        </div>

        {/* All categories nav */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e5e2de", padding: "12px 2rem", overflowX: "auto" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 8, flexWrap: "nowrap", minWidth: "max-content" }}>
            <Link href="/blog" style={{ textDecoration: "none", background: "#f0ede8", color: "#5a5650", fontSize: ".76rem", fontWeight: 600, padding: "6px 14px", borderRadius: 20, whiteSpace: "nowrap" }}>
              All Articles
            </Link>
            {BLOG_CATEGORIES.map(cat => (
              <Link
                key={cat}
                href={`/blog/category/${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                style={{
                  textDecoration: "none",
                  background: cat === catName ? "#1a1916" : "#f0ede8",
                  color: cat === catName ? "#f7f6f2" : "#5a5650",
                  fontSize: ".76rem",
                  fontWeight: cat === catName ? 700 : 600,
                  padding: "6px 14px",
                  borderRadius: 20,
                  whiteSpace: "nowrap",
                }}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }} className="cat-card-link">
                <article className="cat-card" style={{
                  background: "#fff",
                  border: "1px solid #e5e2de",
                  borderRadius: 12,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow .2s, border-color .2s",
                }}>
                  <div style={{ background: post.coverColor, padding: "20px 22px", display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: "1.8rem" }}>{post.coverEmoji}</span>
                    <span style={{ background: "rgba(255,255,255,.15)", color: "rgba(247,246,242,.9)", fontSize: ".68rem", fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>
                      {post.readTime}
                    </span>
                  </div>
                  <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontWeight: 700, fontSize: ".95rem", color: "#1a1916", lineHeight: 1.4, margin: "0 0 10px", flex: 1 }}>
                      {post.title}
                    </h2>
                    <p style={{ color: "#6a6460", fontSize: ".82rem", lineHeight: 1.6, margin: "0 0 16px" }}>
                      {post.intro.slice(0, 120)}...
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid #f0ede8" }}>
                      <span style={{ color: "#9a958f", fontSize: ".73rem" }}>{timeAgo(post.publishedAt)}</span>
                      <span style={{ color: "#e85a2a", fontWeight: 700, fontSize: ".73rem" }}>Read →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e5e2de", padding: "24px 2rem", textAlign: "center", fontSize: ".75rem", color: "#9a958f" }}>
          © 2026 CareerLens ·{" "}
          <Link href="/blog" style={{ color: "#9a958f" }}>Blog</Link> ·{" "}
          <Link href="/interview-questions" style={{ color: "#9a958f" }}>Interview Q&A</Link> ·{" "}
          <Link href="/" style={{ color: "#9a958f" }}>Home</Link>
        </div>

        <style>{`
          .cat-card-link:hover .cat-card { box-shadow: 0 4px 20px rgba(0,0,0,.1); border-color: #e85a2a !important; }
        `}</style>
      </div>
    </>
  );
}
