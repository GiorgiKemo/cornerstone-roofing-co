import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, ArrowRight, MapPin, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import ContactCTA from "@/components/sections/ContactCTA";
import {
  roofingCities,
  sidingCities,
  type City,
} from "@/data/cities";

const BASE_URL = "https://cornerstoneroofingco.com";

/* ------------------------------------------------------------------ */
/*  Build lookup structures                                           */
/* ------------------------------------------------------------------ */
const allCities = [
  ...roofingCities.map((c) => ({ ...c, fullSlug: `roofing-${c.slug}`, type: "roofing" as const })),
  ...sidingCities.map((c) => ({ ...c, fullSlug: `siding-${c.slug}`, type: "siding" as const })),
];

type CityWithMeta = City & { fullSlug: string; type: "roofing" | "siding" };

function getCityByFullSlug(slug: string): CityWithMeta | undefined {
  return allCities.find((c) => c.fullSlug === slug);
}

/* ------------------------------------------------------------------ */
/*  Service highlights                                                */
/* ------------------------------------------------------------------ */
const roofingHighlights = [
  {
    title: "Roof Replacement",
    href: "/roof-replacement",
    description:
      "Complete tear-off and installation of a new roofing system with manufacturer-backed warranties.",
  },
  {
    title: "Roof Repair",
    href: "/roof-repair",
    description:
      "Targeted repairs for leaks, missing shingles, damaged flashing, and more.",
  },
  {
    title: "Storm Damage Restoration",
    href: "/storm-damage-roofing",
    description:
      "Emergency tarping, insurance claim assistance, and full storm-damage repair.",
  },
  {
    title: "Roof Inspection",
    href: "/roof-inspection",
    description:
      "Comprehensive 21-point inspections to evaluate your roof&apos;s condition and remaining lifespan.",
  },
];

const sidingHighlights = [
  {
    title: "James Hardie Fiber Cement",
    href: "/siding",
    description:
      "The gold standard in siding — durable, fire-resistant, and beautiful with ColorPlus technology.",
  },
  {
    title: "Vinyl Siding",
    href: "/siding",
    description:
      "Affordable, low-maintenance siding available in hundreds of colors and profiles.",
  },
  {
    title: "LP SmartSide",
    href: "/siding",
    description:
      "Engineered wood siding with the warmth of real wood and exceptional durability.",
  },
  {
    title: "Siding Repair",
    href: "/siding",
    description:
      "Fix storm damage, cracks, warping, and moisture issues to restore your home&apos;s exterior.",
  },
];

/* ------------------------------------------------------------------ */
/*  Static params + metadata                                          */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return allCities.map((c) => ({ cityService: c.fullSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cityService: string }>;
}): Promise<Metadata> {
  const { cityService } = await params;
  const city = getCityByFullSlug(cityService);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `${BASE_URL}/${city.fullSlug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${BASE_URL}/${city.fullSlug}`,
      siteName: "Cornerstone Roofing Co.",
      locale: "en_US",
      type: "website",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */
export default async function CityServicePage({
  params,
}: {
  params: Promise<{ cityService: string }>;
}) {
  const { cityService } = await params;
  const city = getCityByFullSlug(cityService);
  if (!city) notFound();

  const isRoofing = city.type === "roofing";
  const serviceType = isRoofing ? "Roofing" : "Siding";
  const highlights = isRoofing ? roofingHighlights : sidingHighlights;
  const prefix = isRoofing ? "roofing" : "siding";

  const nearbyPages = city.nearbyAreas
    .map((slug) => getCityByFullSlug(`${prefix}-${slug}`))
    .filter(Boolean) as CityWithMeta[];

  const introParagraphs = city.intro.split("\n\n");

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Cornerstone Roofing Co.",
          url: BASE_URL,
          telephone: "+1-773-555-1234",
          email: "info@cornerstoneroofingco.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chicago",
            addressRegion: "IL",
            addressCountry: "US",
          },
          areaServed: {
            "@type": "City",
            name: city.name,
            containedInPlace: {
              "@type": "State",
              name: "Illinois",
            },
          },
          serviceType: isRoofing
            ? "Roofing Contractor"
            : "Siding Contractor",
        }}
      />

      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-linear-to-br from-navy via-navy/95 to-navy/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                {
                  label: `${serviceType} in ${city.name}`,
                },
              ]}
              dark
            />
          </div>

          <div className="flex items-center gap-2 text-secondary mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-widest uppercase">
              {city.county}, Illinois
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            {serviceType} Contractor in{" "}
            <span className="text-secondary">{city.name}</span>, IL
          </h1>

          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mb-10">
            Trusted {serviceType.toLowerCase()} services for {city.name}{" "}
            homeowners. Licensed, insured, and committed to quality
            craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+17735551234"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all"
            >
              <Phone className="w-5 h-5" />
              (773) 555-1234
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:border-secondary hover:text-secondary transition-all"
            >
              Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Professional {serviceType} Services in {city.name}
            </h2>
            {introParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground text-lg leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Service highlights */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
            Our {serviceType} Services in {city.name}
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            From minor repairs to complete {serviceType.toLowerCase()}{" "}
            replacement, we handle every project with the same attention to
            detail.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {highlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-border"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby service areas */}
      {nearbyPages.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
              Nearby Service Areas
            </h2>
            <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
              We also provide {serviceType.toLowerCase()} services in these
              communities near {city.name}.
            </p>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {nearbyPages.map((nearby) => (
                <Link
                  key={nearby.fullSlug}
                  href={`/${nearby.fullSlug}`}
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-6 py-3 text-foreground font-medium hover:border-secondary hover:text-secondary transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  {serviceType} in {nearby.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cross-service link */}
      {(() => {
        const crossPrefix = isRoofing ? "siding" : "roofing";
        const crossCity = getCityByFullSlug(`${crossPrefix}-${city.slug}`);
        if (!crossCity) return null;
        const crossType = isRoofing ? "Siding" : "Roofing";
        return (
          <section className="py-12 bg-cream">
            <div className="container mx-auto px-4 text-center">
              <p className="text-lg text-muted-foreground">
                We also offer{" "}
                <Link
                  href={`/${crossCity.fullSlug}`}
                  className="text-secondary font-semibold hover:underline"
                >
                  {crossType} services in {city.name}
                </Link>
                .
              </p>
            </div>
          </section>
        );
      })()}

      {/* CTA */}
      <ContactCTA
        service={isRoofing ? "Roof Replacement" : "Siding"}
        city={city.name}
      />

      <Footer />
    </div>
  );
}
