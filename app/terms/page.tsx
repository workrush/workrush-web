import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
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

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Terms of Service"
          description="Please read these terms and conditions carefully before using our services."
        />

        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <FadeIn>
              <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
                <p className="text-muted-foreground">
                  Last updated: January 2024
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground">
                  By accessing or using the services provided by Workrush (&quot;we,&quot;
                  &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these
                  Terms of Service. If you do not agree to these terms, please do not
                  use our services.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Services</h2>
                <p className="text-muted-foreground">
                  Workrush provides digital services including but not limited to:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>Mobile app development</li>
                  <li>Web development</li>
                  <li>Website design</li>
                  <li>Game development</li>
                  <li>Digital marketing</li>
                  <li>Web3 and blockchain development</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  The specific scope, deliverables, and terms for each project will be
                  detailed in a separate service agreement or statement of work.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  3. Project Agreements
                </h2>
                <p className="text-muted-foreground">
                  Each project engagement will be governed by a separate agreement that
                  specifies:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>Scope of work and deliverables</li>
                  <li>Timeline and milestones</li>
                  <li>Pricing and payment terms</li>
                  <li>Revision policies</li>
                  <li>Intellectual property rights</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  4. Client Responsibilities
                </h2>
                <p className="text-muted-foreground">As a client, you agree to:</p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Provide timely feedback and approvals</li>
                  <li>Supply necessary content, assets, and access credentials</li>
                  <li>Make payments according to agreed terms</li>
                  <li>
                    Not use our services for any illegal or unauthorized purpose
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  5. Payment Terms
                </h2>
                <p className="text-muted-foreground">
                  Unless otherwise specified in the project agreement:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>
                    A deposit may be required before work commences
                  </li>
                  <li>Invoices are due within 14 days of issue</li>
                  <li>
                    Late payments may incur interest at 2% per month
                  </li>
                  <li>
                    We reserve the right to pause work on accounts with overdue balances
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  6. Intellectual Property
                </h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">Client Materials</h3>
                <p className="text-muted-foreground">
                  You retain ownership of all content, materials, and intellectual
                  property you provide to us. You grant us a license to use these
                  materials solely for the purpose of providing our services.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Deliverables</h3>
                <p className="text-muted-foreground">
                  Upon full payment, you will own the final deliverables as specified in
                  the project agreement. We may retain the right to use the work in our
                  portfolio unless otherwise agreed.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">
                  Third-Party Components
                </h3>
                <p className="text-muted-foreground">
                  Some deliverables may include third-party components (libraries,
                  frameworks, fonts, images) that are subject to their own licenses. We
                  will inform you of any such components.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Confidentiality</h2>
                <p className="text-muted-foreground">
                  We agree to keep confidential any proprietary information you share
                  with us. This obligation does not apply to information that is
                  publicly available or that we independently develop.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  8. Warranties and Disclaimers
                </h2>
                <p className="text-muted-foreground">
                  We will perform our services with reasonable skill and care. However:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>
                    We do not guarantee specific results, rankings, or outcomes
                  </li>
                  <li>
                    Services are provided &quot;as is&quot; without warranties of any
                    kind
                  </li>
                  <li>
                    We are not responsible for third-party services or platforms
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, our liability for any claims
                  arising from or related to our services shall be limited to the amount
                  paid by you for the specific service giving rise to the claim. We
                  shall not be liable for any indirect, incidental, special, or
                  consequential damages.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">10. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate a project agreement with written notice.
                  Upon termination:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>You will pay for all work completed to date</li>
                  <li>We will deliver all completed work and materials</li>
                  <li>
                    Any outstanding balances become immediately due
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">11. Dispute Resolution</h2>
                <p className="text-muted-foreground">
                  Any disputes arising from these terms or our services shall first be
                  attempted to be resolved through good-faith negotiation. If
                  unsuccessful, disputes shall be resolved through binding arbitration
                  in accordance with the laws of the United Kingdom.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms of Service shall be governed by and construed in
                  accordance with the laws of the United Kingdom, without regard to its
                  conflict of law provisions.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  13. Changes to Terms
                </h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify
                  you of any material changes by posting the updated terms on our
                  website. Your continued use of our services after such changes
                  constitutes acceptance of the new terms.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">14. Severability</h2>
                <p className="text-muted-foreground">
                  If any provision of these terms is found to be unenforceable, the
                  remaining provisions will continue in full force and effect.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">15. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact
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
