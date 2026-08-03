import { ImageResponse } from "next/og";

export const alt = "in7ruder security practice in Switzerland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const copyByLanguage = {
  en: {
    title: "Prepare your organization for attacks that begin with trust.",
    services: "SOCIAL ENGINEERING READINESS  ·  PENETRATION TESTING",
  },
  de: {
    title: "Bereiten Sie Ihr Unternehmen auf Angriffe vor, die mit Vertrauen beginnen.",
    services: "SOCIAL ENGINEERING READINESS  ·  PENETRATIONSTESTS",
  },
};

export default async function OpenGraphImage({ params }) {
  const { lang } = await params;
  const copy = copyByLanguage[lang] || copyByLanguage.en;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#f1efeb",
          color: "#141312",
          padding: "64px 74px 62px 88px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", inset: "0 auto 0 0", width: 18, display: "flex", background: "#5a252a" }} />
        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", fontSize: 27, fontWeight: 800, letterSpacing: "0.12em" }}>
              IN7RUDER
            </div>
            <div style={{ display: "flex", color: "#625f5b", fontSize: 16, fontWeight: 700, letterSpacing: "0.18em" }}>
              SWITZERLAND
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", maxWidth: 980, fontSize: 68, fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.045em" }}>
              {copy.title}
            </div>
            <div style={{ marginTop: 42, display: "flex", alignItems: "center" }}>
              <div style={{ width: 92, height: 4, display: "flex", background: "#5a252a" }} />
              <div style={{ marginLeft: 22, display: "flex", color: "#5a252a", fontSize: 16, fontWeight: 800, letterSpacing: "0.12em" }}>
                {copy.services}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
