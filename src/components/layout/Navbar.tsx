"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Home as HomeIcon,
  Wrench,
  CloudLightning,
  Fence,
  Droplets,
  Search,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    label: "Roof Replacement",
    href: "/roof-replacement",
    icon: HomeIcon,
    description: "Complete tear-off and new installation",
  },
  {
    label: "Roof Repair",
    href: "/roof-repair",
    icon: Wrench,
    description: "Fast, reliable leak and damage repairs",
  },
  {
    label: "Siding",
    href: "/siding",
    icon: Fence,
    description: "James Hardie and vinyl siding",
  },
  {
    label: "Storm Damage",
    href: "/storm-damage-roofing",
    icon: CloudLightning,
    description: "Emergency restoration and insurance help",
  },
  {
    label: "Gutters",
    href: "/gutters",
    icon: Droplets,
    description: "Seamless gutter installation and repair",
  },
  {
    label: "Roof Inspection",
    href: "/roof-inspection",
    icon: Search,
    description: "Free comprehensive roof inspections",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "About", href: "/#why-us" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-14 md:h-20 w-14 md:w-20">
            <Image
              src="/images/logo.png"
              alt="Cornerstone Roofing Co."
              width={96}
              height={96}
              className={`absolute inset-0 h-full w-auto hover:scale-105 transition-all duration-300 cursor-pointer ${scrolled ? "opacity-100" : "opacity-0"}`}
            />
            <Image
              src="/images/logo-not-scrolled.png"
              alt="Cornerstone Roofing Co."
              width={96}
              height={96}
              className={`absolute inset-0 h-full w-auto hover:scale-105 transition-all duration-300 cursor-pointer ${scrolled ? "opacity-0" : "opacity-100"}`}
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1 font-medium text-sm tracking-wide transition-colors duration-300 hover:text-secondary ${
                    scrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-4 w-[480px] max-w-[calc(100vw-2rem)] bg-card rounded-xl shadow-2xl border border-border p-4 grid grid-cols-2 gap-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-200">
                            <service.icon className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors duration-200" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-foreground group-hover:text-secondary transition-colors">
                              {service.label}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-colors duration-300 hover:text-secondary ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="tel:+17735551234"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            (773) 555-1234
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className={`lg:hidden p-3 ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-x-0 top-0 bottom-0 bg-card/95 backdrop-blur-lg border-t border-border overflow-y-auto pt-20"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setMobileServicesOpen(!mobileServicesOpen)
                      }
                      className="flex items-center justify-between w-full text-foreground font-medium py-2 hover:text-secondary transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 flex flex-col gap-1 overflow-hidden"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 text-muted-foreground py-2 hover:text-secondary transition-colors text-sm"
                            >
                              <service.icon className="w-4 h-4" />
                              {service.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground font-medium py-2 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="tel:+17735551234"
                className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-lg font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                (773) 555-1234
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
