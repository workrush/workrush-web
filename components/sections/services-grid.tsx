"use client";

import Link from "next/link";
import {
  Smartphone,
  Globe,
  Palette,
  Gamepad2,
  TrendingUp,
  Blocks,
  ArrowUpRight,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

const services = [
  {
    title: "App Development",
    description: "Native and cross-platform mobile apps for iOS and Android. From concept to App Store.",
    icon: Smartphone,
    href: "/services/app-development",
    tags: ["iOS", "Android", "Flutter", "React Native"],
    highlight: true,
  },
  {
    title: "Web Development",
    description: "Scalable web applications with modern frameworks. React, Next.js, Node.js and more.",
    icon: Globe,
    href: "/services/web-development",
    tags: ["React", "Next.js", "Node.js", "APIs"],
    highlight: true,
  },
  {
    title: "Website Designing",
    description: "Stunning UI/UX designs that convert. Figma prototypes to production-ready designs.",
    icon: Palette,
    href: "/services/website-designing",
    tags: ["UI/UX", "Figma", "Responsive"],
    highlight: false,
  },
  {
    title: "Game Development",
    description: "Engaging games for mobile, desktop, and web. Unity, Unreal, and custom engines.",
    icon: Gamepad2,
    href: "/services/game-development",
    tags: ["Unity", "Unreal", "Mobile"],
    highlight: false,
  },
  {
    title: "Digital Marketing",
    description: "SEO, PPC, social media, and content marketing to grow your online presence.",
    icon: TrendingUp,
    href: "/services/digital-marketing",
    tags: ["SEO", "PPC", "Social Media"],
    highlight: false,
  },
  {
    title: "Web3 Development",
    description: "Blockchain, smart contracts, DeFi, and NFT solutions for the decentralized web.",
    icon: Blocks,
    href: "/services/web3-development",
    tags: ["Blockchain", "Smart Contracts", "DeFi"],
    highlight: false,
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">

      <div className="container relative">
        {/* Terminal-style border */}
        <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
          {/* Fading bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          {/* Corner markers */}
          <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
          <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>

          <FadeIn className="mb-12 md:mb-16">
            <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
              {"// Services"}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What We <span className="text-primary">Build</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              End-to-end digital solutions crafted with modern technologies and best practices.
            </p>
          </FadeIn>

          {/* Bento Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <StaggerItem
                key={service.title}
                className={`${
                  service.highlight && index < 2 ? "lg:row-span-1" : ""
                }`}
              >
                <Link
                  href={service.href}
                  className="group relative flex flex-col h-full p-6 md:p-8 bg-background border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(11,148,68,0.15)]"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-primary/50 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                        <ArrowUpRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono bg-card border border-border rounded-md text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* View All Link */}
          <FadeIn className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="font-mono text-sm">View all services</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
