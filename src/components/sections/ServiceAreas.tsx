import Link from "next/link";
import { MapPin } from "lucide-react";

const cities = [
  { name: "Chicago", slug: "chicago" },
  { name: "Naperville", slug: "naperville" },
  { name: "Schaumburg", slug: "schaumburg" },
  { name: "Aurora", slug: "aurora" },
  { name: "Joliet", slug: "joliet" },
  { name: "Elgin", slug: "elgin" },
  { name: "Bolingbrook", slug: "bolingbrook" },
  { name: "Arlington Heights", slug: "arlington-heights" },
  { name: "Evanston", slug: "evanston" },
  { name: "Oak Park", slug: "oak-park" },
];

export default function ServiceAreas() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3 block">
            Our Coverage
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Proudly Serving Chicagoland
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From the city to the suburbs, our expert roofing team is ready to
            serve your neighborhood.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/roofing-${city.slug}`}
              className="group flex items-center gap-2 bg-card rounded-lg px-4 py-3 border border-border hover:border-secondary/50 hover:shadow-md transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-secondary shrink-0" />
              <span className="font-medium text-sm text-foreground group-hover:text-secondary transition-colors">
                {city.name}
              </span>
            </Link>
          ))}
          <Link
            href="/#contact"
            className="group col-span-2 sm:col-span-1 flex items-center justify-center gap-2 bg-secondary rounded-lg px-4 py-3 border border-secondary hover:opacity-90 hover:shadow-md transition-all duration-300"
          >
            <span className="font-semibold text-sm text-secondary-foreground">
              Don&apos;t See Your Area? Contact Us &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
