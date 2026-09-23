import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bahawal Gymkhana | Heritage Sports & Social Club, Bahawalpur",
  description:
    "Bahawal Gymkhana — a heritage members-only sports and social club in Bahawalpur, Pakistan since 1954. Tennis, squash, swimming, snooker, library, and cigar lounge.",
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
