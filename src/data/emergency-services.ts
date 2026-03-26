export interface EmergencyProcessStep {
  title: string;
  description: string;
}

export interface EmergencyFAQ {
  q: string;
  a: string;
}

export interface EmergencyService {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  urgencyNote: string;
  processSteps: EmergencyProcessStep[];
  faq: EmergencyFAQ[];
}

export const emergencyServices: EmergencyService[] = [
  {
    slug: "emergency-roof-repair",
    title: "Emergency Roof Repair",
    metaTitle: "Emergency Roof Repair Chicago, IL | 24/7 Response | Cornerstone Roofing Co.",
    metaDescription:
      "Emergency roof repair in Chicago with rapid response. Storm damage, fallen trees, sudden leaks — our crews mobilize fast to protect your home. Call now for immediate help.",
    intro: `When a severe storm tears through the Chicagoland area and leaves your roof compromised, every hour of delay increases the damage to your home's interior. Water pouring through a breached roof deck does not pause to wait for business hours. It saturates insulation, warps ceiling drywall, seeps into wall cavities, and creates conditions for mold colonization that can begin within 24-48 hours in warm, humid conditions. Emergency roof repair exists for exactly these moments, when the gap between damage and response determines whether you face a roof repair bill or a comprehensive interior restoration project.

Cornerstone Roofing Co. maintains an emergency response protocol that allows us to deploy crews across Cook, DuPage, Will, Kane, and Lake counties when severe weather strikes. Our emergency trucks carry tarping materials, plywood, sealants, and common shingle profiles so we can stabilize your roof quickly and prevent further water entry. Once the immediate threat is contained, we transition into a full damage assessment and permanent repair plan, coordinating with your insurance company when the damage is claim-eligible.

Our emergency service covers the full spectrum of sudden roof failures: shingles stripped by straight-line winds, punctures from falling tree limbs, flashing failures during torrential downpours, and structural compromise from heavy snow or ice accumulation. We have responded to emergencies ranging from a single missing shingle on a Skokie ranch to an entire roof section collapsed by a fallen oak in Hinsdale. No matter the scale, our priority is stopping the water and securing the structure.`,
    urgencyNote:
      "Active roof leaks during rain or after storms require immediate attention. Water entering your home can cause thousands of dollars in additional damage every hour. Call Cornerstone Roofing Co. immediately for emergency response. We answer calls 24 hours a day, 7 days a week, and can typically have a crew on site within 2-4 hours during active weather events across the Chicagoland area.",
    processSteps: [
      {
        title: "Emergency Call Intake",
        description:
          "Our dispatcher gathers critical details about the damage, your address, and current conditions. We prioritize calls based on severity, active water entry, and safety risk, ensuring the most urgent situations get the fastest response.",
      },
      {
        title: "Rapid On-Site Assessment",
        description:
          "A crew arrives to evaluate the damage, identify the source of water entry, and determine the fastest stabilization method. Safety is assessed before anyone accesses the roof.",
      },
      {
        title: "Temporary Stabilization",
        description:
          "Tarps, board-up materials, or emergency sealants are applied to stop active water intrusion. The goal is a watertight temporary seal that protects your home until permanent repairs can be completed.",
      },
      {
        title: "Damage Documentation",
        description:
          "We photograph and document all damage for your insurance claim, including the condition of the roof, attic, and any affected interior areas. This documentation is provided to you and your adjuster.",
      },
      {
        title: "Permanent Repair Planning",
        description:
          "Within 24-48 hours of stabilization, we provide a detailed scope and estimate for permanent repairs. If insurance is involved, we coordinate timing with your adjuster's inspection.",
      },
    ],
    faq: [
      {
        q: "How quickly can you respond to a roof emergency in Chicago?",
        a: "During active weather events, we typically arrive within 2-4 hours for emergencies involving active water entry. Outside of storm periods, our standard emergency response time is same-day, usually within a few hours of your call. We serve the entire Chicagoland metro area.",
      },
      {
        q: "What should I do while waiting for the emergency crew?",
        a: "Place buckets or containers under active drips to contain water. Move furniture, electronics, and valuables away from affected areas. If water is near electrical fixtures or outlets, turn off the circuit at your breaker panel. Do not attempt to access the roof yourself, especially during storms or in wet conditions.",
      },
      {
        q: "Does insurance cover emergency roof repair?",
        a: "Most homeowner's policies cover emergency mitigation and repair for sudden, accidental events like storm damage, fallen trees, and wind damage. Your policy requires you to take reasonable steps to prevent additional damage, which is exactly what emergency tarping and stabilization accomplish. We document everything for your claim.",
      },
      {
        q: "Is the emergency tarping fee applied toward the permanent repair cost?",
        a: "Yes. When you hire Cornerstone for the permanent repair or replacement, the emergency tarping fee is credited toward your total project cost. This means the emergency service is effectively free when we complete the full restoration.",
      },
    ],
  },
  {
    slug: "roof-tarping",
    title: "Roof Tarping Services",
    metaTitle: "Roof Tarping Services Chicago, IL | Emergency Tarp Installation | Cornerstone Roofing",
    metaDescription:
      "Professional roof tarping in Chicago to prevent further damage after storms. Secure, code-compliant tarp installation that holds until permanent repairs are made.",
    intro: `A properly installed roof tarp is the critical bridge between storm damage and permanent repair. In the weeks or months that it takes to coordinate insurance approvals, order materials, and schedule a crew, your roof must remain watertight through whatever Chicago's weather throws at it next. A tarp draped loosely over the damage and weighted with cinder blocks, the approach many homeowners attempt on their own, will not survive the first windstorm. Professional tarping requires mechanical attachment to the roof deck, proper tensioning, and waterproof sealing at all edges to create a temporary membrane that performs reliably until the permanent fix goes in.

Cornerstone Roofing Co. uses heavy-duty UV-stabilized polyethylene tarps rated for extended outdoor exposure. Our installation method involves securing 2x4 nailer boards through the tarp into the roof deck along all edges and ridgelines, creating a wind-resistant attachment that withstands Chicago's 40-60 mph gusts. We extend tarps well beyond the damaged area to account for wind-driven rain that enters at angles, and we seal the perimeter with roofing cement to prevent water tracking under the tarp edges.

Our tarping service is not limited to post-storm emergencies. We tarp roofs during mid-project weather interruptions, before planned tear-offs when rain is in the forecast, and over sections awaiting insurance adjuster inspections. We also re-tarp existing temporary covers installed by homeowners or other contractors that have failed or are at risk of failure. A secure tarp gives you time to make the right decision about permanent repairs without the pressure of active water damage.`,
    urgencyNote:
      "Do not attempt to tarp your own roof. Falls from residential roofs account for thousands of emergency room visits annually, and wet, damaged roofing surfaces are extremely hazardous. Cornerstone's trained crews have the equipment, harnesses, and experience to tarp safely in any conditions. Call us immediately and stay off the roof.",
    processSteps: [
      {
        title: "Damage Area Sizing",
        description:
          "We measure the damaged area and determine the appropriate tarp size, ensuring at least 4 feet of overlap beyond all damage edges to prevent wind-driven rain infiltration.",
      },
      {
        title: "Surface Preparation",
        description:
          "Loose debris, displaced shingles, and protruding nails are cleared from the tarping area. Sharp edges that could puncture the tarp are covered or removed.",
      },
      {
        title: "Mechanical Tarp Installation",
        description:
          "The tarp is positioned and mechanically fastened using 2x4 nailer boards screwed through the tarp into the roof deck. All edges are sealed with roofing cement. The tarp is tensioned to eliminate pooling areas where water could collect.",
      },
      {
        title: "Inspection & Documentation",
        description:
          "The installed tarp is inspected for secure attachment and proper drainage. Photos are taken for your insurance file, documenting both the original damage and the mitigation measure in place.",
      },
    ],
    faq: [
      {
        q: "How long will a professional roof tarp last?",
        a: "Our UV-stabilized tarps and mechanical attachment method are designed to hold for 90 days or longer under normal Chicagoland weather conditions. We use commercial-grade materials that resist degradation from sun, wind, and temperature extremes. If an extended delay occurs before permanent repair, we will inspect and reinforce the tarp as needed.",
      },
      {
        q: "Can I tarp my own roof?",
        a: "We strongly advise against it. Roof access during or after storms is extremely dangerous, especially on wet, damaged surfaces. Professional roofers use fall protection harnesses, stable ladder systems, and have the training to move safely on compromised roof structures. The risk of a fall injury far outweighs the cost of professional tarping.",
      },
      {
        q: "Will the tarp installation cause additional damage to my roof?",
        a: "The nailer board attachment method creates small fastener holes in the roof deck, but these are sealed and will be repaired or covered during the permanent roof repair. This minimal intervention is far preferable to the extensive water damage that occurs without a secure tarp in place.",
      },
      {
        q: "Does my insurance company require professional tarping?",
        a: "Most policies require you to take reasonable steps to mitigate further damage. Professional tarping clearly meets this requirement and is a reimbursable expense under most storm damage claims. Failing to protect the roof after damage can give your insurer grounds to deny coverage for additional water damage.",
      },
    ],
  },
  {
    slug: "roof-leak-repair",
    title: "Roof Leak Repair",
    metaTitle: "Roof Leak Repair in Chicago, IL | Find & Fix Leaks Fast | Cornerstone Roofing Co.",
    metaDescription:
      "Expert roof leak detection and repair in Chicago. We trace leaks to their source and fix them permanently. Interior stains, dripping water, musty attic — we solve it all.",
    intro: `Roof leaks are deceptively complex. The water stain on your living room ceiling may be directly below the leak source, or it may be six, ten, or twenty feet away from where water actually enters the roof. In a typical Chicago home, water entering through a failed pipe boot flashing or a cracked valley can travel along a rafter, run horizontally across the top of a ceiling joist, pool on a vapor barrier, and finally drip through at a light fixture on the opposite side of the room. This is why homeowners who try to locate and fix leaks themselves frequently fail: they patch the symptom location while the actual entry point continues to admit water.

Cornerstone Roofing Co. uses a systematic leak detection methodology that traces water from the interior evidence backward to the roof-level entry point. We start inside the attic with a flashlight and moisture meter, following stain patterns, wet insulation, and water trails along framing members back to the penetration. On the exterior, we examine the area above the traced origin for compromised shingles, failed flashing, cracked pipe boots, deteriorated caulk, and improper roof-to-wall transitions, the five most common leak sources on Chicago residential roofs.

Not every leak originates from the roof itself. Condensation from inadequate attic ventilation, ice dam backup behind clogged gutters, and flashing failures at chimneys and skylights can all produce symptoms identical to a roof leak. Our diagnostic process considers all possibilities and identifies the actual cause, ensuring the repair addresses the real problem rather than a best guess.`,
    urgencyNote:
      "A roof leak that produces visible dripping during rain is actively channeling water into your home's structure. Every rainfall event compounds the damage. Do not assume a small drip is minor — the volume of water entering the roof deck is typically much greater than what you see at the ceiling. Call Cornerstone for a prompt leak investigation before the next rainstorm.",
    processSteps: [
      {
        title: "Interior Evidence Assessment",
        description:
          "We examine interior stains, drip locations, and attic conditions to map the water's path. A moisture meter identifies saturated materials that visual inspection alone would miss.",
      },
      {
        title: "Attic Trace-Back",
        description:
          "Inside the attic, we follow water trails along rafters and joists from the ceiling stain back toward the roof deck. This trace reveals the approximate entry point above.",
      },
      {
        title: "Exterior Source Identification",
        description:
          "The roof area above the traced entry zone is examined for failed flashing, damaged shingles, cracked boots, and sealant failures. When the source is not visually obvious, we use controlled water testing to confirm the entry point.",
      },
      {
        title: "Targeted Repair",
        description:
          "The identified source is repaired using the appropriate method: shingle replacement, flashing re-sealing, boot replacement, or valley repair. We address the root cause, not just the surface symptom.",
      },
      {
        title: "Verification & Monitoring",
        description:
          "After repair, we verify the fix by re-checking the attic during or after the next rainfall. We provide the homeowner with monitoring guidance and remain available if any follow-up is needed.",
      },
    ],
    faq: [
      {
        q: "Why is my ceiling leaking but there is no roof damage visible?",
        a: "The most common reasons are: the damage is too small to see from the ground, the leak originates at a flashing or penetration rather than the shingle surface, the water travels horizontally along framing before dripping at a distant point, or the cause is ice dam backup or condensation rather than a traditional roof leak. A professional attic inspection usually reveals the answer.",
      },
      {
        q: "Can a roof leak cause mold?",
        a: "Yes. Mold can begin growing on wet building materials within 24-48 hours in warm, humid conditions. Attic insulation, ceiling drywall, and wall cavities that remain damp from an ongoing leak are prime environments for mold colonization. Prompt leak repair followed by thorough drying of affected areas is essential for preventing mold growth.",
      },
      {
        q: "My roof only leaks during heavy rain — is it still a problem?",
        a: "Yes. A leak that appears only during heavy rain indicates a vulnerability that will worsen over time as the entry point deteriorates. Wind-driven rain, ice dams, and snow accumulation will eventually exploit the same weakness under less intense conditions. Repair it now while the scope is small and manageable.",
      },
      {
        q: "How much does roof leak repair cost in Chicago?",
        a: "Simple repairs like a pipe boot replacement or a few shingle patches typically cost $250-$750. More complex repairs involving flashing replacement, valley rework, or chimney crown sealing range from $750-$2,500. The diagnostic fee is included in the repair cost when you hire us for the fix.",
      },
    ],
  },
  {
    slug: "24-hour-roofer",
    title: "24-Hour Roofing Service",
    metaTitle: "24-Hour Roofer in Chicago, IL | Around-the-Clock Roofing | Cornerstone Roofing Co.",
    metaDescription:
      "24-hour roofing service in Chicago and suburbs. Storms don't wait for business hours and neither do we. Call Cornerstone Roofing anytime for emergency roof response.",
    intro: `Roofing emergencies follow their own schedule. The polar vortex that collapses a section of flat roof membrane arrives at 2 AM on a Sunday. The summer derecho that strips a hundred shingles from your home hits during a Wednesday dinner. The ice dam that finally breaks through your attic insulation and sends water cascading into your bedroom announces itself at dawn on a holiday weekend. In every scenario, the damage does not pause, and your response should not either.

Cornerstone Roofing Co. operates a genuine 24-hour emergency roofing service across the greater Chicagoland area. This is not an answering service that takes your name and promises a callback during office hours. Our after-hours line connects directly to an on-call project manager who can assess your situation, dispatch a crew, and coordinate emergency stabilization at any hour of the day or night, any day of the year.

We built this capability because we saw too many Chicago homeowners suffer compounding damage while waiting for contractors who only operate during standard business hours. A 12-hour delay between a midnight storm and a next-morning response can mean the difference between a manageable roof repair and a full interior restoration project involving drywall, flooring, electrical, and mold remediation. Our after-hours response eliminates that gap and gives you professional protection when you need it most.`,
    urgencyNote:
      "If you are experiencing an active roof emergency right now, do not wait until morning. Call our 24-hour line immediately. Our on-call project manager will assess your situation and dispatch a crew if emergency stabilization is needed. Containing water entry quickly prevents exponentially greater damage to your home's interior, electrical systems, and structural framing.",
    processSteps: [
      {
        title: "24/7 Call Response",
        description:
          "Your call is answered by an on-call project manager, not a voicemail or answering service. We gather details about the emergency and determine the appropriate response level.",
      },
      {
        title: "Crew Dispatch",
        description:
          "For active emergencies involving water entry or structural risk, a crew is dispatched immediately regardless of time of day. Our emergency trucks are pre-loaded with tarps, plywood, fasteners, and common repair materials.",
      },
      {
        title: "On-Site Emergency Work",
        description:
          "The crew arrives, assesses the situation safely, and performs the necessary stabilization. This may include tarping, board-up, emergency sealant application, or temporary repairs to stop water entry.",
      },
      {
        title: "Next-Day Follow-Up",
        description:
          "The following business day, a project manager contacts you to discuss permanent repair options, review insurance considerations, and schedule the full restoration when you are ready.",
      },
    ],
    faq: [
      {
        q: "Is there an extra charge for after-hours emergency service?",
        a: "There is a modest after-hours emergency response fee that covers crew mobilization outside of standard business hours. This fee is credited in full toward the cost of permanent repairs when you choose Cornerstone for the restoration work. Given the damage that overnight delays can cause, the fee is a small fraction of what you save by acting quickly.",
      },
      {
        q: "What areas do you cover for 24-hour service?",
        a: "Our 24-hour service covers the entire Chicagoland metropolitan area, including Chicago proper and suburbs across Cook, DuPage, Will, Kane, and Lake counties. Response times vary by distance from our base, but we can typically reach any location within our service area in 2-4 hours.",
      },
      {
        q: "What qualifies as a roofing emergency?",
        a: "Active water entry into your home, structural damage or collapse, tree or debris impact on your roof, and any situation where delay would result in significant additional damage. If you are unsure whether your situation qualifies, call us anyway. Our project manager will help you assess the urgency and recommend the appropriate response.",
      },
      {
        q: "Should I call my insurance company or you first?",
        a: "Call us first. Your priority is stopping the damage, and your insurance policy requires you to mitigate further loss. We will stabilize your roof and document everything your insurance company needs. You can file your claim the next business day with our documentation in hand.",
      },
    ],
  },
];
