import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Roof Replacement", href: "/roof-replacement" },
  { label: "Roof Repair", href: "/roof-repair" },
  { label: "Siding", href: "/siding" },
  { label: "Storm Damage", href: "/storm-damage-roofing" },
  { label: "Gutters", href: "/gutters" },
  { label: "Roof Inspection", href: "/roof-inspection" },
];

const areaLinks = [
  { label: "Roofing in Chicago", href: "/roofing-chicago" },
  { label: "Roofing in Naperville", href: "/roofing-naperville" },
  { label: "Roofing in Schaumburg", href: "/roofing-schaumburg" },
  { label: "Roofing in Aurora", href: "/roofing-aurora" },
  { label: "Roofing in Joliet", href: "/roofing-joliet" },
  { label: "Roofing in Arlington Hts", href: "/roofing-arlington-heights" },
  { label: "Siding in Chicago", href: "/siding-chicago" },
  { label: "Siding in Naperville", href: "/siding-naperville" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Insurance Claims", href: "/insurance-claims" },
  { label: "Free Roof Estimate", href: "/insurance-claims/free-roof-estimate" },
];

export default function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-not-scrolled.png"
              alt="Cornerstone Roofing Co."
              width={96}
              height={96}
              className="h-16 w-auto mb-4"
            />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Chicagoland&apos;s trusted roofing contractor. Quality
              craftsmanship, honest pricing, and results that last.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+17735551234"
                className="flex items-center gap-2 text-primary-foreground/60 text-sm hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" /> (773) 555-1234
              </a>
              <a
                href="mailto:info@cornerstoneroofingco.com"
                className="flex items-center gap-2 text-primary-foreground/60 text-sm hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" /> info@cornerstoneroofingco.com
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4" /> Chicagoland, IL
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; 2026 Cornerstone Roofing Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
