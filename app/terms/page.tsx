import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Policies | Bahawal Gymkhana",
};

const SECTIONS = [
  {
    icon: "gavel",
    title: "Membership Terms",
    body: [
      "Membership is granted at the sole discretion of the Executive Committee following the balloting process described on the Membership page. Entrance fees are non-refundable once an application has been approved and ratified.",
      "Monthly maintenance dues are payable in advance and must be cleared within 15 days of invoicing. Accounts in arrears beyond 60 days may have facility access suspended pending settlement.",
      "Membership is personal and non-transferable, except where explicitly provided for under Family or Corporate membership categories.",
    ],
  },
  {
    icon: "groups",
    title: "Guest & Visitor Policy",
    body: [
      "Members may sponsor up to the guest allowance specified for their membership tier per month. Sponsoring members are responsible for their guests' conduct and any charges incurred.",
      "Reciprocal privileges extend to verified members of affiliated Gymkhanas and clubs, subject to presentation of valid reciprocal credentials at the front desk.",
    ],
  },
  {
    icon: "shield",
    title: "Privacy Policy",
    body: [
      "Information submitted through this website — including contact forms, membership inquiries, facility reservations, and review submissions — is used solely to respond to your request and to maintain club administrative records.",
      "We do not sell or share your personal information with third parties for marketing purposes. Data submitted is retained only as long as necessary for membership administration or legal record-keeping.",
      "This site does not use third-party advertising trackers. Basic, aggregated usage data may be collected to improve the website experience.",
    ],
  },
  {
    icon: "event_busy",
    title: "Booking & Cancellation",
    body: [
      "Facility reservations made through this website or the front desk are confirmed on a first-come, first-served basis and may be cancelled by the club in case of maintenance, weather, or tournament scheduling.",
      "Members are asked to cancel or reschedule at least 2 hours in advance where possible, as a courtesy to other patrons on the waiting list.",
    ],
  },
  {
    icon: "checkroom",
    title: "Club Etiquette & Conduct",
    body: [
      "Smart casual or formal club attire is required across verandas and dining salons after 7:00 PM. Predominantly tennis and squash whites are strictly required on the racquet courts.",
      "Mobile devices must remain on silent mode throughout the Grand Snooker Lounge, Library, and Verandas.",
      "The Committee reserves the right to suspend membership privileges, without refund, for conduct deemed contrary to the dignity of the club.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary text-surface py-space-xl relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin relative z-10">
          <span className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest">
            Governance &amp; Patron Ledger
          </span>
          <h1 className="font-headline-lg text-headline-lg text-surface mt-space-sm mb-space-sm">
            Terms &amp; Policies
          </h1>
          <p className="font-body-lg text-body-lg text-surface/80 max-w-2xl">
            The following terms, along with the Bahawal Gymkhana Club
            Bye-Laws (Rev. 2024), govern membership, facility use, and
            information submitted through this website.
          </p>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-[900px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col gap-space-lg">
          {SECTIONS.map((section) => (
            <div
              key={section.title}
              className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm"
            >
              <div className="flex items-center gap-space-sm mb-space-sm">
                <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">
                    {section.icon}
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-primary">
                  {section.title}
                </h2>
              </div>
              <div className="flex flex-col gap-space-sm">
                {section.body.map((p, i) => (
                  <p
                    key={i}
                    className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-surface-container-low rounded-xl p-space-lg text-center flex flex-col items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[28px]">
              contact_support
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Questions about these terms or your data? Reach the Honorary
              Secretary&apos;s office and we&apos;ll be glad to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary-container text-primary-container font-label-md text-label-md uppercase px-space-lg py-2.5 rounded-lg hover:bg-secondary-fixed-dim transition-all shadow-sm mt-1"
            >
              Contact the Secretariat
            </Link>
          </div>

          <p className="font-label-sm text-label-sm text-outline text-center pt-space-sm">
            Last updated: September 2026 · Bahawal Gymkhana Club, Bahawalpur
          </p>
        </div>
      </section>
    </div>
  );
}
