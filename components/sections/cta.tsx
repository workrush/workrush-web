"use client";

import Link from "next/link";
import { ArrowRight, Check, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/motion";

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container text-center">
        <FadeIn>
          <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
            {"// Let's Connect"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Build Something <span className="text-primary">Great?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Get a custom quote in under 5 minutes. Let&apos;s turn your idea into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto font-semibold"
            >
              <a href="https://cal.eu/workrush" target="_blank" rel="noopener noreferrer">
                <CalendarDays className="mr-2 h-5 w-5" />
                Book a Meeting
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-foreground hover:bg-white/[0.06] text-lg px-8 py-6 h-auto bg-transparent"
            >
              <Link href="/contact">
                Get Your Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              Free Consultation
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              No Hidden Costs
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              24/7 Support
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
