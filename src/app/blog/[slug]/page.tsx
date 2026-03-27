import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";

const BASE_URL = "https://cornerstoneroofingco.com";

/* ------------------------------------------------------------------ */
/*  Blog post data                                                    */
/* ------------------------------------------------------------------ */
interface BlogSection {
  heading: string;
  content: string[];
}

interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  updated?: string;
  category: string;
  readTime: string;
  sections: BlogSection[];
  relatedServices: { title: string; href: string }[];
}

const posts: BlogPost[] = [
  /* ---- 1 ---- */
  {
    slug: "roof-replacement-cost-chicago",
    title: "How Much Does a New Roof Cost in Chicago? (2026 Guide)",
    metaDescription:
      "Learn what a new roof costs in Chicago in 2026. Detailed pricing by material, factors that affect your quote, financing options, and when to replace vs. repair.",
    date: "2026-03-15",
    category: "Cost Guides",
    readTime: "8 min read",
    sections: [
      {
        heading: "Average Roof Replacement Costs in Chicago (2026)",
        content: [
          "A standard asphalt shingle roof replacement on a typical Chicago-area home (1,500 to 2,500 sq ft of roof area) ranges from $8,500 to $16,000 in 2026. Architectural shingles — the most popular choice — typically land between $10,000 and $14,000 for a complete tear-off and installation, including materials, labor, permits, and debris removal.",
          "Premium materials push costs higher: a standing-seam metal roof runs $18,000 to $30,000, while natural slate can exceed $35,000. Flat-roof systems common on Chicago two-flats and bungalows use TPO or EPDM membranes and typically cost $6,000 to $12,000 depending on square footage and access complexity.",
        ],
      },
      {
        heading: "Factors That Affect Your Roof Price",
        content: [
          "Roof size is the most obvious factor, but several others have a significant impact. Roof pitch (steepness) affects labor time and safety requirements — steep roofs cost more. The number of layers to remove matters too; Chicago code allows a maximum of two layers, and tearing off an existing layer adds $1,000 to $3,000.",
          "Complex roof geometry with multiple dormers, valleys, hips, and skylights increases both material waste and labor hours. Access challenges — narrow gangways between brick buildings, overhead power lines, or three-story walk-ups — are common in Chicago and can add to the project cost.",
        ],
      },
      {
        heading: "Chicago-Specific Cost Considerations",
        content: [
          "Chicago and many surrounding suburbs require building permits for roof replacement, typically costing $150 to $500. The city's roofing permit process involves a plan review and inspection that can add a few days to project timelines. Your contractor should handle all permit applications as part of the project.",
          "Ice-and-water shield membrane is required along eaves in Illinois per building code, and many contractors recommend extending it further on Chicago homes due to frequent ice damming. Proper ventilation upgrades — often needed on older homes — can add $300 to $1,500 but pay for themselves in extended roof life and energy savings.",
        ],
      },
      {
        heading: "Financing Your New Roof",
        content: [
          "Most reputable roofing contractors offer financing through third-party lenders, with terms ranging from 12 months same-as-cash to 10-year installment plans. Interest rates in 2026 vary from 0% promotional rates to around 8-12% APR depending on credit and term length.",
          "If your roof replacement is due to storm damage, homeowners insurance may cover all or most of the cost minus your deductible. Illinois law prohibits contractors from waiving your deductible, so be wary of any company that offers to cover it — that is a red flag for insurance fraud.",
        ],
      },
      {
        heading: "When to Repair vs. Replace",
        content: [
          "If your roof is less than 15 years old and the damage is localized — a few missing shingles, a small leak around a pipe boot — repair is usually the cost-effective choice. Repairs typically run $300 to $1,500 depending on scope.",
          "However, if your roof is over 20 years old, has widespread granule loss, multiple leak points, or significant storm damage, replacement is almost always the smarter investment. Repeated repairs on an aging roof quickly add up and don't address the underlying deterioration.",
        ],
      },
    ],
    relatedServices: [
      { title: "Roof Replacement", href: "/roof-replacement" },
      { title: "Roof Repair", href: "/roof-repair" },
      { title: "Storm Damage Roofing", href: "/storm-damage-roofing" },
      { title: "Insurance Claims", href: "/insurance-claims" },
    ],
  },

  /* ---- 2 ---- */
  {
    slug: "hardie-board-vs-vinyl-siding",
    title: "Hardie Board vs. Vinyl Siding: Which Is Best for Chicago Homes?",
    metaDescription:
      "Compare James Hardie fiber cement and vinyl siding — durability, cost, maintenance, and curb appeal for Chicago-area homes. Find out which is right for you.",
    date: "2026-03-01",
    category: "Siding",
    readTime: "7 min read",
    sections: [
      {
        heading: "Material Overview",
        content: [
          "James Hardie fiber cement siding (commonly called Hardie Board) is made from a mixture of cement, sand, and cellulose fibers. It is factory-primed or finished with Hardie's ColorPlus technology, which bakes color through multiple coats for exceptional fade resistance. Vinyl siding, on the other hand, is made from PVC plastic and is available in an enormous range of profiles, textures, and colors.",
          "Both materials are designed to be low-maintenance exterior cladding, but they differ significantly in durability, feel, and long-term performance — especially in the harsh Midwest climate.",
        ],
      },
      {
        heading: "Durability in Midwest Weather",
        content: [
          "Chicago-area homes face temperature swings of over 100 degrees between winter lows and summer highs, plus frequent hail, wind-driven rain, and occasional ice storms. James Hardie is engineered specifically for climate zones — the HZ5 formulation used in the Midwest resists moisture absorption and freeze-thaw cracking that can damage lesser fiber cement products.",
          "Vinyl siding performs well in moderate conditions but can become brittle in extreme cold, making it susceptible to cracking from impact (such as hail or wind-blown debris). In intense summer heat, lower-grade vinyl can warp, especially on south- and west-facing walls. Premium insulated vinyl products mitigate some of these issues but still cannot match Hardie's rigidity.",
        ],
      },
      {
        heading: "Cost Comparison",
        content: [
          "Vinyl siding is the more budget-friendly option, typically costing $5 to $8 per square foot installed in the Chicago area. James Hardie fiber cement runs $9 to $14 per square foot installed, including the ColorPlus finish. For a 2,000-square-foot home exterior, that translates to roughly $10,000-$16,000 for vinyl vs. $18,000-$28,000 for Hardie.",
          "While the upfront cost difference is real, Hardie's 30-year-plus lifespan and superior resistance to damage often result in lower total cost of ownership. Vinyl may need replacement in 20 to 25 years and can incur repair costs from impact damage in between.",
        ],
      },
      {
        heading: "Maintenance and Longevity",
        content: [
          "Both materials are low-maintenance compared to traditional wood siding. Vinyl never needs painting — though it can fade over time and cannot be easily repainted. James Hardie with ColorPlus technology resists fading for 15 years or more, and when you eventually want a color change, fiber cement can be repainted just like wood.",
          "Hardie is also non-combustible (Class A fire rating) and resists rot, termites, and woodpecker damage — issues that don't apply to vinyl either, though vinyl can melt near heat sources like grills. Both materials are manufacturer-warranted: Hardie offers a 30-year non-prorated warranty, while most premium vinyl warranties are lifetime but prorated after 10 to 15 years.",
        ],
      },
      {
        heading: "Curb Appeal and Resale Value",
        content: [
          "James Hardie fiber cement consistently ranks as one of the highest-ROI home exterior improvements in the Remodeling Magazine Cost vs. Value report, often returning 70% or more of project cost at resale. Its substantial feel and crisp shadow lines give it the appearance of real painted wood, which appeals to buyers in Chicago's competitive housing market.",
          "Vinyl siding has improved dramatically in aesthetics over the past decade, with realistic wood-grain textures and deep profiles available at the premium level. However, in neighborhoods with predominantly brick, stone, or fiber cement exteriors, vinyl may not deliver the same resale impact. Your best choice depends on your neighborhood, budget, and long-term plans for the home.",
        ],
      },
    ],
    relatedServices: [
      { title: "Siding Installation", href: "/siding" },
      { title: "Roof Replacement", href: "/roof-replacement" },
      { title: "Gutters", href: "/gutters" },
    ],
  },

  /* ---- 3 ---- */
  {
    slug: "signs-you-need-new-roof",
    title: "8 Signs You Need a New Roof (Don't Ignore #5)",
    metaDescription:
      "Discover the 8 warning signs that your roof needs replacement. Learn what to look for inside and outside your home before a small issue becomes a major expense.",
    date: "2026-02-18",
    category: "Roofing",
    readTime: "6 min read",
    sections: [
      {
        heading: "1. Curling, Cracking, or Missing Shingles",
        content: [
          "Shingles that are curling at the edges, cracking through the middle, or missing entirely are among the most visible signs of a failing roof. Curling often indicates moisture damage from below (poor ventilation) or age-related adhesive breakdown. Once shingles begin to curl, they become vulnerable to wind uplift and lose their water-shedding ability.",
          "A few missing shingles after a major storm may only require repair, but if you are losing shingles regularly or see widespread curling across multiple roof faces, the system as a whole is nearing the end of its life.",
        ],
      },
      {
        heading: "2. Granule Loss in Gutters",
        content: [
          "Asphalt shingles are coated with ceramic granules that protect the underlying asphalt from UV degradation. Finding excessive granules in your gutters or at the bottom of downspouts means the protective layer is wearing away. Some granule loss is normal on new roofs, but on a roof that is 10+ years old, heavy granule loss signals advanced aging.",
        ],
      },
      {
        heading: "3. Sagging Roof Deck",
        content: [
          "A sagging roofline is a serious structural issue that needs immediate attention. It usually indicates water damage to the roof decking (plywood or OSB) or, in severe cases, compromised rafters or trusses. If you see a visible dip or wave when you look at your roofline from the curb, call a roofing professional right away — this is not something that can wait.",
        ],
      },
      {
        heading: "4. Daylight Through the Attic",
        content: [
          "If you go into your attic on a sunny day and see pinpoints of light coming through the roof boards, water can get through those same spots. Small gaps around vents or along ridge lines may be repairable, but widespread light penetration through the decking indicates deterioration that typically requires full replacement.",
        ],
      },
      {
        heading: "5. Water Stains on Interior Ceilings or Walls",
        content: [
          "This is the sign homeowners most often ignore — until the stain grows or drywall starts to bubble. Water stains on ceilings or upper walls almost always trace back to a roof issue: failed flashing, a worn pipe boot, ice dam backup, or general shingle failure. The tricky part is that water can travel along rafters and sheathing before dripping down, so the leak source may be far from the stain.",
          "Ignoring interior water stains leads to mold growth, insulation damage, and eventually structural rot. If you see a stain, have your roof inspected immediately to identify and address the source before the damage compounds.",
        ],
      },
      {
        heading: "6. Your Roof Is Over 20 Years Old",
        content: [
          "Most three-tab asphalt shingle roofs have a 20- to 25-year lifespan, while architectural (dimensional) shingles can last 25 to 30 years under ideal conditions. If your roof is approaching or past the 20-year mark, it deserves a professional inspection even if it looks okay from the ground. Many issues — underlayment breakdown, hidden flashing corrosion, and granule erosion — aren't visible from street level.",
        ],
      },
      {
        heading: "7. Rising Energy Bills",
        content: [
          "A sudden or gradual increase in heating and cooling costs can be linked to a failing roof. Damaged or deteriorating roofing allows conditioned air to escape and outside air to infiltrate, especially if the underlayment and decking have been compromised. Poor attic ventilation caused by blocked or damaged soffit and ridge vents compounds the problem.",
        ],
      },
      {
        heading: "8. Moss, Algae, or Mold Growth",
        content: [
          "Green moss or black algae streaks on your roof are more than a cosmetic issue. Moss holds moisture against shingle surfaces, accelerating deterioration and potentially lifting shingle edges where roots take hold. While algae (those dark streaks) is mostly cosmetic, widespread moss growth on a roof over 15 years old is a strong indicator that replacement should be on your near-term horizon.",
          "If you notice any of these signs, the smartest next step is a free professional roof inspection. Catching problems early can save thousands in interior damage and give you time to plan and budget for a replacement on your terms.",
        ],
      },
    ],
    relatedServices: [
      { title: "Roof Inspection", href: "/roof-inspection" },
      { title: "Roof Replacement", href: "/roof-replacement" },
      { title: "Roof Repair", href: "/roof-repair" },
      { title: "Storm Damage Roofing", href: "/storm-damage-roofing" },
    ],
  },

  /* ---- 4 ---- */
  {
    slug: "file-roof-insurance-claim",
    title:
      "How to File a Roof Insurance Claim in Illinois: Step-by-Step",
    metaDescription:
      "Step-by-step guide to filing a roof insurance claim in Illinois. Documentation tips, working with adjusters, and how your contractor can help.",
    date: "2026-02-05",
    category: "Insurance",
    readTime: "7 min read",
    sections: [
      {
        heading: "When Should You File a Claim?",
        content: [
          "File a homeowners insurance claim when your roof has been damaged by a covered peril — typically wind, hail, falling trees, or fire. In Illinois, most standard homeowner policies cover sudden, accidental damage but exclude wear-and-tear or maintenance neglect. If a major storm has passed through your area and you notice missing shingles, dents in flashing, or interior leaks, it is time to start the process.",
          "Timing matters: Illinois law gives you one year from the date of loss to file a property damage claim under most policies. Waiting too long can result in a denied claim, so act promptly after discovering damage.",
        ],
      },
      {
        heading: "Document Everything",
        content: [
          "Before calling your insurance company, document the damage thoroughly. Take clear photos and video from multiple angles — ground level, close-ups if you can safely access the roof, and any interior damage like water stains or ceiling leaks. Note the date the storm occurred and save any weather alerts or news reports confirming severe weather in your area.",
          "Keep a written log of all communications with your insurance company, including the names of representatives, dates of calls, claim numbers, and what was discussed. This documentation becomes invaluable if your claim is disputed.",
        ],
      },
      {
        heading: "Working with Your Insurance Adjuster",
        content: [
          "Your insurance company will send an adjuster to inspect the damage. You have the right to be present during this inspection, and it is highly recommended. Having your roofing contractor meet the adjuster on-site is one of the most effective ways to ensure all damage is identified and documented — adjusters are thorough but they can miss concealed damage that an experienced roofer knows to look for.",
          "If the adjuster's initial assessment seems low, you can request a re-inspection or file a supplement claim with additional documentation from your contractor. You also have the right to hire a public adjuster to represent your interests, though they typically charge 10-15% of the claim payout.",
        ],
      },
      {
        heading: "Your Contractor's Role in the Claims Process",
        content: [
          "A good roofing contractor will assist with the claims process at no additional charge. At Cornerstone Roofing Co., we provide a free damage inspection, a detailed scope-of-work estimate written in the same Xactimate format insurance companies use, and we meet with your adjuster during their inspection to walk through every damage point.",
          "We do not ask you to sign any contracts before your claim is approved, and we never pressure you to move forward if the claim is denied. Our goal is to be a resource and advocate throughout the process so you receive the coverage your policy entitles you to.",
        ],
      },
      {
        heading: "Common Pitfalls to Avoid",
        content: [
          "Never accept a door-to-door storm chaser's offer to 'cover your deductible' — this is insurance fraud in Illinois and can result in your claim being voided and legal consequences. Always verify that your contractor is licensed, insured, and established in the community before signing any agreement.",
          "Don't make permanent repairs before the adjuster inspects the damage, as this can complicate your claim. Temporary protective measures — like tarping a hole — are fine and should be documented. Finally, review your policy's deadlines for filing claims and completing repairs to avoid losing coverage.",
        ],
      },
    ],
    relatedServices: [
      { title: "Insurance Claims Assistance", href: "/insurance-claims" },
      { title: "Storm Damage Roofing", href: "/storm-damage-roofing" },
      { title: "Roof Inspection", href: "/roof-inspection" },
      { title: "Roof Replacement", href: "/roof-replacement" },
    ],
  },

  /* ---- 5 ---- */
  {
    slug: "winter-roof-damage-chicago",
    title: "Winter Roof Damage in Chicago: Prevention & Repair Guide",
    metaDescription:
      "Learn how to prevent and repair ice dams, snow load damage, and freeze-thaw issues on Chicago roofs. Protect your home this winter with expert tips.",
    date: "2026-01-20",
    category: "Maintenance",
    readTime: "6 min read",
    sections: [
      {
        heading: "Ice Dams: Chicago's #1 Winter Roof Problem",
        content: [
          "Ice dams form when heat escaping through the attic melts snow on the upper roof, and the meltwater refreezes at the colder eave edge. The resulting ice ridge traps water behind it, which can back up under shingles and leak into your home. Chicago's cycle of heavy snow followed by brief warm spells makes ice dams extremely common.",
          "Prevention starts in the attic: proper insulation (R-49 recommended for northern Illinois) and ventilation keep the roof deck uniformly cold so snow melts evenly. During construction or replacement, installing ice-and-water shield membrane 3 to 6 feet from the eave edge provides a critical second line of defense.",
        ],
      },
      {
        heading: "Snow Load and Structural Stress",
        content: [
          "While most residential roofs in the Chicago area are engineered to handle typical snow loads (around 25 lbs per square foot), successive storms without melting can push accumulations to concerning levels. Wet, heavy snow weighs significantly more than dry powder — a foot of packed wet snow can approach 20 lbs per square foot.",
          "If you notice interior doors sticking, cracking sounds from the attic, or visible sagging in the roofline after heavy snow, these are signs of excessive load. Carefully removing snow with a roof rake (from the ground) can relieve pressure, but avoid chipping at ice with sharp tools, which can damage shingles.",
        ],
      },
      {
        heading: "Freeze-Thaw Cycle Damage",
        content: [
          "Chicago often experiences temperature swings above and below freezing multiple times in a single week during winter. Each cycle allows water to seep into tiny gaps in flashing, caulking, and shingle edges, then expand when it refreezes. Over a season, this process can open up significant entry points for water.",
          "Flashing around chimneys, skylights, and wall-to-roof transitions is particularly vulnerable. Annual inspection of these areas — ideally in fall before the freeze cycle begins — helps catch deterioration early. Replacing cracked caulking and resealing flashing joints is inexpensive preventive maintenance.",
        ],
      },
      {
        heading: "Emergency Winter Repairs",
        content: [
          "If a winter leak develops, the first priority is preventing interior damage. Place buckets to catch dripping water, move valuables away from the area, and call a roofing contractor immediately. Emergency tarping can stop active leaks until weather permits a permanent repair.",
          "Cornerstone Roofing Co. offers emergency response services throughout the winter season. We can tarp an active leak within hours and schedule a full repair as soon as conditions allow. Do not attempt to climb onto an icy or snow-covered roof yourself — the risk of falls is extreme.",
        ],
      },
      {
        heading: "Spring Inspection: Catching Winter Damage Early",
        content: [
          "Once winter breaks, schedule a professional roof inspection before spring rains begin. Winter damage is often invisible from the ground — lifted flashing, cracked pipe boots, and shingle displacement from ice are common findings that, if unaddressed, will leak during the first heavy rain.",
          "A thorough spring inspection also provides documentation that is valuable if you later discover interior damage covered by your homeowner's insurance. Catching and documenting issues promptly strengthens any future claim.",
        ],
      },
    ],
    relatedServices: [
      { title: "Emergency Roofing", href: "/emergency-roofing" },
      { title: "Roof Repair", href: "/roof-repair" },
      { title: "Roof Inspection", href: "/roof-inspection" },
      { title: "Roof Maintenance", href: "/roof-maintenance" },
    ],
  },

  /* ---- 6 ---- */
  {
    slug: "siding-replacement-cost-chicago",
    title: "Siding Replacement Cost in Chicago: Complete Pricing Guide (2026)",
    metaDescription:
      "What does new siding cost in Chicago in 2026? Pricing for James Hardie, vinyl, LP SmartSide, labor costs, permits, and expected ROI.",
    date: "2026-01-10",
    category: "Cost Guides",
    readTime: "8 min read",
    sections: [
      {
        heading: "Siding Costs by Material",
        content: [
          "Vinyl siding remains the most affordable option for Chicago homeowners, averaging $5 to $8 per square foot installed. Insulated vinyl runs slightly higher at $7 to $10 per square foot. James Hardie fiber cement — the most popular premium choice — costs $9 to $14 per square foot installed with ColorPlus factory finish.",
          "LP SmartSide engineered wood siding falls in the $8 to $12 per square foot range and offers a warm, authentic wood appearance with engineered durability. Natural wood siding (cedar or redwood) starts around $10 to $18 per square foot but requires ongoing painting or staining maintenance that adds to lifetime cost.",
        ],
      },
      {
        heading: "Labor Costs in the Chicago Market",
        content: [
          "Labor typically accounts for 40-60% of total siding project costs in the Chicago area. Experienced siding installers in Chicagoland command $3 to $6 per square foot for labor depending on the material and complexity. James Hardie installations require specialized training and fiber cement cutting equipment, which is reflected in slightly higher labor rates.",
          "Project complexity — dormers, bay windows, intricate trim details, multi-story facades — increases labor time and cost. Removal and disposal of existing siding adds $1 to $2 per square foot. Repairing underlying sheathing or adding house wrap to homes that lack it can add several hundred to a couple thousand dollars.",
        ],
      },
      {
        heading: "Permits and Chicago-Area Requirements",
        content: [
          "Most municipalities in the Chicago area require a building permit for full siding replacement. Permit fees range from $75 to $400 depending on the town. The City of Chicago permit process for siding is generally straightforward, requiring a standard building permit application with a project description and contractor license information.",
          "Some suburbs have specific material restrictions or color palette requirements, especially in historic districts or HOA-governed communities. Your siding contractor should verify local requirements before ordering materials to avoid costly changes.",
        ],
      },
      {
        heading: "Financing Options for Siding Projects",
        content: [
          "Siding replacement is a significant investment, and most homeowners benefit from financing options. Many contractors partner with lenders offering 12-month same-as-cash promotional financing or longer-term installment plans with manageable monthly payments. Home equity lines of credit (HELOCs) remain another popular option, often with lower interest rates.",
          "James Hardie offers financing through select dealers, and some manufacturers run seasonal promotions that can reduce your out-of-pocket cost. Ask your contractor about all available options before committing.",
        ],
      },
      {
        heading: "ROI: What New Siding Returns at Resale",
        content: [
          "Fiber cement siding consistently ranks among the highest-ROI exterior improvements. According to national remodeling cost data, James Hardie siding replacement recovers approximately 70-80% of project cost at resale. Vinyl siding replacement recovers roughly 65-70%. In competitive Chicago-area housing markets, fresh siding can also accelerate the sale by improving first impressions.",
          "Beyond resale value, new siding delivers immediate benefits: lower energy bills from improved insulation, reduced maintenance time and cost, and a dramatic boost in curb appeal that you enjoy every day.",
        ],
      },
    ],
    relatedServices: [
      { title: "Siding Installation", href: "/siding" },
      { title: "Gutters", href: "/gutters" },
      { title: "Roof Replacement", href: "/roof-replacement" },
    ],
  },

  /* ---- 7 ---- */
  {
    slug: "signs-you-need-new-siding",
    title: "7 Warning Signs Your Siding Needs Replacement",
    metaDescription:
      "Cracking, warping, mold, and rising energy bills — learn the 7 key warning signs that your home's siding needs replacement before damage spreads.",
    date: "2025-12-28",
    category: "Siding",
    readTime: "5 min read",
    sections: [
      {
        heading: "1. Cracks, Holes, or Gaps",
        content: [
          "Visible cracks, holes, or gaps between siding panels are clear entry points for water, insects, and air infiltration. Small cracks in vinyl can spread quickly in cold weather, and fiber cement or wood siding with cracks allows moisture to reach the sheathing behind it. If damage is limited to a small area, repair may suffice, but widespread cracking across multiple walls signals systemic failure.",
        ],
      },
      {
        heading: "2. Warping or Buckling",
        content: [
          "Warped or buckled siding indicates moisture damage underneath the surface. When water gets behind siding panels, it can cause the underlying sheathing to swell and the siding itself to deform. Press on warped sections — if the material feels soft or spongy, the substrate may be rotting. This requires prompt attention to prevent structural damage.",
        ],
      },
      {
        heading: "3. Fading and Discoloration",
        content: [
          "Some fading over time is normal, especially on south-facing walls. However, severe or uneven fading can indicate that the siding's protective finish has broken down, leaving the base material vulnerable to UV damage and moisture penetration. If your siding looks noticeably worse than homes of similar age in your neighborhood, the protective coating may have failed prematurely.",
        ],
      },
      {
        heading: "4. Mold, Mildew, or Fungus Growth",
        content: [
          "Mold or mildew on siding — especially near the base of walls or around window frames — suggests moisture is being trapped against or behind the material. While surface mold can sometimes be cleaned, recurring growth indicates an underlying moisture management problem. Left unchecked, mold can penetrate wall cavities and create health and structural concerns that are far more expensive to remediate.",
        ],
      },
      {
        heading: "5. Rising Energy Bills",
        content: [
          "If your heating and cooling costs have crept upward without an obvious explanation, deteriorating siding may be the culprit. Damaged or poorly insulated siding allows conditioned air to escape and outside air to infiltrate. Upgrading to insulated vinyl or fiber cement siding can significantly improve your home's thermal envelope and reduce energy costs year-round.",
        ],
      },
      {
        heading: "6. Interior Paint Peeling or Wallpaper Loosening",
        content: [
          "Peeling paint or loosening wallpaper on interior walls — especially on exterior-facing walls — can be a sign that moisture is migrating through the wall assembly. This often traces back to failed siding, missing house wrap, or compromised flashing around windows and doors. By the time interior finishes are affected, the moisture problem has likely been ongoing for some time.",
        ],
      },
      {
        heading: "7. Your Siding Is Over 20 Years Old",
        content: [
          "Vinyl siding typically lasts 20 to 30 years, while wood siding can last longer with diligent maintenance. If your siding is approaching or past the 20-year mark, have it professionally inspected. The material may still look passable from the curb while harboring hidden issues — delamination, rot behind panels, or failed caulking at trim joints — that only a close inspection reveals.",
          "If you notice one or more of these signs, a professional siding inspection can determine whether repairs will suffice or if full replacement is the more cost-effective long-term solution.",
        ],
      },
    ],
    relatedServices: [
      { title: "Siding Installation", href: "/siding" },
      { title: "Roof Replacement", href: "/roof-replacement" },
      { title: "Gutters", href: "/gutters" },
    ],
  },

  /* ---- 8 ---- */
  {
    slug: "metal-roof-vs-shingles",
    title: "Metal Roof vs. Shingles: Best Choice for Chicago Weather?",
    metaDescription:
      "Compare metal roofing and asphalt shingles for Chicago homes — durability, cost, weather performance, aesthetics, and resale value. Make the right choice.",
    date: "2025-12-15",
    category: "Roofing",
    readTime: "7 min read",
    sections: [
      {
        heading: "Durability and Lifespan",
        content: [
          "Standing-seam metal roofing is built to last 40 to 70 years with minimal maintenance. The interlocking panel design resists wind uplift to 140+ mph, and metal is inherently resistant to rot, insects, and mold. Architectural asphalt shingles — the most common residential choice — typically last 25 to 30 years under normal conditions, with premium designer shingles pushing toward 35 to 40 years.",
          "In Chicago's climate, metal's durability advantage is significant. The freeze-thaw cycles, hail, and heavy snow that shorten shingle life have far less impact on metal panels. A metal roof installed today may never need replacement during your time in the home.",
        ],
      },
      {
        heading: "Cost Analysis",
        content: [
          "Asphalt shingles win on upfront cost: a typical Chicago-area shingle roof replacement runs $10,000 to $15,000, while a comparable standing-seam metal roof costs $18,000 to $30,000. That is roughly a 2x premium for metal. However, when you factor in lifespan — one metal roof vs. potentially two shingle roofs over 50 years — the lifetime cost gap narrows considerably.",
          "Metal roofs also reduce energy costs (they reflect solar heat rather than absorbing it), may qualify for insurance discounts in hail-prone areas, and have virtually no maintenance costs. On a per-year-of-life basis, metal is often the more economical choice for homeowners who plan to stay in their home long-term.",
        ],
      },
      {
        heading: "Performance in Chicago Weather",
        content: [
          "Metal roofs excel at shedding snow and ice. The smooth surface allows snow to slide off rather than accumulating, reducing ice dam risk — one of Chicago's most persistent roofing problems. Snow guards can be installed to control the timing and pattern of snow shedding.",
          "For hail resistance, metal performs well against moderate hail but can dent in severe events. Aluminum and steel panels typically show cosmetic denting from large hailstones but maintain structural integrity. Asphalt shingles can lose granules and crack under severe hail, compromising the roof's waterproofing layer. Impact-resistant (Class 4) shingles offer improved hail performance for homeowners who prefer asphalt.",
        ],
      },
      {
        heading: "Aesthetics and Style Options",
        content: [
          "Standing-seam metal roofing offers a clean, modern look that suits contemporary and farmhouse-style homes. It is available in a wide range of factory-applied colors, from subtle charcoals and grays to bold reds and greens. Metal can also be installed as metal shingle panels that mimic the look of wood shake, slate, or tile.",
          "Asphalt shingles provide the broadest range of styles and colors in the roofing market. Architectural shingles create a dimensional, layered appearance that complements traditional, colonial, and craftsman homes. For Chicago's diverse architectural landscape — from brick bungalows to Victorian painted ladies — shingles offer unmatched versatility.",
        ],
      },
      {
        heading: "Resale Value",
        content: [
          "A metal roof can add 1-6% to a home's resale value according to various industry studies, and it is a strong selling point for buyers who value long-term durability and low maintenance. In the Chicago market, metal roofs are still less common on residential properties, which can make your home stand out — positively for many buyers, though some may prefer the traditional shingle look.",
          "A new asphalt shingle roof also boosts resale value and can recover 60-70% of project cost at sale. For homeowners planning to sell within 5 to 10 years, the lower upfront cost of shingles may deliver a better return on investment. For those staying long-term, metal's durability and marketing appeal make it a strong contender.",
        ],
      },
    ],
    relatedServices: [
      { title: "Roof Replacement", href: "/roof-replacement" },
      { title: "Metal Roofing", href: "/roofing/metal-roofing" },
      { title: "Asphalt Shingles", href: "/roofing/asphalt-shingles" },
      { title: "Roof Inspection", href: "/roof-inspection" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */
function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Static params + metadata                                          */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: "Cornerstone Roofing Co.",
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      ...(post.updated ? { modifiedTime: post.updated } : {}),
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Article JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          ...(post.updated ? { dateModified: post.updated } : {}),
          author: {
            "@type": "Organization",
            name: "Cornerstone Roofing Co.",
            url: BASE_URL,
          },
          publisher: {
            "@type": "Organization",
            name: "Cornerstone Roofing Co.",
            url: BASE_URL,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/blog/${post.slug}`,
          },
        }}
      />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title.length > 40 ? post.title.slice(0, 40) + "…" : post.title },
              ]}
              dark
            />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/60">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 leading-tight max-w-4xl">
            {post.title}
          </h1>

          <time
            dateTime={post.date}
            className="text-primary-foreground/50 text-sm"
          >
            Published{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-5xl mx-auto">
            {/* Article body */}
            <article className="prose prose-lg max-w-none">
              {post.sections.map((section, i) => (
                <div key={i} className="mb-10">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  {section.content.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-muted-foreground leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="mt-8 pt-8 border-t border-border lg:mt-0 lg:pt-0 lg:border-t-0 lg:sticky lg:top-24 self-start">
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                  Related Services
                </h3>
                <ul className="space-y-3">
                  {post.relatedServices.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors font-medium"
                      >
                        <ArrowRight className="w-4 h-4 text-secondary" />
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy rounded-xl p-6 mt-6">
                <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">
                  Need Help?
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Get a free estimate from our experienced team.
                </p>
                <a
                  href="tel:+17735551234"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-all w-full justify-center"
                >
                  (773) 555-1234
                </a>
              </div>
            </aside>
          </div>

          {/* Back to blog */}
          <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
