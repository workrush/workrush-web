"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "App Development", href: "/services/app-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "AI & ML Solutions", href: "/services/ai-ml-solutions" },
  { name: "Cloud & DevOps", href: "/services/cloud-devops" },
  { name: "SaaS Development", href: "/services/saas-development" },
  { name: "Game Development", href: "/services/game-development" },
  { name: "Web3 Development", href: "/services/web3-development" },
  { name: "Website Designing", href: "/services/website-designing" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

const navLinks = [
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-h.png"
            alt="Workrush"
            width={160}
            height={40}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {/* Services Dropdown */}
              {link.hasDropdown && isServicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-background border border-border rounded-lg shadow-lg p-2 min-w-[220px]">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center justify-between px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-md transition-colors group"
                      >
                        <span>{service.name}</span>
                        <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contact">
              Get Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="w-full flex items-center justify-between py-3 px-4 text-base font-medium text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isMobileServicesOpen && (
                        <div className="ml-4 mt-1 mb-2 border-l-2 border-primary/30 pl-4 flex flex-col gap-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeMobileMenu}
                              className="py-2.5 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block py-3 px-4 text-base font-medium text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-border">
              <Button asChild className="w-full bg-primary hover:bg-primary/90" onClick={closeMobileMenu}>
                <Link href="/contact">
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
