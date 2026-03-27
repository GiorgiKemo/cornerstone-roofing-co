"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsGridProps {
  benefits: Benefit[];
}

export default function BenefitsGrid({ benefits }: BenefitsGridProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Key Benefits
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-5 md:p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
