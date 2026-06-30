"use client";
import { useEffect, useRef } from "react";

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0,
  style
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
