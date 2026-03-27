"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-roof.jpg"
          alt="Beautiful home with new roof at sunset"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10"
        style={{ background: "hsl(var(--green))" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10"
        style={{ background: "hsl(var(--green))" }}
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-28 md:pt-45 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 mb-4"
          >
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
              Chicagoland&apos;s Trusted Roofer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.1] mb-4 drop-shadow-lg"
          >
            Roofing That
            <br />
            <span className="text-secondary">Stands the Test</span>
            <br />
            of Time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-6 max-w-xl leading-relaxed drop-shadow-md"
          >
            Expert roof replacement, repair, and storm damage restoration. Serving Chicago and
            surrounding suburbs with unmatched craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/#contact"
              className="group flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-300"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#services"
              className="flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:border-primary-foreground/60 transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-4 md:gap-6 mt-8 pt-6 border-t border-primary-foreground/20"
          >
            {[
              { value: "500+", label: "Roofs Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "4.9", label: "Google Rating", icon: true },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                {stat.icon && <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
                <span className="text-2xl font-heading font-bold text-primary-foreground">
                  {stat.value}
                </span>
                <span className="text-primary-foreground/60 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
