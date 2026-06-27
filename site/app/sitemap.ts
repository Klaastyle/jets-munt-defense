import type { MetadataRoute } from "next";
import { allSeoRoutes, siteUrl } from "./lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allSeoRoutes.map((route) => ({
    url: route ? `${siteUrl}/${route}` : siteUrl,
    lastModified: now,
    changeFrequency: route.includes("/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "motores" ? 0.9 : 0.72,
  }));
}
