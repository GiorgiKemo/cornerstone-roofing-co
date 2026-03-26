export interface SidingFAQ {
  q: string;
  a: string;
}

export interface SidingBrand {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  parentSlug: string;
  intro: string;
  benefits: string[];
  costRange: string;
  durability: string;
  faq: SidingFAQ[];
}

export const sidingBrands: SidingBrand[] = [
  {
    slug: "james-hardie",
    title: "James Hardie Fiber Cement Siding",
    metaTitle: "James Hardie Siding Installation Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Certified James Hardie siding installer in Chicago. HardiePlank, HardieShingle, and HardiePanel products engineered for Chicagoland's freeze-thaw climate. Free estimates.",
    parentSlug: "siding",
    intro: `James Hardie fiber cement siding has earned its reputation as the premier exterior cladding for homes in challenging climates, and few climates challenge siding more aggressively than Chicagoland's. The HZ10 product line, engineered specifically for regions with frequent freeze-thaw cycling, is formulated with a proprietary binder technology that resists moisture penetration at the molecular level. This is not a marketing claim; it is the reason Hardie products carry a 30-year non-prorated substrate warranty and have become the default specification for discerning Chicago-area homeowners and builders.

Cornerstone Roofing Co. is a James Hardie Preferred Contractor, a designation that requires documented training, adherence to Hardie's specific installation protocols, and a track record of successful projects. This certification matters because fiber cement performance depends heavily on installation technique. Incorrect nailing, inadequate gapping for thermal expansion, or missing flashing details can void the warranty and allow moisture behind the product, exactly the failure mode the material was designed to prevent.

We install the full Hardie product portfolio: HardiePlank lap siding in smooth and cedarmill textures, HardieShingle staggered edge panels for accent areas and gable ends, HardiePanel vertical siding for modern farmhouse designs, and HardieTrim boards that replace rot-prone wood trim around windows, doors, and corners. ColorPlus factory-applied finish, baked on under controlled conditions, delivers a more uniform and durable coating than any field-applied paint, and it carries a separate 15-year fade and peel warranty.`,
    benefits: [
      "HZ10 formulation engineered specifically for freeze-thaw climates like Chicago",
      "30-year non-prorated substrate warranty backed by the manufacturer",
      "Class A fire rating provides the highest level of non-combustible protection",
      "Resists rot, termites, woodpeckers, and fungal decay permanently",
      "ColorPlus factory finish carries a 15-year warranty against fading, cracking, and peeling",
      "Available in lap, shingle, panel, and trim profiles for complete design flexibility",
    ],
    costRange: "$9.00 - $14.00 per square foot installed",
    durability:
      "James Hardie siding withstands sustained winds up to 150 mph when installed per manufacturer specifications. The fiber cement substrate is dimensionally stable, meaning it does not expand and contract with moisture changes the way wood does. In Chicago's climate, where humidity can swing from 20% in winter to 85% in summer, this stability prevents the warping, buckling, and gap formation that plagues wood-based products. With proper installation and minimal maintenance, Hardie siding routinely lasts 40-50 years.",
    faq: [
      {
        q: "Is James Hardie siding worth the higher cost?",
        a: "For most Chicago homeowners, yes. Hardie costs more upfront than vinyl or LP SmartSide, but its 40-50 year lifespan, zero rot risk, Class A fire rating, and minimal maintenance requirements make it the lowest total-cost-of-ownership option over the life of the home. It also consistently ranks as the highest ROI exterior remodel in the Chicagoland market.",
      },
      {
        q: "Can James Hardie be installed in winter in Chicago?",
        a: "Yes, with precautions. Hardie products can be cut and installed in cold weather, but caulking and field painting require temperatures above 40 degrees Fahrenheit. We schedule winter installations with factory-finished ColorPlus products to avoid field painting constraints and ensure year-round quality.",
      },
      {
        q: "Does James Hardie siding need to be painted?",
        a: "If you choose the ColorPlus factory-finished option, no painting is needed for at least 15 years. Primed-only HardiePlank requires two coats of 100% acrylic paint after installation. We recommend ColorPlus for Chicago installations because the factory-controlled coating process produces a more durable finish than field application.",
      },
      {
        q: "How does Hardie handle woodpecker damage?",
        a: "It does not attract woodpeckers. Unlike wood siding, fiber cement does not harbor the insects that woodpeckers feed on, and the material is too hard for them to peck through. This is a significant advantage in wooded Chicago suburbs like Hinsdale, Glenview, and Barrington where woodpecker damage to wood siding is a perennial problem.",
      },
    ],
  },
  {
    slug: "lp-smartside",
    title: "LP SmartSide Engineered Wood Siding",
    metaTitle: "LP SmartSide Siding Installation Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "LP SmartSide engineered wood siding installation in Chicago. Real wood beauty with engineered durability. Treated to resist moisture, rot, and termites. Get a free quote.",
    parentSlug: "siding",
    intro: `LP SmartSide brings the natural warmth and workability of real wood to an engineered product treated with SmartGuard process technology that provides built-in protection against moisture, fungal decay, and termite damage. For Chicago homeowners who want authentic wood grain texture and the ability to receive custom stain finishes, LP SmartSide delivers what fiber cement and vinyl cannot: a genuine wood appearance that feels like wood when you run your hand across it, because it is wood, just smarter.

The SmartGuard treatment process infuses zinc borate throughout the oriented strand board substrate, providing protection not just at the surface but through the entire cross-section of the product. This is a meaningful advantage over surface-treated products, because any cut, nail hole, or field modification exposes fresh material that remains protected. In Chicago, where driving rain can find its way into the smallest unsealed gap, through-and-through treatment provides a critical safety net against moisture intrusion.

Cornerstone Roofing Co. is an LP SmartSide certified installer, and our crews appreciate the product's ease of handling on the job site. SmartSide weighs roughly half as much as fiber cement, which means faster installation, less fatigue-related quality issues late in the day, and lower labor costs passed on to the homeowner. The product cuts cleanly with standard carpentry tools without the silica dust hazard that fiber cement generates, creating a healthier work environment for our installers and your family.`,
    benefits: [
      "Authentic wood grain texture with the warmth and character of natural wood",
      "SmartGuard zinc borate treatment provides through-and-through protection against rot, decay, and termites",
      "50% lighter than fiber cement, enabling faster installation and lower labor costs",
      "Cuts cleanly with standard tools without generating harmful silica dust",
      "5/50 year limited warranty covering substrate and finish performance",
      "Available in lap, panel, trim, and soffit profiles for complete exterior applications",
    ],
    costRange: "$7.00 - $11.00 per square foot installed",
    durability:
      "LP SmartSide carries a 5/50 year limited warranty, with the first five years covering 100% of material and labor costs. Impact resistance testing shows SmartSide outperforms fiber cement in hail and debris impact scenarios, flexing rather than cracking under force. Wind resistance meets or exceeds code requirements for all Chicagoland wind zones. The primary durability consideration is finish maintenance: the factory-primed product requires painting within 60 days of installation, and the finish should be recoated every 10-15 years to maintain protection.",
    faq: [
      {
        q: "How does LP SmartSide compare to James Hardie?",
        a: "SmartSide costs 15-25% less than Hardie, weighs half as much, offers a more authentic wood grain texture, and has better impact resistance. Hardie offers superior fire resistance with a Class A rating and does not require repainting as frequently. Both are excellent choices for Chicago homes; the decision often comes down to whether you prioritize wood aesthetics or maximum fire protection.",
      },
      {
        q: "Does LP SmartSide rot like regular wood siding?",
        a: "No. The SmartGuard treatment process infuses every fiber of the engineered strand board with zinc borate, a preservative that prevents fungal decay and resists termites. Unlike surface-treated products, any cuts or nail holes expose material that is already treated throughout.",
      },
      {
        q: "Can LP SmartSide be stained instead of painted?",
        a: "Yes. LP SmartSide accepts solid-color and semi-transparent stains beautifully, which is one of its key advantages over fiber cement. Staining highlights the authentic wood grain texture and creates a finish that many homeowners prefer over the painted look of Hardie's ColorPlus finish.",
      },
      {
        q: "How often does LP SmartSide need repainting in Chicago?",
        a: "Expect to repaint or restain every 10-15 years in the Chicago climate. South and west-facing elevations may need attention sooner due to UV and weather exposure. Using a high-quality 100% acrylic exterior paint and maintaining proper caulking extends finish life significantly.",
      },
    ],
  },
  {
    slug: "vinyl",
    title: "Vinyl Siding",
    metaTitle: "Vinyl Siding Installation Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Affordable, low-maintenance vinyl siding installation in Chicago. Modern profiles, fade-resistant colors, and professional installation. Free estimates from Cornerstone Roofing.",
    parentSlug: "siding",
    intro: `Vinyl siding remains the most widely installed exterior cladding in the United States, and for budget-conscious Chicago homeowners who want a clean, attractive exterior without the maintenance demands of wood or the premium price of fiber cement, it offers compelling value. Today's vinyl products bear little resemblance to the thin, chalky panels that gave the material a bad reputation in the 1980s. Premium vinyl lines from CertainTeed, Alside, and Mastic feature wall thicknesses of .044 inches or more, wind-lock fastening systems rated to 200+ mph, and advanced colorant packages that resist UV fading for decades.

The maintenance equation is where vinyl truly shines in the Chicagoland context. A vinyl-clad home never needs painting, staining, or sealing. An annual wash with a garden hose and a soft brush keeps it looking fresh. In a region where wood siding demands repainting every 5-7 years at a cost of $3,000-$8,000 per cycle, vinyl's zero-maintenance profile delivers substantial long-term savings that narrow the perceived gap with higher-end materials.

Cornerstone Roofing Co. installs premium vinyl siding lines that offer the most realistic wood-grain textures and deepest color palettes available. We pay particular attention to the installation details that separate a professional job from a handyman special: proper nailing to allow for thermal expansion, starter strip and J-channel detailing at transitions, and insulated backing boards that add R-value and eliminate the hollow feel that some homeowners associate with vinyl.`,
    benefits: [
      "Lowest upfront cost of any major siding material, 40-60% less than fiber cement",
      "Zero painting or staining required for the life of the product",
      "Will not rot, rust, corrode, or attract insects under any conditions",
      "Modern color technology resists UV fading and chalking for 20+ years",
      "Wind-lock systems rated to 200+ mph on premium lines",
      "Insulated vinyl options add R-value and eliminate the hollow sound on impact",
    ],
    costRange: "$4.50 - $8.00 per square foot installed",
    durability:
      "Premium vinyl siding lasts 25-40 years with virtually no maintenance. It is impervious to moisture, insects, and rot, the three primary failure modes of wood siding in Chicago's climate. The main durability limitation is impact resistance: vinyl can crack on a hard blow, particularly in cold weather when the PVC becomes more brittle. Hail damage to vinyl siding is a common insurance claim in the Chicago area. Manufacturers address this with thicker wall profiles and engineered formulations that maintain flexibility at lower temperatures.",
    faq: [
      {
        q: "Is vinyl siding a good choice for Chicago weather?",
        a: "Vinyl handles Chicago's moisture, humidity, and temperature swings well because it is impervious to water and does not expand or contract enough to cause performance issues. The main concern is hail impact during severe storms, which can crack panels. Thicker premium vinyl profiles (0.046 inch or thicker) resist impact damage better than builder-grade products.",
      },
      {
        q: "Can vinyl siding be installed over existing siding?",
        a: "In many cases, yes. Vinyl can be installed over old aluminum, vinyl, or even wood siding if the existing surface is flat and sound. However, installing over old siding prevents inspection of the sheathing and housewrap. We recommend removal when the existing material is damaged or when adding insulation board beneath the new vinyl.",
      },
      {
        q: "Does vinyl siding decrease home value?",
        a: "No. Vinyl siding installation consistently ranks among the highest-ROI exterior improvements, recovering 65-80% of the project cost at resale. While it does not add the same prestige as James Hardie in high-end Chicago neighborhoods, it significantly improves curb appeal and marketability in the majority of Chicagoland communities.",
      },
      {
        q: "Can vinyl siding be painted a different color?",
        a: "Yes, but with limitations. Vinyl can be painted with 100% acrylic latex paint in a color equal to or lighter than the original. Darker colors absorb more heat, which can cause the vinyl to warp. If you want a significantly different look, replacement with a new color is more reliable than painting.",
      },
    ],
  },
  {
    slug: "siding-repair",
    title: "Siding Repair",
    metaTitle: "Siding Repair Services in Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Professional siding repair in Chicago for vinyl, fiber cement, wood, and aluminum siding. Fix storm damage, cracks, warping, and water infiltration. Fast response.",
    parentSlug: "siding",
    intro: `Damaged siding is more than a cosmetic problem. Every crack, loose panel, and separated seam is a pathway for moisture to reach the sheathing and framing behind your home's exterior. In Chicago's climate, where wind-driven rain arrives horizontally during storms and snow piles against walls for months, even a small breach in the siding envelope can lead to mold growth, structural rot, and insulation damage that silently escalates repair costs. Addressing siding damage promptly is one of the most cost-effective ways to protect your home's structural integrity.

Cornerstone Roofing Co. repairs all siding types found across the Chicagoland housing stock. Vinyl panels cracked by hail or displaced by high winds can be individually replaced without disturbing adjacent sections. James Hardie fiber cement boards damaged by impact or with failed caulking at butt joints are repaired using manufacturer-matched replacement pieces and Hardie-approved sealants. Wood clapboard and shakes suffering from rot, splitting, or paint failure are replaced with matching profiles and properly primed and painted to integrate with the surrounding surface.

Our repair service begins with a thorough evaluation to ensure we are treating the cause, not just the symptom. If a vinyl panel blew off during a storm, we check the nailing pattern on surrounding panels to determine whether the installation method created a systemic vulnerability. If a Hardie board is cracked, we investigate whether the crack resulted from impact or from thermal stress caused by over-driven nails that prevent proper expansion movement. This diagnostic approach prevents repeat failures and ensures your repair investment lasts.`,
    benefits: [
      "Stops water infiltration before it causes hidden mold and structural rot",
      "Costs a fraction of full siding replacement when damage is localized",
      "Preserves manufacturer warranties with proper repair materials and techniques",
      "Restores curb appeal by eliminating visible cracks, holes, and misaligned panels",
      "Supports insurance claims with documented damage assessment and photo evidence",
      "Available year-round with priority scheduling for storm damage situations",
    ],
    costRange: "$300 - $3,000 depending on scope and material",
    durability:
      "A properly executed siding repair should last as long as the surrounding original material. We achieve this by using manufacturer-matched replacement pieces, compatible fasteners, and correct installation techniques for each siding type. Repairs to vinyl typically involve direct panel replacement with color-matched stock. Fiber cement repairs use factory-primed Hardie boards cut and painted to match. Wood repairs include primer sealing of all cut edges and end grain to prevent moisture uptake.",
    faq: [
      {
        q: "Can you match my existing siding color for a repair?",
        a: "In most cases, yes. We maintain stock of the most popular vinyl, Hardie, and LP SmartSide colors used in the Chicago area. For discontinued colors, we source the closest available match. Keep in mind that existing siding fades slightly over time, so a perfect color match on heavily weathered siding may not be achievable without painting the repaired section.",
      },
      {
        q: "Does homeowner's insurance cover siding repair?",
        a: "Storm damage to siding, including hail strikes, wind damage, and debris impact, is typically covered under your homeowner's policy. We provide the documentation and photo evidence your insurance company needs to process the claim. Normal wear-and-tear and maintenance issues are not covered.",
      },
      {
        q: "How do I know if my siding damage needs repair or full replacement?",
        a: "If damage is limited to a few panels or a single wall section, repair is usually the right call. If damage is widespread, the siding is at the end of its expected life, or underlying sheathing is compromised across multiple areas, replacement becomes more cost-effective. We provide an honest assessment during our evaluation.",
      },
      {
        q: "Can you repair siding in winter?",
        a: "Yes. Vinyl siding can be replaced in cold weather with extra care, as the material becomes more brittle. Fiber cement and wood repairs require temperatures above 40 degrees for caulking and paint application. We schedule cold-weather repairs strategically to ensure quality results.",
      },
    ],
  },
  {
    slug: "siding-replacement",
    title: "Siding Replacement",
    metaTitle: "Complete Siding Replacement in Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Full siding replacement for Chicago homes. Upgrade from outdated vinyl, wood, or aluminum to modern fiber cement or engineered wood. Transform your home's exterior.",
    parentSlug: "siding",
    intro: `There comes a point in every home's life when patching and repairing siding no longer makes financial sense. When panels are warped across multiple elevations, paint peels within a year of application, wood rot has infiltrated the sheathing behind the exterior, or the material has simply reached the end of its useful life, a complete siding replacement is the reset button that restores protection, energy efficiency, and curb appeal simultaneously.

A full siding replacement in the Chicagoland area is also an opportunity to upgrade your home's thermal envelope. Many homes built before 2000, and virtually all homes built before 1980, have minimal insulation between the siding and the wall sheathing. When old siding comes off, we can install rigid foam insulation board or insulated housewrap that dramatically reduces air infiltration and thermal bridging through wall studs. In a climate where heating costs dominate household energy budgets from October through April, this upgrade often pays for itself in reduced Nicor Gas bills within five to seven years.

Cornerstone Roofing Co. approaches every siding replacement as a systems project, not just a cosmetic facelift. We evaluate the entire wall assembly from the interior drywall outward: vapor barrier placement, insulation adequacy, sheathing condition, housewrap integrity, flashing at windows and doors, and finally the siding itself. This holistic perspective ensures that your new siding performs as intended and that no hidden moisture problems are sealed behind an expensive new exterior.`,
    benefits: [
      "Eliminates ongoing repair costs on aging, deteriorating siding",
      "Opportunity to add insulation that reduces heating and cooling expenses",
      "Transforms the home's appearance and significantly increases resale value",
      "Modern materials like Hardie and LP SmartSide outlast the originals by decades",
      "Reveals and allows repair of hidden sheathing damage, mold, and insulation failures",
      "Updated housewrap and flashing at every window and door tightens the building envelope",
    ],
    costRange: "$12,000 - $45,000 for a full home depending on size and material",
    durability:
      "The durability of a siding replacement is determined by the material selected and the quality of installation. James Hardie fiber cement lasts 40-50 years with minimal maintenance. LP SmartSide engineered wood performs for 30-40 years with periodic refinishing. Premium vinyl lasts 25-40 years maintenance-free. Cornerstone's installation practices meet or exceed all manufacturer requirements, ensuring your warranty is fully valid from day one.",
    faq: [
      {
        q: "How long does a full siding replacement take?",
        a: "An average Chicago-area home of 1,500-2,500 square feet of siding takes 7-14 business days from start to finish, including removal of old siding, substrate repair, housewrap installation, and new siding application. Larger homes, multi-story structures, and complex trim details extend the timeline.",
      },
      {
        q: "What is the best time of year to replace siding in Chicago?",
        a: "Late spring through early fall offers the most consistent working conditions. However, we install siding year-round. Winter installations are viable with factory-finished products that eliminate the need for field painting in cold temperatures. Each season has trade-offs, and we help you weigh scheduling against your timeline.",
      },
      {
        q: "Should I replace siding and windows at the same time?",
        a: "If your windows are also due for replacement, combining the projects is highly recommended. It allows us to properly flash and seal the window-to-wall connection without having to work around existing siding. The overlap in labor and scaffolding can also reduce the combined project cost compared to doing each separately.",
      },
      {
        q: "Will replacing siding increase my home's value in Chicago?",
        a: "Consistently, yes. James Hardie fiber cement siding replacement recovers approximately 80-90% of project cost at resale in the Chicagoland market, according to Remodeling Magazine's Cost vs. Value report. Vinyl siding replacement recovers roughly 65-75%. Beyond the financial return, updated siding dramatically accelerates the sale timeline by improving first-impression curb appeal.",
      },
    ],
  },
  {
    slug: "soffit-fascia",
    title: "Soffit & Fascia Installation",
    metaTitle: "Soffit & Fascia Repair and Installation Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Soffit and fascia installation and repair in Chicago. Aluminum, vinyl, and wood options. Protect your roofline, improve ventilation, and enhance curb appeal.",
    parentSlug: "siding",
    intro: `Soffit and fascia may not draw the same attention as siding or roofing, but these two components play an outsized role in protecting your home from the top down. Fascia boards cap the exposed ends of your roof rafters, providing the mounting surface for your gutter system and the finished face that is visible from the street. Soffit panels enclose the underside of the roof overhang, protecting rafter tails from weather exposure while providing the critical intake ventilation that every attic needs to regulate moisture and temperature.

When soffit and fascia fail, the consequences cascade through multiple systems. Rotted fascia allows gutters to sag and detach, directing water against the foundation. Damaged soffit blocks attic ventilation, trapping moisture that accelerates sheathing decay and promoting ice dam formation in Chicago winters. Gaps in deteriorated soffit also invite squirrels, raccoons, birds, and bats into attic spaces, creating pest problems that compound the structural damage. In older Chicago neighborhoods, damaged soffit and fascia are among the most common findings in home inspection reports.

Cornerstone Roofing Co. installs and repairs soffit and fascia in aluminum, vinyl, and primed wood, and we increasingly recommend aluminum wrapping of existing wood fascia as a cost-effective alternative to full replacement. Aluminum wrap provides a maintenance-free, weather-resistant shell over sound wood while costing significantly less than tearing out and replacing the fascia board entirely. For soffit, vented aluminum panels are our standard recommendation because they deliver the ventilation flow your attic requires without the maintenance burden of painted wood.`,
    benefits: [
      "Protects rafter tails and roof structure from moisture damage and decay",
      "Vented soffit panels provide essential attic intake ventilation to prevent ice dams",
      "Eliminates pest entry points that allow wildlife into attic spaces",
      "Aluminum soffit and fascia require zero painting or maintenance",
      "Improves the finished appearance of the roofline and gutter system",
      "Fascia wrap over existing wood saves cost while providing lasting protection",
    ],
    costRange: "$6.00 - $14.00 per linear foot installed",
    durability:
      "Aluminum soffit and fascia are the most durable options for Chicago homes, resisting moisture, insects, and UV degradation indefinitely. They will not rot, warp, or need repainting. Vinyl soffit and fascia offer similar maintenance-free performance at a lower cost point but can become brittle and crack in extreme cold. Wood soffit and fascia provide the most authentic look for historic homes but require repainting every 5-7 years and eventual replacement when moisture damage occurs.",
    faq: [
      {
        q: "What is the difference between soffit and fascia?",
        a: "Fascia is the vertical board that runs along the lower edge of the roof, capping the rafter ends and supporting the gutter system. Soffit is the horizontal panel that covers the underside of the roof overhang between the fascia and the house wall. Both work together to protect the roof structure and regulate attic ventilation.",
      },
      {
        q: "Why is my soffit important for ventilation?",
        a: "Vented soffit panels allow outside air to enter the attic at the lowest point of the roof. This intake air flows upward and exits through ridge vents or roof vents at the peak. This continuous airflow removes excess moisture and heat from the attic, preventing condensation on the underside of roof sheathing in winter and reducing cooling loads in summer.",
      },
      {
        q: "Can you repair soffit and fascia without replacing the gutters?",
        a: "Yes. We carefully remove and rehang the existing gutters to access the fascia board. If the gutters are in good condition, they are reinstalled after the fascia work is complete. If the gutters are aged or damaged, this is an ideal time to upgrade them since the gutters are already being removed.",
      },
      {
        q: "How do I know if my soffit and fascia need replacement?",
        a: "Look for peeling paint, soft or spongy wood, visible rot, sagging gutter sections, pest activity near the roofline, and moisture stains on the underside of the overhang. From the attic, daylight visible through the soffit area or evidence of animal entry are clear indicators. We provide free evaluations of soffit and fascia condition as part of any roof or siding inspection.",
      },
    ],
  },
];
