import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@repo/ui"],

  basePath: "/contact",
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "http://localhost:3001",
  //     },
  //   ];
  // },
};

export default nextConfig;
