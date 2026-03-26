import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import ServiceAreas from "@/components/sections/ServiceAreas";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cornerstone Roofing Co. | Chicago Roofing Contractor",
  description:
    "Cornerstone Roofing Co. — Chicagoland's trusted roofing contractor. Expert roof replacement, repair, storm damage restoration, siding & gutters. Free estimates.",
  alternates: {
    canonical: "https://cornerstoneroofingco.com/",
  },
  openGraph: {
    title: "Cornerstone Roofing Co. | Chicago Roofing Contractor",
    description:
      "Expert roof replacement, repair, and storm damage restoration serving Chicagoland.",
    url: "https://cornerstoneroofingco.com/",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <ServiceAreas />
      <ContactCTA />
      <Footer />
    </div>
  );
}
