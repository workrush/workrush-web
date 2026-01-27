"use client";

import { Rocket, Users, Clock, Heart, Code, Globe, Zap, Award } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    description: "Apps, websites & platforms launched",
    icon: Rocket,
  },
  {
    value: "30+",
    label: "Happy Clients",
    description: "Startups to enterprises worldwide",
    icon: Users,
  },
  {
    value: "5+",
    label: "Years Experience",
    description: "Building digital products",
    icon: Clock,
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    description: "Based on project feedback",
    icon: Heart,
  },
];

const highlights = [
  { icon: Code, text: "Full-stack expertise" },
  { icon: Globe, text: "Global delivery" },
  { icon: Zap, text: "Agile development" },
  { icon: Award, text: "Quality focused" },
];

export function Stats() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative">
        {/* Terminal-style border */}
        <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
          {/* Fading bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          {/* Corner markers */}
          <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
          <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>

          <FadeIn className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
              {"// Impact"}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Numbers That <span className="text-primary">Speak</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We measure our success by the success of our clients. Every project is an opportunity to deliver excellence.
            </p>
          </FadeIn>

          {/* Stats Grid */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="group relative p-6 md:p-8 bg-card/50 border border-border rounded-2xl hover:border-primary/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-mono font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  {/* Label */}
                  <div className="text-foreground font-semibold mb-1">
                    {stat.label}
                  </div>
                  {/* Description */}
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Highlights */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 bg-card/30 border border-border rounded-full"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
