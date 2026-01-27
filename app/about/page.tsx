import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Users, Lightbulb, Heart } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Workrush - a digital agency helping businesses transform their ideas into successful products. Meet our team and discover our mission.",
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
      "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
    icon: Lightbulb,
  },
  {
    title: "Quality",
    description:
      "We never compromise on quality. Every line of code, every pixel, and every strategy is crafted with excellence.",
    icon: Target,
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients, treating their goals as our own and building lasting partnerships.",
    icon: Users,
  },
  {
    title: "Integrity",
    description:
      "Transparency and honesty guide everything we do. We deliver what we promise, on time and on budget.",
    icon: Heart,
  },
];

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "15+ years in tech leadership, passionate about building products that scale.",
  },
  {
    name: "Sarah Chen",
    role: "Head of Design",
    bio: "Award-winning designer with expertise in user-centered design principles.",
  },
  {
    name: "Marcus Williams",
    role: "Lead Developer",
    bio: "Full-stack expert specializing in React, Node.js, and cloud architecture.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    bio: "Digital marketing strategist with a track record of driving growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="About Us"
          title="Building Digital Products That Matter"
          description="We're a team of passionate technologists, designers, and strategists dedicated to helping businesses succeed in the digital age."
        />

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  From Vision to Reality
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Workrush was founded with a simple mission: to help businesses
                    transform their ideas into successful digital products. We saw too
                    many great ideas fail due to poor execution, and we set out to
                    change that.
                  </p>
                  <p>
                    Today, we&apos;re proud to be a trusted partner for businesses
                    across the UK and Europe. From startups launching their first MVP
                    to enterprises scaling their operations, we bring the same passion
                    and dedication to every project.
                  </p>
                  <p>
                    Our team combines technical expertise with creative thinking to
                    deliver solutions that not only work but delight users and drive
                    business growth.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-background border border-border rounded-xl p-6 text-center"
                    >
                      <div className="text-4xl font-mono font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values guide every decision we make and every project we
                undertake.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="text-center p-6">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Meet the People Behind Workrush
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A talented team of experts dedicated to your success.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <StaggerItem key={member.name}>
                  <div className="bg-background border border-border rounded-2xl p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
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
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Let&apos;s discuss how we can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 h-auto"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
