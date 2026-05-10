import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CareerLens Blog — Career Tips, Salary Data & Tech Trends";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1916",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 48 }}>
          <div style={{ background: "#e85a2a", width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, color: "#fff" }}>C</div>
          <span style={{ color: "#f7f6f2", fontWeight: 800, fontSize: 26 }}>CareerLens Blog</span>
        </div>

        {/* Headline */}
        <div style={{ color: "#f7f6f2", fontWeight: 900, fontSize: 56, lineHeight: 1.1, marginBottom: 24, maxWidth: 900, letterSpacing: "-2px" }}>
          Career Insights for the Modern Developer
        </div>

        {/* Sub */}
        <div style={{ color: "rgba(247,246,242,0.65)", fontSize: 26, lineHeight: 1.5, maxWidth: 760 }}>
          Salary data · Interview prep · Tech trends · Job search strategies
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12, marginTop: 48 }}>
          {["AI & Future of Work", "Salary Insights", "Interview Prep", "Career Growth"].map(tag => (
            <div key={tag} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(247,246,242,0.8)", padding: "8px 18px", borderRadius: 30, fontSize: 18, fontWeight: 600 }}>
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ position: "absolute", bottom: 48, right: 80, color: "rgba(247,246,242,0.4)", fontSize: 20 }}>
          carrerlens.com/blog
        </div>
      </div>
    ),
    { ...size }
  );
}
