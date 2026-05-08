"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  href: string;
  image: string;
  description: string;
  tags: string[];
  linkText: string;
  bgColor: string;
  pillColor: string;
  imagePosition?: string;
}

export default function ProjectCard({
  title,
  href,
  image,
  description,
  tags,
  linkText,
  bgColor,
  pillColor,
  imagePosition = "bottom center",
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: bgColor,
          borderRadius: "16px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          cursor: "pointer",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 12px 32px rgba(0,0,0,0.10)"
            : "none",
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
            {title}
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
            {description}
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {tags.map((tag) => (
              <div
                key={tag}
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
                {tag}
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
              {linkText}
            </span>
            {" "}→
          </span>
        </div>

        {/* Mockup image */}
        <div
          style={{
            marginTop: "16px",
            position: "relative",
            width: "100%",
            height: "260px",
            overflow: "hidden",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover", objectPosition: imagePosition }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </Link>
  );
}
