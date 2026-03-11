"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const projects = [
  { name: "Clarifying Transfer Experience", href: "/work/tickets" },
  { name: "Redesigning Disease Education Site for Accessibility & Usability", href: "/work/disease-education" },
  { name: "MEDI", href: "/work/medi" },
  { name: "POSHT", href: "/work/posht" },
  { name: "MY COOKBOOK", href: "/work/cookbook" },
  { name: "PACKIT", href: "/work/packit" },
  { name: "Confessions of a Buyer", href: "/work/confessions" },
  { name: "Sunset Coast Lawns", href: "/work/sunsetcoastlawns" },
  { name: "Facebook Redesign", href: "/work/facebook" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#f5efe3", borderBottom: "1px solid #e8ddd0" }}
    >
      <nav
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        className="flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", padding: "12px 0" }}>
          <Image
            src="/uploads/2024/01/cropped-Artboard-37@2x.png"
            alt="Kenna Hansen"
            width={120}
            height={40}
            style={{ objectFit: "contain", height: "40px", width: "auto" }}
          />
        </Link>

        {/* Desktop Nav */}
        <ul
          className="hidden md:flex items-center gap-8"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          <li>
            <Link
              href="/"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#3A3517",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              HOME
            </Link>
          </li>
          <li style={{ position: "relative" }}>
            <button
              onClick={() => setWorkOpen(!workOpen)}
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#3A3517",
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.05em",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              MY WORK
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1l5 5 5-5" stroke="#3A3517" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            {workOpen && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "#3A3517",
                  listStyle: "none",
                  margin: 0,
                  padding: "8px 0",
                  minWidth: "320px",
                  zIndex: 100,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                {projects.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      onClick={() => setWorkOpen(false)}
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        color: "#ffffff",
                        textDecoration: "none",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                      }}
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/about"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#3A3517",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              ABOUT ME
            </Link>
          </li>
          <li>
            <a
              href="/KennaHansen-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#3A3517",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              RESUME
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="24" y2="24" stroke="#3A3517" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="24" y1="4" x2="4" y2="24" stroke="#3A3517" strokeWidth="2.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="24" y2="7" stroke="#3A3517" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="4" y1="14" x2="24" y2="14" stroke="#3A3517" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="4" y1="21" x2="24" y2="21" stroke="#3A3517" strokeWidth="2.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#3A3517",
            padding: "16px 24px 24px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li style={{ borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "12px", marginBottom: "12px" }}>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                style={{ color: "#fff", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "1rem", fontWeight: 600 }}
              >
                HOME
              </Link>
            </li>
            <li style={{ borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "12px", marginBottom: "12px" }}>
              <button
                onClick={() => setWorkOpen(!workOpen)}
                style={{ color: "#fff", background: "none", border: "none", fontFamily: "Roboto, sans-serif", fontSize: "1rem", fontWeight: 600, cursor: "pointer", padding: 0 }}
              >
                MY WORK
              </button>
              {workOpen && (
                <ul style={{ listStyle: "none", margin: "8px 0 0 16px", padding: 0 }}>
                  {projects.map((p) => (
                    <li key={p.href} style={{ marginBottom: "8px" }}>
                      <Link
                        href={p.href}
                        onClick={() => { setMobileOpen(false); setWorkOpen(false); }}
                        style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "0.9rem" }}
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li style={{ borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "12px", marginBottom: "12px" }}>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                style={{ color: "#fff", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "1rem", fontWeight: 600 }}
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <a
                href="/KennaHansen-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{ color: "#fff", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "1rem", fontWeight: 600 }}
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
