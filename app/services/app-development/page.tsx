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
    step: "01",
    title: "Discovery",
    description: "We understand your vision, target audience, and business goals.",
  },
  {
    step: "02",
    title: "Design",
    description: "UI/UX design with interactive prototypes for your approval.",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with regular updates and milestone reviews.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Comprehensive QA testing across devices and scenarios.",
  },
  {
    step: "05",
    title: "Launch",
    description: "App Store and Play Store submission with optimization.",
  },
  {
    step: "06",
    title: "Support",
    description: "Ongoing maintenance, updates, and feature enhancements.",
  },
];

export default function AppDevelopmentPage() {
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
                  {"// App Development"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                  Build Apps Users <span className="text-primary">Love</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
                  From concept to App Store, we create native and cross-platform mobile
                  applications that deliver exceptional user experiences and drive business
                  growth.
                </p>
              </FadeIn>

              {/* 2. What We Offer */}
              <div className="mt-14">
                <FadeIn>
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">
                    {"// What We Offer"}
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
                    Ready to Build?
                  </h2>
                  <p className="text-muted-foreground mb-6 text-base">
                    Let&apos;s discuss your project and create something amazing together.
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Get Started
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
