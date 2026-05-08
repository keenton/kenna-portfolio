"use client";

import { useState, useEffect } from "react";

const PASSWORD = "DesignIsFun";
const STORAGE_KEY = "portfolio_auth";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setAuthenticated(stored === "true");
  }, []);

  if (authenticated === null) return null;

  if (authenticated) return <>{children}</>;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setInput("");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FCFCF8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "2rem",
            fontWeight: 900,
            color: "#3A3517",
            margin: "0 0 12px",
          }}
        >
          Password Required
        </p>
        <div style={{ width: "60px", height: "2px", backgroundColor: "#E09F3E", margin: "0 auto 20px" }} />
        <p
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontSize: "0.95rem",
            fontWeight: 300,
            color: "#54595F",
            margin: "0 0 32px",
            lineHeight: 1.6,
          }}
        >
          This portfolio contains confidential case studies. Please enter the password to continue.
        </p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Enter password"
            autoFocus
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              padding: "12px 16px",
              borderRadius: "8px",
              border: error ? "1.5px solid #B5451B" : "1.5px solid #ccc",
              outline: "none",
              color: "#3A3517",
              backgroundColor: "#fff",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          {error && (
            <p
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "0.85rem",
                color: "#B5451B",
                margin: 0,
              }}
            >
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="btn-primary"
            style={{ alignSelf: "center" }}
          >
            View Case Studies
          </button>
        </form>
      </div>
    </div>
  );
}
