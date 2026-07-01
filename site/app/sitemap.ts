import { MetadataRoute } from 'next';
import { siteUrl, engines } from './lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/sobre-jetsmunt',
    '/servicio-tecnico',
    '/contacto',
    '/distribuidores',
    '/servicios/ingenieria-desarrollo',
    '/servicios/electronica-telemetria',
    '/servicios/integracion-uav',
    '/aviso-legal',
    '/politica-de-privacidad',
    '/politica-de-cookies'
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
    alternates: {
      languages: {
        'es': `${siteUrl}${route}`,
        'en': `${siteUrl}/en${route}`,
        'fr': `${siteUrl}/fr${route}`,
      },
    },
  }));

  const productRoutes: MetadataRoute.Sitemap = engines.map((engine) => ({
    url: `${siteUrl}/motores/${engine.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
    alternates: {
      languages: {
        'es': `${siteUrl}/motores/${engine.slug}`,
        'en': `${siteUrl}/en/engines/${engine.slug}`,
        'fr': `${siteUrl}/fr/moteurs/${engine.slug}`,
      },
    },
  }));

  return [...routes, ...productRoutes];
}
