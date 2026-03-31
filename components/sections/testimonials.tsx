"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";
import { Button } from "@/components/ui/button";

const basePath = "";

interface Client {
  name: string;
  logo?: string;
  url?: string;
}

const clients: Client[] = [
  { name: "Footbus", logo: `${basePath}/images/footbus.png`, url: "https://footbus.com" },
  { name: "Papa Johns", logo: `${basePath}/images/papa-johns.svg`, url: "https://papajohns.co.uk" },
  { name: "LiveHappy", logo: `${basePath}/images/live-happy.png`, url: "https://live-happy.app/" },
  { name: "Ministry of Defence", logo: `${basePath}/images/mod.png`, url: "https://riflesgym.co.uk" },
  { name: "DeliverYou", logo: `${basePath}/images/deliveryou.png`, url: "https://deliveryou.je" },
  { name: "SFS Group", logo: `${basePath}/images/sfs.svg`, url: "https://sfs.com" },
  { name: "G10 Assist", logo: `${basePath}/images/g10-buddy.png`, url: "https://g10assist.com" },
  { name: "DroneOn", logo: `${basePath}/images/droneon.png`, url: "https://drone-on.uk" },
  { name: "Strength Factory", logo: `${basePath}/images/strength-factory.png`, url: "https://strengthfactory.co.uk" },
  { name: "CeloApps", logo: `${basePath}/images/celoapps.svg`, url: "https://celoapps.com" },
  { name: "Reman UK", logo: `${basePath}/images/reman-uk.png` },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Terminal-style border */}
        <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
          {/* Fading bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          {/* Corner markers */}
          <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
          <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>

          <FadeIn className="mb-12 md:mb-16">
            <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
              {"// Clients"}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Companies We&apos;ve <span className="text-primary">Worked With</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From startups to global brands, we&apos;ve delivered 150+ projects across industries.
            </p>
          </FadeIn>

          {/* Client Logos Grid */}
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {clients.map((client) => {
              const card = (
                <div className="group relative flex items-center justify-center h-36 px-6 py-5 bg-card/50 border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
                  {client.logo ? (
                    <div className="relative w-full h-16">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold text-lg font-mono">
                          {client.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {client.name}
                      </span>
                    </div>
                  )}
                </div>
              );

              return (
                <StaggerItem key={client.name}>
                  {client.url ? (
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* CTA */}
          <FadeIn delay={0.3} className="mt-12 md:mt-16 text-center">
            <p className="font-mono text-xs text-primary/70 uppercase tracking-wider mb-3">{"// Your Turn"}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Your brand could be <span className="text-primary">next</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <a href="https://cal.eu/workrush" target="_blank" rel="noopener noreferrer">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Book a Meeting
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">
                  See Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
