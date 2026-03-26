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
  title: "Emergency Roofing Services in Chicago, IL | 24/7 | Cornerstone Roofing Co.",
  description:
    "24/7 emergency roofing services in Chicago and suburbs. Emergency roof repair, tarping, leak repair, and after-hours response. Call now for immediate help from Cornerstone Roofing Co.",
  alternates: {
    canonical: `${BASE_URL}/emergency-roofing`,
  },
  openGraph: {
    title: "Emergency Roofing Services in Chicago, IL | 24/7 | Cornerstone Roofing Co.",
    description:
      "24/7 emergency roofing services in Chicago and suburbs. Emergency roof repair, tarping, leak repair, and after-hours response.",
    url: `${BASE_URL}/emergency-roofing`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function EmergencyRoofingHub() {
  const subPages = [
    {
      title: "Emergency Roof Repair",
      href: "/emergency-roofing/emergency-roof-repair",
      description:
        "Immediate roof repair for storm damage, fallen trees, and structural failures. Our crews respond fast across the Chicago metro to stabilize your roof and prevent further damage to your home.",
    },
    {
      title: "Roof Tarping Services",
      href: "/emergency-roofing/roof-tarping",
      description:
        "Professional roof tarping to protect your home from water intrusion after storm damage. Heavy-duty tarps secured to prevent leaks until permanent repairs can be completed.",
    },
    {
      title: "Roof Leak Repair",
      href: "/emergency-roofing/roof-leak-repair",
      description:
        "Fast diagnosis and repair of active roof leaks. We trace the source, stop the water, and restore your roof's integrity before interior damage spreads to ceilings, walls, and insulation.",
    },
    {
      title: "24-Hour Roofer",
      href: "/emergency-roofing/24-hour-roofer",
      description:
        "Round-the-clock roofing service for emergencies that cannot wait until morning. Nights, weekends, and holidays, Cornerstone has a crew ready to protect your Chicago-area home.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Emergency Roofing Services",
          description:
            "24/7 emergency roofing services in Chicago including emergency repair, tarping, leak repair, and after-hours response.",
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
          serviceType: "Emergency Roofing",
        }}
      />
      <section className="bg-primary pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Emergency Roofing" },
            ]}
            dark
          />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mt-6 mb-6">
            24/7 Emergency Roofing Services in Chicago
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">
            When a storm tears through your neighborhood at 2 AM or a falling branch punches through your roof on a holiday weekend, you need a roofing contractor who answers the phone and shows up fast. Cornerstone Roofing Co. provides round-the-clock emergency roofing services across the entire Chicagoland area.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Chicago homeowners face a unique combination of severe weather threats. Thunderstorms with damaging hail roll through from spring into fall. Winter brings heavy snow loads, ice dams, and freeze-thaw cycles that exploit every weak point in an aging roof. High winds off Lake Michigan can tear shingles loose and send debris flying into roof surfaces at any time of year.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When emergency roof damage occurs, the first priority is stopping water from entering your home. Every hour of delay allows moisture to penetrate insulation, soak drywall, and create conditions for mold growth. Our emergency response teams carry tarping materials, temporary sealants, and common repair supplies so we can stabilize your roof on the first visit in most cases.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cornerstone Roofing Co. has served the Chicago metro since day one with a commitment to fast, honest, and professional emergency service. We document all damage for your insurance claim, coordinate directly with adjusters, and transition seamlessly from emergency stabilization to permanent repair or replacement when you are ready.
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
      <ContactCTA service="Emergency Roofing" />
      <Footer />
    </div>
  );
}
