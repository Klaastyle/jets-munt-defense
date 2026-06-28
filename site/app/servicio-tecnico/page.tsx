import type { Metadata } from "next";
import { SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { primaryAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Servicio Técnico JetsMunt | Solicitud de Servicio y Mantenimiento",
  description:
    "Servicio Técnico JetsMunt para motores turbojet, accesorios, ECU, telemetría, mantenimiento y soporte de validación.",
  path: "/servicio-tecnico",
  image: "/media/capabilities/testing-validation.png",
  keywords: ["Servicio Técnico JetsMunt", "mantenimiento JetsMunt", "servicio turbojet"],
  locale: "es_ES",
  languages: primaryAlternates("service"),
});

export default function ServicioTecnicoPage() {
  return (
    <SeoPageShell
      kicker="Servicio Técnico"
      title="Soporte técnico para sistemas de propulsión JetsMunt."
      description="Comparte el modelo de motor, historial de uso, configuración de accesorios y comportamiento actual para que el equipo técnico pueda dirigir la solicitud correctamente."
      image="/media/capabilities/testing-validation.png"
      breadcrumbPath="/servicio-tecnico"
      compact
    >
      <section className="section container seo-contact-grid">
        <div className="seo-copy-block">
          <h2>Antes de enviar la solicitud</h2>
          <ul>
            <li>Modelo de motor, referencia de serie y horas de uso si están disponibles.</li>
            <li>ECU, registros de telemetría, sistema de combustible y contexto de instalación.</li>
            <li>Necesidad de mantenimiento, inspección, reparación o validación.</li>
            <li>Distribuidor o centro de servicio preferido si ya se conoce.</li>
          </ul>
        </div>
        <form className="cta-fields seo-form">
          <input type="text" className="cta-field" placeholder="Modelo de motor" />
          <input type="text" className="cta-field" placeholder="Horas de uso" />
          <input type="text" className="cta-field" placeholder="Resumen de la incidencia" />
          <input type="text" className="cta-field" placeholder="Email de contacto" />
          <button className="btn btn-primary cta-submit" type="button">Enviar solicitud</button>
        </form>
      </section>
    </SeoPageShell>
  );
}

