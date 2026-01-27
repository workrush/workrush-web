import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/effects/motion";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Workrush collects, uses, and protects your personal information. Our commitment to your privacy.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Privacy Policy"
          description="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
        />

        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <FadeIn>
              <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
                <p className="text-muted-foreground">
                  Last updated: January 2024
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Workrush (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                  committed to protecting your privacy. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when you
                  visit our website or use our services.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">
                  Personal Information
                </h3>
                <p className="text-muted-foreground">
                  We may collect personal information that you voluntarily provide to us
                  when you:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>Contact us through our website or email</li>
                  <li>Request a quote or consultation</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Apply for a position</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  This information may include your name, email address, phone number,
                  company name, and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-muted-foreground">
                  When you visit our website, we may automatically collect certain
                  information about your device, including:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process and deliver our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and unauthorized access</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to track activity on
                  our website and hold certain information. Cookies are files with a
                  small amount of data that are sent to your browser from a website and
                  stored on your device.
                </p>
                <p className="text-muted-foreground mt-4">
                  You can instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent. However, if you do not accept cookies,
                  you may not be able to use some portions of our website.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  5. Data Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information
                  to third parties without your consent, except in the following
                  circumstances:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>
                    Service providers who assist us in operating our website and
                    conducting our business
                  </li>
                  <li>When required by law or to respond to legal process</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>
                    In connection with a merger, acquisition, or sale of assets
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to
                  protect your personal information against unauthorized access,
                  alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet or electronic storage is 100% secure.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground">
                  Depending on your location, you may have certain rights regarding your
                  personal information, including:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict processing</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise any of these rights, please contact us using the
                  information below.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">8. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information only for as long as necessary to
                  fulfill the purposes for which it was collected, including to satisfy
                  legal, accounting, or reporting requirements.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  9. Third-Party Links
                </h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites. We are not
                  responsible for the privacy practices of these websites. We encourage
                  you to read the privacy policies of any third-party websites you
                  visit.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  10. Children&apos;s Privacy
                </h2>
                <p className="text-muted-foreground">
                  Our services are not intended for individuals under the age of 18. We
                  do not knowingly collect personal information from children. If you
                  become aware that a child has provided us with personal information,
                  please contact us.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  11. Changes to This Policy
                </h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify
                  you of any changes by posting the new Privacy Policy on this page and
                  updating the &quot;Last updated&quot; date.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact
                  us:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>Email: {siteConfig.contact.email}</li>
                  <li>Phone: {siteConfig.contact.phone}</li>
                  <li>
                    Address: {siteConfig.contact.address},{" "}
                    {siteConfig.contact.location}
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
