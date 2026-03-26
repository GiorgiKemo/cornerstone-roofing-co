import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "roof-repair")!;

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: `${BASE_URL}/roof-repair`,
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${BASE_URL}/roof-repair`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function RoofRepairPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Roof Repair",
          description: service.metaDescription,
          provider: {
            "@type": "LocalBusiness",
            name: "Cornerstone Roofing Co.",
            url: BASE_URL,
          },
          areaServed: {
            "@type": "City",
            name: "Chicago",
            containedInPlace: {
              "@type": "State",
              name: "Illinois",
            },
          },
          serviceType: "Roof Repair",
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Roof Repair" },
        ]}
        title={service.h1}
        description={service.heroDescription}
        intro={service.sections.intro}
        processSteps={service.sections.processSteps}
        benefits={service.sections.benefits.map((b) => ({
          title: b.split(" ").slice(0, 4).join(" "),
          description: b,
        }))}
        faqs={service.sections.faq.map((f) => ({
          question: f.q,
          answer: f.a,
        }))}
        relatedPages={[
          { title: "Emergency Roof Repair", href: "/emergency-roofing/emergency-roof-repair" },
          { title: "Roof Leak Repair", href: "/emergency-roofing/roof-leak-repair" },
          { title: "Roof Tarping", href: "/emergency-roofing/roof-tarping" },
          { title: "24-Hour Roofer", href: "/emergency-roofing/24-hour-roofer" },
        ]}
        serviceName="Roof Repair"
      />
      <Footer />
    </div>
  );
}
