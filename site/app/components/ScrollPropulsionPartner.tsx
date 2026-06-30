"use client";

import { usePathname } from "next/navigation";

const stepsData = {
  es: [
    {
      index: "01",
      title: "DISEÑO DE TURBINA",
      text: "Diseño aerodinámico, análisis termodinámico y desarrollo mecánico in-house optimizado para aplicaciones UAV.",
      bullets: ["Optimización de rendimiento", "Ingeniería aeroespacial"],
    },
    {
      index: "02",
      title: "DESARROLLO DE ECU",
      text: "Unidades de control electrónico propias desarrolladas in-house para un control, monitoreo y protección activos del motor.",
      bullets: ["Hardware de control propietario", "Monitoreo y protección activos"],
    },
    {
      index: "03",
      title: "SOFTWARE EMBEBIDO",
      text: "Algoritmos de control en tiempo real, diagnósticos integrados y optimización del rendimiento adaptados a cada misión.",
      bullets: ["Algoritmos en tiempo real", "Optimización de misión"],
    },
    {
      index: "04",
      title: "SISTEMAS DE TELEMETRÍA",
      text: "Monitoreo del motor, adquisición de datos de alta frecuencia e integración de telemetría de misión para conciencia situacional.",
      bullets: ["Fusión de sensores Kalman", "Adquisición a alta frecuencia"],
    },
    {
      index: "05",
      title: "INTEGRACIÓN EN UAV",
      text: "Soporte de integración de propulsión para fabricantes (OEMs), organizaciones de investigación y programas aeroespaciales.",
      bullets: ["Interfaces flexibles y rápidas", "Soluciones de instalación y combustible"],
    },
    {
      index: "06",
      title: "FABRICACIÓN DE PRECISIÓN",
      text: "Fabricación de componentes críticos y montaje final en nuestras instalaciones de España bajo un estricto control de calidad.",
      bullets: ["Instalaciones en España", "Certificación y control estricto"],
    },
  ],
  en: [
    {
      index: "01",
      title: "TURBINE DESIGN",
      text: "In-house aerodynamic design, thermodynamic analysis, and mechanical development optimized for UAV applications.",
      bullets: ["Performance optimization", "Aerospace engineering"],
    },
    {
      index: "02",
      title: "ECU DEVELOPMENT",
      text: "Proprietary electronic control units developed in-house for precise engine control, monitoring, and active protection.",
      bullets: ["Proprietary control hardware", "Active protection logic"],
    },
    {
      index: "03",
      title: "EMBEDDED SOFTWARE",
      text: "Real-time control algorithms, diagnostics, and performance optimization tailored to specific mission requirements.",
      bullets: ["Real-time algorithms", "Mission customization"],
    },
    {
      index: "04",
      title: "TELEMETRY SYSTEMS",
      text: "Engine monitoring, high-frequency data acquisition, and mission telemetry integration for real-time situational awareness.",
      bullets: ["Kalman filter processing", "High-frequency logging"],
    },
    {
      index: "05",
      title: "UAV INTEGRATION",
      text: "Propulsion integration support for OEMs, research organizations, and aerospace programs with flexible solutions.",
      bullets: ["Flexible fuel & control lines", "Rapid bench validation"],
    },
    {
      index: "06",
      title: "PRECISION MANUFACTURE",
      text: "Precision manufacturing and assembly of critical components in Spain under strict quality control standards.",
      bullets: ["Made in Spain", "Strict quality control"],
    },
  ],
  fr: [
    {
      index: "01",
      title: "CONCEPTION DE TURBINES",
      text: "Conception aérodynamique, analyse thermodynamique et développement mécanique interne optimisés pour les applications UAV.",
      bullets: ["Optimisation des performances", "Ingénierie aérospatiale"],
    },
    {
      index: "02",
      title: "DÉVELOPPEMENT D'ECU",
      text: "Unités de contrôle électronique exclusives développées en interne pour un contrôle, un suivi et une protection précis.",
      bullets: ["Matériel de contrôle propriétaire", "Protection active du moteur"],
    },
    {
      index: "03",
      title: "LOGICIEL EMBARQUÉ",
      text: "Algorithmes de contrôle en temps réel, diagnostics et optimisation des performances adaptés aux exigences de chaque mission.",
      bullets: ["Algorithmes temps réel", "Optimisation de mission"],
    },
    {
      index: "04",
      title: "SYSTÈMES DE TÉLÉMÉTRIE",
      text: "Surveillance moteur, acquisition de données haute fréquence et intégration de la télémétrie de mission.",
      bullets: ["Filtrage Kalman", "Acquisition haute fréquence"],
    },
    {
      index: "05",
      title: "INTÉGRATION UAV",
      text: "Support d'intégration de propulsion pour les OEM, les organismes de recherche et les programmes aérospatiaux.",
      bullets: ["Lignes carburant & contrôle", "Validation rapide sur banc"],
    },
    {
      index: "06",
      title: "FABRICACIÓN DE PRECISIÓN",
      text: "Fabrication de composants critiques et assemblage final dans nos installations en Espagne sous contrôle qualité strict.",
      bullets: ["Fabriqué en Espagne", "Contrôle qualité strict"],
    },
  ],
};

const headingData = {
  es: { label: "Competencias Clave", title: "Capacidades integradas in-house." },
  en: { label: "Core Competencies", title: "Complete in-house capabilities." },
  fr: { label: "Compétences Clés", title: "Capacités internes complètes." },
};

export default function ScrollPropulsionPartner() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/fr") ? "fr" : "es";
  const steps = stepsData[locale];
  const heading = headingData[locale];

  return (
    <section className="partner-section section" id="partner">
      <div className="container">
        <div className="partner-heading-center">
          <p className="section-label">{heading.label}</p>
          <h2 className="heading-lg" style={{ maxWidth: "none", marginBottom: "3rem" }}>{heading.title}</h2>
        </div>

        <div className="partner-grid-2col">
          {steps.map((step) => (
            <article className="partner-card-premium" key={step.title}>
              <div className="partner-card-header">
                <span className="partner-card-number">{step.index}</span>
                <h3 className="partner-card-title">{step.title}</h3>
              </div>
              <p className="partner-card-desc">{step.text}</p>
              <div className="partner-card-bullets">
                {step.bullets.map((bullet) => (
                  <span className="partner-card-bullet-tag" key={bullet}>
                    <span className="bullet-dot"></span>
                    {bullet}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
