import type { Metadata } from "next";
import { Lato, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { OrganizationSchema, WebSiteSchema } from "@/components/structured-data";

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
    default: "Workrush | Building Digital DNA at Scale",
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
    "AEO",
    "AI discoverability",
    "digital marketing",
    "SaaS development",
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
    title: "Workrush | Building Digital DNA at Scale",
    description:
      "From MVP to enterprise, we ship fast without compromising quality. Trusted by 150+ businesses across UK, Europe, and Asia.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "./og-image.svg",
        width: 1200,
        height: 630,
        alt: "Workrush - Building Digital DNA at Scale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workrush | Building Digital DNA at Scale",
    description: "From MVP to enterprise, we ship fast without compromising quality. 150+ projects delivered.",
    images: ["./og-image.svg"],
  },
  // app/icon.png and app/apple-icon.png are auto-served by Next.js at /en-gb/icon.png
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
        <WebSiteSchema />
      </head>
      <body
        className={`${lato.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GPLQ03V0ZH" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','G-GPLQ03V0ZH');`}
        </Script>
        <Script id="cal-embed" strategy="afterInteractive">
          {`(function(){
            var s=document.createElement('script');
            s.src='https://cal.eu/embed/embed.js';
            s.async=true;
            s.onload=function(){
              var t=setInterval(function(){
                if(window.Cal){
                  clearInterval(t);
                  window.Cal("init",{origin:"https://cal.eu"});
                  window.Cal("floatingButton",{calLink:"workrush",buttonText:"Book a Call",config:{layout:"month_view"}});
                  window.Cal("ui",{hideEventTypeDetails:false,layout:"month_view"});
                }
              },50);
            };
            document.head.appendChild(s);
          })();`}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","w3xuhxtyuz");`}
        </Script>
      </body>
    </html>
  );
}
