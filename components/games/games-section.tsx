"use client";

import dynamic from "next/dynamic";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

const PhysicsPlayground = dynamic(
  () => import("./physics-playground").then((m) => m.PhysicsPlayground),
  { ssr: false, loading: () => <div className="w-full rounded-xl border border-border bg-card animate-pulse" style={{ height: 420 }} /> }
);
const ReactionGame = dynamic(
  () => import("./reaction-game").then((m) => m.ReactionGame),
  { ssr: false, loading: () => <div className="w-full rounded-xl border border-border bg-card animate-pulse" style={{ height: 340 }} /> }
);
const SnakeGame = dynamic(
  () => import("./snake-game").then((m) => m.SnakeGame),
  { ssr: false, loading: () => <div className="w-full rounded-xl border border-border bg-card animate-pulse" style={{ height: 380 }} /> }
);

export function GamesSection() {
  return (
    <div className="mt-14">
      <FadeIn>
        <span className="text-sm font-mono text-primary uppercase tracking-wider">
          {"// Experience"}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-2">
          Play. <span className="text-primary">Experience.</span> Build.
        </h2>
        <p className="text-muted-foreground text-sm mb-8 max-w-xl">
          We don&apos;t just talk about games — we build them. Try these mini-games we made with HTML5, CSS, and canvas.
        </p>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StaggerItem className="lg:col-span-2">
          <PhysicsPlayground />
        </StaggerItem>
        <StaggerItem>
          <ReactionGame />
        </StaggerItem>
        <StaggerItem>
          <SnakeGame />
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
}
