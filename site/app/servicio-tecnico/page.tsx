import type { Metadata } from "next";
import { SeoPageShell } from "../components/SeoPage";
import { buildMetadata } from "../lib/metadata";
import { primaryAlternates } from "../lib/seo-data";

export const metadata: Metadata = buildMetadata({
  title: "Servicio Tecnico JetsMunt | Solicitud de Servicio y Mantenimiento",
  description:
    "Servicio tecnico JetsMunt para motores turbojet, accesorios, ECU, telemetria, mantenimiento y soporte de validacion.",
  path: "/servicio-tecnico",
  image: "/media/capabilities/testing-validation.png",
  keywords: ["servicio tecnico JetsMunt", "mantenimiento JetsMunt", "servicio turbojet"],
  locale: "es_ES",
  languages: primaryAlternates("service"),
});

export default function ServicioTecnicoPage() {
  return (
    <SeoPageShell
      kicker="Servicio Tecnico"
      title="Soporte tecnico para sistemas de propulsion JetsMunt."
      description="Comparte el modelo de motor, historial de uso, configuracion de accesorios y comportamiento actual para que el equipo tecnico pueda dirigir la solicitud correctamente."
      image="/media/capabilities/testing-validation.png"
      breadcrumbPath="/servicio-tecnico"
      compact
    >
      <section className="section container seo-contact-grid">
        <div className="seo-copy-block">
          <h2>Antes de enviar la solicitud</h2>
          <ul>
            <li>Modelo de motor, referencia de serie y horas de uso si estan disponibles.</li>
            <li>ECU, registros de telemetria, sistema de combustible y contexto de instalacion.</li>
            <li>Necesidad de mantenimiento, inspeccion, reparacion o validacion.</li>
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
