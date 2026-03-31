import { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  Share2,
  Mail,
  BarChart3,
  Target,
  BrainCircuit,
  Globe,
  FileText,
  Bot,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { BreadcrumbSchema, ServiceSchema } from "@/components/structured-data";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/motion";

export const metadata: Metadata = {
  title: "Digital Marketing & AI Discovery Services",
  description:
    "Comprehensive digital marketing and AI discovery services. SEO, AEO, AI search optimization, PPC, social media, and LLM content strategy to grow your presence everywhere.",
  alternates: {
    canonical: "/services/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing & AI Discovery | Workrush",
    description:
      "Grow your presence across traditional search and AI-powered platforms. SEO, AEO, PPC, and AI search optimization.",
  },
};

const marketingFeatures = [
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

const aiDiscoveryFeatures = [
  {
    title: "Answer Engine Optimization (AEO)",
    description:
      "Optimize your content to appear as direct answers in AI search — ChatGPT, Perplexity, Google AI Overviews, and Copilot.",
    icon: Search,
  },
  {
    title: "AI Search Optimization",
    description:
      "Structure your website so AI crawlers and LLMs can understand, index, and recommend your brand to users.",
    icon: BrainCircuit,
  },
  {
    title: "Brand Presence in AI",
    description:
      "Ensure your brand is accurately represented when users ask AI assistants about your industry or services.",
    icon: Globe,
  },
  {
    title: "LLM Content Strategy",
    description:
      "Create content designed for large language models — structured data, FAQs, knowledge graphs, and authoritative sources.",
    icon: FileText,
  },
  {
    title: "AI Chatbot Visibility",
    description:
      "Get your business recommended by AI chatbots and virtual assistants when users search for solutions you offer.",
    icon: Bot,
  },
  {
    title: "AI Monitoring & Analytics",
    description:
      "Track how your brand appears in AI-generated responses. Monitor mentions, accuracy, and sentiment across AI platforms.",
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
  "Google Search Console",
  "Schema.org Markup",
  "Structured Data",
  "Knowledge Graphs",
  "Entity SEO",
  "NLP Analysis",
  "LLM Testing",
];

const process = [
  {
    step: "01",
    title: "Audit",
    description: "Analyze your digital presence across traditional search and AI platforms.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Custom strategy covering SEO, AEO, paid, social, and AI discoverability.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute campaigns and optimize content for both humans and AI systems.",
  },
  {
    step: "04",
    title: "AI Optimization",
    description: "Structured data, schema markup, and content restructuring for AI consumption.",
  },
  {
    step: "05",
    title: "Monitoring",
    description: "Track performance across Google, AI search engines, and chatbot responses.",
  },
  {
    step: "06",
    title: "Scale",
    description: "Expand across new platforms — traditional and AI-powered — based on results.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
            <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "Digital Marketing", href: "/services/digital-marketing" }]} />
      <ServiceSchema name="Digital Marketing" description="Comprehensive digital marketing including SEO, AEO, AI search optimisation, PPC, social media, and LLM content strategy." url="/services/digital-marketing" />
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
                  {"// Digital Marketing & AI Discovery"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                  Grow Everywhere — <span className="text-primary">Search & AI</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
                  The way people find businesses is changing. We make sure you show up
                  on Google, social media, and the new wave of AI-powered search engines.
                </p>
              </FadeIn>

              {/* 2. Digital Marketing */}
              <div className="mt-14">
                <FadeIn>
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">
                    {"// Digital Marketing"}
                  </span>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                  {marketingFeatures.map((feature) => (
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

              {/* 3. AI Discovery */}
              <div className="mt-14">
                <FadeIn>
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">
                    {"// AI Discovery & AEO"}
                  </span>
                  <p className="text-muted-foreground max-w-2xl text-sm mt-2 mb-6">
                    AI assistants are the new front door. ChatGPT, Perplexity, Google AI — when
                    users ask questions, your brand needs to be the answer.
                  </p>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {aiDiscoveryFeatures.map((feature) => (
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

              {/* 4. Tech Stack */}
              <div className="mt-14">
                <FadeIn>
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">
                    {"// Tools & Tech"}
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

              {/* 5. Process */}
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

              {/* 6. CTA */}
              <div className="mt-14">
                <FadeIn className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Be Found Everywhere?
                  </h2>
                  <p className="text-muted-foreground mb-6 text-base">
                    Let&apos;s make sure your brand shows up — on Google, on social,
                    and when AI answers questions about your industry.
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
