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
  Check,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

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
    step: 1,
    title: "Requirements",
    description: "Deep dive into your business needs and technical requirements.",
  },
  {
    step: 2,
    title: "Architecture",
    description: "Design scalable system architecture and tech stack selection.",
  },
  {
    step: 3,
    title: "Development",
    description: "Agile sprints with continuous integration and deployment.",
  },
  {
    step: 4,
    title: "Testing",
    description: "Unit tests, integration tests, and end-to-end testing.",
  },
  {
    step: 5,
    title: "Deployment",
    description: "Production deployment with monitoring and alerting.",
  },
  {
    step: 6,
    title: "Maintenance",
    description: "Ongoing support, updates, and performance optimization.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Web Development"
          title="Build Scalable Web Applications"
          description="From startups to enterprises, we create high-performance web applications that grow with your business. Modern tech stack, best practices, and scalable architecture."
        />

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Full-Stack Web Development
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end web development services from frontend to backend, database to
                deployment.
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
                  Technologies
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Modern Tech Stack
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We use industry-leading technologies to build fast, secure, and
                  maintainable web applications.
                </p>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-secondary border border-border rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Expert team with 5+ years experience",
                      "Clean, maintainable code architecture",
                      "Performance-optimized from day one",
                      "SEO-friendly development practices",
                      "Comprehensive testing coverage",
                      "24/7 monitoring and support",
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
                Development Workflow
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Agile development methodology ensuring transparency and quality at every
                stage.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step) => (
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
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Let&apos;s build something great together. Get in touch for a free
                consultation.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/contact">
                  Get a Free Quote
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
