import Image from "next/image";
import Link from "next/link";
import type { Section, CaseStudy } from "@/content/case-studies";

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
          style={{
            ...sectionStyle,
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
            fontWeight: 700,
            color: "#3A3517",
            margin: "48px auto 16px",
          }}
        >
          {section.content}
        </h2>
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
              backgroundColor: "#f5efe3",
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
                margin: 0,
              }}
            >
              {section.content}
            </p>
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
            paddingLeft: "40px",
          }}
        >
          {section.items?.map((item, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>
              {item}
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
          <Image
            src={section.src!}
            alt={section.alt || ""}
            width={860}
            height={500}
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="(max-width: 900px) 100vw, 860px"
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
                style={{ width: "100%", height: "auto", display: "block" }}
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

    default:
      return null;
  }
}

export default function CaseStudyRenderer({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#3A3517", padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
              color: "#f5efe3",
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}
          >
            {caseStudy.title}
          </h1>
          <div style={{ width: "80px", height: "2px", backgroundColor: "#E09F3E", marginBottom: "24px" }} />
          {caseStudy.subtitle && (
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1.1rem", fontWeight: 300, color: "rgba(255,255,255,0.85)", margin: "0 0 32px" }}>
              {caseStudy.subtitle}
            </p>
          )}
          {/* Role/Platform/Focus meta */}
          {(caseStudy.role || caseStudy.platform || caseStudy.focus) && (
            <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
              {caseStudy.role && (
                <div>
                  <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#E09F3E", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Role</p>
                  <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "#fff", margin: 0 }}>{caseStudy.role}</p>
                </div>
              )}
              {caseStudy.platform && (
                <div>
                  <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#E09F3E", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Platform</p>
                  <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "#fff", margin: 0 }}>{caseStudy.platform}</p>
                </div>
              )}
              {caseStudy.focus && (
                <div>
                  <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#E09F3E", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Focus</p>
                  <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "#fff", margin: 0 }}>{caseStudy.focus}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Hero Image */}
      <section style={{ backgroundColor: "#f5efe3" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0" }}>
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.heroAlt || caseStudy.title}
            width={1100}
            height={600}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="100vw"
          />
        </div>
      </section>

      {/* Table of Contents */}
      {caseStudy.tableOfContents && caseStudy.tableOfContents.length > 0 && (
        <section style={{ backgroundColor: "#F2F5FC", padding: "32px 24px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#54595F", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              In this case study
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
              {caseStudy.tableOfContents.map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    color: "#3A3517",
                    position: "relative",
                    paddingRight: "24px",
                  }}
                >
                  {item}
                  <span style={{ position: "absolute", right: 0, color: "#E09F3E" }}>•</span>
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Content */}
      <article style={{ backgroundColor: "#fff", padding: "60px 0 80px" }}>
        {caseStudy.sections.map((section, idx) => renderSection(section, idx))}
      </article>

      {/* View Other Projects CTA */}
      <section style={{ backgroundColor: "#f5efe3", padding: "60px 24px", textAlign: "center" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            backgroundColor: "#3A3517",
            color: "#f5efe3",
            fontFamily: "Roboto, sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            padding: "14px 40px",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          View other projects
        </Link>
      </section>
    </>
  );
}
