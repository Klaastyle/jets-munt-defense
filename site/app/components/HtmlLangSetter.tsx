"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HtmlLangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/en")
      ? "en"
      : pathname.startsWith("/fr")
        ? "fr"
        : "es";
  }, [pathname]);

  return null;
}
