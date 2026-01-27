import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bell, Mail } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tutorials, and industry updates from the Workrush team. Stay updated with the latest in technology, design, and digital marketing.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Workrush",
    description:
      "Tech insights, tutorials, and industry updates from our expert team.",
  },
};

const upcomingTopics = [
  {
    title: "The Future of Web Development",
    description: "Exploring emerging trends in React, Next.js, and beyond.",
    category: "Technology",
  },
  {
    title: "Mobile App Design Best Practices",
    description: "Creating user experiences that delight and convert.",
    category: "Design",
  },
  {
    title: "SEO Strategies for 2024",
    description: "Data-driven approaches to improve your search rankings.",
    category: "Marketing",
  },
  {
    title: "Introduction to Web3 Development",
    description: "Getting started with blockchain and smart contracts.",
    category: "Web3",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Blog"
          title="Insights & Updates"
          description="Stay informed with the latest trends, tutorials, and industry insights from our team of experts."
        />

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <FadeIn className="max-w-2xl mx-auto text-center">
              <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Bell className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Coming Soon</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We&apos;re working hard to bring you valuable content. Our blog will
                feature in-depth articles on technology, design, marketing, and industry
                trends.
              </p>

              <div className="bg-background border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Get Notified When We Launch
                </h3>
                <p className="text-muted-foreground mb-6">
                  Be the first to know when we publish new content. No spam, just valuable
                  insights.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                    />
                  </div>
                  <Button type="submit">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                What to Expect
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Upcoming Topics
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here&apos;s a preview of the content we&apos;re preparing for you.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {upcomingTopics.map((topic) => (
                <StaggerItem key={topic.title}>
                  <div className="p-6 bg-card border border-border rounded-xl">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                      {topic.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                    <p className="text-muted-foreground">{topic.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-card">
          <div className="container text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Have a Topic Suggestion?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                We&apos;d love to hear what topics you&apos;re interested in. Reach out
                and let us know!
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
