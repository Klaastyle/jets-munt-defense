import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../../components/SeoPage";
import { buildMetadata } from "../../../lib/metadata";
import { primaryAlternates } from "../../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "UAV Electronics & Telemetry Services | JetsMunt",
  description:
    "Advanced electronic engine controls, redundant ECUs, high-speed CAN Bus telemetry, and custom autopilot integrations.",
  path: "/en/services/electronics-telemetry",
  keywords: ["ECU electronics", "UAV telemetry link", "FADEC aerospace", "FOC brushless control"],
  locale: "en_US",
  languages: primaryAlternates("services-telemetry"),
});

export default function EnElectronicsTelemetryPage() {
  const interfaces = [
    {
      title: "CAN Bus",
      desc: "Reliable high-speed telemetry and engine control bus. Supports standardized aerospace and industrial networks.",
    },
    {
      title: "Fiber Optic Interface (Optional)",
      desc: "Optional physical interface completely immune to electromagnetic interference (EMI) and RF noise.",
    },
    {
      title: "Open Serial Protocol",
      desc: "Standard UART serial interface for straightforward integration with most autopilot avionics.",
    },
    {
      title: "FC Sensor Expansion (I2C)",
      desc: "Enables connections for auxiliary flight sensors including fuel flow meters and airspeed indicators.",
    },
    {
      title: "SD Data Logging",
      desc: "Continuous high-frequency (50 Hz) recording of all engine parameters and faults for flight log analysis.",
    },
  ];

  const management = [
    { title: "Real-Time Telemetry", desc: "Continuous monitoring of engine RPM, exhaust gas temperature (EGT), pump levels, and voltages." },
    { title: "Intelligent Sensor Fusion", desc: "Kalman-filter-based processing built into the firmware for extremely stable sensor outputs." },
    { title: "Environmental Compensation", desc: "Automatic injector mapping adaptation to pressure, temperature, and ambient humidity changes." },
    { title: "Engine Protection Functions", desc: "Integrated monitoring and safety logic to perform automatic shutdown on flames out or overcurrent." },
    { title: "Precision RPM Control", desc: "Field Oriented Control (FOC) for starters and brushless pumps ensuring precise turbine acceleration." },
    { title: "Engine Health Monitoring", desc: "Algorithmic supervision of mechanical wear and thermal fatigue based on operational cycles." },
  ];

  return (
    <SeoPageShell
      locale="en"
      kicker="Integrated Propulsion Intelligence"
      title="Advanced Electronics & Telemetry"
      description="Our turbojets feature an advanced, proprietary FADEC digital control architecture, grouping all processing, sensing, and control loops inside an EMI-shielded enclosure."
      image="/media/capabilities/uav-integration.png"
      breadcrumbPath="/en/services/electronics-telemetry"
    >
      <section className="section container" style={{ paddingBottom: "3rem" }}>
        
        {/* Architecture Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Integrated Control Architecture
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              The JetsMunt ECU acts as the central intelligence unit of the propulsion system. It controls brushless fuel pumps and starters via FOC vectorization algorithms while streaming high-density telemetry data to the flight control system.
            </p>
            <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.85rem", color: "var(--text-soft)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[GCS]</span>
                  <span>↔ Ground Control Station interface</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[Telemetry]</span>
                  <span>↔ Air-to-ground wireless link</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[Autopilot]</span>
                  <span>↔ Primary flight navigation computer</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>[JetsMunt ECU]</span>
                  <span>↔ Full authority engine control & actuators</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interfaces */}
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Communication Interfaces
            </h2>
            <div style={{ display: "grid", gap: "1.2rem" }}>
              {interfaces.map((inf) => (
                <div key={inf.title} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1rem" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "0.2rem" }}>{inf.title}</h3>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.82rem", lineHeight: "1.5" }}>{inf.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engine Management Block */}
        <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", padding: "2.5rem", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.8rem", color: "#fff", textAlign: "center" }}>
            Advanced Engine Management
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {management.map((mng) => (
              <div key={mng.title}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.4rem" }}>{mng.title}</h3>
                <p style={{ color: "var(--text-soft)", fontSize: "0.85rem", lineHeight: "1.6" }}>{mng.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Software Suite */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
              Configuration & Monitoring Software
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: "1.7", marginBottom: "1.2rem" }}>
              We provide a cross-platform desktop suite for telemetry recording, parameter tweaking, engine diagnostics, and flight log retrieval.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <span style={{ fontSize: "0.78rem", background: "rgba(255,255,255,0.04)", padding: "0.3rem 0.6rem", borderRadius: "4px", color: "var(--text-muted)" }}>macOS</span>
              <span style={{ fontSize: "0.78rem", background: "rgba(255,255,255,0.04)", padding: "0.3rem 0.6rem", borderRadius: "4px", color: "var(--text-muted)" }}>Linux</span>
              <span style={{ fontSize: "0.78rem", background: "rgba(255,255,255,0.04)", padding: "0.3rem 0.6rem", borderRadius: "4px", color: "var(--text-muted)" }}>Windows</span>
            </div>
          </div>
          <div style={{ background: "rgba(242, 106, 33, 0.03)", border: "1px solid rgba(242, 106, 33, 0.15)", borderRadius: "6px", padding: "2rem", textAlign: "center" }}>
            <span style={{ fontSize: "2.5rem", color: "var(--accent)" }}>🛡️</span>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", margin: "1rem 0 0.5rem" }}>
              ITAR-Free Control Systems
            </h3>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Firmware, hardware, and design entirely developed in Europe, bypassing export restrictions.
            </p>
          </div>
        </div>

      </section>
      <SeoInternalLinks locale="en" />
    </SeoPageShell>
  );
}
