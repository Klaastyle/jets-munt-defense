import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../../components/SeoPage";
import { buildMetadata } from "../../../lib/metadata";
import { primaryAlternates } from "../../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "UAV Integration Services | JetsMunt",
  description:
    "Physical mount solutions, autopilot networks bus interfaces, and technical coupling support for target drones and tactical UAVs.",
  path: "/en/services/uav-integration",
  keywords: ["UAV integration", "engine mount drone", "autopilot telemetry bus", "fixed-wing propulsion"],
  locale: "en_US",
  languages: primaryAlternates("services-integration"),
});

export default function EnUavIntegrationPage() {
  const interfaces = [
    { name: "CAN Bus", desc: "SAE J1939 compatible bus for simplified communication inside complex avionics loops." },
    { name: "I2C Bus", desc: "Designed for seamless communication with mission payload sensors and peripheral diagnostics." },
    { name: "Serial Link", desc: "Configurable RS232, RS422, and RS485 serial ports for redundant autopilot interfaces." },
    { name: "PWM", desc: "Standard pulse-width modulation throttle input for legacy or analog backup interfaces." },
    { name: "SD Card", desc: "On-engine storage for retrieval of high-frequency logs and effortless firmware upgrades." },
  ];

  const applications = [
    { title: "Fixed Wing UAVs", desc: "Optimal aerodynamic integration in internal nacelles or external wings for long endurance flight." },
    { title: "Target Drones", desc: "High-G tolerant installation brackets built to withstand pneumatic and rocket launcher catapults." },
    { title: "Ground-Launched Systems", desc: "Integration in land-based launchers and cruise systems with rapid startup under 30 seconds." },
    { title: "VTOL / Hybrid UAVs", desc: "Vector control integration support for vertical takeoff transitioning to horizontal thrust." },
    { title: "Loitering Munitions", desc: "Ultralight, low-profile layouts optimized for high power-to-weight and single-use cost efficiency." },
    { title: "Special Mission Platforms", desc: "Engineered solutions tailored to operate in extreme weather, high altitude, or high humidity environments." },
  ];

  const benefits = [
    { title: "Reduced Integration Time", desc: "Streamlines installation via standardized interfaces and plug-and-play config software." },
    { title: "Optimized Performance", desc: "Maximizes thrust-to-weight ratio while maintaining low fuel consumption." },
    { title: "Mission Reliability", desc: "ECUs and components built and tested to meet critical aerospace and defense standards." },
    { title: "Cost Effective", desc: "Minimizes initial developer and tooling costs as well as overall maintenance cycles." },
    { title: "Global Support", desc: "On-site and remote engineering support throughout your prototype validation phases." },
  ];

  return (
    <SeoPageShell
      locale="en"
      kicker="Seamless Integration. Maximum Performance."
      title="UAV Integration Capabilities"
      description="JetsMunt engines are optimized from the ground up for quick platform integration, reducing wiring harnesses, structural weight, and developmental overhead."
      image="/media/services/Gemini_Generated_Image_xztybfxztybfxzty.png"
      breadcrumbPath="/en/services/uav-integration"
    >
      <section className="section container" style={{ paddingBottom: "3rem" }}>
        
        {/* Applications Grid */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff", textAlign: "center" }}>
            Engineered for Multiple Platforms
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {applications.map((app) => (
              <div key={app.title} style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.5rem" }}>{app.title}</h3>
                <p style={{ color: "var(--text-soft)", fontSize: "0.85rem", lineHeight: "1.6" }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Architecture */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", marginBottom: "4rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Typical Integration Architecture
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              Our architecture minimizes connection lines down to power supply and a data bus (CAN or RS485). The ECU controls fuel solenoid valves, high-voltage ignition systems, and brushless fuel pumps, separating propulsion loads from flight control hardware.
            </p>
            <div style={{ padding: "1.2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", fontSize: "0.82rem", color: "var(--text-soft)" }}>
              <strong>ECU Dedicated Actuators:</strong>
              <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem", display: "grid", gap: "0.3rem" }}>
                <li>• Intelligent Brushless Fuel Pump</li>
                <li>• Fast-Response Fuel Solenoid Valve</li>
                <li>• High-Power Glow Ignition System</li>
                <li>• Integrated Ambient Pressure & Temp Sensors</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.2rem", color: "#fff" }}>
              Flight Control Interfaces
            </h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {interfaces.map((inf) => (
                <div key={inf.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem" }}>
                  <strong style={{ color: "#fff", fontSize: "0.9rem", whiteSpace: "nowrap" }}>{inf.name}</strong>
                  <span style={{ color: "var(--text-soft)", fontSize: "0.85rem", textAlign: "right" }}>{inf.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff" }}>
            Key Program Benefits
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {benefits.map((b) => (
              <div key={b.title}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--accent-2)", marginBottom: "0.4rem", textTransform: "uppercase" }}>{b.title}</h4>
                <p style={{ color: "var(--text-soft)", fontSize: "0.82rem", lineHeight: "1.5" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
      <SeoInternalLinks locale="en" />
    </SeoPageShell>
  );
}
