import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Emergency Roof Repair in Chicago, IL | Same-Day Service | Cornerstone Roofing Co.",
  description:
    "Emergency roof repair across Chicagoland with same-day response. Storm damage, fallen trees, and structural failures handled fast. Call Cornerstone Roofing Co. now.",
  alternates: {
    canonical: `${BASE_URL}/emergency-roofing/emergency-roof-repair`,
  },
  openGraph: {
    title: "Emergency Roof Repair in Chicago, IL | Same-Day Service | Cornerstone Roofing Co.",
    description:
      "Emergency roof repair across Chicagoland with same-day response. Storm damage, fallen trees, and structural failures handled fast.",
    url: `${BASE_URL}/emergency-roofing/emergency-roof-repair`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function EmergencyRoofRepairPage() {
  const faqs = [
    {
      question: "How quickly can you get to my house for an emergency roof repair?",
      answer:
        "In most cases, we arrive within 2-4 hours of your call for locations within Cook and DuPage counties. Outer suburbs in Will, Kane, and Lake counties may take slightly longer. During major storm events with high call volume, we triage by severity and communicate estimated arrival times clearly.",
    },
    {
      question: "What qualifies as a roofing emergency?",
      answer:
        "Any situation where water is actively entering your home, structural integrity is compromised, or further damage is imminent without intervention. Common emergencies include large sections of missing shingles, fallen tree limbs on the roof, holes in the decking, and active leaks during rainfall.",
    },
    {
      question: "How much does emergency roof repair cost in Chicago?",
      answer:
        "Emergency repair costs vary based on the scope of damage and materials required. Minor tarping and patching typically ranges from $300 to $800. More extensive emergency repairs involving shingle replacement or flashing work can range from $800 to $2,500. We provide upfront pricing before beginning any work.",
    },
    {
      question: "Will my insurance cover emergency roof repair?",
      answer:
        "Most homeowner's insurance policies in Illinois cover emergency repairs caused by sudden events like storms, hail, wind, and fallen trees. Your policy requires you to mitigate further damage, which emergency repair satisfies. We document all work for your claim file.",
    },
    {
      question: "Do you charge extra for nights and weekends?",
      answer:
        "Our emergency service rates apply 24/7 including nights, weekends, and holidays. We do not add surcharges based on when you call. The rate is based on the scope of work required, not the time of day.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Emergency Roof Repair",
          description:
            "Same-day emergency roof repair services in Chicago and surrounding suburbs for storm damage, fallen trees, and structural failures.",
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
          serviceType: "Emergency Roof Repair",
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
          { label: "Emergency Roof Repair" },
        ]}
        title="Emergency Roof Repair in Chicago"
        description="When storm damage, fallen trees, or sudden structural failures compromise your roof, every minute counts. Cornerstone Roofing Co. dispatches emergency repair crews across the Chicagoland area with same-day response to stop damage before it spreads."
        intro={`A roofing emergency does not follow a convenient schedule. Severe thunderstorms rip through the western suburbs at midnight, ice storms bring down branches onto Northshore rooftops at dawn, and wind gusts peel back flashing during a Saturday afternoon cookout. Whatever the cause and whenever it strikes, the consequences of an exposed roof are the same: water intrusion that damages insulation, drywall, electrical systems, and personal belongings with alarming speed.

Cornerstone Roofing Co. maintains emergency response capability across Cook, DuPage, Will, Kane, and Lake counties. Our trucks are stocked with the materials needed for the most common emergency scenarios, including tarps, plywood, shingles, flashing, sealants, and fasteners. In many cases, we can complete a permanent or semi-permanent repair on the same visit, eliminating the need for a follow-up trip and minimizing your exposure to further damage.

Our emergency repair process begins with a rapid assessment of the damage scope. We identify the immediate threat, whether that is an open hole in the decking, missing shingles exposing underlayment, or compromised flashing allowing water to track along rafters. We stabilize the situation first, then document everything with photographs and measurements that support your insurance claim.

We understand that an emergency repair is stressful. You may be dealing with water on the floor, displaced belongings, and worried family members. Our crews are trained to communicate clearly, work efficiently, and leave your property as clean as conditions allow. We follow up within 48 hours to schedule any additional work and ensure the temporary measures are holding.`}
        processSteps={[
          {
            title: "Emergency Call & Dispatch",
            description:
              "Call our emergency line and speak with a live dispatcher who assesses your situation and sends the nearest available crew. We prioritize by severity to ensure the most critical situations receive the fastest response.",
          },
          {
            title: "On-Site Damage Assessment",
            description:
              "Our crew evaluates the extent of roof damage, identifies the source of water entry, and determines whether a permanent repair or temporary stabilization is the best immediate course of action.",
          },
          {
            title: "Immediate Stabilization",
            description:
              "We stop water intrusion using the most effective method for your situation, whether that means tarping, patching, reflashing, or replacing damaged shingles. The goal is to make your home watertight before we leave.",
          },
          {
            title: "Damage Documentation for Insurance",
            description:
              "Every area of damage is photographed and measured. We prepare documentation in the format insurance adjusters require, saving you time and strengthening your claim from the start.",
          },
          {
            title: "Permanent Repair Scheduling",
            description:
              "If the emergency repair is temporary, we schedule permanent restoration promptly. You receive a written scope and estimate so there are no surprises when the full repair begins.",
          },
        ]}
        benefits={[
          {
            title: "Same-Day Emergency Response",
            description:
              "Our crews are dispatched immediately after your call, with response times measured in hours, not days, across the entire Chicago metropolitan area.",
          },
          {
            title: "Fully Stocked Service Trucks",
            description:
              "Emergency vehicles carry tarps, shingles, flashing, plywood, and sealants so repairs can often be completed on the first visit without waiting for materials.",
          },
          {
            title: "Insurance Claim Documentation",
            description:
              "Professional damage documentation is prepared during every emergency call, giving your insurance claim the strongest possible foundation from day one.",
          },
          {
            title: "Licensed and Insured Crews",
            description:
              "Every technician on our emergency team is fully licensed, bonded, and insured, protecting you from liability during a high-stress situation.",
          },
          {
            title: "Follow-Up Within 48 Hours",
            description:
              "We check on every emergency repair within two days to confirm the stabilization is holding and to schedule any permanent restoration work needed.",
          },
          {
            title: "No Pressure, Honest Assessment",
            description:
              "We tell you exactly what your roof needs, nothing more, nothing less. If a $300 patch repair solves the problem, we will not push you toward a $15,000 replacement.",
          },
        ]}
        faqs={faqs}
        serviceName="Emergency Roof Repair"
        serviceCategory="roofing"
      />
      <Footer />
    </div>
  );
}
