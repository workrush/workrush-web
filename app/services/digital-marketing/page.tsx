import { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  Share2,
  Mail,
  BarChart3,
  Target,
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
  title: "Digital Marketing Services",
  description:
    "Comprehensive digital marketing services including SEO, PPC, social media marketing, content marketing, and email campaigns to grow your online presence.",
  alternates: {
    canonical: "/services/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing Services | Workrush",
    description:
      "Grow your online presence with SEO, PPC, social media, and content marketing strategies.",
  },
};

const features = [
  {
    title: "SEO Optimization",
    description:
      "Improve your search rankings and drive organic traffic with proven SEO strategies.",
    icon: Search,
  },
  {
    title: "PPC Advertising",
    description:
      "Targeted paid campaigns on Google, Facebook, and other platforms for instant visibility.",
    icon: Target,
  },
  {
    title: "Social Media",
    description:
      "Build your brand presence and engage audiences across all social platforms.",
    icon: Share2,
  },
  {
    title: "Content Marketing",
    description:
      "Compelling content that attracts, engages, and converts your target audience.",
    icon: TrendingUp,
  },
  {
    title: "Email Marketing",
    description:
      "Nurture leads and retain customers with personalized email campaigns.",
    icon: Mail,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Data-driven insights and regular reports to measure and optimize performance.",
    icon: BarChart3,
  },
];

const techStack = [
  "Google Analytics",
  "Google Ads",
  "Meta Ads",
  "SEMrush",
  "Ahrefs",
  "Mailchimp",
  "HubSpot",
  "Hootsuite",
  "Canva",
  "Google Search Console",
];

const process = [
  {
    step: "01",
    title: "Audit",
    description: "Comprehensive analysis of your current digital presence and competitors.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Custom marketing strategy aligned with your business goals.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute campaigns across chosen channels and platforms.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous testing and refinement for better results.",
  },
  {
    step: "05",
    title: "Reporting",
    description: "Regular performance reports with actionable insights.",
  },
  {
    step: "06",
    title: "Scale",
    description: "Expand successful campaigns and explore new opportunities.",
  },
];

export default function DigitalMarketingPage() {
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
                  {"// Digital Marketing"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                  Grow Your Online <span className="text-primary">Presence</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
                  Data-driven digital marketing strategies that increase visibility,
                  drive traffic, and convert visitors into loyal customers.
                </p>
              </FadeIn>

              {/* 2. What We Offer */}
              <div className="mt-14">
                <FadeIn>
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">
                    {"// What We Offer"}
                  </span>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                  {features.map((feature) => (
                    <StaggerItem key={feature.title}>
                      <div className="relative overflow-hidden p-5 border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group">
                        <feature.icon className="absolute -bottom-2 -right-2 h-16 w-16 text-primary/50 group-hover:text-primary/80 transition-colors" />
                        <div className="relative">
                          <feature.icon className="h-5 w-5 text-primary mb-3" />
                          <h3 className="text-base font-bold text-foreground mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground font-mono">
                            {feature.description}
                          </p>
                        </div>
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
                        className="text-xs font-mono px-3 py-1.5 border border-border rounded-md text-muted-foreground"
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
                  {process.map((item) => (
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
                    Ready to Grow Your Business?
                  </h2>
                  <p className="text-muted-foreground mb-6 text-base">
                    Let&apos;s create a marketing strategy that drives real results
                    for your business.
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Get a Free Audit
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
