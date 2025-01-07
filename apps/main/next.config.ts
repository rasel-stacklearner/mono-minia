import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: true,
    dynamicIO: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/contact/:path*",
        // destination: `${process.env.APP_URL!}/contact/:path*`,
        destination: "https://mono-minia-psi.vercel.app/contact",
      },
    ];
  },
};

export default nextConfig;
