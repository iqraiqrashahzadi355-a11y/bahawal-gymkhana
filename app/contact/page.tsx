import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Bahawal Gymkhana",
};

export default function Page() {
  return (
    <>
<div className="flex flex-col w-full">

<Reveal><section className="relative w-full overflow-hidden bg-primary-container text-on-primary">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="48" id="heritage-lattice" patternUnits="userSpaceOnUse" width="48">
<path className="text-secondary-container" d="M24 0 L48 24 L24 48 L0 24 Z" fill="none" stroke="currentColor" strokeWidth="0.75"></path>
</pattern>
</defs>
<rect fill="url(#heritage-lattice)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-14 lg:py-16">
<div className="max-w-3xl">
<div className="flex items-center gap-space-xs mb-3">
<span className="w-8 h-[2px] bg-secondary-container"></span>
<span className="font-label-caps text-label-caps text-secondary-container tracking-widest uppercase">Secretariat &amp; Patron Services</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-surface tracking-tight">Contact the Concierge &amp; Secretariat</h1>
<p className="font-body-lg text-body-lg text-on-primary-container mt-3 leading-relaxed">
          We are at your disposal for membership inquiries, reciprocal guest visits, facility reservations, and event hosting across the historic grounds of Bahawalpur.
        </p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-8 border-t border-surface-container-high/15 text-left">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-secondary-container uppercase">Secretariat Desk</span>
<span className="font-title-md text-title-md text-surface font-semibold mt-0.5">Active</span>
<span className="font-label-sm text-label-sm text-on-primary-container">Mon–Sat • 9am–5pm</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-secondary-container uppercase">Gate Concierge</span>
<span className="font-title-md text-title-md text-surface font-semibold mt-0.5">24 Hours</span>
<span className="font-label-sm text-label-sm text-on-primary-container">Security &amp; Guest Escort</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-secondary-container uppercase">Reciprocal Envoys</span>
<span className="font-title-md text-title-md text-surface font-semibold mt-0.5">Priority</span>
<span className="font-label-sm text-label-sm text-on-primary-container">Direct Line: Ext 104</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-secondary-container uppercase">Avg. Response</span>
<span className="font-title-md text-title-md text-surface font-semibold mt-0.5">&lt; 2 Hours</span>
<span className="font-label-sm text-label-sm text-on-primary-container">Certified Ledger Reply</span>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface-container-low py-12 lg:py-16">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-xl shadow-[0_8px_24px_rgba(62,39,35,0.06)] relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary to-secondary-container"></div>
<div className="flex flex-col mb-8">
<div className="flex items-center justify-between mb-2">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">Formal Dispatch</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Ledger Connected
              </span>
</div>
<h2 className="font-headline-md text-headline-md text-primary">Send a Message to the Secretary</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Please enter your pertinent credentials. All correspondence is handled confidentially through the Executive Office.
            </p>
</div>
<ContactForm />
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="bg-surface-container-lowest p-6 sm:p-7 rounded-xl shadow-[0_8px_24px_rgba(62,39,35,0.06)] relative overflow-hidden">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-secondary-container">
<span className="material-symbols-outlined text-[22px]">account_balance</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase">Executive Office</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Secretariat Details</h3>
</div>
</div>

<div className="space-y-4 font-body-sm text-body-sm">

<div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">location_on</span>
<div>
<span className="font-label-sm text-label-sm uppercase text-secondary font-bold block mb-0.5">Clubhouse Address</span>
<span className="text-primary font-medium">Club Road, Civil Lines, Bahawalpur 63100, Punjab, Pakistan</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant mt-0.5">Adjacent to Noor Mahal Enclave</span>
</div>
</div>

<div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">call</span>
<div>
<span className="font-label-sm text-label-sm uppercase text-secondary font-bold block mb-0.5">Concierge Lines</span>
<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-primary font-medium">
<a className="hover:text-secondary transition-colors inline-flex items-center gap-1" href="https://wa.me/9262111244555" target="_blank" rel="noopener noreferrer">
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px] text-secondary"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.09.99-2.37c.26-.29.56-.36.75-.36.19 0 .38 0 .54.01.17.01.41-.06.64.49.24.58.81 1.99.88 2.13.07.15.12.32.02.51-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.29.72 1.19 1.55 1.93 1.07.95 1.96 1.25 2.25 1.39.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.09 1.67.79 1.96.93.29.14.48.21.55.33.07.12.07.68-.17 1.36z"/></svg>
  +92 62 111 244 555
</a>
<span className="hidden sm:inline text-outline">•</span>
<a className="hover:text-secondary transition-colors" href="tel:+92622883491">+92 62 288 3491</a>
</div>
<span className="block font-label-sm text-label-sm text-on-surface-variant mt-0.5">International PBX: Ext 101 / 102</span>
</div>
</div>

<div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">alternate_email</span>
<div className="w-full">
<span className="font-label-sm text-label-sm uppercase text-secondary font-bold block mb-0.5">Direct Correspondence</span>
<div className="flex flex-col gap-0.5 text-primary font-medium">
<a className="hover:text-secondary transition-colors truncate" href="mailto:secretariat@bahawalgymkhana.pk">secretariat@bahawalgymkhana.pk</a>
<a className="hover:text-secondary transition-colors truncate" href="mailto:concierge@bahawalgymkhana.pk">concierge@bahawalgymkhana.pk</a>
</div>
</div>
</div>

<div className="p-3 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary text-[20px]">schedule</span>
<span className="font-label-sm text-label-sm uppercase text-secondary font-bold">Operating Hours &amp; Access</span>
</div>
<div className="space-y-1.5 pl-7 text-on-surface">
<div className="flex justify-between items-center text-label-sm">
<span className="text-on-surface-variant">Sports &amp; Clay Courts:</span>
<span className="font-semibold text-primary">06:00 AM – 10:30 PM (Daily)</span>
</div>
<div className="flex justify-between items-center text-label-sm">
<span className="text-on-surface-variant">Dining &amp; Verandas:</span>
<span className="font-semibold text-primary">12:00 PM – 11:30 PM</span>
</div>
<div className="flex justify-between items-center text-label-sm">
<span className="text-on-surface-variant">Admin Secretariat:</span>
<span className="font-semibold text-primary">09:00 AM – 05:00 PM (Mon–Sat)</span>
</div>
</div>
</div>

<div className="p-3 rounded-lg bg-primary-container text-on-primary flex items-start gap-3">
<span className="material-symbols-outlined text-secondary-container text-[20px] shrink-0 mt-0.5">dry_cleaning</span>
<div>
<span className="font-label-caps text-label-caps text-secondary-container uppercase">Club Etiquette</span>
<p className="font-body-sm text-body-sm text-on-primary-container mt-0.5">
                    Smart casual or formal club attire strictly observed across verandas and dining salons after 07:00 PM. Collared shirts mandatory.
                  </p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-6 sm:p-7 rounded-xl shadow-[0_8px_24px_rgba(62,39,35,0.06)] flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">explore</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase">Sanctuary Cartography</span>
<h4 className="font-headline-sm text-headline-sm text-primary leading-tight">Club Grounds &amp; Environs</h4>
</div>
</div>
<div className="hidden sm:flex flex-col text-right">
<span className="font-label-caps text-label-caps text-outline">Coordinates</span>
<span className="font-label-sm text-label-sm font-semibold text-primary">29.3956° N, 71.6833° E</span>
</div>
</div>

<div className="relative w-full h-56 rounded-lg overflow-hidden bg-primary-container shadow-inner">
<iframe
  title="Bahawal Gymkhana location map"
  src="https://www.google.com/maps?q=Bahawal+Gymkhana+Bahawalpur&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
></iframe>
</div>

<div className="mt-4 pt-4 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="font-body-sm text-body-sm text-on-surface-variant">
                12 minutes from Bahawalpur Airport (BHV) • Dedicated Valet Parking
              </p>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary-container text-primary-container font-label-md text-label-md font-bold px-4 py-2.5 rounded-lg hover:bg-secondary-fixed-dim transition-all shadow-[0_2px_8px_rgba(242,169,59,0.3)] whitespace-nowrap" href="https://maps.google.com/?q=Bahawal+Gymkhana+Club+Bahawalpur" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">map</span>
<span>Open in Google Maps</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-primary text-on-primary border-t border-surface-container-high/10 py-8 lg:py-10">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-primary-container/60 p-6 rounded-xl">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-primary text-[28px]">handshake</span>
</div>
<div className="max-w-xl">
<span className="font-label-caps text-label-caps text-secondary-container uppercase">Reciprocal Club Privilege</span>
<h4 className="font-headline-sm text-headline-sm text-surface mt-0.5">Visiting from Affiliated Clubs?</h4>
<p className="font-body-sm text-body-sm text-on-primary-container mt-1">
              Members of Lahore Gymkhana, Islamabad Club, Karachi Gymkhana, and royal reciprocal institutions enjoy temporary lodging, court priority, and dining signing privileges upon presentation of reciprocal credentials.
            </p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
<div className="bg-primary/90 p-3 rounded-lg text-left w-full sm:w-auto">
<span className="font-label-caps text-label-caps text-secondary-container block">Duty Protocol Envoy</span>
<span className="font-label-md text-label-md text-surface font-semibold">+92 321 680 1954</span>
</div>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary font-label-md text-label-md uppercase px-5 py-3 rounded-lg hover:bg-secondary-container hover:text-primary transition-all duration-200 text-center font-bold" href="mailto:reciprocal@bahawalgymkhana.pk?subject=Reciprocal%20Visit%20Notification">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>Verify Affiliation</span>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-surface-container-high/10 text-on-primary-container font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">medical_services</span>
<span>Medical First-Aid Station: Pavilion Wing (24/7)</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">local_police</span>
<span>Security Protocol Officer: Ext 109 / +92 62 288 3499</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">local_taxi</span>
<span>Chauffeur &amp; Airport Shuttle Concierge: Club Front Porte-Cochère</span>
</div>
</div>
</div>
</section></Reveal>
</div>

    </>
  );
}
