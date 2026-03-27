"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home,
  Wrench,
  CloudLightning,
  Fence,
  Droplets,
  Search,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Roof Replacement",
    href: "/roof-replacement",
    description:
      "Complete tear-off and installation with premium materials. GAF & Owens Corning certified.",
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    href: "/roof-repair",
    description:
      "Fast, reliable repairs for leaks, missing shingles, and wind damage.",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage",
    href: "/storm-damage-roofing",
    description:
      "Emergency restoration and full insurance claim assistance after hail or wind events.",
  },
  {
    icon: Fence,
    title: "Siding",
    href: "/siding",
    description:
      "James Hardie and vinyl siding installation, repair, and replacement.",
  },
  {
    icon: Droplets,
    title: "Gutters",
    href: "/gutters",
    description:
      "Seamless gutter installation, repair, and gutter guard systems for your home.",
  },
  {
    icon: Search,
    title: "Roof Inspection",
    href: "/roof-inspection",
    description:
      "Free comprehensive inspections with detailed reports and honest recommendations.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From emergency repairs to full replacements, we deliver quality
            craftsmanship on every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block bg-card rounded-xl p-6 md:p-8 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-secondary font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
