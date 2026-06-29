import React from "react";

export default function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      {/* Turbine Icon */}
      <svg
        width="38"
        height="26"
        viewBox="0 0 38 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, color: "var(--accent)" }}
      >
        {/* Left Wing Stripes */}
        <path d="M2 5H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M6 11H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 17H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

        {/* Turbine Outer Ring */}
        <circle cx="26" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
        {/* Turbine Center Hub */}
        <circle cx="26" cy="11" r="2" fill="currentColor" />

        {/* Turbine Vanes/Blades */}
        <path d="M26 3V5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M26 17V19" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 11H20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 11H34" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.3 5.3L21.7 6.7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30.3 15.3L31.7 16.7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.3 16.7L21.7 15.3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30.3 6.7L31.7 5.3" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Brand Text */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
        <span
          style={{
            fontSize: "1.1rem",
            fontWeight: 900,
            letterSpacing: "0.04em",
            color: "#fff",
            textTransform: "uppercase",
            fontFamily: "'Archivo', system-ui, sans-serif",
          }}
        >
          JETSMUNT
        </span>
        <span
          style={{
            fontSize: "0.45rem",
            fontWeight: 800,
            letterSpacing: "0.18em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            marginTop: "1px",
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          DEFENSE PROPULSION SYSTEMS
        </span>
      </div>
    </div>
  );
}
