"use client";

import { Search, PenTool, TestTube, Code, Rocket, HeartHandshake } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

const steps = [
  {
    number: 1,
    title: "Discover",
    description: "We do extensive research about your niche and find important insights about your market and users.",
    icon: Search,
  },
  {
    number: 2,
    title: "Design",
    description: "Our designers craft beautiful, intuitive interfaces with interactive prototypes for your approval.",
    icon: PenTool,
  },
  {
    number: 3,
    title: "Test",
    description: "Rigorous testing ensures every feature works flawlessly across all devices and scenarios.",
    icon: TestTube,
  },
  {
    number: 4,
    title: "Develop",
    description: "Agile development with clean code architecture ensures scalable, maintainable products.",
    icon: Code,
  },
  {
    number: 5,
    title: "Deploy",
    description: "We launch your product with zero downtime and ensure smooth transition to production.",
    icon: Rocket,
  },
  {
    number: 6,
    title: "After Service",
    description: "Ongoing maintenance, updates, and support to keep your product running at peak performance.",
    icon: HeartHandshake,
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Terminal-style border wrapper */}
        <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
          {/* Fading bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          {/* Corner intersection + */}
          <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
          {/* Top of left border + */}
          <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
              {"// Process"}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Creating <span className="text-primary">Magical</span> Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results on time, every time.
            </p>
          </FadeIn>

          {/* Desktop: Horizontal Stepper */}
          <div className="hidden lg:block">
            <StaggerContainer>
              <div className="grid grid-cols-6 gap-4">
                {steps.map((step, index) => (
                  <StaggerItem key={step.title}>
                    <div className="flex flex-col items-center text-center group">
                      {/* Line + Node row */}
                      <div className="flex items-center w-full">
                        {/* Left line */}
                        <div className={`h-0.5 flex-1 ${index === 0 ? 'bg-transparent' : 'bg-primary/50'}`} />
                        {/* Icon circle */}
                        <div className="relative z-10 h-14 w-14 rounded-full bg-card border-2 border-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <step.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        {/* Right line */}
                        <div className={`h-0.5 flex-1 ${index === steps.length - 1 ? 'bg-transparent' : 'bg-primary/50'}`} />
                      </div>
                      {/* Vertical line */}
                      <div className="w-0.5 h-4 bg-primary/50" />
                      {/* Content box */}
                      <div className="w-full">
                        {/* Step number */}
                        <span className="text-xs font-mono text-primary mb-1 block">0{step.number}</span>
                        {/* Title */}
                        <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

          {/* Tablet: 2 columns grid */}
          <div className="hidden md:block lg:hidden">
            <StaggerContainer className="grid grid-cols-2 gap-6">
              {steps.map((step) => (
                <StaggerItem key={step.title}>
                  <div className="bg-card border border-border rounded-xl p-5 h-full hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-primary">0{step.number}</span>
                        <h3 className="text-lg font-semibold mt-1 mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden">
            <StaggerContainer className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-primary/50" />

              <div className="space-y-5">
                {steps.map((step) => (
                  <StaggerItem key={step.title}>
                    <div className="relative flex gap-4">
                      {/* Node */}
                      <div className="relative z-10 h-10 w-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
                      </div>
                      {/* Content card with border */}
                      <div className="flex-1 border border-border rounded-xl p-4 bg-card/50">
                        <div className="flex items-center gap-2 mb-2">
                          <step.icon className="h-4 w-4 text-primary" />
                          <h3 className="font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
