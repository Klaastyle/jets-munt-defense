import type { Metadata } from "next";
import { SeoPageShell } from "../../components/SeoPage";
import { buildMetadata } from "../../lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Política de Cookies | JetsMunt",
  description: "Información sobre el uso de cookies en nuestro sitio web.",
  path: "/politica-de-cookies",
  locale: "es_ES",
});

export default function CookiesPage() {
  return (
    <SeoPageShell
      kicker="Legal"
      title="Política de Cookies"
      description="Información detallada sobre qué son las cookies y cómo las utilizamos."
      breadcrumbPath="/politica-de-cookies"
      locale="es"
    >
      <section className="section container" style={{ paddingBottom: "4rem", color: "var(--text-soft)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p>
            JETS MUNT SL se reserva el derecho de utilizar cookies en la navegación del usuario por su website para facilitar la personalización y comodidad de la navegación.
          </p>
          <p>
            Siguiendo la política de protección de datos de la empresa, JETS MUNT SL informa que las cookies se asocian al usuario anónimo y a su ordenador, y no proporcionan por sí el nombre y apellidos del usuario.
          </p>
          <p>
            El usuario tiene la posibilidad de configurar su navegador de modo que se le informe de la recepción de cookies, pudiendo, si así lo desea, impedir que sean instaladas en su disco duro. No obstante, para el acceso a la website de JETS MUNT SL no será preceptiva la instalación de cookies.
          </p>

          <h2 style={{ color: "#fff", marginTop: "2rem" }}>Cookies Necesarias</h2>
          <p>
            Las cookies necesarias son absolutamente esenciales para que el sitio web funcione correctamente. Esta categoría solo incluye cookies que garantizan funcionalidades básicas y características de seguridad del sitio web. Estas cookies no almacenan ninguna información personal.
          </p>

          <h2 style={{ color: "#fff", marginTop: "2rem" }}>Cookies No Necesarias</h2>
          <p>
            Las cookies que pueden no ser particularmente necesarias para que el sitio web funcione y se utilizan específicamente para recopilar datos personales del usuario a través de análisis, anuncios y otros contenidos incrustados se denominan cookies no necesarias. Es obligatorio obtener el consentimiento del usuario antes de ejecutar estas cookies en su sitio web.
          </p>
        </div>
      </section>
    </SeoPageShell>
  );
}
