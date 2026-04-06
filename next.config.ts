import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/en-gb",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/en-gb",
  },
};

export default nextConfig;
