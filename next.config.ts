import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/en-gb",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
