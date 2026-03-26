import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Hail Damage Roof Claim in Chicago, IL | Free Inspection | Cornerstone Roofing Co.",
  description:
    "Hail damage roof insurance claims in Chicago. HAAG-certified inspectors document damage, file your claim, and restore your roof. Free hail damage inspections available.",
  alternates: {
    canonical: `${BASE_URL}/insurance-claims/hail-damage-claim`,
  },
  openGraph: {
    title: "Hail Damage Roof Claim in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Hail damage roof insurance claims in Chicago. HAAG-certified inspectors document damage and file your claim.",
    url: `${BASE_URL}/insurance-claims/hail-damage-claim`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function HailDamageClaimPage() {
  const faqs = [
    {
      question: "How do I know if my roof has hail damage?",
      answer:
        "Hail damage on asphalt shingles appears as dark bruises, dents, or granule displacement that may not be visible from the ground. Dented gutters, downspouts, and aluminum window frames are ground-level indicators that hail was large enough to damage roof materials. After any significant hail event in your area, a professional inspection is the only reliable way to assess your roof.",
    },
    {
      question: "How long after a hailstorm can I file an insurance claim?",
      answer:
        "Most Illinois homeowner's policies require claims to be filed within one year of the damage event. However, we strongly recommend filing within 30-60 days because damage evidence is freshest, matching it to a specific storm event is easiest, and your insurer is less likely to question the timing of your claim.",
    },
    {
      question: "Will my insurance rates increase if I file a hail damage claim?",
      answer:
        "Illinois law prohibits insurance companies from raising your individual premiums solely because you filed a weather-related claim. Your rates may adjust based on regional factors, but a single hail claim should not trigger a personal rate increase.",
    },
    {
      question: "What size hail causes roof damage?",
      answer:
        "Hailstones as small as one inch in diameter (quarter-sized) can damage asphalt shingles under the right conditions. Wind-driven hail, aged shingles, and steep impact angles can cause damage from even smaller hailstones. Hail of 1.5 inches or larger almost always causes significant damage to standard shingle roofs.",
    },
    {
      question: "Do I have to use the insurance company's recommended contractor?",
      answer:
        "No. In Illinois, you have the legal right to choose your own contractor for insurance-covered repairs. Insurance companies may suggest preferred vendors, but you are never obligated to use them. Choosing an independent contractor like Cornerstone ensures your interests are represented, not the insurance company's.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Hail Damage Roof Claim Assistance",
          description:
            "Professional hail damage inspection, documentation, and insurance claim assistance for Chicago homeowners.",
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
          serviceType: "Hail Damage Insurance Claim Assistance",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insurance Claims", href: "/insurance-claims" },
          { label: "Hail Damage Claim" },
        ]}
        title="Hail Damage Roof Claims in Chicago"
        description="The Chicagoland area averages multiple significant hail events each year, and each one can cause thousands of dollars in roof damage that is invisible from the ground. Cornerstone Roofing Co. provides free hail damage inspections and guides you through the entire insurance claim process."
        intro={`Hail damage to asphalt shingles is fundamentally different from wind or impact damage, and it requires a trained eye to identify. When hailstones strike a shingle surface, they fracture the granule layer and bruise the underlying asphalt mat. These marks may appear as subtle dark spots, slight depressions, or soft areas that are difficult to distinguish from normal weathering unless you know exactly what to look for. Left unrepaired, hail damage accelerates shingle deterioration by exposing the asphalt layer to UV radiation, leading to cracking, curling, and premature failure within a few years.

The National Weather Service Chicago office (located in Romeoville, IL) tracks severe thunderstorm events across the region, and the data consistently shows that parts of Cook, DuPage, Will, and Kane counties experience hail of quarter-inch diameter or larger several times each storm season. The June and July period is historically the most active, but damaging hail has been recorded in every month from March through October in the Chicago area.

Cornerstone Roofing Co. employs HAAG-certified residential roof inspectors who have completed advanced training in identifying hail damage on every type of roofing material. HAAG certification is the industry gold standard recognized by insurance carriers nationwide, and it gives our findings credibility that general contractors cannot match. During your inspection, we systematically examine multiple test squares across every roof slope, check soft metals like vents, flashings, and gutters for impact marks, and document everything with high-resolution photographs.

If we find hail damage that meets the threshold for a valid insurance claim, we prepare a detailed report formatted to the standards your insurance company expects. If we do not find enough damage to support a claim, we tell you honestly and provide recommendations for any maintenance items we noticed during the inspection. Either way, the inspection costs you nothing.`}
        processSteps={[
          {
            title: "Free Hail Damage Inspection",
            description:
              "A HAAG-certified inspector examines your roof, gutters, vents, and siding for hail impact marks. Multiple test squares are examined on each roof slope to establish a statistically valid damage pattern.",
          },
          {
            title: "Comprehensive Damage Report",
            description:
              "Every finding is documented with photographs, measurements, and annotations showing damage locations. The report is formatted to align with insurance industry standards and Xactimate line items.",
          },
          {
            title: "Claim Filing Assistance",
            description:
              "We walk you through the process of filing your claim and provide all documentation your insurance company needs. We answer your questions about deductibles, timelines, and what to expect from the adjuster visit.",
          },
          {
            title: "Adjuster Meeting & Roof Walk",
            description:
              "We meet your insurance adjuster on the roof to walk through our findings together. This step is critical because it ensures every area of damage is included in the adjuster's scope, often recovering thousands of additional dollars.",
          },
          {
            title: "Claim Approval & Restoration",
            description:
              "Once your claim is approved, we schedule the roof repair or replacement. The work is completed using manufacturer-specified materials and techniques, and any hidden damage discovered during the project is filed as a supplement.",
          },
        ]}
        benefits={[
          {
            title: "HAAG-Certified Hail Damage Experts",
            description:
              "Our inspectors hold the industry's highest credential for identifying hail damage, giving your claim documentation the credibility insurance carriers respect.",
          },
          {
            title: "Free Inspection With No Obligation",
            description:
              "You pay nothing for our hail damage assessment. If damage is found, you decide whether to file a claim. If no damage is found, you have peace of mind at no cost.",
          },
          {
            title: "Xactimate-Formatted Estimates",
            description:
              "Our estimates use the same software and pricing databases your insurance company uses, eliminating pricing disputes and speeding up the approval process.",
          },
          {
            title: "Maximizes Your Claim Payout",
            description:
              "By attending the adjuster meeting and walking the roof together, we ensure every area of damage is captured in the approved scope, preventing underpayment.",
          },
          {
            title: "Supplement Filing for Hidden Damage",
            description:
              "If our crew discovers additional damage during the repair that was not visible during the initial inspection, we file a supplement with your insurer to cover the additional cost.",
          },
          {
            title: "Quality Restoration Guaranteed",
            description:
              "Insurance claim work receives the same premium materials and installation standards as any other Cornerstone project, backed by manufacturer warranties and our workmanship guarantee.",
          },
        ]}
        faqs={faqs}
        serviceName="Hail Damage Claims"
        serviceCategory="roofing"
      />
      <Footer />
    </div>
  );
}
