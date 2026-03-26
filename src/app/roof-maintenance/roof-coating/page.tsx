import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Roof Coating Services in Chicago, IL | Extend Your Roof's Life | Cornerstone Roofing Co.",
  description:
    "Professional roof coating application in Chicago. Silicone, acrylic, and elastomeric coatings extend the life of flat and low-slope roofs by 10-15 years at a fraction of replacement cost.",
  alternates: {
    canonical: `${BASE_URL}/roof-maintenance/roof-coating`,
  },
  openGraph: {
    title: "Roof Coating Services in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Professional roof coating in Chicago. Extend the life of flat and low-slope roofs by 10-15 years at a fraction of replacement cost.",
    url: `${BASE_URL}/roof-maintenance/roof-coating`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function RoofCoatingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Roof Coating",
          description:
            "Professional roof coating services in Chicago for flat and low-slope commercial and residential roofs.",
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
          serviceType: "Roof Coating",
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Roof Maintenance", href: "/roof-maintenance" },
          { label: "Roof Coating" },
        ]}
        title="Roof Coating Services for Chicago Properties"
        description="A high-quality roof coating can add 10 to 15 years of service life to a flat or low-slope roof that is structurally sound but showing signs of surface wear. Cornerstone Roofing Co. applies commercial-grade coatings that seal, protect, and reflect, saving you the cost and disruption of a full replacement."
        intro={`Roof coatings represent one of the smartest investments available to Chicago property owners with aging flat or low-slope roofs. When a membrane roof reaches the 15 to 20-year mark, the surface layer begins to degrade from years of UV exposure, thermal cycling, and weather abuse. Small cracks form, seams begin to separate, and the membrane loses its ability to flex with the building's movement. At this stage, many building owners assume a full tear-off and replacement is the only option, but in many cases, a professionally applied roof coating can restore the waterproof barrier and extend the roof's service life by a decade or more.

The key consideration is the condition of the underlying insulation. If the insulation is dry and the structural deck is sound, a coating application is typically viable. If core samples reveal saturated insulation, the wet areas must be cut out and replaced before coating, or a full replacement may be more cost-effective. Cornerstone Roofing Co. performs moisture surveys before recommending any coating project to ensure the investment makes sense for your specific roof.

We apply three categories of roof coatings depending on the membrane type, building use, and budget. Silicone coatings offer the best resistance to ponding water, making them ideal for flat roofs with drainage challenges. Acrylic coatings provide excellent UV reflectivity and work well on sloped and properly draining surfaces. Elastomeric coatings offer superior flexibility and crack-bridging ability for membranes with existing surface cracking.

A coating application costs 30 to 50 percent less than a full roof replacement and can be completed with minimal disruption to building occupants. For commercial buildings, the work is done entirely from the roof surface, and the water-based products we use produce minimal odor. The reflective white surface of most coatings also qualifies for energy efficiency incentives and can reduce summer cooling costs by 15 to 25 percent.`}
        processSteps={[
          {
            title: "Moisture Survey & Roof Assessment",
            description:
              "Core samples and infrared scanning identify areas of trapped moisture beneath the membrane. If the insulation is dry and the deck is sound, the roof is a good candidate for coating.",
          },
          {
            title: "Surface Preparation & Repair",
            description:
              "The existing membrane is pressure-washed to remove dirt, debris, and oxidation. Any cracks, blisters, or seam separations are repaired before the coating is applied to create a smooth, stable substrate.",
          },
          {
            title: "Primer Application",
            description:
              "A compatible primer is applied to ensure proper adhesion between the existing membrane and the new coating layer. The primer type varies based on the existing membrane material.",
          },
          {
            title: "Coating Application",
            description:
              "The selected coating system is applied in multiple passes to achieve the specified dry film thickness. Flashings, penetrations, and seams receive additional reinforcement with fabric-embedded coating layers.",
          },
          {
            title: "Inspection & Warranty Documentation",
            description:
              "Dry film thickness is verified with a gauge at multiple points across the roof. The completed system is documented with photos and measurements, and the manufacturer warranty is registered.",
          },
        ]}
        benefits={[
          {
            title: "Extends Roof Life 10-15 Years",
            description:
              "A properly applied coating system can add a decade or more of service life to a flat roof that would otherwise need replacement, at a fraction of the cost.",
          },
          {
            title: "30-50% Less Than Full Replacement",
            description:
              "Coating eliminates the cost of tear-off, disposal, new insulation, and the labor-intensive process of installing a new membrane from scratch.",
          },
          {
            title: "Reduces Cooling Costs 15-25%",
            description:
              "Reflective white coatings bounce solar radiation away from the building, significantly reducing the air conditioning load during Chicago's hot, humid summers.",
          },
          {
            title: "Minimal Business Disruption",
            description:
              "Coating is applied from the roof surface with no tear-off, no heavy equipment noise, and minimal odor from water-based products. Your building stays fully operational throughout.",
          },
          {
            title: "Seamless Waterproof Barrier",
            description:
              "The liquid-applied coating cures into a continuous, monolithic membrane with no seams, laps, or joints, eliminating the weak points where most flat roof leaks originate.",
          },
          {
            title: "Renewable Protection",
            description:
              "When the initial coating begins to wear after 10-15 years, an additional coat can be applied over the existing one, extending the roof's life yet again without a tear-off.",
          },
        ]}
        faqs={[
          {
            question: "What types of roofs can be coated?",
            answer:
              "Roof coatings work on most flat and low-slope roofing membranes including TPO, EPDM, modified bitumen, built-up roofing, and metal. The coating type must be compatible with the existing membrane, which is why we always test compatibility before recommending a specific product.",
          },
          {
            question: "How long does a roof coating last?",
            answer:
              "A professionally applied roof coating typically provides 10-15 years of protection depending on the product, application thickness, and environmental conditions. At the end of that period, a maintenance recoat can extend performance for another cycle without removing the original coating.",
          },
          {
            question: "Can you coat a roof that has some leaks?",
            answer:
              "Minor leaks caused by surface cracks and small seam separations can often be repaired as part of the surface preparation before coating. However, a coating is not a substitute for structural repairs. If the roof has significant membrane damage or saturated insulation, those issues must be addressed first.",
          },
          {
            question: "How much does roof coating cost in Chicago?",
            answer:
              "Roof coating application typically costs $3 to $6 per square foot depending on the coating type, surface preparation requirements, and roof size. For a 10,000-square-foot commercial building, that translates to $30,000 to $60,000, compared to $60,000 to $100,000 or more for a full replacement.",
          },
          {
            question: "Is roof coating a good investment for a building I plan to sell?",
            answer:
              "Yes. A recently coated roof with a 10-15 year warranty is a strong selling point in commercial real estate. It demonstrates proactive maintenance, reduces the buyer's near-term capital expenditure concerns, and the transferable warranty adds tangible value to the transaction.",
          },
        ]}
        serviceName="Roof Coating"
      />
      <Footer />
    </div>
  );
}
