import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, ArrowRight, MapPin, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import ContactCTA from "@/components/sections/ContactCTA";

const BASE_URL = "https://cornerstoneroofingco.com";

/* ------------------------------------------------------------------ */
/*  City data — roofing                                               */
/* ------------------------------------------------------------------ */
interface CityPage {
  slug: string;
  name: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  nearby: string[];
}

const roofingCities: CityPage[] = [
  {
    slug: "roofing-chicago",
    name: "Chicago",
    county: "Cook County",
    metaTitle: "Roofing Contractor in Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Trusted Chicago roofing contractor serving the Loop, Lakeview, Lincoln Park & beyond. Roof replacement, repair, storm damage & inspections. Free estimates.",
    intro: [
      "Chicago homeowners face some of the toughest roofing conditions in the Midwest. From the high winds whipping off Lake Michigan to heavy snowfall and rapid freeze-thaw cycles, your roof takes a beating year after year. Cornerstone Roofing Co. has built a reputation across the Loop, Lakeview, Lincoln Park, Hyde Park, and every neighborhood in between for delivering roof replacements, repairs, and storm-damage restoration that stand up to Chicago weather.",
      "Whether you own a classic brick two-flat in Wicker Park or a modern single-family home in Edison Park, our licensed crews understand the unique challenges of Chicago roofing — from navigating city permit requirements to managing flat-roof drainage on vintage buildings. We offer free on-site inspections and transparent pricing so you know exactly what to expect before work begins.",
    ],
    nearby: [
      "roofing-evanston",
      "roofing-oak-park",
      "roofing-cicero",
      "roofing-schaumburg",
      "roofing-arlington-heights",
    ],
  },
  {
    slug: "roofing-naperville",
    name: "Naperville",
    county: "DuPage County",
    metaTitle: "Roofing Contractor in Naperville, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Expert Naperville roofing services — roof replacement, repair, storm damage & inspections in DuPage County. Licensed & insured. Free estimates.",
    intro: [
      "Naperville consistently ranks among the best places to live in Illinois, and protecting your home starts at the top. From the tree-lined streets near downtown Naperville and the Riverwalk to the newer developments in south Naperville, Cornerstone Roofing Co. delivers expert roof replacement, repair, and inspection services tailored to DuPage County homes.",
      "Severe thunderstorms and hail events are common across the western suburbs each spring and summer. Our team helps Naperville homeowners navigate insurance claims after storm damage, ensuring you receive the coverage you deserve. We work with every major shingle and flat-roof system and stand behind our installations with industry-leading warranties.",
    ],
    nearby: [
      "roofing-aurora",
      "roofing-bolingbrook",
      "roofing-plainfield",
      "roofing-wheaton",
      "roofing-lisle",
    ],
  },
  {
    slug: "roofing-schaumburg",
    name: "Schaumburg",
    county: "Cook County",
    metaTitle: "Roofing Contractor in Schaumburg, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Schaumburg roofing experts — roof replacement, repair & storm damage near Woodfield Mall and the northwest suburbs. Free estimates.",
    intro: [
      "Schaumburg is the commercial heart of Chicago's northwest suburbs, home to the Woodfield Mall corridor, major corporate campuses, and thousands of single-family homes and townhomes. Cornerstone Roofing Co. provides residential and light commercial roofing services throughout Schaumburg and surrounding Cook County communities, from shingle tear-offs to complete roof system upgrades.",
      "The flat terrain of the northwest suburbs leaves rooftops fully exposed to wind-driven rain and hail. Our certified installers use impact-resistant shingles and proper ice-and-water shield underlayment to keep Schaumburg homes dry through every season. We handle village permits and HOA specifications so the process is hassle-free for you.",
    ],
    nearby: [
      "roofing-arlington-heights",
      "roofing-hoffman-estates",
      "roofing-palatine",
      "roofing-elk-grove-village",
      "roofing-rolling-meadows",
    ],
  },
  {
    slug: "roofing-aurora",
    name: "Aurora",
    county: "Kane County",
    metaTitle: "Roofing Contractor in Aurora, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Aurora roofing contractor serving Kane County — roof replacement, repair, storm damage restoration & inspections. Free estimates.",
    intro: [
      "As Illinois' second-largest city, Aurora spans diverse neighborhoods along the Fox River from the historic Stolp Island district to new construction on the far east side. Cornerstone Roofing Co. serves all of Aurora and Kane County with professional roof replacement, repair, and storm-damage services designed for the region's wide range of home styles.",
      "Aurora's position on the western edge of the metro area means it often catches the brunt of severe weather systems rolling across the plains. Our team is experienced with hail-damage claims, wind-damaged ridge caps, and aging roof systems on Aurora's many mid-century ranch homes. We provide detailed estimates, work directly with your insurance company, and guarantee our craftsmanship.",
    ],
    nearby: [
      "roofing-naperville",
      "roofing-elgin",
      "roofing-plainfield",
      "roofing-batavia",
      "roofing-north-aurora",
    ],
  },
  {
    slug: "roofing-joliet",
    name: "Joliet",
    county: "Will County",
    metaTitle: "Roofing Contractor in Joliet, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Joliet roofing services — roof replacement, repair & storm damage restoration in Will County. Licensed, insured & trusted. Free estimates.",
    intro: [
      "Joliet's rich industrial heritage is reflected in its diverse housing stock — from century-old homes in the Cathedral Area near the Rialto Square Theatre to modern subdivisions in the expanding western corridor. Cornerstone Roofing Co. delivers reliable roofing solutions across Joliet and Will County, whether you need a full tear-off or targeted storm-damage repair.",
      "Will County sees its share of severe weather, including high straight-line winds and hail that can shorten a roof's lifespan considerably. Our crews are well-versed in local building codes and Joliet's permit process, and we carry full insurance on every project. From asphalt shingles to flat commercial membranes, we have the expertise Joliet homeowners and business owners depend on.",
    ],
    nearby: [
      "roofing-plainfield",
      "roofing-bolingbrook",
      "roofing-lockport",
      "roofing-romeoville",
      "roofing-shorewood",
    ],
  },
  {
    slug: "roofing-elgin",
    name: "Elgin",
    county: "Kane County",
    metaTitle: "Roofing Contractor in Elgin, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Elgin roofing contractor — roof replacement, repair & storm damage in Kane County. Specializing in historic and modern homes. Free estimates.",
    intro: [
      "Elgin's historic architecture along the Fox River — including its renowned Victorian-era homes and the Elgin Historic District — demands roofing contractors who respect craftsmanship and detail. Cornerstone Roofing Co. brings decades of combined experience to every Elgin project, from careful re-roofs on vintage properties to efficient installations on new construction in the growing northeast Kane County corridor.",
      "Elgin homeowners frequently deal with ice dams in winter and wind damage from spring storms that sweep through the Fox River valley. We use proper ventilation design and ice barrier systems to prevent recurring issues, and our storm-damage specialists can have a tarp on your roof within hours of an emergency call.",
    ],
    nearby: [
      "roofing-aurora",
      "roofing-hoffman-estates",
      "roofing-schaumburg",
      "roofing-carpentersville",
      "roofing-south-elgin",
    ],
  },
  {
    slug: "roofing-bolingbrook",
    name: "Bolingbrook",
    county: "Will County",
    metaTitle: "Roofing Contractor in Bolingbrook, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Bolingbrook roofing services — roof replacement, repair & storm damage in Will County. Newer homes & established neighborhoods. Free estimates.",
    intro: [
      "Bolingbrook's rapid growth from the 1970s onward means the village contains a wide range of roof ages — from original 40-year-old installations that are well past due for replacement to relatively newer systems that may have suffered storm damage. Cornerstone Roofing Co. is the go-to contractor for Bolingbrook homeowners across subdivisions like Boughton Ridge, Winston Hills, and Colonial Village.",
      "Located in Will County with easy access to I-55 and I-355, Bolingbrook sits in an area that experiences frequent severe thunderstorms each summer. We help homeowners navigate insurance claims and select roofing materials that maximize longevity in our climate, including architectural shingles rated for 130-mph winds.",
    ],
    nearby: [
      "roofing-naperville",
      "roofing-joliet",
      "roofing-romeoville",
      "roofing-plainfield",
      "roofing-woodridge",
    ],
  },
  {
    slug: "roofing-arlington-heights",
    name: "Arlington Heights",
    county: "Cook County",
    metaTitle:
      "Roofing Contractor in Arlington Heights, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Arlington Heights roofing experts — roof replacement, repair & storm damage in the NW suburbs. Trusted by homeowners near Arlington Park. Free estimates.",
    intro: [
      "Arlington Heights is one of the most established communities in Chicago's northwest suburbs, known for its charming downtown, top-rated schools, and the former Arlington Park racetrack area now slated for major redevelopment. Cornerstone Roofing Co. has served Arlington Heights homeowners for years, providing roof replacements, repairs, and inspections across every neighborhood from the Scarsdale area to the homes near Rand Road.",
      "The northwest suburbs frequently experience damaging hail and wind events, especially during spring and early summer. Our team understands Cook County permit requirements and works efficiently to minimize disruption to your daily routine. We offer GAF and Owens Corning certified installations with transferable warranties that protect your investment.",
    ],
    nearby: [
      "roofing-schaumburg",
      "roofing-palatine",
      "roofing-mount-prospect",
      "roofing-rolling-meadows",
      "roofing-elk-grove-village",
    ],
  },
  {
    slug: "roofing-evanston",
    name: "Evanston",
    county: "Cook County",
    metaTitle: "Roofing Contractor in Evanston, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Evanston roofing contractor — serving lakefront properties and historic homes near Northwestern University. Roof replacement, repair & storm damage. Free estimates.",
    intro: [
      "Home to Northwestern University and a vibrant lakefront community, Evanston features an eclectic mix of architectural styles — from stately Victorians and Tudors to mid-century ranches and modern condominiums. Cornerstone Roofing Co. specializes in the careful attention these diverse roofing systems demand, whether it's matching historic slate profiles or installing modern architectural shingles on a contemporary build.",
      "Evanston's proximity to Lake Michigan means rooftops face persistent moisture, lake-effect snow, and strong northeasterly winds that can loosen flashing and lift shingles. Our crews use enhanced fastening patterns and premium underlayment on lakefront properties to combat these conditions. We're fully licensed for work in the City of Evanston and familiar with its historic preservation requirements.",
    ],
    nearby: [
      "roofing-chicago",
      "roofing-oak-park",
      "roofing-wilmette",
      "roofing-skokie",
      "roofing-morton-grove",
    ],
  },
  {
    slug: "roofing-oak-park",
    name: "Oak Park",
    county: "Cook County",
    metaTitle: "Roofing Contractor in Oak Park, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Oak Park roofing services — expert care for Frank Lloyd Wright-era homes and modern residences. Roof replacement, repair & inspections. Free estimates.",
    intro: [
      "Oak Park is internationally recognized for its Frank Lloyd Wright architecture and beautifully preserved historic homes. Roofing these properties requires a contractor who understands period-appropriate materials and the village's strict preservation guidelines. Cornerstone Roofing Co. has the expertise to re-roof Oak Park's Prairie-style masterpieces as well as its many classic bungalows, Victorians, and newer constructions.",
      "Beyond historic considerations, Oak Park roofs face the same Midwest weather challenges as the rest of Chicagoland — heavy snow loads, ice damming on lower-slope sections, and summer storm damage. We combine traditional craftsmanship with modern materials and techniques to deliver roofing systems that protect your home and honor its character for decades to come.",
    ],
    nearby: [
      "roofing-chicago",
      "roofing-evanston",
      "roofing-cicero",
      "roofing-berwyn",
      "roofing-forest-park",
    ],
  },
  {
    slug: "roofing-plainfield",
    name: "Plainfield",
    county: "Will County",
    metaTitle: "Roofing Contractor in Plainfield, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Plainfield roofing contractor — roof replacement, repair & storm damage in Will County. Serving one of IL's fastest-growing communities. Free estimates.",
    intro: [
      "Plainfield has experienced explosive growth over the past two decades, transforming from a small village into one of Will County's largest and most sought-after communities. Many homes built during the 2000s construction boom are now approaching the age where their original roofs need replacement. Cornerstone Roofing Co. helps Plainfield homeowners evaluate roof condition and plan timely replacements before leaks cause interior damage.",
      "The open terrain south and west of Plainfield makes the area particularly vulnerable to severe thunderstorms and tornado activity. We install impact-resistant shingles and fortified roof systems that meet or exceed local building codes. Our team handles every step from initial inspection through final cleanup, and we work with all major insurance carriers on storm-damage claims.",
    ],
    nearby: [
      "roofing-naperville",
      "roofing-joliet",
      "roofing-bolingbrook",
      "roofing-romeoville",
      "roofing-shorewood",
    ],
  },
  {
    slug: "roofing-cicero",
    name: "Cicero",
    county: "Cook County",
    metaTitle: "Roofing Contractor in Cicero, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Cicero roofing services — roof replacement, repair & storm damage for residential and commercial properties near Chicago's western border. Free estimates.",
    intro: [
      "Cicero sits directly on Chicago's western border and is one of Cook County's most densely populated towns. The housing stock ranges from classic brick bungalows and two-flats to multi-unit apartment buildings, each presenting unique roofing challenges. Cornerstone Roofing Co. provides dependable roof replacement, repair, and flat-roof services that Cicero property owners can count on.",
      "Many Cicero buildings feature flat or low-slope roofing systems that require specialized membrane installation to prevent ponding water and leaks. Our crews are experienced with TPO, EPDM, and modified bitumen systems alongside traditional sloped shingle roofs. We offer competitive pricing, flexible scheduling, and transparent communication from start to finish.",
    ],
    nearby: [
      "roofing-chicago",
      "roofing-oak-park",
      "roofing-berwyn",
      "roofing-riverside",
      "roofing-stickney",
    ],
  },
  {
    slug: "roofing-wheaton",
    name: "Wheaton",
    county: "DuPage County",
    metaTitle: "Roofing Contractor in Wheaton, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Wheaton roofing contractor — serving DuPage County's county seat with expert roof replacement, repair & storm damage restoration. Free estimates.",
    intro: [
      "As the county seat of DuPage County, Wheaton blends small-town charm with suburban convenience. The tree-canopied streets near downtown and Wheaton College are lined with well-maintained homes that require experienced roofing care. Cornerstone Roofing Co. serves Wheaton homeowners with premium roof replacement, repair, and maintenance services.",
      "Mature trees throughout Wheaton's older neighborhoods can cause debris buildup and branch damage to rooftops, while open stretches in newer developments face direct wind exposure. We address both scenarios with tailored solutions — from trimming-damage repairs to full system replacements using Class 4 impact-rated shingles that can lower your insurance premiums.",
    ],
    nearby: [
      "roofing-naperville",
      "roofing-glen-ellyn",
      "roofing-lisle",
      "roofing-carol-stream",
      "roofing-winfield",
    ],
  },
  {
    slug: "roofing-des-plaines",
    name: "Des Plaines",
    county: "Cook County",
    metaTitle:
      "Roofing Contractor in Des Plaines, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Des Plaines roofing services — roof replacement, repair & storm damage near O'Hare. Cook County licensed. Free estimates.",
    intro: [
      "Des Plaines is situated near O'Hare International Airport in northwest Cook County, with a housing stock that includes post-war ranches, split-levels, and newer townhome developments. Cornerstone Roofing Co. provides comprehensive roofing services to Des Plaines homeowners, from full replacements on aging roofs to emergency tarping after sudden storm damage.",
      "Proximity to O'Hare means Des Plaines roofs contend with jet-fuel particulates, heavy vibration, and noise-reduction considerations in addition to standard weather challenges. We recommend and install high-quality underlayment and ventilation systems that extend roof life and improve attic insulation. All work meets Cook County code requirements.",
    ],
    nearby: [
      "roofing-arlington-heights",
      "roofing-mount-prospect",
      "roofing-park-ridge",
      "roofing-elk-grove-village",
      "roofing-niles",
    ],
  },
  {
    slug: "roofing-tinley-park",
    name: "Tinley Park",
    county: "Cook County",
    metaTitle:
      "Roofing Contractor in Tinley Park, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Tinley Park roofing contractor — roof replacement, repair & storm damage in the south suburbs. Free estimates & insurance assistance.",
    intro: [
      "Tinley Park is a thriving south-suburban community known for the Hollywood Casino Amphitheatre and its welcoming, family-friendly neighborhoods. Homes here range from 1960s-era ranches to newer construction in subdivisions like Brookside Glen. Cornerstone Roofing Co. provides expert roofing services across Tinley Park, helping homeowners maintain and protect their most valuable asset.",
      "South suburban Cook County is no stranger to severe weather — hail, damaging winds, and heavy rain are annual occurrences. We guide Tinley Park homeowners through the insurance claims process and deliver efficient roof replacements that minimize time with a tarp on your home. Our installations carry manufacturer-backed warranties for lasting peace of mind.",
    ],
    nearby: [
      "roofing-orland-park",
      "roofing-mokena",
      "roofing-frankfort",
      "roofing-homer-glen",
      "roofing-oak-forest",
    ],
  },
  {
    slug: "roofing-orland-park",
    name: "Orland Park",
    county: "Cook County",
    metaTitle:
      "Roofing Contractor in Orland Park, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Orland Park roofing services — roof replacement, repair & storm damage near Orland Square Mall. Licensed & insured. Free estimates.",
    intro: [
      "Orland Park is one of the south suburbs' premier communities, anchored by Orland Square Mall and surrounded by well-kept residential neighborhoods. Many homes in Orland Park feature complex roof lines with dormers, valleys, and multiple pitches that demand skilled installation. Cornerstone Roofing Co. has the expertise to handle these intricate systems and deliver results that look as good as they perform.",
      "Spring and summer storms can bring golf-ball-sized hail to the Orland Park area, causing widespread roof damage in a single event. Our team responds quickly with damage assessments, works with your insurance adjuster, and completes high-quality replacements on tight timelines. We use architectural and designer shingles that complement Orland Park's upscale aesthetic.",
    ],
    nearby: [
      "roofing-tinley-park",
      "roofing-homer-glen",
      "roofing-mokena",
      "roofing-palos-heights",
      "roofing-oak-lawn",
    ],
  },
  {
    slug: "roofing-hoffman-estates",
    name: "Hoffman Estates",
    county: "Cook County",
    metaTitle:
      "Roofing Contractor in Hoffman Estates, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Hoffman Estates roofing contractor — roof replacement, repair & storm damage in NW Cook County. Free estimates & insurance claim help.",
    intro: [
      "Hoffman Estates stretches across the northwest suburbs with a mix of established 1960s-70s neighborhoods and newer planned communities near the NOW Arena and Prairie Stone campus. Cornerstone Roofing Co. serves Hoffman Estates homeowners with full-service roofing — from aging-roof assessments on original construction to storm-damage restoration on newer homes.",
      "The wide-open terrain of Hoffman Estates and neighboring Barrington-area communities leaves roofs exposed to powerful storm systems. We install wind-resistant roofing systems with enhanced nailing patterns and seal every vulnerability point. Our crews keep job sites clean and respect your landscaping throughout the project.",
    ],
    nearby: [
      "roofing-schaumburg",
      "roofing-elgin",
      "roofing-palatine",
      "roofing-arlington-heights",
      "roofing-streamwood",
    ],
  },
  {
    slug: "roofing-palatine",
    name: "Palatine",
    county: "Cook County",
    metaTitle: "Roofing Contractor in Palatine, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Palatine roofing services — roof replacement, repair & storm damage in NW Cook County. Trusted local contractor. Free estimates.",
    intro: [
      "Palatine is a well-established northwest suburban community with charming downtown streets, excellent park districts, and a diverse range of residential architecture from cozy bungalows to sprawling estates near Deer Grove Forest Preserve. Cornerstone Roofing Co. delivers tailored roofing solutions for every home type in Palatine.",
      "Northwest Cook County experiences some of the region's most intense hail events. We offer impact-resistant shingle options that qualify for insurance premium discounts while providing superior protection. Our Palatine customers appreciate our straightforward estimates, on-time project starts, and thorough post-installation inspections.",
    ],
    nearby: [
      "roofing-arlington-heights",
      "roofing-schaumburg",
      "roofing-hoffman-estates",
      "roofing-rolling-meadows",
      "roofing-inverness",
    ],
  },
  {
    slug: "roofing-mount-prospect",
    name: "Mount Prospect",
    county: "Cook County",
    metaTitle:
      "Roofing Contractor in Mount Prospect, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Mount Prospect roofing services — roof replacement, repair & storm damage. Expert care for NW suburban homes. Free estimates.",
    intro: [
      "Mount Prospect is a close-knit northwest suburban village with tree-lined streets, a vibrant downtown, and a housing stock that spans post-war ranches to modern new construction. Cornerstone Roofing Co. provides Mount Prospect homeowners with dependable roof replacement, repair, and inspection services backed by manufacturer warranties.",
      "Many Mount Prospect homes built in the 1950s-70s are on their second or third roof and may have underlying deck or ventilation issues that need attention during replacement. Our crews inspect every component of your roofing system — decking, underlayment, flashing, and ventilation — and address problems before they become costly surprises.",
    ],
    nearby: [
      "roofing-arlington-heights",
      "roofing-des-plaines",
      "roofing-elk-grove-village",
      "roofing-prospect-heights",
      "roofing-rolling-meadows",
    ],
  },
  {
    slug: "roofing-elk-grove-village",
    name: "Elk Grove Village",
    county: "Cook County",
    metaTitle:
      "Roofing Contractor in Elk Grove Village, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Elk Grove Village roofing contractor — roof replacement, repair & storm damage. Serving residential & commercial properties. Free estimates.",
    intro: [
      "Elk Grove Village is known for hosting one of the largest industrial parks in North America, but it is also home to thousands of well-maintained single-family residences. Cornerstone Roofing Co. serves both the residential neighborhoods and light-commercial properties throughout Elk Grove Village with professional roof replacement, repair, and maintenance services.",
      "The village's proximity to O'Hare and its position in the northwest suburban storm corridor mean roofs here face constant environmental stress. We recommend proactive inspections every two to three years for Elk Grove Village properties and offer maintenance plans that catch small issues before they become emergency repairs.",
    ],
    nearby: [
      "roofing-schaumburg",
      "roofing-arlington-heights",
      "roofing-mount-prospect",
      "roofing-des-plaines",
      "roofing-rolling-meadows",
    ],
  },
  {
    slug: "roofing-lombard",
    name: "Lombard",
    county: "DuPage County",
    metaTitle: "Roofing Contractor in Lombard, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Lombard roofing services — roof replacement, repair & storm damage in DuPage County. Known as the Lilac Village. Free estimates.",
    intro: [
      "Known as the \"Lilac Village\" for its beautiful Lilac Park, Lombard is a charming DuPage County suburb with a mix of older bungalows near the Metra station and newer homes in surrounding developments. Cornerstone Roofing Co. provides Lombard homeowners with high-quality roof replacements, repairs, and inspections that protect their homes and boost curb appeal.",
      "DuPage County's seasonal extremes — from sweltering summers to sub-zero winters — test every roofing system. We use premium shingles with enhanced granule adhesion and proper attic ventilation to combat thermal shock and extend roof lifespan. Our Lombard customers trust us for honest assessments and fair, competitive pricing.",
    ],
    nearby: [
      "roofing-wheaton",
      "roofing-glen-ellyn",
      "roofing-villa-park",
      "roofing-addison",
      "roofing-downers-grove",
    ],
  },
  {
    slug: "roofing-downers-grove",
    name: "Downers Grove",
    county: "DuPage County",
    metaTitle:
      "Roofing Contractor in Downers Grove, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Downers Grove roofing contractor — roof replacement, repair & storm damage in DuPage County. Serving historic and new homes. Free estimates.",
    intro: [
      "Downers Grove is one of DuPage County's most desirable communities, with a walkable downtown, three Metra stations, and a mix of historic and new-construction homes. Cornerstone Roofing Co. provides expert roofing services to Downers Grove homeowners, from careful re-roofs on century-old residences to efficient replacements on modern builds.",
      "The mature tree canopy in many Downers Grove neighborhoods is beautiful but can cause debris accumulation in valleys and gutters, leading to moisture damage over time. We assess your entire roof system during every project and recommend preventive measures — such as gutter guards and improved flashing — that protect your home between major service intervals.",
    ],
    nearby: [
      "roofing-naperville",
      "roofing-wheaton",
      "roofing-lisle",
      "roofing-woodridge",
      "roofing-westmont",
    ],
  },
  {
    slug: "roofing-buffalo-grove",
    name: "Buffalo Grove",
    county: "Lake County",
    metaTitle:
      "Roofing Contractor in Buffalo Grove, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Buffalo Grove roofing services — roof replacement, repair & storm damage in Lake County. Trusted by north suburban families. Free estimates.",
    intro: [
      "Buffalo Grove straddles the Cook-Lake County line and is celebrated for its excellent schools, safe neighborhoods, and family-friendly atmosphere. Cornerstone Roofing Co. provides Buffalo Grove homeowners with thorough roof inspections, expert replacements, and responsive storm-damage services that keep their homes protected.",
      "Many Buffalo Grove homes were built in the 1980s-90s development boom and are now reaching the point where original roofs need replacement. We help homeowners understand their options, compare materials, and make informed decisions. Our installations come with full manufacturer warranties, and our workmanship guarantee gives you additional peace of mind.",
    ],
    nearby: [
      "roofing-arlington-heights",
      "roofing-palatine",
      "roofing-wheeling",
      "roofing-vernon-hills",
      "roofing-libertyville",
    ],
  },
  {
    slug: "roofing-crystal-lake",
    name: "Crystal Lake",
    county: "McHenry County",
    metaTitle:
      "Roofing Contractor in Crystal Lake, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Crystal Lake roofing contractor — roof replacement, repair & storm damage in McHenry County. Expert service for lakeside and suburban homes. Free estimates.",
    intro: [
      "Crystal Lake is the largest city in McHenry County, offering a picturesque downtown, lakeside living, and a strong sense of community. Cornerstone Roofing Co. extends our Chicagoland service area to Crystal Lake, providing homeowners with the same professional roofing services and manufacturer-backed warranties we deliver throughout the metro area.",
      "McHenry County's northern location means heavier snowfall and longer winters compared to communities closer to the city. We design roofing systems that handle heavy snow loads and prevent ice damming, using proper ventilation and ice-and-water barrier membranes in critical areas. When storm damage strikes, our crews are on-site quickly to assess and repair.",
    ],
    nearby: [
      "roofing-elgin",
      "roofing-palatine",
      "roofing-algonquin",
      "roofing-mchenry",
      "roofing-woodstock",
    ],
  },
  {
    slug: "roofing-berwyn",
    name: "Berwyn",
    county: "Cook County",
    metaTitle: "Roofing Contractor in Berwyn, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Berwyn roofing services — roof replacement, repair & storm damage for bungalows and multi-family homes. Free estimates.",
    intro: [
      "Berwyn is famous for its classic Chicago bungalows and tightly knit residential blocks just west of the city. These homes, many built in the 1920s-30s, feature distinctive roof profiles that require experienced contractors. Cornerstone Roofing Co. specializes in re-roofing Berwyn's bungalow-belt homes while preserving their architectural character.",
      "Flat roofs on Berwyn's many two-flats and multi-family buildings present unique waterproofing challenges. We install TPO, EPDM, and modified bitumen systems with proper drainage to prevent ponding and leaks. Whether your Berwyn home has a pitched shingle roof or a flat commercial-style system, our team delivers lasting results.",
    ],
    nearby: [
      "roofing-cicero",
      "roofing-oak-park",
      "roofing-riverside",
      "roofing-forest-park",
      "roofing-chicago",
    ],
  },
  {
    slug: "roofing-skokie",
    name: "Skokie",
    county: "Cook County",
    metaTitle: "Roofing Contractor in Skokie, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Skokie roofing contractor — roof replacement, repair & storm damage near Old Orchard. Licensed in Cook County. Free estimates.",
    intro: [
      "Skokie is a diverse, vibrant community bordering Chicago's north side, home to the Old Orchard shopping center and a wide variety of residential styles. Cornerstone Roofing Co. provides Skokie homeowners with comprehensive roofing services — from replacing aging roofs on post-war Cape Cods and ranches to repairing storm damage on contemporary homes.",
      "North suburban rooftops deal with lake-effect moisture and temperature swings that accelerate wear on flashing, caulking, and shingle edges. We perform thorough inspections that go beyond the surface, checking attic ventilation, decking condition, and pipe boot seals. Skokie residents count on us for honest recommendations and quality execution.",
    ],
    nearby: [
      "roofing-evanston",
      "roofing-morton-grove",
      "roofing-niles",
      "roofing-lincolnwood",
      "roofing-chicago",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  City data — siding                                                */
/* ------------------------------------------------------------------ */
const sidingCities: CityPage[] = [
  {
    slug: "siding-chicago",
    name: "Chicago",
    county: "Cook County",
    metaTitle: "Siding Contractor in Chicago, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Chicago siding experts — James Hardie, vinyl & LP SmartSide installation and repair. Serving the Loop, North Side, South Side & all neighborhoods. Free estimates.",
    intro: [
      "Chicago homes endure punishing weather year-round — lake-effect moisture, sub-zero wind chills, and intense summer heat all take a toll on exterior siding. Cornerstone Roofing Co. installs and repairs James Hardie fiber cement, vinyl, and LP SmartSide siding for homeowners across Chicago's neighborhoods, from Logan Square bungalows to Beverly single-family homes.",
      "Whether you're updating the look of a classic Chicago greystone or replacing damaged vinyl on a newer townhome, our siding crews deliver precision installation that enhances curb appeal and improves energy efficiency. We help you choose the right material for your budget, style, and climate exposure, and we handle all city permit requirements.",
    ],
    nearby: [
      "siding-evanston",
      "siding-oak-park",
      "siding-cicero",
      "siding-schaumburg",
      "siding-arlington-heights",
    ],
  },
  {
    slug: "siding-naperville",
    name: "Naperville",
    county: "DuPage County",
    metaTitle: "Siding Contractor in Naperville, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Naperville siding installation — James Hardie, vinyl & LP SmartSide in DuPage County. Expert siding replacement & repair. Free estimates.",
    intro: [
      "Naperville homeowners take pride in their properties, and quality siding is essential to maintaining the community's high standard of curb appeal. Cornerstone Roofing Co. installs James Hardie ColorPlus fiber cement, premium vinyl, and LP SmartSide engineered wood siding throughout Naperville and DuPage County, giving homeowners durable, low-maintenance exteriors that last for decades.",
      "From the elegant homes along the Naperville Riverwalk to the newer subdivisions near Route 59, we tailor every siding project to the home's architecture and the homeowner's preferences. Our installations include proper house wrap, flashing integration, and moisture management details that prevent costly water intrusion behind the siding.",
    ],
    nearby: [
      "siding-aurora",
      "siding-bolingbrook",
      "siding-plainfield",
      "siding-wheaton",
      "siding-downers-grove",
    ],
  },
  {
    slug: "siding-schaumburg",
    name: "Schaumburg",
    county: "Cook County",
    metaTitle: "Siding Contractor in Schaumburg, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Schaumburg siding services — James Hardie, vinyl & LP SmartSide installation near Woodfield Mall. Expert siding replacement. Free estimates.",
    intro: [
      "Schaumburg's mix of single-family homes, townhomes, and condominiums near the Woodfield Mall corridor means a wide range of siding needs. Cornerstone Roofing Co. provides expert siding installation and replacement throughout Schaumburg, helping homeowners upgrade from outdated aluminum or deteriorating vinyl to modern, energy-efficient materials like James Hardie fiber cement.",
      "The northwest suburbs' exposure to wind-driven rain and hail can damage siding just as easily as it damages roofs. We inspect for impact dents, moisture infiltration behind panels, and loose or warped sections, and we provide detailed estimates for repair or full replacement. Our siding projects meet or exceed Cook County building codes and HOA requirements.",
    ],
    nearby: [
      "siding-arlington-heights",
      "siding-hoffman-estates",
      "siding-palatine",
      "siding-elk-grove-village",
      "siding-chicago",
    ],
  },
  {
    slug: "siding-aurora",
    name: "Aurora",
    county: "Kane County",
    metaTitle: "Siding Contractor in Aurora, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Aurora siding contractor — James Hardie, vinyl & LP SmartSide installation in Kane County. Siding replacement & repair. Free estimates.",
    intro: [
      "Aurora's diverse housing stock — from historic homes near the Fox River to sprawling new-construction neighborhoods on the far east side — presents unique siding opportunities. Cornerstone Roofing Co. helps Aurora homeowners select and install siding that suits their home's character and budget while standing up to Kane County's variable weather.",
      "We specialize in James Hardie fiber cement board, which offers the appearance of real wood without the maintenance headaches, as well as insulated vinyl and LP SmartSide engineered wood. Every Aurora siding installation includes thorough moisture barrier work and flashing integration to protect your home's structure for years to come.",
    ],
    nearby: [
      "siding-naperville",
      "siding-elgin",
      "siding-plainfield",
      "siding-bolingbrook",
      "siding-chicago",
    ],
  },
  {
    slug: "siding-joliet",
    name: "Joliet",
    county: "Will County",
    metaTitle: "Siding Contractor in Joliet, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Joliet siding services — James Hardie, vinyl & LP SmartSide for residential and commercial properties in Will County. Free estimates.",
    intro: [
      "Joliet homeowners looking to boost curb appeal and protect their homes from Will County weather turn to Cornerstone Roofing Co. for professional siding installation. We offer the full range of industry-leading products — James Hardie fiber cement, premium insulated vinyl, and LP SmartSide engineered wood — and help you choose the right solution for your home near the Rialto district, the Bluff, or any Joliet neighborhood.",
      "Older Joliet homes often have original aluminum or wood siding that has reached the end of its useful life. We remove and dispose of old materials, repair underlying sheathing when needed, install a modern weather-resistant barrier, and finish with new siding that transforms your home's exterior. Financing options are available for qualifying homeowners.",
    ],
    nearby: [
      "siding-plainfield",
      "siding-bolingbrook",
      "siding-lockport",
      "siding-romeoville",
      "siding-chicago",
    ],
  },
  {
    slug: "siding-elgin",
    name: "Elgin",
    county: "Kane County",
    metaTitle: "Siding Contractor in Elgin, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Elgin siding contractor — James Hardie, vinyl & LP SmartSide for historic and modern homes in Kane County. Free estimates.",
    intro: [
      "Elgin's historic homes along the Fox River feature distinctive architectural details that deserve siding materials matched to their character. Cornerstone Roofing Co. offers James Hardie HardiePlank and HardieShingle products that replicate the look of original wood clapboard and cedar shakes, giving Elgin's vintage properties a fresh appearance without sacrificing authenticity.",
      "For Elgin's newer construction and contemporary homes, we also install insulated vinyl siding and LP SmartSide engineered wood panels that maximize energy efficiency and minimize maintenance. Every installation includes proper corner trim, window and door casing, and soffit and fascia coordination for a polished, complete exterior transformation.",
    ],
    nearby: [
      "siding-aurora",
      "siding-schaumburg",
      "siding-hoffman-estates",
      "siding-chicago",
      "siding-naperville",
    ],
  },
  {
    slug: "siding-bolingbrook",
    name: "Bolingbrook",
    county: "Will County",
    metaTitle:
      "Siding Contractor in Bolingbrook, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Bolingbrook siding services — James Hardie, vinyl & LP SmartSide for Will County homes. Expert siding replacement. Free estimates.",
    intro: [
      "Bolingbrook's planned communities feature homes built from the 1970s through today, and many of the earlier homes are ready for a siding upgrade. Cornerstone Roofing Co. helps Bolingbrook homeowners replace faded, cracked, or storm-damaged siding with modern materials that deliver better insulation, lower maintenance, and dramatically improved curb appeal.",
      "We frequently work in Bolingbrook subdivisions like Boughton Ridge, Old Chicago Road, and Winston Hills, where homeowners are upgrading to James Hardie fiber cement or insulated vinyl. Our crews handle HOA color and material approvals, obtain village permits, and complete installations efficiently so your home looks great and stays protected.",
    ],
    nearby: [
      "siding-naperville",
      "siding-joliet",
      "siding-plainfield",
      "siding-romeoville",
      "siding-chicago",
    ],
  },
  {
    slug: "siding-arlington-heights",
    name: "Arlington Heights",
    county: "Cook County",
    metaTitle:
      "Siding Contractor in Arlington Heights, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Arlington Heights siding installation — James Hardie, vinyl & LP SmartSide in the NW suburbs. Expert siding replacement. Free estimates.",
    intro: [
      "Arlington Heights homeowners enjoy a classic suburban setting with well-maintained properties and strong community standards. When it comes time for a siding upgrade, Cornerstone Roofing Co. provides expert installation of James Hardie, vinyl, and LP SmartSide products that complement the village's residential character and withstand northwest suburban weather.",
      "We understand that Arlington Heights HOAs often have strict exterior guidelines. Our design consultants help you select colors and profiles that meet community standards while reflecting your personal style. Every siding project includes premium house wrap, precision trim work, and a final walkthrough to ensure your complete satisfaction.",
    ],
    nearby: [
      "siding-schaumburg",
      "siding-chicago",
      "siding-palatine",
      "siding-mount-prospect",
      "siding-elk-grove-village",
    ],
  },
  {
    slug: "siding-evanston",
    name: "Evanston",
    county: "Cook County",
    metaTitle: "Siding Contractor in Evanston, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Evanston siding experts — James Hardie, vinyl & LP SmartSide for lakefront and historic homes near Northwestern. Free estimates.",
    intro: [
      "Evanston's architectural diversity — from grand Victorians and Arts & Crafts bungalows to modern lakefront condos — requires a siding contractor with broad expertise. Cornerstone Roofing Co. offers Evanston homeowners the full spectrum of siding materials, including James Hardie fiber cement for historic restorations and premium vinyl for modern efficiency.",
      "Lakefront Evanston properties face heightened moisture exposure from Lake Michigan, making moisture management behind siding absolutely critical. We install rain screen systems, premium house wrap, and proper flashing at every window and door opening to ensure your siding investment is protected from the inside out.",
    ],
    nearby: [
      "siding-chicago",
      "siding-oak-park",
      "siding-schaumburg",
      "siding-arlington-heights",
      "siding-naperville",
    ],
  },
  {
    slug: "siding-oak-park",
    name: "Oak Park",
    county: "Cook County",
    metaTitle: "Siding Contractor in Oak Park, IL | Cornerstone Roofing Co.",
    metaDescription:
      "Oak Park siding services — James Hardie, vinyl & LP SmartSide for Frank Lloyd Wright-era and modern homes. Free estimates.",
    intro: [
      "Oak Park's world-famous architectural heritage — including more Frank Lloyd Wright buildings than any other community — demands siding work that respects historic character while providing modern performance. Cornerstone Roofing Co. offers James Hardie smooth-finish and textured profiles that closely match the original wood siding found on Oak Park's landmark homes.",
      "For Oak Park homes that don't fall under historic preservation guidelines, we also install insulated vinyl and LP SmartSide engineered wood that offer excellent durability and energy efficiency. Our team works closely with the village's building department to ensure every siding project meets local codes and neighborhood standards.",
    ],
    nearby: [
      "siding-chicago",
      "siding-evanston",
      "siding-cicero",
      "siding-berwyn",
      "siding-naperville",
    ],
  },
];

const allCityPages = [...roofingCities, ...sidingCities];

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */
function getCityBySlug(slug: string) {
  return allCityPages.find((c) => c.slug === slug);
}

function isRoofingPage(slug: string) {
  return slug.startsWith("roofing-");
}

const roofingHighlights = [
  {
    title: "Roof Replacement",
    href: "/roof-replacement",
    description:
      "Complete tear-off and installation of a new roofing system with manufacturer-backed warranties.",
  },
  {
    title: "Roof Repair",
    href: "/roof-repair",
    description:
      "Targeted repairs for leaks, missing shingles, damaged flashing, and more.",
  },
  {
    title: "Storm Damage Restoration",
    href: "/storm-damage-roofing",
    description:
      "Emergency tarping, insurance claim assistance, and full storm-damage repair.",
  },
  {
    title: "Roof Inspection",
    href: "/roof-inspection",
    description:
      "Comprehensive 21-point inspections to evaluate your roof's condition and remaining lifespan.",
  },
];

const sidingHighlights = [
  {
    title: "James Hardie Fiber Cement",
    href: "/siding",
    description:
      "The gold standard in siding — durable, fire-resistant, and beautiful with ColorPlus technology.",
  },
  {
    title: "Vinyl Siding",
    href: "/siding",
    description:
      "Affordable, low-maintenance siding available in hundreds of colors and profiles.",
  },
  {
    title: "LP SmartSide",
    href: "/siding",
    description:
      "Engineered wood siding with the warmth of real wood and exceptional durability.",
  },
  {
    title: "Siding Repair",
    href: "/siding",
    description:
      "Fix storm damage, cracks, warping, and moisture issues to restore your home's exterior.",
  },
];

/* ------------------------------------------------------------------ */
/*  Static params + metadata                                          */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return allCityPages.map((c) => ({ cityService: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cityService: string }>;
}): Promise<Metadata> {
  const { cityService } = await params;
  const city = getCityBySlug(cityService);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `${BASE_URL}/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${BASE_URL}/${city.slug}`,
      siteName: "Cornerstone Roofing Co.",
      locale: "en_US",
      type: "website",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */
export default async function CityServicePage({
  params,
}: {
  params: Promise<{ cityService: string }>;
}) {
  const { cityService } = await params;
  const city = getCityBySlug(cityService);
  if (!city) notFound();

  const isRoofing = isRoofingPage(city.slug);
  const serviceType = isRoofing ? "Roofing" : "Siding";
  const highlights = isRoofing ? roofingHighlights : sidingHighlights;

  const nearbyPages = city.nearby
    .map((s) => getCityBySlug(s))
    .filter(Boolean) as CityPage[];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Cornerstone Roofing Co.",
          url: BASE_URL,
          telephone: "+1-773-555-1234",
          email: "info@cornerstoneroofingco.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chicago",
            addressRegion: "IL",
            addressCountry: "US",
          },
          areaServed: {
            "@type": "City",
            name: city.name,
            containedInPlace: {
              "@type": "State",
              name: "Illinois",
            },
          },
          serviceType: isRoofing
            ? "Roofing Contractor"
            : "Siding Contractor",
        }}
      />

      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                {
                  label: `${serviceType} in ${city.name}`,
                },
              ]}
              dark
            />
          </div>

          <div className="flex items-center gap-2 text-secondary mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-widest uppercase">
              {city.county}, Illinois
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            {serviceType} Contractor in{" "}
            <span className="text-secondary">{city.name}</span>, IL
          </h1>

          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mb-10">
            Trusted {serviceType.toLowerCase()} services for {city.name}{" "}
            homeowners. Licensed, insured, and committed to quality
            craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+17735551234"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all"
            >
              <Phone className="w-5 h-5" />
              (773) 555-1234
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:border-secondary hover:text-secondary transition-all"
            >
              Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Professional {serviceType} Services in {city.name}
            </h2>
            {city.intro.map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground text-lg leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Service highlights */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
            Our {serviceType} Services in {city.name}
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            From minor repairs to complete {serviceType.toLowerCase()}{" "}
            replacement, we handle every project with the same attention to
            detail.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {highlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-border"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby service areas */}
      {nearbyPages.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
              Nearby Service Areas
            </h2>
            <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
              We also provide {serviceType.toLowerCase()} services in these
              communities near {city.name}.
            </p>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {nearbyPages.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/${nearby.slug}`}
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-6 py-3 text-foreground font-medium hover:border-secondary hover:text-secondary transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  {serviceType} in {nearby.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <ContactCTA
        service={isRoofing ? "Roof Replacement" : "Siding"}
        city={city.name}
      />

      <Footer />
    </div>
  );
}
