import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "roof-inspection")!;

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: `${BASE_URL}/roof-inspection`,
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${BASE_URL}/roof-inspection`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function RoofInspectionPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Roof Inspection",
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
          serviceType: "Roof Inspection",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.sections.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Roof Inspection" },
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
          { title: "Roof Maintenance", href: "/roof-maintenance" },
          { title: "Insurance Claims", href: "/insurance-claims" },
          { title: "Free Roof Estimate", href: "/insurance-claims/free-roof-estimate" },
          { title: "Roof Coating", href: "/roof-maintenance/roof-coating" },
        ]}
        serviceName="Roof Inspection"
        serviceCategory="roofing"
      />
      <Footer />
    </div>
  );
}
