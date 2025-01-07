import type { NextConfig } from "next";

console.log("APP_URL 😀", process.env.APP_URL);

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
        // destination: `http://localhost:3000/contact/:path*`,
        destination: `${process.env.APP_URL}/contact/:path*`,
      },
    ];
  },
};

export default nextConfig;
