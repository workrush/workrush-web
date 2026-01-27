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
  Check,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

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

const services = [
  "Keyword Research",
  "On-Page SEO",
  "Technical SEO",
  "Link Building",
  "Google Ads",
  "Facebook Ads",
  "Instagram Marketing",
  "LinkedIn Marketing",
  "Content Strategy",
  "Blog Writing",
  "Video Marketing",
  "Conversion Optimization",
];

const process = [
  {
    step: 1,
    title: "Audit",
    description: "Comprehensive analysis of your current digital presence and competitors.",
  },
  {
    step: 2,
    title: "Strategy",
    description: "Custom marketing strategy aligned with your business goals.",
  },
  {
    step: 3,
    title: "Implementation",
    description: "Execute campaigns across chosen channels and platforms.",
  },
  {
    step: 4,
    title: "Optimization",
    description: "Continuous testing and refinement for better results.",
  },
  {
    step: 5,
    title: "Reporting",
    description: "Regular performance reports with actionable insights.",
  },
  {
    step: 6,
    title: "Scale",
    description: "Expand successful campaigns and explore new opportunities.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Digital Marketing"
          title="Grow Your Online Presence"
          description="Data-driven digital marketing strategies that increase visibility, drive traffic, and convert visitors into loyal customers."
        />

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Full-Funnel Marketing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From awareness to conversion, we cover every stage of the customer journey.
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
                  Our Services
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Comprehensive Marketing Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We offer a full suite of digital marketing services tailored to your
                  business needs and goals.
                </p>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="px-4 py-2 bg-secondary border border-border rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Proven track record of ROI improvement",
                      "Certified Google and Meta partners",
                      "Transparent reporting and communication",
                      "No long-term contracts required",
                      "Dedicated account manager",
                      "Industry-specific expertise",
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
                Marketing Workflow
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to digital marketing that delivers measurable results.
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
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Let&apos;s create a marketing strategy that drives real results for your
                business.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/contact">
                  Get a Free Audit
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
