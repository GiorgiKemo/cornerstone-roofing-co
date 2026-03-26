import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { roofingMaterials } from "@/data/roofing-materials";

const BASE_URL = "https://cornerstoneroofingco.com";

export async function generateStaticParams() {
  return roofingMaterials.map((material) => ({
    material: material.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ material: string }>;
}): Promise<Metadata> {
  const { material: slug } = await params;
  const material = roofingMaterials.find((m) => m.slug === slug);

  if (!material) {
    return { title: "Material Not Found" };
  }

  return {
    title: material.metaTitle,
    description: material.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/roofing/${material.slug}/`,
    },
    openGraph: {
      title: material.metaTitle,
      description: material.metaDescription,
      url: `${BASE_URL}/roofing/${material.slug}/`,
      siteName: "Cornerstone Roofing Co.",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function RoofingMaterialPage({
  params,
}: {
  params: Promise<{ material: string }>;
}) {
  const { material: slug } = await params;
  const material = roofingMaterials.find((m) => m.slug === slug);

  if (!material) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: material.title,
          description: material.metaDescription,
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
          serviceType: material.title,
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Roof Replacement", href: "/roof-replacement/" },
          { label: material.title },
        ]}
        title={material.title}
        description={material.metaDescription}
        intro={`${material.intro}\n\n${material.climateInfo}\n\n${material.comparisonNote}`}
        benefits={material.benefits.map((b) => ({
          title: b.split(":")[0] || b.split(" ").slice(0, 4).join(" "),
          description: b,
        }))}
        faqs={material.faq.map((f) => ({
          question: f.q,
          answer: f.a,
        }))}
        relatedPages={roofingMaterials
          .filter((m) => m.slug !== material.slug)
          .slice(0, 4)
          .map((m) => ({
            title: m.title,
            href: `/roofing/${m.slug}/`,
          }))}
        serviceName={material.title}
      />
      <Footer />
    </div>
  );
}
