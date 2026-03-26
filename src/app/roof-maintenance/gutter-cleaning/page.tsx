import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Gutter Cleaning Services in Chicago, IL | Cornerstone Roofing Co.",
  description:
    "Professional gutter cleaning in Chicago. Prevent ice dams, foundation damage, and roof leaks with regular gutter maintenance. Twice-yearly service plans available.",
  alternates: {
    canonical: `${BASE_URL}/roof-maintenance/gutter-cleaning`,
  },
  openGraph: {
    title: "Gutter Cleaning Services in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Professional gutter cleaning in Chicago. Prevent ice dams, foundation damage, and roof leaks with regular gutter maintenance.",
    url: `${BASE_URL}/roof-maintenance/gutter-cleaning`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function GutterCleaningPage() {
  const faqs = [
    {
      question: "How often should gutters be cleaned in Chicago?",
      answer:
        "We recommend at minimum twice per year: once in late spring after tree blossoms and seed pods have fallen, and once in late November after fall leaf drop is complete. Homes surrounded by cottonwood, oak, or maple trees that produce heavy debris may benefit from an additional mid-summer cleaning.",
    },
    {
      question: "How much does gutter cleaning cost in Chicago?",
      answer:
        "Professional gutter cleaning for a typical single-story Chicago-area home ranges from $125 to $225. Two-story homes typically cost $175 to $325 due to the additional ladder work and access challenges. Our twice-yearly plans offer a discount compared to individual service calls.",
    },
    {
      question: "Can gutter cleaning prevent ice dams?",
      answer:
        "Clean gutters are one of the most effective defenses against ice dams. While proper attic insulation and ventilation are also important factors, clear gutters allow meltwater to drain freely rather than pooling and freezing at the roof edge. Most Chicago ice dam problems start with clogged gutters.",
    },
    {
      question: "Do you clean gutters in winter?",
      answer:
        "We perform gutter cleaning through late November. Once ice and snow have accumulated, cleaning becomes unsafe and ineffective. If you missed your fall cleaning and are experiencing ice dam issues, we offer ice dam removal services as a separate emergency service.",
    },
    {
      question: "Should I get gutter guards instead of regular cleaning?",
      answer:
        "Gutter guards significantly reduce the frequency of cleaning but do not eliminate it entirely. Fine debris and shingle granules can still accumulate in the trough over time. For most homeowners, guards are a worthwhile investment that reduces cleaning from twice yearly to once every 2-3 years. We install several guard types and can recommend the best option for your home.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Gutter Cleaning",
          description:
            "Professional gutter cleaning services in Chicago to prevent ice dams, foundation damage, and water backup issues.",
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
          serviceType: "Gutter Cleaning",
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
          { label: "Gutter Cleaning" },
        ]}
        title="Professional Gutter Cleaning in Chicago"
        description="Clogged gutters are not just a nuisance. In Chicago's climate, they cause ice dams, foundation flooding, fascia rot, and landscape erosion. Cornerstone Roofing Co. provides thorough gutter cleaning services that keep water flowing where it should: away from your home."
        intro={`A gutter system clogged with leaves, shingle granules, and decomposing organic matter is worse than no gutter system at all. When gutters are clear, they channel water into downspouts that discharge it safely away from your foundation. When they are clogged, water backs up under the roof edge, overflows down the fascia, pools around the foundation, and freezes into ice dams during Chicago's winters. Each of these consequences causes damage that far exceeds the cost of regular gutter cleaning.

Ice dams are perhaps the most destructive gutter-related problem in the Chicago area. When gutters are clogged in late fall and the first freeze arrives, trapped water and debris form a solid ice block in the gutter trough. As snow melts on the warmer upper portions of the roof, meltwater flows down to the frozen gutter and backs up under the shingle tabs, seeping into the attic, soaking insulation, staining ceilings, and damaging walls. Homes in neighborhoods with mature tree canopy, including Evanston, Wilmette, Hinsdale, Glen Ellyn, and many Chicago neighborhoods, are especially vulnerable because their gutters fill faster and more completely.

Cornerstone Roofing Co. cleans gutters by hand, removing all debris from the trough, flushing downspouts with water to confirm they are clear and flowing, and checking each section for proper slope, secure mounting, and structural integrity. We do not simply blow debris off the roof into your yard; we bag and remove it from your property.

Our service also includes a visual inspection of the gutter system and roof edge during every cleaning visit. We report any sagging sections, separated joints, rusted areas, or damaged fascia boards we observe so you can address issues before they become expensive repairs. Many of our customers opt for our twice-yearly cleaning plan, which includes spring and fall visits timed to address the two heaviest debris seasons.`}
        processSteps={[
          {
            title: "Full Gutter Trough Cleaning",
            description:
              "All leaves, twigs, shingle granules, and decomposed debris are removed by hand from every linear foot of gutter. Debris is collected in buckets, not scattered across your landscaping.",
          },
          {
            title: "Downspout Flushing",
            description:
              "Every downspout is flushed with water to confirm it is clear and draining properly. Clogs are cleared using a plumber's snake or high-pressure nozzle if accumulated debris has compacted inside the tube.",
          },
          {
            title: "System Inspection",
            description:
              "Gutters are checked for proper slope toward downspouts, secure hanger attachment, joint seal integrity, and any rust or corrosion. Fascia boards behind the gutters are inspected for moisture damage or rot.",
          },
          {
            title: "Ground-Level Discharge Check",
            description:
              "Downspout discharge points are verified to ensure water is directed away from the foundation. We recommend extensions or splash blocks if discharge is too close to the foundation wall.",
          },
          {
            title: "Service Report & Recommendations",
            description:
              "A brief report documents the work completed and any issues observed during the cleaning, including gutter repairs, guard installations, or roof maintenance items we recommend addressing.",
          },
        ]}
        benefits={[
          {
            title: "Prevents Ice Dam Formation",
            description:
              "Clean gutters allow snowmelt to flow freely off the roof edge rather than freezing into ice dams that force water under shingles and into your home during Chicago winters.",
          },
          {
            title: "Protects Your Foundation",
            description:
              "Properly flowing gutters channel thousands of gallons of water away from your foundation each year, preventing the basement flooding and foundation cracking that clogged gutters cause.",
          },
          {
            title: "Stops Fascia and Soffit Rot",
            description:
              "Water overflowing from clogged gutters saturates the fascia boards and soffit panels behind them, causing wood rot that is expensive to repair and invisible until it is advanced.",
          },
          {
            title: "Extends Gutter System Life",
            description:
              "Organic debris sitting in gutters retains moisture that corrodes aluminum and rusts steel. Regular cleaning prevents this premature deterioration and keeps your gutters functional for decades.",
          },
          {
            title: "Includes Visual System Inspection",
            description:
              "Every cleaning visit includes a check for gutter damage, loose hangers, separated joints, and fascia problems, catching maintenance needs early.",
          },
          {
            title: "Twice-Yearly Plans Available",
            description:
              "Our spring and fall cleaning plans are timed to address the two heaviest debris seasons in Chicago, keeping your gutters clear through the critical ice dam and heavy rain periods.",
          },
        ]}
        faqs={faqs}
        serviceName="Gutter Cleaning"
        serviceCategory="roofing"
      />
      <Footer />
    </div>
  );
}
