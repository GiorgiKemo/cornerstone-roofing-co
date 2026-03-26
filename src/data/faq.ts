export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  relatedService: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "How much does a new roof cost in Chicago?",
    answer:
      "A residential roof replacement in the Chicago area typically costs between $8,500 and $25,000 depending on roof size, pitch, material selection, and whether structural repairs are needed. Asphalt architectural shingles are the most affordable option at $4-$7 per square foot installed, while standing seam metal ranges from $8-$16 per square foot. We provide free, detailed estimates with transparent line-item pricing so you know exactly where every dollar goes.",
    category: "Costs",
    relatedService: "roof-replacement",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements in Chicagoland are completed in 1-3 days for asphalt shingles. Metal roofing installations take 3-5 days due to the precision required for panel alignment and seam work. Flat roof replacements on commercial buildings range from 5-15 days depending on size. Weather delays are factored into every project schedule, and we always leave a watertight roof at the end of each work day.",
    category: "Timeline",
    relatedService: "roof-replacement",
  },
  {
    question: "Does homeowner's insurance cover roof replacement?",
    answer:
      "If the replacement is necessitated by a covered peril such as hail, wind, or storm damage, most Illinois homeowner's policies cover the cost minus your deductible. Damage from normal wear, aging, and deferred maintenance is not covered. We offer free storm damage inspections and work directly with your insurance adjuster to document damage and maximize your claim payout.",
    category: "Insurance",
    relatedService: "storm-damage-roofing",
  },
  {
    question: "What is the best roofing material for Chicago weather?",
    answer:
      "For most Chicago homes, architectural asphalt shingles with SBS-modified (rubberized) asphalt provide the best balance of freeze-thaw resistance, wind performance, and value. Standing seam metal is ideal for homeowners seeking maximum lifespan and snow-shedding capability. For flat roofs, TPO membrane offers excellent weatherproofing and energy efficiency. The best choice depends on your roof's slope, your budget, and how long you plan to stay in the home.",
    category: "Materials",
    relatedService: "roof-replacement",
  },
  {
    question: "Do you offer financing for roof replacement?",
    answer:
      "Yes. We offer financing through third-party lenders with terms ranging from 12 to 180 months. Promotional 0% APR offers are available for qualifying homeowners. Monthly payments can make a major roofing project fit comfortably into your household budget. We discuss financing options during your free estimate appointment.",
    category: "Costs",
    relatedService: "roof-replacement",
  },
  {
    question: "How do I know if I need a roof repair or full replacement?",
    answer:
      "If damage is limited to a small area, such as a few missing shingles, a localized leak, or a single failed flashing point, repair is usually the right choice. If your roof is over 20 years old, shows widespread granule loss, has multiple active leaks, or exhibits curling and buckling across the surface, replacement is more cost-effective in the long run. Our inspectors provide an honest assessment with both options when applicable.",
    category: "Maintenance",
    relatedService: "roof-repair",
  },
  {
    question: "What warranty do you offer on roofing work?",
    answer:
      "As a GAF Master Elite contractor, we offer the GAF Golden Pledge warranty covering both materials and workmanship for up to 50 years, the strongest warranty in the residential roofing industry. Owens Corning and CertainTeed installations carry comparable manufacturer-backed warranties. Every project also includes our own 10-year workmanship guarantee. Warranty details are provided in your written proposal.",
    category: "Warranties",
    relatedService: "roof-replacement",
  },
  {
    question: "Can you work with my insurance adjuster on a storm damage claim?",
    answer:
      "Absolutely. We meet your adjuster on-site to walk the roof together, ensuring every area of damage is documented and included in the approved scope. Our Xactimate-formatted estimates speak the same language your insurance company uses, reducing processing delays. We also file supplements when additional damage is discovered during the project. This coordination is included at no extra charge.",
    category: "Insurance",
    relatedService: "hail-damage-claim",
  },
  {
    question: "What is the best siding for Chicago homes?",
    answer:
      "James Hardie fiber cement siding is the top performer in Chicago's freeze-thaw climate, offering a Class A fire rating, 30-year substrate warranty, and zero risk of rot or insect damage. LP SmartSide engineered wood provides authentic wood grain at a lower price point. Premium vinyl is the most affordable option and works well for budget-focused projects. Each material has specific advantages, and we help you choose based on your priorities.",
    category: "Materials",
    relatedService: "siding",
  },
  {
    question: "How long does siding last in Chicago?",
    answer:
      "James Hardie fiber cement siding lasts 40-50 years with minimal maintenance. LP SmartSide performs for 30-40 years with periodic refinishing every 10-15 years. Premium vinyl siding lasts 25-40 years maintenance-free. Wood siding can last 20-30 years with diligent maintenance including repainting every 5-7 years. Chicago's freeze-thaw climate and humidity are harder on siding than milder regions, making material selection and installation quality critical.",
    category: "Materials",
    relatedService: "siding",
  },
  {
    question: "Do you provide emergency roof repair after hours?",
    answer:
      "Yes. We operate a genuine 24-hour emergency roofing service across the entire Chicagoland area. Our after-hours line connects to an on-call project manager who can assess your situation and dispatch a crew at any hour. Emergency stabilization, including tarping and temporary sealing, is available year-round. The emergency response fee is credited toward the cost of permanent repairs.",
    category: "Emergency",
    relatedService: "emergency-roof-repair",
  },
  {
    question: "How often should I have my roof inspected?",
    answer:
      "We recommend a professional roof inspection every 3-5 years for roofs under 15 years old, and annually for roofs older than 15. You should also schedule an inspection after any major storm event and before buying or selling a home. Regular inspections catch small problems before they become expensive repairs and help you plan and budget for eventual replacement.",
    category: "Maintenance",
    relatedService: "roof-inspection",
  },
  {
    question: "Can a new roof lower my energy bills?",
    answer:
      "Yes. A new roof with proper ventilation and insulation can reduce heating and cooling costs by 10-25%. Reflective roofing materials like white TPO membranes and metal panels with cool coatings are especially effective at reducing summer cooling loads. In the attic, upgrading insulation to the current R-49 code minimum during a roof replacement further improves energy efficiency, particularly during Chicago's heating-intensive winter months.",
    category: "Costs",
    relatedService: "roof-replacement",
  },
  {
    question: "What should I do if I find a leak in my ceiling?",
    answer:
      "Place a bucket or container under the drip to contain water, and move furniture and electronics away from the affected area. If water is near electrical fixtures, turn off the circuit at the breaker panel. Do not attempt to access the roof, especially during rain. Call Cornerstone immediately for emergency leak assessment. Acting quickly prevents additional damage to drywall, insulation, and framing.",
    category: "Emergency",
    relatedService: "roof-leak-repair",
  },
  {
    question: "Do I need a permit for a roof replacement in the Chicago suburbs?",
    answer:
      "Most municipalities in Cook, DuPage, Will, Kane, and Lake counties require a building permit for roof replacement. The City of Chicago requires permits for all roofing work. Permit requirements, fees, and processing times vary by jurisdiction. Cornerstone handles all permit applications as part of our project management service, so you do not need to visit any municipal offices.",
    category: "Timeline",
    relatedService: "roof-replacement",
  },
  {
    question: "How often should gutters be cleaned in the Chicago area?",
    answer:
      "Without gutter guards, we recommend cleaning at least twice per year: once in late spring after seed pods fall and again in late November after leaf drop. Homes with heavy tree canopy may need a third cleaning in midsummer. Clogged gutters contribute directly to ice dam formation in winter and basement water infiltration year-round. Gutter guard installation can extend cleaning intervals to once every 2-3 years.",
    category: "Maintenance",
    relatedService: "gutter-cleaning",
  },
  {
    question: "Can you install a roof in winter in Chicago?",
    answer:
      "Yes. Roofing work can proceed in cold weather with proper technique. Most asphalt shingles can be installed in temperatures above 40 degrees Fahrenheit, and we use hand-sealing methods to ensure shingle adhesion when temperatures are lower. Metal roofing and flat roof membranes can be installed in colder conditions. We schedule winter projects during favorable weather windows and never compromise quality for schedule convenience.",
    category: "Timeline",
    relatedService: "roof-replacement",
  },
  {
    question: "What areas do you serve in the Chicagoland area?",
    answer:
      "Cornerstone Roofing Co. serves the entire greater Chicago metropolitan area, including Chicago proper and suburbs across Cook, DuPage, Will, Kane, and Lake counties. Our service area extends from Elgin and Schaumburg in the northwest to Joliet and Tinley Park in the south, and from Aurora in the west to Evanston and the North Shore communities in the north and east.",
    category: "General",
    relatedService: "roof-replacement",
  },
  {
    question: "What is an ice dam and how do I prevent one?",
    answer:
      "An ice dam is a ridge of ice that forms at the eave of a roof when heat escaping from the attic melts snow on the upper slopes, and the meltwater refreezes at the cold eave overhang. Water pools behind the ice dam and backs up under shingles, causing interior leaks. Prevention requires adequate attic insulation (R-49 minimum per Illinois code), continuous soffit-to-ridge ventilation, and clear gutters. These measures keep the roof surface uniformly cold so snow does not melt prematurely.",
    category: "Maintenance",
    relatedService: "roof-repair",
  },
  {
    question: "How do I choose between TPO, EPDM, and modified bitumen for a flat roof?",
    answer:
      "TPO offers the best energy efficiency with its reflective white surface and the strongest seam technology through heat welding. EPDM provides the longest track record and superior cold-weather flexibility, ideal for Chicago winters. Modified bitumen is the traditional choice for residential flat roof sections with its multi-layer redundant waterproofing. For most new commercial installations, we recommend TPO. For residential flat sections and budget-sensitive projects, EPDM and modified bitumen both perform well. We evaluate each roof individually to make the right recommendation.",
    category: "Materials",
    relatedService: "flat-roofing",
  },
];
