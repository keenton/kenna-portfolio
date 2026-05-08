import Image from "next/image";
import Link from "next/link";
import StatsSection from "@/components/StatsSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ProjectsFilter from "@/components/ProjectsFilter";


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: "#FCFCF8", padding: "120px 24px 60px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
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
              senior product researcher and strategist based in Chicago, IL passionate about crafting
              data-driven, accessible, and delightful experiences.
            </p>
            <Link href="/about" className="btn-primary">
              Learn more about me
            </Link>
          </div>
          <div style={{ flexShrink: 0, position: "relative" }}>
            {/* Decorative arch rings — upper right */}
            <div style={{
              position: "absolute",
              width: "456px",
              height: "477px",
              borderRadius: "300px 300px 0 0",
              border: "1.65px solid rgba(181, 69, 27, 0.35)",
              background: "transparent",
              top: "-30px",
              right: "-20px",
              zIndex: 0,
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute",
              width: "496px",
              height: "517px",
              borderRadius: "340px 340px 0 0",
              border: "1.65px solid rgba(181, 69, 27, 0.15)",
              background: "transparent",
              top: "-50px",
              right: "-91px",
              zIndex: 0,
              pointerEvents: "none",
            }} />
            <div
              style={{
                width: "416px",
                height: "437px",
                borderRadius: "260px 260px 0 0",
                overflow: "hidden",
              }}
            >
              <Image
                src="/uploads/2026/01/Portfolio_Headshot1.JPG"
                alt="Kenna Hansen"
                width={416}
                height={437}
                priority
                style={{ objectFit: "cover", objectPosition: "25% 15%", width: "416px", height: "437px", transform: "scale(1.265)", transformOrigin: "25% 15%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Primary Skills */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#3A3517", marginBottom: "40px" }}>
            How I Work
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px" }}>
            <div>
              <div style={{ marginBottom: "16px" }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E09F3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, color: "#3A3517", margin: "0 0 12px" }}>
                Research-Led Design
              </h3>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "#54595F", lineHeight: 1.7, margin: 0 }}>
                I talk to real people before I make decisions. From moderating usability sessions to facilitating UX workshops with first-time digital clients, research is not a phase I check off. It helps inform my design decisions and create usable products.
              </p>
            </div>
            <div>
              <div style={{ marginBottom: "16px" }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E09F3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, color: "#3A3517", margin: "0 0 12px" }}>
                Clarity in Complexity
              </h3>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "#54595F", lineHeight: 1.7, margin: 0 }}>
                Whether it is regulated industries, sensitive user populations, legal constraints, or nervous stakeholders, I gravitate toward the hard problems and strive to uncover the clearest path through them.
              </p>
            </div>
            <div>
              <div style={{ marginBottom: "16px" }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E09F3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, color: "#3A3517", margin: "0 0 12px" }}>
                Bridging Design and Development
              </h3>
              <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "#54595F", lineHeight: 1.7, margin: 0 }}>
                A background in development means I design with technical constraints in mind from the start. When a developer says something is not possible, I can usually offer an alternative that is. That fluency makes me a faster collaborator and a more precise designer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ backgroundColor: "#FCFCF8", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#3A3517", marginBottom: "40px" }}>
            Highlighted Projects
          </h2>
          <ProjectsFilter />
        </div>
      </section>

      {/* Designing with AI */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#3A3517", marginBottom: "24px" }}>
            Always Evolving
          </h2>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "#3A3517", lineHeight: 1.8, maxWidth: "780px", margin: 0 }}>
            Throughout my career I have continued to push myself to learn and evolve. From staying up to date on the latest prototyping tools to understanding emerging trends in product development, growth has always meant finding smarter ways to work. That curiosity has led me to AI. I now regularly use tools like <strong style={{ fontWeight: 600 }}>Claude Code</strong>, <strong style={{ fontWeight: 600 }}>Figma Make</strong>, and <strong style={{ fontWeight: 600 }}>Lovable</strong> to move faster, prototype more freely, and explore ideas I would not have had the bandwidth to try before. However, despite how much the landscape shifts, I want the user to stay at the center of everything I do. That is how I know I am shipping a meaningful and usable product.
          </p>
        </div>
      </section>

      {/* Marquee Strip */}
      <MarqueeStrip />

      {/* Contact Section */}
      <section style={{ backgroundColor: "#3A3517", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Playfair Display, serif", fontSize: "32px", fontWeight: 700, color: "#FCFCF8", marginBottom: "24px" }}>
            kenna.s.hansen@gmail.com
          </p>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", marginBottom: "32px" }}>
            I love taking on new challenges! Feel free to use any of my contacts and let&apos;s get in touch.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
            <a href="https://www.linkedin.com/in/kennahansen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "#FCFCF8" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:kenna.s.hansen@gmail.com" aria-label="Email" style={{ color: "#FCFCF8" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a href="/Kenna_Hansen_Resume_0507.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" style={{ color: "#FCFCF8" }}>
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
