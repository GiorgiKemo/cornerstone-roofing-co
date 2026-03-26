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
  title: "Roofing Insurance Claims Help in Chicago, IL | Cornerstone Roofing Co.",
  description:
    "Expert help with roofing insurance claims in Chicago. Hail damage, storm damage, and wind damage claims handled from inspection to final payment. Free claim consultations.",
  alternates: {
    canonical: `${BASE_URL}/insurance-claims`,
  },
  openGraph: {
    title: "Roofing Insurance Claims Help in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Expert help with roofing insurance claims in Chicago. Hail damage, storm damage, and wind damage claims handled from inspection to final payment.",
    url: `${BASE_URL}/insurance-claims`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function InsuranceClaimsHub() {
  const subPages = [
    {
      title: "Hail Damage Claims",
      href: "/insurance-claims/hail-damage-claim",
      description:
        "Comprehensive hail damage documentation, claim filing assistance, and roof restoration. Our HAAG-certified inspectors identify damage that adjusters and untrained eyes miss.",
    },
    {
      title: "Storm Damage Siding Claims",
      href: "/insurance-claims/storm-damage-siding",
      description:
        "Wind, hail, and debris damage to your siding is covered by most homeowner's policies. We document the damage, file the claim, and restore your home's exterior to pre-storm condition.",
    },
    {
      title: "Free Roof Estimate",
      href: "/insurance-claims/free-roof-estimate",
      description:
        "No-cost, no-obligation roof estimates for repair or replacement. Whether you are filing an insurance claim or paying out of pocket, we provide transparent pricing you can trust.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Roofing Insurance Claims Assistance",
          description:
            "Expert assistance with roofing insurance claims in Chicago including hail damage, storm damage, and wind damage claims.",
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
          serviceType: "Roofing Insurance Claims Assistance",
        }}
      />
      <section className="bg-primary pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insurance Claims" },
            ]}
            dark
          />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mt-6 mb-6">
            Roofing Insurance Claims Assistance in Chicago
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">
            Navigating a roofing insurance claim can be overwhelming. Cornerstone Roofing Co. guides Chicago homeowners through every step of the process, from initial damage inspection to final claim payment, ensuring you receive the full coverage your policy provides.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Filing a roofing insurance claim in Illinois involves specific procedures, documentation requirements, and timelines that most homeowners have never encountered. The process is designed by insurance companies, and without experienced guidance, legitimate claims are frequently underpaid, delayed, or denied for preventable reasons. Cornerstone Roofing Co. has managed hundreds of insurance claims for Chicagoland homeowners and understands precisely what adjusters need to see, how to document damage correctly, and how to advocate for the full scope of your covered loss.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our claim assistance begins with a thorough damage inspection by HAAG-certified inspectors who know how to identify every type of storm, hail, and wind damage. We prepare Xactimate-formatted estimates that speak the same language your insurance company uses, which eliminates the back-and-forth over line items and pricing that bogs down many claims.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether your claim involves hail-damaged shingles, wind-torn siding, or a roof that needs full replacement after a major storm, our team handles the documentation, adjuster coordination, and supplement filing while you focus on your daily life. We never ask you to pay more than your deductible for insurance-covered work, and we never cut corners on materials or workmanship.
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
      <ContactCTA service="Insurance Claims" />
      <Footer />
    </div>
  );
}
