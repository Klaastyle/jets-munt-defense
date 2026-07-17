import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jets-munt.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.iubenda.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://cdn.iubenda.com https://api.iubenda.com; frame-src 'self' https://www.iubenda.com; object-src 'none'; base-uri 'self';",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    const legacyRootSeoRedirects = [
      ["compact-turbojet-engines", "motores-turbojet-compactos"],
      ["ecu-control-systems", "sistemas-control-ecu"],
      ["electronics-telemetry", "electronica-telemetria"],
      ["engineering-custom-development", "desarrollo-medida"],
      ["engineering-development", "desarrollo-ingenieria"],
      ["loitering-munition-propulsion", "propulsion-misiones-especiales"],
      ["manufacturing-in-spain", "fabricacion-espana"],
      ["propulsion-architecture", "arquitectura-propulsion"],
      ["target-drone-propulsion", "propulsion-target-drone"],
      ["testing-validation", "ensayos-validacion"],
      ["uav-integration", "integracion-uav"],
      ["uav-propulsion", "propulsion-uav"],
    ];

    return [
      ...legacyRootSeoRedirects.map(([source, destination]) => ({
        source: `/${source}`,
        destination: `/${destination}`,
        permanent: true,
      })),
      {
        source: "/products",
        destination: "/motores",
        permanent: true,
      },
      {
        source: "/engines",
        destination: "/motores",
        permanent: true,
      },
      {
        source: "/engines/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contacto",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
