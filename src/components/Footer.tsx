import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#3A3517", color: "#fff", padding: "60px 24px 40px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <Image
          src="/uploads/2024/01/cropped-Artboard-37@2x.png"
          alt="Kenna Hansen"
          width={140}
          height={46}
          style={{ objectFit: "contain", marginBottom: "32px", filter: "brightness(0) invert(1)" }}
        />

        <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1.1rem", fontWeight: 400, marginBottom: "8px" }}>
          kenna.s.hansen@gmail.com
        </p>
        <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.8)", marginBottom: "32px" }}>
          I love taking on new challenges! Feel free to use any of my contacts and let&apos;s get in touch.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
          <a
            href="https://www.linkedin.com/in/kenna-hansen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "#fff", textDecoration: "none", fontSize: "1.5rem" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:kenna.s.hansen@gmail.com"
            aria-label="Email"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          <a
            href="/KennaHansen-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
