import Link from "next/link";

const WHATSAPP_NUMBER = "9262111244555";
const PHONE_DISPLAY = "+92 62 111 244 555";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center shrink-0 overflow-hidden p-1">
                <img
                  src="/logo-emblem.png"
                  alt="Bahawal Gymkhana crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-lg text-[22px] font-bold text-surface tracking-tight leading-none">
                  Bahawal Gymkhana
                </span>
                <span className="font-label-caps text-label-caps text-secondary-container uppercase leading-none mt-1.5 tracking-[0.14em]">
                  Heritage Sports &amp; Leisure
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              Bahawalpur&apos;s premier heritage sports and social sanctuary
              since 1954. Rated 4.4★ by 442+ esteemed members across Punjab.
            </p>
            <div className="inline-flex items-center gap-space-xs bg-primary px-space-sm py-1 rounded w-fit">
              <span className="material-symbols-outlined text-secondary-container text-[16px]">
                star
              </span>
              <span className="font-label-sm text-label-sm font-bold text-surface">
                4.4 / 5.0
              </span>
              <span className="font-label-sm text-label-sm text-on-primary-container ml-1">
                Certified Patron Ledger
              </span>
            </div>
            <div className="flex items-center gap-space-sm pt-1">
              <a
                href="https://www.facebook.com/BahawalGymkhana/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bahawal Gymkhana on Facebook"
                className="w-9 h-9 rounded-full bg-primary hover:bg-secondary-container flex items-center justify-center text-surface hover:text-primary-container transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path d="M22 12.06C22 6.53 17.52 2.04 12 2.04S2 6.53 2 12.06c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.89h-2.33v6.99C18.34 21.19 22 17.06 22 12.06z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bahawalgymkhana/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bahawal Gymkhana on Instagram"
                className="w-9 h-9 rounded-full bg-primary hover:bg-secondary-container flex items-center justify-center text-surface hover:text-primary-container transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.85 3.9 2.31 7.15 2.16c1.27-.05 1.65-.06 4.85-.06zM12 0C8.74 0 8.33.01 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C0.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-space-md">
            <h3 className="font-label-caps text-label-caps text-secondary-container uppercase tracking-wider">
              Club Navigation
            </h3>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="text-on-primary-container hover:text-secondary-container transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/facilities"
                  className="text-on-primary-container hover:text-secondary-container transition-colors"
                >
                  Facilities &amp; Grounds
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/gallery"
                  className="text-on-primary-container hover:text-secondary-container transition-colors"
                >
                  Clubhouse Gallery
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/membership"
                  className="text-on-primary-container hover:text-secondary-container transition-colors"
                >
                  Membership Tiers
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/reviews"
                  className="text-on-primary-container hover:text-secondary-container transition-colors"
                >
                  Patron Reviews
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/contact"
                  className="text-on-primary-container hover:text-secondary-container transition-colors"
                >
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-space-md">
            <h3 className="font-label-caps text-label-caps text-secondary-container uppercase tracking-wider">
              Sports &amp; Amenities
            </h3>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-primary-container">
              <li className="flex items-center gap-space-xs">
                Championship Tennis Courts
              </li>
              <li className="flex items-center gap-space-xs">
                Glass Squash Courts 1 &amp; 2
              </li>
              <li className="flex items-center gap-space-xs">
                Heated Olympic Swimming Pool
              </li>
              <li className="flex items-center gap-space-xs">
                Teak Snooker &amp; Billiards Lounge
              </li>
              <li className="flex items-center gap-space-xs">
                Governor&apos;s Cigar Saloon
              </li>
              <li className="flex items-center gap-space-xs">
                Heritage Archival Library
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-space-md">
            <h3 className="font-label-caps text-label-caps text-secondary-container uppercase tracking-wider">
              Hours &amp; Concierge
            </h3>
            <div className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-primary-container">
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-secondary-container text-[18px] shrink-0">
                  location_on
                </span>
                <span>Club Road, Model Town A, Bahawalpur, Punjab 63100</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary-container text-[18px] shrink-0">
                  schedule
                </span>
                <span>Daily: 06:00 AM – 11:00 PM PKT</span>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-space-xs hover:text-secondary-container transition-colors w-fit"
              >
                <span className="material-symbols-outlined text-secondary-container text-[18px] shrink-0">
                  call
                </span>
                <span className="underline underline-offset-2 decoration-secondary-container/40">
                  {PHONE_DISPLAY}
                </span>
              </a>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary-container text-[18px] shrink-0">
                  mail
                </span>
                <span>info@bahawalgymkhana.pk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-primary-container font-label-sm text-label-sm border-t border-on-primary-container/15">
          <p className="pt-space-sm md:pt-0">
            © 2025 Bahawal Gymkhana Club. All Rights Reserved. Members Only.
          </p>
          <div className="flex items-center gap-space-md flex-wrap justify-center">
            <span className="text-secondary-container">Chivalry</span>
            <span>•</span>
            <span className="text-secondary-container">Athletics</span>
            <span>•</span>
            <span className="text-secondary-container">Fraternity</span>
            <span className="hidden sm:inline">•</span>
            <Link
              href="/terms"
              className="text-on-primary-container hover:text-secondary-container transition-colors"
            >
              Terms &amp; Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
