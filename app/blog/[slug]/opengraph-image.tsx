import { ImageResponse } from "next/og";
import { getBlogPost } from "@/lib/blog-data";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  const title = post?.title ?? "CareerLens Blog";
  const category = post?.category ?? "Career";
  const readTime = post?.readTime ?? "";
  const emoji = post?.coverEmoji ?? "📄";
  const coverColor = post?.coverColor ?? "#1a1916";

  return new ImageResponse(
    (
      <div
        style={{
          background: coverColor,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 52 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ background: "#e85a2a", width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: "#fff" }}>C</div>
            <span style={{ color: "rgba(247,246,242,0.9)", fontWeight: 700, fontSize: 20 }}>CareerLens</span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ background: "#e85a2a", color: "#fff", padding: "6px 14px", borderRadius: 20, fontSize: 14, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{category}</div>
            {readTime && <div style={{ background: "rgba(255,255,255,0.12)", color: "rgba(247,246,242,0.75)", padding: "6px 14px", borderRadius: 20, fontSize: 14, fontWeight: 600 }}>{readTime}</div>}
          </div>
        </div>

        {/* Emoji */}
        <div style={{ fontSize: 72, marginBottom: 28 }}>{emoji}</div>

        {/* Title */}
        <div style={{
          color: "#f7f6f2",
          fontWeight: 900,
          fontSize: title.length > 60 ? 42 : 50,
          lineHeight: 1.15,
          letterSpacing: "-1.5px",
          maxWidth: 1000,
          flex: 1,
        }}>
          {title}
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 32 }}>
          <div style={{ color: "rgba(247,246,242,0.5)", fontSize: 18 }}>carrerlens.com/blog</div>
          <div style={{ background: "rgba(255,255,255,0.1)", color: "rgba(247,246,242,0.7)", padding: "8px 20px", borderRadius: 8, fontSize: 16, fontWeight: 600 }}>
            Read the full article →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
