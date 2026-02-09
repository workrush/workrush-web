import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/effects/motion";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using Workrush services. Please read these terms carefully before engaging our services.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      'By accessing or using the services provided by Workrush ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
  },
  {
    title: "Services",
    content:
      "Workrush provides digital services including but not limited to:",
    list: [
      "Mobile app development",
      "Web development",
      "AI & ML solutions",
      "Cloud & DevOps",
      "SaaS development",
      "Game development",
      "Web3 and blockchain development",
      "Website design",
      "Digital marketing",
    ],
    footer:
      "The specific scope, deliverables, and terms for each project will be detailed in a separate service agreement.",
  },
  {
    title: "Project Agreements",
    content:
      "Each project engagement will be governed by a separate agreement that specifies:",
    list: [
      "Scope of work and deliverables",
      "Timeline and milestones",
      "Pricing and payment terms",
      "Revision policies",
      "Intellectual property rights",
    ],
  },
  {
    title: "Client Responsibilities",
    content: "As a client, you agree to:",
    list: [
      "Provide accurate and complete information",
      "Provide timely feedback and approvals",
      "Supply necessary content, assets, and access credentials",
      "Make payments according to agreed terms",
      "Not use our services for any illegal or unauthorized purpose",
    ],
  },
  {
    title: "Payment Terms",
    content: "Unless otherwise specified in the project agreement:",
    list: [
      "A deposit may be required before work commences",
      "Invoices are due within 14 days of issue",
      "Late payments may incur interest at 2% per month",
      "We reserve the right to pause work on overdue accounts",
    ],
  },
  {
    title: "Intellectual Property",
    content:
      "You retain ownership of all content and materials you provide. Upon full payment, you will own the final deliverables as specified in the project agreement. We may retain the right to use the work in our portfolio unless otherwise agreed. Some deliverables may include third-party components subject to their own licenses.",
  },
  {
    title: "Confidentiality",
    content:
      "We agree to keep confidential any proprietary information you share with us. This obligation does not apply to information that is publicly available or independently developed.",
  },
  {
    title: "Warranties & Disclaimers",
    content: "We will perform our services with reasonable skill and care. However:",
    list: [
      "We do not guarantee specific results, rankings, or outcomes",
      'Services are provided "as is" without warranties of any kind',
      "We are not responsible for third-party services or platforms",
    ],
  },
  {
    title: "Limitation of Liability",
    content:
      "Our liability for any claims arising from our services shall be limited to the amount paid for the specific service giving rise to the claim. We shall not be liable for any indirect, incidental, special, or consequential damages.",
  },
  {
    title: "Termination",
    content: "Either party may terminate a project agreement with written notice. Upon termination:",
    list: [
      "You will pay for all work completed to date",
      "We will deliver all completed work and materials",
      "Any outstanding balances become immediately due",
    ],
  },
  {
    title: "Dispute Resolution",
    content:
      "Any disputes shall first be attempted to be resolved through good-faith negotiation. If unsuccessful, disputes shall be resolved through binding arbitration in accordance with the laws of the United Kingdom.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms of Service shall be governed by and construed in accordance with the laws of the United Kingdom.",
  },
  {
    title: "Changes to Terms",
    content:
      "We reserve the right to modify these terms at any time. Your continued use of our services after changes constitutes acceptance of the new terms.",
  },
  {
    title: "Severability",
    content:
      "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="container relative">
            <div className="relative border-l-2 border-primary pl-6 md:pl-10 pb-8 md:pb-12">
              {/* Fading bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              <div className="absolute -bottom-[5px] -left-[5px] text-primary font-mono text-sm">+</div>
              <div className="absolute -top-[5px] -left-[5px] text-primary font-mono text-sm">+</div>

              <FadeIn>
                <span className="inline-block text-sm font-mono text-primary mb-3 uppercase tracking-wider">
                  {"// Legal"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Terms of <span className="text-primary">Service</span>
                </h1>
                <p className="text-sm font-mono text-muted-foreground mb-12">
                  Last updated: February 2026
                </p>
              </FadeIn>

              <div className="max-w-3xl space-y-8">
                {sections.map((section, i) => (
                  <FadeIn key={section.title} delay={0.05 * i}>
                    <div className="group">
                      <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        <span className="text-xs font-mono text-primary">{String(i + 1).padStart(2, "0")}.</span>
                        {section.title}
                      </h2>
                      {section.content && (
                        <p className="text-base text-muted-foreground leading-relaxed mb-3">
                          {section.content}
                        </p>
                      )}
                      {section.list && (
                        <ul className="space-y-1.5 ml-1">
                          {section.list.map((item) => (
                            <li key={item} className="text-base text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1.5 text-[8px]">&#9654;</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.footer && (
                        <p className="text-base text-muted-foreground leading-relaxed mt-3">
                          {section.footer}
                        </p>
                      )}
                    </div>
                  </FadeIn>
                ))}

                {/* Contact */}
                <FadeIn delay={0.7}>
                  <div className="pt-6 border-t border-border">
                    <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-xs font-mono text-primary">{String(sections.length + 1).padStart(2, "0")}.</span>
                      Contact Us
                    </h2>
                    <p className="text-base text-muted-foreground mb-3">
                      Questions about these Terms of Service? Reach out:
                    </p>
                    <div className="space-y-1 text-sm font-mono text-muted-foreground">
                      <p>{siteConfig.contact.email}</p>
                      <p>{siteConfig.contact.phone}</p>
                      <p>{siteConfig.contact.address}, {siteConfig.contact.location}</p>
                    </div>
                  </div>
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
