import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ReviewsFilter from "@/components/ReviewsFilter";
import WriteReviewModal from "@/components/WriteReviewModal";

export const metadata: Metadata = {
  title: "Reviews | Bahawal Gymkhana",
};

export default function Page() {
  return (
    <>
<div className="flex flex-col w-full">

<Reveal><section className="relative w-full overflow-hidden bg-primary-container text-on-primary py-space-xl">

<div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
<div className="absolute left-1/3 -bottom-24 w-80 h-80 rounded-full bg-secondary-fixed-dim/5 blur-2xl pointer-events-none"></div>
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin relative z-10">

<div className="flex items-center gap-space-sm mb-space-md">
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-primary text-secondary-container font-label-caps text-label-caps uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">verified</span> Verified Ledger
        </span>
<span className="text-on-primary-container font-label-sm text-label-sm">Est. 1954 • Member Reflections</span>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
<div className="lg:col-span-8 flex flex-col gap-space-xs">
<h1 className="font-headline-lg text-headline-lg text-surface tracking-tight">Member Experiences &amp; Ratings</h1>
<p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">Honest reflections from our members, families, and visiting reciprocal patrons across seven decades of sporting distinction.</p>
</div>
<div className="lg:col-span-4 flex lg:justify-end items-center gap-space-md">
<div className="bg-surface-container-low/10 backdrop-blur-md rounded-xl p-space-md flex items-center gap-space-md shadow-sm">
<div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center text-primary font-bold">
<span className="material-symbols-outlined text-[28px]">hotel_class</span>
</div>
<div>
<p className="font-headline-sm text-headline-sm text-surface leading-none">4.4 <span className="font-label-md text-label-md text-secondary-container">/ 5.0</span></p>
<p className="font-label-sm text-label-sm text-on-primary-container mt-1">442 Authenticated Entries</p>
</div>
</div>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full -mt-8 relative z-20 pb-space-xl">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden">

<div className="h-1.5 w-full bg-secondary-container"></div>
<div className="p-space-lg md:p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

<div className="lg:col-span-5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-surface-variant pb-space-lg lg:pb-0 lg:pr-space-xl">
<div className="flex items-baseline gap-space-sm mb-space-xs">
<span className="font-display-hero text-display-hero text-primary font-headline-lg">4.4</span>
<span className="font-headline-sm text-headline-sm text-on-surface-variant">out of 5</span>
</div>

<div className="flex items-center gap-1 text-secondary-container mb-space-sm">
<span className="material-symbols-outlined text-[26px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[26px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[26px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[26px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[26px]" style={{fontVariationSettings: "'FILL' 1"}}>star_half</span>
</div>
<p className="font-title-md text-title-md text-primary font-bold mb-space-xs">Exemplary Standing in Punjab</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Based on 442 verified Google &amp; Member Reviews compiled from collegiate tournaments, dining galas, and court time ledgers.</p>

<div className="inline-flex items-center gap-space-sm bg-surface-container-low px-space-md py-2.5 rounded-lg w-fit">
<div className="w-6 h-6 rounded-full bg-secondary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[16px]">thumb_up</span>
</div>
<span className="font-label-md text-label-md text-primary"><strong>94%</strong> of patrons recommend membership</span>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center gap-space-sm">
<div className="flex items-center justify-between mb-space-xs">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Patron Sentiment Ledger</h3>
<span className="font-label-sm text-label-sm text-secondary font-bold">442 Audited Submissions</span>
</div>

<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-primary w-14 shrink-0 flex items-center gap-1 font-bold">5 <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>star</span></span>
<div className="w-full bg-surface-container h-3 rounded-full overflow-hidden relative">
<div className="h-full bg-secondary-container rounded-full transition-all duration-700 ease-out" style={{width: "72%"}}></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant w-12 text-right shrink-0">72%</span>
</div>

<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-primary w-14 shrink-0 flex items-center gap-1 font-bold">4 <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>star</span></span>
<div className="w-full bg-surface-container h-3 rounded-full overflow-hidden relative">
<div className="h-full bg-secondary-container/85 rounded-full transition-all duration-700 ease-out" style={{width: "19%"}}></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant w-12 text-right shrink-0">19%</span>
</div>

<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-primary w-14 shrink-0 flex items-center gap-1 font-bold">3 <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>star</span></span>
<div className="w-full bg-surface-container h-3 rounded-full overflow-hidden relative">
<div className="h-full bg-secondary-container/60 rounded-full transition-all duration-700 ease-out" style={{width: "5%"}}></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant w-12 text-right shrink-0">5%</span>
</div>

<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-primary w-14 shrink-0 flex items-center gap-1 font-bold">2 <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>star</span></span>
<div className="w-full bg-surface-container h-3 rounded-full overflow-hidden relative">
<div className="h-full bg-secondary-container/40 rounded-full transition-all duration-700 ease-out" style={{width: "2%"}}></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant w-12 text-right shrink-0">2%</span>
</div>

<div className="flex items-center gap-space-sm">
<span className="font-label-md text-label-md text-primary w-14 shrink-0 flex items-center gap-1 font-bold">1 <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>star</span></span>
<div className="w-full bg-surface-container h-3 rounded-full overflow-hidden relative">
<div className="h-full bg-secondary-container/30 rounded-full transition-all duration-700 ease-out" style={{width: "2%"}}></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant w-12 text-right shrink-0">2%</span>
</div>

<div className="flex flex-wrap items-center justify-between pt-space-xs text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container mt-space-xs">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary-container"></span> Clay Courts: 4.8★</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary-container"></span> Dining Hall: 4.6★</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary-container"></span> Squash &amp; Pool: 4.5★</span>
</div>
</div>
</div>
</div>
</div>
</section></Reveal>

<ReviewsFilter />

<Reveal><section className="w-full py-space-lg bg-surface-container-low">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="group relative overflow-hidden rounded-xl h-64 bg-surface-container shadow-sm">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Dusk illumination at Bahawal Gymkhana tennis clay courts with vintage floodlights casting warm mustard reflections on the ochre ground, surrounded by stately eucalyptus trees and colonial brick arcades." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy3AfxiaX-iYIB3gb4x05EMZAEzKdo8xyVcOK9rrI5ekRBjSOweZ2N8M6zktRj629g8vH8ptqYBJ72nNBg1Hi_9JqDpafVbEAH2d4LgbEQmVLg5V8xH2iqETDbR8MjD0-ypvgOmwCpjPJSpzgURMOF9TRzALgnD5CkOwPn3x65tYWo3-dN44upqueqRrKnlbiOcl1jMBK-C9J6oMHdFSu81P10H-LTVkEzBO4EuoAko-1kLrRpEuXf4Q"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-md">
<div>
<p className="text-surface font-title-md text-title-md">Championship Clay Courts</p>
<p className="text-secondary-fixed text-label-sm font-label-sm">Floodlit Night Fixtures</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl h-64 bg-surface-container shadow-sm">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Regal high tea arrangement on the expansive green lawns of Bahawal Gymkhana with silver teapots, fine porcelain china, warm evening sunlight streaming through grand verandas in Bahawalpur." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl4VOxps9pkRZRvs6dKf2JlOfZya_UBjUV2_F2eCpYf56PAUqMWw6s9vfZbwG4LTBN91IGNZ_a-XGnkm02U72R6c1L_WRZcZzsWL-lkOZwohSPiifTFz8S4qfvLtwmjdNRQJkOk8adbaCFCu03nBMTCjGWkLG7BG0QxlKftNbsmz-ZlKBtYAR-RTzWd5G4hGtzBTrWyuoNiWaSEyLqHoa6mDH7Fb1s8zsxLdza4K9BntsYsGOU022EHA"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-md">
<div>
<p className="text-surface font-title-md text-title-md">Sunset Lawn Teas</p>
<p className="text-secondary-fixed text-label-sm font-label-sm">Sunday Tradition Since 1954</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl h-64 bg-surface-container shadow-sm">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Polished English snooker and billiards room inside the heritage clubhouse with deep teak wood paneling, hanging brass pendant lights, green baize tables, and black-and-white portraits of club champions." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4tuULwaFND8BmqI1nCD_vEPrk6lzflO65LKqFL8_uuaSSoru9Kft-XSw39nwEJ8YumivYOxspjhgDz3LlQKSgSf5LumDlw4AXj73wx9QItcTvvgIQnGwn5G2gdxwtTuZK2ehc7HHr-2Xr4-ezUwcc8fAcW0uDPvcJGd5J4pNJwj12s5LhKIm32RNeEHLx4_o4-ArPYNT5AOp4lfKgxByatpOYdwixQxnyYO7jE2R740YjoIkspfeClg"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-md">
<div>
<p className="text-surface font-title-md text-title-md">Teak Billiards Saloon</p>
<p className="text-secondary-fixed text-label-sm font-label-sm">Colonial Leisure Lounge</p>
</div>
</div>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full py-space-xl bg-surface">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="relative bg-primary-container text-on-primary rounded-xl overflow-hidden p-space-lg md:p-space-xl shadow-xl border border-secondary-container/40">

<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-secondary-container/10 to-transparent pointer-events-none"></div>
<div className="absolute left-8 bottom-0 w-32 h-32 rounded-full bg-secondary-fixed-dim/5 blur-xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
<div className="max-w-2xl">
<div className="flex items-center gap-space-xs text-secondary-container font-label-caps text-label-caps uppercase tracking-wider mb-space-xs">
<span className="material-symbols-outlined text-[18px]">rate_review</span>
<span>Secretary's Ledger of Opinion</span>
</div>
<h3 className="font-headline-md text-headline-md text-surface tracking-tight mb-space-xs">Are you an existing member?</h3>
<p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              Share your experience with the executive committee or leave a Google review to help preserve the standard of chivalry, athletics, and fraternity across our estate.
            </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0 w-full sm:w-auto">
<WriteReviewModal />
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-surface hover:text-secondary-container font-label-md text-label-md uppercase px-space-md py-3 rounded-lg border border-outline-variant hover:border-secondary-container transition-all duration-200" href="https://www.google.com/maps/search/?api=1&query=Bahawal+Gymkhana+Bahawalpur" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
              Google Review
            </a>
</div>
</div>
</div>
</div>
</section></Reveal>


</div>
    </>
  );
}
