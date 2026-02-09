"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Smartphone, Globe as GlobeIcon, Palette, Gamepad2, TrendingUp, Blocks, BrainCircuit, Cloud, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Dynamically import Globe to avoid SSR issues with Three.js
const Globe = dynamic(() => import("@/components/effects/globe").then((mod) => mod.Globe), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[400px]" />,
});

const services = [
  { icon: Smartphone, label: "App Dev" },
  { icon: GlobeIcon, label: "Web Dev" },
  { icon: Palette, label: "UI/UX" },
  { icon: BrainCircuit, label: "AI/ML" },
  { icon: Cloud, label: "Cloud" },
  { icon: Rocket, label: "SaaS" },
  { icon: Gamepad2, label: "Games" },
  { icon: TrendingUp, label: "Marketing" },
  { icon: Blocks, label: "Web3" },
];

export function Hero() {
  return (
    <section className="relative bg-background text-foreground overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative">
        <div className="py-24 md:py-32 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8">
              {/* Fading bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              {/* Terminal markers */}
              <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
              <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>

              <div className="max-w-xl">
                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
                >
                  We Build Digital
                  <br />
                  Products That <span className="text-primary">Scale</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                >
                  From idea to launch, we deliver end-to-end digital solutions.
                  Mobile apps, web platforms, and everything in between.
                </motion.p>

                {/* Service Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="flex flex-wrap items-center gap-3 mb-10"
                >
                  {services.map((service) => (
                    <div
                      key={service.label}
                      className="group/icon relative h-10 w-10 flex items-center justify-center cursor-default"
                      title={service.label}
                    >
                      <service.icon className="h-5 w-5 text-muted-foreground/50 group-hover/icon:text-primary transition-colors duration-300" />
                    </div>
                  ))}
                  {/* Blinking cursor */}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="text-primary font-mono text-lg ml-1"
                  >
                    ▌
                  </motion.span>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button asChild size="lg" className="text-lg px-8 py-6 h-auto group">
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 h-auto"
                  >
                    <Link href="/services">
                      Explore Services
                    </Link>
                  </Button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-border"
                >
                  <p className="text-sm text-muted-foreground mb-4">Trusted by businesses across</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="px-3 py-1 bg-card/50 border border-border rounded-md">UK</span>
                    <span className="px-3 py-1 bg-card/50 border border-border rounded-md">Europe</span>
                    <span className="px-3 py-1 bg-card/50 border border-border rounded-md">India</span>
                    <span className="px-3 py-1 bg-card/50 border border-border rounded-md">USA</span>
                    <span className="px-3 py-1 bg-card/50 border border-border rounded-md">Middle East</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right - 3D Globe (Desktop only) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block h-[500px] xl:h-[600px]"
            >
              <Globe />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
