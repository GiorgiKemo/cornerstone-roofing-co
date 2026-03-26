import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { Toaster } from "sonner";
import ChatWidget from "@/components/chat/ChatWidget";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cornerstoneroofingco.com"),
  title: {
    default: "Cornerstone Roofing Co. | Chicago Roofing Contractor",
    template: "%s | Cornerstone Roofing Co.",
  },
  description:
    "Cornerstone Roofing Co. — Chicagoland's trusted roofing contractor. Expert roof replacement, repair, storm damage restoration, siding & gutters. Free estimates.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cornerstone Roofing Co.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const globalSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Cornerstone Roofing Co.",
  url: "https://cornerstoneroofingco.com",
  telephone: "+1-773-555-1234",
  email: "info@cornerstoneroofingco.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  areaServed: [
    "Chicago",
    "Naperville",
    "Schaumburg",
    "Aurora",
    "Joliet",
    "Elgin",
    "Bolingbrook",
    "Arlington Heights",
    "Evanston",
    "Oak Park",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "187",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "19:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={globalSchema} />
        {children}
        <Toaster position="top-right" richColors />
        <ChatWidget />
      </body>
    </html>
  );
}
