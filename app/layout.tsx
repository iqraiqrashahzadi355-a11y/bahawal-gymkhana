import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bahawalgymkhana.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Bahawal Gymkhana | Heritage Sports & Social Club, Bahawalpur",
  description:
    "Bahawal Gymkhana — a heritage members-only sports and social club in Bahawalpur, Pakistan since 1954. Tennis, squash, swimming, snooker, library, and cigar lounge.",
  openGraph: {
    title: "Bahawal Gymkhana | Heritage Sports & Social Club, Bahawalpur",
    description:
      "A heritage members-only sports and social club in Bahawalpur, Pakistan since 1954. Rated 4.4★ by 442+ members.",
    url: SITE_URL,
    siteName: "Bahawal Gymkhana",
    images: [{ url: "/logo-emblem.png" }],
    locale: "en_PK",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Bahawal Gymkhana",
  alternateName: "Bahawalpur Gymkhana",
  description:
    "A heritage members-only sports and social club in Bahawalpur, Pakistan, established in 1954. Facilities include tennis, squash, swimming, snooker, a library, and a cigar lounge.",
  url: SITE_URL,
  image: `${SITE_URL}/logo-emblem.png`,
  logo: `${SITE_URL}/logo-emblem.png`,
  telephone: "+92-62-111-244-555",
  priceRange: "PKR 450,000+",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Club Road, Model Town A",
    addressLocality: "Bahawalpur",
    addressRegion: "Punjab",
    postalCode: "63100",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.3956,
    longitude: 71.6833,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "06:00",
    closes: "23:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "442",
    bestRating: "5",
  },
  sameAs: [
    "https://www.facebook.com/BahawalGymkhana/",
    "https://www.instagram.com/bahawalgymkhana/?hl=en",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300..600,0..1,-25..0&display=block"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface text-on-surface antialiased">
        <Header />
        <main className="w-full pt-20 bg-surface max-w-[1280px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
