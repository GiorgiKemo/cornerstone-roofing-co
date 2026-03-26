export interface InsuranceProcessStep {
  title: string;
  description: string;
}

export interface InsuranceFAQ {
  q: string;
  a: string;
}

export interface InsuranceService {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  processSteps: InsuranceProcessStep[];
  faq: InsuranceFAQ[];
}

export const insuranceServices: InsuranceService[] = [
  {
    slug: "hail-damage-claim",
    title: "Hail Damage Insurance Claims",
    metaTitle: "Hail Damage Roof Claim Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Expert hail damage roof insurance claim assistance in Chicago. HAAG-certified inspectors document damage, coordinate with adjusters, and maximize your claim payout.",
    intro: `Hail is the most common cause of residential roof damage claims in the Chicagoland area, and it is also one of the most misunderstood. A hailstorm that drops stones the size of quarters can bruise hundreds of shingles across your roof without knocking a single one loose. From the ground, your roof may look perfectly intact while the asphalt mat beneath the granule surface has been fractured in dozens of locations, each bruise a future leak site that will fail progressively over the coming months and years. This hidden nature of hail damage is why professional inspection by a trained specialist is essential after any significant hailstorm.

Cornerstone Roofing Co. employs HAAG Engineering-certified roof inspectors who are trained to identify and document hail damage using the same standards and terminology that insurance adjusters use. HAAG certification is widely recognized as the industry's most rigorous damage assessment qualification, and it ensures that our inspection findings stand up to scrutiny when presented to your insurance carrier. We do not guess whether damage is present — we systematically examine representative samples from every roof slope and document findings with measurements and photographs that leave no room for dispute.

The Chicagoland area experiences an average of 3-5 significant hail events per year, with the most destructive storms typically occurring between April and September. The 2023 and 2024 storm seasons produced multiple events with hail exceeding one inch in diameter across Cook, DuPage, and Will counties, generating thousands of legitimate insurance claims. If your home was in the path of a documented hailstorm and you have not had your roof inspected, there may be damage present that is silently degrading your roofing system right now.`,
    processSteps: [
      {
        title: "Hail Event Verification",
        description:
          "We cross-reference your address with NOAA storm data and hail reports to confirm that a documented hail event impacted your area. This objective evidence strengthens your claim from the outset.",
      },
      {
        title: "HAAG-Certified Roof Inspection",
        description:
          "A certified inspector examines your roof using the HAAG methodology, testing shingles on every slope for hail bruising, fracturing, and granule displacement. Gutters, downspouts, siding, and other exposed surfaces are also checked for collateral hail damage.",
      },
      {
        title: "Comprehensive Damage Report",
        description:
          "A detailed report with annotated photographs, a roof diagram showing damage locations, and measurements of hail impact marks is prepared in a format that aligns with insurance industry standards.",
      },
      {
        title: "Claim Filing Assistance",
        description:
          "We help you file your hail damage claim with your insurance carrier, providing the documentation package and advising on the information your insurer will request. Many homeowners have never filed a roof claim before, and we guide you through each step.",
      },
      {
        title: "Adjuster Meeting & Advocacy",
        description:
          "We meet your insurance adjuster on the roof to walk through the damage together. Our inspector points out every finding, answers technical questions, and ensures the adjuster's scope accurately reflects the full extent of damage. This meeting often recovers thousands of additional dollars.",
      },
      {
        title: "Claim Approval & Restoration",
        description:
          "Once your claim is approved, we schedule the roof replacement or repair at your convenience. If the approved scope does not reflect the full damage, we assist with supplement filings to recover the additional costs.",
      },
    ],
    faq: [
      {
        q: "How can I tell if my roof has hail damage?",
        a: "From the ground, look for dents in gutters, downspouts, and aluminum window trim. Check air conditioning units and mailboxes for dimpling. On the roof itself, hail damage appears as dark spots where granules have been knocked loose, circular cracks in the shingle mat, or soft bruises that depress under thumb pressure. A professional inspection is the only reliable way to confirm and document hail damage.",
      },
      {
        q: "How long after a hailstorm can I file a claim?",
        a: "Most Illinois homeowner's policies allow up to one year to file a hail damage claim, but we strongly recommend filing within 30-60 days of the event. Earlier claims are easier to document, less likely to be questioned by adjusters, and prevent ongoing damage from worsening before repairs begin.",
      },
      {
        q: "What if my insurance adjuster says there is no damage?",
        a: "Adjuster opinions can differ, and initial inspections sometimes miss damage, especially on multi-slope roofs. We can request a re-inspection and attend with our HAAG-certified inspector to point out damage that may have been overlooked. If a legitimate dispute persists, we can recommend a public adjuster or engineer to provide an independent assessment.",
      },
      {
        q: "Will a hail claim affect my insurance rates?",
        a: "Under Illinois law, your insurance company cannot raise your individual premium based solely on a weather-related claim. Premium changes in your area are driven by regional loss data, not individual claims. Filing a legitimate hail claim is your contractual right under your policy.",
      },
      {
        q: "Does hail damage require a full roof replacement or just repairs?",
        a: "It depends on the extent and severity of the damage. If hail bruising is widespread across all roof slopes, most insurance carriers approve a full replacement because the integrity of the entire shingle system has been compromised. If damage is limited to one or two slopes, a partial repair may be appropriate. Our inspection report provides the evidence needed for the adjuster to make that determination.",
      },
    ],
  },
  {
    slug: "storm-damage-siding",
    title: "Storm Damage Siding Claims",
    metaTitle: "Storm Damage Siding Insurance Claim Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Siding storm damage insurance claim help in Chicago. Hail-cracked vinyl, wind-torn panels, debris impact — we document damage and work with your insurer to restore your home.",
    intro: `Siding takes the full force of Chicago's most violent weather events. While roofs endure impact from above, siding faces wind-driven hail at oblique angles that concentrate force on a smaller surface area, making cracking and puncture more likely per impact. Vinyl siding, which clads the majority of Chicago-area homes, is particularly vulnerable to hail because PVC becomes brittle in cold temperatures, and many of the region's most severe hailstorms arrive with cold fronts that drop temperatures rapidly ahead of the precipitation.

The damage pattern on siding tells a story that HAAG-certified inspectors can read clearly. Hail impacts on vinyl leave circular cracks, typically concentrated on the windward elevation facing the storm's approach direction. Wind damage presents as panels pulled from the nailing strip, bent J-channel at corners and transitions, and panels shifted out of alignment. Debris impacts from broken tree limbs leave irregular punctures and tears. Each damage type has a distinct forensic signature that differentiates it from normal wear and that insurance adjusters are trained to evaluate.

Cornerstone Roofing Co. inspects siding damage as part of every storm assessment because storms rarely damage the roof without also impacting the walls. Our inspection reports document siding damage on every elevation with close-up photographs and measurements, noting the direction and type of damage consistent with the reported storm event. This comprehensive approach ensures that your insurance claim captures the total loss, not just the most visible damage on the roof.`,
    processSteps: [
      {
        title: "Four-Elevation Siding Inspection",
        description:
          "Every wall of your home is inspected for hail impacts, wind displacement, and debris damage. We note the compass direction of each elevation to correlate damage patterns with the storm's documented wind direction.",
      },
      {
        title: "Damage Pattern Analysis",
        description:
          "We differentiate storm damage from pre-existing wear, age-related deterioration, and maintenance issues. Only legitimate storm damage is included in the claim documentation to maintain credibility with your insurer.",
      },
      {
        title: "Combined Roof & Siding Documentation",
        description:
          "Siding damage is documented alongside roof damage in a single comprehensive report. Insurance adjusters prefer a unified scope that captures all storm-related damage in one claim rather than multiple separate filings.",
      },
      {
        title: "Adjuster Coordination",
        description:
          "We walk the property with your adjuster, pointing out siding damage on each elevation. Adjusters who focus primarily on the roof sometimes undercount siding damage, and our presence ensures the walls receive equal attention.",
      },
      {
        title: "Restoration Scope & Scheduling",
        description:
          "Once approved, siding restoration is coordinated with any roof work to maximize efficiency. We source color-matched replacement panels and complete the siding restoration as part of the overall storm damage project.",
      },
    ],
    faq: [
      {
        q: "Does insurance cover storm-damaged siding?",
        a: "Yes. Hail, wind, and debris damage to siding is covered under the dwelling coverage portion of most Illinois homeowner's policies, subject to your deductible. The same claim that covers your roof can include siding, gutters, window screens, and other exterior damage from the same storm event.",
      },
      {
        q: "My siding has cracks but I did not see a storm — is it hail damage?",
        a: "Hail damage on siding often goes unnoticed for weeks or months because it is at eye level and blends with the surface texture. We cross-reference your address with NOAA hail reports to determine whether a documented storm struck your area. If confirmed, the damage is likely hail-related and claim-eligible.",
      },
      {
        q: "Will the insurance company replace all my siding or just the damaged sections?",
        a: "Insurance pays to restore your home to its pre-loss condition. If damaged panels can be replaced with matching material, they will authorize section replacement. If matching material is discontinued or unavailable, they may approve full replacement of affected elevations to maintain a uniform appearance. Our documentation of matching challenges can support a broader replacement scope.",
      },
      {
        q: "Can siding and roof claims be filed together?",
        a: "Absolutely, and they should be. Storm damage to both roof and siding from the same event is a single claim with one deductible. Filing them separately can result in two deductibles and confusion during the adjustment process. Our inspection reports present all exterior storm damage in a unified format.",
      },
    ],
  },
  {
    slug: "free-roof-estimate",
    title: "Free Roof Estimate",
    metaTitle: "Free Roof Estimate in Chicago, IL | No-Obligation Inspection | Cornerstone Roofing Co.",
    metaDescription:
      "Get a free, no-obligation roof estimate in Chicago from Cornerstone Roofing Co. Transparent pricing, honest assessments, and no pressure. Schedule your free estimate today.",
    intro: `Getting an accurate roof estimate should not cost you anything, and it should not come with pressure to sign a contract before the estimator leaves your driveway. At Cornerstone Roofing Co., our free estimate process is designed to give you the information you need to make a confident decision on your own timeline. We measure, inspect, photograph, and document your roof's condition, then deliver a written proposal with transparent line-item pricing that you can review, compare, and discuss with your family without anyone looking over your shoulder.

Our estimating process goes beyond a quick glance and a ballpark number scribbled on a business card. A project consultant visits your home, measures the roof using a combination of on-site tape measurements and satellite verification for accuracy, inspects the current condition from ladder or rooftop access, checks the attic for ventilation and insulation adequacy, and discusses your material preferences, timeline, and budget. The result is a detailed proposal that accounts for the specific conditions of your roof, not a generic per-square-foot estimate that ignores the complexities of your project.

We believe the estimate appointment is also an opportunity to educate homeowners about their options. Many Chicago homeowners have never replaced a roof before and are unsure what the process involves, what materials are appropriate for their home's architecture, or how insurance and financing options work. Our consultants answer every question thoroughly and leave behind printed material you can reference later. Whether you choose Cornerstone or another contractor, you will walk away better informed.`,
    processSteps: [
      {
        title: "Schedule Your Appointment",
        description:
          "Call, email, or submit a request through our website. We offer appointment windows throughout the week, including Saturdays, and confirm a 2-hour arrival window so you are not waiting all day.",
      },
      {
        title: "On-Site Inspection & Measurement",
        description:
          "A project consultant measures your roof, inspects the current condition, photographs areas of concern, and checks the attic for ventilation and insulation. This typically takes 45-60 minutes.",
      },
      {
        title: "Material Discussion & Options",
        description:
          "We discuss material options, including asphalt, metal, and specialty products, and show physical samples so you can see and feel the differences. Your preferences, budget, and the home's architectural style guide the recommendation.",
      },
      {
        title: "Written Proposal Delivery",
        description:
          "Within 24-48 hours, you receive a detailed written proposal with line-item pricing, material specifications, warranty details, and a projected timeline. The proposal is yours to review at your own pace with no expiration pressure.",
      },
      {
        title: "Follow-Up Consultation",
        description:
          "We are available by phone, email, or in person to answer questions, revise the scope, or adjust material selections. When you are ready to proceed, we schedule your project and begin the permit process.",
      },
    ],
    faq: [
      {
        q: "Is the roof estimate really free?",
        a: "Yes. There is no charge for the on-site inspection, measurement, or written proposal. There is no obligation to hire us and no follow-up pressure if you decide to go another direction. We earn your business by providing the best value and service, not by pressuring you at the kitchen table.",
      },
      {
        q: "How long does the estimate appointment take?",
        a: "Plan for approximately 45-60 minutes. This includes the exterior inspection, attic check, measurements, and a conversation about your options. If you prefer a faster visit, we can perform the inspection and deliver the proposal by email without an in-home consultation.",
      },
      {
        q: "Should I get multiple estimates before choosing a contractor?",
        a: "We encourage it. Comparing 2-3 estimates helps you understand the range of pricing, material options, and warranty coverage available. Make sure each estimate includes the same level of detail so you are comparing apples to apples. Our proposals are designed to be transparent enough for easy comparison.",
      },
      {
        q: "What information do I need before the estimate appointment?",
        a: "No preparation is necessary on your part. If you have a copy of your homeowner's insurance policy, previous inspection reports, or warranty documents from the original roof installation, having those available is helpful but not required. We will gather everything we need during the visit.",
      },
      {
        q: "Do you provide estimates for insurance claims?",
        a: "Yes. If you believe your roof has storm damage, our inspection will assess whether a claim is warranted. If damage is found, we prepare documentation in Xactimate format that your insurance company can process directly. The storm damage inspection is also free with no obligation.",
      },
    ],
  },
];
