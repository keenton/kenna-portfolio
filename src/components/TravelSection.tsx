"use client";

import { useState } from "react";

const travelImages = [
  { src: "/uploads/2026/01/Portfolio About Me2.jpg", alt: "Kenna at the Taj Mahal" },
  { src: "/uploads/2026/01/Portfolio About Me1.JPG", alt: "Kenna in Japan with a deer" },
  { src: "/uploads/2026/01/Portfolio_About Me11.jpg", alt: "Kenna ziplining in Costa Rica" },
  { src: "/uploads/2026/01/Portfolio_About Me12.png", alt: "Kenna hiking in a canyon" },
  { src: "/uploads/2026/01/Portfolio About Me3.JPG", alt: "Kenna in Japan at Osaka Castle" },
  { src: "/uploads/2026/01/Portfolio_AboutMe13.png", alt: "Kenna at the Colosseum in Rome" },
  { src: "/uploads/2026/01/Portfolio About Me5.JPG", alt: "Kenna in Barcelona at Sagrada Familia" },
  { src: "/uploads/2026/01/Portfolio_About Me 14.PNG", alt: "Paragliding in New Zealand" },
  { src: "/uploads/2026/01/Portfolio_About Me 7.JPG", alt: "Kenna in Cinque Terre at sunset" },
  { src: "/uploads/2026/01/Portfolio_About Me 8.JPG", alt: "Kenna in Jaipur, India" },
  { src: "/uploads/2026/01/Portfolio_About Me 9.JPG", alt: "Kenna in a redwood forest" },
  { src: "/uploads/2026/01/Portfolio_About Me 10.JPG", alt: "Kenna on a train in Sri Lanka" },
  { src: "/uploads/2026/01/Portfolio About Me 15.JPG", alt: "Kenna in a meadow in New Zealand" },
];

export default function TravelSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + travelImages.length) % travelImages.length);
  const next = () => setCurrent((c) => (c + 1) % travelImages.length);

  return (
    <section style={{ backgroundColor: "#FCFCF8", padding: "80px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#3A3517", marginBottom: "24px" }}>
          More About Me
        </h2>
        <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "#3A3517", lineHeight: 1.8, margin: "0 0 40px", maxWidth: "700px" }}>
          I love to travel. It gives me the opportunity to learn how other people and cultures approach design in the everyday world, from the layout of the bullet train station in Japan to the signage in a Spanish market. Those observations quietly shape how I think about the people I design for. Every new place is a reminder that design is not universal. What feels intuitive in one culture can feel completely foreign in another. Which is exactly why I believe so deeply in talking to real people before making design decisions.
        </p>

        {/* Carousel */}
        <div>
          <div style={{ overflow: "hidden", padding: "0 48px" }}>
            <div
              style={{
                display: "flex",
                gap: "16px",
                transform: `translateX(calc(-${current} * (264px + 16px)))`,
                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {travelImages.map((img, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: "264px",
                    height: "264px",
                    flexShrink: 0,
                    borderRadius: "12px",
                    display: "block",
                    objectFit: "cover",
                    opacity: i === current ? 1 : 0.6,
                    transition: "opacity 0.4s ease",
                    cursor: i !== current ? "pointer" : "default",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Arrows + dots */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "20px" }}>
            <button
              onClick={prev}
              aria-label="Previous"
              style={{
                background: "rgba(58,53,23,0.08)", border: "none", borderRadius: "50%",
                width: "36px", height: "36px", cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="#3A3517" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div style={{ display: "flex", gap: "8px" }}>
              {travelImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: "8px", height: "8px", borderRadius: "50%", border: "none",
                    background: i === current ? "#3A3517" : "rgba(58,53,23,0.25)",
                    cursor: "pointer", padding: 0,
                    transition: "background 0.3s ease",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              style={{
                background: "rgba(58,53,23,0.08)", border: "none", borderRadius: "50%",
                width: "36px", height: "36px", cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="#3A3517" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
