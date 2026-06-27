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
  async redirects() {
    return [
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
