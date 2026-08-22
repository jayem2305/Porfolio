import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0f, #12121a)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #6ee7b7, #60a5fa)",
              color: "#0a0a0f",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            JM
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#9a9aa8" }}>
            Available for new opportunities
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#f4f4f6",
            marginTop: 40,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#9a9aa8",
            marginTop: 12,
          }}
        >
          {profile.title}
        </div>
      </div>
    ),
    { ...size },
  );
}
