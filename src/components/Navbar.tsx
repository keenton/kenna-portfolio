"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const projects = [
  { name: "Ticket Transfer Redesign", href: "/work/domore-ticket-transfer" },
  { name: "Medical Information Website Build", href: "/work/medical-information-platform" },
  { name: "Usability Research", href: "/work/usability-testing" },
  { name: "WCAG Accessibility Audit", href: "/work/accessibility-audit" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(252, 252, 248, 0.55)" : "#FCFCF8",
        backdropFilter: scrolled ? "blur(6px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,221,208,0.3)" : "1px solid #e8ddd0",
        boxShadow: scrolled ? "none" : "0 2px 12px rgba(58,53,23,0.06)",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <nav
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        className="flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", padding: "16px 0", marginRight: "8px" }}>
          <Image
            src="/uploads/2024/01/cropped-Artboard-37@2x.png"
            alt="Kenna Hansen"
            width={240}
            height={90}
            style={{ objectFit: "contain", height: "90px", width: "auto" }}
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
                fontFamily: "Open Sans, sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#3A3517",
                textDecoration: "none",
                letterSpacing: "0.08em",
              }}
            >
              HOME
            </Link>
          </li>
          <li
            style={{ position: "relative" }}
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <button
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#3A3517",
                background: "none",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.08em",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              MY WORK
              <svg
                width="12" height="8" viewBox="0 0 12 8" fill="none"
                style={{
                  transform: workOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s ease",
                }}
              >
                <path d="M1 1l5 5 5-5" stroke="#3A3517" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <ul
              className="dropdown-menu"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "#3A3517",
                listStyle: "none",
                margin: 0,
                padding: "12px 0 8px",
                minWidth: "320px",
                zIndex: 100,
                borderRadius: "8px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                opacity: workOpen ? 1 : 0,
                transform: workOpen ? "translateY(0)" : "translateY(-8px)",
                pointerEvents: workOpen ? "auto" : "none",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
            >
              {projects.map((p) => {
                const isActive = pathname === p.href;
                return (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      onClick={() => setWorkOpen(false)}
                      style={{
                        display: "block",
                        color: "#ffffff",
                        textDecoration: "none",
                        fontFamily: "Open Sans, sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: isActive ? 700 : 400,
                        letterSpacing: "0.02em",
                        backgroundColor: isActive ? "rgba(255,255,255,0.12)" : "transparent",
                        borderRadius: isActive ? "4px" : "0",
                        margin: isActive ? "0 8px" : "0",
                        padding: isActive ? "10px 12px" : "10px 20px",
                        transition: "color 0.15s ease, padding-left 0.15s ease, background-color 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLElement).style.paddingLeft = "26px";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLElement).style.paddingLeft = "20px";
                        }
                      }}
                    >
                      {p.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <Link
              href="/about"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#3A3517",
                textDecoration: "none",
                letterSpacing: "0.08em",
              }}
            >
              ABOUT ME
            </Link>
          </li>
          <li>
            <a
              href="/Kenna_Hansen_Resume_0507.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#3A3517",
                textDecoration: "none",
                letterSpacing: "0.08em",
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
                href="/Kenna_Hansen_Resume_0507.pdf"
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
