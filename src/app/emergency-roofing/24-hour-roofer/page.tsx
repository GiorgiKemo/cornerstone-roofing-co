import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "24-Hour Roofer in Chicago, IL | After-Hours Emergency Service | Cornerstone Roofing Co.",
  description:
    "24-hour roofer in Chicago available nights, weekends, and holidays. Cornerstone Roofing Co. provides round-the-clock emergency roofing service across Chicagoland.",
  alternates: {
    canonical: `${BASE_URL}/emergency-roofing/24-hour-roofer`,
  },
  openGraph: {
    title: "24-Hour Roofer in Chicago, IL | Cornerstone Roofing Co.",
    description:
      "24-hour roofer in Chicago available nights, weekends, and holidays. Round-the-clock emergency roofing service across Chicagoland.",
    url: `${BASE_URL}/emergency-roofing/24-hour-roofer`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function TwentyFourHourRooferPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "24-Hour Roofer",
          description:
            "Round-the-clock emergency roofing service in Chicago available nights, weekends, and holidays.",
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
          serviceType: "24-Hour Emergency Roofing",
        }}
      />
      <ServicePageTemplate
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Emergency Roofing", href: "/emergency-roofing" },
          { label: "24-Hour Roofer" },
        ]}
        title="24-Hour Roofer Serving Chicago & Suburbs"
        description="Roofing emergencies strike without warning and rarely during business hours. Cornerstone Roofing Co. operates a true 24-hour emergency roofing service, so whether your call comes at 3 AM on a Tuesday or noon on Christmas Day, a real person answers and a crew is dispatched."
        intro={`Most roofing companies answer calls from 8 to 5, Monday through Friday. Their voicemail greets you at 5:01 PM, and their first available appointment is sometime next week. That scheduling model works fine for planned projects, but it fails completely when a tree limb crashes through your roof at midnight during a thunderstorm, or when a winter ice dam sends water streaming down your living room wall on a Sunday morning.

Cornerstone Roofing Co. recognized early on that Chicago homeowners need more than a daytime-only roofing contractor. The greater Chicago area sits in one of the most active severe weather corridors in the Midwest. The National Weather Service issues severe thunderstorm and tornado watches for the region dozens of times each year, and these events disproportionately occur in the late afternoon and evening hours when most contractors have gone home.

Our 24-hour service is not an answering service that takes a message and promises a callback. When you call our emergency line, you reach a live dispatcher who can assess your situation, provide guidance for immediate steps you can take to protect your home, and deploy a crew to your location. Our emergency technicians are experienced roofers, not handymen making extra money on night shifts. They carry full repair and tarping kits and have the skills to stabilize virtually any residential roofing emergency.

We serve the entire Chicago metropolitan area including all of Cook County, DuPage County, Will County, Kane County, and Lake County. Whether you are in a high-rise-adjacent neighborhood like Streeterville, a quiet subdivision in Aurora, or a lakefront community in Highland Park, our crews can reach you.`}
        processSteps={[
          {
            title: "Call Our 24/7 Emergency Line",
            description:
              "A live dispatcher answers your call at any hour, day or night. Describe your situation and they will assess the urgency, provide immediate safety guidance, and dispatch a crew.",
          },
          {
            title: "Rapid Crew Deployment",
            description:
              "The nearest available emergency team is dispatched to your location with a fully stocked truck. We communicate an estimated arrival time and update you if conditions change.",
          },
          {
            title: "On-Site Assessment & Safety Check",
            description:
              "Our crew evaluates the damage, checks for safety hazards like downed power lines or structural instability, and determines the best immediate course of action to protect your home and family.",
          },
          {
            title: "Emergency Repair or Tarping",
            description:
              "Depending on the damage type and severity, we perform a permanent repair, install a temporary patch, or apply heavy-duty tarping to seal the roof until a full repair can be scheduled during daylight hours.",
          },
          {
            title: "Next-Day Follow-Up",
            description:
              "A project manager contacts you the following business day to review the emergency work, discuss any additional repairs needed, and provide a written estimate for permanent restoration if applicable.",
          },
        ]}
        benefits={[
          {
            title: "True 24/7 Availability",
            description:
              "Our emergency line is staffed every hour of every day, including nights, weekends, and all holidays. You never reach a voicemail when your roof is compromised.",
          },
          {
            title: "Experienced Emergency Roofers",
            description:
              "Our after-hours crews are full-time roofing professionals with years of emergency response experience, not temporary labor or subcontractors.",
          },
          {
            title: "No After-Hours Surcharges",
            description:
              "We charge based on the scope of work required, not the time of day. Calling at midnight does not cost more than calling at noon.",
          },
          {
            title: "Complete Chicagoland Coverage",
            description:
              "Our emergency service area covers Cook, DuPage, Will, Kane, and Lake counties, reaching virtually every suburb in the greater Chicago metropolitan area.",
          },
          {
            title: "Safety-First Approach",
            description:
              "Our crews assess for secondary hazards including downed power lines, gas line exposure, and structural instability before beginning any repair work.",
          },
          {
            title: "Seamless Transition to Permanent Repairs",
            description:
              "Emergency stabilization flows directly into our standard repair or replacement process, with a single project manager overseeing the entire job from first call to final walkthrough.",
          },
        ]}
        faqs={[
          {
            question: "Do you really answer the phone 24 hours a day?",
            answer:
              "Yes. Our emergency dispatch line is staffed by live personnel around the clock, 365 days a year. We do not use an answering service or automated system for emergency calls. When you call, a real person answers, assesses your situation, and dispatches a crew.",
          },
          {
            question: "What areas do you serve for 24-hour emergency roofing?",
            answer:
              "We serve the entire Chicago metropolitan area including Cook County, DuPage County, Will County, Kane County, and Lake County. This covers Chicago proper and all surrounding suburbs from Waukegan to Joliet and from Aurora to the Indiana border.",
          },
          {
            question: "Can you do permanent repairs at night, or only tarping?",
            answer:
              "It depends on the situation. Many repairs can be completed at night with our truck-mounted lighting. For complex repairs that require full daylight for safety and quality reasons, we stabilize the roof with tarping and schedule the permanent repair for the earliest available daylight slot.",
          },
          {
            question: "Should I try to tarp my roof myself while waiting for your crew?",
            answer:
              "We strongly advise against climbing on a damaged roof, especially during a storm or at night. The risk of falls, electrocution from downed lines, and structural collapse is too high. If water is entering your home, move belongings away from the leak, place containers to catch water, and wait for our professional crew to arrive safely.",
          },
          {
            question: "How do I know if my situation is a true emergency?",
            answer:
              "If water is actively entering your home, if a large section of your roof is missing or visibly damaged, if a tree or large branch has struck your roof, or if you can see daylight through your roof from inside the attic, call us immediately. When in doubt, call. We would rather assess your situation and tell you it can wait until morning than have you endure hours of preventable damage.",
          },
        ]}
        serviceName="24-Hour Emergency Roofing"
      />
      <Footer />
    </div>
  );
}
