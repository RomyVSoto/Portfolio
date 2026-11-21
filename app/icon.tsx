import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Browser tab icon: the "RV." mark from the header.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#e5192a",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        RV<span style={{ color: "#f5f5f5" }}>.</span>
      </div>
    ),
    size,
  );
}
