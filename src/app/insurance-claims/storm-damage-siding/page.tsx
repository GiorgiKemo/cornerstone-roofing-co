import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Storm Damage Siding Claims in Chicago, IL | Cornerstone Roofing Co.",
  description:
    "Storm damage siding insurance claims in Chicago. We document hail, wind, and debris damage to your siding, handle the claim process, and restore your home's exterior.",
  alternates: {
    canonical: `${BASE_URL}/insurance-claims/storm-damage-siding`,
  },
  openGraph: {
    title: "Storm Damage Siding Claims in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Storm damage siding insurance claims in Chicago. We document damage, handle your claim, and restore your exterior.",
    url: `${BASE_URL}/insurance-claims/storm-damage-siding`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function StormDamageSidingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Storm Damage Siding Insurance Claims",
          description:
            "Storm damage siding insurance claim assistance including documentation, adjuster coordination, and restoration in Chicago.",
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
          serviceType: "Storm Damage Siding Claims",
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insurance Claims", href: "/insurance-claims" },
          { label: "Storm Damage Siding" },
        ]}
        title="Storm Damage Siding Claims in Chicago"
        description="Hail, wind, and flying debris can crack, dent, and puncture siding across every elevation of your home in a single storm event. Cornerstone Roofing Co. documents the damage, navigates the insurance claim, and restores your siding to pre-storm condition."
        intro={`Siding damage from severe storms is one of the most commonly overlooked insurable losses among Chicago homeowners. While most people check their roof after a major storm, they often neglect to inspect the siding that wraps their home's walls. Yet the same hailstones that damage shingles also impact vinyl, fiber cement, aluminum, and wood siding, leaving cracks, dents, holes, and fractures that compromise both the appearance and weather protection of your exterior.

Vinyl siding, the most common siding material in the Chicagoland suburbs, is particularly vulnerable to hail damage. Large hailstones crack and shatter vinyl panels on impact, while smaller hail leaves dents and stress fractures that may not become visible until temperature changes cause the material to expand and contract. Fiber cement siding like James Hardie can chip and crack from direct hail strikes, exposing the substrate to moisture. Even aluminum siding, which does not crack, shows permanent dents that affect curb appeal and can indicate damage to the underlying housewrap and sheathing.

Wind damage presents a different challenge. Sustained winds and gusts exceeding 60 mph, which occur multiple times per year in the Chicago corridor, can lift, loosen, and tear siding panels away from the wall. Wind-driven debris, including branches, patio furniture, and roofing materials from neighboring properties, causes puncture and impact damage that creates immediate pathways for water infiltration.

Cornerstone Roofing Co. inspects all four elevations of your home after storm events, documenting damage to siding, soffits, fascia, and trim alongside any roof damage we find. This comprehensive approach ensures your insurance claim captures the full scope of your loss, which frequently includes siding damage that would have been missed if only the roof were inspected.`}
        processSteps={[
          {
            title: "Complete Exterior Inspection",
            description:
              "We inspect every wall elevation, soffit, fascia, and trim board for hail strikes, wind damage, and debris impact. Damage is marked and photographed with detailed close-ups showing crack patterns and impact marks.",
          },
          {
            title: "Damage Report & Documentation",
            description:
              "A comprehensive report catalogs every damaged section by elevation, material type, and damage severity. The documentation is formatted to align with Xactimate standards for seamless insurance submission.",
          },
          {
            title: "Insurance Claim Filing Support",
            description:
              "We help you file or amend your existing claim to include siding damage. Many homeowners discover siding damage after their initial roof-only claim has been filed, and we handle the supplemental filing process.",
          },
          {
            title: "Adjuster Coordination",
            description:
              "We walk the property with your insurance adjuster, pointing out every area of documented damage. Siding damage is often underscoped by adjusters who focus primarily on the roof, and our presence ensures complete coverage.",
          },
          {
            title: "Siding Restoration & Replacement",
            description:
              "Once the claim is approved, our siding crews replace damaged sections or perform a complete re-side as needed. We match existing colors and profiles wherever possible and install new siding to manufacturer specifications.",
          },
        ]}
        benefits={[
          {
            title: "Captures Damage Often Missed by Adjusters",
            description:
              "Insurance adjusters frequently focus on the roof and underscope siding damage. Our detailed elevation-by-elevation documentation ensures your siding is fully covered in your claim.",
          },
          {
            title: "All Siding Materials Covered",
            description:
              "We inspect and repair vinyl, James Hardie fiber cement, LP SmartSide, aluminum, and wood siding, matching the repair technique and materials to your specific system.",
          },
          {
            title: "Combined Roof and Siding Claims",
            description:
              "Filing roof and siding damage together on a single claim simplifies the process and ensures your entire exterior is restored under one deductible payment.",
          },
          {
            title: "Color and Profile Matching",
            description:
              "Our experienced crews match replacement siding to your existing color and profile for a seamless appearance. If your siding color has been discontinued, we identify the closest available match.",
          },
          {
            title: "Moisture Barrier Inspection",
            description:
              "When damaged siding is removed, we inspect the housewrap and sheathing beneath for water damage that may have occurred since the storm, documenting any additional damage for supplemental filing.",
          },
          {
            title: "Manufacturer Warranty on New Materials",
            description:
              "Replacement siding sections are installed to manufacturer specifications and carry full product warranties, ensuring your home is protected for years to come.",
          },
        ]}
        faqs={[
          {
            question: "Does homeowner's insurance cover storm damage to siding?",
            answer:
              "Yes. Most Illinois homeowner's insurance policies cover sudden storm damage to siding including hail strikes, wind damage, and debris impact. The damage must be caused by a covered weather event, not normal wear and aging. Cosmetic-only damage may be excluded by some policies, which is why professional documentation of functional damage is important.",
          },
          {
            question: "Can I file a siding damage claim separately from my roof claim?",
            answer:
              "You can, but it is usually better to file both together under a single claim. This way you only pay one deductible and the adjuster evaluates the entire exterior in one visit. If you have already filed a roof-only claim, we can help you file a supplement to add siding damage to the existing claim.",
          },
          {
            question: "How can you match my existing siding for a partial replacement?",
            answer:
              "We maintain relationships with all major siding manufacturers and distributors and can source matching profiles and colors for most products currently in production. For discontinued colors, we identify the closest available match. In some cases, the insurance claim may cover a full re-side if a reasonable color match is not achievable.",
          },
          {
            question: "What if my insurance company says the siding damage is cosmetic?",
            answer:
              "Some insurers attempt to classify hail damage as cosmetic to reduce payouts. Our documentation specifically addresses functional impact, including cracks that allow moisture infiltration, weakened structural integrity, and reduced weather protection. If needed, we can request a re-inspection with our team present to demonstrate the functional nature of the damage.",
          },
        ]}
        serviceName="Storm Damage Siding Claims"
      />
      <Footer />
    </div>
  );
}
