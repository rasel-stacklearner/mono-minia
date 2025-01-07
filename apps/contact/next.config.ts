import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@repo/ui"],

  basePath: "/contact",
  assetPrefix: "/contact",
};

export default nextConfig;
