import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Flat Roof Replacement in Chicago, IL | Commercial Roofing | Cornerstone Roofing Co.",
  description:
    "Complete flat roof replacement for commercial buildings in Chicago. TPO, EPDM, modified bitumen, and built-up systems installed by certified crews. Free estimates.",
  alternates: {
    canonical: `${BASE_URL}/commercial-roofing/flat-roof-replacement`,
  },
  openGraph: {
    title: "Flat Roof Replacement in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Complete flat roof replacement for commercial buildings in Chicago. TPO, EPDM, modified bitumen, and built-up systems.",
    url: `${BASE_URL}/commercial-roofing/flat-roof-replacement`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function FlatRoofReplacementPage() {
  const faqs = [
    {
      question: "How long does a commercial flat roof replacement take?",
      answer:
        "Timeline depends on the building size and system complexity. A 10,000-square-foot single-story commercial building typically takes 5-10 business days. Larger facilities or buildings with extensive rooftop equipment may take 2-4 weeks. We provide a detailed schedule before work begins.",
    },
    {
      question: "Can my business stay open during a flat roof replacement?",
      answer:
        "Yes, in most cases. We stage materials and equipment to minimize disruption and can phase the work in sections to keep occupied areas protected. Noise levels are moderate, and we coordinate with your team to avoid conflicts with business-critical hours or events.",
    },
    {
      question: "What is the best flat roof system for a commercial building in Chicago?",
      answer:
        "TPO is the most popular choice for its combination of energy efficiency, durability, and cost. EPDM is an excellent option for buildings where longevity and low maintenance are priorities. Modified bitumen excels on roofs with heavy foot traffic from maintenance crews. We help you evaluate options based on your specific building needs.",
    },
    {
      question: "How much does commercial flat roof replacement cost per square foot?",
      answer:
        "In the Chicago market, commercial flat roof replacement typically ranges from $5 to $12 per square foot depending on the membrane type, insulation requirements, and tear-off conditions. TPO and EPDM generally fall at the lower end, while multi-layer modified bitumen and built-up systems are at the higher end.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Flat Roof Replacement",
          description:
            "Commercial flat roof replacement services in Chicago using TPO, EPDM, modified bitumen, and built-up systems.",
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
          serviceType: "Flat Roof Replacement",
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
          { label: "Commercial Roofing", href: "/commercial-roofing" },
          { label: "Flat Roof Replacement" },
        ]}
        title="Flat Roof Replacement for Chicago Businesses"
        description="When your commercial flat roof has reached the end of its service life, a full replacement is the most cost-effective path forward. Cornerstone Roofing Co. installs new flat roofing systems that deliver decades of leak-free performance for Chicago-area businesses."
        intro={`A commercial flat roof typically lasts 15 to 30 years depending on the membrane type, installation quality, and maintenance history. When that service life is exhausted, ongoing repairs become increasingly frequent and expensive, and the underlying insulation is often waterlogged and no longer providing thermal protection. At that point, a full replacement is not just a roofing decision; it is a business decision that reduces operating costs, eliminates emergency repair disruptions, and protects your property for the next generation of use.

Cornerstone Roofing Co. has replaced flat roofs on retail centers, office buildings, warehouses, restaurants, schools, and multi-unit residential buildings throughout the Chicago metro area. Each replacement project begins with a thorough evaluation of the existing system, structural deck, and drainage conditions. We assess whether the existing insulation can be salvaged or must be replaced, check the deck for rot or corrosion, and evaluate current drainage to determine if improvements are needed to meet updated building codes.

Chicago's flat roof replacement projects face specific regional challenges. The city's building code requires minimum R-values for roof insulation that have increased significantly in recent years. Snow load requirements are substantial, and proper drainage slope, a minimum of one-quarter inch per foot, must be achieved to prevent ponding water that accelerates membrane deterioration. Our commercial team designs every replacement to meet or exceed these requirements.

We offer multiple membrane options to match your building's needs and budget. TPO provides excellent energy efficiency with its reflective surface. EPDM delivers proven long-term durability at a competitive price point. Modified bitumen offers superior puncture resistance for high-traffic roofs. We help you evaluate the trade-offs and select the system that provides the best return on your investment.`}
        processSteps={[
          {
            title: "Comprehensive Roof Survey",
            description:
              "Our commercial team inspects the existing roof, takes core samples to assess insulation and deck condition, evaluates drainage, and reviews rooftop equipment that must be integrated with the new system.",
          },
          {
            title: "System Design & Specification",
            description:
              "Based on the survey findings, we design the replacement system including membrane type, insulation R-value, tapered insulation for drainage slope, flashing details, and equipment curb specifications.",
          },
          {
            title: "Detailed Proposal & Scheduling",
            description:
              "You receive a line-item proposal covering tear-off, disposal, materials, labor, and warranty options. Scheduling is coordinated with your operations to minimize impact on your business.",
          },
          {
            title: "Tear-Off & Deck Preparation",
            description:
              "The existing membrane and insulation are removed. The structural deck is inspected and repaired as needed. New insulation is installed with tapered sections to create proper drainage slope.",
          },
          {
            title: "Membrane Installation",
            description:
              "The new membrane is installed according to manufacturer specifications with all seams welded or adhered, flashings integrated at walls and penetrations, and edge metal secured at the perimeter.",
          },
          {
            title: "Final Inspection & Warranty Activation",
            description:
              "A post-installation inspection confirms every detail meets manufacturer standards. We coordinate a manufacturer inspection if required for warranty registration, and provide you with complete project documentation.",
          },
        ]}
        benefits={[
          {
            title: "Eliminates Chronic Leak Problems",
            description:
              "A new membrane system with fresh insulation and properly sealed penetrations eliminates the recurring leaks that plague aging flat roofs and cost you money every season.",
          },
          {
            title: "Improves Energy Efficiency Dramatically",
            description:
              "Modern insulation R-values and reflective membrane surfaces can reduce heating and cooling costs by 15-30% compared to an aging system with compromised insulation.",
          },
          {
            title: "Meets Current Building Codes",
            description:
              "New installations meet the latest Chicago and Illinois building codes for insulation, wind resistance, fire rating, and drainage, future-proofing your building for years to come.",
          },
          {
            title: "Manufacturer Warranties Up to 30 Years",
            description:
              "Certified installation qualifies your building for manufacturer warranties covering both materials and workmanship for up to 30 years, depending on the system selected.",
          },
          {
            title: "Increases Property Value",
            description:
              "A new roof is a significant asset in commercial real estate. Prospective buyers and tenants view a recently replaced roof as a major positive during due diligence.",
          },
          {
            title: "Reduces Long-Term Maintenance Costs",
            description:
              "New membranes require minimal maintenance for the first 10-15 years, saving thousands in annual repair and inspection costs compared to an aging system that needs constant attention.",
          },
        ]}
        faqs={faqs}
        serviceName="Flat Roof Replacement"
        serviceCategory="roofing"
      />
      <Footer />
    </div>
  );
}
