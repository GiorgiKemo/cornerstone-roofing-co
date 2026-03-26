import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Roof Tarping Services in Chicago, IL | Storm Damage Protection | Cornerstone Roofing Co.",
  description:
    "Professional roof tarping in Chicago to protect your home after storm damage. Heavy-duty tarps installed quickly to prevent water intrusion. Available 24/7.",
  alternates: {
    canonical: `${BASE_URL}/emergency-roofing/roof-tarping`,
  },
  openGraph: {
    title: "Roof Tarping Services in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "Professional roof tarping in Chicago to protect your home after storm damage. Heavy-duty tarps installed quickly to prevent water intrusion.",
    url: `${BASE_URL}/emergency-roofing/roof-tarping`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function RoofTarpingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Roof Tarping Services",
          description:
            "Emergency roof tarping services in Chicago to protect homes from water intrusion after storm damage.",
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
          serviceType: "Roof Tarping",
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Emergency Roofing", href: "/emergency-roofing" },
          { label: "Roof Tarping" },
        ]}
        title="Professional Roof Tarping in Chicago"
        description="When storm damage exposes your roof deck or tears away shingles, a professionally installed tarp is the fastest way to stop water from pouring into your home. Cornerstone Roofing Co. provides 24/7 roof tarping services across the Chicagoland area."
        intro={`A roof tarp is not a permanent fix, but it is the single most important step between storm damage and permanent repair. When hail, wind, or a fallen tree compromises your roofing system, the clock starts ticking immediately. Every rain shower, every morning dew, every bit of humidity finds its way through exposed decking and into your attic, insulation, and living spaces below. A properly installed tarp buys you the time you need to file an insurance claim, schedule a contractor, and complete permanent repairs without the damage getting worse by the hour.

Cornerstone Roofing Co. installs heavy-duty polyethylene tarps rated for extended outdoor exposure. Unlike the thin blue tarps sold at hardware stores, our materials resist tearing in high winds, block UV degradation, and maintain their waterproof integrity for weeks or even months when properly secured. We anchor every tarp using dimensional lumber battens, roofing screws, and perimeter weighting systems designed to withstand the sustained winds common along the Lake Michigan corridor.

Many homeowners attempt DIY tarping after a storm, only to find that their tarp has blown off within days or that water is pooling and seeping through improperly sealed edges. Professional installation matters because the tarp must extend well beyond the damaged area, conform to the roof's contours including ridges, valleys, and penetrations, and be secured in a way that does not create new damage to the surrounding shingles.

Our tarping service includes a complete damage assessment and photographic documentation for your insurance company. Illinois law requires homeowners to mitigate further damage after a covered event, and professional tarping satisfies this obligation while also demonstrating to your insurer that you acted responsibly and promptly.`}
        processSteps={[
          {
            title: "Emergency Dispatch",
            description:
              "Contact our 24/7 line and a dispatcher sends the nearest available tarping crew to your location. We carry multiple tarp sizes on every emergency truck to handle any roof area.",
          },
          {
            title: "Damage Area Assessment",
            description:
              "We identify the full extent of exposed or compromised roof surface, including areas that may not be visible from the ground. The tarp must cover well beyond the damage perimeter to be effective.",
          },
          {
            title: "Tarp Selection & Sizing",
            description:
              "Based on the damage footprint, roof geometry, and expected duration of coverage, we select the appropriate tarp weight and size. Larger or irregularly shaped damage areas may require multiple overlapping tarps.",
          },
          {
            title: "Professional Installation & Anchoring",
            description:
              "The tarp is laid over the damaged area and anchored with lumber battens screwed through the tarp into sound decking. Edges are sealed and weighted to resist wind uplift and prevent water pooling.",
          },
          {
            title: "Documentation & Insurance Report",
            description:
              "We photograph the damage before and after tarping, note the materials used, and provide a written report you can submit to your insurance company as proof of damage mitigation.",
          },
        ]}
        benefits={[
          {
            title: "Stops Water Intrusion Immediately",
            description:
              "A professionally installed tarp prevents rain, snowmelt, and humidity from entering your home through the damaged section, halting the cascade of interior damage.",
          },
          {
            title: "Heavy-Duty Materials Built for Chicago Weather",
            description:
              "Our commercial-grade tarps resist wind, UV exposure, and tearing far longer than consumer-grade products, lasting weeks or months until permanent repairs are scheduled.",
          },
          {
            title: "Satisfies Insurance Mitigation Requirements",
            description:
              "Illinois homeowner policies require you to prevent further damage after a covered loss. Professional tarping meets this obligation and strengthens your claim.",
          },
          {
            title: "Prevents Mold and Structural Rot",
            description:
              "Sealing the roof quickly stops moisture from saturating insulation and wood framing, preventing the mold growth and structural decay that begin within 48-72 hours of water exposure.",
          },
          {
            title: "Buys Time for Proper Repairs",
            description:
              "After a major storm, roofing contractors are booked weeks out. A quality tarp lets you wait for your preferred contractor without your home deteriorating in the meantime.",
          },
          {
            title: "Available Around the Clock",
            description:
              "Storms do not wait for business hours and neither do we. Our tarping crews are available 24 hours a day, 7 days a week, 365 days a year.",
          },
        ]}
        faqs={[
          {
            question: "How long does a roof tarp last?",
            answer:
              "Our commercial-grade tarps are rated for 90 days or more of continuous outdoor exposure. In practice, a well-installed tarp can protect your roof for several months. We recommend scheduling permanent repairs as soon as possible, but the tarp provides reliable protection while you coordinate with your insurance company and contractor.",
          },
          {
            question: "How much does roof tarping cost in Chicago?",
            answer:
              "Professional roof tarping typically costs between $250 and $1,000 depending on the size of the area that needs coverage and the complexity of the roof geometry. This cost is almost always covered by homeowner's insurance as a damage mitigation expense.",
          },
          {
            question: "Can I tarp my own roof?",
            answer:
              "While it is physically possible, we strongly advise against it for safety and effectiveness reasons. Climbing a damaged roof is dangerous, and improperly secured tarps often blow off in the first windstorm, leaving your home exposed again. Insurance companies may also question the adequacy of a DIY tarp installation.",
          },
          {
            question: "Will a tarp damage my existing shingles?",
            answer:
              "Our installation method is designed to minimize impact on surrounding shingles. We use battens that distribute pressure across a wider area and place screws into decking rather than through good shingles whenever possible. Any minor fastener penetrations are sealed during permanent repairs.",
          },
        ]}
        serviceName="Roof Tarping"
      />
      <Footer />
    </div>
  );
}
