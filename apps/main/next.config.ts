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
    // console.log("APP_URL 😀", process.env.APP_URL);
    return [
      {
        source: "/contact/:path*",
        // destination: `http://localhost:3000/:path*`,
        destination: `https://mono-minia-psi.vercel.app/:path*`,
      },
      {
        source: "/about/:path*",
        // destination: `http://localhost:3002/:path*`,
        destination: `https://mono-minia-vert.vercel.app/:path*`,
      },

      {
        source: "/contact",
        // destination: `http://localhost:3000/:path*`,
        destination: `https://mono-minia-psi.vercel.app`,
      },
    ];
  },
};

export default nextConfig;
