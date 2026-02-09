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
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/motion";

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

const process = [
  {
    step: "01",
    title: "Concept",
    description: "Game design document, mechanics, and core loop definition.",
  },
  {
    step: "02",
    title: "Prototype",
    description: "Playable prototype to validate core gameplay mechanics.",
  },
  {
    step: "03",
    title: "Art & Assets",
    description: "Character design, environments, UI, and sound assets.",
  },
  {
    step: "04",
    title: "Development",
    description: "Full game development with iterative playtesting.",
  },
  {
    step: "05",
    title: "Polish",
    description: "Bug fixes, optimization, and gameplay balancing.",
  },
  {
    step: "06",
    title: "Launch",
    description: "Store submission, marketing support, and live ops.",
  },
];

export default function GameDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
              {/* Fading bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              {/* Corner markers */}
              <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
              <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>

              {/* 1. Header */}
              <FadeIn>
                <span className="text-sm font-mono text-primary uppercase tracking-wider">
                  {"// Game Development"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                  Games That <span className="text-primary">Captivate</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
                  From casual mobile games to immersive 3D experiences, we create
                  games that engage players and stand out in the market.
                </p>
              </FadeIn>

              {/* 2. What We Offer */}
              <div className="mt-14">
                <FadeIn>
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">
                    {"// What We Offer"}
                  </span>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                  {features.map((feature) => (
                    <StaggerItem key={feature.title}>
                      <div className="relative overflow-hidden p-5 border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group">
                        <feature.icon className="absolute -bottom-2 -right-2 h-16 w-16 text-primary/50 group-hover:text-primary/80 transition-colors" />
                        <div className="relative">
                          <feature.icon className="h-5 w-5 text-primary mb-3" />
                          <h3 className="text-base font-bold text-foreground mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground font-mono">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* 3. Tech Stack */}
              <div className="mt-14">
                <FadeIn>
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">
                    {"// Tech Stack"}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1.5 border border-border rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* 4. Process */}
              <div className="mt-14">
                <FadeIn>
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">
                    {"// Process"}
                  </span>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                  {process.map((item) => (
                    <StaggerItem key={item.title}>
                      <div className="border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                        <span className="text-xs font-mono text-primary">
                          {item.step}.
                        </span>
                        <h3 className="text-base font-bold mt-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* 5. CTA */}
              <div className="mt-14">
                <FadeIn className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Create Your Game?
                  </h2>
                  <p className="text-muted-foreground mb-6 text-base">
                    Let&apos;s turn your game idea into an engaging reality that
                    players will love.
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
