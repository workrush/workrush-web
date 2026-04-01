import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

const basePath = "";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore our portfolio of 150+ successful projects. From mobile apps to web platforms, see how we've helped businesses achieve their digital goals.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Our Portfolio | Workrush",
    description: "See our work: mobile apps, web applications, and digital solutions that drive results.",
  },
};

interface CaseStudy {
  title: string;
  client: string;
  category: string;
  tags: string[];
  description: string;
  image?: string;
  url?: string;
  problem?: string;
  solution?: string;
  whatWeBuilt: string[];
  tech: string[];
  performance?: { value: string; label: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Footbus",
    client: "Footbus",
    category: "Mobile App",
    tags: ["iOS", "Android", "Community"],
    description: "A social fitness app for coordinating group walks, runs, and rides — with live tracking, in-route messaging, and community tools built in.",
    image: `${basePath}/images/footbus.png`,
    url: "https://footbus.com",
    problem: "Getting groups of people to exercise together is hard. Existing apps lacked the coordination layer — no shared routes, no group messaging, no live visibility into who's where.",
    solution: "Built a real-time group activity platform with live GPS tracking, push-based messaging during routes, and a community layer for organising recurring events.",
    whatWeBuilt: [
      "Native iOS and Android apps with real-time location sharing during group activities",
      "In-route messaging so participants can communicate without leaving the app",
      "Route planning and history tracking for groups",
      "Community features: groups, events, member profiles",
      "Push notification system for activity invites and updates",
    ],
    tech: ["React Native", "Node.js", "Google Maps API", "Firebase", "PostgreSQL"],
    performance: [
      { value: "< 1s", label: "Location sync latency" },
      { value: "4.8★", label: "App Store rating" },
    ],
  },
  {
    title: "Papa Johns UK",
    client: "Papa Johns",
    category: "E-commerce Platform",
    tags: ["Web", "iOS", "Android", "Loyalty"],
    description: "End-to-end ordering platform for 450+ UK stores — handling millions in transactions with loyalty rewards, live delivery tracking, and multi-store management.",
    image: `${basePath}/images/papa-johns.svg`,
    url: "https://papajohns.co.uk",
    problem: "A national franchise with 450+ locations needed a unified digital ordering system that could handle peak load, support store-level customisation, and integrate with existing POS infrastructure.",
    solution: "Delivered a scalable multi-tenant ordering platform with a loyalty programme, real-time delivery tracking, and a back-office for franchise operators — across web and mobile.",
    whatWeBuilt: [
      "Customer-facing web ordering platform and iOS/Android apps",
      "Loyalty rewards system with points, vouchers, and tier management",
      "Live delivery tracking integrated with rider network",
      "Franchise back-office for menu, pricing, and availability management",
      "POS integration layer for 450+ store locations",
      "Payment processing with Stripe and Apple/Google Pay support",
    ],
    tech: ["Next.js", "React Native", "Node.js", "Stripe", "PostgreSQL", "Redis"],
    performance: [
      { value: "450+", label: "Stores integrated" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
  },
  {
    title: "LiveHappy",
    client: "LiveHappy",
    category: "Wellness App",
    tags: ["iOS", "Android", "Marketplace"],
    description: "A wellness and ecotourism marketplace connecting users with curated outdoor experiences, with real-time location tracking and QR-based access control.",
    image: `${basePath}/images/live-happy.png`,
    url: "https://live-happy.app/",
    problem: "Wellness tourism is fragmented — users had no single place to discover, book, and access curated outdoor experiences with built-in safety features.",
    solution: "Built a mobile-first marketplace with verified experience listings, location-aware discovery, QR code check-in, and in-app communication between guests and hosts.",
    whatWeBuilt: [
      "iOS and Android apps with map-based experience discovery",
      "Host and guest portals for listing and booking management",
      "QR code access control for experience check-ins",
      "Real-time location tracking for outdoor activity safety",
      "Integrated payment and refund flows",
      "Review and rating system for experiences",
    ],
    tech: ["Flutter", "Firebase", "Google Maps", "Stripe", "Node.js"],
  },
  {
    title: "Rifles Gym",
    client: "Ministry of Defence",
    category: "Defence Tech",
    tags: ["iOS", "Android", "Web", "GovTech"],
    description: "A fitness scheduling and progress monitoring system built for the Ministry of Defence — tracking training across military personnel with role-based access.",
    image: `${basePath}/images/mod.png`,
    url: "https://riflesgym.co.uk",
    problem: "Military fitness programmes needed a digital backbone — class booking, attendance tracking, and personal progress monitoring — without relying on paper logs or generic consumer apps.",
    solution: "Delivered a purpose-built platform with role-based access for instructors and personnel, class scheduling, live attendance, and a progress dashboard compliant with MoD data requirements.",
    whatWeBuilt: [
      "iOS and Android apps for personnel to book classes and log training",
      "Instructor web portal for scheduling, attendance, and performance tracking",
      "Role-based access control for different ranks and roles",
      "Personal progress dashboards with historical training data",
      "Offline-capable mobile app for low-connectivity environments",
    ],
    tech: ["React Native", "React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "DeliverYou",
    client: "DeliverYou Ltd",
    category: "Delivery Platform",
    tags: ["Web", "iOS", "Android", "Logistics"],
    description: "A hyperlocal food delivery ecosystem for Jersey — connecting customers, restaurants, and riders in real time with full dispatch and tracking infrastructure.",
    image: `${basePath}/images/deliveryou.png`,
    url: "https://deliveryou.je",
    problem: "Jersey had no local food delivery platform — residents relied on national platforms with poor coverage, high fees, and no support for local restaurants.",
    solution: "Built a full three-sided marketplace: customer app, restaurant portal, and rider dispatch system — all integrated with live tracking and local payment methods.",
    whatWeBuilt: [
      "Customer-facing iOS and Android apps with live order tracking",
      "Restaurant portal for menu management, order acceptance, and reporting",
      "Rider app with route optimisation and earnings dashboard",
      "Dispatch engine for automated order assignment",
      "Admin panel for platform operations and analytics",
    ],
    tech: ["React Native", "Next.js", "Node.js", "PostgreSQL", "Google Maps", "Stripe"],
    performance: [
      { value: "< 30min", label: "Avg. delivery time" },
      { value: "3x", label: "Sides of marketplace" },
    ],
  },
  {
    title: "SFS Group",
    client: "SFS Group AG",
    category: "Enterprise Platform",
    tags: ["Web", "B2B", "Enterprise", "Multinational"],
    description: "A global B2B digital platform for a Swiss multinational with 13,200+ employees across 35 countries — product catalogues, distributor tools, and enterprise operations.",
    image: `${basePath}/images/sfs.svg`,
    url: "https://sfs.com",
    problem: "SFS Group needed a unified digital presence and B2B tooling that could scale across 35 countries, multiple languages, and complex product catalogues.",
    solution: "Engineered a multi-region, multi-language corporate platform with advanced product search, distributor portals, and integration with their ERP systems.",
    whatWeBuilt: [
      "Multi-language, multi-region corporate website with CMS",
      "Product catalogue with advanced filtering and CAD file downloads",
      "Distributor and partner portal with order management",
      "ERP integration for real-time stock and pricing data",
      "Enterprise search with full-text and faceted filtering",
    ],
    tech: ["Next.js", "TypeScript", "Contentful", "Elasticsearch", "SAP Integration", "Azure"],
    performance: [
      { value: "35", label: "Countries served" },
      { value: "13,200+", label: "Employees" },
    ],
  },
  {
    title: "G10 Assist",
    client: "G10 Assist",
    category: "Services Marketplace",
    tags: ["iOS", "Android", "Marketplace", "Gig Economy"],
    description: "A two-sided marketplace connecting homeowners with verified service professionals — background-checked providers, real-time booking, and in-app job management.",
    image: `${basePath}/images/g10-buddy.png`,
    url: "https://g10assist.com",
    problem: "Finding reliable tradespeople for home tasks is frustrating — no trust signals, no transparency on pricing, and no way to manage jobs digitally.",
    solution: "Built a marketplace with verified provider onboarding, transparent pricing, in-app booking, and a job management layer for both customers and service providers.",
    whatWeBuilt: [
      "Customer app for discovering and booking verified service providers",
      "Provider app for managing availability, jobs, and earnings",
      "Background check and verification onboarding flow",
      "In-app messaging and job status tracking",
      "Review and dispute resolution system",
      "Admin panel for provider vetting and platform moderation",
    ],
    tech: ["React Native", "Node.js", "PostgreSQL", "Stripe Connect", "Firebase"],
  },
  {
    title: "DroneOn",
    client: "DroneOn",
    category: "Media Platform",
    tags: ["Web", "Booking", "Aerial Media"],
    description: "A professional drone services booking platform — connecting clients with CAA-licensed pilots for real estate, events, and marketing aerial footage.",
    image: `${basePath}/images/droneon.png`,
    url: "https://drone-on.uk",
    whatWeBuilt: [
      "Service booking platform with availability calendar and location-based pilot matching",
      "Pilot profile pages with portfolio, certifications, and reviews",
      "Secure payment with milestone-based release for projects",
      "Media delivery portal for sharing footage with clients",
      "Admin dashboard for operations and pilot onboarding",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS S3"],
  },
  {
    title: "Strength Factory",
    client: "Strength Factory",
    category: "Fitness Platform",
    tags: ["Web", "App", "Coaching"],
    description: "A digital fitness platform with app-based training programmes, online coaching, and live class scheduling for a UK-based gym brand.",
    image: `${basePath}/images/strength-factory.png`,
    url: "https://strengthfactory.co.uk",
    whatWeBuilt: [
      "Branded website with class timetable and membership sign-up",
      "Training programme builder for coaches to create and assign programmes",
      "Member app for following programmes, logging workouts, and tracking progress",
      "Online coaching portal with client communication and check-ins",
      "Payment and membership management integrated with Stripe",
    ],
    tech: ["Next.js", "React Native", "Node.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "CeloApps",
    client: "CeloApps",
    category: "SaaS Platform",
    tags: ["SaaS", "White-label", "Multi-vendor"],
    description: "A white-label SaaS platform offering pre-built mobile and web apps — taxi booking, food delivery, e-commerce, and POS — for rapid business deployment.",
    image: `${basePath}/images/celoapps.svg`,
    url: "https://celoapps.com",
    problem: "Businesses wanting to launch digital products faced high cost and long timelines. CeloApps needed a platform to deliver production-ready apps faster and at lower cost.",
    solution: "Architected a multi-tenant white-label platform with configurable apps across verticals — each deployable in days, not months — with shared infrastructure and brand theming.",
    whatWeBuilt: [
      "Multi-tenant SaaS infrastructure with per-client branding and configuration",
      "White-label taxi booking app (driver + passenger sides)",
      "White-label food delivery platform (customer, restaurant, rider)",
      "White-label e-commerce app with product and order management",
      "POS system for in-store retail operations",
      "Client admin panel for app configuration and analytics",
    ],
    tech: ["React Native", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    performance: [
      { value: "4", label: "Verticals supported" },
      { value: "Days", label: "Time to launch" },
    ],
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "12+", label: "Countries" },
  { value: "8+", label: "Years" },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 md:py-28 bg-background">
          <div className="container">

            {/* Page Header */}
            <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-10 md:pb-14 mb-14">
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
              <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>

              <span className="text-sm font-mono text-primary uppercase tracking-wider">{"// Portfolio"}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                What We&apos;ve <span className="text-primary">Built</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-10">
                Real products, shipped and live. Each one crafted with care, built to scale, delivered on time.
              </p>
              <div className="flex flex-wrap gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-mono text-primary">{s.value}</span>
                    <span className="text-sm text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study Cards */}
            <div className="space-y-6">
              {caseStudies.map((study, index) => (
                <div
                  key={study.title}
                  className="group border border-border rounded-xl bg-card overflow-hidden hover:border-primary/40 transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="grid grid-cols-10 border-b border-border">
                    {/* Index column — 2/10 */}
                    <div className="col-span-2 flex flex-col items-center justify-center gap-3 p-5 border-r border-border">
                      <span className="font-mono text-xs font-bold text-primary/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {study.image && (
                        <div className="relative w-full h-12 rounded overflow-hidden border border-border bg-card/80">
                          <Image src={study.image} alt={study.title} fill className="object-contain p-1" />
                        </div>
                      )}
                    </div>

                    {/* Title + meta — 8/10 */}
                    <div className="col-span-8 p-5 md:p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="font-mono text-xs border border-primary/30 rounded-md px-2 py-0.5 text-primary">
                          {study.category}
                        </span>
                        {study.tags.map((tag) => (
                          <span key={tag} className="font-mono text-xs border border-border rounded-md px-2 py-0.5 text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                        {study.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 md:p-8 space-y-8">

                    {/* Problem / Solution */}
                    {(study.problem || study.solution) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {study.problem && (
                          <div>
                            <p className="font-mono text-xs text-primary/70 tracking-wider uppercase mb-3">{"// The Problem"}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{study.problem}</p>
                          </div>
                        )}
                        {study.solution && (
                          <div>
                            <p className="font-mono text-xs text-primary/70 tracking-wider uppercase mb-3">{"// The Solution"}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* What We Built */}
                    <div>
                      <p className="font-mono text-xs text-primary/70 tracking-wider uppercase mb-3">{"// What We Built"}</p>
                      <ul className="space-y-2">
                        {study.whatWeBuilt.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <span className="text-primary shrink-0 mt-0.5 font-mono">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Performance metrics */}
                    {study.performance && study.performance.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {study.performance.map((metric) => (
                          <div key={metric.label} className="border border-border rounded-lg bg-background px-4 py-3 text-center min-w-[110px]">
                            <p className="font-bold text-xl text-primary leading-none mb-1 font-mono">{metric.value}</p>
                            <p className="font-mono text-xs text-muted-foreground leading-tight">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Footer: tech + link */}
                    <div className="border-t border-border pt-5 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {study.tech.map((t) => (
                          <span key={t} className="font-mono text-xs border border-border rounded-md px-2 py-0.5 text-muted-foreground bg-background">
                            {t}
                          </span>
                        ))}
                      </div>
                      {study.url && (
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline shrink-0"
                        >
                          Visit {study.client}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 relative border border-border rounded-2xl p-8 md:p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <span className="text-xs font-mono text-primary/70 uppercase tracking-wider">{"// Next Up"}</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-3">
                Have a project in <span className="text-primary">mind?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                150+ projects delivered. Let&apos;s build something great together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="px-8">
                  <a href="https://cal.eu/workrush" target="_blank" rel="noopener noreferrer">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    Book a Meeting
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
