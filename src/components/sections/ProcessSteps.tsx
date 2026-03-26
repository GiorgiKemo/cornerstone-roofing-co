"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Our Process
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-8" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex gap-6 mb-12 last:mb-0"
            >
              {/* Step number */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-heading font-bold text-lg md:text-xl">
                  {i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="pt-2 md:pt-3">
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
  );
}
