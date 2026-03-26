import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export function Breadcrumbs({ items, dark = false }: BreadcrumbsProps) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://cornerstoneroofingco.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <span key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <span className={dark ? "text-primary-foreground/40" : "text-muted-foreground/50"} aria-hidden="true">
                  &gt;
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  className={
                    isLast
                      ? dark
                        ? "font-semibold text-primary-foreground"
                        : "font-semibold text-foreground"
                      : dark
                        ? "text-primary-foreground/60"
                        : "text-muted-foreground"
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={
                    dark
                      ? "text-primary-foreground/60 hover:text-secondary transition-colors duration-200"
                      : "text-muted-foreground hover:text-secondary transition-colors duration-200"
                  }
                >
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
