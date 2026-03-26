import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "EPDM Roofing Installation in Chicago, IL | Commercial Roofing | Cornerstone Roofing Co.",
  description:
    "EPDM rubber roofing installation and repair for commercial buildings in Chicago. Proven 60+ year track record, exceptional weather resistance, and warranties up to 30 years.",
  alternates: {
    canonical: `${BASE_URL}/commercial-roofing/epdm-roofing`,
  },
  openGraph: {
    title: "EPDM Roofing Installation in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "EPDM rubber roofing installation and repair for commercial buildings in Chicago. Proven durability and exceptional weather resistance.",
    url: `${BASE_URL}/commercial-roofing/epdm-roofing`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function EPDMRoofingPage() {
  const faqs = [
    {
      question: "What is the difference between EPDM and TPO roofing?",
      answer:
        "EPDM is a thermoset rubber membrane that is adhered or ballasted and sealed with adhesive tape at seams. TPO is a thermoplastic membrane that is heat-welded at seams. EPDM has a longer track record and better cold-weather flexibility, while TPO offers superior energy efficiency with its reflective surface and stronger welded seams. The best choice depends on your building's specific needs.",
    },
    {
      question: "How long does an EPDM roof last?",
      answer:
        "A well-installed EPDM roof typically lasts 25-40 years in Chicago's climate. Some EPDM installations have exceeded 50 years of service. The key factors affecting longevity are membrane thickness, installation quality, and consistent maintenance of seams and flashings.",
    },
    {
      question: "Is EPDM roofing energy efficient?",
      answer:
        "Traditional black EPDM absorbs solar heat, which increases summer cooling costs but can reduce winter heating costs. White EPDM membranes reflect solar radiation similarly to TPO, qualifying for cool roof incentives. For Chicago buildings that spend more on heating than cooling, black EPDM can actually provide better year-round energy economics.",
    },
    {
      question: "How much does EPDM roofing cost for a commercial building?",
      answer:
        "EPDM roofing installation in Chicago typically costs $5 to $9 per square foot for a complete system including insulation and tear-off. Ballasted systems tend to cost less than fully adhered systems. A 15,000-square-foot building would range from $75,000 to $135,000 depending on the system configuration.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "EPDM Roofing Installation",
          description:
            "EPDM rubber roofing membrane installation and repair for commercial buildings in Chicago.",
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
          serviceType: "EPDM Roofing",
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
          { label: "EPDM Roofing" },
        ]}
        title="EPDM Rubber Roofing for Chicago Commercial Properties"
        description="EPDM has been protecting commercial buildings worldwide for over 60 years, making it the most time-tested single-ply membrane in the industry. Cornerstone Roofing Co. installs EPDM systems engineered to withstand Chicago's extreme temperature range and severe weather events."
        intro={`Ethylene Propylene Diene Monomer, known as EPDM, is a synthetic rubber membrane that has earned its reputation through six decades of real-world performance on millions of commercial roofs. Originally developed in the 1960s, EPDM has been refined and improved over the years, but its fundamental chemistry remains rooted in a material that excels where many modern alternatives still struggle: extreme cold flexibility.

This cold-weather advantage makes EPDM particularly well-suited for Chicago commercial buildings. When temperatures plunge below zero and other membrane types stiffen, contract, and risk cracking, EPDM remains flexible and maintains its seal integrity. The material's elongation capacity allows it to expand and contract with the building structure through Chicago's annual temperature range of over 100 degrees without losing its waterproofing properties.

Cornerstone Roofing Co. is a certified EPDM installer for Firestone Building Products and Carlisle SynTec, two of the most respected names in commercial roofing. Our crews are trained on both ballasted and fully adhered installation methods, giving us the flexibility to select the attachment approach that best suits your building's structural capacity, wind exposure, and budget.

EPDM is available in both black and white versions. The traditional black membrane absorbs solar heat, which can be advantageous for reducing heating costs during Chicago's long winters. White EPDM provides the reflective benefits associated with cool roofing, reducing summer cooling loads. We help you evaluate which option delivers the best year-round energy performance based on your building's heating and cooling profile.`}
        processSteps={[
          {
            title: "Structural & Condition Assessment",
            description:
              "We evaluate your existing roof deck, structural capacity, and current insulation performance. Core samples are taken if the existing roof is suspected of trapping moisture beneath the membrane.",
          },
          {
            title: "System Selection & Engineering",
            description:
              "Based on your building's structural capacity, wind zone, and energy goals, we specify the EPDM membrane thickness (45-mil, 60-mil, or 90-mil), attachment method, and insulation configuration.",
          },
          {
            title: "Existing System Removal",
            description:
              "The old roof is removed down to the structural deck. Any damaged decking is replaced, and the surface is prepared to receive new insulation and membrane layers.",
          },
          {
            title: "Insulation & Cover Board Installation",
            description:
              "Rigid insulation boards are installed to meet current energy code requirements, with tapered sections providing proper drainage slope. A protective cover board is applied over the insulation to create a smooth substrate.",
          },
          {
            title: "EPDM Membrane Application",
            description:
              "The EPDM sheet is rolled out across the prepared surface and bonded using adhesive or ballasted with river-washed stone, depending on the specified system. Seams are sealed with factory-applied tape or adhesive per manufacturer standards.",
          },
          {
            title: "Flashings, Penetrations & Final Inspection",
            description:
              "All wall flashings, curbs, drains, and penetrations are sealed with EPDM-compatible flashing materials. A comprehensive final inspection ensures every detail meets manufacturer standards for full warranty activation.",
          },
        ]}
        benefits={[
          {
            title: "Unmatched Cold Weather Performance",
            description:
              "EPDM remains flexible at temperatures far below zero, maintaining its waterproof seal through Chicago's harshest winter conditions when other membranes become brittle.",
          },
          {
            title: "60+ Year Proven Track Record",
            description:
              "No other single-ply membrane has the decades of real-world performance data that EPDM offers. First-generation EPDM roofs installed in the 1960s are still performing today.",
          },
          {
            title: "Exceptional Hail Resistance",
            description:
              "EPDM's rubber composition absorbs impact energy rather than cracking, providing excellent resistance to the hail events that regularly damage Chicago-area roofs.",
          },
          {
            title: "Low Lifecycle Cost",
            description:
              "EPDM's long service life, low maintenance requirements, and moderate installation cost combine to deliver one of the lowest lifecycle costs of any commercial roofing system.",
          },
          {
            title: "UV and Ozone Resistant",
            description:
              "The material's chemical composition inherently resists UV degradation and ozone attack without requiring protective coatings, reducing long-term maintenance needs.",
          },
          {
            title: "Available in Black or White",
            description:
              "Black EPDM absorbs solar heat to reduce winter heating costs, while white EPDM reflects sunlight to lower summer cooling loads, letting you optimize for your building's energy profile.",
          },
        ]}
        faqs={faqs}
        serviceName="EPDM Roofing"
        serviceCategory="roofing"
      />
      <Footer />
    </div>
  );
}
