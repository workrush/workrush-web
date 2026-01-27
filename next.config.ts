import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/workrush-web",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
