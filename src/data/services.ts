export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceSections {
  intro: string;
  processSteps: ProcessStep[];
  benefits: string[];
  faq: FAQ[];
}

export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroDescription: string;
  sections: ServiceSections;
  relatedSubPages: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    metaTitle: "Roof Replacement in Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Full roof replacement services across Chicagoland. GAF-certified installers, lifetime warranties, and financing options. Get a free estimate from Cornerstone Roofing Co.",
    h1: "Chicago Roof Replacement Experts",
    icon: "Home",
    heroDescription:
      "When patching and repairs are no longer enough, Cornerstone Roofing Co. delivers complete roof replacement with premium materials built to handle Chicago's brutal freeze-thaw cycles, high winds, and heavy snow loads.",
    sections: {
      intro: `A roof replacement is one of the most significant investments you will make in your Chicago-area home. Unlike a simple repair that addresses isolated damage, a full replacement strips the existing roofing system down to the deck and installs an entirely new underlayment, flashing, ventilation, and surface material. For homes across Cook County, DuPage County, and the surrounding suburbs, this process is critical when aging shingles begin curling, granule loss accelerates, or multiple leaks indicate systemic failure rather than localized wear.

Cornerstone Roofing Co. has completed over 500 roof replacements throughout the greater Chicagoland area. Our crews understand that the Lake Michigan wind corridor, seasonal hail events, and temperature swings exceeding 100 degrees annually demand more than a cookie-cutter install. Every project begins with a 21-point structural inspection that evaluates decking integrity, attic ventilation ratios, and flashing condition before a single shingle is removed.

We hold GAF Master Elite certification, which places us in the top 2% of roofing contractors nationwide and allows us to offer the Golden Pledge limited warranty covering both materials and workmanship for up to 50 years. Whether your home is a classic Chicago bungalow in Lincoln Square, a colonial in Naperville, or a contemporary build in Schaumburg, our team tailors the replacement to your home's architectural style and structural requirements.

Financing is available for qualified homeowners, and we work directly with insurance carriers when storm damage triggers the need for a full replacement. Our project managers handle permit acquisition through the City of Chicago or your local municipality, so you can focus on choosing the color and style that best suits your home.`,
      processSteps: [
        {
          title: "Comprehensive Roof Inspection",
          description:
            "A certified inspector examines every square foot of your existing roof, attic space, and ventilation system. We document damage with photos and thermal imaging when necessary to identify hidden moisture intrusion.",
        },
        {
          title: "Detailed Proposal & Material Selection",
          description:
            "You receive a transparent, line-item estimate covering tear-off, disposal, materials, labor, and permits. Our showroom lets you compare asphalt, metal, slate, and cedar options side by side.",
        },
        {
          title: "Permit Acquisition & Scheduling",
          description:
            "We pull all required permits from the City of Chicago or your suburb's building department. Your project is scheduled with a confirmed start date and estimated completion window.",
        },
        {
          title: "Tear-Off & Deck Inspection",
          description:
            "The old roofing system is removed entirely. Our crews inspect the decking for rot, delamination, or structural compromise and replace damaged sections before new material goes on.",
        },
        {
          title: "Installation of New Roofing System",
          description:
            "Ice-and-water shield is applied at eaves, valleys, and penetrations per Illinois code. Synthetic underlayment, starter strips, field shingles, ridge ventilation, and flashing are installed to manufacturer specifications.",
        },
        {
          title: "Final Walkthrough & Warranty Registration",
          description:
            "A project manager walks the completed roof with you, answers questions, and ensures your satisfaction. We register your manufacturer warranty the same day and provide a complete project file for your records.",
        },
      ],
      benefits: [
        "Eliminates recurring leak and repair costs with a complete new system",
        "Increases home resale value by an average of $15,000-$20,000 in the Chicagoland market",
        "Improves energy efficiency with modern reflective shingles and proper ventilation",
        "Meets current Illinois building codes for wind and impact resistance",
        "GAF Golden Pledge warranty provides up to 50 years of material and workmanship coverage",
        "Enhances curb appeal with hundreds of color and profile choices",
      ],
      faq: [
        {
          q: "How long does a roof replacement take in Chicago?",
          a: "Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of the roof. Weather delays are possible during Chicago's spring storm season and winter months, so we build buffer days into every schedule.",
        },
        {
          q: "What is the average cost of a roof replacement in Chicago?",
          a: "A typical asphalt shingle roof replacement in the Chicago metro area ranges from $8,500 to $25,000, depending on roof size, pitch, material selection, and whether structural repairs are needed. We provide free, no-obligation estimates with transparent pricing.",
        },
        {
          q: "Do I need a permit for a roof replacement in Chicago?",
          a: "Yes. The City of Chicago requires a building permit for roof replacements. Most suburbs in Cook, DuPage, Will, and Lake counties have similar requirements. Cornerstone handles all permit applications as part of our service.",
        },
        {
          q: "Can I stay in my home during a roof replacement?",
          a: "Absolutely. While the process involves noise and vibration, it is safe to remain in your home. We protect landscaping and outdoor furniture, and our crews perform a thorough magnetic nail sweep of your property after tear-off.",
        },
        {
          q: "Will my homeowner's insurance cover a roof replacement?",
          a: "If the replacement is needed due to storm, hail, or wind damage, most Illinois homeowner's policies cover a significant portion of the cost. Cornerstone works directly with your insurance adjuster to document damage and maximize your claim.",
        },
      ],
    },
    relatedSubPages: [
      "asphalt-shingles",
      "metal-roofing",
      "flat-roofing",
      "slate-roofing",
      "cedar-shake",
    ],
    keywords: [
      "roof replacement Chicago",
      "new roof Chicago IL",
      "roof replacement cost Chicago",
      "GAF Master Elite contractor Chicago",
      "Chicago roofing company",
      "replace roof Chicagoland",
    ],
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    metaTitle: "Roof Repair Services in Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Fast, reliable roof repair across Chicagoland. From missing shingles to storm damage, our licensed crews fix it right the first time. Same-day estimates available.",
    h1: "Professional Roof Repair Across Chicagoland",
    icon: "Wrench",
    heroDescription:
      "Not every roof problem calls for a full replacement. Cornerstone Roofing Co. provides targeted, cost-effective repairs that extend the life of your existing roof and protect your home from Chicago's demanding weather.",
    sections: {
      intro: `Roof damage in Chicago rarely announces itself politely. A windstorm rips shingles loose on a Tuesday night, ice dams back water under flashing during a January freeze, or a slow leak stains the ceiling above your dining room without warning. When any of these scenarios strikes, the speed and quality of your repair determines whether the problem stays small or spirals into structural damage, mold growth, and thousands of dollars in interior restoration costs.

Cornerstone Roofing Co. responds to repair calls across Cook, DuPage, Will, Kane, and Lake counties with the same urgency regardless of the job size. Our trucks carry the most common shingle profiles, flashing materials, and sealants so many repairs can be completed the same day we inspect. For more involved work, we provide a written scope and schedule within 24 hours of your call.

Our repair philosophy is straightforward: fix the root cause, not just the visible symptom. A missing shingle is easy to replace, but if the underlying felt is torn or the deck is soft, slapping a new shingle on top only delays failure. Our technicians probe surrounding areas, check attic conditions from below, and confirm that ventilation is performing correctly before closing out a repair ticket.

We service every roof type commonly found in the Chicago metro, including three-tab and architectural asphalt shingles, cedar shake, modified bitumen flat roofs, standing seam metal, slate, and tile. If your roof was installed by another contractor and is still under warranty, we can perform the repair while preserving your existing coverage.`,
      processSteps: [
        {
          title: "Damage Assessment",
          description:
            "A technician inspects the roof surface, attic space, and interior ceilings to identify the full scope of damage. We photograph every finding for your records and, if applicable, your insurance file.",
        },
        {
          title: "Root Cause Diagnosis",
          description:
            "We trace leaks and damage back to their origin, whether that's failed flashing, lifted shingles, clogged valleys, or compromised pipe boots. This prevents repeat repairs on the same roof section.",
        },
        {
          title: "Repair Plan & Estimate",
          description:
            "You receive a clear written estimate detailing the materials, labor, and timeline. For insurance claims, we provide the documentation your adjuster needs in the format they require.",
        },
        {
          title: "Repair Execution",
          description:
            "Our crew completes the repair using manufacturer-matched materials and techniques that integrate seamlessly with your existing roofing system. No patchwork that stands out or compromises performance.",
        },
        {
          title: "Quality Verification & Cleanup",
          description:
            "We verify the repair from both the exterior and interior, confirm the leak is resolved, and leave your property clean. Every repair carries our workmanship guarantee.",
        },
      ],
      benefits: [
        "Prevents small issues from becoming major structural problems",
        "Costs a fraction of a full replacement when the roof system is still viable",
        "Same-day service available for urgent leaks and storm damage",
        "Preserves existing manufacturer warranties with proper repair techniques",
        "Extends the functional life of your current roof by years",
        "Detailed photo documentation supports insurance claims and home sale disclosures",
      ],
      faq: [
        {
          q: "How quickly can you repair my roof after storm damage?",
          a: "We offer same-day and next-day response for active leaks and storm damage across the Chicagoland area. During major storm events, we triage calls by severity and can typically begin emergency tarping within hours.",
        },
        {
          q: "Is it worth repairing a roof that is 15-20 years old?",
          a: "It depends on the overall condition. If the damage is localized and the rest of the shingles still have life, a repair is cost-effective. We will always give you an honest assessment and let you know when replacement makes more financial sense.",
        },
        {
          q: "Can you match my existing shingle color and style?",
          a: "In most cases, yes. We stock the most popular profiles from GAF, Owens Corning, and CertainTeed. For discontinued colors, we source the closest match and blend the repair area so it does not stand out.",
        },
        {
          q: "Do you repair flat roofs?",
          a: "Yes. We repair modified bitumen, TPO, EPDM, and built-up flat roofing systems commonly found on Chicago bungalows, two-flats, and commercial buildings. Our flat roof technicians carry specialized tools and materials for these systems.",
        },
      ],
    },
    relatedSubPages: [
      "emergency-roof-repair",
      "roof-leak-repair",
      "roof-tarping",
      "24-hour-roofer",
    ],
    keywords: [
      "roof repair Chicago",
      "fix roof leak Chicago IL",
      "emergency roof repair Chicagoland",
      "storm damage roof repair",
      "Chicago roofer near me",
      "shingle repair Chicago",
    ],
  },
  {
    slug: "siding",
    title: "Siding Installation & Repair",
    metaTitle: "Siding Installation & Repair in Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Expert siding installation and repair in Chicago. James Hardie, LP SmartSide, vinyl, and more. Transform your home's exterior with durable, weather-resistant siding.",
    h1: "Chicago Siding Installation & Repair Services",
    icon: "PanelLeft",
    heroDescription:
      "Your siding is the first line of defense against Chicago's wind-driven rain, ice, and summer humidity. Cornerstone Roofing Co. installs and repairs every major siding type to keep your home protected and looking its best.",
    sections: {
      intro: `Siding does far more than give your home a finished look. In the Chicagoland climate, it functions as a thermal envelope, a moisture barrier, and a shield against wind-borne debris. When siding cracks, warps, or separates at the seams, the wall sheathing behind it becomes vulnerable to water infiltration, which leads to mold, rot, and insect damage that can compromise the entire wall assembly.

Cornerstone Roofing Co. specializes in siding installation and repair for homes across Chicago and its surrounding suburbs. We are a James Hardie Preferred Contractor and an LP SmartSide certified installer, which means our crews have completed manufacturer-specific training and follow the exact installation protocols required for full warranty coverage. We also install and repair vinyl siding, engineered wood, and aluminum for homeowners who prefer those options.

Choosing the right siding material for a Chicago home involves balancing durability, maintenance requirements, aesthetic preferences, and budget. Fiber cement products like James Hardie Plank excel in freeze-thaw resistance and carry Class A fire ratings, making them a popular choice for neighborhoods with tighter lot lines. LP SmartSide offers the warmth of real wood grain with engineered moisture protection. Vinyl remains the most affordable option and has improved dramatically in wind resistance and color retention over the past decade.

Whether you need a complete re-side of a 1920s brick-and-frame two-flat in Berwyn, a partial replacement on a suburban colonial in Naperville, or targeted repairs to storm-damaged sections on a ranch in Tinley Park, our project managers will develop a scope that addresses both the cosmetic and structural needs of your exterior.`,
      processSteps: [
        {
          title: "Exterior Evaluation",
          description:
            "We inspect all four elevations of your home, checking for moisture damage, insulation gaps, and structural issues beneath the existing siding. A moisture meter identifies hidden problems that would undermine new siding.",
        },
        {
          title: "Material & Style Consultation",
          description:
            "Browse physical samples of James Hardie, LP SmartSide, vinyl, and engineered wood in our showroom or at your home. We help you select the profile, color, and trim details that complement your home's architecture.",
        },
        {
          title: "Custom Measurement & Ordering",
          description:
            "Precise measurements ensure minimal waste and accurate pricing. We order factory-primed or factory-painted materials when available to reduce on-site finishing time and improve long-term color retention.",
        },
        {
          title: "Removal & Substrate Preparation",
          description:
            "Old siding is removed and the wall sheathing is inspected. We replace damaged OSB or plywood, install housewrap or rigid foam insulation, and seal all window and door openings before new siding goes on.",
        },
        {
          title: "Professional Installation",
          description:
            "Siding is installed according to manufacturer specifications with proper gapping, nailing patterns, and flashing integration. Corners, soffits, fascia, and trim are finished for a seamless, watertight exterior.",
        },
        {
          title: "Final Inspection & Warranty Activation",
          description:
            "A walkthrough confirms every detail meets our standards and yours. We register the manufacturer warranty and provide care instructions to maximize the life of your new siding.",
        },
      ],
      benefits: [
        "Blocks moisture infiltration that causes mold, rot, and structural decay",
        "Improves energy efficiency by sealing the thermal envelope and reducing drafts",
        "Increases curb appeal and home value with modern profiles and fade-resistant colors",
        "Low-maintenance options eliminate the need for annual painting or staining",
        "Class A fire-rated fiber cement options add a layer of fire protection",
        "Manufacturer warranties up to 30 years when installed by a certified contractor",
      ],
      faq: [
        {
          q: "What is the best siding material for Chicago weather?",
          a: "James Hardie fiber cement is widely regarded as the top performer in Chicago's climate because it resists freeze-thaw cracking, does not rot, and carries a Class A fire rating. LP SmartSide is an excellent alternative with a more wood-like appearance. Vinyl is a strong budget-friendly option that handles moisture well.",
        },
        {
          q: "How long does a siding installation take?",
          a: "A full re-side of an average Chicago-area home takes 5-10 business days depending on the material, the number of stories, and the amount of trim work involved. Partial replacements and repairs can often be completed in 1-3 days.",
        },
        {
          q: "Can new siding be installed over existing siding?",
          a: "In some cases, yes, but we generally recommend removing old siding so we can inspect and repair the sheathing and housewrap underneath. Layering siding can trap moisture and void certain manufacturer warranties.",
        },
        {
          q: "Does new siding improve energy efficiency?",
          a: "Significantly. New siding with properly installed housewrap and optional insulated backing can reduce heating and cooling costs by 10-20%. In Chicago, where winters are harsh and summers are humid, that translates to real savings on your ComEd and Nicor Gas bills.",
        },
        {
          q: "Do I need a permit for siding replacement in Chicago?",
          a: "The City of Chicago generally does not require a permit for like-for-like siding replacement, but permits may be required if you are changing the material type or altering the wall structure. Suburban municipalities vary. We handle permit research for every project.",
        },
      ],
    },
    relatedSubPages: [
      "james-hardie",
      "lp-smartside",
      "vinyl",
      "siding-repair",
      "siding-replacement",
      "soffit-fascia",
    ],
    keywords: [
      "siding installation Chicago",
      "siding repair Chicago IL",
      "James Hardie siding Chicago",
      "vinyl siding Chicago",
      "LP SmartSide Chicago",
      "Chicago siding contractor",
    ],
  },
  {
    slug: "storm-damage-roofing",
    title: "Storm Damage Roofing",
    metaTitle: "Storm Damage Roof Repair Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Hail, wind, and storm damage roof repair and replacement in Chicago. We work with your insurance company and restore your roof fast. Free storm damage inspections.",
    h1: "Storm Damage Roofing Restoration in Chicago",
    icon: "CloudLightning",
    heroDescription:
      "Chicago sits in the heart of the Midwest storm belt, where severe thunderstorms, hail, and straight-line winds strike every year. Cornerstone Roofing Co. restores storm-damaged roofs and handles the insurance process so you can get back to normal faster.",
    sections: {
      intro: `The Chicagoland area experiences an average of 35-50 severe thunderstorm warnings per year, according to the National Weather Service office in Romeoville. These storms bring damaging hail up to golf-ball size, wind gusts exceeding 70 mph, and torrential rain that tests every weak point in a roofing system. When a storm rolls through your neighborhood, the damage it leaves behind may be obvious, like shingles scattered across your yard, or it may be invisible from the ground, like hairline hail fractures that slowly deteriorate over months.

Acting quickly after storm damage is critical for two reasons. First, exposed underlayment or decking will absorb water from the next rainfall, accelerating rot and mold growth inside your attic and wall cavities. Second, most Illinois homeowner's insurance policies require you to mitigate further damage and file your claim within a reasonable timeframe. Delaying an inspection can weaken your claim and leave you paying out of pocket for damage that was fully covered.

Cornerstone Roofing Co. has been the trusted storm damage restoration contractor for hundreds of homeowners across Cook, DuPage, Will, and Kane counties. Our team includes HAAG-certified roof inspectors trained to identify hail and wind damage that untrained eyes miss. We know exactly what insurance adjusters look for, because we have worked alongside them on thousands of claims since opening our doors.

We offer free storm damage inspections with no obligation. If we find damage, we prepare a comprehensive report with photographs and measurements that aligns with the Xactimate estimating software your insurance company uses. If we do not find damage, we will tell you honestly and save you the hassle of filing an unnecessary claim.`,
      processSteps: [
        {
          title: "Free Storm Damage Inspection",
          description:
            "A HAAG-certified inspector examines your roof for hail strikes, wind creases, lifted shingles, and compromised flashing. We also check gutters, downspouts, siding, and windows for collateral damage.",
        },
        {
          title: "Damage Documentation",
          description:
            "Every finding is photographed and measured. We create a detailed inspection report formatted for insurance submission, including diagrams showing damage locations on each roof slope.",
        },
        {
          title: "Insurance Claim Support",
          description:
            "We help you file your claim and coordinate directly with your adjuster. Our Xactimate-formatted estimates speak the same language your insurance company uses, reducing back-and-forth delays.",
        },
        {
          title: "Adjuster Meeting Coordination",
          description:
            "We meet your insurance adjuster on site to walk the roof together, ensuring every area of damage is included in the approved scope. This step often recovers thousands of dollars that would otherwise be missed.",
        },
        {
          title: "Restoration & Repair",
          description:
            "Once your claim is approved, we schedule the restoration work promptly. Whether it is a targeted repair or a full replacement, we use the same quality materials and installation standards as any other project.",
        },
        {
          title: "Completion & Supplement Filing",
          description:
            "If hidden damage is discovered during the project, such as rotten decking beneath the shingles, we file a supplement with your insurance company to cover the additional work. You are kept informed at every step.",
        },
      ],
      benefits: [
        "Free inspections mean you pay nothing to find out if you have a valid claim",
        "HAAG-certified inspectors catch damage that general contractors miss",
        "Xactimate-formatted estimates streamline the insurance approval process",
        "Direct adjuster coordination maximizes your claim payout",
        "Emergency tarping available to prevent further water intrusion before repairs begin",
        "We handle the paperwork so you can focus on your family, not your roof",
      ],
      faq: [
        {
          q: "How do I know if my roof has storm damage?",
          a: "Common signs include missing or displaced shingles, dents in gutters or downspouts, granules collecting in gutter troughs, and water stains on interior ceilings. However, hail damage often leaves bruises that are only detectable up close on the shingle surface. A professional inspection is the only reliable way to assess the full extent of damage.",
        },
        {
          q: "Will filing a storm damage claim raise my insurance premiums?",
          a: "In Illinois, insurance companies cannot raise your premiums solely because you filed a weather-related claim. Rates may adjust based on overall regional claim activity, but an individual storm claim should not trigger a surcharge on your policy.",
        },
        {
          q: "How long do I have to file a storm damage claim in Illinois?",
          a: "Most Illinois homeowner's policies require you to report damage within one year, but earlier is always better. Evidence degrades over time, and your insurer may question the cause of damage if you wait months to file. We recommend scheduling an inspection within days of a major storm.",
        },
        {
          q: "Do I have to pay my deductible?",
          a: "Yes. Your deductible is a contractual obligation between you and your insurance company. Any contractor who offers to waive or cover your deductible is violating Illinois insurance regulations. Cornerstone always operates ethically and within the law.",
        },
        {
          q: "What if my insurance company denies my claim?",
          a: "We can help you understand the denial reason and, if warranted, assist with a re-inspection request or supplement filing. In some cases, a second inspection with our team present reveals damage that was overlooked. We also work with public adjusters if the situation calls for additional advocacy.",
        },
      ],
    },
    relatedSubPages: [
      "hail-damage-claim",
      "storm-damage-siding",
      "emergency-roof-repair",
      "free-roof-estimate",
    ],
    keywords: [
      "storm damage roof repair Chicago",
      "hail damage roof Chicago",
      "wind damage roofing Chicagoland",
      "roof insurance claim Chicago",
      "storm restoration contractor",
      "free storm damage inspection",
    ],
  },
  {
    slug: "gutters",
    title: "Gutter Installation & Repair",
    metaTitle: "Gutter Installation & Repair Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Seamless gutter installation, repair, and gutter guard systems in Chicago. Protect your foundation and landscaping from water damage with properly functioning gutters.",
    h1: "Gutter Installation & Repair for Chicago Homes",
    icon: "Droplets",
    heroDescription:
      "Gutters are the unsung heroes of your roofing system. Cornerstone Roofing Co. installs, repairs, and maintains seamless aluminum and copper gutters that channel Chicago's heavy rainfall and snowmelt safely away from your foundation.",
    sections: {
      intro: `Chicago receives an average of 38 inches of rain and 35 inches of snow annually, and every drop of that precipitation lands on your roof before flowing toward the edge. Without a properly sized and functioning gutter system, that water cascades directly off the eaves, saturating the soil around your foundation, eroding landscaping beds, staining siding, and pooling in window wells. Over time, this uncontrolled runoff leads to basement flooding, foundation cracking, and thousands of dollars in preventable damage.

Cornerstone Roofing Co. designs and installs seamless gutter systems custom-fabricated on site from a single piece of aluminum or copper. Seamless gutters eliminate the joints and seams where sectional gutters fail, reducing leaks and improving water flow. Our on-site forming machine produces gutters cut to the exact length of each fascia run, which means fewer connection points and a cleaner appearance.

We size every gutter system based on your roof's square footage, slope, and the number of downspout discharge points needed to handle peak rainfall intensity. In areas with mature tree canopy, common in neighborhoods like Evanston, Oak Park, and Glenview, we recommend gutter guard systems that prevent leaf and debris accumulation while allowing water to flow freely. Our guards are compatible with every gutter profile we install and can be retrofitted to existing systems.

Gutter repair is equally important. Sagging sections, separated joints, rusted-through spans, and improperly pitched runs are common problems on Chicago homes, especially older properties in the city's bungalow belt. Our crews rehang, reseal, and replace damaged gutter sections efficiently, ensuring your system drains correctly before the next rainstorm arrives.`,
      processSteps: [
        {
          title: "Drainage Assessment",
          description:
            "We evaluate your roof area, slope, and current drainage patterns to determine the optimal gutter size (5-inch or 6-inch), downspout placement, and discharge routing for your property.",
        },
        {
          title: "Material & Color Selection",
          description:
            "Choose from over 30 aluminum colors or premium copper. We help you match your gutter color to your roof, trim, and siding for a cohesive exterior appearance.",
        },
        {
          title: "On-Site Fabrication",
          description:
            "Our portable forming machine creates seamless gutter runs on your driveway, cut precisely to fit each section of your roofline. No factory pre-cuts, no unnecessary joints.",
        },
        {
          title: "Professional Installation",
          description:
            "Gutters are mounted with hidden hangers spaced at 24-inch intervals for maximum strength against ice and snow loads. Downspouts are secured and routed to discharge water away from the foundation.",
        },
        {
          title: "Gutter Guard Installation (Optional)",
          description:
            "Micro-mesh or surface-tension gutter guards are installed to keep leaves, pine needles, and shingle granules out while allowing full water flow. Guards dramatically reduce maintenance frequency.",
        },
      ],
      benefits: [
        "Prevents foundation damage by directing water away from your home's base",
        "Seamless design eliminates leak-prone joints found in sectional gutter systems",
        "Custom fabricated on site for a precise, attractive fit along every roofline",
        "Over 30 color options to complement any exterior color scheme",
        "Gutter guards reduce cleaning frequency from twice yearly to once every few years",
        "Protects landscaping, walkways, and driveways from erosion and staining",
      ],
      faq: [
        {
          q: "What size gutters do I need for my Chicago home?",
          a: "Most Chicago residential homes perform well with 5-inch K-style gutters and 2x3-inch downspouts. Homes with large roof areas, steep pitches, or limited downspout locations may benefit from 6-inch gutters with 3x4-inch downspouts to handle higher water volume during heavy storms.",
        },
        {
          q: "How often should gutters be cleaned in Chicago?",
          a: "Without gutter guards, we recommend cleaning at least twice per year, once in late spring after seed pods and blossoms fall, and again in late autumn after leaf drop. Homes surrounded by mature oak, maple, or cottonwood trees may need a third cleaning in midsummer.",
        },
        {
          q: "Are gutter guards worth the investment?",
          a: "For most Chicago homeowners, yes. Gutter guards significantly reduce cleaning frequency and prevent clogs that cause ice dams in winter. The upfront cost is typically recovered within 3-5 years through eliminated cleaning service fees and avoided water damage.",
        },
        {
          q: "Do you install copper gutters?",
          a: "Yes. Copper gutters are a premium option that develops a distinctive patina over time and can last 50 years or more. They are especially popular on historic homes in neighborhoods like Lincoln Park, Beverly, and Oak Park where architectural character is a priority.",
        },
      ],
    },
    relatedSubPages: ["gutter-cleaning", "roof-inspection"],
    keywords: [
      "gutter installation Chicago",
      "seamless gutters Chicago IL",
      "gutter repair Chicagoland",
      "gutter guards Chicago",
      "copper gutters Chicago",
      "downspout installation",
    ],
  },
  {
    slug: "roof-inspection",
    title: "Roof Inspection",
    metaTitle: "Roof Inspection Services in Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Certified roof inspections for Chicago homeowners, buyers, and real estate transactions. Detailed reports with photos. Schedule your inspection with Cornerstone Roofing Co.",
    h1: "Certified Roof Inspections in Chicago & Suburbs",
    icon: "Search",
    heroDescription:
      "Whether you are buying a home, selling one, filing an insurance claim, or simply want to know the condition of your roof, Cornerstone Roofing Co. delivers thorough, unbiased inspections backed by certified expertise and detailed reporting.",
    sections: {
      intro: `A professional roof inspection gives you something guesswork never can: a clear, documented understanding of your roof's current condition and remaining useful life. In the Chicagoland real estate market, where bidding wars still flare up in desirable neighborhoods, buyers and sellers alike rely on roof inspection reports to negotiate fair pricing and avoid post-closing surprises. Insurance companies increasingly require independent inspections before issuing or renewing homeowner's policies on properties with roofs older than 15 years.

Cornerstone Roofing Co. performs residential and commercial roof inspections across the greater Chicago metropolitan area. Our inspectors hold HAAG certification for both residential steep-slope and commercial low-slope systems, which is the gold standard qualification recognized by insurance carriers nationwide. Every inspection follows a standardized checklist that covers surface materials, flashing, penetrations, gutters, ventilation, and the interior attic space.

Unlike some contractors who use free inspections as a sales pitch and then pressure you into unnecessary work, Cornerstone operates on a fee-for-service inspection model that keeps our assessment honest and unbiased. If we find damage, we explain your options clearly, from minor repairs to full replacement. If your roof is in good shape, we tell you that too, and we put it in writing with an estimated remaining service life.

Our inspection reports include high-resolution photographs of every finding, annotated diagrams showing locations on the roof plan, a condition rating for each major component, and a prioritized list of recommended actions. Reports are delivered digitally within 24 hours and formatted for easy sharing with real estate agents, insurance adjusters, and attorneys.`,
      processSteps: [
        {
          title: "Schedule & Scope Confirmation",
          description:
            "We confirm the purpose of your inspection, whether it is for real estate, insurance, maintenance, or storm damage, and tailor our checklist accordingly. Inspections are scheduled at your convenience, including weekends.",
        },
        {
          title: "Exterior Roof Examination",
          description:
            "Our inspector walks the roof surface, examining shingles, tiles, or membrane for wear, damage, and installation defects. Flashing at walls, chimneys, skylights, and vents is checked for seal integrity.",
        },
        {
          title: "Gutter & Drainage Review",
          description:
            "Gutters, downspouts, and discharge points are inspected for proper sizing, pitch, and condition. Clogged or damaged gutters affect the entire roofing system and are flagged in the report.",
        },
        {
          title: "Attic & Ventilation Assessment",
          description:
            "From inside the attic, we check for daylight penetration, moisture stains, mold, insulation adequacy, and ventilation performance. These interior indicators often reveal problems invisible from outside.",
        },
        {
          title: "Report Delivery & Consultation",
          description:
            "A comprehensive digital report is delivered within 24 hours. We are available by phone or in person to walk you through the findings and discuss any recommended next steps.",
        },
      ],
      benefits: [
        "Identifies hidden damage before it becomes a costly emergency",
        "Provides documented evidence for insurance claims and real estate transactions",
        "HAAG-certified inspectors meet the highest industry qualification standard",
        "Unbiased fee-for-service model ensures honest, pressure-free assessments",
        "Digital reports with photos are delivered within 24 hours",
        "Helps homeowners plan and budget for future roof maintenance or replacement",
      ],
      faq: [
        {
          q: "How much does a roof inspection cost in Chicago?",
          a: "A standard residential roof inspection ranges from $150 to $350 depending on the size and complexity of the roof. This fee covers the on-site inspection, digital photo report, and a follow-up consultation. It is a small investment compared to the cost of undiscovered roof problems.",
        },
        {
          q: "When should I get a roof inspection?",
          a: "We recommend inspections after major storms, before buying or selling a home, when your roof approaches 15-20 years of age, and any time you notice interior water stains, missing shingles, or unusual granule accumulation in your gutters.",
        },
        {
          q: "Do I need a roof inspection to sell my home in Illinois?",
          a: "Illinois does not legally require a roof inspection for home sales, but most buyers will request one during the due diligence period. Having a recent inspection report available proactively can strengthen your negotiating position and speed up the closing process.",
        },
        {
          q: "Can a roof inspection be done in winter?",
          a: "Yes. Our inspectors work year-round in the Chicago climate. Winter inspections can actually reveal issues like ice dams, heat loss patterns, and condensation problems that are not visible during warmer months. We take appropriate safety precautions on snow-covered or icy roofs.",
        },
        {
          q: "What happens if the inspection finds damage?",
          a: "We provide a detailed explanation of the damage, its severity, and your repair or replacement options with estimated costs. If the damage is storm-related, we can transition into our insurance claim support process. There is never any pressure to commit to work on the spot.",
        },
      ],
    },
    relatedSubPages: [
      "free-roof-estimate",
      "roof-coating",
      "roof-cleaning",
    ],
    keywords: [
      "roof inspection Chicago",
      "certified roof inspector Chicago IL",
      "home roof inspection Chicagoland",
      "real estate roof inspection",
      "HAAG certified inspector",
      "roof condition report Chicago",
    ],
  },
];
