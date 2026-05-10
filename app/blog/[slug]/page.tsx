import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from "@/lib/blog-data";
import { BLOG_FAQS } from "@/lib/blog-faqs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const faqs = BLOG_FAQS[slug] ?? [];
  return {
    title: `${post.metaTitle} | CareerLens`,
    description: post.metaDesc,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: `https://www.carrerlens.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      url: `https://www.carrerlens.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: `/blog/${post.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDesc,
      images: [`/blog/${post.slug}/opengraph-image`],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function wordCount(post: ReturnType<typeof getBlogPost>) {
  if (!post) return 0;
  const text = post.intro + post.sections.map(s => s.heading + s.body).join(" ");
  return text.split(/\s+/).length;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.relatedSlugs);
  const faqs = BLOG_FAQS[slug] ?? [];
  const wc = wordCount(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metaTitle,
    description: post.metaDesc,
    image: `https://www.carrerlens.com/blog/${post.slug}/opengraph-image`,
    author: { "@type": "Organization", name: post.author, url: "https://www.carrerlens.com" },
    publisher: {
      "@type": "Organization",
      name: "CareerLens",
      url: "https://www.carrerlens.com",
      logo: { "@type": "ImageObject", url: "https://www.carrerlens.com/logo.png" },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.carrerlens.com/blog/${post.slug}` },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    wordCount: wc,
    timeRequired: post.readTime,
    inLanguage: "en",
    isAccessibleForFree: true,
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  } : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.carrerlens.com/blog" },
      { "@type": "ListItem", position: 3, name: post.category, item: `https://www.carrerlens.com/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}` },
      { "@type": "ListItem", position: 4, name: post.title, item: `https://www.carrerlens.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
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
              <Link href="/blog" style={{ color: "rgba(247,246,242,.7)", fontSize: ".82rem", textDecoration: "none" }}>← All Articles</Link>
              <Link href="/" style={{ background: "#e85a2a", color: "#fff", padding: "6px 16px", borderRadius: 8, fontWeight: 700, fontSize: ".8rem", textDecoration: "none" }}>Check Resume Free</Link>
            </div>
          </div>
        </nav>

        {/* BREADCRUMB */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e5e2de", padding: "10px 2rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: ".75rem", color: "#9a958f" }}>
            <Link href="/" style={{ color: "#9a958f", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 6px" }}>›</span>
            <Link href="/blog" style={{ color: "#9a958f", textDecoration: "none" }}>Blog</Link>
            <span style={{ margin: "0 6px" }}>›</span>
            <Link href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`} style={{ color: "#9a958f", textDecoration: "none" }}>{post.category}</Link>
            <span style={{ margin: "0 6px" }}>›</span>
            <span style={{ color: "#5a5650" }}>{post.title.slice(0, 50)}{post.title.length > 50 ? "…" : ""}</span>
          </div>
        </div>

        {/* ARTICLE HERO */}
        <div style={{ background: post.coverColor, padding: "40px 2rem 36px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
              <Link href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`} style={{ textDecoration: "none", background: "#e85a2a", color: "#fff", fontSize: ".68rem", fontWeight: 700, padding: "3px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>{post.category}</Link>
              {post.tags.slice(0, 3).map(tag => (
                <span key={tag} style={{ background: "rgba(255,255,255,.12)", color: "rgba(247,246,242,.75)", fontSize: ".68rem", fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>{tag}</span>
              ))}
            </div>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", color: "#f7f6f2", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 18px" }}>
              {post.title}
            </h1>
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#e85a2a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".8rem", color: "#fff", fontWeight: 700 }}>
                  {post.author[0]}
                </div>
                <div>
                  <div style={{ color: "#f7f6f2", fontSize: ".8rem", fontWeight: 600 }}>{post.author}</div>
                  <div style={{ color: "rgba(247,246,242,.5)", fontSize: ".7rem" }}>{post.authorRole}</div>
                </div>
              </div>
              <span style={{ color: "rgba(247,246,242,.3)" }}>·</span>
              <time dateTime={post.publishedAt} style={{ color: "rgba(247,246,242,.6)", fontSize: ".78rem" }}>{formatDate(post.publishedAt)}</time>
              <span style={{ color: "rgba(247,246,242,.3)" }}>·</span>
              <span style={{ color: "rgba(247,246,242,.6)", fontSize: ".78rem" }}>{post.readTime}</span>
              <span style={{ color: "rgba(247,246,242,.3)" }}>·</span>
              <span style={{ color: "rgba(247,246,242,.6)", fontSize: ".78rem" }}>{wc.toLocaleString()} words</span>
            </div>
          </div>
        </div>

        {/* CONTENT + SIDEBAR */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 2rem", display: "grid", gridTemplateColumns: "1fr 300px", gap: 40, alignItems: "start" }}>

          {/* ARTICLE BODY */}
          <article itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content={post.metaTitle} />
            <meta itemProp="datePublished" content={post.publishedAt} />
            <meta itemProp="author" content={post.author} />

            {/* Intro */}
            <p style={{ fontSize: "1.05rem", color: "#3a3632", lineHeight: 1.85, fontWeight: 500, margin: "0 0 32px", borderLeft: "3px solid #e85a2a", paddingLeft: 20 }}>
              {post.intro}
            </p>

            {/* Sections */}
            {post.sections.map((section, i) => (
              <section key={i} style={{ marginBottom: 36 }}>
                <h2 style={{ fontWeight: 800, fontSize: "1.15rem", color: "#1a1916", letterSpacing: "-.03em", lineHeight: 1.3, margin: "0 0 14px", paddingBottom: 10, borderBottom: "2px solid #f0ede8" }}>
                  {section.heading}
                </h2>
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} style={{ color: "#3a3632", fontSize: ".93rem", lineHeight: 1.85, margin: "0 0 16px" }}>
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {/* MID-ARTICLE CTA */}
            <div style={{ background: "#f0ede8", borderRadius: 12, padding: "18px 22px", margin: "36px 0", display: "flex", gap: 16, alignItems: "center" }}>
              <span style={{ fontSize: "1.5rem" }}>📄</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: ".9rem", color: "#1a1916", marginBottom: 3 }}>Is your resume ready for ATS?</div>
                <div style={{ fontSize: ".8rem", color: "#5a5650" }}>Scan it free — get your keyword match score and missing skills in 30 seconds.</div>
              </div>
              <Link href="/" style={{ flexShrink: 0, background: "#e85a2a", color: "#fff", padding: "8px 16px", borderRadius: 8, fontWeight: 700, fontSize: ".8rem", textDecoration: "none", whiteSpace: "nowrap" }}>
                Scan Free →
              </Link>
            </div>

            {/* FAQ SECTION */}
            {faqs.length > 0 && (
              <section style={{ marginTop: 48 }}>
                <h2 style={{ fontWeight: 800, fontSize: "1.2rem", color: "#1a1916", letterSpacing: "-.03em", margin: "0 0 20px" }}>
                  Frequently Asked Questions
                </h2>
                <div>
                  {faqs.map((faq, i) => (
                    <details key={i} style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 10, marginBottom: 8, overflow: "hidden" }}>
                      <summary style={{
                        padding: "15px 18px", cursor: "pointer", fontWeight: 700, fontSize: ".88rem", color: "#1a1916",
                        display: "flex", alignItems: "flex-start", gap: 10, lineHeight: 1.4,
                        listStyle: "none", userSelect: "none",
                      }}>
                        <span style={{ color: "#e85a2a", fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>Q</span>
                        <span style={{ flex: 1 }}>{faq.q}</span>
                        <span style={{ color: "#9a958f", fontSize: ".75rem", fontWeight: 400, flexShrink: 0 }}>▼</span>
                      </summary>
                      <div style={{ padding: "0 18px 15px 38px", color: "#3a3632", fontSize: ".86rem", lineHeight: 1.8, borderTop: "1px solid #f0ede8", paddingTop: 12 }}>
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid #e5e2de" }}>
              <div style={{ fontSize: ".76rem", fontWeight: 700, color: "#9a958f", marginBottom: 10, textTransform: "uppercase", letterSpacing: ".06em" }}>Tags</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {post.tags.map(tag => (
                  <span key={tag} style={{ background: "#f0ede8", color: "#5a5650", fontSize: ".76rem", fontWeight: 600, padding: "5px 12px", borderRadius: 20 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* BOTTOM CTA */}
            <div style={{ marginTop: 36, background: "linear-gradient(135deg, #1a1916, #2d2c28)", borderRadius: 14, padding: "24px 28px" }}>
              <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#e8a020", marginBottom: 8 }}>Free — No sign-up required</div>
              <div style={{ color: "#f7f6f2", fontWeight: 700, fontSize: "1rem", marginBottom: 6 }}>Get your ATS score and missing skills analysis</div>
              <div style={{ color: "rgba(247,246,242,.65)", fontSize: ".82rem", marginBottom: 18 }}>Upload your resume → see exactly which keywords you're missing for your target role in 30 seconds.</div>
              <Link href="/" style={{ display: "inline-block", background: "#e85a2a", color: "#fff", padding: "11px 22px", borderRadius: 9, fontWeight: 700, fontSize: ".85rem", textDecoration: "none" }}>
                Scan My Resume Free →
              </Link>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside style={{ position: "sticky", top: 68 }}>
            {/* Table of Contents */}
            <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 12, padding: "18px 20px", marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: ".82rem", color: "#1a1916", marginBottom: 14 }}>In This Article</div>
              {post.sections.map((s, i) => (
                <div key={i} style={{ fontSize: ".78rem", color: "#5a5650", padding: "6px 0", borderBottom: "1px solid #f0ede8", lineHeight: 1.4 }}>
                  {s.heading.replace(/^\d+\.\s/, "")}
                </div>
              ))}
              {faqs.length > 0 && (
                <div style={{ fontSize: ".78rem", color: "#5a5650", padding: "6px 0", lineHeight: 1.4, fontStyle: "italic" }}>
                  FAQs ({faqs.length} questions)
                </div>
              )}
            </div>

            {/* Related Posts */}
            {related.length > 0 && (
              <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 12, padding: "18px 20px", marginBottom: 16 }}>
                <div style={{ fontWeight: 700, fontSize: ".82rem", color: "#1a1916", marginBottom: 14 }}>Related Articles</div>
                {related.map(rel => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} style={{ textDecoration: "none", display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid #f0ede8" }}>
                    <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{rel.coverEmoji}</span>
                    <div>
                      <div style={{ fontSize: ".8rem", fontWeight: 600, color: "#1a1916", lineHeight: 1.35 }}>{rel.title}</div>
                      <div style={{ fontSize: ".71rem", color: "#9a958f", marginTop: 3 }}>{rel.readTime}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Tools */}
            <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 12, padding: "18px 20px", marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: ".82rem", color: "#1a1916", marginBottom: 12 }}>Free CareerLens Tools</div>
              {[
                ["📄 ATS Resume Scanner", "/", "Get your score in 30 sec"],
                ["📚 Interview Questions", "/interview-questions", "500+ Q&A by topic"],
                ["🏢 AI Interview Prep", "/interview", "Company-specific rounds"],
                ["💰 Salary Intelligence", "/salary", "Know your market rate"],
              ].map(([label, href, desc]) => (
                <Link key={href} href={href} style={{ textDecoration: "none", display: "block", padding: "9px 0", borderBottom: "1px solid #f0ede8" }}>
                  <div style={{ fontSize: ".82rem", fontWeight: 600, color: "#1a1916" }}>{label}</div>
                  <div style={{ fontSize: ".72rem", color: "#9a958f" }}>{desc}</div>
                </Link>
              ))}
            </div>

            {/* Interview Q&A links */}
            <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ fontWeight: 700, fontSize: ".82rem", color: "#1a1916", marginBottom: 12 }}>Top Interview Guides</div>
              {[
                ["React Interview Questions", "/interview-questions/react"],
                ["JavaScript Interview Questions", "/interview-questions/javascript"],
                ["System Design Questions", "/interview-questions/system-design"],
                ["Python Interview Questions", "/interview-questions/python"],
                ["SQL Interview Questions", "/interview-questions/sql"],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ textDecoration: "none", display: "block", fontSize: ".8rem", color: "#5a5650", padding: "6px 0", borderBottom: "1px solid #f0ede8" }}>
                  {label} →
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {/* MORE FROM BLOG */}
        {related.length > 0 && (
          <div style={{ background: "#fff", borderTop: "1px solid #e5e2de", padding: "40px 2rem" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#1a1916", marginBottom: 24 }}>Continue reading</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {related.map(rel => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} style={{ textDecoration: "none" }}>
                    <div style={{ border: "1px solid #e5e2de", borderRadius: 10, overflow: "hidden", background: "#fff", transition: "box-shadow .2s, border-color .2s" }} className="more-card">
                      <div style={{ background: rel.coverColor, padding: "16px 18px", display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: "1.5rem" }}>{rel.coverEmoji}</span>
                        <span style={{ color: "rgba(247,246,242,.8)", fontSize: ".72rem", fontWeight: 600 }}>{rel.category}</span>
                      </div>
                      <div style={{ padding: "14px 18px" }}>
                        <div style={{ fontSize: ".85rem", fontWeight: 700, color: "#1a1916", lineHeight: 1.4, marginBottom: 6 }}>{rel.title}</div>
                        <div style={{ fontSize: ".74rem", color: "#9a958f" }}>{rel.readTime}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: 28 }}>
                <Link href="/blog" style={{ display: "inline-block", border: "1px solid #e5e2de", background: "#fff", color: "#1a1916", padding: "10px 24px", borderRadius: 9, fontWeight: 600, fontSize: ".85rem", textDecoration: "none" }}>
                  View All Articles →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div style={{ borderTop: "1px solid #e5e2de", padding: "24px 2rem", textAlign: "center", fontSize: ".75rem", color: "#9a958f" }}>
          © 2026 CareerLens ·{" "}
          <Link href="/" style={{ color: "#9a958f" }}>Home</Link> ·{" "}
          <Link href="/blog" style={{ color: "#9a958f" }}>Blog</Link> ·{" "}
          <Link href="/interview-questions" style={{ color: "#9a958f" }}>Interview Q&A</Link> ·{" "}
          <Link href="/pricing" style={{ color: "#9a958f" }}>Pricing</Link>
        </div>

        <style>{`
          .more-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,.08); border-color: #e85a2a !important; }
          details summary::-webkit-details-marker { display: none; }
          details[open] summary span:last-child { transform: rotate(180deg); }
          @media (max-width: 768px) {
            aside { display: none !important; }
            div[style*="grid-template-columns: 1fr 300px"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </>
  );
}
