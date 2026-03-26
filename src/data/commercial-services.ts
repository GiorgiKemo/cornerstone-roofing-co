export interface CommercialFAQ {
  q: string;
  a: string;
}

export interface CommercialService {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  systemTypes: string[];
  benefits: string[];
  faq: CommercialFAQ[];
}

export const commercialServices: CommercialService[] = [
  {
    slug: "commercial-roof-repair",
    title: "Commercial Roof Repair",
    metaTitle: "Commercial Roof Repair Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Commercial roof repair in Chicago for flat, metal, and membrane roofing systems. Minimize downtime with fast, professional repairs. Emergency response available.",
    intro: `Commercial roofing failures impact more than just the building they occur on. A leaking roof in a retail space damages inventory and drives customers away. In an office building, ceiling leaks disrupt operations, damage equipment, and create liability concerns. For warehouse and industrial facilities, water intrusion can compromise stored goods worth far more than the roof repair itself. The business case for prompt, expert commercial roof repair is not just about the roof — it is about protecting the revenue and operations that happen beneath it.

Cornerstone Roofing Co. serves commercial property owners and managers across the Chicagoland area with repair services for every major flat and low-slope roofing system. Our commercial division understands that business tenants have schedules, customers, and compliance requirements that residential properties do not. We coordinate repairs around operating hours, stage materials to minimize disruption to parking areas and building access, and communicate timelines clearly so building managers can plan accordingly.

Our commercial repair capabilities cover everything from isolated puncture patching on a single-ply membrane to extensive flashing overhauls around rooftop HVAC units, exhaust penetrations, and parapet walls. We also address common Chicago-specific commercial roofing problems: ponding water from clogged internal drains, membrane blistering from trapped moisture, and seam separations caused by thermal cycling. Every repair includes a root cause analysis to prevent recurrence and a documented warranty on the work performed.`,
    systemTypes: [
      "TPO (Thermoplastic Polyolefin) single-ply membrane",
      "EPDM (Ethylene Propylene Diene Monomer) rubber membrane",
      "Modified bitumen torch-applied and self-adhered systems",
      "Built-up roofing (BUR) multi-ply asphalt systems",
      "Standing seam and corrugated metal commercial roofing",
      "PVC (Polyvinyl Chloride) single-ply membrane",
      "Spray polyurethane foam (SPF) roofing systems",
    ],
    benefits: [
      "Repairs scheduled around business hours to minimize tenant and operational disruption",
      "Emergency response available for active leaks threatening inventory or equipment",
      "Root cause analysis prevents repeat failures and recurring repair costs",
      "Documented repair warranties provide accountability and property management records",
      "Experience with all major commercial membrane and metal roofing systems",
      "Compliance with OSHA and local safety requirements for commercial job sites",
    ],
    faq: [
      {
        q: "How quickly can you respond to a commercial roof leak?",
        a: "We offer same-day emergency response for active commercial roof leaks across the Chicagoland area. For non-emergency repairs, we typically schedule within 3-5 business days. We understand that commercial leaks impact business operations and treat them with appropriate urgency.",
      },
      {
        q: "Can you repair my commercial roof without disrupting tenants?",
        a: "In most cases, yes. We coordinate work schedules with building management to avoid peak business hours and stage materials in areas that do not block customer or employee access. For occupied buildings, we also manage noise and odor considerations during work hours.",
      },
      {
        q: "Do you offer commercial roof maintenance contracts?",
        a: "Yes. We offer annual and semi-annual maintenance programs that include scheduled inspections, drain clearing, sealant touch-ups, and minor repairs. Proactive maintenance extends roof life significantly and costs a fraction of reactive emergency repairs. Contact us for a customized maintenance proposal for your building.",
      },
      {
        q: "How do I know if my commercial roof needs repair or replacement?",
        a: "If repairs are isolated and the overall membrane condition is sound, repair is typically the best investment. If you are repairing the same areas repeatedly, the membrane shows widespread deterioration, or the roof is beyond 75% of its expected lifespan, replacement becomes more cost-effective. We provide honest assessments based on the roof's actual condition.",
      },
    ],
  },
  {
    slug: "flat-roof-replacement",
    title: "Commercial Flat Roof Replacement",
    metaTitle: "Flat Roof Replacement Chicago, IL | Commercial Roofing | Cornerstone Roofing Co.",
    metaDescription:
      "Complete flat roof replacement for Chicago commercial buildings. TPO, EPDM, and modified bitumen systems with 20-30 year warranties. Phased installation available.",
    intro: `A commercial flat roof replacement is a major capital expenditure that protects the building envelope for the next two to three decades. Unlike residential projects that typically take a few days, commercial roof replacements involve larger surface areas, heavier insulation systems, more complex drainage engineering, and coordination with rooftop mechanical equipment that must remain operational throughout the project. Selecting the right contractor is as important as selecting the right membrane, because installation quality is the single greatest determinant of long-term performance.

Cornerstone Roofing Co. has replaced flat roofs on office buildings, retail centers, warehouses, multi-unit residential buildings, religious facilities, and municipal structures across the Chicagoland area. Our commercial project managers understand the planning, permitting, and phased execution that large-scale roof replacements demand. We develop detailed project schedules that account for weather windows, tenant coordination, equipment crane access, and material staging, then execute against that plan with daily progress reporting.

Every commercial flat roof replacement we perform begins with a comprehensive core sample and moisture survey of the existing system. Core samples reveal the roof's layer composition, insulation condition, and deck type. Infrared moisture scanning identifies wet insulation areas that must be removed. This data drives our design specification, ensuring the new system addresses the specific conditions of your building rather than relying on a generic one-size-fits-all approach.`,
    systemTypes: [
      "TPO single-ply membrane (60 mil, 80 mil) — mechanically attached or fully adhered",
      "EPDM rubber membrane (60 mil, 90 mil) — ballasted, mechanically attached, or fully adhered",
      "Modified bitumen — torch-applied or self-adhered, 2-ply and 3-ply systems",
      "PVC single-ply membrane for chemical-exposure environments",
      "Hybrid systems combining membrane types for complex roof geometry",
    ],
    benefits: [
      "Core sampling and infrared moisture survey ensure accurate scope and pricing",
      "Tapered insulation design eliminates ponding water and meets code drainage requirements",
      "Phased installation options allow sections of the building to remain operational",
      "20-30 year manufacturer warranties available with certified contractor installation",
      "Energy-efficient white membrane options reduce cooling costs and may qualify for rebates",
      "Full compliance with Chicago building codes, OSHA requirements, and manufacturer specifications",
    ],
    faq: [
      {
        q: "How long does a commercial flat roof replacement take?",
        a: "Timeline depends on roof size, complexity, and weather. A 10,000 square foot single-story commercial building typically takes 5-10 business days. Larger projects, multi-phase installations, and buildings with extensive rooftop equipment take proportionally longer. We provide a detailed schedule during the proposal phase.",
      },
      {
        q: "Can you replace the roof in phases to avoid shutting down the building?",
        a: "Absolutely. Phased installation is common on occupied commercial buildings. We divide the roof into sections, complete each section to a watertight condition before moving to the next, and ensure the building remains weather-tight throughout the project. This approach minimizes disruption to tenants and operations.",
      },
      {
        q: "What happens to rooftop HVAC units during the replacement?",
        a: "Rooftop equipment is carefully worked around. We coordinate with your HVAC contractor to temporarily disconnect and secure units as needed, install new curb flashing and pitch pockets, and ensure equipment is properly reconnected and supported on the new roof system.",
      },
      {
        q: "What warranty options are available for commercial flat roofs?",
        a: "Manufacturer warranties range from 15 to 30 years depending on the membrane system and installation method. NDL (No Dollar Limit) warranties are available on TPO and PVC systems, covering both material and labor for the full warranty term. We help you select the warranty level that matches your building's ownership and management timeline.",
      },
    ],
  },
  {
    slug: "tpo-roofing",
    title: "TPO Roofing Systems",
    metaTitle: "TPO Roofing Installation Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "TPO roofing installation for Chicago commercial and residential flat roofs. Energy-efficient, durable, and cost-effective. Certified installers with manufacturer warranties.",
    intro: `Thermoplastic Polyolefin, universally known as TPO, has become the dominant single-ply membrane in the North American commercial roofing market, and its growth in the Chicagoland area mirrors the national trend. TPO's rise is driven by a combination of factors that align perfectly with what Chicago building owners need: a reflective white surface that reduces cooling costs during hot, humid summers; heat-welded seams that create a monolithic, watertight membrane with no adhesive to degrade over time; and a competitive price point that positions it between budget EPDM and premium PVC.

The key to TPO's performance lies in its seam technology. Where EPDM relies on adhesive tape and primers to bond seams, and modified bitumen uses torch-applied or self-adhered overlaps, TPO seams are fused together with a hot-air welding machine that melts the membrane surfaces and bonds them into a single, continuous sheet. A properly welded TPO seam is actually stronger than the membrane itself, which is why TPO leak rates at seam locations are significantly lower than competing systems when installed by trained technicians.

Cornerstone Roofing Co. installs TPO membrane systems from manufacturers including Carlisle, Firestone, GAF, and Johns Manville. Our crews are factory-trained and certified by each manufacturer, and every TPO installation undergoes seam testing using both peel testing and air pressure methods to verify weld integrity before the roof is considered complete. We install TPO in 60-mil and 80-mil thicknesses, fully adhered or mechanically attached, depending on the building's wind zone, deck type, and warranty requirements.`,
    systemTypes: [
      "60-mil TPO — standard commercial and residential flat roof applications",
      "80-mil TPO — high-traffic and premium warranty applications",
      "Mechanically attached — fastest installation, ideal for steel decks and re-cover",
      "Fully adhered — maximum wind uplift resistance, required in high-wind zones",
      "Fleece-backed TPO — self-adhering option that eliminates mechanical fasteners",
    ],
    benefits: [
      "Heat-welded seams create bonds stronger than the membrane itself",
      "White reflective surface reduces building cooling costs by 15-25% in summer",
      "Resists UV degradation, ozone, and chemical exposure from rooftop HVAC equipment",
      "Compatible with ENERGY STAR and cool roof rebate programs",
      "Manufacturer warranties up to 30 years with NDL (No Dollar Limit) coverage",
      "Faster installation than multi-ply systems, reducing labor costs and project duration",
    ],
    faq: [
      {
        q: "How long does TPO roofing last?",
        a: "High-quality TPO membranes from major manufacturers last 20-30 years with proper installation and maintenance. The key variable is membrane thickness: 80-mil TPO outlasts 60-mil significantly, especially in climates with high UV exposure and wide temperature swings like Chicago.",
      },
      {
        q: "Is TPO better than EPDM for a Chicago building?",
        a: "Both are excellent systems, but they have different strengths. TPO offers superior energy efficiency with its reflective surface and stronger welded seams. EPDM has a longer performance track record and better cold-weather flexibility. For most Chicago commercial buildings, we recommend TPO for new construction and buildings prioritizing energy savings, and EPDM for budget-sensitive projects.",
      },
      {
        q: "Can TPO be installed over an existing roof?",
        a: "In many cases, yes. If the existing roof has only one membrane layer and the insulation is dry, TPO can be installed as a recover system, saving significant tear-off and disposal costs. A core sample and moisture survey determine whether recover is viable for your building.",
      },
      {
        q: "Does TPO roofing require maintenance?",
        a: "TPO requires minimal maintenance, but annual inspections are recommended to check seam integrity, clear debris from drains, and address any mechanical damage from foot traffic or equipment servicing. A proactive maintenance program extends membrane life and preserves your warranty coverage.",
      },
    ],
  },
  {
    slug: "epdm-roofing",
    title: "EPDM Roofing Systems",
    metaTitle: "EPDM Rubber Roofing Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "EPDM rubber roofing installation and repair for Chicago commercial buildings. Proven 50-year track record in cold climates. Expert installation with manufacturer warranties.",
    intro: `EPDM, ethylene propylene diene monomer, is the rubber roofing membrane that has protected commercial and residential flat roofs for over half a century. No other single-ply membrane can claim a field performance record of this length, and in Chicago's punishing climate, that track record carries weight. EPDM membranes installed on Chicagoland buildings in the 1970s and 1980s are still performing today, a testament to the material's fundamental durability in freeze-thaw environments.

The chemistry that makes EPDM exceptional in cold climates is straightforward: synthetic rubber remains flexible at temperatures where thermoplastic membranes like TPO and PVC begin to stiffen. Chicago routinely sees winter temperatures below zero degrees Fahrenheit, and the thermal shock of a sunny winter afternoon warming a black membrane surface from -10 to +40 degrees in a few hours creates expansion and contraction forces that stress seams and flashings. EPDM's elastomeric nature absorbs these movements without cracking or losing seal integrity, which is why it has earned the nickname "the cold-climate membrane."

Cornerstone Roofing Co. installs EPDM systems from Firestone, Carlisle, and Johns Manville in both 60-mil and 90-mil thicknesses. We offer ballasted, mechanically attached, and fully adhered installation methods, each suited to different building types and owner requirements. Ballasted systems, where the membrane is loose-laid and held down by river rock or pavers, are the most economical and allow easy future access for repairs. Mechanically attached systems are lightweight and fast to install. Fully adhered systems provide the highest wind uplift resistance and the smoothest finished appearance.`,
    systemTypes: [
      "60-mil EPDM — standard commercial applications with 20-year warranties",
      "90-mil EPDM — premium thickness for maximum durability and 30-year warranties",
      "Ballasted — loose-laid with stone or paver ballast, most economical option",
      "Mechanically attached — lightweight, fast installation on steel and wood decks",
      "Fully adhered — maximum wind resistance and cleanest appearance",
    ],
    benefits: [
      "50+ year performance track record, the longest of any single-ply membrane",
      "Remains flexible and functional at temperatures below -40F",
      "Exceptional resistance to UV radiation, ozone, and weathering",
      "Large sheet sizes (up to 50 feet wide) minimize the number of field seams",
      "Easy to repair with simple patch and adhesive techniques",
      "Lower material cost than TPO or PVC for budget-sensitive projects",
    ],
    faq: [
      {
        q: "How long does EPDM roofing last?",
        a: "EPDM routinely lasts 25-40 years and many installations have exceeded 50 years. The material itself is extraordinarily durable; most EPDM failures occur at seams and flashings rather than in the field of the membrane. Quality installation and periodic seam maintenance are the keys to maximum lifespan.",
      },
      {
        q: "Is EPDM a good choice for a flat roof on a Chicago bungalow?",
        a: "EPDM is an excellent choice for residential flat roofs in Chicago. Its cold-weather flexibility, proven longevity, and ease of repair make it well-suited to the flat rear additions on classic Chicago bungalows and two-flats. A 60-mil fully adhered EPDM system with proper insulation provides reliable, affordable protection.",
      },
      {
        q: "Why is EPDM black instead of white?",
        a: "Traditional EPDM uses carbon black as a UV stabilizer, which gives it the characteristic dark color. White EPDM is available but uses different UV stabilizers that have a shorter performance track record. For buildings where energy efficiency is the priority, we typically recommend TPO for its proven white reflective surface rather than white EPDM.",
      },
      {
        q: "Can EPDM be repaired if it gets punctured?",
        a: "EPDM is one of the easiest membranes to repair. A puncture or small tear is patched with a piece of uncured EPDM and bonding adhesive, creating a permanent, watertight repair in minutes. This ease of repair is one of EPDM's key advantages for buildings with rooftop foot traffic or equipment servicing that increases puncture risk.",
      },
    ],
  },
];
