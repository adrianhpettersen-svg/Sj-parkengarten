import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgOpts = {
  eyebrow: string;
  title: string;
  italicTail?: string;
  subtitle?: string;
  url?: string;
};

export function ogImage({
  eyebrow,
  title,
  italicTail,
  subtitle,
  url = "sjoparkengarten.no",
}: OgOpts) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #06212f 0%, #0b3a53 55%, #0e1e27 100%)",
          padding: "72px",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
          position: "relative",
        }}
      >
        {/* Sunset glow accent */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(224,122,60,0.35) 0%, transparent 60%)",
          }}
        />

        {/* Top: eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "20px",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#D9C9A8",
          }}
        >
          <div style={{ width: "32px", height: "2px", background: "#E07A3C" }} />
          {eyebrow}
        </div>

        {/* Middle: title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div
            style={{
              fontSize: "96px",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            {title}
          </div>
          {italicTail && (
            <div
              style={{
                fontSize: "96px",
                fontStyle: "italic",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#D9C9A8",
              }}
            >
              {italicTail}
            </div>
          )}
          {subtitle && (
            <div
              style={{
                marginTop: "24px",
                fontSize: "28px",
                color: "rgba(255,255,255,0.85)",
                maxWidth: "860px",
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Bottom: brand + url */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.16)",
          }}
        >
          <div
            style={{
              fontSize: "26px",
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "0.01em",
            }}
          >
            Sjøparken Garten Marina
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#E07A3C",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            {url}
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
