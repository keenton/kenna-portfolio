"use client";

import { useState } from "react";

const COLOR = "3A3517";
const OLIVE_FILTER =
  "brightness(0) saturate(100%) invert(18%) sepia(15%) saturate(800%) hue-rotate(35deg) brightness(90%)";

const tools: { label: string; slug?: string; src?: string; noFilter?: boolean }[] = [
  { label: "Figma",            slug: "figma" },
  { label: "Sketch",           slug: "sketch" },
  { label: "Miro",             slug: "miro" },
  { label: "ChatGPT",          slug: "openai" },
  { label: "Gemini",           slug: "googlegemini" },
  { label: "Claude",           slug: "anthropic" },
  { label: "Adobe",            slug: "adobe" },
  { label: "Hotjar",           slug: "hotjar" },
  { label: "WCAG",             slug: "w3c" },
  { label: "Optimal Workshop", src: "/icons/optimal_workshop_logo.jpeg", noFilter: true },
  { label: "Evinced", src: "/icons/evinced_logo.jpeg", noFilter: true },
  { label: "ANDI" },
  { label: "VoiceOver" },
  { label: "Lovable", src: "/uploads/2026/01/Loveable_Icon.png", noFilter: true },
];

function TextBadge({ label }: { label: string }) {
  const abbr = label
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);

  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1.5px solid #${COLOR}`,
        borderRadius: "4px",
      }}
    >
      <span
        style={{
          fontFamily: "Playfair Display, serif",
          fontWeight: 700,
          fontSize: "10px",
          color: `#${COLOR}`,
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}
      >
        {abbr}
      </span>
    </div>
  );
}

function ToolItem({ label, slug, src, noFilter }: { label: string; slug?: string; src?: string; noFilter?: boolean }) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = src ?? (slug ? `/icons/${slug}.svg` : null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        flexShrink: 0,
        margin: "0 24px",
      }}
    >
      {imgSrc && !imgError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgSrc}
          alt={label}
          width={40}
          height={40}
          style={{ display: "block", width: "40px", height: "40px", objectFit: "contain", filter: noFilter ? "none" : OLIVE_FILTER }}
          onError={() => setImgError(true)}
        />
      ) : (
        <TextBadge label={label} />
      )}
      <span
        style={{
          fontFamily: "Open Sans, sans-serif",
          fontSize: "11px",
          color: `#${COLOR}`,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <div
      style={{
        backgroundColor: "#FCFCF8",
        borderTop: "1px solid rgba(60, 60, 30, 0.15)",
        borderBottom: "1px solid rgba(60, 60, 30, 0.15)",
        padding: "24px 0",
        overflow: "hidden",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
      className="marquee-wrapper"
    >
      <div className="marquee-track">
        {tools.map((t) => (
          <ToolItem key={`a-${t.label}`} label={t.label} slug={t.slug} src={t.src} noFilter={t.noFilter} />
        ))}
        {tools.map((t) => (
          <ToolItem key={`b-${t.label}`} label={t.label} slug={t.slug} src={t.src} noFilter={t.noFilter} />
        ))}
      </div>
    </div>
  );
}
