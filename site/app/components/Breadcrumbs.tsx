import Link from "next/link";
import { siteUrl } from "../lib/seo-data";

const labels: Record<string, Record<string, string>> = {
  es: {
    home: "Inicio",
    motores: "Motores",
    products: "Motores",
    engines: "Motores",
    accesorios: "Accesorios",
    distribuidores: "Distribuidores",
    "servicio-tecnico": "Servicio tecnico",
    contacto: "Contacto",
    support: "Soporte",
    "pro-series": "Serie PRO",
  },
  en: {
    home: "Home",
    engines: "Engines",
    products: "Engines",
    accessories: "Accessories",
    distributors: "Distributors",
    "technical-service": "Technical service",
    contact: "Contact",
    support: "Support",
  },
  fr: {
    home: "Accueil",
    moteurs: "Moteurs",
    produits: "Moteurs",
    accessoires: "Accessoires",
    distributeurs: "Distributeurs",
    "service-technique": "Service technique",
    contact: "Contact",
    support: "Support",
  },
};

function titleize(segment: string) {
  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getLocale(pathname: string): "es" | "en" | "fr" {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  return "es";
}

export default function Breadcrumbs({ pathname }: { pathname: string }) {
  const locale = getLocale(pathname);
  const homeHref = locale === "en" ? "/en" : locale === "fr" ? "/fr" : "/";
  const rawSegments = pathname.split("/").filter(Boolean);
  const segments = rawSegments[0] === "en" || rawSegments[0] === "fr" ? rawSegments.slice(1) : rawSegments;

  if (segments.length === 0) return null;

  const crumbs = [
    { label: labels[locale].home, href: homeHref },
    ...segments.map((segment, index) => {
      const hrefParts = rawSegments.slice(0, rawSegments.length - segments.length + index + 1);
      return {
        label: labels[locale][segment] ?? titleize(segment),
        href: `/${hrefParts.join("/")}`,
      };
    }),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${siteUrl}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  return (
    <div className="breadcrumb-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="breadcrumbs container" aria-label="Breadcrumb">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <span key={`${crumb.href}-${index}`} className={isLast ? "active" : undefined}>
              {isLast ? (
                crumb.label
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
