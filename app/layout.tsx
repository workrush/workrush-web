import type { Metadata } from "next";
import { Lato, Space_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { OrganizationSchema } from "@/components/structured-data";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Workrush | Build Digital Products That Scale",
    template: "%s | Workrush",
  },
  description: siteConfig.description,
  keywords: [
    "software development",
    "app development",
    "web development",
    "digital transformation",
    "UK tech company",
    "mobile app development",
    "cloud computing",
    "AI solutions",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Workrush | Build Digital Products That Scale",
    description:
      "From MVP to enterprise, we ship fast without compromising quality. Trusted by 50+ businesses across UK and Europe.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Workrush - Build Digital Products That Scale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workrush | Build Digital Products That Scale",
    description: "From MVP to enterprise, we ship fast without compromising quality.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${lato.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
