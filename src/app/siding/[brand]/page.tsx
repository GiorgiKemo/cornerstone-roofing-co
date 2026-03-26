import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { sidingBrands } from "@/data/siding-brands";

const BASE_URL = "https://cornerstoneroofingco.com";

export async function generateStaticParams() {
  return sidingBrands.map((brand) => ({
    brand: brand.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = sidingBrands.find((b) => b.slug === slug);

  if (!brand) {
    return { title: "Brand Not Found" };
  }

  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/siding/${brand.slug}/`,
    },
    openGraph: {
      title: brand.metaTitle,
      description: brand.metaDescription,
      url: `${BASE_URL}/siding/${brand.slug}/`,
      siteName: "Cornerstone Roofing Co.",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function SidingBrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: slug } = await params;
  const brand = sidingBrands.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: brand.title,
          description: brand.metaDescription,
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
          serviceType: brand.title,
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Siding", href: "/siding/" },
          { label: brand.title },
        ]}
        title={brand.title}
        description={brand.metaDescription}
        intro={`${brand.intro}\n\n${brand.durability}`}
        benefits={brand.benefits.map((b) => ({
          title: b.split(":")[0] || b.split(" ").slice(0, 4).join(" "),
          description: b,
        }))}
        faqs={brand.faq.map((f) => ({
          question: f.q,
          answer: f.a,
        }))}
        relatedPages={sidingBrands
          .filter((b) => b.slug !== brand.slug)
          .slice(0, 4)
          .map((b) => ({
            title: b.title,
            href: `/siding/${b.slug}/`,
          }))}
        serviceName={brand.title}
        serviceCategory="siding"
      />
      <Footer />
    </div>
  );
}
