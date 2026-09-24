"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/facilities", label: "Facilities" },
  { path: "/gallery", label: "Gallery" },
  { path: "/membership", label: "Membership" },
  { path: "/reviews", label: "Reviews" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-low/95 backdrop-blur-md shadow-[0_1px_8px_rgba(62,39,35,0.08)]">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-space-xs sm:gap-space-sm min-w-0">
          <img
            src="/logo-emblem.png"
            alt="Bahawal Gymkhana crest"
            className="logo-mark h-10 sm:h-12 md:h-14 w-auto shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-headline-lg text-primary tracking-tight leading-none text-[16px] sm:text-[21px] md:text-[27px] font-bold truncate">
              Bahawal Gymkhana
            </span>
            <span className="font-label-caps text-label-caps text-secondary uppercase leading-none mt-1 sm:mt-1.5 tracking-[0.1em] sm:tracking-[0.18em] truncate">
              Est. 1954 • Royal Sanctuary
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-space-lg">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={active ? "page" : undefined}
                className={
                  "font-label-md text-label-md transition-colors py-1 " +
                  (active
                    ? "text-primary font-bold border-b-2 border-secondary-container"
                    : "text-on-surface-variant hover:text-primary")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm sm:gap-space-md shrink-0">
          <Link
            href="/membership"
            className="hidden sm:inline-flex items-center justify-center bg-secondary-container text-primary-container font-label-md text-label-md uppercase px-space-md py-2.5 rounded-lg hover:bg-secondary-fixed-dim hover:text-primary transition-all duration-200 shadow-[0_4px_12px_rgba(242,169,59,0.25)]"
          >
            Become a Member
          </Link>
          <button
            aria-label="Toggle Navigation Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-primary p-space-xs flex items-center justify-center"
            type="button"
          >
            <span className="material-symbols-outlined text-space-lg">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-outline-variant bg-surface-container-low">
          <div className="flex flex-col px-margin-mobile py-space-sm">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={
                    "font-label-md text-label-md py-space-sm border-b border-outline-variant/50 last:border-none " +
                    (active ? "text-primary font-bold" : "text-on-surface-variant")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/membership"
              onClick={() => setOpen(false)}
              className="mt-space-sm inline-flex items-center justify-center bg-secondary-container text-primary-container font-label-md text-label-md uppercase px-space-md py-2.5 rounded-lg"
            >
              Become a Member
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
