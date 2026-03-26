"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTA from "@/components/sections/ContactCTA";
import { roofingCities, sidingCities } from "@/data/cities";

const topRoofingCities = roofingCities.slice(0, 10);
const topSidingCities = sidingCities.slice(0, 10);

interface ServicePageProps {
  breadcrumbs: Array<{ label: string; href?: string }>;
  title: string;
  description: string;
  intro: string;
  processSteps?: Array<{ title: string; description: string }>;
  benefits?: Array<{ title: string; description: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  relatedPages?: Array<{ title: string; href: string }>;
  serviceName?: string;
  serviceCategory?: "roofing" | "siding";
}

export default function ServicePageTemplate({
  breadcrumbs,
  title,
  description,
  intro,
  processSteps,
  benefits,
  faqs,
  relatedPages,
  serviceName,
  serviceCategory,
}: ServicePageProps) {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-5 bg-secondary" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbs} dark />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mt-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+17735551234"
                className="flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:border-primary-foreground/60 transition-all"
              >
                <Phone className="w-5 h-5" />
                (773) 555-1234
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            {intro.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      {processSteps && processSteps.length > 0 && (
        <section ref={processRef} className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3 block">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                How It Works
              </h2>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-heading font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Grid */}
      {benefits && benefits.length > 0 && (
        <section ref={benefitsRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                The Cornerstone Advantage
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-500"
                >
                  <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Pages */}
      {relatedPages && relatedPages.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
              Related Services
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex items-center gap-2 bg-card border border-border rounded-lg px-6 py-3 hover:border-secondary/50 hover:shadow-md transition-all"
                >
                  <span className="font-medium text-foreground group-hover:text-secondary transition-colors">
                    {page.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas */}
      {serviceCategory && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3 text-center">
              Available in Your Area
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              We provide {serviceName?.toLowerCase() || "this service"} across Chicagoland.
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {(serviceCategory === "roofing" ? topRoofingCities : topSidingCities).map((city) => (
                <Link
                  key={city.slug}
                  href={`/${serviceCategory}-${city.slug}`}
                  className="group inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 hover:border-secondary/50 hover:shadow-md transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                  <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && <FAQSection faqs={faqs} />}

      {/* Contact CTA */}
      <ContactCTA service={serviceName} />
    </>
  );
}
