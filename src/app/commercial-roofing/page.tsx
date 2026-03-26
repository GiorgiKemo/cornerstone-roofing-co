import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import ContactCTA from "@/components/sections/ContactCTA";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Commercial Roofing Services in Chicago, IL | Cornerstone Roofing Co.",
  description:
    "Commercial roofing installation, repair, and replacement in Chicago. TPO, EPDM, flat roof, and low-slope systems for businesses across Chicagoland. Free commercial estimates.",
  alternates: {
    canonical: `${BASE_URL}/commercial-roofing`,
  },
  openGraph: {
    title: "Commercial Roofing Services in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Commercial roofing installation, repair, and replacement in Chicago. TPO, EPDM, flat roof, and low-slope systems for businesses.",
    url: `${BASE_URL}/commercial-roofing`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofingHub() {
  const subPages = [
    {
      title: "Commercial Roof Repair",
      href: "/commercial-roofing/commercial-roof-repair",
      description:
        "Fast, reliable repair services for commercial flat and low-slope roofing systems. We minimize business disruption and restore your roof's watertight integrity with same-day response available.",
    },
    {
      title: "Flat Roof Replacement",
      href: "/commercial-roofing/flat-roof-replacement",
      description:
        "Complete flat roof replacement for commercial buildings in Chicago. We install TPO, EPDM, modified bitumen, and built-up systems engineered for decades of performance.",
    },
    {
      title: "TPO Roofing",
      href: "/commercial-roofing/tpo-roofing",
      description:
        "Energy-efficient TPO single-ply membrane roofing for commercial and industrial buildings. Reflective white surface reduces cooling costs and meets ENERGY STAR requirements.",
    },
    {
      title: "EPDM Roofing",
      href: "/commercial-roofing/epdm-roofing",
      description:
        "Durable EPDM rubber roofing membranes for commercial flat roofs. Proven performance in extreme weather with a track record spanning over 60 years in the roofing industry.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Commercial Roofing Services",
          description:
            "Commercial roofing installation, repair, and replacement services in Chicago for flat and low-slope roofing systems.",
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
          serviceType: "Commercial Roofing",
        }}
      />
      <section className="bg-primary pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Commercial Roofing" },
            ]}
            dark
          />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mt-6 mb-6">
            Commercial Roofing Services in Chicago
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">
            From strip malls and warehouses to office buildings and multi-unit residential complexes, Cornerstone Roofing Co. provides full-service commercial roofing solutions designed to protect your business investment and minimize operational disruption.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Commercial roofing demands a different skill set than residential work. Flat and low-slope systems require precise membrane installation, proper drainage engineering, and an understanding of how HVAC units, skylights, and other rooftop equipment integrate with the waterproofing layer. Cornerstone Roofing Co. brings dedicated commercial expertise to every project, whether it involves a 5,000-square-foot retail space or a 100,000-square-foot industrial facility.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Chicago&apos;s commercial buildings face unique challenges. The city&apos;s extreme temperature range, from sub-zero winter lows to 95-degree summer highs, creates thermal cycling that stresses every seam and adhesion point in a flat roofing membrane. Heavy snow loads, standing water from poor drainage, and rooftop foot traffic from maintenance crews further test the system&apos;s durability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work with building owners, property managers, and facility directors to develop roofing plans that balance upfront cost, long-term durability, energy efficiency, and warranty coverage. Our commercial team is certified to install and warranty TPO, EPDM, modified bitumen, and built-up roofing systems from the industry&apos;s leading manufacturers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group bg-card rounded-xl p-8 border border-border hover:border-secondary/50 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {page.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {page.description}
                </p>
                <span className="flex items-center gap-1 text-secondary font-semibold text-sm">
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA service="Commercial Roofing" />
      <Footer />
    </div>
  );
}
