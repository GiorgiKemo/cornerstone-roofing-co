import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "storm-damage-roofing")!;

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: `${BASE_URL}/storm-damage-roofing`,
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${BASE_URL}/storm-damage-roofing`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function StormDamageRoofingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Storm Damage Roofing",
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
          serviceType: "Storm Damage Roof Repair and Replacement",
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Storm Damage Roofing" },
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
          { title: "Hail Damage Claims", href: "/insurance-claims/hail-damage-claim" },
          { title: "Storm Damage Siding", href: "/insurance-claims/storm-damage-siding" },
          { title: "Emergency Roof Repair", href: "/emergency-roofing/emergency-roof-repair" },
          { title: "Free Roof Estimate", href: "/insurance-claims/free-roof-estimate" },
        ]}
        serviceName="Storm Damage Roofing"
      />
      <Footer />
    </div>
  );
}
