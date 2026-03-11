import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Kenna Hansen",
};

const education = [
  {
    school: "University of Illinois at Urbana-Champaign",
    degree: "Bachelor of Science in Advertising, Minor in Computer Science",
    date: "May 2021",
  },
];

const experience = [
  { company: "Eversana Intouch", role: "User Experience Strategist", date: "August 2021 - Present" },
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
    category: "Soft Skills",
    items: ["Curiosity", "Empathy", "Collaboration", "Creativity", "Communication", "Leadership"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#f5efe3", padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1.15rem", fontWeight: 300, color: "#3A3517", lineHeight: 1.8, maxWidth: "700px", margin: "0 0 20px" }}>
            Hi there! My name is Kenna and I am a User Experience Strategist located in Chicago, IL. Since I was young, I have been obsessed with people: the way we think, connect, and find joy in everyday things. With my background in both creative and technical fields, I have a passion for combining these interests to craft{" "}
            <strong style={{ fontWeight: 600 }}>accessible</strong> experiences for the thing I love: people.
          </p>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1.15rem", fontWeight: 300, color: "#3A3517", lineHeight: 1.8, maxWidth: "700px", margin: "0 0 20px" }}>
            For the past 4 years, I have worked with EVERSANA Intouch researching and creating{" "}
            <strong style={{ fontWeight: 600 }}>user-centered products</strong>. I also have{" "}
            <strong style={{ fontWeight: 600 }}>freelanced</strong> designing and developing websites since high school. In addition to my experience in UX and development, I also have a passion for{" "}
            <strong style={{ fontWeight: 600 }}>photography</strong> and <strong style={{ fontWeight: 600 }}>videography</strong>.
          </p>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1.15rem", fontWeight: 300, color: "#3A3517", lineHeight: 1.8, maxWidth: "700px", margin: "0 0 32px" }}>
            I am always down to collaborate and love taking on new challenges. Feel free to connect with me on LinkedIn or shoot me an email at keenowainc@gmail.com!
          </p>
          <a
            href="/KennaHansen-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
            View my resume
          </a>
        </div>
      </section>

      {/* Education & Experience */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px" }}>
          {/* Education */}
          <div>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#3A3517", marginBottom: "24px" }}>
              Education
            </h2>
            {education.map((ed) => (
              <div key={ed.school} style={{ marginBottom: "24px" }}>
                <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1rem", fontWeight: 600, color: "#3A3517", margin: "0 0 4px" }}>
                  {ed.school}
                </p>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "#54595F", margin: "0 0 4px" }}>
                  {ed.degree}
                </p>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.9rem", fontWeight: 400, color: "#807900", margin: 0 }}>
                  {ed.date}
                </p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#3A3517", marginBottom: "24px" }}>
              Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.company + exp.date} style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #e8ddd0" }}>
                <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1rem", fontWeight: 600, color: "#3A3517", margin: "0 0 4px" }}>
                  {exp.company}
                </p>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "#54595F", margin: "0 0 2px" }}>
                  {exp.role}
                </p>
                <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.85rem", fontWeight: 400, color: "#807900", margin: 0 }}>
                  {exp.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ backgroundColor: "#f5efe3", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 900, color: "#3A3517", marginBottom: "40px" }}>
            Skills
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px" }}>
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 style={{ fontFamily: "Roboto Slab, serif", fontSize: "1.1rem", fontWeight: 600, color: "#3A3517", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {skillGroup.category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: "Open Sans, sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        color: "#3A3517",
                        backgroundColor: "#fff",
                        border: "1px solid #E09F3E",
                        padding: "4px 12px",
                        borderRadius: "2px",
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

      {/* Download Resume CTA */}
      <section style={{ backgroundColor: "#3A3517", padding: "60px 24px", textAlign: "center" }}>
        <a
          href="/KennaHansen-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#f5efe3",
            color: "#3A3517",
            fontFamily: "Roboto, sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            padding: "14px 40px",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          Download my resume
        </a>
      </section>
    </>
  );
}
