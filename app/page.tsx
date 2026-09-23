import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Home | Bahawal Gymkhana",
};

export default function Page() {
  return (
    <>
<div className="flex flex-col w-full">

<Reveal><section className="relative w-full -mt-20 overflow-hidden bg-primary text-on-primary">
<div className="absolute inset-0 z-0">
<img alt="Bahawal Gymkhana Grand Clubhouse and Floodlit Tennis Grounds" className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD362bz0uTK5EJrenGoSxgioT6LscpGcQY770_jmiVqjy4F3AZw_JkYbMbH-mJVctj88NzYOqj7E9mS7mw5cep11-ncbordAl2QN-6PO8lD3pY0s3DUPRb2XYodCI-q28s45ZcKhDw8zaAKgWWXytp78ppxzWMv0f6K_IGNuS95BG4CgfjtDSpIZP0h29ndikxj9LilxSgl7iOQ_84nNLaHKwCac1yzkVzTlue6QHSFUQjISN0o0UHs0A"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/65 to-primary/30 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pt-36 pb-space-xl lg:pt-44 lg:pb-32 flex flex-col justify-end min-h-[720px] lg:min-h-[840px]">
<div className="max-w-3xl flex flex-col items-start gap-space-md">

<div className="inline-flex items-center gap-space-xs bg-primary-container/90 backdrop-blur-md px-space-md py-1.5 rounded-full border border-secondary-container/30 shadow-lg">
<div className="flex items-center text-secondary-container">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
</div>
<span className="font-label-caps text-label-caps tracking-wider text-secondary-container uppercase">4.4 Rating</span>
<span className="text-surface-variant/40 text-xs">•</span>
<span className="font-body-sm text-body-sm text-surface-container-lowest font-medium">442 Google Member Reviews</span>
</div>

<h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-surface-container-lowest leading-[1.08] tracking-tight">
          A Living Legacy of Distinction &amp; Athletic Grace
        </h1>

<p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-2xl leading-relaxed">
          Bahawalpur's venerable private club since 1954. Where timeless tradition meets championship sports, fine veranda dining, and distinguished fellowship.
        </p>

<div className="flex flex-wrap items-center gap-space-md pt-space-sm w-full sm:w-auto">
<Link href="/facilities" className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-secondary-container hover:bg-secondary-fixed-dim text-primary-container font-label-md text-label-md uppercase px-space-lg py-3.5 rounded transition-all duration-200 shadow-md hover:-translate-y-0.5">
<span>Explore Facilities</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
<Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary-container/60 hover:bg-primary-container text-surface-container-low border border-secondary-container/50 font-label-md text-label-md uppercase px-space-lg py-3.5 rounded transition-all duration-200 backdrop-blur-sm">
<span className="material-symbols-outlined text-[18px] text-secondary-container">mark_email_read</span>
<span>Contact Us</span>
</Link>
</div>
</div>

<div className="mt-space-xl pt-space-lg border-t border-surface-container-highest/15 grid grid-cols-2 sm:grid-cols-4 gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary-container text-[20px]">verified</span>
<span className="font-label-caps text-label-caps uppercase text-surface-container-low tracking-wider">Patron Ledger Est. 1954</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary-container text-[20px]">sports_tennis</span>
<span className="font-label-caps text-label-caps uppercase text-surface-container-low tracking-wider">Clay &amp; Hard Courts</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary-container text-[20px]">local_bar</span>
<span className="font-label-caps text-label-caps uppercase text-surface-container-low tracking-wider">Cigar &amp; Billiards</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary-container text-[20px]">security</span>
<span className="font-label-caps text-label-caps uppercase text-surface-container-low tracking-wider">Private Member Access</span>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface py-space-xl">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-[2px] bg-secondary-container"></span>
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Royal Grounds &amp; Sanctuaries</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Championship Facilities &amp; Leisure
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            State-of-the-art sporting grounds and refined private quarters reserved exclusively for our patron members and their distinguished guests.
          </p>
</div>
<div>
<Link href="/facilities" className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase text-secondary hover:text-primary transition-colors group">
<span className="border-b-2 border-secondary-container pb-0.5 group-hover:border-primary">View All 8 Facilities</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="group bg-surface-container-lowest rounded p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded overflow-hidden relative mb-space-sm bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Red clay championship tennis court with crisp white lines and warm afternoon golden hour sunlight cast over floodlight towers at Bahawal Gymkhana, editorial architectural sports photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtFpKjvnQ2SPNZar8IaPddZXCBDRsS3pfuAGBROyluQKnOINZlJEiy_psnZH7pq_aLOjhx_CBkT_S1juIA4JSbX0H3bAeiu6R6-ro7Gmhg2sbjzib-4XwfBM-nr0YvoclRyTFKe3XTGBxCYLm90I_YlE8GWg4DS8vqipYIW1fUdq2VwGNIt6KnDmLPagzb46V14ta6b1n46-fMSPyB93jHMsKpM_L6t7ksVBcw6UfRnWp8-b5KEuAplw"/>
<span className="absolute top-2 right-2 bg-primary/85 backdrop-blur-sm text-secondary-container font-label-caps text-label-caps px-2 py-0.5 rounded uppercase">01 • Courts</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Championship Tennis</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Floodlit red clay courts and acrylic hard courts overseen by ATP-certified resident coaches.</p>
</div>
<div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm font-semibold">6 Courts • Floodlit</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">sports_tennis</span>
</div>
</div>

<div className="group bg-surface-container-lowest rounded p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded overflow-hidden relative mb-space-sm bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="International regulation glass-backed squash court with rich polished maple wood sprung flooring and viewing gallery at an elite heritage club, sharp sports documentary style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDYJOsz3tq_w9oFlRmi4VwQM6D_SguIIYb0YO_S80HXmO2KlgqxNqYCzoBG--aoKFTUIkAkmz3FeQIcFcNSu_p-SM5JJ9j4bgZ8X65S7A7AaZxiNcAOZTyyx4vsIXGhrfPJ2rWBkUrU5CyMHyHrPlmB61f1Bp-svBI9cShijb9yK_dn_Sn9gktoewzz3KWKI2NDbaa9s0OoJseOoHi-wNc0nj2EsdGtOZlnDGH5ihNrbBSltNfOzWWZw"/>
<span className="absolute top-2 right-2 bg-primary/85 backdrop-blur-sm text-secondary-container font-label-caps text-label-caps px-2 py-0.5 rounded uppercase">02 • Squash</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Glass Squash Courts</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">International glass-back regulation squash courts with tiered spectator seating and air purification.</p>
</div>
<div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm font-semibold">2 Glass Courts</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">sports_handball</span>
</div>
</div>

<div className="group bg-surface-container-lowest rounded p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded overflow-hidden relative mb-space-sm bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Luxury outdoor Olympic lap swimming pool with sun lounges, surrounded by royal colonial arched porticos and date palms at golden sunset, warm desert aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN5u_9y1KWV7-ZES6zG9TydnN6ksUjsLuW_lvz8v_10yKN2YYU4gMYmbEiFDsA3qwnQ_jsNaPDHkQUKgiaIEJQ20YJI7wCuezbZymrNWe_ty3IJKXqHYPMEnzwxyoBg1E4smIQ9mQSQbmy_KoaXuVWt-WrKwNbxoQEUlTDWwH14wllrMsMB7sKzObCawlgLbBlv1tI01yFiJvuzOkZpDgPa5L1_30xNcCLeMTY4vUHe8JSJQjUrUSWdw"/>
<span className="absolute top-2 right-2 bg-primary/85 backdrop-blur-sm text-secondary-container font-label-caps text-label-caps px-2 py-0.5 rounded uppercase">03 • Aquatics</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Olympic Pool</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Temperature-controlled 50m lap pool featuring an expansive teak sun deck and dedicated poolside cafe service.</p>
</div>
<div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm font-semibold">50-Meter • Heated</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">pool</span>
</div>
</div>

<div className="group bg-surface-container-lowest rounded p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded overflow-hidden relative mb-space-sm bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Antique mahogany full-size English billiards table with brass pendant tournament lamps in an atmospheric dark wood paneled gentleman lounge with leather tufted chesterfields." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP3uYmbShY4wMTymnQuj4myrG2eXKn6aldsm2jzEMJEshaIapw3k6WWu9ieKRz5HKqRa9_srVYWPfauFuUSWqr3kZiM9stW9EcwDZeSi5tCJpO5nJRrMcX2rknXWQOwArtBaPY8x8axSXKbAGtYi691NO7iV-KnlYD8tmrfQ-qaaOP2-NkFCeSFkoiFA_Bri495AsLctMDAqe1z-qPxGyyVNXuRkT_BeTbDdznQVpNduvtyTksHDjTpA"/>
<span className="absolute top-2 right-2 bg-primary/85 backdrop-blur-sm text-secondary-container font-label-caps text-label-caps px-2 py-0.5 rounded uppercase">04 • Billiards</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Royal Snooker Hall</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Handcrafted mahogany tables, tournament lighting, and an extensive library of vintage cue cases.</p>
</div>
<div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm font-semibold">4 Match Tables</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">circle</span>
</div>
</div>

<div className="group bg-surface-container-lowest rounded p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded overflow-hidden relative mb-space-sm bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Governor's cigar saloon with deep espresso leather wingback armchairs, humidors, rich teak boiserie, and soft amber lamp lighting evoking mid-century princely heritage." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGaBJk8aI6xZtJOyuRRTfk4T2mNtJv9gI6-I1rgaU8NaWyO6NdTkFhe_MSuvNOaETra6oOl1Kiwv5yVkWbbqw9BOvQMQcNQ3RSpfqyFrbIZQbY5C29EZDv4hhTYIQPjFLII8C4wucIQf_n7jC0iwiYHFcGmGoJBj9zop8CzgCS6RxcqwB7GpsBkZKBEZRHcNoqN0OSDADC6wkVOL0fX8GQ3EJJx24xeUqorZ4y_NxETILy2Lpnb4BKOA"/>
<span className="absolute top-2 right-2 bg-primary/85 backdrop-blur-sm text-secondary-container font-label-caps text-label-caps px-2 py-0.5 rounded uppercase">05 • Saloon</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Cigar &amp; Lounge</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Hand-rolled selections preserved in Spanish cedar humidors with private leather booths for conversation.</p>
</div>
<div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm font-semibold">Private Members Only</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">smoking_rooms</span>
</div>
</div>

<div className="group bg-surface-container-lowest rounded p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded overflow-hidden relative mb-space-sm bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Quiet vintage library hall lined with floor-to-ceiling dark walnut bookshelves, brass study lamps, archival leather books, and tall Palladian arched windows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsQc4BbkU2z3w-dnFkou6EHMXbdqzecwBVz-W3Qs3AbJZc7h4xQI3VXUf1FNT-z_KtWHU4vCNlHmBNOAWD5M5xsZ1YrqI4QkAVVSN1yXSFVogTNVIlaFqV3l4F8uwBzHT9psu1yLar7AcPleyhKx90Q8Ptvy-FP1jJKPzMHy5zqGTF2Fv6TFGi_1tjBLLzXsIjKgUt8ey5DSGk6RlSh2DXlD_mptfqQtGIuoYcIAuHUtTHX-w7rw37cg"/>
<span className="absolute top-2 right-2 bg-primary/85 backdrop-blur-sm text-secondary-container font-label-caps text-label-caps px-2 py-0.5 rounded uppercase">06 • Archives</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Heritage Library</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Bahawalpur princely state manuscripts, gazettes, daily national papers, and secluded reading alcoves.</p>
</div>
<div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm font-semibold">4,500+ Volumes</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">menu_book</span>
</div>
</div>

<div className="group bg-surface-container-lowest rounded p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded overflow-hidden relative mb-space-sm bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High-end private athletic health club gym with custom black iron barbells, modern cardio machines facing club garden lawns, and warm wooden athletic lockers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRpMPeRZhzT3NGwPJ15-iJ0iKVB3Iumnjg6nUF3sMf6ixd7nh276l47VHG3FHRZFg4tLQyRMtTOPYgjHaou6Vk_OO0E9ICKJbNWByLurMueKaa4z9_55pfs143A9oAwORVBEWoom7nNISS70UVTNDsR99EYMFziR3RXETBkKNGuiRGlgQrXwiQQq3PH8lVVvGQ2Gv_QsM0cN-S5rebMbIK6-71WvXyUIFIcO6I7MmMwZ2I1u-84BpUFw"/>
<span className="absolute top-2 right-2 bg-primary/85 backdrop-blur-sm text-secondary-container font-label-caps text-label-caps px-2 py-0.5 rounded uppercase">07 • Fitness</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Modern Fitness Gym</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Biomechanic strength systems, cardio suites overlooking gardens, steam suites, and personal coaches.</p>
</div>
<div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm font-semibold">Steam &amp; Sauna Suite</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">fitness_center</span>
</div>
</div>

<div className="group bg-surface-container-lowest rounded p-space-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-full h-44 rounded overflow-hidden relative mb-space-sm bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Bespoke evening high tea setup on a grand colonial veranda overlooking manicured green polo lawns, white linen tablecloths, brass teaware, warm twilight atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzFCTiof_17JaUPebEl2lYAI-7fKvBH1EMBE44iNmN4hgZ2u3MDUczeczJ6heDRwyd7PnoLUal2jZIoaKtAH95V1lw7MLHY3VjN5vFxMpPJoxMQ2NpKxLbrEOpgEVCXRiquUoYcin3hQgd3OyVNIy1PfVZy0wiYBWXi9E3A0GFBS6_DPKhbqGbQjj3-ZOVieneyRDgkJ9HiwVh5VtBrMLVMN_jS7UtrtZruWD8EKt_t6Ea5cC-L5ER5A"/>
<span className="absolute top-2 right-2 bg-primary/85 backdrop-blur-sm text-secondary-container font-label-caps text-label-caps px-2 py-0.5 rounded uppercase">08 • Veranda</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Sprawling Veranda</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Legendary afternoon high teas, evening banquet dining under the stars, and manicured pavilion lawns.</p>
</div>
<div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary">
<span className="font-label-sm text-label-sm font-semibold">High Tea &amp; Lawn Dining</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">deck</span>
</div>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

<div className="lg:col-span-6 relative">
<div className="relative z-10 rounded overflow-hidden shadow-xl bg-primary-container group">
<img className="w-full h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-110" data-alt="Majestic exterior facade of a grand heritage Pakistani clubhouse in Bahawalpur with colonnaded arches, clock tower, and spectators seated beside red clay courts at dusk." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC0zqw2wfeZfIFXLO2X5USW7nK8KrI-Q09iN2OlQjBRa8SbNY2aEfx1nN4hC4rh_lSb3BjVM0ECdy2YYBZImxUCeFgPrMQ9A9wjLhqBYn7UwtMpZ96OHQ053vzWVqkPI2CzD2kHBgmovly2AIyH-9jpWszimpFQ6z9Dx433zmr08FQJCp5eMJ6oLP0C9DSlJo4yXswDFpD1kqTXYBrtSI3GL0gjyB7_VedJ-zMXbydGPpj85lrBMh-hw"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>

<div className="absolute bottom-0 left-0 right-0 p-space-md text-surface flex items-center justify-between">
<div>
<span className="font-label-caps text-label-caps uppercase text-secondary-container">Archival Ledger #1954</span>
<p className="font-title-md text-title-md text-surface">Bahawalpur Civil Lines Grounds</p>
</div>
<div className="w-12 h-12 rounded bg-secondary-container text-primary-container flex items-center justify-center font-bold">
<span className="font-headline-sm text-[20px]">1954</span>
</div>
</div>
</div>

<div className="hidden sm:block absolute -bottom-6 -right-6 z-20 bg-primary-container text-on-primary p-space-md rounded shadow-lg max-w-[240px]">
<div className="flex items-center gap-space-xs mb-1">
<span className="font-label-caps text-label-caps text-secondary-container uppercase">Royal Charter</span>
</div>
<p className="font-body-sm text-body-sm text-on-primary-container">Preserving southern Punjab's finest sporting lineage for over 70 continuous years.</p>
</div>
</div>

<div className="lg:col-span-6 flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-[2px] bg-secondary-container"></span>
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Heritage &amp; Lineage</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Seven Decades of Southern Punjab Camaraderie
          </h2>
<div className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
<p>
              Established under princely patronage in 1954, Bahawal Gymkhana Club was envisioned as the premier bastion of gentlemanly sport, physical refinement, and distinguished social congregation in Bahawalpur.
            </p>
<p>
              Through seven vibrant decades, its manicured grounds, tournament courts, and tranquil verandas have hosted international delegates, state dignitary tournaments, and multi-generational family milestones—maintaining unwavering standards of hospitality and decorum.
            </p>
</div>

<div className="grid grid-cols-3 gap-space-sm py-space-sm bg-surface-container rounded p-space-md">
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-primary leading-tight">1954</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Foundation</span>
</div>
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-primary leading-tight">1,200+</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Active Patrons</span>
</div>
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-primary leading-tight">18 Acres</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Lush Grounds</span>
</div>
</div>
<div className="pt-space-xs">
<Link href="/history" className="inline-flex items-center justify-center gap-space-xs bg-secondary-container hover:bg-secondary-fixed-dim text-primary-container font-label-md text-label-md uppercase px-space-lg py-3 rounded transition-all duration-200 shadow-sm">
<span>Read Our History</span>
</Link>
</div>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface py-space-xl">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">

<div className="flex flex-col items-center text-center max-w-2xl mx-auto pb-space-lg">
<div className="inline-flex items-center gap-space-xs mb-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">format_quote</span>
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Generational Fellowship</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          Voices of Our Distinguished Fellowship
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Reflections from the statesmen, athletes, and families who call the Bahawal Gymkhana their sanctuary.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="bg-surface-container-lowest rounded p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-0.5 text-secondary">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Member #0412</span>
</div>
<p className="font-body-md text-body-md text-primary italic leading-relaxed pt-space-xs">
              "The tennis traditions and evening tea on the lawn remain peerless in Punjab. A true home away from home for three generations of our family."
            </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold overflow-hidden shrink-0">
<span className="font-headline-sm text-headline-sm">M</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary leading-snug">Malik Taimur Abbasi</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Patron Member since 1988</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-0.5 text-secondary">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Member #0849</span>
</div>
<p className="font-body-md text-body-md text-primary italic leading-relaxed pt-space-xs">
              "The quiet dignity of the library and the temperature-controlled pool make it our family's favorite weekend retreat. Unmatched privacy and warmth."
            </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold overflow-hidden shrink-0">
<span className="font-headline-sm text-headline-sm">Z</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary leading-snug">Dr. Zohra Durrani</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Family Member since 2011</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-0.5 text-secondary">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Corporate Tier</span>
</div>
<p className="font-body-md text-body-md text-primary italic leading-relaxed pt-space-xs">
              "Hosting visiting delegations at the Cigar Lounge and Snooker Room always leaves an indelible mark of class. A true institutional pride for Bahawalpur."
            </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold overflow-hidden shrink-0">
<span className="font-headline-sm text-headline-sm">S</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary leading-snug">Salman Farooqi</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Corporate Member</span>
</div>
</div>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface-container py-space-xl">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch">

<div className="lg:col-span-6 bg-surface-container-lowest p-space-lg lg:p-space-xl rounded shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-md">
<div className="flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Club Concierge &amp; Enquiries</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Visit Bahawal Gymkhana</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
                We welcome distinguished inquiries from prospective members, visiting reciprocal club fellows, and sports tour patrons.
              </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">

<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">location_on</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Address</span>
<span className="font-body-md text-body-md text-primary font-medium">Club Road, Civil Lines</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bahawalpur, Punjab 63100</span>
</div>
</div>

<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">schedule</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Club Hours</span>
<span className="font-body-md text-body-md text-primary font-medium">Daily: 06:00 AM – 11:00 PM</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Courts &amp; Veranda Services</span>
</div>
</div>

<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">call</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Concierge Desk</span>
<span className="font-body-md text-body-md text-primary font-medium">+92 62 111 244 555</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Member Concierge</span>
</div>
</div>

<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">badge</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant">Admissions</span>
<span className="font-body-md text-body-md text-primary font-medium">admissions@gymkhana.pk</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Patron Screening Cell</span>
</div>
</div>
</div>
</div>
<div className="pt-space-lg flex items-center gap-space-md">
<Link href="/contact" className="inline-flex items-center gap-space-xs bg-secondary-container hover:bg-secondary-fixed-dim text-primary-container font-label-md text-label-md uppercase px-space-md py-3 rounded transition-all">
<span>Book Private Consultation</span>
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
</Link>
</div>
</div>

<div className="lg:col-span-6 bg-primary-container text-on-primary rounded p-space-lg lg:p-space-xl flex flex-col justify-between relative overflow-hidden shadow-sm">
<div className="relative z-10 flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary-container tracking-widest">Cartographic Coordinates</span>
<span className="font-label-sm text-label-sm text-on-primary-container font-mono">29.3956° N, 71.6833° E</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-surface">Bahawalpur Civil Lines Enclave</h3>
<p className="font-body-sm text-body-sm text-on-primary-container max-w-md">
              Positioned centrally along historic Club Road, adjacent to the historic high court and princely state residences.
            </p>
</div>

<div className="relative z-10 my-space-md w-full h-56 rounded overflow-hidden shadow-inner bg-primary" data-location="Bahawal Gymkhana Club, Club Road, Bahawalpur, Pakistan" style={{}}>
<div className="w-full h-full bg-cover bg-center" data-alt="Stylized sepia vintage aerial map overview of Bahawal Gymkhana Club on Club Road Bahawalpur with marked tennis courts, lush lawn perimeter, and entry gates." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgkj_WgKOrdmZSIirG-mtmlmQTHdJziO150dM4_G9BYWMqIf3DONRtDTPUHiGSsVnMqfSz8PVyIBlzjxpboeRVwJwafOyGZ0Z3ByNXoleJbFA-BQVG8H1oMuJNAvSXdFhdmtzoWkrm2ZWZr11BkWjh9OMkPlQI2PJCXWe8vciALvDPV0fYWro0XmnvXc53HzJ1TsPK3CwFthnMuxC5bczULjwrBRLPsD51ZQGmHtBSNfGYVt0t7JdOdw')"}}>
<div className="w-full h-full bg-primary/40 backdrop-blur-[1px] flex flex-col items-center justify-center p-space-md text-center">
<div className="w-12 h-12 rounded-full bg-secondary-container text-primary-container flex items-center justify-center shadow-lg mb-2">
<span className="material-symbols-outlined text-[24px]">location_on</span>
</div>
<span className="font-headline-sm text-headline-sm text-surface drop-shadow-sm">Bahawal Gymkhana</span>
<span className="font-label-caps text-label-caps uppercase text-secondary-container mt-1">Club Road • Model Town A</span>
</div>
</div>
</div>
<div className="relative z-10 flex items-center justify-between pt-space-xs">
<a className="inline-flex items-center gap-space-xs bg-secondary-container hover:bg-secondary-fixed-dim text-primary-container font-label-md text-label-md uppercase px-space-md py-2.5 rounded transition-all duration-200" href="https://maps.google.com/?q=Bahawal+Gymkhana+Club+Bahawalpur" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">directions</span>
<span>Get Driving Directions</span>
</a>
<span className="font-label-sm text-label-sm text-on-primary-container">Valet Parking Available</span>
</div>
</div>
</div>
</div>
</section></Reveal>
</div>
    </>
  );
}
