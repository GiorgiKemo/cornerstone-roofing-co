import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Roof Cleaning Services in Chicago, IL | Moss & Algae Removal | Cornerstone Roofing Co.",
  description:
    "Professional roof cleaning in Chicago. Safe removal of moss, algae, lichen, and black streaks from shingles. Low-pressure methods that protect your roof while restoring its appearance.",
  alternates: {
    canonical: `${BASE_URL}/roof-maintenance/roof-cleaning`,
  },
  openGraph: {
    title: "Roof Cleaning Services in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Professional roof cleaning in Chicago. Safe removal of moss, algae, lichen, and black streaks from shingles.",
    url: `${BASE_URL}/roof-maintenance/roof-cleaning`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function RoofCleaningPage() {
  const faqs = [
    {
      question: "Will roof cleaning damage my shingles?",
      answer:
        "Not when done correctly. Our soft wash method applies cleaning solution at low pressure, similar to a garden hose, which kills organic growth without disturbing the granule layer. High-pressure power washing can damage shingles and should never be used on an asphalt roof. We follow ARMA's recommended cleaning protocol.",
    },
    {
      question: "How often should I have my roof cleaned in Chicago?",
      answer:
        "For most Chicago homes, we recommend roof cleaning every 3-5 years, or whenever dark streaks or moss growth become visible. Homes with heavy tree canopy coverage or north-facing slopes that stay shaded may need more frequent cleaning.",
    },
    {
      question: "How much does roof cleaning cost in Chicago?",
      answer:
        "Professional roof cleaning for a typical Chicago-area home ranges from $350 to $700 depending on the roof size, slope, and severity of biological growth. This is a modest investment compared to the cost of the premature roof replacement that neglected organic growth can cause.",
    },
    {
      question: "Can I clean my roof myself?",
      answer:
        "We advise against it for safety and effectiveness reasons. Walking on a wet, sloped roof is extremely dangerous, and consumer-grade cleaning products often lack the concentration needed to kill moss at the root level. Improper technique can also damage shingles or void your warranty.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Roof Cleaning",
          description:
            "Professional roof cleaning services in Chicago for removal of moss, algae, lichen, and debris from residential roofs.",
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
          serviceType: "Roof Cleaning",
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
          { label: "Roof Maintenance", href: "/roof-maintenance" },
          { label: "Roof Cleaning" },
        ]}
        title="Professional Roof Cleaning in Chicago"
        description="Those dark streaks and green patches on your roof are not just unsightly. They are living organisms that are actively degrading your shingles. Cornerstone Roofing Co. safely removes moss, algae, and lichen from Chicago-area roofs using methods that clean without causing damage."
        intro={`The black streaks that develop on asphalt shingle roofs throughout the Chicago area are caused by Gloeocapsa magma, a type of cyanobacteria (commonly called blue-green algae) that feeds on the limestone filler in shingle granules. Once it colonizes your roof, it spreads steadily across shingle surfaces, creating dark streaks that run from the ridge toward the eaves. Beyond the aesthetic impact, this organism retains moisture against the shingle surface, accelerating granule loss and shortening the roof's functional life.

Moss poses an even more serious threat. Moss thrives in the shaded, moisture-retaining conditions found on north-facing roof slopes and under tree canopies, both common scenarios in many Chicago neighborhoods. Unlike algae that sits on the surface, moss sends root-like structures called rhizoids into shingle tabs, lifting the edges and creating gaps where water enters during rain. Once established, moss growth can reduce a roof's effective life by 5 to 10 years if left untreated.

Cornerstone Roofing Co. uses a soft wash cleaning process that the Asphalt Roofing Manufacturers Association (ARMA) recommends as the only safe method for cleaning asphalt shingles. This technique applies a biodegradable cleaning solution at low pressure that kills moss, algae, and lichen at the root level without disturbing the granule layer. High-pressure washing, which some inexperienced operators use, strips granules from shingles and causes more damage than the organisms it removes.

Our cleaning service includes debris removal from valleys, behind dormers, and around penetrations where organic material accumulates and retains moisture. We also inspect the roof surface during cleaning and alert you to any damaged shingles, deteriorated flashing, or other issues we observe so you can address them proactively.`}
        processSteps={[
          {
            title: "Pre-Cleaning Roof Inspection",
            description:
              "We walk the roof surface to assess the type and severity of biological growth, check for loose or damaged shingles, and identify areas where debris has accumulated. This ensures our cleaning approach is appropriate for your roof's condition.",
          },
          {
            title: "Landscape & Surface Protection",
            description:
              "Plants, outdoor furniture, and surfaces below the roofline are covered or pre-rinsed to protect them from the cleaning solution. We take care to prevent runoff from affecting your landscaping.",
          },
          {
            title: "Soft Wash Application",
            description:
              "A biodegradable, bleach-based cleaning solution is applied across the roof surface at low pressure. The solution penetrates moss rhizoids and algae colonies, killing organic growth without disturbing the shingle granules.",
          },
          {
            title: "Dwell Time & Rinse",
            description:
              "The solution is allowed to dwell for the appropriate time based on the severity of growth. A gentle low-pressure rinse removes the dead organisms and cleaning residue, revealing clean shingle surfaces beneath.",
          },
          {
            title: "Debris Clearing & Final Check",
            description:
              "Valleys, gutters, and areas around penetrations are cleared of accumulated debris. We perform a final check of the entire roof surface and report any maintenance items observed during the cleaning.",
          },
        ]}
        benefits={[
          {
            title: "Extends Roof Lifespan by Years",
            description:
              "Removing moss and algae eliminates the organisms that accelerate granule loss and moisture retention, adding years of service life to your existing shingles.",
          },
          {
            title: "ARMA-Recommended Soft Wash Method",
            description:
              "Our low-pressure cleaning technique follows the Asphalt Roofing Manufacturers Association's guidelines, ensuring your shingles are cleaned safely without voiding the manufacturer warranty.",
          },
          {
            title: "Restores Curb Appeal Dramatically",
            description:
              "Dark algae streaks and green moss patches age a roof's appearance by years. Cleaning restores the original shingle color and significantly improves your home's curb appeal.",
          },
          {
            title: "Prevents Structural Moisture Damage",
            description:
              "Moss and debris trap moisture against the roof surface, which can lead to deck rot and interior water damage. Cleaning removes these moisture reservoirs.",
          },
          {
            title: "Protects Your Landscaping",
            description:
              "Our careful preparation process shields plants and surfaces from cleaning solutions, and we use biodegradable products that break down quickly and safely.",
          },
          {
            title: "Maintenance Items Reported",
            description:
              "During every cleaning, our crew notes any damaged shingles, deteriorated flashing, or other issues they observe, giving you an early warning before small problems grow.",
          },
        ]}
        faqs={faqs}
        serviceName="Roof Cleaning"
        serviceCategory="roofing"
      />
      <Footer />
    </div>
  );
}
