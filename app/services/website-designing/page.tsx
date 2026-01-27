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
  Check,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

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

const designProcess = [
  {
    step: 1,
    title: "Research",
    description: "Understand your brand, audience, competitors, and goals.",
  },
  {
    step: 2,
    title: "Wireframes",
    description: "Low-fidelity layouts to establish information architecture.",
  },
  {
    step: 3,
    title: "Visual Design",
    description: "High-fidelity designs with colors, typography, and imagery.",
  },
  {
    step: 4,
    title: "Prototyping",
    description: "Interactive prototypes for user testing and stakeholder review.",
  },
  {
    step: 5,
    title: "Iteration",
    description: "Refine designs based on feedback and usability testing.",
  },
  {
    step: 6,
    title: "Handoff",
    description: "Developer-ready assets with style guides and specifications.",
  },
];

const tools = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Framer",
  "InVision",
  "Principle",
];

export default function WebsiteDesigningPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Website Designing"
          title="Design That Converts"
          description="We create beautiful, user-centered website designs that not only look stunning but drive real business results. From wireframes to pixel-perfect mockups."
        />

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Complete Design Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From initial concepts to production-ready designs, we cover every aspect
                of website design.
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
                  Tools We Use
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Industry-Standard Tools
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We use the best design tools in the industry to deliver high-quality,
                  production-ready designs.
                </p>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-secondary border border-border rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Conversion-focused design philosophy",
                      "Mobile-first responsive approach",
                      "Accessibility and WCAG compliance",
                      "Brand consistency across all pages",
                      "Unlimited revisions until you're happy",
                      "Fast turnaround times",
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
                Design Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach that ensures your design meets business goals and
                user needs.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProcess.map((step) => (
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
                Ready for a Stunning Website?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Let&apos;s create a design that captures your brand and converts visitors.
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
