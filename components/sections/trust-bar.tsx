"use client";

import Image from "next/image";
import { FadeIn } from "@/components/effects/motion";

const clients = [
  { name: "G10 Assist", logo: "/images/g10-client.png" },
  { name: "Footbus", logo: "/images/footbus-client.png" },
  { name: "Reman UK", logo: "/images/reman-uk-client.png" },
  { name: "LiveHappy", logo: "/images/live-happy-client.png" },
  { name: "Ministry of Defence", logo: "/images/mod-client.png" },
];

export function TrustBar() {
  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="container mb-8">
        <FadeIn>
          <p className="text-center text-sm text-muted-foreground uppercase tracking-wider">
            Trusted by innovative companies
          </p>
        </FadeIn>
      </div>

      {/* Scrolling logos */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {/* First set */}
          <div className="flex items-center gap-12 px-6 shrink-0">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center h-12 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={48}
                  className="object-contain h-full w-auto"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-12 px-6 shrink-0">
            {clients.map((client) => (
              <div
                key={`${client.name}-dup`}
                className="flex items-center justify-center h-12 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={48}
                  className="object-contain h-full w-auto"
                />
              </div>
            ))}
          </div>
          {/* Third set for wider screens */}
          <div className="flex items-center gap-12 px-6 shrink-0">
            {clients.map((client) => (
              <div
                key={`${client.name}-dup2`}
                className="flex items-center justify-center h-12 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={48}
                  className="object-contain h-full w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
