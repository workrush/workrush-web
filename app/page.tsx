import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TechStack } from "@/components/sections/tech-stack";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";
import { ParticleWrapper } from "@/components/effects/particle-wrapper";
import { CursorGlow } from "@/components/effects/cursor-glow";

export default function Home() {
  return (
    <>
      <ParticleWrapper />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <TrustBar />
        <Stats />
        <Process />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
