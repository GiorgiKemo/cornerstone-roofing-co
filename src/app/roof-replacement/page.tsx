import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "roof-replacement")!;

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: `${BASE_URL}/roof-replacement`,
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${BASE_URL}/roof-replacement`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function RoofReplacementPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Roof Replacement",
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
          serviceType: "Roof Replacement",
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Roof Replacement" },
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
          { title: "Asphalt Shingles", href: "/roofing/asphalt-shingles" },
          { title: "Metal Roofing", href: "/roofing/metal-roofing" },
          { title: "Flat Roofing", href: "/roofing/flat-roofing" },
          { title: "Slate Roofing", href: "/roofing/slate-roofing" },
          { title: "Cedar Shake", href: "/roofing/cedar-shake" },
        ]}
        serviceName="Roof Replacement"
      />
      <Footer />
    </div>
  );
}
