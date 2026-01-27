"use client";

import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/motion";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    role: "CEO",
    company: "Wesnapthat",
    content: "Very good service, delivered with quality. The team was professional and responsive throughout the entire project. Would definitely recommend to anyone looking for reliable development partners.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Founder",
    company: "G10 Assist",
    content: "Workrush transformed our idea into a fully functional app in record time. Their expertise in both design and development is exceptional. A true partner for digital transformation.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    role: "CTO",
    company: "BuyClever",
    content: "Outstanding technical capabilities and attention to detail. The team went above and beyond to ensure our platform was scalable and performant. Highly impressed with the results.",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Terminal-style border */}
        <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
          {/* Fading bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          {/* Corner markers */}
          <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
          <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>

          <FadeIn className="mb-12 md:mb-16">
            <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
              {"// Testimonials"}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Real feedback from businesses we&apos;ve helped grow.
            </p>
          </FadeIn>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Main testimonial card */}
            <div
              className="lg:col-span-3 relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10 overflow-hidden">
                {/* Quote decoration */}
                <Quote className="absolute top-6 right-6 h-16 w-16 text-primary/10" />

                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/90">
                      &ldquo;{activeTestimonial.content}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                        <span className="text-primary font-bold text-xl">
                          {activeTestimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{activeTestimonial.name}</div>
                        <div className="text-sm text-muted-foreground font-mono">
                          {activeTestimonial.role} @ {activeTestimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeIndex
                            ? "w-8 bg-primary"
                            : "w-2 bg-border hover:bg-primary/50"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prev}
                      className="h-10 w-10 rounded-full border-border hover:border-primary hover:bg-primary/10"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={next}
                      className="h-10 w-10 rounded-full border-border hover:border-primary hover:bg-primary/10"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Side testimonial previews */}
            <div className="lg:col-span-2 hidden lg:flex flex-col gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary/10 border-primary"
                      : "bg-card/50 border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === activeIndex
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground"
                    }`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className={`font-medium text-sm ${index === activeIndex ? "text-foreground" : "text-muted-foreground"}`}>
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <p className={`text-sm line-clamp-2 ${index === activeIndex ? "text-foreground/80" : "text-muted-foreground"}`}>
                    &ldquo;{testimonial.content.substring(0, 80)}...&rdquo;
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
