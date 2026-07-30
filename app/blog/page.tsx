import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/mdx";

const BLOG_POSTS = getAllPosts();
const BLOG_CATEGORIES = getAllCategories();

const FEATURED_TOPIC_LINKS = [
  {
    title: "AI careers and automation",
    description: "Practical guides for developers adapting to AI-assisted workflows and new role expectations.",
    href: "/blog/ai-tools-every-developer-must-know-2025",
  },
  {
    title: "ATS-friendly resumes",
    description: "Learn how to make your resume readable to recruiters, hiring systems, and global employers.",
    href: "/blog/why-your-resume-gets-rejected-ats",
  },
  {
    title: "Global remote roles",
    description: "Explore how developers are getting hired for remote and distributed teams across multiple countries.",
    href: "/blog/how-to-get-hired-for-global-remote-tech-jobs-2025",
  },
  {
    title: "System design prep",
    description: "Build a repeatable study plan for top-tier engineering interviews.",
    href: "/blog/system-design-interview-30-day-prep",
  },
];

const VIRAL_POST = {
  title: "The 7 Career Mistakes That Make Smart Developers Invisible in 2025",
  href: "/blog/the-7-career-mistakes-that-make-smart-developers-invisible",
  description: "A highly shareable guide on why strong professionals get overlooked and how to stand out in a crowded market.",
};

const ENGAGEMENT_HIGHLIGHTS = [
  {
    title: "Built for global readers",
    text: "Clear advice for developers in Europe, North America, Asia, the Middle East, Africa, and Latin America.",
  },
  {
    title: "Research-led articles",
    text: "Each article is written with current hiring patterns, skill trends, and practical examples in mind.",
  },
  {
    title: "Easy to scan",
    text: "Short sections, bold takeaways, and topic clusters help readers find the right answer quickly.",
  },
];

const GLOBAL_FAQS = [
  {
    q: "What topics does CareerLens cover for global tech professionals?",
    a: "CareerLens publishes practical guides on AI and automation careers, cybersecurity, salary benchmarks, interview prep, and resume strategy for developers and tech teams worldwide.",
  },
  {
    q: "Is the blog useful for both early-career and experienced professionals?",
    a: "Yes. The blog includes beginner-friendly career roadmaps, role-specific growth advice, and deeper interview and system design content for experienced engineers.",
  },
  {
    q: "How often is the content updated?",
    a: "CareerLens refreshes posts around changing market conditions, tool adoption, and hiring patterns so readers can rely on current guidance rather than outdated advice.",
  },
];

const GLOBAL_RESOURCES = [
  { label: "World Economic Forum Future of Jobs", href: "https://www.weforum.org/reports/the-future-of-jobs-report-2023" },
  { label: "LinkedIn Work Trend Index", href: "https://economicgraph.linkedin.com/research/linkedins-work-trend-index" },
];

