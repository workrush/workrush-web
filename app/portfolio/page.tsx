import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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
    title: "G10 Buddy",
    client: "G10 Assist",
    image: "/images/g10-buddy.png",
  },
  {
    title: "Footbus",
    client: "Footbus",
    image: "/images/footbus.png",
  },
  {
    title: "LiveHappy",
    client: "LiveHappy",
    image: "/images/live-happy.png",
  },
  {
    title: "MOD",
    client: "Ministry of Defence",
    image: "/images/mod.png",
  },
  {
    title: "Trispy",
    client: "Unknown",
    image: "/images/trispy.png",
  },
];

export default function PortfolioPage() {
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
              <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">
                +
              </div>
              <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">
                +
              </div>

              {/* Heading */}
              <FadeIn>
                <span className="text-sm font-mono text-primary uppercase tracking-wider">
                  {"// Portfolio"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                  Projects That{" "}
                  <span className="text-primary">Deliver</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mb-12 md:mb-16">
                  A selection of real projects we have built for our clients.
                  Each one crafted with care, shipped on time, and built to last.
                </p>
              </FadeIn>

              {/* Projects Grid */}
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <StaggerItem key={project.title}>
                    <div className="border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all group">
                      <div className="aspect-video relative rounded-xl overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-base font-bold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-muted-foreground mt-1">
                          {project.client}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Bottom note */}
              <FadeIn delay={0.4}>
                <p className="text-sm text-muted-foreground text-center mt-12 md:mt-16 font-mono">
                  More projects coming soon. Check back for detailed case studies.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
