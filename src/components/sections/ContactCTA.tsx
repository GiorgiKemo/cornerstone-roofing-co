"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

interface ContactCTAProps {
  service?: string;
  city?: string;
}

export default function ContactCTA({ service, city }: ContactCTAProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-navy relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-5"
        style={{ background: "hsl(var(--green))" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Get Started
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Ready for a Roof
              <br />
              You Can Count On?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
              Get a free, no-obligation estimate. We&apos;ll come to you,
              inspect your roof, and give you an honest assessment — no
              surprises, no pressure.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+17735551234"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
              >
                <Phone className="w-5 h-5 text-secondary" />
                <span className="font-medium">(773) 555-1234</span>
              </a>
              <a
                href="mailto:info@cornerstoneroofingco.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-secondary" />
                <span className="font-medium">info@cornerstoneroofingco.com</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="font-medium">
                  {city
                    ? `Serving ${city} and Chicagoland`
                    : "Serving all of Chicagoland"}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              className="bg-card rounded-2xl p-8 shadow-2xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Request Free Estimate
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all mb-4"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all mb-4"
              />
              <select
                defaultValue={service || ""}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all mb-4"
              >
                <option value="">Select Service</option>
                <option value="Roof Replacement">Roof Replacement</option>
                <option value="Roof Repair">Roof Repair</option>
                <option value="Storm Damage">Storm Damage</option>
                <option value="Siding">Siding</option>
                <option value="Gutters">Gutters</option>
                <option value="Roof Inspection">Roof Inspection</option>
              </select>
              {city && (
                <input type="hidden" name="city" value={city} />
              )}
              <textarea
                placeholder="Tell us about your project..."
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all mb-6 resize-none"
              />
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-300"
              >
                Get My Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
