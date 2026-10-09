import { ImageResponse } from "next/og";

export const alt = "Jetpack SF Symbols, all 7,007 Apple SF Symbols for Jetpack Compose";
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
          background: "linear-gradient(135deg, #1a0d02 0%, #3a1c04 55%, #e25822 100%)",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, opacity: 0.75 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#fb923c",
              display: "flex",
            }}
          />
          open source · jetpack compose · 7,007 glyphs
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 148, fontWeight: 700, letterSpacing: -6, lineHeight: 1 }}>
            SF Symbols
          </div>
          <div style={{ fontSize: 44, marginTop: 18, color: "#ffd9b8", lineHeight: 1.25 }}>
            Every Apple glyph, ported to ImageVectors. Copy the Kotlin, paste it in.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            opacity: 0.8,
          }}
        >
          <div style={{ display: "flex" }}>dualtone · monochrome · tree-shakeable · mit</div>
          <div style={{ display: "flex" }}>cosmictaser</div>
        </div>
      </div>
    ),
    size
  );
}
