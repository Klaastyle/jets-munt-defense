 
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const architectureData = {
  es: {
    label: "Arquitectura de propulsión",
    heading: "El motor es solo una parte del sistema de misión.",
    items: [
      {
        title: "Motor turbojet compacto",
        text: "Un conjunto de turbina de alta densidad para plataformas UAV compactas.",
        img: "/media/photos/jetsmunt-galeria-motores-23.png",
      },
      {
        title: "ECU, sensores y registro de datos",
        text: "El control, la protección y la telemetría forman parte de la misma arquitectura de propulsión.",
        img: "/media/photos/jetsmunt-galeria-motores-30.png",
      },
      {
        title: "Soporte de integración en plataforma",
        text: "Las restricciones de instalación, los requisitos de prueba y los datos del programa definen la ruta de propulsión final.",
        img: "/media/photos/jetsmunt-galeria-motores-27.png",
      },
    ],
  },
  en: {
    label: "Propulsion architecture",
    heading: "The engine is only one part of the mission system.",
    items: [
      {
        title: "Compact turbojet core",
        text: "A high-density turbine package for compact UAV airframes.",
        img: "/media/photos/jetsmunt-galeria-motores-23.png",
      },
      {
        title: "ECU, sensors and data logging",
        text: "Control, protection and telemetry are presented as part of the same propulsion architecture.",
        img: "/media/photos/jetsmunt-galeria-motores-30.png",
      },
      {
        title: "Platform integration support",
        text: "Installation constraints, test requirements and program data shape the final propulsion route.",
        img: "/media/photos/jetsmunt-galeria-motores-27.png",
      },
    ],
  },
  fr: {
    label: "Architecture de propulsion",
    heading: "Le moteur n'est qu'une partie du système de mission.",
    items: [
      {
        title: "Moteur turbojet compact",
        text: "Un ensemble turbine haute densité pour les plateformes UAV compactes.",
        img: "/media/photos/jetsmunt-galeria-motores-23.png",
      },
      {
        title: "ECU, capteurs et enregistrement de données",
        text: "Le contrôle, la protection et la télémétrie font partie de la même architecture de propulsion.",
        img: "/media/photos/jetsmunt-galeria-motores-30.png",
      },
      {
        title: "Support d'intégration plateforme",
        text: "Les contraintes d'installation, les exigences de test et les données du programme définissent la route de propulsion finale.",
        img: "/media/photos/jetsmunt-galeria-motores-27.png",
      },
    ],
  },
};

export default function ArchitectureReveal() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/fr") ? "fr" : "es";
  const { label, heading, items } = architectureData[locale];

  const itemRefs = useRef<HTMLElement[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.arch || 0));
          }
        });
      },
      { threshold: 0.62, rootMargin: "-10% 0px -20% 0px" }
    );

    itemRefs.current.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section architecture-section" id="architecture">
      <div className="container architecture-reveal-grid">
        <div className="architecture-copy">
          <p className="section-label">{label}</p>
          <h2 className="heading-lg">{heading}</h2>

          <div className="architecture-steps">
            {items.map((item, index) => (
              <article
                className={`architecture-step ${active === index ? "active" : ""}`}
                data-arch={index}
                key={item.title}
                ref={(node) => {
                  if (node) itemRefs.current[index] = node;
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="architecture-sticky-media">
          {items.map((item, index) => (
            <Image
              key={item.img}
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 980px) 100vw, 52vw"
              className={active === index ? "active" : ""}
            />
          ))}
          <div className="architecture-image-caption">{items[active].title}</div>
        </div>
      </div>
    </section>
  );
}
