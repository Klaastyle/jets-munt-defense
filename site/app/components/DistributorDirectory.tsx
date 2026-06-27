"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { distributors } from "../lib/seo-data";

const regions = ["Todos", "Europe", "Americas", "Asia Pacific", "Middle East"];

const regionLabels: Record<string, string> = {
  Todos: "Todos",
  Europe: "Europa",
  Americas: "America",
  "Asia Pacific": "Asia Pacifico",
  "Middle East": "Oriente Medio",
};

export default function DistributorDirectory() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/fr") ? "fr" : "es";
  const copy = {
    es: {
      search: "Buscar distribuidor",
      placeholder: "Nombre, pais, ciudad o contacto",
      regionAria: "Filtrar distribuidores por region",
      serviceOnly: "Solo centros de servicio",
      countryAria: "Filtrar distribuidores por pais",
      countries: "Paises",
      regionCountries: "Paises de",
      allCountries: "Todos los paises",
      visible: "partners visibles",
      inCountry: "partners en",
      serviceBadge: "Venta y centro de servicio",
      dealerBadge: "Distribuidor autorizado",
      city: "Ciudad",
      postal: "Postal",
      website: "Web",
    },
    en: {
      search: "Search distributor",
      placeholder: "Name, country, city or contact",
      regionAria: "Filter distributors by region",
      serviceOnly: "Service centers only",
      countryAria: "Filter distributors by country",
      countries: "Countries",
      regionCountries: "Countries in",
      allCountries: "All countries",
      visible: "partners visible",
      inCountry: "partners in",
      serviceBadge: "Sales and service center",
      dealerBadge: "Authorized distributor",
      city: "City",
      postal: "Postal",
      website: "Website",
    },
    fr: {
      search: "Rechercher un distributeur",
      placeholder: "Nom, pays, ville ou contact",
      regionAria: "Filtrer les distributeurs par region",
      serviceOnly: "Centres de service uniquement",
      countryAria: "Filtrer les distributeurs par pays",
      countries: "Pays",
      regionCountries: "Pays en",
      allCountries: "Tous les pays",
      visible: "partenaires visibles",
      inCountry: "partenaires en",
      serviceBadge: "Vente et centre de service",
      dealerBadge: "Distributeur autorise",
      city: "Ville",
      postal: "Code postal",
      website: "Site web",
    },
  }[locale];
  const [region, setRegion] = useState("Todos");
  const [country, setCountry] = useState("Todos");
  const [query, setQuery] = useState("");
  const [serviceOnly, setServiceOnly] = useState(false);

  const countries = useMemo(() => {
    const selected = region === "Todos" ? distributors : distributors.filter((item) => item.region === region);
    return Array.from(new Set(selected.map((item) => item.country))).sort((a, b) => a.localeCompare(b));
  }, [region]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return distributors.filter((distributor) => {
      const matchesRegion = region === "Todos" || distributor.region === region;
      const matchesCountry = country === "Todos" || distributor.country === country;
      const matchesService = !serviceOnly || distributor.service;
      const searchable = [
        distributor.name,
        distributor.country,
        distributor.city,
        distributor.email,
        distributor.website,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      return matchesRegion && matchesCountry && matchesService && matchesQuery;
    });
  }, [country, query, region, serviceOnly]);

  const handleRegionChange = (nextRegion: string) => {
    setRegion(nextRegion);
    setCountry("Todos");
  };

  return (
    <section className="section container">
      <div className="directory-toolbar">
        <div className="directory-search">
          <label htmlFor="dealer-search">{copy.search}</label>
          <input
            id="dealer-search"
            type="search"
            value={query}
            placeholder={copy.placeholder}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="directory-regions" aria-label={copy.regionAria}>
          {regions.map((item) => (
            <button
              key={item}
              type="button"
              className={region === item ? "active" : ""}
              onClick={() => handleRegionChange(item)}
            >
              {regionLabels[item]}
            </button>
          ))}
        </div>
        <label className="directory-toggle">
          <input
            type="checkbox"
            checked={serviceOnly}
            onChange={(event) => setServiceOnly(event.target.checked)}
          />
          {copy.serviceOnly}
        </label>
      </div>

      <div className="country-filter" aria-label={copy.countryAria}>
        <span>{region === "Todos" ? copy.countries : `${copy.regionCountries} ${regionLabels[region]}`}</span>
        <button
          type="button"
          className={country === "Todos" ? "active" : ""}
          onClick={() => setCountry("Todos")}
        >
          {copy.allCountries}
        </button>
        {countries.map((item) => (
          <button
            key={item}
            type="button"
            className={country === item ? "active" : ""}
            onClick={() => setCountry(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="directory-summary">
        <strong>{filtered.length}</strong>
        <span>{country === "Todos" ? copy.visible : `${copy.inCountry} ${country}`}</span>
      </div>

      <div className="dealer-grid">
        {filtered.map((distributor) => (
          <article className="dealer-card" key={distributor.slug}>
            <div>
              <p>{distributor.country} / {distributor.region}</p>
              <h2>{distributor.name}</h2>
              <span className="dealer-badge">
                {distributor.service ? copy.serviceBadge : copy.dealerBadge}
              </span>
            </div>

            <dl className="dealer-details">
              {distributor.city && (
                <div>
                  <dt>{copy.city}</dt>
                  <dd>{distributor.city}</dd>
                </div>
              )}
              {distributor.postalCode && (
                <div>
                  <dt>{copy.postal}</dt>
                  <dd>{distributor.postalCode}</dd>
                </div>
              )}
              {distributor.phone && (
                <div>
                  <dt>Tel</dt>
                  <dd>{distributor.phone}</dd>
                </div>
              )}
              {distributor.email && (
                <div>
                  <dt>Email</dt>
                  <dd>{distributor.email}</dd>
                </div>
              )}
            </dl>

            <div className="dealer-actions">
              {distributor.email && <a href={`mailto:${distributor.email}`}>Email</a>}
              {distributor.website && (
                <a href={distributor.website} target="_blank" rel="noreferrer">
                  {copy.website}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
