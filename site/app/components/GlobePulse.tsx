 
"use client";

const points = [
  { x: 48, y: 42, label: "Spain", delay: "0s" },
  { x: 22, y: 52, label: "Americas", delay: "0.45s" },
  { x: 68, y: 45, label: "Asia", delay: "0.9s" },
  { x: 74, y: 66, label: "Australia", delay: "1.35s" },
  { x: 58, y: 50, label: "Middle East", delay: "1.8s" },
];

export default function GlobePulse() {
  return (
    <div className="pulse-globe" aria-label="JetsMunt worldwide distributor pulse">
      <div className="pulse-globe-ambient" />
      <div className="pulse-globe-orbit pulse-globe-orbit-a" />
      <div className="pulse-globe-orbit pulse-globe-orbit-b" />
      <div className="pulse-globe-sphere">
        <div className="pulse-globe-grid pulse-globe-grid-a" />
        <div className="pulse-globe-grid pulse-globe-grid-b" />
        <div className="pulse-globe-grid pulse-globe-grid-c" />
        <div className="pulse-globe-scan" />
        {points.map((point) => (
          <span
            className="pulse-globe-point"
            key={point.label}
            style={{ left: `${point.x}%`, top: `${point.y}%`, animationDelay: point.delay }}
            aria-label={point.label}
          />
        ))}
        <span className="pulse-globe-link pulse-link-a" />
        <span className="pulse-globe-link pulse-link-b" />
        <span className="pulse-globe-link pulse-link-c" />
      </div>
    </div>
  );
}
