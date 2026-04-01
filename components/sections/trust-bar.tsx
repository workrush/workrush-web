"use client";

import Image from "next/image";
import { FadeIn } from "@/components/effects/motion";

const basePath = "";

interface Client {
  name: string;
  logo?: string;
}

const clients: Client[] = [
  { name: "Footbus", logo: `${basePath}/images/footbus.png` },
  { name: "Papa Johns", logo: `${basePath}/images/papa-johns.svg` },
  { name: "LiveHappy", logo: `${basePath}/images/live-happy.png` },
  { name: "Ministry of Defence", logo: `${basePath}/images/mod.png` },
  { name: "DeliverYou", logo: `${basePath}/images/deliveryou.png` },
  { name: "SFS Group", logo: `${basePath}/images/sfs.svg` },
  { name: "G10 Assist", logo: `${basePath}/images/g10-buddy.png` },
  { name: "DroneOn", logo: `${basePath}/images/droneon.png` },
  { name: "Strength Factory", logo: `${basePath}/images/strength-factory.png` },
  { name: "CeloApps", logo: `${basePath}/images/celoapps.svg` },
  { name: "Reman UK", logo: `${basePath}/images/reman-uk.png` },
];

function ClientItem({ client, suffix }: { client: Client; suffix?: string }) {
  if (client.logo) {
    return (
      <div
        key={`${client.name}${suffix || ""}`}
        className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
      >
        <div className="relative h-16 w-48">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain"
          />
        </div>
      </div>
    );
  }
  return (
    <div
      key={`${client.name}${suffix || ""}`}
      className="flex items-center justify-center h-12 px-4 opacity-60 hover:opacity-100 transition-all duration-300"
    >
      <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
        {client.name}
      </span>
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="container mb-8">
        <FadeIn>
          <p className="text-center text-sm font-mono text-primary uppercase tracking-wider">
            {"// Trusted by innovative companies"}
          </p>
        </FadeIn>
      </div>

      {/* Scrolling logos */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[0, 1, 2].map((setIndex) => (
            <div key={setIndex} className="flex items-center gap-12 px-6 shrink-0">
              {clients.map((client) => (
                <ClientItem
                  key={`${client.name}-${setIndex}`}
                  client={client}
                  suffix={setIndex > 0 ? `-dup${setIndex}` : undefined}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
