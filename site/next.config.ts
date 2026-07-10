import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jets-munt.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
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
