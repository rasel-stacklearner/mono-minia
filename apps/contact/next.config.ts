import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@repo/ui"],

  basePath: "",
  assetPrefix: "/contact",
};

export default nextConfig;
