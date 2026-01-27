import { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Palette,
  Gamepad2,
  TrendingUp,
  Blocks,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
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
    title: "Website Designing",
    description:
      "Stunning UI/UX designs that convert. From wireframes to production-ready designs that delight users.",
    icon: Palette,
    href: "/services/website-designing",
    features: ["UI/UX Design", "Figma Prototypes", "Responsive Design"],
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
    title: "Digital Marketing",
    description:
      "SEO, PPC, social media, and content marketing to grow your online presence and drive conversions.",
    icon: TrendingUp,
    href: "/services/digital-marketing",
    features: ["SEO & SEM", "Social Media", "Content Strategy"],
  },
  {
    title: "Web3 Development",
    description:
      "Blockchain, smart contracts, DeFi, and NFT solutions for the decentralized web and future of finance.",
    icon: Blocks,
    href: "/services/web3-development",
    features: ["Smart Contracts", "DeFi & NFTs", "Blockchain Integration"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="What We Do"
          title="End-to-End Digital Solutions"
          description="We deliver comprehensive technology services to transform your ideas into successful digital products. From concept to launch and beyond."
        />

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <Link
                    href={service.href}
                    className="group block p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all h-full"
                  >
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <FadeIn className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                We Build Products That Matter
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                With years of experience and a passion for innovation, we help businesses
                of all sizes achieve their digital goals.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <StaggerItem className="text-center p-8">
                <div className="text-5xl font-mono font-bold text-primary mb-4">50+</div>
                <div className="text-lg font-semibold mb-2">Projects Delivered</div>
                <p className="text-muted-foreground">
                  Successfully launched projects across multiple industries
                </p>
              </StaggerItem>
              <StaggerItem className="text-center p-8">
                <div className="text-5xl font-mono font-bold text-primary mb-4">99%</div>
                <div className="text-lg font-semibold mb-2">Client Satisfaction</div>
                <p className="text-muted-foreground">
                  Our clients love working with us and keep coming back
                </p>
              </StaggerItem>
              <StaggerItem className="text-center p-8">
                <div className="text-5xl font-mono font-bold text-primary mb-4">24/7</div>
                <div className="text-lg font-semibold mb-2">Support Available</div>
                <p className="text-muted-foreground">
                  Round-the-clock support to keep your business running
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