export const metadata: Metadata = {
  title: "CareerLens Blog | Global Tech Career Insights",
  description: "Global career guidance for developers on AI careers, salary trends, cybersecurity, remote hiring, resumes, and interview prep.",
  keywords: ["tech careers", "AI careers", "cybersecurity", "remote hiring", "resume advice", "interview prep"],
  alternates: { canonical: "https://www.carrerlens.com/blog" },
  openGraph: {
    title: "CareerLens Blog | Global Tech Career Insights",
    description: "Practical career advice for developers and tech professionals worldwide on AI, cybersecurity, salaries, resumes, and hiring trends.",
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

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CareerLens Blog — Global Tech Career Insights",
    description: "Expert articles on AI careers, cybersecurity, remote hiring, salary trends, resumes, and interview preparation for tech professionals worldwide.",
    url: "https://www.carrerlens.com/blog",
    numberOfItems: BLOG_POSTS.length,
    itemListElement: BLOG_POSTS.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.carrerlens.com/blog/${post.slug}`,
      name: post.title,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GLOBAL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
            <h1 style={{ fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#f7f6f2", letterSpacing: "-.04em", lineHeight: 1.15, margin: "0 0 14px", maxWidth: 680 }}>
              Global tech career insights for developers, AI specialists, and security professionals
            </h1>
            <p style={{ color: "rgba(247,246,242,.65)", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 18px", maxWidth: 640 }}>
              Practical guidance on AI careers, cybersecurity, remote hiring, salary trends, resume strategy, and interview prep for professionals working in fast-moving global markets.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
              {['AI careers', 'Cybersecurity', 'Remote hiring', 'Resume strategy', 'Interview prep'].map((keyword) => (
                <span key={keyword} style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 999, padding: "7px 12px", color: "#f7f6f2", fontSize: ".76rem", fontWeight: 600 }}>
                  {keyword}
                </span>
              ))}
            </div>
            <div style={{ display: "inline-block", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 999, padding: "8px 14px", color: "#f7f6f2", fontSize: ".82rem", fontWeight: 600 }}>
              <strong style={{ color: "#f7c75e" }}>Direct answer:</strong> CareerLens helps you find the most relevant career growth advice for AI, cybersecurity, hiring, resume optimization, and interview readiness.
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 2rem" }}>

          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginBottom: 24 }}>
            {FEATURED_TOPIC_LINKS.map((topic) => (
              <Link key={topic.title} href={topic.href} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 12, padding: "18px 18px 16px", height: "100%" }}>
                  <div style={{ fontWeight: 800, color: "#1a1916", fontSize: ".92rem", marginBottom: 8 }}>{topic.title}</div>
                  <div style={{ color: "#6a6460", fontSize: ".82rem", lineHeight: 1.6 }}>{topic.description}</div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ background: "linear-gradient(135deg, #fff8e8, #ffffff)", border: "1px solid #f0e2c2", borderRadius: 14, padding: "22px 24px", marginBottom: 32 }}>
            <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#b36a00", marginBottom: 10 }}>Why this blog keeps readers coming back</div>
            <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
              {ENGAGEMENT_HIGHLIGHTS.map((item) => (
                <div key={item.title}>
                  <div style={{ fontWeight: 800, color: "#1a1916", fontSize: ".9rem", marginBottom: 4 }}>{item.title}</div>
                  <div style={{ color: "#5a5650", fontSize: ".82rem", lineHeight: 1.6 }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <Link href={VIRAL_POST.href} style={{ textDecoration: "none", display: "block", marginBottom: 32 }}>
            <div style={{ background: "linear-gradient(135deg, #1a1916, #244060)", borderRadius: 16, padding: "24px 24px", color: "#fff" }}>
              <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#f7c75e", marginBottom: 8 }}>High-share article</div>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(1.1rem, 2.3vw, 1.5rem)", margin: "0 0 10px", lineHeight: 1.3 }}>{VIRAL_POST.title}</h2>
              <p style={{ color: "rgba(255,255,255,.8)", fontSize: ".9rem", lineHeight: 1.7, margin: "0 0 12px" }}>{VIRAL_POST.description}</p>
              <span style={{ color: "#f7c75e", fontWeight: 700, fontSize: ".84rem" }}>Read it and share it →</span>
            </div>
          </Link>

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

          <div style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 14, padding: "24px 26px", marginBottom: 30 }}>
            <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#e85a2a", marginBottom: 8 }}>Global career resources</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
              {GLOBAL_RESOURCES.map((resource) => (
                <a key={resource.href} href={resource.href} target="_blank" rel="noopener noreferrer" style={{ color: "#1a1916", fontWeight: 600, textDecoration: "none", border: "1px solid #e5e2de", borderRadius: 999, padding: "7px 12px", fontSize: ".78rem" }}>
                  {resource.label} ↗
                </a>
              ))}
            </div>
            <div style={{ color: "#5a5650", fontSize: ".9rem", lineHeight: 1.7 }}>
              CareerLens combines practical career guidance with real hiring patterns so you can make stronger decisions across AI, cybersecurity, remote roles, and salary conversations.
            </div>
          </div>

          <div style={{ background: "linear-gradient(135deg, #1a1916, #2d2c28)", borderRadius: 14, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#e8a020", marginBottom: 6 }}>Free for all freshers</div>
              <div style={{ color: "#f7f6f2", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>Check your resume's ATS score before your next application</div>
              <div style={{ color: "rgba(247,246,242,.6)", fontSize: ".82rem" }}>Upload your resume → get keyword match score, skill gaps, and a ranked list of matching jobs.</div>
            </div>
            <Link href="/" style={{ display: "inline-block", background: "#e85a2a", color: "#fff", padding: "12px 24px", borderRadius: 9, fontWeight: 700, fontSize: ".88rem", textDecoration: "none", whiteSpace: "nowrap" }}>
              Scan My Resume Free →
            </Link>
          </div>

          <section style={{ marginTop: 8, marginBottom: 8 }}>
            <h2 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#1a1916", margin: "0 0 16px" }}>Frequently asked questions</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {GLOBAL_FAQS.map((faq) => (
                <details key={faq.q} style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 10, padding: "12px 14px" }}>
                  <summary style={{ cursor: "pointer", fontWeight: 700, color: "#1a1916", listStyle: "none" }}>{faq.q}</summary>
                  <p style={{ color: "#5a5650", fontSize: ".86rem", lineHeight: 1.7, margin: "10px 0 0" }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
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
