import type { MetadataRoute } from "next";

const BASE_URL = "https://cornerstoneroofingco.com";

const roofingCitySlugs = [
  "chicago", "naperville", "schaumburg", "aurora", "joliet", "elgin",
  "bolingbrook", "arlington-heights", "evanston", "oak-park", "cicero",
  "berwyn", "oak-lawn", "tinley-park", "orland-park", "palatine",
  "des-plaines", "mount-prospect", "hoffman-estates", "glenview",
  "wheaton", "downers-grove", "lombard", "elmhurst", "skokie",
  "park-ridge", "niles", "plainfield", "elk-grove-village",
  "buffalo-grove", "crystal-lake",
];

const sidingCitySlugs = [
  "chicago", "naperville", "schaumburg", "aurora", "joliet", "elgin",
  "bolingbrook", "arlington-heights", "evanston", "oak-park",
];

const roofingMaterials = [
  "asphalt-shingles", "metal-roofing", "flat-roofing", "slate-roofing", "cedar-shake",
];

const sidingBrands = [
  "james-hardie", "lp-smartside", "vinyl", "siding-repair", "siding-replacement", "soffit-fascia",
];

const blogSlugs = [
  "roof-replacement-cost-chicago",
  "hardie-board-vs-vinyl-siding",
  "signs-you-need-new-roof",
  "file-roof-insurance-claim",
  "winter-roof-damage-chicago",
  "siding-replacement-cost-chicago",
  "signs-you-need-new-siding",
  "metal-roof-vs-shingles",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    // Tier 2 — Service Pillars
    { url: `${BASE_URL}/roof-replacement/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/roof-repair/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/siding/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/storm-damage-roofing/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/gutters/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/roof-inspection/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Tier 3 — Hub pages
    { url: `${BASE_URL}/emergency-roofing/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/commercial-roofing/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/insurance-claims/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/roof-maintenance/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Tier 3 — Emergency sub-pages
    { url: `${BASE_URL}/emergency-roofing/emergency-roof-repair/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/emergency-roofing/roof-tarping/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/emergency-roofing/roof-leak-repair/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/emergency-roofing/24-hour-roofer/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Tier 3 — Commercial sub-pages
    { url: `${BASE_URL}/commercial-roofing/commercial-roof-repair/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/commercial-roofing/flat-roof-replacement/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/commercial-roofing/tpo-roofing/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/commercial-roofing/epdm-roofing/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Tier 3 — Insurance sub-pages
    { url: `${BASE_URL}/insurance-claims/hail-damage-claim/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/insurance-claims/storm-damage-siding/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/insurance-claims/free-roof-estimate/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Tier 3 — Maintenance sub-pages
    { url: `${BASE_URL}/roof-maintenance/roof-cleaning/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/roof-maintenance/roof-coating/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/roof-maintenance/gutter-cleaning/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Tier 5
    { url: `${BASE_URL}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/faq/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Tier 3 — Roofing materials
  const materialPages: MetadataRoute.Sitemap = roofingMaterials.map((slug) => ({
    url: `${BASE_URL}/roofing/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Tier 3 — Siding brands
  const sidingPages: MetadataRoute.Sitemap = sidingBrands.map((slug) => ({
    url: `${BASE_URL}/siding/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Tier 4 — City pages
  const roofingCityPages: MetadataRoute.Sitemap = roofingCitySlugs.map((slug) => ({
    url: `${BASE_URL}/roofing-${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const sidingCityPages: MetadataRoute.Sitemap = sidingCitySlugs.map((slug) => ({
    url: `${BASE_URL}/siding-${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Tier 5 — Blog posts
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...materialPages,
    ...sidingPages,
    ...roofingCityPages,
    ...sidingCityPages,
    ...blogPages,
  ];
}
