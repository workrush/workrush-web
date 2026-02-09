import { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  BrainCircuit,
  Cloud,
  Rocket,
  Gamepad2,
  Blocks,
  Palette,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Workrush's comprehensive digital services including app development, web development, website designing, game development, digital marketing, and Web3 solutions.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Workrush",
    description:
      "From mobile apps to blockchain solutions, we offer end-to-end digital services to transform your business.",
  },
};

const services = [
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. From concept to App Store, we build apps that users love.",
    icon: Smartphone,
    href: "/services/app-development",
    features: ["iOS & Android", "Flutter & React Native", "App Store Optimization"],
  },
  {
    title: "Web Development",
    description:
      "Scalable web applications with modern frameworks. React, Next.js, Node.js and more for enterprise-grade solutions.",
    icon: Globe,
    href: "/services/web-development",
    features: ["React & Next.js", "Node.js & APIs", "Cloud Deployment"],
  },
  {
    title: "AI & ML Solutions",
    description:
      "Custom chatbots, AI agents, RAG systems, and LLM integrations that automate workflows and scale your business.",
    icon: BrainCircuit,
    href: "/services/ai-ml-solutions",
    features: ["Chatbots & AI Agents", "LLM Integration", "RAG Systems"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure, CI/CD pipelines, and DevOps automation. Ship faster, scale smarter.",
    icon: Cloud,
    href: "/services/cloud-devops",
    features: ["AWS, GCP & Azure", "Docker & Kubernetes", "CI/CD Pipelines"],
  },
  {
    title: "SaaS Development",
    description:
      "End-to-end SaaS products with multi-tenancy, billing, auth, and dashboards. From MVP to MRR.",
    icon: Rocket,
    href: "/services/saas-development",
    features: ["Multi-Tenant Architecture", "Subscription Billing", "MVP in 6-8 Weeks"],
  },
  {
    title: "Game Development",
    description:
      "Engaging games for mobile, desktop, and web. Unity, Unreal, and custom engines for immersive experiences.",
    icon: Gamepad2,
    href: "/services/game-development",
    features: ["Unity & Unreal", "Mobile Games", "3D & 2D Games"],
  },
  {
    title: "Web3 Development",
    description:
      "Blockchain, smart contracts, DeFi, and NFT solutions for the decentralized web and future of finance.",
    icon: Blocks,
    href: "/services/web3-development",
    features: ["Smart Contracts", "DeFi & NFTs", "Blockchain Integration"],
  },
  {
    title: "Website Designing",
    description:
      "Stunning UI/UX designs that convert. From wireframes to production-ready designs that delight users.",
    icon: Palette,
    href: "/services/website-designing",
    features: ["UI/UX Design", "Figma Prototypes", "Responsive Design"],
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, PPC, social media, and content marketing to grow your online presence and drive conversions.",
    icon: TrendingUp,
    href: "/services/digital-marketing",
    features: ["SEO & SEM", "Social Media", "Content Strategy"],
  },
];

export default function ServicesPage() {
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
                  {"// Services"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  What We <span className="text-primary">Build</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  End-to-end digital services to transform your ideas into
                  successful products. From concept to launch and beyond.
                </p>
              </FadeIn>

              {/* Services Grid */}
              <FadeIn delay={0.1}>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <StaggerItem key={service.title}>
                      <Link
                        href={service.href}
                        className="group relative overflow-hidden block p-5 border border-border rounded-xl hover:border-primary/50 transition-all h-full"
                      >
                        {/* Background icon */}
                        <service.icon className="absolute -bottom-2 -right-2 h-16 w-16 text-primary/50 group-hover:text-primary/80 transition-colors" />

                        <div className="relative">
                          <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {service.features.map((feature) => (
                              <span
                                key={feature}
                                className="text-xs font-mono text-primary"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                            Learn more
                            <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
