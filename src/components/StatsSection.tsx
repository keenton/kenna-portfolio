"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 6, label: "years experience" },
  { target: 150, label: "design projects" },
  { target: 50, label: "accessibility audits" },
];

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return count;
}

function StatItem({
  target,
  label,
  triggered,
}: {
  target: number;
  label: string;
  triggered: boolean;
}) {
  const count = useCountUp(target, 1500, triggered);
  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          fontFamily: "Open Sans, sans-serif",
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700,
          color: "#3A3517",
          margin: 0,
          lineHeight: 1,
        }}
      >
        {count}+
      </p>
      <p
        style={{
          fontFamily: "Open Sans, sans-serif",
          fontSize: "0.95rem",
          fontWeight: 400,
          color: "#3A3517",
          margin: "6px 0 0",
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ backgroundColor: "#FCFCF8", padding: "56px 24px" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {/* Left: label + decorative line */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "1.43rem",
              fontWeight: 700,
              color: "#3A3517",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            my stats
          </p>
          <div style={{ width: "60px", height: "2px", backgroundColor: "#E09F3E" }} />
        </div>

        {/* Right: stat numbers */}
        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              target={stat.target}
              label={stat.label}
              triggered={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
