import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Commercial Roof Repair in Chicago, IL | Cornerstone Roofing Co.",
  description:
    "Commercial roof repair services in Chicago for TPO, EPDM, modified bitumen, and built-up flat roofs. Minimize business disruption with fast, professional repairs.",
  alternates: {
    canonical: `${BASE_URL}/commercial-roofing/commercial-roof-repair`,
  },
  openGraph: {
    title: "Commercial Roof Repair in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Commercial roof repair services in Chicago for TPO, EPDM, modified bitumen, and built-up flat roofs.",
    url: `${BASE_URL}/commercial-roofing/commercial-roof-repair`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function CommercialRoofRepairPage() {
  const faqs = [
    {
      question: "How quickly can you repair a commercial roof leak in Chicago?",
      answer:
        "For active leaks affecting business operations, we offer same-day and next-day response. Non-emergency commercial repairs are typically scheduled within one week. We coordinate timing with your facility management team to minimize operational impact.",
    },
    {
      question: "Can you repair a commercial roof while the building is occupied?",
      answer:
        "Yes. Most commercial roof repairs are performed from the roof surface with no disruption to interior operations. For repairs that involve odor-producing materials like torch-applied modified bitumen, we schedule work during off-hours or ensure adequate ventilation separation.",
    },
    {
      question: "How much does commercial roof repair cost?",
      answer:
        "Commercial repair costs depend on the membrane type, damage extent, and accessibility. Simple puncture or seam repairs typically range from $500 to $2,000. Larger area repairs involving insulation replacement or multiple penetrations can range from $2,000 to $10,000. We provide detailed estimates before beginning work.",
    },
    {
      question: "Should I repair or replace my commercial roof?",
      answer:
        "This depends on the overall condition, age, and extent of the current damage. If the membrane is generally sound and the damage is localized, repair is cost-effective. If core cuts reveal saturated insulation across a wide area, or if the membrane has reached the end of its service life, replacement provides better long-term value. We provide honest guidance based on what we find.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Commercial Roof Repair",
          description:
            "Professional commercial roof repair in Chicago for all flat and low-slope roofing systems.",
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
          serviceType: "Commercial Roof Repair",
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
          { label: "Commercial Roof Repair" },
        ]}
        title="Commercial Roof Repair in Chicago"
        description="A leaking commercial roof threatens your inventory, equipment, employees, and tenants. Cornerstone Roofing Co. delivers fast, effective commercial roof repairs across Chicagoland that get your building watertight and your business back to normal."
        intro={`Commercial roof leaks cost Chicago-area businesses millions of dollars annually in damaged inventory, interrupted operations, and emergency remediation. Unlike residential roofs where a drip in the attic has time to spread before causing visible damage, a leak in a commercial flat roof can send water directly onto merchandise, manufacturing equipment, server rooms, and customer areas with devastating speed.

The flat and low-slope roofing systems used on most commercial buildings in the Chicago area, including TPO, EPDM, modified bitumen, and built-up roofing, each have unique failure modes that require specific repair techniques. A TPO membrane repair involves heat-welding a patch using specialized equipment, while an EPDM repair uses adhesive-applied patches that require proper surface preparation and ambient temperature conditions. Using the wrong technique on the wrong material leads to failed repairs and repeat service calls.

Cornerstone Roofing Co. employs technicians trained and certified on every major commercial membrane system. We carry system-specific materials and tools on our commercial service trucks so repairs can be completed efficiently, often in a single visit. For building owners and property managers dealing with active leaks, we offer priority scheduling that gets a crew to your building within hours, not days.

Our commercial repair service goes beyond patching the immediate problem. We perform a surrounding-area inspection to identify other weak points that could fail in the near future, giving you the option to address multiple issues in a single mobilization. This proactive approach saves money, reduces disruption, and extends the functional life of your existing roof system.`}
        processSteps={[
          {
            title: "Priority Response & Assessment",
            description:
              "A commercial roofing technician arrives at your building to assess the damage. We work around your business hours when possible and coordinate building access with your facility team.",
          },
          {
            title: "Membrane-Specific Diagnosis",
            description:
              "We identify your roofing system type and pinpoint the failure point, whether it is a seam separation, puncture, flashing failure, or drainage issue. Core cuts may be taken to check for trapped moisture in the insulation layer.",
          },
          {
            title: "Repair Scope & Estimate",
            description:
              "You receive a detailed repair proposal specifying the membrane type, patch method, materials, and labor. For larger commercial properties, we provide options ranging from targeted repair to section replacement.",
          },
          {
            title: "Professional Repair Execution",
            description:
              "Our crew performs the repair using manufacturer-approved techniques and materials. TPO repairs are heat-welded, EPDM patches are adhesive-bonded, and modified bitumen sections are torch-applied, each following strict protocol.",
          },
          {
            title: "Post-Repair Inspection & Report",
            description:
              "A final inspection confirms the repair integrity. Building owners and property managers receive a written report with before-and-after photos for their records.",
          },
        ]}
        benefits={[
          {
            title: "Fast Response Minimizes Business Impact",
            description:
              "We understand that every hour a commercial roof leaks, your business loses money. Priority scheduling gets our crews to your building quickly to stop the damage.",
          },
          {
            title: "Certified on All Major Systems",
            description:
              "Our technicians hold manufacturer certifications for TPO, EPDM, modified bitumen, and built-up roofing repair, ensuring the right technique is used for your specific system.",
          },
          {
            title: "After-Hours and Weekend Service",
            description:
              "Repairs can be scheduled outside your business hours to avoid disruption to employees, customers, and tenants in your commercial building.",
          },
          {
            title: "Proactive Weak Point Assessment",
            description:
              "Every repair visit includes a surrounding-area inspection that identifies potential future failures so you can address them before they become emergencies.",
          },
          {
            title: "Detailed Documentation for Property Records",
            description:
              "Written repair reports with photographs are provided for your building files, useful for lease compliance, insurance records, and property sale due diligence.",
          },
          {
            title: "Extends Existing Roof Life",
            description:
              "Timely, professional repairs prevent small issues from cascading into system-wide failures, extending the years of service you get from your current commercial roof.",
          },
        ]}
        faqs={faqs}
        serviceName="Commercial Roof Repair"
        serviceCategory="roofing"
      />
      <Footer />
    </div>
  );
}
