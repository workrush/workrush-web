import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/effects/motion";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Workrush collects, uses, and protects your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Introduction",
    content:
      'Workrush ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
  },
  {
    title: "Information We Collect",
    content:
      "We may collect personal information that you voluntarily provide to us when you contact us, request a quote, subscribe to our newsletter, or apply for a position. This includes your name, email address, phone number, company name, and any other information you choose to provide.",
    list: [
      "Contact details (name, email, phone)",
      "Company and project information",
      "Device and browser data (IP, browser type, OS)",
      "Pages visited and time spent on site",
    ],
  },
  {
    title: "How We Use Your Information",
    list: [
      "Respond to your inquiries and provide support",
      "Process and deliver our services",
      "Send marketing communications (with your consent)",
      "Improve our website and services",
      "Comply with legal obligations",
    ],
  },
  {
    title: "Cookies",
    content:
      "We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, some portions of our website may not function properly without cookies.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell, trade, or transfer your personal information to third parties without your consent, except:",
    list: [
      "Service providers who assist in operating our website",
      "When required by law or legal process",
      "To protect our rights, privacy, safety, or property",
      "In connection with a merger, acquisition, or sale of assets",
    ],
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the Internet is 100% secure.",
  },
  {
    title: "Your Rights",
    content: "Depending on your location, you may have the right to:",
    list: [
      "Access your personal information",
      "Correct inaccurate information",
      "Delete your personal information",
      "Restrict or object to processing",
      "Data portability",
    ],
  },
  {
    title: "Data Retention",
    content:
      "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.",
  },
  {
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites.",
  },
  {
    title: "Children's Privacy",
    content:
      "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.",
  },
  {
    title: "Changes to This Policy",
    content:
      'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.',
  },
];

export default function PrivacyPage() {
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
                  Privacy <span className="text-primary">Policy</span>
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
                    </div>
                  </FadeIn>
                ))}

                {/* Contact */}
                <FadeIn delay={0.6}>
                  <div className="pt-6 border-t border-border">
                    <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-xs font-mono text-primary">{String(sections.length + 1).padStart(2, "0")}.</span>
                      Contact Us
                    </h2>
                    <p className="text-base text-muted-foreground mb-3">
                      Questions about this Privacy Policy? Reach out:
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
