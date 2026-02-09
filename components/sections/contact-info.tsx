"use client";

import { Mail, Phone, MapPin, Clock, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/motion";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "Drop us a line anytime",
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
    description: "Mon-Fri, 9am-6pm GMT",
  },
  {
    icon: MapPin,
    label: "Office",
    value: siteConfig.contact.address,
    href: null,
    description: siteConfig.contact.location,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
    description: "We get back fast",
  },
];

export function ContactInfo() {
  const emailSubject = encodeURIComponent("Project Inquiry from Website");
  const emailBody = encodeURIComponent(
    `Hi Workrush Team,\n\nI'm interested in discussing a project with you.\n\nProject Type: \nBudget Range: \nTimeline: \n\nBest regards`
  );

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container relative">
        {/* Terminal-style border */}
        <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
          {/* Fading bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          {/* Corner markers */}
          <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
          <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>

          {/* Header */}
          <FadeIn className="mb-10 md:mb-14">
            <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
              {"// Contact"}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let&apos;s Build Something{" "}
              <span className="text-primary">Great</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Ready to transform your ideas into reality? Drop us a message
              and let&apos;s discuss how we can help you scale.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.1} className="mb-10 md:mb-14">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-base px-6 py-5 h-auto"
              >
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=${emailSubject}&body=${emailBody}`}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Us an Email
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-primary/10 hover:border-primary/50 text-base px-6 py-5 h-auto"
              >
                <a href={`tel:${siteConfig.contact.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </FadeIn>

          {/* Contact Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactMethods.map((method) => {
              const content = (
                <div className="group relative overflow-hidden p-5 border border-border rounded-xl hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Background icon */}
                  <method.icon className="absolute -bottom-2 -right-2 h-16 w-16 text-primary/50 group-hover:text-primary/80 transition-colors" />
                  <div className="relative">
                    <div className="text-xs font-mono text-muted-foreground mb-1 uppercase tracking-wider">
                      {method.label}
                    </div>
                    <div className="text-sm font-medium text-foreground break-all">
                      {method.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5">
                      {method.description}
                    </div>
                  </div>
                </div>
              );

              return (
                <StaggerItem key={method.label}>
                  {method.href ? (
                    <a href={method.href} className="block h-full">{content}</a>
                  ) : (
                    content
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
