import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Clarifying Transfer Experience",
    href: "/work/tickets",
    image: "/uploads/2026/01/DoMoreCard.png",
  },
  {
    title: "Redesigning Disease Education Site for Accessibility & Usability",
    href: "/work/disease-education",
    image: "/uploads/2025/02/HF_Portfolio_Card-854x1024.png",
  },
  {
    title: "MEDI Accessibility Audit",
    href: "/work/medi",
    image: "/uploads/2023/11/Artboard-8_5@2x-1.png",
  },
  {
    title: "POSHT",
    href: "/work/posht",
    image: "/uploads/2023/11/Artboard-8@2x-1-854x1024.png",
  },
  {
    title: "MY COOKBOOK",
    href: "/work/cookbook",
    image: "/uploads/2023/11/Artboard-8_1@2x-1.png",
  },
  {
    title: "Sunset Coast Lawns",
    href: "/work/sunsetcoastlawns",
    image: "/uploads/2023/11/Artboard-8_4@2x-1.png",
  },
  {
    title: "PACKIT",
    href: "/work/packit",
    image: "/uploads/2024/07/Frame-94.png",
  },
  {
    title: "Facebook Redesign",
    href: "/work/facebook",
    image: "/uploads/2023/11/Artboard-8_2@2x-1.png",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: "#f5efe3", padding: "80px 24px 60px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <Image
              src="/uploads/2021/03/IMG_0218-scaled.jpeg"
              alt="Kenna Hansen"
              width={280}
              height={280}
              priority
              style={{ borderRadius: "50%", objectFit: "cover", width: "280px", height: "280px" }}
            />
          </div>
          <div style={{ flex: 1, minWidth: "280px" }}>
            <h1
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(48px, 7vw, 70px)",
                fontWeight: 900,
                color: "#3A3517",
                margin: "0 0 16px",
                lineHeight: 1.1,
              }}
            >
              Hi! I&apos;m Kenna.
            </h1>
            <div style={{ width: "80px", height: "2px", backgroundColor: "#E09F3E", marginBottom: "20px" }} />
            <p
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "clamp(16px, 2vw, 20px)",
                fontWeight: 300,
                color: "#3A3517",
                lineHeight: 1.6,
                margin: "0 0 32px",
              }}
            >
              user experience strategist based in Chicago, IL passionate about crafting
              data-driven, accessible, user-centered experiences.
            </p>
            <Link
              href="/about"
              style={{
                display: "inline-block",
                backgroundColor: "#3A3517",
                color: "#f5efe3",
                fontFamily: "Roboto, sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                padding: "14px 32px",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              View more about me
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: "#3A3517", padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "Roboto Slab, serif",
              fontSize: "1rem",
              fontWeight: 400,
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              marginBottom: "32px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            my stats
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "80px", flexWrap: "wrap" }}>
            {[
              { number: "6+", label: "years experience" },
              { number: "150+", label: "design projects" },
              { number: "50+", label: "accessibility audits" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(40px, 6vw, 60px)",
                    fontWeight: 900,
                    color: "#f5efe3",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </p>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.8)", margin: "8px 0 0" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ backgroundColor: "#f5efe3", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.href}
                title={project.title}
                href={project.href}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ backgroundColor: "#F2F5FC", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1.2rem", fontWeight: 500, color: "#3A3517", marginBottom: "8px" }}>
            kenna.s.hansen@gmail.com
          </p>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "#54595F", marginBottom: "32px" }}>
            I love taking on new challenges! Feel free to use any of my contacts and let&apos;s get in touch.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
            <a href="https://www.linkedin.com/in/kenna-hansen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "#3A3517" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:kenna.s.hansen@gmail.com" aria-label="Email" style={{ color: "#3A3517" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a href="/KennaHansen-Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" style={{ color: "#3A3517" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
