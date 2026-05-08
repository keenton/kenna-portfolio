import type { Metadata } from "next";
import Link from "next/link";
import TravelSection from "@/components/TravelSection";

export const metadata: Metadata = {
  title: "About | Kenna Hansen",
};


const experience = [
  { company: "Eversana Intouch", role: "User Experience Strategist", date: "August 2021 - Present" },
  { company: "DoStuff Media", role: "UX Strategist", date: "March 2025 - Present (Contract)" },
  { company: "Sunset Coast Lawns", role: "Web Design & Developer, Logo Design", date: "January 2022 - August 2023" },
  { company: "Computer Science Education Tool", role: "UX Designer", date: "February 2021 - May 2021" },
  { company: "QuPharm", role: "Web Design & Developer", date: "November 2020 - May 2021" },
  { company: "UIUC Office of Advancement, College of Engineering", role: "Office Writer", date: "March 2019 - May 2021" },
  { company: "Competitive Lawn Service", role: "Logo Designer & Web Developer", date: "July 2020 - September 2020 (Contract)" },
  { company: "Western Springs Handyman", role: "Logo Designer & Web Developer", date: "June 2020 - July 2020 (Contract)" },
  { company: "Trinity Property Consultants", role: "Videographer & Editor", date: "May 2020 - June 2020 (Contract)" },
  { company: "LifeQuotes.com, Inc.", role: "Executive Intern & SEO Analyst", date: "June 2019 - January 2020" },
  { company: "Bosworth Capital Partners", role: "Logo Designer & Web Developer", date: "May 2019 - June 2019 (Contract)" },
  { company: "Brave Initiatives", role: "Social Media Manager & Operations Intern", date: "June 2017 - August 2018" },
];

const skills = [
  {
    category: "Design",
    items: ["Logo Design", "Prototyping", "Visual Design", "Web Design", "Product Design", "Photography", "Videography", "Mobile Design"],
  },
  {
    category: "Research",
    items: ["Moderating", "Qualitative Research", "Competitive Analysis", "Quantitative Research", "User Research", "Usability Testing", "User Surveys"],
  },
  {
    category: "Tools",
    items: ["Figma", "Sketch", "WordPress", "Microsoft Office", "Adobe XD", "Adobe InDesign", "Adobe Illustrator", "Adobe After Effects", "Adobe Premiere Pro"],
  },
  {
    category: "Programming",
    items: ["C++", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Professional Skills",
    items: ["Curiosity", "Empathy", "Collaboration", "Creativity", "Communication", "Leadership"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#FCFCF8", padding: "80px 24px 60px" }}>
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
              }}
            >
              Meet Kenna.
            </h1>
            <div style={{ width: "80px", height: "2px", backgroundColor: "#E09F3E", marginBottom: "32px" }} />
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1.15rem", fontWeight: 300, color: "#3A3517", lineHeight: 1.8, margin: "0 0 20px" }}>
              Hi there! My name is Kenna and I am a User Experience Strategist located in Chicago, IL. Since I was young, I have been obsessed with people: the way we think, connect, and find joy in everyday things. With my background in both creative and technical fields, I have a passion for combining these interests to craft{" "}
              <strong style={{ fontWeight: 600 }}>accessible</strong> experiences for the thing I love: people.
            </p>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1.15rem", fontWeight: 300, color: "#3A3517", lineHeight: 1.8, margin: "0 0 20px" }}>
              For the past 5 years, I have worked with EVERSANA Intouch researching and creating{" "}
              <strong style={{ fontWeight: 600 }}>user-centered products</strong>. I also have{" "}
              <strong style={{ fontWeight: 600 }}>freelanced</strong> designing and developing websites since high school. In addition to my experience in UX and development, I also have a passion for{" "}
              <strong style={{ fontWeight: 600 }}>photography</strong> and <strong style={{ fontWeight: 600 }}>videography</strong>.
            </p>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1.15rem", fontWeight: 300, color: "#3A3517", lineHeight: 1.8, margin: "0 0 32px" }}>
              I am always down to collaborate and love taking on new challenges. Feel free to connect with me on LinkedIn or shoot me an email at keenowainc@gmail.com!
            </p>
            <a
              href="/Kenna_Hansen_Resume_0507.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View my resume
            </a>
          </div>
          <div style={{ flexShrink: 0, position: "relative", width: "475px", height: "475px" }}>
            {/* Decorative rings — upper right */}
            <div style={{
              position: "absolute",
              width: "504px",
              height: "504px",
              borderRadius: "50%",
              border: "1.5px solid rgba(180, 140, 80, 0.35)",
              background: "transparent",
              top: "-30px",
              right: "-20px",
              zIndex: 0,
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              border: "1.5px solid rgba(180, 140, 80, 0.15)",
              background: "transparent",
              top: "-80px",
              right: "-110px",
              zIndex: 0,
              pointerEvents: "none",
            }} />
            {/* Circle image */}
            <div
              style={{
                width: "475px",
                height: "475px",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/2026/01/Portfolio About Me6.png"
                alt="Kenna Hansen"
                style={{ objectFit: "cover", objectPosition: "45% 45%", width: "100%", height: "100%", transform: "scale(1.2) translate(30px, -10px)", transformOrigin: "45% 45%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Primary Skills */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#3A3517", marginBottom: "40px" }}>
            How I Work
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px" }}>
            {/* Research-Led Design */}
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
            {/* Clarity in Complexity */}
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
            {/* Stakeholder Influence */}
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

      {/* Skills */}
      <section style={{ backgroundColor: "#FCFCF8", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#3A3517", marginBottom: "40px" }}>
            Skills
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px" }}>
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#54595F", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {skillGroup.category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: "Open Sans, sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "#B5451B",
                        backgroundColor: "#FCFCF8",
                        border: "1px solid #B5451B",
                        padding: "4px 14px",
                        borderRadius: "9999px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#3A3517", marginBottom: "32px", marginTop: "0" }}>
            Experience
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {experience.map((exp) => (
              <div key={exp.company + exp.date} style={{ backgroundColor: "#FCFCF8", borderRadius: "12px", padding: "24px" }}>
                <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1rem", fontWeight: 600, color: "#3A3517", margin: "0 0 6px" }}>
                  {exp.company}
                </p>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "#54595F", margin: "0 0 8px" }}>
                  {exp.role}
                </p>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.8rem", fontWeight: 400, color: "#807900", margin: 0 }}>
                  {exp.date}
                </p>
              </div>
            ))}
          </div>
          <a
            href="/Kenna_Hansen_Resume_0507.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download my resume
          </a>
        </div>
      </section>

      {/* More about me */}
      <TravelSection />

      {/* CTA Footer */}
      <section style={{ backgroundColor: "#3A3517", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.6rem", fontWeight: 700, color: "#FCFCF8", marginBottom: "12px" }}>
            See my work
          </p>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>
            Explore a couple of my highlighted case studies below.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/work/domore-ticket-transfer" className="btn-primary-inverted">
              View Ticket Transfer Redesign
            </Link>
            <Link href="/work/usability-testing" className="btn-primary-inverted">
              View Usability Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
