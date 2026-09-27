import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MembershipForm from "@/components/MembershipForm";
import MembershipTiers from "@/components/MembershipTiers";

export const metadata: Metadata = {
  title: "Membership | Bahawal Gymkhana",
};

export default function Page() {
  return (
    <>
<div className="flex flex-col w-full">

<Reveal><section className="relative w-full overflow-hidden bg-primary-container text-on-primary">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center object-cover opacity-25" data-alt="An expansive panoramic evening photograph of the Bahawal Gymkhana colonial clubhouse with warm interior arcade lights, illuminated red clay tennis courts with players in crisp white attire, sprawling manicured emerald lawn gardens, and imperial clock tower under an amber dusk twilight sky." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUQ7rTHj0s5fa-n7KX4aO7CSrR22AXVFYKkRM29r2x6lMlIGpAvC-UCLD13KEfW4Sf9Qw2q7efuR7K8Vp6SOr3b3u_q0XuxdeosyRX053PTrPUnT3_-Me9tRqAsWg2YELPHW_HMll84Ykr26S6BUTz8dYJVI2v7W5RgaU2ZACzv-djtowTUe7FhAw3Vvz0AIJaCm2Y4QO6StGT21FBpPDC8ViRPyvKxMFoxidt2WypgFMLqzkqt8ZS5A')"}}>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/90 to-primary-container/70"></div>
<div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"></div>
</div>
<div className="relative z-10 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pt-space-xl pb-16">
<div className="flex flex-col max-w-3xl gap-space-sm">
<div className="inline-flex items-center gap-space-xs bg-primary/70 backdrop-blur-sm px-space-sm py-1 rounded w-fit text-secondary-container">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider">Patronage Ledger &amp; Admissions</span>
</div>
<h1 className="font-display-hero text-display-hero text-surface-bright tracking-tight leading-none mt-2">
          Membership at <br/><span className="italic text-secondary-container font-headline-lg font-normal">Bahawal Gymkhana</span>
</h1>
<p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed max-w-2xl mt-space-sm">
          Join an elite lineage of sporting enthusiasts, civic leaders, and distinguished families. Admissions are strictly governed by balloting conventions, sovereign heritage, and active member endorsement.
        </p>
<div className="flex flex-wrap items-center gap-space-md pt-space-md">
<a className="inline-flex items-center justify-center bg-secondary-container text-primary-container font-label-md text-label-md uppercase px-space-lg py-3 rounded hover:bg-secondary-fixed-dim transition-all duration-200 shadow-md" href="#apply-form">
<span>Begin Candidacy</span>
<span className="material-symbols-outlined ml-2 text-[18px]">arrow_downward</span>
</a>
<div className="flex items-center gap-3 px-4 py-2 rounded bg-surface/10 backdrop-blur-sm">
<span className="material-symbols-outlined text-secondary-container text-[20px]">calendar_month</span>
<span className="font-label-sm text-label-sm text-surface tracking-wide">Next Committee Ballot: <strong className="text-secondary-fixed">November 2025</strong></span>
</div>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-1">Honorary Entitlements</span>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">The Privileges of Pedigree</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mt-2 md:mt-0">
          Membership confers uninhibited access across our 28-acre estate alongside affiliated institutions throughout the nation.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-space-md text-primary">
<span className="material-symbols-outlined text-[28px]">handshake</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs">Reciprocal Privileges</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Full resident access and dining parity with affiliate sister gymkhanas in Lahore, Karachi, Rawalpindi &amp; Islamabad.
            </p>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase mt-space-md block font-bold">4 Major Metros</span>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-space-md text-primary">
<span className="material-symbols-outlined text-[28px]">sports_tennis</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs">Private Sporting Access</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Priority reservation across floodlit red clay tennis courts, squash arenas, semi-Olympic heated pool, and bespoke coaching.
            </p>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase mt-space-md block font-bold">Unrestricted Courts</span>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-space-md text-primary">
<span className="material-symbols-outlined text-[28px]">dinner_dining</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs">Private Banqueting</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Subsidized member gastronomy across grand verandas, the Governor's Cigar Saloon, and priority seasonal lawn catering.
            </p>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase mt-space-md block font-bold">Catering Tariff -35%</span>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-space-md text-primary">
<span className="material-symbols-outlined text-[28px]">diversity_3</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs">Family Heritage Rights</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Spouse credentials, junior member training regimens, and seamless generational transfer rights for primary lineages.
            </p>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase mt-space-md block font-bold">Generational Tenure</span>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface py-space-xl">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-1">Electoral Categories</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Candidacy &amp; Membership Tiers</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Select the tenure tier appropriate to your household or institution. All admissions require proposer sponsorship.
        </p>
</div>
<MembershipTiers />
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface-container-low py-space-xl" id="apply-form">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">

<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-1">Candidacy Formalities</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-space-sm">Begin Your Candidacy</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
              Prospective applicants must be proposed and seconded by current permanent members in good standing for a minimum of five continuous years.
            </p>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm mb-space-md">
<div className="flex items-center gap-space-sm mb-2">
<span className="material-symbols-outlined text-secondary text-[24px]">gavel</span>
<h4 className="font-title-md text-title-md text-primary">Balloting Protocol</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Candidate rosters are posted in the Member Antechamber for fourteen days prior to voting. The Screening Board reviews sporting acumen, civic repute, and institutional alignment.
              </p>
</div>

<div className="bg-primary text-on-primary p-space-lg rounded-lg shadow-md">
<div className="flex items-center justify-between mb-2">
<span className="font-label-caps text-label-caps text-secondary-container uppercase">Quarterly Admissions Cycle</span>
<span className="font-label-sm text-label-sm text-surface-container-high">Session 04/25</span>
</div>
<p className="font-headline-sm text-headline-sm text-surface font-semibold mb-space-sm">Next Balloting Session: November 2025</p>
<div className="w-full bg-primary-container h-2 rounded overflow-hidden mb-space-xs">
<div className="bg-secondary-container h-full w-[68%] rounded"></div>
</div>
<div className="flex justify-between items-center text-on-primary-container font-label-sm text-label-sm">
<span>Verification Stage (68% Complete)</span>
<span>Applications Close Oct 15</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-sm mt-space-lg p-space-md bg-surface-container rounded text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-[24px]">support_agent</span>
<div className="font-body-sm text-body-sm">
              Inquiries regarding proposer endorsement may be addressed to the <strong>Honorary Secretary Office</strong> via (062) 111-244-555 (Ext. 102).
            </div>
</div>
</div>

<div className="lg:col-span-7 bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg shadow-md">
<MembershipForm />
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface py-space-lg">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="p-space-lg rounded bg-surface-container-high flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary-container shrink-0">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary">Strict Scrutiny Guarantee</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">All ballot petitions undergo security clearance and background scrutiny under the Club Rules of 1954.</p>
</div>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-label-caps text-label-caps">
<span>Integrity</span>
<span>•</span>
<span>Sportsmanship</span>
<span>•</span>
<span>Honor</span>
</div>
</div>
</div>
</section></Reveal>
</div>

    </>
  );
}
