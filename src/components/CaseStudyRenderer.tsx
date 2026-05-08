"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Section, CaseStudy } from "@/content/case-studies";

function CarouselBlock({ images, caption }: { images: { src: string; alt?: string }[]; caption?: string }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div style={{ ...sectionStyle, margin: "32px auto" }}>
      {/* Sliding track with peek */}
      <div style={{ overflow: "hidden", padding: "16px 48px 16px" }}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            transform: `translateX(calc(-${current} * (85% + 20px)))`,
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {images.map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={img.src}
              alt={img.alt ?? ""}
              onClick={() => setCurrent(i)}
              style={{
                width: "85%",
                height: "auto",
                flexShrink: 0,
                borderRadius: "16px",
                display: "block",
                boxShadow: "none",
                opacity: i === current ? 1 : 0.6,
                transition: "opacity 0.4s ease",
                cursor: i !== current ? "pointer" : "default",
              }}
            />
          ))}
        </div>
      </div>

      {/* Arrows + dots row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "4px" }}>
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
          {images.map((_, i) => (
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

      {/* Caption / footnote */}
      {caption && (
        <p style={{
          ...sectionStyle,
          fontFamily: "Open Sans, sans-serif",
          fontSize: "0.8rem",
          fontStyle: "italic",
          color: "#54595F",
          textAlign: "center",
          marginTop: "12px",
        }}>
          {caption}
        </p>
      )}
    </div>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const sectionStyle = {
  maxWidth: "860px",
  margin: "0 auto",
  padding: "0 24px",
};

