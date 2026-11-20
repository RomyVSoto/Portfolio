import { ImageResponse } from "next/og";

export const alt = "Romy Valdez — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview for LinkedIn, X, WhatsApp, etc. Same palette as the site.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(circle at 85% 40%, #c1121f55 0%, #0a0a0a 45%), #0a0a0a",
          color: "#f5f5f5",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#c1121f" }}>
          RV<span style={{ color: "#f5f5f5" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>
            Full-Stack
          </div>
          <div
            style={{
              fontSize: 112,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -3,
              color: "#f23a46",
              fontStyle: "italic",
            }}
          >
            Developer.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a1a1a1" }}>
          Romy Valdez · Next.js · TypeScript · Supabase · Santo Domingo, DR
        </div>
      </div>
    ),
    size,
  );
}
