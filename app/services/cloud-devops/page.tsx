import { Metadata } from "next";
import Link from "next/link";
import {
  Cloud,
  Container,
  GitBranch,
  Shield,
  Activity,
  Server,
  ArrowRight,
  Check,
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
  title: "Cloud & DevOps Services",
  description:
    "Cloud infrastructure, CI/CD pipelines, containerization, and DevOps consulting. AWS, GCP, Azure, Docker, Kubernetes — we build infrastructure that scales.",
  alternates: {
    canonical: "/services/cloud-devops",
  },
  openGraph: {
    title: "Cloud & DevOps Services | Workrush",
    description:
      "Scalable cloud infrastructure and DevOps automation. Ship faster, scale smarter.",
  },
};

const features = [
  {
    title: "Cloud Architecture",
    description:
      "Design and deploy scalable, cost-optimized cloud infrastructure on AWS, GCP, or Azure tailored to your workload.",
    icon: Cloud,
  },
  {
    title: "Containerization",
    description:
      "Docker and Kubernetes setups that make your apps portable, scalable, and easy to deploy across any environment.",
    icon: Container,
  },
  {
    title: "CI/CD Pipelines",
    description:
      "Automated build, test, and deploy pipelines using GitHub Actions, GitLab CI, or Jenkins. Ship code with confidence.",
    icon: GitBranch,
  },
  {
    title: "Infrastructure as Code",
    description:
      "Terraform and Pulumi for reproducible, version-controlled infrastructure. No more manual server configs.",
    icon: Server,
  },
  {
    title: "Monitoring & Observability",
    description:
      "Full-stack monitoring with Grafana, Prometheus, and alerting. Know what's happening before your users do.",
    icon: Activity,
  },
  {
    title: "Security & Compliance",
    description:
      "Cloud security best practices, secrets management, SSL automation, and compliance-ready configurations.",
    icon: Shield,
  },
];

const techStack = [
  "AWS",
  "GCP",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "NGINX",
  "Cloudflare",
  "Grafana",
  "Prometheus",
  "Linux",
];

const processSteps = [
  {
    step: 1,
    title: "Audit",
    description:
      "Review your current infrastructure, costs, performance bottlenecks, and security gaps.",
  },
  {
    step: 2,
    title: "Architect",
    description:
      "Design a cloud architecture that balances performance, cost, and reliability.",
  },
  {
    step: 3,
    title: "Migrate",
    description:
      "Zero-downtime migration from legacy servers or between cloud providers.",
  },
  {
    step: 4,
    title: "Automate",
    description:
      "Set up CI/CD, IaC, and automated scaling so your team ships faster.",
  },
  {
    step: 5,
    title: "Monitor",
    description:
      "Deploy monitoring, alerting, and logging for full visibility into your stack.",
  },
  {
    step: 6,
    title: "Optimize",
    description:
      "Continuous cost optimization, performance tuning, and infrastructure improvements.",
  },
];

const whyUs = [
  "Multi-cloud expertise — AWS, GCP, Azure, OCI",
  "Cost-first approach — we optimize before we scale",
  "Security baked in, not bolted on",
  "24/7 monitoring and incident response",
  "Infrastructure as Code — everything versioned and reproducible",
  "We've run production workloads on free tier (we know cost optimization)",
];

export default function CloudDevOpsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero + Features ── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
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

              {/* Label + Heading */}
              <FadeIn className="mb-12 md:mb-16">
                <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
                  {"// Cloud & DevOps"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Ship Faster, Scale{" "}
                  <span className="text-primary">Smarter</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  We build cloud infrastructure and DevOps pipelines that let
                  your team focus on building products — not fighting servers.
                </p>
              </FadeIn>

              {/* Features Grid */}
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20">
                {features.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <div className="group relative flex flex-col h-full p-6 md:p-8 bg-background border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(11,148,68,0.15)]">
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        {/* Background icon */}
                        <feature.icon className="absolute -bottom-2 -right-2 h-16 w-16 text-primary/50 group-hover:text-primary/80 transition-colors" />

                        <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Tech Stack */}
              <FadeIn className="mb-20">
                <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
                  {"// Tech Stack"}
                </span>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Battle-Tested <span className="text-primary">Tools</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                  We use industry-standard tools that your team already knows or
                  can easily adopt. No vendor lock-in, no proprietary magic.
                </p>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-background border border-border rounded-full text-xs font-mono hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeIn>

              {/* Why Us */}
              <FadeIn className="mb-20">
                <div className="bg-background border border-border rounded-2xl p-8 max-w-2xl">
                  <h3 className="text-xl font-semibold mb-6">
                    Why Workrush for Cloud?
                  </h3>
                  <ul className="space-y-4">
                    {whyUs.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Process Steps */}
              <FadeIn className="mb-16">
                <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
                  {"// Process"}
                </span>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  From Chaos to <span className="text-primary">Clarity</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Whether you&apos;re migrating to the cloud or optimizing what
                  you have, we follow a structured approach.
                </p>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20">
                {processSteps.map((step) => (
                  <StaggerItem key={step.title}>
                    <div className="p-6 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors">
                      <div className="inline-flex h-12 w-12 rounded-full bg-primary items-center justify-center text-sm font-mono text-primary-foreground mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-base font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* CTA */}
              <FadeIn>
                <div className="text-center md:text-left">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">
                    Ready to Fix Your Infrastructure?
                  </h2>
                  <p className="text-base text-muted-foreground max-w-2xl mb-8">
                    Let&apos;s audit your setup and build infrastructure that
                    actually works.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="px-8 py-6 h-auto"
                  >
                    <Link href="/contact">
                      Get a Free Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