function renderSection(section: Section, idx: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          key={idx}
          id={slugify(section.content || "")}
          style={{
            ...sectionStyle,
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
            fontWeight: 700,
            color: "#3A3517",
            margin: "48px auto 16px",
            scrollMarginTop: "100px",
          }}
        >
          {section.content}
        </h2>
      );

    case "subheading":
      return (
        <h3
          key={idx}
          style={{
            ...sectionStyle,
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
            fontWeight: 700,
            color: "#3A3517",
            margin: "40px auto 12px",
          }}
        >
          {section.content}
        </h3>
      );

    case "paragraph":
      return (
        <p
          key={idx}
          style={{
            ...sectionStyle,
            fontFamily: "Open Sans, sans-serif",
            fontSize: "1rem",
            fontWeight: 300,
            color: "#3A3517",
            lineHeight: 1.8,
            margin: "0 auto 20px",
          }}
        >
          {section.content}
        </p>
      );

    case "callout":
      return (
        <div
          key={idx}
          style={{
            ...sectionStyle,
            margin: "32px auto",
          }}
        >
          <div
            style={{
              backgroundColor: "#FCFCF8",
              borderLeft: "4px solid #E09F3E",
              padding: "24px 32px",
            }}
          >
            <p
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#3A3517",
                lineHeight: 1.6,
                margin: section.body ? "0 0 12px" : 0,
              }}
            >
              {section.content}
            </p>
            {section.body && section.body.split("\n\n").map((para, i, arr) => (
              <p
                key={i}
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "#3A3517",
                  lineHeight: 1.8,
                  margin: i < arr.length - 1 ? "0 0 12px" : 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      );

    case "list":
      return (
        <ul
          key={idx}
          style={{
            ...sectionStyle,
            fontFamily: "Open Sans, sans-serif",
            fontSize: "1rem",
            fontWeight: 300,
            color: "#3A3517",
            lineHeight: 1.8,
            margin: "0 auto 24px",
            paddingLeft: "24px",
            listStyle: "none",
          }}
        >
          {section.items?.map((item, i) => (
            <li key={i} style={{ marginBottom: "8px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ color: "#B5451B", flexShrink: 0, marginTop: "2px" }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "labeled-list":
      return (
        <div
          key={idx}
          style={{
            ...sectionStyle,
            margin: "0 auto 24px",
          }}
        >
          {section.labeledItems?.map((item, i) => (
            <div key={i} style={{ marginBottom: "16px" }}>
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#3A3517",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {item.label}:{" "}
              </span>
              <span
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "#3A3517",
                  lineHeight: 1.7,
                }}
              >
                {item.content}
              </span>
            </div>
          ))}
        </div>
      );

    case "image":
      return (
        <div
          key={idx}
          style={{
            ...sectionStyle,
            margin: "32px auto",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={section.src!}
            alt={section.alt || ""}
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }}
          />
          {section.caption && (
            <p
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "0.85rem",
                color: "#54595F",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              {section.caption}
            </p>
          )}
        </div>
      );

    case "image-grid":
      return (
        <div
          key={idx}
          style={{
            maxWidth: "1100px",
            margin: "32px auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: `repeat(${section.columns || 2}, 1fr)`,
            gap: "16px",
          }}
        >
          {section.images?.map((img, i) => (
            <div key={i} style={{ position: "relative" }}>
              <Image
                src={img.src}
                alt={img.alt || ""}
                width={400}
                height={400}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          ))}
        </div>
      );

    case "video":
      return (
        <div
          key={idx}
          style={{
            ...sectionStyle,
            margin: "32px auto",
          }}
        >
          <video
            controls
            style={{ width: "100%", maxHeight: "500px" }}
            aria-label={section.caption}
          >
            <source src={section.src} />
            Your browser does not support the video tag.
          </video>
          {section.caption && (
            <p
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "0.85rem",
                color: "#54595F",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              {section.caption}
            </p>
          )}
        </div>
      );

    case "stat-row":
      return (
        <div
          key={idx}
          style={{
            maxWidth: "1100px",
            margin: "32px auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: `repeat(${section.labeledItems?.length || 3}, 1fr)`,
            gap: "24px",
          }}
        >
          {section.labeledItems?.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#FCFCF8",
                borderRadius: "12px",
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "#3A3517",
                  margin: "0 0 8px",
                  lineHeight: 1,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  color: "#54595F",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                }}
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>
      );

    case "two-column":
      return (
        <div
          key={idx}
          style={{
            ...sectionStyle,
            margin: "0 auto 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
          }}
        >
          {section.items?.map((text, i) => (
            <p
              key={i}
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "#3A3517",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {text}
            </p>
          ))}
        </div>
      );

    case "detail-grid":
      return (
        <div
          key={idx}
          style={{
            ...sectionStyle,
            margin: "32px auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px 48px",
          }}
        >
          {section.labeledItems?.map((item, i) => (
            <div key={i}>
              <p
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "#54595F",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 6px",
                }}
              >
                {item.label}
              </p>
              {item.content.split("\n").map((line, li) => (
                <p
                  key={li}
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 300,
                    color: "#3A3517",
                    lineHeight: 1.7,
                    margin: li === 0 ? 0 : "4px 0 0",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      );

    case "carousel":
      return section.images ? <CarouselBlock key={idx} images={section.images} caption={section.caption} /> : null;

    case "image-text":
      return (
        <div
          key={idx}
          className="cs-image-text"
          style={{
            ...sectionStyle,
            margin: "32px auto",
            display: "flex",
            gap: "56px",
            alignItems: "center",
          }}
        >
          {/* Image */}
          {section.src && (
            <div style={{ flexShrink: 0, width: "242px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={section.src}
                alt={section.alt || ""}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "28px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              />
            </div>
          )}
          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {section.label && (
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#3A3517",
                  lineHeight: 1.4,
                  margin: "0 0 16px",
                }}
              >
                {section.label}
              </p>
            )}
            {section.content && (
              <p
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "#3A3517",
                  lineHeight: 1.8,
                  margin: "0 0 12px",
                }}
              >
                {section.content}
              </p>
            )}
            {section.body && (
              <p
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "#3A3517",
                  lineHeight: 1.8,
                  margin: "0 0 20px",
                }}
              >
                {section.body}
              </p>
            )}
            {section.labeledItems?.map((item, i) => (
              <div key={i} style={{ marginTop: "16px" }}>
                <p
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#54595F",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    margin: "0 0 6px",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 300,
                    color: "#3A3517",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

function StickyNav({ items }: { items: string[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: 0 }
    );

    items.forEach((item) => {
      const el = document.getElementById(slugify(item));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav style={{ position: "sticky", top: "120px" }}>
      <p
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "0.7rem",
          fontWeight: 600,
          color: "#54595F",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          margin: "0 0 12px",
          paddingLeft: "12px",
        }}
      >
        On this page
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => {
          const id = slugify(item);
          const isActive = activeId === id;
          return (
            <li key={item}>
              <a
                href={`#${id}`}
                style={{
                  display: "block",
                  padding: "6px 12px",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#B5451B" : "#54595F",
                  textDecoration: "none",
                  borderLeft: isActive
                    ? "2px solid #B5451B"
                    : "2px solid transparent",
                  transition: "color 0.15s ease, border-color 0.15s ease",
                  lineHeight: 1.4,
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function CaseStudyRenderer({ caseStudy }: { caseStudy: CaseStudy }) {
  const hasTOC = !!(caseStudy.tableOfContents && caseStudy.tableOfContents.length > 0);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#FCFCF8", padding: "120px 24px 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* Tags */}
          {caseStudy.tags && caseStudy.tags.length > 0 && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #B5451B",
                    borderRadius: "9999px",
                    padding: "4px 14px",
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#B5451B",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(42px, 6vw, 64px)",
              fontWeight: 900,
              color: "#1A1A18",
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}
          >
            {caseStudy.title}
          </h1>

          {/* Subtitle */}
          {caseStudy.subtitle && (
            <p style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "#54595F",
              margin: "0 0 40px",
              lineHeight: 1.6,
            }}>
              {caseStudy.subtitle}
            </p>
          )}

          {/* Metadata row */}
          {(caseStudy.role || caseStudy.team || caseStudy.platform || caseStudy.focus || caseStudy.timeline || caseStudy.tools) && (
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0",
              marginBottom: "40px",
            }}>
              {[
                caseStudy.role      && { label: "Role",     value: caseStudy.role },
                caseStudy.team      && { label: "Team",     value: caseStudy.team },
                caseStudy.platform  && { label: "Platform", value: caseStudy.platform },
                caseStudy.timeline  && { label: "Timeline", value: caseStudy.timeline },
                caseStudy.tools     && { label: "Tools",    value: caseStudy.tools.join(", ") },
                caseStudy.methods   && { label: "Methods",  value: caseStudy.methods.join(", ") },
              ].filter(Boolean).map((item, i, arr) => {
                const meta = item as { label: string; value: string };
                return (
                  <div
                    key={meta.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      paddingRight: "32px",
                      marginRight: i < arr.length - 1 ? "32px" : "0",
                      borderRight: i < arr.length - 1 ? "1px solid rgba(60,53,23,0.15)" : "none",
                      paddingBottom: "12px",
                    }}
                  >
                    <span style={{
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "#54595F",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}>
                      {meta.label}
                    </span>
                    <span style={{
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 400,
                      color: "#1A1A18",
                    }}>
                      {meta.value}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Divider */}
          <hr style={{ border: "none", borderTop: "1px solid rgba(60,53,23,0.12)", margin: "0 0 48px" }} />

          {/* Hero image */}
          {caseStudy.heroImage && (
            <div style={{ margin: "0 0 48px" }}>
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.heroAlt || caseStudy.title}
                width={860}
                height={500}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "16px",
                }}
                sizes="(max-width: 900px) 100vw, 860px"
              />
            </div>
          )}

        </div>
      </section>

      {/* Mobile-only TOC banner (hidden on desktop when sidebar is visible) */}
      {hasTOC && (
        <section className="case-study-toc-banner" style={{ backgroundColor: "#FCFCF8", borderTop: "1px solid rgba(60,53,23,0.10)", padding: "32px 24px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#54595F", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              In this case study
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
              {caseStudy.tableOfContents!.map((item) => (
                <a
                  key={item}
                  href={`#${slugify(item)}`}
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    color: "#3A3517",
                    textDecoration: "none",
                    position: "relative",
                    paddingRight: "24px",
                  }}
                >
                  {item}
                  <span style={{ position: "absolute", right: 0, color: "#E09F3E" }}>•</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Content */}
      <div style={{ backgroundColor: "#fff", padding: "60px 0 80px" }}>
        {hasTOC ? (
          <div
            className="case-study-layout"
            style={{
              display: "flex",
              gap: "60px",
              alignItems: "flex-start",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <aside
              className="case-study-sidebar"
              style={{
                position: "sticky",
                top: "120px",
                alignSelf: "flex-start",
                width: "220px",
                flexShrink: 0,
                maxHeight: "calc(100vh - 140px)",
                overflowY: "auto",
                opacity: navVisible ? 1 : 0,
                transform: navVisible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <StickyNav items={caseStudy.tableOfContents!} />
            </aside>
            <div style={{ maxWidth: "860px", width: "100%", minWidth: 0 }}>
              {caseStudy.sections.map((section, idx) => renderSection(section, idx))}
            </div>
            <div className="case-study-sidebar-spacer" style={{ width: "220px", flexShrink: 0 }} />
          </div>
        ) : (
          <article>
            {caseStudy.sections.map((section, idx) => renderSection(section, idx))}
          </article>
        )}
      </div>

      {/* CTA: Next Project or back to all work */}
      <section style={{ backgroundColor: "#FCFCF8", padding: "60px 24px", textAlign: "center" }}>
        {caseStudy.nextProject ? (
          <div>
            <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#54595F", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>
              Next Project
            </p>
            <p style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 700, color: "#3A3517", margin: "0 0 8px" }}>
              {caseStudy.nextProject.name}
            </p>
            {caseStudy.nextProject.description && (
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "#54595F", margin: "0 0 24px" }}>
                {caseStudy.nextProject.description}
              </p>
            )}
            <Link href={caseStudy.nextProject.href} className="btn-primary">
              View case study
            </Link>
          </div>
        ) : (
          <Link href="/" className="btn-primary">
            View all projects
          </Link>
        )}
      </section>
    </>
  );
}
