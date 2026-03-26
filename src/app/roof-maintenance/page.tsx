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
  title: "Roof Maintenance Services in Chicago, IL | Cornerstone Roofing Co.",
  description:
    "Professional roof maintenance in Chicago including roof cleaning, roof coating, and gutter cleaning. Extend the life of your roof and prevent costly repairs with regular maintenance.",
  alternates: {
    canonical: `${BASE_URL}/roof-maintenance`,
  },
  openGraph: {
    title: "Roof Maintenance Services in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Professional roof maintenance in Chicago including roof cleaning, roof coating, and gutter cleaning. Extend your roof's life.",
    url: `${BASE_URL}/roof-maintenance`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function RoofMaintenanceHub() {
  const subPages = [
    {
      title: "Roof Cleaning",
      href: "/roof-maintenance/roof-cleaning",
      description:
        "Professional roof cleaning removes moss, algae, lichen, and debris that degrade shingles and trap moisture. Safe, low-pressure techniques protect your roofing material while restoring its appearance.",
    },
    {
      title: "Roof Coating",
      href: "/roof-maintenance/roof-coating",
      description:
        "Protective roof coatings extend the life of flat and low-slope roofs by sealing surface cracks, reflecting UV radiation, and adding a waterproof barrier. An affordable alternative to full replacement.",
    },
    {
      title: "Gutter Cleaning",
      href: "/roof-maintenance/gutter-cleaning",
      description:
        "Regular gutter cleaning prevents clogs, ice dams, and water damage to your foundation and fascia. Our crews clean gutters, flush downspouts, and inspect for damage twice per year.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Roof Maintenance Services",
          description:
            "Professional roof maintenance services in Chicago including roof cleaning, coating application, and gutter cleaning.",
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
          serviceType: "Roof Maintenance",
        }}
      />
      <section className="bg-primary pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Roof Maintenance" },
            ]}
            dark
          />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mt-6 mb-6">
            Roof Maintenance Services in Chicago
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">
            A well-maintained roof lasts years longer and costs far less over its lifetime than one that is neglected until problems become emergencies. Cornerstone Roofing Co. provides the maintenance services Chicago homeowners need to protect their investment and avoid surprise repair bills.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-muted-foreground leading-relaxed mb-6">
              The average Chicago roof endures more weather punishment in a single year than roofs in most other U.S. metro areas see in three. Summer brings intense UV radiation and humidity that accelerates algae and moss growth. Fall dumps thousands of leaves into gutters and valleys. Winter piles snow on roof surfaces while freeze-thaw cycles work at flashings and sealant joints. Spring brings severe storms with hail and high winds. Each season attacks your roof in a different way, and without regular maintenance, the cumulative damage shortens your roof's life by years.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cornerstone Roofing Co. offers individual maintenance services and annual maintenance plans that keep your roof performing at its best. Our maintenance programs catch small problems, such as a lifted flashing edge or a developing gutter clog, before they become expensive repairs. Most maintenance visits take less than half a day and cost a fraction of the emergency repair they prevent.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether your roof is brand new and you want to keep it that way, or it is approaching mid-life and you want to squeeze every possible year out of your investment, our maintenance team has the skills and equipment to help. Explore our specific maintenance services below to learn how each one protects your Chicago-area home.
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
      <ContactCTA service="Roof Maintenance" />
      <Footer />
    </div>
  );
}
