import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Techio Solutions — Tecnología que impulsa tu negocio.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const block = (color: string, extra: Record<string, string | number> = {}) => ({
  width: 120,
  height: 120,
  borderRadius: 28,
  background: color,
  ...extra,
});

/** Default Open Graph image for every page, generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          background: "#101A36",
          padding: 80,
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: 720 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -3 }}>techio</div>
            <div style={{ fontSize: 20, letterSpacing: 12, color: "#B9BFD3" }}>SOLUTIONS</div>
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>{siteConfig.tagline}</div>
          <div style={{ fontSize: 26, color: "#D8F278" }}>Webs · Menús QR · Catálogos de productos</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
          <div style={{ display: "flex", gap: 16 }}>
            <div style={block("#FFFFFF")} />
            <div style={block("#9895FF")} />
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <div style={block("#D8F278")} />
            <div style={block("#5CB9A7")} />
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <div style={block("#FFFFFF")} />
            <div style={block("transparent")} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
