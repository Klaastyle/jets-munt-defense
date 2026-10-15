"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function GlobePulse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    width = canvas.offsetWidth || 380;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      mapBaseBrightness: 0.04,
      baseColor: [0.8, 0.8, 0.8], // Bright luminous dots for continents so they stand out clearly
      markerColor: [1.0, 0.45, 0.15], // Neon JetsMunt Orange (#f26a21)
      glowColor: [1.0, 0.45, 0.15], // Bright glowing orange atmosphere rim
      opacity: 1,
      markers: [
        // Spain (Headquarters - Arenys de Munt, Barcelona)
        { location: [41.61, 2.54], size: 0.1 },
        // Europe (UK, Germany, France, Italy, Austria, Czechia)
        { location: [51.5, -0.12], size: 0.06 },
        { location: [51.16, 10.45], size: 0.06 },
        { location: [48.85, 2.35], size: 0.06 },
        { location: [41.9, 12.5], size: 0.05 },
        { location: [48.2, 16.37], size: 0.05 },
        { location: [50.07, 14.43], size: 0.05 },
        // Americas (USA, Canada, Colombia, Argentina)
        { location: [33.44, -112.07], size: 0.07 },
        { location: [43.65, -79.38], size: 0.06 },
        { location: [6.24, -75.58], size: 0.05 },
        { location: [-34.6, -58.38], size: 0.05 },
        // Middle East & Asia-Pacific (UAE, Israel, China, Japan, Korea, Australia)
        { location: [25.2, 55.27], size: 0.07 },
        { location: [32.08, 34.78], size: 0.06 },
        { location: [31.23, 121.47], size: 0.06 },
        { location: [34.69, 135.5], size: 0.06 },
        { location: [36.78, 127.0], size: 0.05 },
        { location: [-33.86, 151.2], size: 0.07 },
      ],
      arcs: [
        // Arcs connecting HQ in Spain to global defense & distributor partners
        { from: [41.61, 2.54], to: [51.5, -0.12] },
        { from: [41.61, 2.54], to: [51.16, 10.45] },
        { from: [41.61, 2.54], to: [33.44, -112.07] },
        { from: [41.61, 2.54], to: [25.2, 55.27] },
        { from: [41.61, 2.54], to: [31.23, 121.47] },
      ],
      arcColor: [1.0, 0.55, 0.2],
      arcWidth: 0.8,
      arcHeight: 0.3,
    });

    const onResize = () => {
      if (canvas) {
        const newWidth = canvas.offsetWidth || 380;
        if (newWidth !== width) {
          width = newWidth;
          globe.update({
            width: width * 2,
            height: width * 2,
          });
        }
      }
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      if (!pointerInteracting.current) {
        phi += 0.005;
      }
      globe.update({
        phi: phi + pointerInteractionMovement.current,
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="cobe-globe-wrapper"
      style={{
        position: "relative",
        width: "100%",
        height: "380px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Radial orange & gold backglow */}
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(242,106,33,0.32) 0%, rgba(242,106,33,0.08) 52%, transparent 75%)",
          filter: "blur(36px)",
          pointerEvents: "none",
        }}
      />
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        style={{
          width: "100%",
          maxWidth: "380px",
          aspectRatio: "1",
          margin: "0 auto",
          display: "block",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 1,
        }}
      />
    </div>
  );
}
