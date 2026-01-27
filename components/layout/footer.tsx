import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

const basePath = process.env.NODE_ENV === "production" ? "/workrush-web" : "";

const services = [
  { name: "App Development", href: "/services/app-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Website Designing", href: "/services/website-designing" },
  { name: "Game Development", href: "/services/game-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Web3 Development", href: "/services/web3-development" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  { name: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
  { name: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
].filter((link) => link.href);

export function Footer() {
  return (
    <footer className="bg-background border-t border-border relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container py-12 md:py-16 lg:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand Column - Full width on mobile */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 space-y-4 md:space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={`${basePath}/images/logo-h.png`}
                alt="Workrush"
                width={140}
                height={35}
                className="h-8 md:h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              We build digital products that scale. From mobile apps to web platforms,
              we deliver end-to-end solutions for businesses worldwide.
            </p>
            {/* Social links */}
            <div className="flex gap-2 md:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 md:h-10 md:w-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-xs md:text-sm font-mono text-primary mb-4 md:mb-6 uppercase tracking-wider">
              {"// Services"}
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm inline-flex items-center gap-1 group"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden md:block" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xs md:text-sm font-mono text-primary mb-4 md:mb-6 uppercase tracking-wider">
              {"// Company"}
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden md:block" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column - Full width on mobile */}
          <div className="col-span-2 lg:col-span-3 pt-4 md:pt-0 border-t border-border md:border-t-0">
            <h3 className="text-xs md:text-sm font-mono text-primary mb-4 md:mb-6 uppercase tracking-wider">
              {"// Contact"}
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="h-8 w-8 rounded-lg bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm">{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="h-8 w-8 rounded-lg bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm break-all">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="h-8 w-8 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs md:text-sm">
                  {siteConfig.contact.address}, {siteConfig.contact.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs md:text-sm font-mono text-center md:text-left">
              © {new Date().getFullYear()} Workrush. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm"
              >
                Privacy
              </Link>
              <span className="text-border">|</span>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
