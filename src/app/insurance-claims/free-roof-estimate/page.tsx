import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Free Roof Estimate in Chicago, IL | No Obligation | Cornerstone Roofing Co.",
  description:
    "Get a free, no-obligation roof estimate in Chicago from Cornerstone Roofing Co. Transparent pricing for repair, replacement, and insurance claims. Schedule your free estimate today.",
  alternates: {
    canonical: `${BASE_URL}/insurance-claims/free-roof-estimate`,
  },
  openGraph: {
    title: "Free Roof Estimate in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Get a free, no-obligation roof estimate in Chicago. Transparent pricing for repair, replacement, and insurance claims.",
    url: `${BASE_URL}/insurance-claims/free-roof-estimate`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function FreeRoofEstimatePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Roof Estimate",
          description:
            "Free, no-obligation roof estimates for repair, replacement, and insurance claims in Chicago and Chicagoland.",
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
          serviceType: "Free Roof Estimate",
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insurance Claims", href: "/insurance-claims" },
          { label: "Free Roof Estimate" },
        ]}
        title="Free Roof Estimates for Chicago Homeowners"
        description="Every good roofing decision starts with accurate information. Cornerstone Roofing Co. provides free, detailed roof estimates throughout the Chicagoland area with absolutely no obligation to hire us. Know exactly what your roof needs and what it will cost before you commit to anything."
        intro={`Getting a roofing estimate should not feel like a high-pressure sales pitch. Too many homeowners in the Chicago area have experienced the discomfort of inviting a contractor to their home for a free estimate only to be subjected to hours of aggressive upselling, manufactured urgency, and pricing gimmicks designed to force an on-the-spot decision. Cornerstone Roofing Co. does business differently.

Our estimate process is straightforward and transparent. A trained estimator visits your property, conducts a thorough inspection of your roof from both the exterior and the attic, takes precise measurements, photographs the current condition, and then prepares a detailed written estimate that breaks down every cost component: materials, labor, disposal, permits, and any optional upgrades. You receive this estimate in writing, typically within 24 to 48 hours, and you are free to compare it with other contractors, discuss it with your family, or file it away for future reference.

We provide estimates for every type of roofing service we offer, including full replacements, targeted repairs, new gutter systems, siding installation, and insurance claim restoration. For homeowners who suspect storm damage, our free estimate includes a damage assessment that can serve as the foundation for your insurance claim if damage is found.

Our pricing reflects the true cost of professional roofing work performed by licensed, insured crews using manufacturer-specified materials. We do not inflate prices to leave room for discounting, and we do not offer limited-time deals that pressure you into quick decisions. The price on your estimate is the price you pay, and it remains valid for 60 days so you have time to make an informed decision.`}
        processSteps={[
          {
            title: "Schedule Your Free Estimate",
            description:
              "Call us or submit a request online. We schedule your estimate at a time that works for you, including evenings and Saturdays. Appointments are typically available within 2-3 business days.",
          },
          {
            title: "On-Site Inspection & Measurement",
            description:
              "Our estimator inspects your roof, attic, gutters, and related components. Precise measurements are taken using satellite imaging and on-site verification. Photos document current conditions.",
          },
          {
            title: "Material & Option Discussion",
            description:
              "We discuss your goals, preferences, and budget. If multiple approaches are viable, such as repair versus replacement, we present each option so you can make an informed comparison.",
          },
          {
            title: "Detailed Written Estimate Delivery",
            description:
              "A line-item estimate is delivered within 24-48 hours, breaking down every cost component. For insurance claims, we also provide an Xactimate-formatted version for your adjuster.",
          },
          {
            title: "Questions & Follow-Up",
            description:
              "We are available by phone or email to answer any questions about the estimate. There is no follow-up pressure, no countdown timers on pricing, and no sales team calling you repeatedly.",
          },
        ]}
        benefits={[
          {
            title: "Completely Free, Truly No Obligation",
            description:
              "Our estimate costs you nothing and comes with zero pressure to hire us. We earn your business through quality and honesty, not high-pressure tactics.",
          },
          {
            title: "Detailed Line-Item Pricing",
            description:
              "Every cost component is listed separately so you can see exactly what you are paying for: materials, labor, disposal, permits, and any optional items.",
          },
          {
            title: "Multiple Options When Applicable",
            description:
              "When more than one approach can solve your roofing problem, we present each option with its pros, cons, and pricing so you can choose what best fits your situation.",
          },
          {
            title: "Insurance-Ready Documentation",
            description:
              "For storm damage estimates, we provide Xactimate-formatted documentation that your insurance company recognizes, streamlining the claim and approval process.",
          },
          {
            title: "60-Day Price Guarantee",
            description:
              "Our estimates are valid for 60 days, giving you ample time to compare contractors, consult with your family, and make a decision without rushed pricing pressure.",
          },
          {
            title: "Honest Assessment of Your Roof's Condition",
            description:
              "If your roof does not need work, we will tell you. If a repair can extend its life by several years, we recommend that over a replacement. Our reputation depends on honesty.",
          },
        ]}
        faqs={[
          {
            question: "Is the roof estimate really free?",
            answer:
              "Yes, completely free. There is no hidden fee, trip charge, or obligation of any kind. We provide the estimate, deliver a written proposal, and the decision to move forward is entirely yours on your timeline.",
          },
          {
            question: "How long does a roof estimate appointment take?",
            answer:
              "A typical estimate visit takes 30-45 minutes for a standard residential roof. Larger homes, commercial buildings, or properties with complex roof geometry may take up to an hour. The written estimate is delivered within 24-48 hours after the visit.",
          },
          {
            question: "Can I get estimates from multiple contractors?",
            answer:
              "Absolutely, and we encourage it. Comparing estimates is a smart approach to any major home investment. When comparing, look beyond the bottom-line price and compare materials specified, warranty terms, licensing, insurance coverage, and online reviews.",
          },
          {
            question: "Do you provide estimates for insurance claims?",
            answer:
              "Yes. Our free estimate includes storm damage assessment when applicable. If damage is found, we prepare Xactimate-formatted documentation that aligns with insurance industry standards, giving you everything you need to file or support your claim.",
          },
          {
            question: "How accurate are your estimates?",
            answer:
              "Our estimates are based on precise measurements and current material pricing. The final cost matches the estimate in the vast majority of cases. If unforeseen conditions are discovered during the project, such as hidden deck damage, we discuss the additional cost with you and obtain approval before proceeding.",
          },
        ]}
        serviceName="Free Roof Estimate"
      />
      <Footer />
    </div>
  );
}
