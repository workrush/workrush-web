import { Metadata } from "next";
import Link from "next/link";
import {
  BrainCircuit,
  Bot,
  MessageSquare,
  Eye,
  Workflow,
  Database,
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
  title: "AI & ML Solutions",
  description:
    "Custom AI solutions for your business. Chatbots, LLM integrations, AI agents, RAG systems, computer vision, and workflow automation powered by cutting-edge AI.",
  alternates: {
    canonical: "/services/ai-ml-solutions",
  },
  openGraph: {
    title: "AI & ML Solutions | Workrush",
    description:
      "Transform your business with custom AI solutions. From chatbots to AI agents, we build intelligent systems that deliver results.",
  },
};

const features = [
  {
    title: "Custom Chatbots & Assistants",
    description:
      "AI-powered chatbots for customer support, sales, and internal operations. Built with GPT, Claude, and open-source LLMs.",
    icon: MessageSquare,
  },
  {
    title: "AI Agents & Automation",
    description:
      "Autonomous agents that handle complex workflows — from data processing to decision-making — without human intervention.",
    icon: Bot,
  },
  {
    title: "RAG Systems",
    description:
      "Retrieval-Augmented Generation systems that let your AI answer questions from your own documents, databases, and knowledge bases.",
    icon: Database,
  },
  {
    title: "LLM Integration",
    description:
      "Integrate GPT-4, Claude, Gemini, Llama, or fine-tuned models into your existing apps and workflows seamlessly.",
    icon: BrainCircuit,
  },
  {
    title: "Computer Vision",
    description:
      "Image recognition, object detection, OCR, and visual inspection systems for manufacturing, retail, and healthcare.",
    icon: Eye,
  },
  {
    title: "Workflow Automation",
    description:
      "AI-powered automation that connects your tools, processes data, and eliminates repetitive tasks across your organization.",
    icon: Workflow,
  },
];

const techStack = [
  "OpenAI / GPT-4",
  "Claude / Anthropic",
  "LangChain",
  "LlamaIndex",
  "Hugging Face",
  "Python",
  "FastAPI",
  "TensorFlow",
  "PyTorch",
  "Pinecone",
  "ChromaDB",
  "n8n",
];

const processSteps = [
  {
    step: "01",
    title: "Assess",
    description: "Identify where AI can deliver the most value in your business operations.",
  },
  {
    step: "02",
    title: "Prototype",
    description: "Build a working proof-of-concept to validate the approach and demonstrate ROI.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Production-grade implementation with proper guardrails, testing, and monitoring.",
  },
  {
    step: "04",
    title: "Integrate",
    description: "Connect the AI system with your existing tools, APIs, and data sources.",
  },
  {
    step: "05",
    title: "Deploy",
    description: "Launch with monitoring, logging, and fallback mechanisms in place.",
  },
  {
    step: "06",
    title: "Optimize",
    description: "Continuous improvement based on real usage data, feedback, and model updates.",
  },
];

export default function AIMLSolutionsPage() {
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
                  {"// AI & ML Solutions"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                  AI That Works <span className="text-primary">For You</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
                  From intelligent chatbots to autonomous agents, we build AI solutions
                  that automate workflows, unlock insights, and give your business a
                  competitive edge.
                </p>
              </FadeIn>

              {/* 2. What We Build */}
              <div className="mt-14">
                <FadeIn>
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">
                    {"// What We Build"}
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
                  {processSteps.map((item) => (
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
                    Ready to Add AI to Your Business?
                  </h2>
                  <p className="text-muted-foreground mb-6 text-base">
                    Let&apos;s explore how AI can automate your workflows and unlock new opportunities.
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Get a Free Consultation
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
