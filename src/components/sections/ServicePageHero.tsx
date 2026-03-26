"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

interface ServicePageHeroProps {
  title: string;
  description: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
}

export default function ServicePageHero({
  title,
  description,
  breadcrumbs,
}: ServicePageHeroProps) {
  return (
    <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
      {/* Accent decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Breadcrumbs items={breadcrumbs} dark />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight max-w-3xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-300"
          >
            Get Free Estimate
          </Link>
          <a
            href="tel:+17735551234"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:border-primary-foreground/60 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            (773) 555-1234
          </a>
        </motion.div>
      </div>
    </section>
  );
}
