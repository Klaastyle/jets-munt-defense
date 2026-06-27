"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const architectureItems = [
  {
    title: "Compact turbojet core",
    text: "A high-density turbine package for compact UAV airframes.",
    img: "/media/photos/Gemini_Generated_Image_8bxtuz8bxtuz8bxt.png",
  },
  {
    title: "ECU, sensors and data logging",
    text: "Control, protection and telemetry are presented as part of the same propulsion architecture.",
    img: "/media/capabilities/electronics-telemetry.png",
  },
  {
    title: "Platform integration support",
    text: "Installation constraints, test requirements and program data shape the final propulsion route.",
    img: "/media/capabilities/uav-integration.png",
  },
];

export default function ArchitectureReveal() {
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
          <p className="section-label">Propulsion architecture</p>
          <h2 className="heading-lg">The engine is only one part of the mission system.</h2>

          <div className="architecture-steps">
            {architectureItems.map((item, index) => (
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
          {architectureItems.map((item, index) => (
            <Image
              key={item.img}
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 980px) 100vw, 52vw"
              className={active === index ? "active" : ""}
            />
          ))}
          <div className="architecture-image-caption">{architectureItems[active].title}</div>
        </div>
      </div>
    </section>
  );
}
