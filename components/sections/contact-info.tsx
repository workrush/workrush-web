import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

const services = [
  "App Development",
  "Web Development",
  "Website Designing",
  "Game Development",
  "Digital Marketing",
  "Web3 Development",
];

export function ContactInfo() {
  const emailSubject = encodeURIComponent("Project Inquiry from Website");
  const emailBody = encodeURIComponent(
    `Hi Workrush Team,\n\nI'm interested in discussing a project with you.\n\nProject Type: \nBudget Range: \nTimeline: \n\nBest regards`
  );

  return (
    <section className="relative bg-[#0A0E14] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#0B9444]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative">
        <div className="py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Main Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-[#0B9444] rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">
                  We respond within 24 hours
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                Let&apos;s Build
                <br />
                Something <span className="text-[#0B9444]">Great</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                Ready to transform your ideas into reality? Drop us a message
                and let&apos;s discuss how we can help you scale your digital
                presence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#0B9444] hover:bg-[#087535] text-lg px-8 py-6 h-auto"
                >
                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=${emailSubject}&body=${emailBody}`}
                  >
                    Send Us an Email
                    <Mail className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto bg-transparent"
                >
                  <a href={`tel:${siteConfig.contact.phone}`}>
                    Call Us Now
                    <Phone className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Services List */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Our Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Details */}
            <div className="lg:pl-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-8">Contact Details</h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#0B9444]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#0B9444]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Email</div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-lg font-medium hover:text-[#0B9444] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#0B9444]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#0B9444]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Phone</div>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-lg font-medium hover:text-[#0B9444] transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#0B9444]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#0B9444]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Location</div>
                      <div className="text-lg font-medium">
                        {siteConfig.contact.location}
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#0B9444]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#0B9444]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        Response Time
                      </div>
                      <div className="text-lg font-medium">Within 24 hours</div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-8" />

                {/* Back to Home */}
                <Link
                  href="/"
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
