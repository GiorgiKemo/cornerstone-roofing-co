"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  Award,
  Clock,
  ShieldCheck,
  Users,
  Hammer,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "GAF Certified",
    description:
      "Factory-certified installer offering the best warranties in the industry.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    description:
      "Complete peace of mind with full liability coverage and worker's comp.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description:
      "Storms don't wait — neither do we. Emergency tarping and repairs available.",
  },
  {
    icon: Users,
    title: "Local Crew",
    description:
      "No subcontractors. Our trained in-house team handles every project.",
  },
  {
    icon: CheckCircle2,
    title: "Free Inspections",
    description:
      "Honest assessments with no pressure. We'll tell you what you actually need.",
  },
  {
    icon: Hammer,
    title: "Quality Materials",
    description:
      "We only use top-tier shingles and materials from trusted manufacturers.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Why Cornerstone
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Built on Trust,
              <br />
              <span className="text-gradient">Backed by Results</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              For over 15 years, homeowners across Chicagoland have chosen
              Cornerstone for our transparent pricing, expert craftsmanship, and
              unwavering commitment to doing the job right — the first time.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-primary rounded-xl px-6 py-4 text-center">
                <div className="text-3xl font-heading font-bold text-primary-foreground">
                  500+
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  Projects Done
                </div>
              </div>
              <div className="bg-secondary rounded-xl px-6 py-4 text-center">
                <div className="text-3xl font-heading font-bold text-secondary-foreground">
                  98%
                </div>
                <div className="text-secondary-foreground/70 text-sm">
                  Client Satisfaction
                </div>
              </div>
              <div className="bg-muted rounded-xl px-6 py-4 text-center">
                <div className="text-3xl font-heading font-bold text-foreground">
                  15+
                </div>
                <div className="text-muted-foreground text-sm">
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="flex gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300"
              >
                <reason.icon className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
