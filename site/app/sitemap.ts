 
import { MetadataRoute } from 'next';
import {
  siteUrl,
  engines,
  proEngines,
  localizedSolutionPages,
  supportPages,
} from './lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 1. Home pages in all 3 languages
  const homeAlternates = {
    es: `${siteUrl}`,
    en: `${siteUrl}/en`,
    fr: `${siteUrl}/fr`,
  };

  const homeEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: { languages: homeAlternates },
    },
    {
      url: `${siteUrl}/en`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: { languages: homeAlternates },
    },
    {
      url: `${siteUrl}/fr`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: { languages: homeAlternates },
    },
  ];

  // 2. Primary / Core multi-language sections
  const primarySections = [
    { es: "/motores", en: "/en/engines", fr: "/fr/moteurs", priority: 0.9 },
    { es: "/accesorios", en: "/en/accessories", fr: "/fr/accessoires", priority: 0.8 },
    { es: "/distribuidores", en: "/en/distributors", fr: "/fr/distributeurs", priority: 0.85 },
    { es: "/servicio-tecnico", en: "/en/technical-service", fr: "/fr/service-technique", priority: 0.85 },
    { es: "/contacto", en: "/en/contact", fr: "/fr/contact", priority: 0.9 },
    { es: "/sobre-jetsmunt", en: "/en/about-jetsmunt", fr: "/fr/a-propos-jetsmunt", priority: 0.85 },
    { es: "/servicios", en: "/en/services", fr: "/fr/services", priority: 0.85 },
    { es: "/servicios/electronica-telemetria", en: "/en/services/electronics-telemetry", fr: "/fr/services/electronique-telemetrie", priority: 0.8 },
    { es: "/servicios/integracion-uav", en: "/en/services/uav-integration", fr: "/fr/services/integration-uav", priority: 0.85 },
    { es: "/servicios/ingenieria-desarrollo", en: "/en/services/engineering-development", fr: "/fr/services/ingenierie-developpement", priority: 0.8 },
  ];

  const primaryEntries: MetadataRoute.Sitemap = primarySections.flatMap((sec) => {
    const alternates = {
      es: `${siteUrl}${sec.es}`,
      en: `${siteUrl}${sec.en}`,
      fr: `${siteUrl}${sec.fr}`,
    };

    return [
      {
        url: `${siteUrl}${sec.es}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: sec.priority,
        alternates: { languages: alternates },
      },
      {
        url: `${siteUrl}${sec.en}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: sec.priority,
        alternates: { languages: alternates },
      },
      {
        url: `${siteUrl}${sec.fr}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: sec.priority,
        alternates: { languages: alternates },
      },
    ];
  });

  // 3. Solution pages (12 B2B solution landing pages across ES, EN, FR)
  const solutionEntries: MetadataRoute.Sitemap = localizedSolutionPages.flatMap((page) => {
    const alternates = {
      es: `${siteUrl}/${page.es.slug}`,
      en: `${siteUrl}/en/${page.en.slug}`,
      fr: `${siteUrl}/fr/${page.fr.slug}`,
    };

    return [
      {
        url: `${siteUrl}/${page.es.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        alternates: { languages: alternates },
      },
      {
        url: `${siteUrl}/en/${page.en.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        alternates: { languages: alternates },
      },
      {
        url: `${siteUrl}/fr/${page.fr.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        alternates: { languages: alternates },
      },
    ];
  });

  // 4. Regular product / engine catalog pages (9 engines across ES, EN, FR)
  const productEntries: MetadataRoute.Sitemap = engines.flatMap((engine) => {
    const alternates = {
      es: `${siteUrl}/products/${engine.slug}`,
      en: `${siteUrl}/en/products/${engine.slug}`,
      fr: `${siteUrl}/fr/produits/${engine.slug}`,
    };

    return [
      {
        url: `${siteUrl}/products/${engine.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
        alternates: { languages: alternates },
      },
      {
        url: `${siteUrl}/en/products/${engine.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
        alternates: { languages: alternates },
      },
      {
        url: `${siteUrl}/fr/produits/${engine.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
        alternates: { languages: alternates },
      },
    ];
  });

  // 5. PRO Series and engine detail pages
  const proSeriesEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/pro-series`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    ...proEngines.flatMap((engine) => {
      const alternates = {
        es: `${siteUrl}/motores/${engine.slug}`,
        en: `${siteUrl}/en/engines/${engine.slug}`,
        fr: `${siteUrl}/fr/moteurs/${engine.slug}`,
      };

      return [
        {
          url: `${siteUrl}/pro-series/${engine.slug}`,
          lastModified: now,
          changeFrequency: 'monthly' as const,
          priority: 0.85,
        },
        {
          url: `${siteUrl}/motores/${engine.slug}`,
          lastModified: now,
          changeFrequency: 'monthly' as const,
          priority: 0.85,
          alternates: { languages: alternates },
        },
        {
          url: `${siteUrl}/en/engines/${engine.slug}`,
          lastModified: now,
          changeFrequency: 'monthly' as const,
          priority: 0.85,
          alternates: { languages: alternates },
        },
        {
          url: `${siteUrl}/fr/moteurs/${engine.slug}`,
          lastModified: now,
          changeFrequency: 'monthly' as const,
          priority: 0.85,
          alternates: { languages: alternates },
        },
      ];
    }),
    {
      url: `${siteUrl}/motores/otros`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // 6. Support pages
  const supportEntries: MetadataRoute.Sitemap = supportPages.map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: page.slug === 'support' ? 0.8 : 0.7,
  }));

  // 7. Legal pages
  const legalEntries: MetadataRoute.Sitemap = [
    '/aviso-legal',
    '/politica-de-privacidad',
    '/politica-de-cookies',
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [
    ...homeEntries,
    ...primaryEntries,
    ...solutionEntries,
    ...productEntries,
    ...proSeriesEntries,
    ...supportEntries,
    ...legalEntries,
  ];
}
