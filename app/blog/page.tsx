import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tutorials, and industry updates from the Workrush team. Stay updated with the latest in technology, design, and digital marketing.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Workrush",
    description:
      "Tech insights, tutorials, and industry updates from our expert team.",
  },
};

const upcomingTopics = [
  {
    title: "Building with AI Agents",
    description:
      "How agentic workflows are reshaping software development in 2026.",
    category: "AI",
  },
  {
    title: "Next.js 16 & React 19",
    description:
      "Server components, streaming, and the modern React architecture.",
    category: "Technology",
  },
  {
    title: "From MVP to Product-Market Fit",
    description:
      "Lessons learned shipping early-stage products that actually stick.",
    category: "Startup",
  },
  {
    title: "Cloud Cost Optimization",
    description:
      "Practical strategies to cut your AWS/GCP bill without sacrificing performance.",
    category: "DevOps",
  },
];

export default function BlogPage() {
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
                  {"// Blog"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Coming{" "}
                  <span className="text-primary">Soon</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  We&apos;re putting together articles on technology, engineering,
                  and building products that scale. Stay tuned.
                </p>
              </FadeIn>

              {/* Upcoming Topics */}
              <FadeIn delay={0.1} className="mb-10 md:mb-14">
                <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                  {"// Upcoming topics"}
                </h2>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {upcomingTopics.map((topic) => (
                    <StaggerItem key={topic.title}>
                      <div className="group p-5 border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
                        <span className="text-xs font-mono text-primary">
                          {topic.category}
                        </span>
                        <h3 className="text-base font-bold text-foreground mt-1 mb-1">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {topic.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>

              {/* CTA */}
              <FadeIn delay={0.2} className="text-center pt-4">
                <h2 className="text-lg font-semibold mb-2">
                  Have a topic suggestion?
                </h2>
                <p className="text-base text-muted-foreground mb-5">
                  We&apos;d love to hear what you want to read about.
                </p>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90"
                >
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
