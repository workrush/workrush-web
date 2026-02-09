import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Server,
  Database,
  Cloud,
  Lock,
  Gauge,
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
  title: "Web Development Services",
  description:
    "Professional web development services using React, Next.js, Node.js, and modern technologies. We build scalable, high-performance web applications.",
  alternates: {
    canonical: "/services/web-development",
  },
  openGraph: {
    title: "Web Development Services | Workrush",
    description:
      "Scalable web applications built with modern frameworks. React, Next.js, Node.js and more.",
  },
};

const features = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive frontends built with React, Next.js, and Vue.js for optimal user experience.",
    icon: Globe,
  },
  {
    title: "Backend Development",
    description:
      "Robust APIs and server-side applications using Node.js, Python, and cloud-native technologies.",
    icon: Server,
  },
  {
    title: "Database Design",
    description:
      "Efficient database architectures using PostgreSQL, MongoDB, and Redis for scalable data management.",
    icon: Database,
  },
  {
    title: "Cloud Deployment",
    description:
      "Deploy on AWS, Google Cloud, or Azure with CI/CD pipelines and infrastructure as code.",
    icon: Cloud,
  },
  {
    title: "Security First",
    description:
      "Built-in security best practices including authentication, authorization, and data encryption.",
    icon: Lock,
  },
  {
    title: "Performance Optimized",
    description:
      "Fast loading times, optimized bundles, and efficient caching strategies for peak performance.",
    icon: Gauge,
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "GraphQL",
  "REST APIs",
];

const process = [
  {
    step: "01",
    title: "Requirements",
    description: "Deep dive into your business needs and technical requirements.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "Design scalable system architecture and tech stack selection.",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile sprints with continuous integration and deployment.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Unit tests, integration tests, and end-to-end testing.",
  },
  {
    step: "05",
    title: "Deployment",
    description: "Production deployment with monitoring and alerting.",
  },
  {
    step: "06",
    title: "Maintenance",
    description: "Ongoing support, updates, and performance optimization.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            {/* Terminal-style border */}
            <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
              {/* Fading bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              {/* Corner markers */}
              <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">
                +
              </div>
              <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">
                +
              </div>

              {/* ── Header ── */}
              <FadeIn className="mb-14 md:mb-20">
                <span className="text-sm font-mono text-primary uppercase tracking-wider">
                  {"// Web Development"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                  Build Scalable{" "}
                  <span className="text-primary">Web Applications</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  From startups to enterprises, we create high-performance web
                  applications that grow with your business. Modern tech stack,
                  best practices, and scalable architecture.
                </p>
              </FadeIn>

              {/* ── What We Offer ── */}
              <FadeIn className="mb-4">
                <span className="text-sm font-mono text-primary uppercase tracking-wider">
                  {"// What We Offer"}
                </span>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14 md:mb-20">
                {features.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <div className="border border-border rounded-xl hover:border-primary/50 p-5 overflow-hidden relative group transition-colors">
                      {/* Background icon */}
                      <feature.icon className="absolute -right-3 -bottom-3 h-24 w-24 text-primary/[0.04] group-hover:text-primary/[0.08] transition-colors" />
                      <div className="relative z-10">
                        <h3 className="text-base font-bold mb-1.5">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* ── Tech Stack ── */}
              <FadeIn className="mb-14 md:mb-20">
                <span className="text-sm font-mono text-primary uppercase tracking-wider">
                  {"// Tech Stack"}
                </span>
                <div className="flex flex-wrap gap-2 mt-4">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1.5 border border-border rounded-md text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeIn>

              {/* ── Process ── */}
              <FadeIn className="mb-4">
                <span className="text-sm font-mono text-primary uppercase tracking-wider">
                  {"// Process"}
                </span>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-14 md:mb-20">
                {process.map((step) => (
                  <StaggerItem key={step.title}>
                    <div className="border border-border rounded-xl p-4 hover:border-primary/50 transition-colors group">
                      <span className="text-xs font-mono text-primary">
                        {step.step}
                      </span>
                      <h3 className="text-base font-bold mt-1 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* ── CTA ── */}
              <FadeIn className="text-center">
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
                  Let&apos;s build something great together. Get in touch for a
                  free consultation.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 h-auto"
                >
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
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
