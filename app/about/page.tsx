import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lightbulb, Target, Users, Heart } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Workrush - a digital agency helping businesses transform their ideas into successful products. Discover our mission and values.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Workrush",
    description:
      "We're a passionate team of developers, designers, and marketers building digital products that matter.",
  },
};

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const values = [
  {
    title: "Innovation",
    description:
      "Staying ahead of technology trends to deliver cutting-edge solutions.",
    icon: Lightbulb,
  },
  {
    title: "Quality",
    description:
      "Every line of code and every pixel crafted with excellence.",
    icon: Target,
  },
  {
    title: "Collaboration",
    description:
      "Treating your goals as our own and building lasting partnerships.",
    icon: Users,
  },
  {
    title: "Integrity",
    description:
      "Transparency and honesty in everything we do, on time and on budget.",
    icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="container relative">
            {/* Terminal-style border */}
            <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
              {/* Fading bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              {/* Corner markers */}
              <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
              <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>

              {/* About Header */}
              <FadeIn className="mb-10 md:mb-14">
                <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
                  {"// About"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Building Digital Products That{" "}
                  <span className="text-primary">Matter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  We&apos;re a team of passionate technologists, designers, and
                  strategists dedicated to helping businesses succeed in the
                  digital age.
                </p>
              </FadeIn>

              {/* Our Story + Stats */}
              <FadeIn delay={0.1} className="mb-10 md:mb-14">
                <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                  {"// Our Story"}
                </h2>
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                    <p>
                      Workrush was founded with a simple mission: to help
                      businesses transform their ideas into successful digital
                      products. We saw too many great ideas fail due to poor
                      execution, and we set out to change that.
                    </p>
                    <p>
                      Today, we&apos;re proud to be a trusted partner for
                      businesses across the UK and Europe. From startups
                      launching their first MVP to enterprises scaling their
                      operations, we bring the same passion and dedication to
                      every project.
                    </p>
                    <p>
                      Our team combines technical expertise with creative
                      thinking to deliver solutions that not only work but
                      delight users and drive business growth.
                    </p>
                  </div>

                  <StaggerContainer className="grid grid-cols-2 gap-3">
                    {stats.map((stat) => (
                      <StaggerItem key={stat.label}>
                        <div className="border border-border rounded-xl p-5 text-center hover:border-primary/50 transition-colors">
                          <div className="text-2xl font-mono font-bold text-primary mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </FadeIn>

              {/* Our Values */}
              <FadeIn delay={0.2} className="mb-10 md:mb-14">
                <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                  {"// Our Values"}
                </h2>
                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {values.map((value) => (
                    <StaggerItem key={value.title}>
                      <div className="group relative overflow-hidden p-5 border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
                        {/* Background icon */}
                        <value.icon className="absolute -bottom-2 -right-2 h-16 w-16 text-primary/50 group-hover:text-primary/80 transition-colors" />
                        <div className="relative">
                          <div className="text-base font-bold text-foreground mb-1">
                            {value.title}
                          </div>
                          <div className="text-xs text-muted-foreground font-mono">
                            {value.description}
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>

              {/* CTA */}
              <FadeIn delay={0.3} className="text-center pt-4">
                <h2 className="text-lg font-semibold mb-2">
                  Ready to Work With Us?
                </h2>
                <p className="text-base text-muted-foreground mb-5">
                  Let&apos;s discuss how we can help bring your vision to life.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
