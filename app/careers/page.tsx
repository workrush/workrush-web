import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Users,
  Rocket,
  Heart,
  Coffee,
  Globe,
  Mail,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Workrush team. We're always looking for talented individuals who are passionate about building great digital products.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers | Workrush",
    description:
      "Build your career with us. Join a team that values innovation, growth, and work-life balance.",
  },
};

const benefits = [
  {
    title: "Remote-First",
    description: "Work from anywhere in the world with flexible hours.",
    icon: Globe,
  },
  {
    title: "Growth Focused",
    description: "Learning budget and career development opportunities.",
    icon: Rocket,
  },
  {
    title: "Great Team",
    description: "Collaborate with talented people who love what they do.",
    icon: Users,
  },
  {
    title: "Work-Life Balance",
    description: "Generous PTO, mental health days, and no crunch culture.",
    icon: Heart,
  },
  {
    title: "Modern Stack",
    description: "Work with the latest technologies and best practices.",
    icon: Coffee,
  },
  {
    title: "Meaningful Work",
    description: "Build products that make a real difference for clients.",
    icon: Briefcase,
  },
];

const values = [
  {
    title: "Innovation",
    description: "We encourage experimentation and creative problem-solving.",
  },
  {
    title: "Ownership",
    description: "Take ownership of your work and make an impact.",
  },
  {
    title: "Transparency",
    description: "Open communication and honest feedback at all levels.",
  },
  {
    title: "Excellence",
    description: "We strive for quality in everything we deliver.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Careers"
          title="Build Your Future With Us"
          description="Join a team of passionate technologists, designers, and strategists working on exciting projects for clients worldwide."
        />

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <FadeIn className="max-w-2xl mx-auto text-center">
              <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                No Open Positions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don&apos;t have any open positions at the moment, but we&apos;re
                always interested in hearing from talented people. If you think
                you&apos;d be a great fit for our team, we&apos;d love to hear from you.
              </p>

              <div className="bg-background border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Interested in Joining?</h3>
                <p className="text-muted-foreground mb-6">
                  Send us your resume and a brief introduction. We&apos;ll keep your
                  information on file and reach out when a suitable position opens up.
                </p>
                <Button asChild size="lg">
                  <a href={`mailto:${siteConfig.contact.email}?subject=Career Inquiry`}>
                    <Mail className="mr-2 h-5 w-5" />
                    Send Your Resume
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                Why Join Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Benefits & Perks
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in taking care of our team so they can do their best work.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="p-6 bg-card border border-border rounded-xl h-full">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                What We Value
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our values guide how we work together and deliver for our clients.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="text-center p-6">
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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
                Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Want to learn more about working at Workrush? Get in touch with our team.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
