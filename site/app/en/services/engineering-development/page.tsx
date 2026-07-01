import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../../../components/SeoPage";
import { buildMetadata } from "../../../lib/metadata";
import { primaryAlternates } from "../../../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Custom UAV Propulsion Engineering | JetsMunt",
  description:
    "Tailored micro-turbine designs, thrust optimization, environmental qualification, and OEM engineering assistance for defense programs.",
  path: "/en/services/engineering-development",
  keywords: ["custom turbine design", "aerospace engineering UAV", "environmental qualification test", "ITAR-free propulsion"],
  locale: "en_US",
  languages: primaryAlternates("services-development"),
});

export default function EnEngineeringDevelopmentPage() {
  const capabilities = [
    "Thrust Optimization",
    "Dimensional Adaptation",
    "ECU Customization",
    "Telemetry Integration",
    "Prototype Manufacturing",
    "Environmental Qualification",
    "Flight Test Support",
    "OEM Engineering Assistance",
    "Fuel System Validation",
    "Avionics Redundancy Tuning",
    "Integrated Nacelle Design",
  ];

  const processSteps = [
    { num: "01", name: "Requirements", desc: "Define flight envelopes, dimensional constraints, and target mission profiles." },
    { num: "02", name: "Concept & Design", desc: "Aerodynamic simulations, thermodynamics analysis, and 3D modeling." },
    { num: "03", name: "Detailed Engineering", desc: "Mechanical, electric routing, and custom ECU firmware programming." },
    { num: "04", name: "Prototype Fabrication", desc: "In-house CNC machining of impellers, turbine blades, and combustion chambers." },
    { num: "05", name: "Testing & Validation", desc: "Environmental testing (thermal, altitude chambers) and test bench runs." },
    { num: "06", name: "Flight Verification", desc: "Direct engineering support on-site for drone integration and test flights." },
  ];

  const areas = [
    { title: "Compact UAV Engines", desc: "Adaptation and enhancements of our standard propulsion platforms to meet tailored mission footprints." },
    { title: "Increased Thrust Platforms", desc: "Future turbine projects designed to yield higher thrust curves for heavy tactical UAVs." },
    { title: "Integrated Propulsion Systems", desc: "Turnkey propulsion pods enclosing the engine, ECU, plumbing, and interfaces in a unified kit." },
    { title: "Special Mission Configurations", desc: "Hardened propulsion packages engineered to tolerate high-G forces and reliable mid-air restarts." },
  ];

  return (
    <SeoPageShell
      locale="en"
      kicker="From concept definition to flight-ready propulsion systems."
      title="Engineering & Custom Development"
      description="JetsMunt partners with aerospace OEMs, research organizations, and defense agencies, supplying dedicated engineering support to adapt or develop customized turbojets."
      image="/media/services/Gemini_Generated_Image_knhy4pknhy4pknhy.png"
      breadcrumbPath="/en/services/engineering-development"
    >
      <section className="section container" style={{ paddingBottom: "3rem" }}>
        
        {/* Capabilities & Areas */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", marginBottom: "4rem" }}>
          
          {/* Areas of Development */}
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff" }}>
              Development Areas
            </h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {areas.map((area) => (
                <div key={area.title} style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", padding: "1.2rem" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.4rem" }}>{area.title}</h3>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.85rem", lineHeight: "1.6" }}>{area.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities List */}
          <div>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#fff" }}>
              Engineering Capabilities
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Our engineering team controls the full design loop, prototyping, and validation cycle of compact turbojets. We support clients with the following:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
              {capabilities.map((cap) => (
                <div key={cap} style={{ fontSize: "0.85rem", color: "var(--text-soft)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "var(--accent)" }}>✓</span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Development Cycle Process */}
        <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", padding: "2.5rem", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.5rem", color: "#fff", textAlign: "center" }}>
            The Development Process
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", textAlign: "center", marginBottom: "2.5rem" }}>
            A complete, integrated development cycle under one roof—from initial requirements to flight-proven solutions.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {processSteps.map((step) => (
              <div key={step.num} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "rgba(242, 106, 33, 0.2)", fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", lineHeight: 1 }}>{step.num}</span>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff" }}>{step.name}</h4>
                <p style={{ color: "var(--text-soft)", fontSize: "0.8rem", lineHeight: "1.5" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* European Supply Chain Info */}
        <div
          style={{
            background: "linear-gradient(180deg, rgba(242, 106, 33, 0.05) 0%, rgba(242, 106, 33, 0.01) 100%)",
            border: "1px solid rgba(242, 106, 33, 0.15)",
            borderRadius: "6px",
            padding: "2.5rem",
          }}
        >
          <div style={{ maxWidth: "800px" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--accent-2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Secure & Sovereign Supply Chains
            </span>
            <h2 style={{ fontFamily: "var(--font-archivo, 'Archivo', sans-serif)", fontSize: "1.8rem", fontWeight: 800, margin: "0.5rem 0 1rem", color: "#fff" }}>
              100% ITAR-Free European Manufacturing
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "0rem" }}>
              All customized programs and standard engine fabrications rely entirely on certified European suppliers. The package avoids any US ITAR-regulated technology, facilitating straightforward defense exports and providing maximum security and timeline predictability to our global clients.
            </p>
          </div>
        </div>

      </section>
      <SeoInternalLinks locale="en" />
    </SeoPageShell>
  );
}
