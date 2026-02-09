import { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  CreditCard,
  Users,
  BarChart3,
  Lock,
  Rocket,
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
  title: "SaaS Development Services",
  description:
    "End-to-end SaaS product development. From MVP to scale — multi-tenant architecture, billing, auth, dashboards, and everything you need to launch your SaaS.",
  alternates: {
    canonical: "/services/saas-development",
  },
  openGraph: {
    title: "SaaS Development Services | Workrush",
    description:
      "We build SaaS products that scale. Multi-tenant, subscription billing, analytics — the full stack.",
  },
};

const features = [
  {
    title: "Multi-Tenant Architecture",
    description:
      "Isolated or shared database strategies with tenant-aware middleware. Built to handle thousands of organizations from day one.",
    icon: Users,
  },
  {
    title: "Subscription & Billing",
    description:
      "Stripe, Razorpay, or custom billing integrations. Free trials, usage-based pricing, invoicing, and revenue analytics.",
    icon: CreditCard,
  },
  {
    title: "Admin Dashboards",
    description:
      "Real-time dashboards for your users and your ops team. Usage metrics, user management, and business intelligence.",
    icon: LayoutDashboard,
  },
  {
    title: "Auth & Access Control",
    description:
      "SSO, OAuth, role-based access, team management, and API keys. Enterprise-ready authentication out of the box.",
    icon: Lock,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Built-in analytics, custom reports, data export, and webhook integrations so your users get actionable insights.",
    icon: BarChart3,
  },
  {
    title: "MVP to Scale",
    description:
      "Start lean with an MVP, validate with real users, then scale. We architect for growth from the start so you never hit a wall.",
    icon: Rocket,
  },
];

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "Stripe",
  "Razorpay",
  "AWS",
  "Docker",
  "Prisma",
  "Tailwind CSS",
];

const processSteps = [
  {
    step: "01",
    title: "Validate",
    description: "Define your ICP, core value prop, and the minimum feature set to prove the idea.",
  },
  {
    step: "02",
    title: "Architect",
    description: "Design multi-tenant schema, billing model, auth system, and API structure.",
  },
  {
    step: "03",
    title: "Build MVP",
    description: "Ship a working product in 6-8 weeks. Real users, real feedback, real traction.",
  },
  {
    step: "04",
    title: "Iterate",
    description: "Prioritize features based on user feedback and usage data. Ship weekly.",
  },
  {
    step: "05",
    title: "Scale",
    description: "Optimize performance, add enterprise features, and prepare for growth.",
  },
  {
    step: "06",
    title: "Grow",
    description: "Analytics, A/B testing, onboarding optimization, and feature expansion.",
  },
];

export default function SaaSDevelopmentPage() {
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
                  {"// SaaS Development"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                  Build Your SaaS <span className="text-primary">Product</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
                  From idea to MRR — we build production-ready SaaS products with
                  multi-tenancy, billing, auth, and everything you need to start
                  generating revenue.
                </p>
              </FadeIn>

              {/* 2. Features */}
              <div className="mt-14">
                <FadeIn>
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">
                    {"// Capabilities"}
                  </span>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {features.map((feature) => (
                    <StaggerItem key={feature.title}>
                      <div className="border border-border rounded-xl hover:border-primary/50 p-5 overflow-hidden relative group transition-colors">
                        <feature.icon className="absolute -bottom-2 -right-2 h-16 w-16 text-primary/50 group-hover:text-primary/80 transition-colors" />
                        <feature.icon className="h-5 w-5 text-primary mb-3" />
                        <h3 className="text-base font-bold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground font-mono">
                          {feature.description}
                        </p>
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
                        className="px-3 py-1.5 border border-border rounded-md text-xs font-mono text-muted-foreground"
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
                  {processSteps.map((item) => (
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
                    Got a SaaS Idea?
                  </h2>
                  <p className="text-muted-foreground mb-6 text-base">
                    Let&apos;s validate it together and build something people actually pay for.
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Let&apos;s Talk
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
