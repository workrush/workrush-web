import { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Apple,
  Layers,
  Zap,
  Shield,
  BarChart3,
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
  title: "App Development Services",
  description:
    "Professional mobile app development for iOS and Android. We build native and cross-platform apps using Flutter, React Native, Swift, and Kotlin.",
  alternates: {
    canonical: "/services/app-development",
  },
  openGraph: {
    title: "App Development Services | Workrush",
    description:
      "Transform your idea into a powerful mobile app. Native iOS, Android, and cross-platform development.",
  },
};

const features = [
  {
    title: "iOS Development",
    description:
      "Native iOS apps built with Swift and SwiftUI for optimal performance on iPhone and iPad.",
    icon: Apple,
  },
  {
    title: "Android Development",
    description:
      "Native Android apps using Kotlin and Jetpack Compose for the full Android ecosystem.",
    icon: Smartphone,
  },
  {
    title: "Cross-Platform",
    description:
      "Flutter and React Native apps that run beautifully on both iOS and Android from a single codebase.",
    icon: Layers,
  },
  {
    title: "High Performance",
    description:
      "Optimized apps with smooth animations, fast load times, and efficient battery usage.",
    icon: Zap,
  },
  {
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with encrypted data storage and secure API communications.",
    icon: Shield,
  },
  {
    title: "Analytics Built-in",
    description:
      "Integrated analytics to track user behavior, app performance, and business metrics.",
    icon: BarChart3,
  },
];

const techStack = [
  "Swift",
  "SwiftUI",
  "Kotlin",
  "Jetpack Compose",
  "Flutter",
  "React Native",
  "Firebase",
  "AWS Amplify",
];

const process = [
  {
    step: 1,
    title: "Discovery",
    description: "We understand your vision, target audience, and business goals.",
  },
  {
    step: 2,
    title: "Design",
    description: "UI/UX design with interactive prototypes for your approval.",
  },
  {
    step: 3,
    title: "Development",
    description: "Agile development with regular updates and milestone reviews.",
  },
  {
    step: 4,
    title: "Testing",
    description: "Comprehensive QA testing across devices and scenarios.",
  },
  {
    step: 5,
    title: "Launch",
    description: "App Store and Play Store submission with optimization.",
  },
  {
    step: 6,
    title: "Support",
    description: "Ongoing maintenance, updates, and feature enhancements.",
  },
];

export default function AppDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Mobile App Development"
          title="Build Apps Users Love"
          description="From concept to App Store, we create native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth."
        />

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Full-Spectrum App Development
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you need a native iOS app, Android app, or cross-platform solution,
                we have the expertise to deliver.
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
                  We use the latest technologies and frameworks to build fast, scalable,
                  and maintainable mobile applications.
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
                      "5+ years of mobile development experience",
                      "50+ apps launched on App Store & Play Store",
                      "Dedicated team for each project",
                      "Transparent pricing with no hidden costs",
                      "Post-launch support and maintenance",
                      "Regular progress updates and demos",
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
                From Idea to Launch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures your app is delivered on time and exceeds
                expectations.
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
                Ready to Build Your App?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Let&apos;s discuss your project and create something amazing together.
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
