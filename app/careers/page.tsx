import { Metadata } from "next";
import { Mail, Globe, Rocket, Users, Heart, Coffee, Briefcase } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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
};

const perks = [
  { label: "Remote-First", desc: "Work from anywhere, flexible hours", icon: Globe },
  { label: "Growth Focused", desc: "Learning budget & career development", icon: Rocket },
  { label: "Great Team", desc: "Talented people who love building", icon: Users },
  { label: "Work-Life Balance", desc: "Generous PTO, no crunch culture", icon: Heart },
  { label: "Modern Stack", desc: "Latest tech and best practices", icon: Coffee },
  { label: "Meaningful Work", desc: "Products that make a real impact", icon: Briefcase },
];

export default function CareersPage() {
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

              {/* Header */}
              <FadeIn className="mb-10 md:mb-14">
                <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
                  {"// Careers"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Build Your Future{" "}
                  <span className="text-primary">With Us</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  We&apos;re a team of builders, designers, and problem-solvers.
                  No open roles right now — but we&apos;re always looking for great people.
                </p>
              </FadeIn>

              {/* Perks */}
              <FadeIn delay={0.1} className="mb-10 md:mb-14">
                <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                  {"// Why join us"}
                </h2>
                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {perks.map((perk) => (
                    <StaggerItem key={perk.label}>
                      <div className="group relative overflow-hidden p-5 border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
                        {/* Background icon */}
                        <perk.icon className="absolute -bottom-2 -right-2 h-16 w-16 text-primary/50 group-hover:text-primary/80 transition-colors" />
                        <div className="relative">
                          <div className="text-base font-bold text-foreground mb-1">{perk.label}</div>
                          <div className="text-xs font-mono text-muted-foreground">{perk.desc}</div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>

              {/* CTA */}
              <FadeIn delay={0.2} className="text-center pt-4">
                <h2 className="text-lg font-semibold mb-2">
                  Think you&apos;d be a good fit?
                </h2>
                <p className="text-base text-muted-foreground mb-5">
                  Send us your resume and a quick intro. We&apos;ll keep it on file
                  and reach out when something opens up.
                </p>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90"
                >
                  <a href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Career Inquiry — Workrush")}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Your Resume
                  </a>
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
