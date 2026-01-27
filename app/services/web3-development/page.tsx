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
  Check,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

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

const useCases = [
  "Token Creation",
  "DEX Development",
  "Lending Protocols",
  "NFT Marketplaces",
  "DAO Platforms",
  "Staking Solutions",
  "Bridge Development",
  "GameFi Projects",
];

const process = [
  {
    step: 1,
    title: "Consultation",
    description: "Understand your Web3 vision, use case, and tokenomics.",
  },
  {
    step: 2,
    title: "Architecture",
    description: "Design smart contract architecture and system design.",
  },
  {
    step: 3,
    title: "Development",
    description: "Build smart contracts and frontend with best practices.",
  },
  {
    step: 4,
    title: "Testing",
    description: "Extensive testing on testnets with edge case coverage.",
  },
  {
    step: 5,
    title: "Audit",
    description: "Security audit and vulnerability assessment.",
  },
  {
    step: 6,
    title: "Deployment",
    description: "Mainnet deployment with monitoring and documentation.",
  },
];

export default function Web3DevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Web3 Development"
          title="Build the Decentralized Future"
          description="From smart contracts to full-stack dApps, we help you navigate the Web3 landscape and build secure, scalable blockchain solutions."
        />

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                End-to-End Web3 Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive blockchain development services from smart contracts to
                user-facing applications.
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
                  Blockchain Tech Stack
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We work with leading blockchain platforms and tools to deliver secure,
                  efficient Web3 solutions.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-secondary border border-border rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
                <div className="flex flex-wrap gap-2">
                  {useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Deep expertise in Solidity and Rust",
                      "Security-first development approach",
                      "Experience with major DeFi protocols",
                      "Gas-optimized smart contracts",
                      "Comprehensive documentation",
                      "Post-launch support and upgrades",
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
                Web3 Development Pipeline
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A rigorous process that ensures security, reliability, and success for your
                Web3 project.
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
                Ready to Build on Web3?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Let&apos;s discuss your blockchain project and bring your decentralized
                vision to life.
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
