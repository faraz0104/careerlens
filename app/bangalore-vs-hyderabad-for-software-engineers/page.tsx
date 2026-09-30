import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Bangalore vs Hyderabad for Software Engineers 2026 — Salary, Jobs, Quality of Life | CareerLens",
  description:
    "Compare Bangalore and Hyderabad for software engineers in India: salary bands, hiring volume, company mix, cost of living, and which city is the better fit for career growth.",
  keywords: [
    "Bangalore vs Hyderabad software engineer",
    "Hyderabad vs Bangalore salary",
    "Bengaluru vs Hyderabad for software engineers",
    "software engineer salary Bangalore vs Hyderabad",
    "best city for software engineers India",
    "Bangalore vs Hyderabad jobs 2026",
    "Hyderabad software engineer jobs",
  ],
  alternates: {
    canonical: "https://www.carrerlens.com/bangalore-vs-hyderabad-for-software-engineers",
  },
  openGraph: {
    title: "Bangalore vs Hyderabad for Software Engineers 2026 | CareerLens",
    description:
      "Which city offers better software engineering salary, growth, and work-life balance — Bangalore or Hyderabad?",
    url: "https://www.carrerlens.com/bangalore-vs-hyderabad-for-software-engineers",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const comparisonRows = [
  { label: "Typical salary range", bangalore: "₹18–32 LPA mid-level", hyderabad: "₹16–28 LPA mid-level" },
  { label: "Startup density", bangalore: "Very high", hyderabad: "High but more balanced" },
  { label: "Big tech presence", bangalore: "Very strong", hyderabad: "Very strong" },
  { label: "Cost of living", bangalore: "Higher", hyderabad: "Moderate" },
  { label: "Best for", bangalore: "Product companies and startup ecosystem", hyderabad: "Balanced growth and lower cost" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bangalore vs Hyderabad for Software Engineers – CareerLens",
  url: "https://www.carrerlens.com/bangalore-vs-hyderabad-for-software-engineers",
  description:
    "Compare Bangalore and Hyderabad for software engineers in India with salary, jobs, growth, and lifestyle trade-offs.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Bangalore vs Hyderabad", item: "https://www.carrerlens.com/bangalore-vs-hyderabad-for-software-engineers" },
    ],
  },
};

export default function BangaloreVsHyderabadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eef0ff", color: "#5046e4", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
            City comparison
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-.04em", margin: "16px 0 12px" }}>
            Bangalore vs Hyderabad for Software Engineers
          </h1>
          <p style={{ maxWidth: 760, margin: "0 auto", color: "#4b5568", fontSize: ".97rem", lineHeight: 1.7 }}>
            Both cities are strong for software engineering in India, but they differ in salary scale, startup intensity, cost of living, and the kind of hiring ecosystem you get. Your choice often comes down to whether you want a premium tech market or a more balanced career-to-cost ratio.
          </p>
        </div>

        <div style={{ overflowX: "auto", marginBottom: 28, border: "1px solid rgba(15, 23, 42, 0.08)", borderRadius: 16, background: "#fff" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
            <thead>
              <tr style={{ background: "#f7f6f2" }}>
                <th style={{ textAlign: "left", padding: "16px 18px", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".06em", color: "#5a5650" }}>Factor</th>
                <th style={{ textAlign: "left", padding: "16px 18px", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".06em", color: "#5a5650" }}>Bangalore</th>
                <th style={{ textAlign: "left", padding: "16px 18px", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".06em", color: "#5a5650" }}>Hyderabad</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} style={{ borderTop: "1px solid rgba(15, 23, 42, 0.08)" }}>
                  <td style={{ padding: "16px 18px", fontWeight: 700, color: "#1a1916" }}>{row.label}</td>
                  <td style={{ padding: "16px 18px", color: "#4b5568" }}>{row.bangalore}</td>
                  <td style={{ padding: "16px 18px", color: "#4b5568" }}>{row.hyderabad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginBottom: 24 }}>
          {[
            ["Choose Bangalore if", "You want the strongest startup ecosystem, product-company roles, and the highest ceiling in comp packages — especially for top-tier talent and career acceleration."],
            ["Choose Hyderabad if", "You care more about a strong mix of tech jobs, lower living costs, and a better work-life balance without sacrificing career opportunities."],
            ["Reality check", "For many software engineers, salary differences are meaningful but not huge at the same seniority. The better city is the one where your target employers are strongest and where your personal cost of living is manageable."],
          ].map(([title, text]) => (
            <div key={title} style={{ background: "#fff", border: "1px solid rgba(15,23,42,0.08)", borderRadius: 14, padding: 18 }}>
              <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
              <p style={{ margin: 0, color: "#5a5650", fontSize: ".82rem", lineHeight: 1.7 }}>{text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 14, padding: "18px 20px", marginBottom: 20 }}>
          <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#5046e4", marginBottom: 8 }}>Next step</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a href="/salary" style={{ background: "#111827", color: "#fff", textDecoration: "none", padding: "10px 14px", borderRadius: 10, fontWeight: 700 }}>See salary benchmarks</a>
            <a href="/tools" style={{ background: "#eef0ff", color: "#4338ca", textDecoration: "none", padding: "10px 14px", borderRadius: 10, fontWeight: 700 }}>Open career tools</a>
            <a href="/jobs" style={{ background: "#f3f4f6", color: "#111827", textDecoration: "none", padding: "10px 14px", borderRadius: 10, fontWeight: 700 }}>Browse job matches</a>
          </div>
        </div>

        <div style={{ background: "#f7f6f2", borderRadius: 12, padding: "20px 18px", marginBottom: 20, color: "#4b5568", lineHeight: 1.7 }}>
          <strong style={{ color: "#1a1916" }}>Bottom line:</strong> Bangalore is still the top city for maximum high-end salary and startup exposure, while Hyderabad is often more cost-efficient and more comfortable for long-term career sustainability. If you’re choosing strictly by money, Bangalore tends to win. If you want good growth with lower living costs, Hyderabad is compelling.
        </div>
      </div>
      <App defaultTab="salary" />
    </>
  );
}
