import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ContactCTA from "@/components/sections/ContactCTA";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Cornerstone Roofing Co.",
  description:
    "Answers to common questions about roofing, siding, insurance claims, costs, and maintenance from Cornerstone Roofing Co. in Chicago.",
  alternates: { canonical: `${BASE_URL}/faq` },
  openGraph: {
    title: "Frequently Asked Questions | Cornerstone Roofing Co.",
    description:
      "Answers to common questions about roofing, siding, insurance claims, costs, and maintenance.",
    url: `${BASE_URL}/faq`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */
interface FAQItem {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
  category: string;
}

const faqs: FAQItem[] = [
  /* -- General -- */
  {
    category: "General",
    question: "How long does roof replacement take?",
    answer:
      "Most residential roof replacements in the Chicago area are completed in 1 to 3 days, depending on the size and complexity of the roof. Larger homes, multi-layer tear-offs, or projects requiring structural repairs may take up to a week. We provide a detailed timeline before work begins so you can plan accordingly.",
    linkText: "Learn about our roof replacement process",
    linkHref: "/roof-replacement",
  },
  {
    category: "General",
    question: "How do I know if I need a new roof?",
    answer:
      "Common signs include curling, cracking, or missing shingles; granule loss in gutters; water stains on interior ceilings; daylight visible through the attic; and a roof age of 20 years or more. If you notice any of these, schedule a free inspection and we will assess the condition and recommend repair or replacement based on what we find.",
    linkText: "Read our guide: 8 Signs You Need a New Roof",
    linkHref: "/blog/signs-you-need-new-roof",
  },
  {
    category: "General",
    question: "Do you offer emergency roofing services?",
    answer:
      "Yes. We offer 24/7 emergency response for active roof leaks, storm damage, and fallen tree impacts. Our team can have a tarp on your roof within hours to stop further water intrusion, and we will schedule permanent repairs as quickly as weather and materials allow.",
    linkText: "Emergency roofing services",
    linkHref: "/emergency-roofing",
  },
  {
    category: "General",
    question: "Do I need a permit for roof replacement in Chicago?",
    answer:
      "Yes, the City of Chicago and most surrounding suburbs require a building permit for roof replacement. The permit ensures the work meets local building codes and is inspected for quality. We handle all permit applications and inspections as part of your project, so you do not need to visit city hall or manage the paperwork yourself.",
    linkText: "Roof replacement services",
    linkHref: "/roof-replacement",
  },

  /* -- Costs & Financing -- */
  {
    category: "Costs & Financing",
    question: "How much does a new roof cost in Chicago?",
    answer:
      "A standard asphalt shingle roof replacement on a typical Chicagoland home costs between $8,500 and $16,000, including materials, labor, permits, and disposal. Premium materials like metal or slate are higher. The final price depends on roof size, pitch, complexity, and whether structural repairs are needed. We provide free, detailed estimates with no obligation.",
    linkText: "Read our full cost guide",
    linkHref: "/blog/roof-replacement-cost-chicago",
  },
  {
    category: "Costs & Financing",
    question: "Do you offer financing?",
    answer:
      "Yes, we offer flexible financing through trusted third-party lenders. Options include 12-month same-as-cash promotional plans and longer-term installments with manageable monthly payments. We will walk you through the available programs during your estimate so you can choose the plan that fits your budget.",
    linkText: "Get a free estimate",
    linkHref: "/#contact",
  },

  /* -- Insurance & Claims -- */
  {
    category: "Insurance & Claims",
    question: "Does insurance cover roof damage?",
    answer:
      "Homeowners insurance typically covers roof damage caused by sudden, accidental events like hail, wind, fallen trees, and fire. It generally does not cover damage from wear and tear or deferred maintenance. We recommend filing a claim promptly after a storm and having a qualified roofer inspect the damage before the adjuster visit.",
    linkText: "Insurance claims assistance",
    linkHref: "/insurance-claims",
  },
  {
    category: "Insurance & Claims",
    question: "Can you work with my insurance company?",
    answer:
      "Absolutely. We work with all major insurance carriers and have extensive experience navigating the claims process. We provide a detailed scope of work in the Xactimate format that adjusters use, and we will meet your adjuster on-site to walk through every damage point. Our goal is to make sure you receive the full coverage your policy provides.",
    linkText: "Learn about our insurance claims process",
    linkHref: "/insurance-claims",
  },

  /* -- Materials -- */
  {
    category: "Materials",
    question: "What roofing materials work best in Chicago?",
    answer:
      "Architectural asphalt shingles are the most popular choice for Chicago homes due to their excellent balance of durability, aesthetics, and cost. Impact-resistant (Class 4) shingles are a smart upgrade in hail-prone areas and can reduce insurance premiums. For longevity, standing-seam metal roofing handles snow, ice, and wind exceptionally well. We help you choose the right material for your home, budget, and priorities.",
    linkText: "Explore roofing materials",
    linkHref: "/roofing/asphalt-shingles",
  },
  {
    category: "Materials",
    question: "What is the best siding for Midwest weather?",
    answer:
      "James Hardie fiber cement siding is widely considered the best siding choice for Midwest climates. The HZ5 formulation is specifically engineered for regions with freeze-thaw cycles, and its ColorPlus factory finish resists fading for 15+ years. Premium insulated vinyl and LP SmartSide engineered wood are also excellent options depending on your budget and aesthetic preferences.",
    linkText: "Siding services",
    linkHref: "/siding",
  },
  {
    category: "Materials",
    question: "What is the difference between TPO and EPDM?",
    answer:
      "TPO (thermoplastic polyolefin) and EPDM (ethylene propylene diene monomer) are both flat-roof membrane systems. TPO is a white, heat-welded membrane that reflects sunlight and provides good energy efficiency. EPDM is a black rubber membrane that is extremely durable and has a long track record. TPO is more commonly specified on new installations today, while EPDM remains an excellent, cost-effective option for replacements and repairs.",
    linkText: "Commercial and flat roofing",
    linkHref: "/commercial-roofing",
  },
  {
    category: "Materials",
    question: "How long does a roof last?",
    answer:
      "Roof lifespan varies by material. Three-tab asphalt shingles last 15 to 20 years. Architectural shingles last 25 to 30 years. Metal roofing lasts 40 to 70 years. Slate and tile can last 75 to 100+ years with maintenance. Climate, ventilation, and installation quality all affect actual lifespan. Regular inspections help you get the maximum life from your roofing system.",
    linkText: "Schedule a free roof inspection",
    linkHref: "/roof-inspection",
  },

  /* -- Maintenance -- */
  {
    category: "Maintenance",
    question: "How often should I have my roof inspected?",
    answer:
      "We recommend a professional roof inspection at least once every two years, plus after any major storm event. An inspection catches small issues — cracked caulking, lifted flashing, clogged drains — before they become expensive repairs. For roofs over 15 years old, annual inspections are a wise investment.",
    linkText: "Roof inspection services",
    linkHref: "/roof-inspection",
  },
  {
    category: "Maintenance",
    question: "How do I maintain my gutters?",
    answer:
      "Clean your gutters at least twice a year — once in late spring and again in late fall after leaves have dropped. Remove debris by hand or with a gutter scoop, flush the system with a hose, and check that downspouts are directing water at least 4 to 6 feet away from your foundation. Gutter guards can dramatically reduce cleaning frequency and prevent clogs.",
    linkText: "Gutter services",
    linkHref: "/gutters",
  },
  {
    category: "Maintenance",
    question: "What should I do if my roof is leaking?",
    answer:
      "First, contain the water inside your home — place buckets under drips and move furniture or valuables away from the affected area. If the leak is severe, call us for emergency tarping to stop the flow. Do not attempt to climb on a wet roof yourself. Document the damage with photos for insurance purposes, and schedule a professional repair as soon as possible.",
    linkText: "Emergency roofing services",
    linkHref: "/emergency-roofing",
  },

  /* -- Emergency -- */
  {
    category: "Emergency",
    question: "What happens during a roofing emergency?",
    answer:
      "When you call our emergency line, we dispatch a crew to your location as quickly as possible — typically within a few hours. The first priority is stopping active water intrusion with a professional tarp or temporary patch. We then document the damage, help you file an insurance claim if applicable, and schedule the permanent repair or replacement for the earliest available date.",
    linkText: "Emergency roofing details",
    linkHref: "/emergency-roofing",
  },
];

/* ------------------------------------------------------------------ */
/*  Group FAQs by category                                            */
/* ------------------------------------------------------------------ */
const categories = [
  "General",
  "Costs & Financing",
  "Insurance & Claims",
  "Materials",
  "Maintenance",
  "Emergency",
];

const faqsByCategory = categories.map((cat) => ({
  category: cat,
  items: faqs.filter((f) => f.category === cat),
}));

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */
export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* FAQPage JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "FAQ" },
              ]}
              dark
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl">
            Find answers to common questions about roofing, siding, insurance
            claims, costs, and home maintenance in the Chicago area.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqsByCategory.map((group) => (
              <div key={group.category} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6 pb-2 border-b border-border">
                  {group.category}
                </h2>

                <Accordion>
                  {group.items.map((faq, idx) => (
                    <AccordionItem key={idx} value={`${group.category}-${idx}`}>
                      <AccordionTrigger className="text-base font-semibold text-left py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                        {faq.linkText && faq.linkHref && (
                          <Link
                            href={faq.linkHref}
                            className="inline-flex items-center gap-1 text-secondary font-semibold mt-3 hover:underline text-sm"
                          >
                            {faq.linkText} &rarr;
                          </Link>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />

      <Footer />
    </div>
  );
}
