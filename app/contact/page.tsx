import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactInfo } from "@/components/sections/contact-info";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Workrush. Let's discuss your next digital project and bring your ideas to life.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}
