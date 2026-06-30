import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SeoInternalLinks, SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { primaryAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Servicios de Propulsión y Desarrollo UAV | JetsMunt",
  description:
    "Soluciones y servicios expertos de integración, electrónica de telemetría e ingeniería a medida para UAV y sistemas aeroespaciales de defensa.",
  path: "/servicios",
  keywords: ["servicios propulsión UAV", "integración turbina UAV", "ingeniería defensa aeroespacial"],
  locale: "es_ES",
  languages: primaryAlternates("services"),
});

export default function ServicesPage() {
  const serviceList = [
    {
      title: "Electrónica y Telemetría",
      slug: "electronica-telemetria",
      kicker: "Inteligencia de Control FADEC",
      desc: "Diseño e integración de módulos de control electrónico de motores (ECU), protocolos serie de piloto automático, CAN Bus, fibra óptica y registro a alta frecuencia en tarjetas SD.",
      image: "/media/services/Gemini_Generated_Image_knhy4pknhy4pknhy.png",
    },
    {
      title: "Integración en UAV",
      slug: "integracion-uav",
      kicker: "Ingeniería de Plataforma",
      desc: "Asistencia técnica y soluciones físicas de acoplamiento (líneas de combustible, alimentación, interfaces) para integrar turborreactores en drones tácticos y blancos aéreos.",
      image: "/media/services/Gemini_Generated_Image_xztybfxztybfxzty.png",
    },
    {
      title: "Ingeniería y Desarrollo",
      slug: "ingenieria-desarrollo",
      kicker: "Desarrollo a Medida OEM",
      desc: "Soporte completo desde la definición conceptual hasta la fabricación in-house de prototipos y la validación en vuelo para programas especiales de defensa y espacio.",
      image: "/media/services/Gemini_Generated_Image_saa7dvsaa7dvsaa7.png",
    },
  ];

  return (
    <SeoPageShell
      kicker="Servicios Especializados"
      title="Soporte y Desarrollo de Propulsión para UAV"
      description="Ofrecemos soluciones avanzadas de ingeniería aeroespacial que abarcan desde el desarrollo de firmware y telemetría de control hasta la asistencia técnica de integración en plataformas aéreas."
      image="/media/services/Gemini_Generated_Image_xztybfxztybfxzty.png"
      breadcrumbPath="/servicios"
      compact
    >
      <section className="section container">
        <div className="seo-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {serviceList.map((service) => (
            <article className="seo-product-card" key={service.slug} style={{ display: "flex", flexDirection: "column", height: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", overflow: "hidden" }}>
              <div className="seo-card-media" style={{ position: "relative", height: "200px", width: "100%" }}>
                <Image src={service.image} alt={service.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 980px) 100vw, 33vw" />
              </div>
              <div className="seo-card-body" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>{service.kicker}</span>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "0.8rem" }}>{service.title}</h2>
                <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: 1 }}>{service.desc}</p>
                
                <Link href={`/servicios/${service.slug}`} className="btn btn-ghost" style={{ textAlign: "center", width: "100%", padding: "0.6rem" }}>
                  Ver detalles del servicio
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SeoInternalLinks locale="es" />
    </SeoPageShell>
  );
}
