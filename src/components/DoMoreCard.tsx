"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DoMoreCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/work/domore-ticket-transfer"
      style={{ textDecoration: "none", display: "block", height: "100%" }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: "#e8ede4",
          borderRadius: "16px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          cursor: "pointer",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.10)" : "none",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
      >
        {/* Text content */}
        <div
          style={{
            padding: "40px 36px 0px 36px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "35px",
              color: "#4A4A4A",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Ticket Transfer Redesign
          </p>
          <p
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 400,
              fontSize: "17.6px",
              color: "#4A4A4A",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Designed a clear, recipient-focused ticket transfer flow that removes
            friction and guides every step.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {["UX STRATEGY", "CX STRATEGY", "USER RESEARCH"].map((skill) => (
              <div
                key={skill}
                style={{
                  backgroundColor: "#FCFCF8",
                  border: "1px solid #B5451B",
                  borderRadius: "9999px",
                  padding: "4px 14px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  color: "#B5451B",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
          <span
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 400,
              fontSize: "15.4px",
              color: "#4A4A4A",
            }}
          >
            <span style={{ borderBottom: "1px solid #1A1A1A" }}>
              View Ticket Transfer Update
            </span>
            {" "}→
          </span>
        </div>

        {/* Images */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            paddingLeft: "32px",
            paddingTop: "16px",
            overflow: "hidden",
          }}
        >
          {/* Desktop image */}
          <div
            style={{
              position: "relative",
              width: "73.4%",
              flexShrink: 0,
              aspectRatio: "901 / 490",
              border: "8px solid white",
              borderBottom: "none",
              borderRadius: "24px 24px 0 0",
              overflow: "hidden",
              marginRight: "-20px",
            }}
          >
            <Image
              src="/uploads/2026/01/DoMoreDesktop.png"
              alt="DoMore desktop view"
              fill
              sizes="(max-width: 768px) 73vw, 440px"
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Mobile image */}
          <div
            style={{
              position: "relative",
              width: "30.6%",
              flexShrink: 0,
              aspectRatio: "376 / 668",
              border: "6px solid white",
              borderBottom: "none",
              borderRadius: "16px 16px 0 0",
              overflow: "hidden",
            }}
          >
            <Image
              src="/uploads/2026/01/DoMoreMobile.png"
              alt="DoMore mobile view"
              fill
              sizes="(max-width: 768px) 30vw, 160px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
