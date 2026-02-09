import { Metadata } from "next";
import Link from "next/link";
import {
  Blocks,
  FileCode,
  Coins,
  Image,
  Wallet,
  Shield,
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
  title: "Web3 Development Services",
  description:
    "Professional Web3 and blockchain development services. Smart contracts, DeFi protocols, NFT platforms, and decentralized applications on Ethereum, Solana, and more.",
  alternates: {
    canonical: "/services/web3-development",
  },
  openGraph: {
    title: "Web3 Development Services | Workrush",
    description:
      "Build the future of the decentralized web. Smart contracts, DeFi, NFTs, and dApps.",
  },
};

const features = [
  {
    title: "Smart Contracts",
    description:
      "Secure, audited smart contracts for Ethereum, BSC, Polygon, and other EVM chains.",
    icon: FileCode,
  },
  {
    title: "DeFi Protocols",
    description:
      "Decentralized exchanges, lending protocols, yield farming, and liquidity solutions.",
    icon: Coins,
  },
  {
    title: "NFT Platforms",
    description:
      "NFT marketplaces, minting platforms, and custom NFT collections with metadata.",
    icon: Image,
  },
  {
    title: "Wallet Integration",
    description:
      "Seamless integration with MetaMask, WalletConnect, and other popular wallets.",
    icon: Wallet,
  },
  {
    title: "Blockchain Integration",
    description:
      "Connect your existing applications with blockchain networks and on-chain data.",
    icon: Blocks,
  },
  {
    title: "Security Audits",
    description:
      "Comprehensive smart contract audits to identify and fix vulnerabilities.",
    icon: Shield,
  },
];

const techStack = [
  "Solidity",
  "Rust",
  "Ethereum",
  "Solana",
  "Polygon",
  "BSC",
  "Hardhat",
  "Foundry",
  "Web3.js",
  "Ethers.js",
  "IPFS",
  "The Graph",
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "Understand your Web3 vision, use case, and tokenomics.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "Design smart contract architecture and system design.",
  },
  {
    step: "03",
    title: "Development",
    description: "Build smart contracts and frontend with best practices.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Extensive testing on testnets with edge case coverage.",
  },
  {
    step: "05",
    title: "Audit",
    description: "Security audit and vulnerability assessment.",
  },
  {
    step: "06",
    title: "Deployment",
    description: "Mainnet deployment with monitoring and documentation.",
  },
];

export default function Web3DevelopmentPage() {
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
                  {"// Web3 Development"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                  Build the <span className="text-primary">Decentralized</span> Future
                </h1>
                <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
                  From smart contracts to full-stack dApps, we help you navigate the
                  Web3 landscape and build secure, scalable blockchain solutions.
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
                    Ready to Build on Web3?
                  </h2>
                  <p className="text-muted-foreground mb-6 text-base">
                    Let&apos;s discuss your blockchain project and bring your
                    decentralized vision to life.
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Start Your Project
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
