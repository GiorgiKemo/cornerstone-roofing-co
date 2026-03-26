import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Roof Leak Repair in Chicago, IL | Fast Response | Cornerstone Roofing Co.",
  description:
    "Expert roof leak repair in Chicago. We find the source, stop the water, and fix the problem permanently. Same-day service available for active leaks.",
  alternates: {
    canonical: `${BASE_URL}/emergency-roofing/roof-leak-repair`,
  },
  openGraph: {
    title: "Roof Leak Repair in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Expert roof leak repair in Chicago. We find the source, stop the water, and fix the problem permanently. Same-day service available.",
    url: `${BASE_URL}/emergency-roofing/roof-leak-repair`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function RoofLeakRepairPage() {
  const faqs = [
    {
      question: "Why does my roof leak only during heavy rain?",
      answer:
        "Some leaks only manifest when rain volume or wind-driven rain angle exceeds a threshold that normal rainfall does not reach. This is common with worn valley flashing, aging pipe boot seals, and gaps in step flashing along walls and chimneys. The defect is always present, but it only allows water entry under specific conditions.",
    },
    {
      question: "Can a roof leak cause mold in my attic?",
      answer:
        "Yes, and it happens faster than most homeowners realize. Mold spores begin actively growing on wet organic materials like wood and insulation within 24-48 hours of sustained moisture exposure. If you suspect a roof leak, addressing it quickly is essential to avoid a separate and expensive mold remediation project.",
    },
    {
      question: "My roof is only 5 years old. Why is it leaking?",
      answer:
        "Age alone does not prevent leaks. Common causes on newer roofs include improper flashing installation, missed sealant at penetrations, incorrect shingle nailing patterns that allow wind-driven rain entry, and manufacturing defects. If your roof is under warranty, the repair may be covered at no cost.",
    },
    {
      question: "How much does roof leak repair cost in Chicago?",
      answer:
        "Simple leak repairs such as resealing a pipe boot or replacing a few damaged shingles typically range from $200 to $600. More complex repairs involving flashing replacement, valley work, or multiple penetration points can range from $600 to $2,000. We provide transparent pricing before beginning any work.",
    },
    {
      question: "Do you repair flat roof leaks?",
      answer:
        "Yes. Flat and low-slope roof leaks are among our most frequent repair calls in Chicago. We service modified bitumen, TPO, EPDM, and built-up roofing systems found on bungalows, two-flats, and commercial buildings throughout the city and suburbs.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Roof Leak Repair",
          description:
            "Professional roof leak diagnosis and repair in Chicago with same-day service for active leaks.",
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
          serviceType: "Roof Leak Repair",
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
          { label: "Emergency Roofing", href: "/emergency-roofing" },
          { label: "Roof Leak Repair" },
        ]}
        title="Roof Leak Repair Experts in Chicago"
        description="A roof leak never gets better on its own. Whether water is dripping through your ceiling right now or you have noticed a suspicious stain growing over the past few weeks, Cornerstone Roofing Co. tracks down the source and fixes it permanently."
        intro={`Roof leaks are among the most common and most misunderstood roofing problems Chicago homeowners face. The spot where water appears on your ceiling is almost never directly below the point where water enters your roof. Water travels along rafters, sheathing, and even electrical conduit before gravity finally pulls it through a joint in the drywall. This means that a stain in your second-floor bedroom could originate from a failed pipe boot flashing 15 feet away, a cracked valley seal on the opposite roof slope, or an ice dam that formed at the eave during the last cold snap.

Finding the true entry point requires experience, the right diagnostic tools, and a systematic approach. Cornerstone Roofing Co. has resolved thousands of roof leaks across the Chicago metro area, from century-old slate roofs in Ravenswood to brand-new architectural shingle systems in Plainfield. Our technicians use a combination of interior attic inspection, exterior surface examination, and, when necessary, controlled water testing to isolate the exact breach point before making any repairs.

Chicago's climate creates multiple leak-producing conditions throughout the year. Spring and summer bring driving rainstorms that exploit worn sealant around pipe boots, skylights, and chimney flashing. Fall gutter clogs cause water to back up under starter courses. Winter ice dams force meltwater beneath shingle tabs at the eaves, a problem so common in Chicago that building code now requires ice-and-water shield membrane in these areas on new construction.

Ignoring a roof leak, even a small one, is a costly mistake. Within 48 hours of continuous moisture exposure, mold spores begin colonizing wet drywall and insulation. Within weeks, wood framing can begin to soften and rot. The repair that costs $400 today can become a $10,000 remediation project if left unaddressed through a rainy season.`}
        processSteps={[
          {
            title: "Interior Leak Assessment",
            description:
              "We start inside your home, examining water stains, drip patterns, and attic conditions to map the likely path water is traveling from the roof penetration to the visible damage.",
          },
          {
            title: "Exterior Roof Examination",
            description:
              "A technician inspects the roof surface above and around the suspected leak zone, checking shingles, flashing, penetrations, valleys, and vents for signs of failure or displacement.",
          },
          {
            title: "Source Isolation & Testing",
            description:
              "For leaks that are not immediately obvious, we use controlled water testing where a hose is applied to specific roof sections while a second technician monitors for water entry from the attic. This pinpoints the exact failure point.",
          },
          {
            title: "Targeted Repair",
            description:
              "Once the source is confirmed, we perform the appropriate repair: replacing failed flashing, resealing pipe boots, patching damaged shingles, clearing ice dam conditions, or addressing whatever specific failure caused the leak.",
          },
          {
            title: "Verification & Interior Check",
            description:
              "After the repair is complete, we verify from both the exterior and the attic that the entry point is sealed. We advise on any interior restoration that may be needed and confirm the repair with a follow-up call.",
          },
        ]}
        benefits={[
          {
            title: "Root Cause Diagnosis, Not Guesswork",
            description:
              "We trace every leak to its actual entry point rather than applying band-aid fixes to the visible symptoms. This prevents the frustrating cycle of repeated repairs.",
          },
          {
            title: "Same-Day Service for Active Leaks",
            description:
              "Active leaks are treated as emergencies. We prioritize these calls to stop water intrusion before it causes significant interior damage to your Chicago home.",
          },
          {
            title: "Experience With Every Roof Type",
            description:
              "From flat modified bitumen roofs on Chicago bungalows to steep cedar shake roofs in the North Shore suburbs, our technicians have diagnosed and repaired leaks on every system in the region.",
          },
          {
            title: "Prevents Mold and Structural Damage",
            description:
              "Fast leak resolution stops the moisture cycle that leads to mold colonization in as little as 48 hours and structural wood rot within weeks.",
          },
          {
            title: "Insurance Documentation Provided",
            description:
              "For storm-related leaks, we provide complete photographic documentation and repair reports formatted for insurance claim submission.",
          },
          {
            title: "Repair Warranty Included",
            description:
              "Every leak repair comes with our workmanship warranty. If the leak recurs from the same point, we return and fix it at no additional charge.",
          },
        ]}
        faqs={faqs}
        serviceName="Roof Leak Repair"
        serviceCategory="roofing"
      />
      <Footer />
    </div>
  );
}
