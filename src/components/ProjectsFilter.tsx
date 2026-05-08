"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import DoMoreCard from "@/components/DoMoreCard";

interface Project {
  title: string;
  href: string;
  image: string;
  description: string;
  tags: string[];
  linkText: string;
  bgColor: string;
  pillColor: string;
  imagePosition?: string;
  isDoMore?: boolean;
}

const allProjects: Project[] = [
  {
    title: "Ticket Transfer Redesign",
    href: "/work/domore-ticket-transfer",
    image: "",
    description: "",
    tags: ["UX STRATEGY", "CX STRATEGY", "USER RESEARCH"],
    linkText: "",
    bgColor: "",
    pillColor: "",
    isDoMore: true,
  },
  {
    title: "Building a Medical Information Platform",
    href: "/work/medical-information-platform",
    image: "/uploads/2026/01/MI Mockup.png",
    description: "Designing a compliant, scalable medical information site for a first-time digital client.",
    tags: ["UX STRATEGY", "INFORMATION ARCHITECTURE", "STAKEHOLDER EDUCATION"],
    linkText: "View Medical Information Platform",
    bgColor: "#f5dcd9",
    pillColor: "#e8b8b2",
    imagePosition: "top center",
  },
  {
    title: "End to End Usability Testing",
    href: "/work/usability-testing",
    image: "/uploads/2026/01/Usability_Optimal.png",
    description: "Usability research for a cancer treatment support website.",
    tags: ["USABILITY TESTING", "ACCESSIBILITY", "USER RESEARCH"],
    linkText: "View Usability Research",
    bgColor: "#d6ecec",
    pillColor: "#b0d4d4",
  },
  {
    title: "WCAG Accessibility Audit",
    href: "/work/accessibility-audit",
    image: "/uploads/2026/01/Automated_Report_2.png",
    description: "WCAG A and AA accessibility audit and remidation strategy for an HCP website for a global biopharmaceutical company.",
    tags: ["ACCESSIBILITY", "STAKEHOLDER EDUCATION"],
    linkText: "View Accessibility Audit",
    bgColor: "#eceaf5",
    pillColor: "#d4d0e8",
    imagePosition: "top center",
  },
];

const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags)));

export default function ProjectsFilter() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? allProjects.filter((p) => p.tags.includes(active))
    : allProjects;

  return (
    <>
      {/* Filter pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
        <button
          onClick={() => setActive(null)}
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "6px 16px",
            borderRadius: "9999px",
            border: "1px solid #B5451B",
            cursor: "pointer",
            transition: "background-color 0.2s ease, color 0.2s ease",
            backgroundColor: active === null ? "#B5451B" : "#FCFCF8",
            color: active === null ? "#FCFCF8" : "#B5451B",
          }}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(active === tag ? null : tag)}
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: "9999px",
              border: "1px solid #B5451B",
              cursor: "pointer",
              transition: "background-color 0.2s ease, color 0.2s ease",
              backgroundColor: active === tag ? "#B5451B" : "#FCFCF8",
              color: active === tag ? "#FCFCF8" : "#B5451B",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="projects-grid">
        {filtered.map((project) =>
          project.isDoMore ? (
            <DoMoreCard key={project.href} />
          ) : (
            <ProjectCard
              key={project.href}
              title={project.title}
              href={project.href}
              image={project.image}
              description={project.description}
              tags={project.tags}
              linkText={project.linkText}
              bgColor={project.bgColor}
              pillColor={project.pillColor}
              imagePosition={project.imagePosition}
            />
          )
        )}
      </div>
    </>
  );
}
