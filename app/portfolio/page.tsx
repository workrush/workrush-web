import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore our portfolio of successful projects. From mobile apps to web platforms, see how we've helped businesses achieve their digital goals.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Our Portfolio | Workrush",
    description:
      "See our work: mobile apps, web applications, and digital solutions that drive results.",
  },
};

const projects = [
  {
    title: "FinanceFlow",
    category: "Mobile App",
    description:
      "A personal finance management app with budgeting, expense tracking, and investment insights.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    image: "/images/portfolio/placeholder.png",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "EcoMarket",
    category: "E-commerce Platform",
    description:
      "Sustainable marketplace connecting eco-conscious consumers with green product sellers.",
    techStack: ["Next.js", "Stripe", "MongoDB", "Vercel"],
    image: "/images/portfolio/placeholder.png",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "HealthConnect",
    category: "Healthcare App",
    description:
      "Telemedicine platform enabling virtual consultations and health record management.",
    techStack: ["Flutter", "Firebase", "Node.js", "WebRTC"],
    image: "/images/portfolio/placeholder.png",
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    title: "LearnPro Academy",
    category: "EdTech Platform",
    description:
      "Online learning platform with live classes, course management, and progress tracking.",
    techStack: ["React", "Python", "PostgreSQL", "Docker"],
    image: "/images/portfolio/placeholder.png",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "CryptoVault",
    category: "Web3 Application",
    description:
      "Decentralized portfolio tracker and DeFi aggregator for cryptocurrency investors.",
    techStack: ["Next.js", "Solidity", "Ethereum", "The Graph"],
    image: "/images/portfolio/placeholder.png",
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    title: "FoodieExpress",
    category: "Delivery App",
    description:
      "Food delivery platform with real-time tracking, restaurant management, and driver app.",
    techStack: ["React Native", "Node.js", "Redis", "Google Maps"],
    image: "/images/portfolio/placeholder.png",
    color: "from-orange-500/20 to-red-500/20",
  },
];

const categories = [
  "All",
  "Mobile App",
  "Web Application",
  "E-commerce",
  "Web3",
  "Healthcare",
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Our Portfolio"
          title="Projects That Speak for Themselves"
          description="Explore our diverse portfolio of successful projects across industries. Each project represents our commitment to quality and client success."
        />

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <FadeIn className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      category === "All"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary border border-border hover:bg-secondary/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <StaggerItem key={project.title}>
                  <div className="group bg-background border border-border rounded-2xl overflow-hidden h-full flex flex-col">
                    <div
                      className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}
                    >
                      <span className="text-4xl font-bold text-foreground/20">
                        {project.title
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-sm text-primary font-medium mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                        View Case Study
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <FadeIn className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Results That Matter
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Our work has helped clients achieve significant business outcomes.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: "$10M+", label: "Revenue Generated" },
                { value: "500K+", label: "App Downloads" },
                { value: "2M+", label: "Users Served" },
                { value: "50+", label: "Projects Completed" },
              ].map((stat) => (
                <StaggerItem key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-mono font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-card">
          <div className="container text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Let&apos;s discuss how we can help you achieve similar results for your
                business.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/contact">
                  Start Your Project
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
