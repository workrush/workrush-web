import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Workrush",
    short_name: "Workrush",
    description: "Building Digital DNA at Scale",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0B9444",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
