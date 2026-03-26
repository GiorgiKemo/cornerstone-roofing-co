export interface MaintenanceFAQ {
  q: string;
  a: string;
}

export interface MaintenanceService {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  benefits: string[];
  frequency: string;
  faq: MaintenanceFAQ[];
}

export const maintenanceServices: MaintenanceService[] = [
  {
    slug: "roof-cleaning",
    title: "Roof Cleaning",
    metaTitle: "Roof Cleaning Services in Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Professional roof cleaning in Chicago. Remove black streaks, moss, algae, and debris safely without damaging shingles. Restore your roof's appearance and extend its life.",
    intro: `The dark streaks running down your roof are not dirt, and they are not a sign that your shingles are failing. Those black trails are Gloeocapsa magma, an airborne algae that feeds on the limestone filler in asphalt shingles. In Chicago's humid summers, with moisture from Lake Michigan and frequent rainfall creating ideal growing conditions, this algae colonizes north-facing and shaded roof slopes with particular enthusiasm. Left unchecked, algae holds moisture against the shingle surface, accelerates granule loss, and shortens the life of your roof by years.

Moss presents an even more aggressive threat on Chicago roofs with heavy tree canopy. Unlike algae, which sits on the surface, moss sends root structures into the shingle edges and lifts them away from the underlying course. Water follows these lifted edges during rain, running beneath shingles where it should never reach, saturating the underlayment and decking. Roofs in wooded suburbs like Hinsdale, Glen Ellyn, Wilmette, and Kenilworth are especially prone to moss growth, and proactive cleaning is the only way to prevent the structural damage that moss enables.

Cornerstone Roofing Co. uses a soft-wash cleaning method that eliminates algae, moss, lichen, and accumulated debris without the high-pressure water streams that void shingle warranties and blast granules off the surface. Our cleaning solution is a professional-grade blend of sodium hypochlorite and surfactants applied at low pressure and allowed to dwell on the surface before rinsing. This approach kills organic growth at the root, prevents regrowth for 2-3 years, and restores the shingle surface to its original color without causing any damage.`,
    benefits: [
      "Removes unsightly black algae streaks that diminish curb appeal",
      "Kills moss at the root to prevent shingle lifting and water infiltration",
      "Soft-wash method protects shingles — no high-pressure water damage",
      "Extends shingle lifespan by removing organisms that accelerate deterioration",
      "Restores roof appearance for a fraction of the cost of replacement",
      "Inhibits regrowth for 2-3 years after treatment",
    ],
    frequency:
      "We recommend roof cleaning every 3-5 years for most Chicago homes, or every 2-3 years for homes with heavy tree cover on north-facing and east-facing slopes where moisture lingers and organic growth is most aggressive. Homes in open areas with good sun exposure may only need cleaning every 5-7 years. An annual visual inspection from the ground helps you spot the early signs of algae or moss before it becomes widespread.",
    faq: [
      {
        q: "Will roof cleaning damage my shingles?",
        a: "Not when done correctly. Our soft-wash method uses low-pressure application, roughly the same pressure as a garden hose, combined with a cleaning solution that does the work chemically rather than mechanically. High-pressure power washing, which we never use on roofs, can strip granules and damage shingles. Always confirm that your contractor uses a soft-wash method.",
      },
      {
        q: "How long does a roof cleaning take?",
        a: "Most residential roofs in the Chicago area are completed in 2-4 hours, including setup, application, dwell time, and rinsing. Heavily moss-covered roofs may require a second application and additional time for manual moss removal from valleys and edges.",
      },
      {
        q: "Is the cleaning solution safe for landscaping?",
        a: "Our crews pre-wet landscaping and cover sensitive plants before application. The cleaning solution is diluted to concentrations that are effective on organic growth but dissipate quickly on soil and vegetation. After rinsing, we water the surrounding landscaping thoroughly. In our experience, plant damage is extremely rare with proper precautions.",
      },
      {
        q: "Can you clean a roof in winter in Chicago?",
        a: "Roof cleaning is most effective when temperatures are above 50 degrees Fahrenheit and conditions are dry. In Chicago, the practical cleaning season runs from April through November. Winter applications are not recommended because cold temperatures slow the chemical reaction and ice on the roof creates safety hazards.",
      },
    ],
  },
  {
    slug: "roof-coating",
    title: "Roof Coating",
    metaTitle: "Roof Coating Services in Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Extend your roof's life with professional roof coating in Chicago. Silicone, acrylic, and elastomeric coatings for flat and low-slope roofs. Avoid premature replacement.",
    intro: `A roof coating is a liquid-applied membrane that adds a seamless, protective layer over an existing roofing surface. For flat and low-slope roofs that are aging but not yet failing structurally, a coating can add 10-15 years of serviceable life at roughly one-third the cost of a full replacement. This makes roof coating one of the most cost-effective strategies available to Chicago building owners who want to delay a major capital expenditure without risking water damage from a deteriorating membrane.

The coatings Cornerstone Roofing Co. applies are not consumer-grade products brushed on by a handyman. We use commercial-grade silicone, acrylic, and elastomeric coating systems engineered for specific substrate types and exposure conditions. Silicone coatings excel on flat roofs because they resist ponding water indefinitely, a critical property in Chicago where flat roofs often hold standing water for hours after heavy rainfall. Acrylic coatings offer excellent UV reflectivity and adhesion on metal and modified bitumen surfaces. Elastomeric coatings bridge small cracks and provide a rubberized seal that moves with the substrate through thermal cycling.

Before any coating is applied, the existing roof surface must be properly prepared. This is where most DIY and handyman coating projects fail. Coating adhesion depends on a clean, dry, structurally sound substrate free of contaminants, loose material, and moisture. Cornerstone's preparation process includes pressure washing the surface, repairing any membrane damage or open seams, priming the substrate where required, and verifying with a moisture test that the insulation beneath is dry. Only then is the coating applied at the manufacturer's specified wet-film thickness using airless spray equipment for uniform coverage.`,
    benefits: [
      "Extends roof life by 10-15 years at roughly one-third the cost of replacement",
      "Creates a seamless, monolithic membrane with no joints or seams to fail",
      "Silicone coatings resist ponding water, ideal for Chicago flat roofs with drainage issues",
      "Reflective white coatings reduce cooling costs and qualify for energy rebate programs",
      "Eliminates the disruption, noise, and waste of a full tear-off replacement",
      "Can be recoated again in the future for additional life extension",
    ],
    frequency:
      "A professionally applied roof coating typically provides 10-15 years of protection before recoating is needed. Annual inspections should be performed to check for mechanical damage, ponding areas, and coating wear at high-traffic zones around rooftop equipment. Touch-up coating of localized worn areas is far less expensive than recoating the entire surface and should be addressed as identified during inspections.",
    faq: [
      {
        q: "Can any roof be coated?",
        a: "Not every roof is a good candidate. The existing membrane must be structurally sound with no widespread failure, and the insulation must be dry. Roofs with extensive moisture contamination, severe membrane deterioration, or multiple previous coating layers may require replacement rather than recoating. A core sample and moisture survey determines candidacy.",
      },
      {
        q: "How much does roof coating cost compared to replacement?",
        a: "Roof coating typically costs $3-$6 per square foot compared to $8-$15 per square foot for a full flat roof replacement. For a 5,000 square foot commercial roof, that difference can be $25,000-$45,000. The savings are significant, but coating is only appropriate when the existing roof is structurally viable.",
      },
      {
        q: "Does a roof coating eliminate leaks?",
        a: "A roof coating seals the entire surface with a monolithic membrane, which can eliminate leaks caused by hairline cracks, minor seam separation, and surface erosion. However, coating cannot fix structural defects, failed flashings at equipment curbs, or compromised drainage systems. These issues must be repaired before coating application.",
      },
      {
        q: "When is the best time to apply roof coating in Chicago?",
        a: "Coating application requires dry conditions and temperatures above 50 degrees Fahrenheit for at least 24 hours after application. In Chicago, the ideal window runs from May through October. We schedule coating projects with close attention to weather forecasts and build contingency days into every project timeline.",
      },
    ],
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    metaTitle: "Gutter Cleaning Services in Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Professional gutter cleaning in Chicago. Prevent ice dams, foundation damage, and overflow. Thorough debris removal and downspout flushing for Chicagoland homes.",
    intro: `Clogged gutters are the root cause of an astonishing number of preventable home repairs in the Chicago area. When gutters fill with leaves, seed pods, shingle granules, and wind-blown debris, water backs up behind the obstruction and spills over the gutter edge. In summer, this overflow saturates the soil around your foundation, eventually seeping into basement walls and causing the efflorescence, staining, and active leaking that Chicago homeowners dread. In winter, backed-up water freezes in the gutter trough and along the eave, forming ice dams that force meltwater under shingles and into the attic, staining ceilings and rotting roof decking from above.

The connection between gutter neglect and ice dam formation is particularly costly in the Chicagoland climate. When gutters are blocked, meltwater from the lower roof edge has nowhere to drain. It refreezes overnight, building a progressively larger ice ridge that traps additional meltwater behind it. This water pool has no path except backward, under the shingle courses, where it penetrates the underlayment and enters the building envelope. The interior damage from a severe ice dam event can reach $10,000-$20,000, orders of magnitude more than the cost of twice-yearly gutter cleaning.

Cornerstone Roofing Co. provides thorough gutter cleaning that goes beyond scooping out visible debris. Our crews remove all organic material from the gutter troughs, check and clear every downspout with a flush test to confirm unobstructed flow, inspect gutter hangers and seams for damage, and verify that discharge extensions are directing water at least four feet from the foundation. If we find structural problems with your gutter system during cleaning, such as sagging sections, separated joints, or corroded spans, we document the issues and provide a repair recommendation.`,
    benefits: [
      "Prevents ice dam formation, the leading cause of interior winter water damage in Chicago",
      "Protects your foundation from water saturation and basement seepage",
      "Eliminates standing water in gutters that breeds mosquitoes during summer months",
      "Extends the life of your gutter system by removing corrosive organic debris",
      "Every downspout is flush-tested to confirm clear, unrestricted water flow",
      "Gutter condition is inspected during each cleaning with problems reported to the homeowner",
    ],
    frequency:
      "Chicago-area homes should have gutters cleaned at least twice per year: once in late spring after elm seeds and cottonwood fluff have fallen, and again in late November after oak and maple leaves are down. Homes surrounded by pine trees may need a third cleaning in late summer due to continuous needle drop. Homes with quality gutter guard systems can extend cleaning intervals to once every 2-3 years, though annual inspection is still recommended.",
    faq: [
      {
        q: "How much does gutter cleaning cost in Chicago?",
        a: "Most single-story Chicago homes range from $125-$200 per cleaning. Two-story homes typically cost $175-$300 due to increased ladder setup time and safety requirements. Homes with extensive tree coverage and heavily packed gutters may be at the higher end. We provide a firm price before starting work.",
      },
      {
        q: "Do you clean gutters on multi-story homes?",
        a: "Yes. We clean gutters on homes up to three stories using extension ladders and fall protection equipment. For taller buildings, we use lift equipment. Safety is never compromised regardless of the height or complexity of access.",
      },
      {
        q: "Can gutter cleaning prevent basement flooding?",
        a: "It is one of the most effective preventive measures. When gutters are clear and downspouts discharge water away from the foundation, the soil around your home stays drier and hydrostatic pressure against basement walls is dramatically reduced. Combined with proper grading, gutter maintenance is your first line of defense against basement water intrusion.",
      },
      {
        q: "Should I get gutter guards instead of regular cleaning?",
        a: "Gutter guards are a worthwhile investment for many Chicago homes, especially those with mature trees. They significantly reduce debris accumulation and can extend cleaning intervals from twice yearly to once every few years. However, no guard system is completely maintenance-free. We install and recommend micro-mesh guards that offer the best balance of debris protection and water flow.",
      },
    ],
  },
];
