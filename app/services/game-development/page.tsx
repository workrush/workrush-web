import { Metadata } from "next";
import Link from "next/link";
import {
  Gamepad2,
  Box,
  Layers,
  Smartphone,
  Monitor,
  Globe,
  ArrowRight,
  Check,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

export const metadata: Metadata = {
  title: "Game Development Services",
  description:
    "Professional game development services for mobile, desktop, and web. We build engaging games using Unity, Unreal Engine, and custom game engines.",
  alternates: {
    canonical: "/services/game-development",
  },
  openGraph: {
    title: "Game Development Services | Workrush",
    description:
      "Engaging games for mobile, desktop, and web. Unity, Unreal Engine, and custom development.",
  },
};

const features = [
  {
    title: "Mobile Games",
    description:
      "Addictive mobile games for iOS and Android that players can't put down.",
    icon: Smartphone,
  },
  {
    title: "PC/Console Games",
    description:
      "High-quality desktop and console games with stunning graphics and gameplay.",
    icon: Monitor,
  },
  {
    title: "Web Games",
    description:
      "Browser-based games using WebGL and HTML5 for instant play experiences.",
    icon: Globe,
  },
  {
    title: "3D Games",
    description:
      "Immersive 3D worlds with realistic physics, lighting, and environments.",
    icon: Box,
  },
  {
    title: "2D Games",
    description:
      "Beautiful 2D games with smooth animations and engaging pixel art or vector graphics.",
    icon: Layers,
  },
  {
    title: "Multiplayer",
    description:
      "Real-time multiplayer experiences with matchmaking and social features.",
    icon: Gamepad2,
  },
];

const techStack = [
  "Unity",
  "Unreal Engine",
  "Godot",
  "C#",
  "C++",
  "Blender",
  "Photon",
  "PlayFab",
  "Firebase",
  "WebGL",
];

const gameTypes = [
  "Casual Games",
  "Puzzle Games",
  "Action Games",
  "RPG Games",
  "Strategy Games",
  "Simulation Games",
  "Educational Games",
  "Hyper-casual",
];

const process = [
  {
    step: 1,
    title: "Concept",
    description: "Game design document, mechanics, and core loop definition.",
  },
  {
    step: 2,
    title: "Prototype",
    description: "Playable prototype to validate core gameplay mechanics.",
  },
  {
    step: 3,
    title: "Art & Assets",
    description: "Character design, environments, UI, and sound assets.",
  },
  {
    step: 4,
    title: "Development",
    description: "Full game development with iterative playtesting.",
  },
  {
    step: 5,
    title: "Polish",
    description: "Bug fixes, optimization, and gameplay balancing.",
  },
  {
    step: 6,
    title: "Launch",
    description: "Store submission, marketing support, and live ops.",
  },
];

export default function GameDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Game Development"
          title="Games That Captivate"
          description="From casual mobile games to immersive 3D experiences, we create games that engage players and stand out in the market."
        />

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Full-Cycle Game Development
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From concept to launch, we handle every aspect of game development.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="p-6 bg-background border border-border rounded-xl h-full">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                  Technologies
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Game Engines & Tools
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We work with industry-standard game engines and tools to deliver
                  high-quality gaming experiences.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-secondary border border-border rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">Game Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {gameTypes.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Experienced game designers and developers",
                      "Cross-platform development expertise",
                      "In-house art and audio production",
                      "Monetization strategy consulting",
                      "Post-launch support and updates",
                      "Analytics and live ops integration",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Game Development Pipeline
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven process that takes your game from idea to successful launch.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step) => (
                <StaggerItem key={step.title}>
                  <div className="text-center p-6">
                    <div className="inline-flex h-16 w-16 rounded-full bg-primary items-center justify-center text-2xl font-bold text-primary-foreground mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Your Game?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Let&apos;s turn your game idea into an engaging reality that players will
                love.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
