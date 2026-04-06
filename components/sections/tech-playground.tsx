"use client";

import dynamic from "next/dynamic";
import { FadeIn } from "@/components/effects/motion";

const PhysicsPlayground = dynamic(
  () => import("@/components/games/physics-playground").then((m) => m.PhysicsPlayground),
  {
    ssr: false,
    loading: () => (
      <div className="w-full rounded-xl border border-border bg-card animate-pulse" style={{ height: 440 }} />
    ),
  }
);

export function TechPlayground() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
          <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>

          <FadeIn className="mb-10">
            <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
              {"// Interactive"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our Stack, <span className="text-primary">Alive</span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Every technology we use — drag them, toss them around.
            </p>
          </FadeIn>

          <PhysicsPlayground />
        </div>
      </div>
    </section>
  );
}
