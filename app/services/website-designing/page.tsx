import { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  Figma,
  Monitor,
  Smartphone,
  MousePointer,
  Sparkles,
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
  title: "Website Designing Services",
  description:
    "Professional UI/UX design services. We create stunning, user-centered website designs that convert visitors into customers using Figma and modern design principles.",
  alternates: {
    canonical: "/services/website-designing",
  },
  openGraph: {
    title: "Website Designing Services | Workrush",
    description:
      "Beautiful, conversion-focused website designs. UI/UX design, Figma prototypes, and responsive layouts.",
  },
};

const features = [
  {
    title: "UI Design",
    description:
      "Visually stunning interfaces that reflect your brand identity and engage users.",
    icon: Palette,
  },
  {
    title: "UX Design",
    description:
      "User-centered design that makes navigation intuitive and improves conversions.",
    icon: MousePointer,
  },
  {
    title: "Figma Prototypes",
    description:
      "Interactive prototypes that let you experience the design before development.",
    icon: Figma,
  },
  {
    title: "Desktop Design",
    description:
      "Optimized layouts for desktop browsers with pixel-perfect attention to detail.",
    icon: Monitor,
  },
  {
    title: "Mobile Responsive",
    description:
      "Mobile-first designs that look great and work flawlessly on all screen sizes.",
    icon: Smartphone,
  },
  {
    title: "Micro-interactions",
    description:
      "Delightful animations and interactions that enhance the user experience.",
    icon: Sparkles,
  },
];

const techStack = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Framer",
  "InVision",
  "Principle",
];

const process = [
  {
    step: "01",
    title: "Research",
    description: "Understand your brand, audience, competitors, and goals.",
  },
  {
    step: "02",
    title: "Wireframes",
    description: "Low-fidelity layouts to establish information architecture.",
  },
  {
    step: "03",
    title: "Visual Design",
    description: "High-fidelity designs with colors, typography, and imagery.",
  },
  {
    step: "04",
    title: "Prototyping",
    description: "Interactive prototypes for user testing and stakeholder review.",
  },
  {
    step: "05",
    title: "Iteration",
    description: "Refine designs based on feedback and usability testing.",
  },
  {
    step: "06",
    title: "Handoff",
    description: "Developer-ready assets with style guides and specifications.",
  },
];

export default function WebsiteDesigningPage() {
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
                  {"// Website Designing"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                  Design That <span className="text-primary">Converts</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
                  We create beautiful, user-centered website designs that not only
                  look stunning but drive real business results. From wireframes to
                  pixel-perfect mockups.
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
                    Ready for a Stunning Website?
                  </h2>
                  <p className="text-muted-foreground mb-6 text-base">
                    Let&apos;s create a design that captures your brand and converts
                    visitors.
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
