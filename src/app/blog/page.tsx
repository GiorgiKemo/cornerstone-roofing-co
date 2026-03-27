import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";

const BASE_URL = "https://cornerstoneroofingco.com";

export const metadata: Metadata = {
  title: "Roofing & Siding Blog | Cornerstone Roofing Co.",
  description:
    "Expert roofing and siding tips, cost guides, and maintenance advice for Chicago-area homeowners. Stay informed with Cornerstone Roofing Co.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Roofing & Siding Blog | Cornerstone Roofing Co.",
    description:
      "Expert roofing and siding tips, cost guides, and maintenance advice for Chicago-area homeowners.",
    url: `${BASE_URL}/blog`,
    siteName: "Cornerstone Roofing Co.",
    locale: "en_US",
    type: "website",
  },
};

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "roof-replacement-cost-chicago",
    title: "How Much Does a New Roof Cost in Chicago? (2026 Guide)",
    excerpt:
      "A detailed breakdown of roof replacement costs in the Chicago metro area — by material, home size, and complexity. Includes financing options and tips to save.",
    date: "2026-03-15",
    category: "Cost Guides",
    readTime: "8 min read",
  },
  {
    slug: "hardie-board-vs-vinyl-siding",
    title: "Hardie Board vs. Vinyl Siding: Which Is Best for Chicago Homes?",
    excerpt:
      "Comparing James Hardie fiber cement and vinyl siding on durability, cost, maintenance, and curb appeal for Midwest homeowners.",
    date: "2026-03-01",
    category: "Siding",
    readTime: "7 min read",
  },
  {
    slug: "signs-you-need-new-roof",
    title: "8 Signs You Need a New Roof (Don't Ignore #5)",
    excerpt:
      "From curling shingles to attic daylight, these eight warning signs mean it's time to call a roofing contractor — before the damage spreads.",
    date: "2026-02-18",
    category: "Roofing",
    readTime: "6 min read",
  },
  {
    slug: "file-roof-insurance-claim",
    title:
      "How to File a Roof Insurance Claim in Illinois: Step-by-Step",
    excerpt:
      "Navigate the roof insurance claim process with confidence. Learn what to document, how to work with adjusters, and mistakes to avoid.",
    date: "2026-02-05",
    category: "Insurance",
    readTime: "7 min read",
  },
  {
    slug: "winter-roof-damage-chicago",
    title: "Winter Roof Damage in Chicago: Prevention & Repair Guide",
    excerpt:
      "Ice dams, snow load, and freeze-thaw cycles wreak havoc on Chicago roofs every winter. Here's how to prevent damage and what to do if it happens.",
    date: "2026-01-20",
    category: "Maintenance",
    readTime: "6 min read",
  },
  {
    slug: "siding-replacement-cost-chicago",
    title: "Siding Replacement Cost in Chicago: Complete Pricing Guide (2026)",
    excerpt:
      "What does new siding cost in the Chicago area? We break down prices for James Hardie, vinyl, LP SmartSide, and more — plus labor, permits, and ROI.",
    date: "2026-01-10",
    category: "Cost Guides",
    readTime: "8 min read",
  },
  {
    slug: "signs-you-need-new-siding",
    title: "7 Warning Signs Your Siding Needs Replacement",
    excerpt:
      "Cracking, warping, high energy bills — these warning signs mean your siding may be failing. Learn when to repair and when to replace.",
    date: "2025-12-28",
    category: "Siding",
    readTime: "5 min read",
  },
  {
    slug: "metal-roof-vs-shingles",
    title: "Metal Roof vs. Shingles: Best Choice for Chicago Weather?",
    excerpt:
      "Weighing the pros and cons of metal roofing vs. asphalt shingles for Chicagoland homes — durability, cost, aesthetics, and resale value compared.",
    date: "2025-12-15",
    category: "Roofing",
    readTime: "7 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Cornerstone Roofing Co. Blog",
          url: `${BASE_URL}/blog`,
          publisher: {
            "@type": "Organization",
            name: "Cornerstone Roofing Co.",
            url: BASE_URL,
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
                { label: "Blog" },
              ]}
              dark
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
            Roofing & Siding Blog
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl">
            Expert advice, cost guides, and maintenance tips to help
            Chicago-area homeowners make informed decisions about their roofs
            and siding.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-5 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-secondary transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="text-sm text-muted-foreground"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
