import { ImageResponse } from "next/og";

export const alt = "Convx — Liquid Glass music player for Android";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #05060f 0%, #0d1440 55%, #00218f 100%)",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, opacity: 0.7 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#6d8dff",
              display: "flex",
            }}
          />
          open source · android 8.0+ · free
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 168, fontWeight: 700, letterSpacing: -6, lineHeight: 1 }}>
            convx
          </div>
          <div style={{ fontSize: 42, marginTop: 18, color: "#c9d2ff", lineHeight: 1.25 }}>
            Liquid Glass music player for Android
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, opacity: 0.75 }}>
          <div style={{ display: "flex" }}>real backdrop blur · synced lyrics · zero telemetry</div>
          <div style={{ display: "flex" }}>cosmictaser</div>
        </div>
      </div>
    ),
    size
  );
}
