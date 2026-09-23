"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const GALLERY_ITEMS: { title: string; src: string }[] = [
  { title: "Golden Hour over the Central Lawn & Veranda", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1F_NgJ1zG5Lu1fQhzRmpQa1u43V-aCNv4DztAMHS37RUNdkIsl1Og0NK3dtwrvDDDCN4bZ-89tujWKE-U3bUpc4iDToOTKRK5TUOl2PfE3kASA3VIzJRvayPs3kQapgu_u0xr4l14Hgsk0IaE2-oSe5C4CbwcVmTW2ILzPDla-bhECKjLJSU9QA2TLCgWt1QNPsxCJxIOoZJdJNCk00X1p4z9j-8wxIsIsJ98_aMb-e5mE4W2Ge-GSw" },
  { title: "Men's Singles Clay Court Championship Finals", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt_y6vw1vg2Rsg2jyVusKSWPvcp6-y-2g4kJkfdy4xCw4F2qDlRB_4Ww4rgVkEFOpXVf4hYMMPvVBekoetwInul-7ATcdPgnWikRuS0WF6SZ7JTBLeXWZg8wMiQ16zAWyvP3mTDx5HLlj5YdaANhn6ttf4mi43V9ynKOYfZVaK13gqbJ01nUo6ykKtXVNVvkJXdLRzLzkphHQqfq75eLc0gB3J0-wooLzNQBgyZ-mSMXFLGkvM48biHw" },
  { title: "The Heritage Library Corner", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3nndJA4-6wTRPxTIAkG-hbtmdRW0SNyWYvbP2tWCDhFLHzt_bhZOzOLgTt5VHCYNCtRtd562Q2RlfGBXeqV4pozu5L4jHbrij7w9iGr3cuu87idqXTPHybn8eUcGeS0jINta1MfZ0vwy2pW985Z_bpyPpGu_n7_EoAanVdNQjGkNgz9rEMegGCn6yUJBh2SIkGD9OPm5y20jhTYN2wHC3K2RTPa8ag_FEYcY_cszLqyzVrdiZuDj2BQ" },
  { title: "The Vintage Snooker Saloon", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBNRBAVeWAPY4uyBQ8XQtXzo8FynKXYD9uBkzZtqfm2TdpMshf7CO_NObquP1sg66LPQQ_VW3Yu-pYl2_Le8ucscJqnkq_JSyRe_vDkNvVB4_HCEAfbTNKWrKfpOzYkekmlUs-IBZTTANR7U5M7in2TyFKEALAenrvsljFjdtxPOFhf4bRUXWLYYbzaMtMGRnz7qsRRXWYoFZM3nZIgY9udF168Qj5eRJU6YjyQp1S8fnc02g1uUsBzg" },
  { title: "Annual Founders' Gala Dinner", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn4zKntzSpi2hkTzF53hvMq0L0PyR8AEJ4wYVL9S31ybfjx3HIN__EUAfbrsDbrpPGn6zm68FZeiPTPFgtoB84090uNqsQLNYpyQaIjwxQlqFsKCLGZwWTIACVpbHkHgmZpA5b2VxClwhkcdCHiUwU8AFl-0lPAHOH1RmoOXdopLsijXXqAKJsz1cYTjK8R344pPrX9iPSme0msihPB7BW6LmMKBLIZMfCoyIdEsyWnJYuvvpwKhhEnQ" },
  { title: "Morning Swim in the Olympic Pool", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsDFL-uQfFxPdeMjRLhWai5ANb39BWfB4gALmkghw1GsDp_gzxJsIyr9BHtHimDpsbRhmwPtITTbMefhy4GwPTKm7Ao2GvgPt5wHktrnFP9DdgcDsy0__vSNhBZQTe1leFfmMV_LWhWW6CM_sIhBCwDGPmiJI6tm4YQBUrQGB0TgEGRgMkw1ZYZsXyuDPbvjUBrJGLxgiT5Du8ST6onb51E767xzHOtraq0wez-hUX2T_LD1Y6DEav_Q" },
  { title: "Afternoon High Tea on the West Portico", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz2Cvw0Cw3G1HJdJXywdQ6p1Y3TgrddjklgyZBu-p3eqHgcSz5yWqkBd21leaXRaGgyjkQtWEVmwGZXJONmHqZFXeIzetbPFM7-6y_g8j1l3_uQnzu-CJVE4RHbNiSEcYL-WO90ipTsDUpips4irLugWYPK_E0nLA3WrriMlFtNDC6KPVmme2-13YuILsUNNfCykAMt4UJC5k4z13CjQNmrP953ErA-1yiwJehf21JrgkCNE6FC54AFw" },
  { title: "Squash Open Semi-Finals", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcf0yfyTY_hsx0G_ax7SvBdFuLCJELRHGtSiX6Z04t6dbEvi1e00vg2wp-S9AboFibKu_Uj3SOTWTAEjTf444We2waeyjjRPKQp5us9h8imatRemxeczPV5-2oUl4Y79Lh3CLkowcUVMxpV1mM9_H8FQf7nF8gpboTgyIYzbskgQcJjLJ7pdjFUPAeVSwlj50etDCpEdpEx3esLmSwJADWgdcmw7FyxTwB1fBkzqhyPBjbhDFXhGCWPQ" },
  { title: "The Humidor & Cigar Lounge", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeCSAY6hCvTUzz94XF6jO2ItK1QmD8basqbYeu_-WDTfcx4FQKMtYiOFkY3Lc_mcGOCQT8tmPArfFaOV5qgMDbpPpuoL9kf-sYZ8SHiBYdiWpNY0qb2qitBzxg06BGMq522MqRiQs6d2Ugo0k-jXeGLAW04B2bexZkHwgxPWp_RHP-56WhLM6Q43S7MVBrIitV32VEMjwzkgLyaiCPP5mJrDRaM1ExDUdy_iLvnMiY_a13L44XozyM8w" }
];

export default function GalleryContent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);
  const [archiveStatus, setArchiveStatus] = useState<
    "idle" | "loading" | "sent" | "error"
  >("idle");

  async function handleArchiveSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setArchiveStatus("loading");
    const form = e.currentTarget;
    const contributorName = (
      form.elements.namedItem("contributorName") as HTMLInputElement
    ).value;
    const era = (form.elements.namedItem("era") as HTMLInputElement).value;
    const description = (
      form.elements.namedItem("description") as HTMLTextAreaElement
    ).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contributorName,
          email: "archive@bahawalgymkhana.pk",
          phone: "",
          subject: `Archive Submission: ${era || "Undated"}`,
          message: description,
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setArchiveStatus("sent");
        form.reset();
        setTimeout(() => setArchiveModalOpen(false), 1500);
      } else {
        setArchiveStatus("error");
      }
    } catch {
      setArchiveStatus("error");
    }
  }

  return (
    <>
<div className="flex flex-col w-full">

<Reveal><section className="w-full bg-surface-container-low px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl">
<div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
<div className="max-w-3xl flex flex-col gap-space-sm">
<div className="inline-flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
          Visual Archives &amp; Living Chronicles
        </div>
<h1 className="font-headline-lg text-headline-lg text-primary leading-tight tracking-tight">
          Life at Bahawal Gymkhana
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Moments of athletic triumph, timeless colonial architecture, and cherished evenings under the Bahawalpur sky. Captured across seventy years of sporting chivalry.
        </p>
</div>

<div className="bg-surface-container rounded-lg p-space-md flex items-center gap-space-lg shadow-sm">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary leading-none">1,240+</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Archived Frames</span>
</div>
<div className="w-px h-8 bg-surface-variant"></div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-secondary leading-none">1954</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">First Ledger</span>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface px-margin-mobile md:px-margin-tablet lg:px-margin pt-space-lg pb-space-md">
<div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">

<div className="flex flex-wrap items-center gap-space-xs" id="gallery-filter-bar">
<button onClick={() => setActiveFilter("all")} className={activeFilter === "all" ? "filter-btn bg-secondary-container text-primary-container px-space-md py-2 rounded font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all duration-150" : "filter-btn bg-surface-container-low text-primary-container hover:bg-surface-container px-space-md py-2 rounded font-label-md text-label-md uppercase tracking-wider transition-all duration-150"} type="button">
          All Moments
        </button>
<button onClick={() => setActiveFilter("facilities")} className={activeFilter === "facilities" ? "filter-btn bg-secondary-container text-primary-container px-space-md py-2 rounded font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all duration-150" : "filter-btn bg-surface-container-low text-primary-container hover:bg-surface-container px-space-md py-2 rounded font-label-md text-label-md uppercase tracking-wider transition-all duration-150"} type="button">
          Championship Facilities
        </button>
<button onClick={() => setActiveFilter("heritage")} className={activeFilter === "heritage" ? "filter-btn bg-secondary-container text-primary-container px-space-md py-2 rounded font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all duration-150" : "filter-btn bg-surface-container-low text-primary-container hover:bg-surface-container px-space-md py-2 rounded font-label-md text-label-md uppercase tracking-wider transition-all duration-150"} type="button">
          Clubhouse &amp; Heritage
        </button>
<button onClick={() => setActiveFilter("social")} className={activeFilter === "social" ? "filter-btn bg-secondary-container text-primary-container px-space-md py-2 rounded font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all duration-150" : "filter-btn bg-surface-container-low text-primary-container hover:bg-surface-container px-space-md py-2 rounded font-label-md text-label-md uppercase tracking-wider transition-all duration-150"} type="button">
          Social &amp; Events
        </button>
<button onClick={() => setActiveFilter("veranda")} className={activeFilter === "veranda" ? "filter-btn bg-secondary-container text-primary-container px-space-md py-2 rounded font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all duration-150" : "filter-btn bg-surface-container-low text-primary-container hover:bg-surface-container px-space-md py-2 rounded font-label-md text-label-md uppercase tracking-wider transition-all duration-150"} type="button">
          Lawn &amp; Veranda
        </button>
</div>

<div className="hidden sm:flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">tune</span>
<span>Displaying Curated Curatorial Selection (Autumn/Winter 2024–2025)</span>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface px-margin-mobile md:px-margin-tablet lg:px-margin py-space-md">
<div className="max-w-[1280px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="gallery-grid">

<article className={"gallery-card group lg:col-span-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col" + (activeFilter === "all" || activeFilter === "veranda" ? "" : " hidden")}>
<div className="relative w-full h-80 sm:h-96 overflow-hidden">
<img alt="Golden Hour over the Central Lawn &amp; Veranda" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="Wide panoramic evening twilight view of the historic colonial Bahawal Gymkhana clubhouse with lit arched verandas, a glowing clock tower, warm golden amber lanterns along sprawling pristine green lawns, and members lounging near floodlit red clay tennis courts under an orange sunset in Bahawalpur." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1F_NgJ1zG5Lu1fQhzRmpQa1u43V-aCNv4DztAMHS37RUNdkIsl1Og0NK3dtwrvDDDCN4bZ-89tujWKE-U3bUpc4iDToOTKRK5TUOl2PfE3kASA3VIzJRvayPs3kQapgu_u0xr4l14Hgsk0IaE2-oSe5C4CbwcVmTW2ILzPDla-bhECKjLJSU9QA2TLCgWt1QNPsxCJxIOoZJdJNCk00X1p4z9j-8wxIsIsJ98_aMb-e5mE4W2Ge-GSw"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-space-xs">
<span className="bg-primary text-secondary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded">
                Lawn &amp; Veranda
              </span>
<span className="bg-surface-container-low/90 backdrop-blur-md text-primary font-label-caps text-label-caps uppercase px-space-sm py-1 rounded">
                Featured Cover
              </span>
</div>
<button aria-label="Enlarge image" onClick={() => setLightboxIndex(0)} className="absolute bottom-4 right-4 w-10 h-10 rounded bg-surface/90 text-primary hover:bg-secondary-container hover:text-primary-container flex items-center justify-center transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</button>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow bg-surface-container-lowest">
<div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>Central North Lawns</span>
<span>November 2024</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                Golden Hour over the Central Lawn &amp; Veranda
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                As dusk falls over Bahawalpur, the 1950s arched colonnades illuminate in warm amber, framing active clay matches and lawn tea conversations.
              </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-caps text-label-caps uppercase">
<span>Plate No. 001/Veranda</span>
<span className="material-symbols-outlined text-[18px]">photo_camera</span>
</div>
</div>
</article>

<article className={"gallery-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col" + (activeFilter === "all" || activeFilter === "facilities" ? "" : " hidden")}>
<div className="relative w-full h-80 overflow-hidden">
<img alt="Men's Singles Clay Court Championship Finals" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="Intense tennis rally on a deep terracotta red clay court at Bahawal Gymkhana under evening floodlights, dynamic clay dust kicking up from a forehand stroke by an athlete dressed in crisp white heritage tennis kit, deep espresso shadows and warm lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt_y6vw1vg2Rsg2jyVusKSWPvcp6-y-2g4kJkfdy4xCw4F2qDlRB_4Ww4rgVkEFOpXVf4hYMMPvVBekoetwInul-7ATcdPgnWikRuS0WF6SZ7JTBLeXWZg8wMiQ16zAWyvP3mTDx5HLlj5YdaANhn6ttf4mi43V9ynKOYfZVaK13gqbJ01nUo6ykKtXVNVvkJXdLRzLzkphHQqfq75eLc0gB3J0-wooLzNQBgyZ-mSMXFLGkvM48biHw"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<span className="absolute top-4 left-4 bg-primary text-secondary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded">
              Championship Facilities
            </span>
<button aria-label="Enlarge image" onClick={() => setLightboxIndex(1)} className="absolute bottom-4 right-4 w-10 h-10 rounded bg-surface/90 text-primary hover:bg-secondary-container hover:text-primary-container flex items-center justify-center transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</button>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow bg-surface-container-lowest">
<div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>Clay Courts 1 &amp; 2</span>
<span>October 2024</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs font-semibold">
                Men's Singles Clay Court Finals
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                High-tension baseline rally during the 69th Annual Punjab Invitational Trophy, played on the freshly laid red clay grounds.
              </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-caps text-label-caps uppercase">
<span>Plate No. 014/Sports</span>
<span className="material-symbols-outlined text-[18px]">sports_tennis</span>
</div>
</div>
</article>

<article className={"gallery-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col" + (activeFilter === "all" || activeFilter === "heritage" ? "" : " hidden")}>
<div className="relative w-full h-80 overflow-hidden">
<img alt="The Heritage Library Corner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="Quiet vintage library corner inside Bahawal Gymkhana Club with floor-to-ceiling dark teak bookshelves, tufted brown leather wingback armchairs, warm brass reading lamps casting warm light over leather-bound legal and sporting ledgers from the 1950s." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3nndJA4-6wTRPxTIAkG-hbtmdRW0SNyWYvbP2tWCDhFLHzt_bhZOzOLgTt5VHCYNCtRtd562Q2RlfGBXeqV4pozu5L4jHbrij7w9iGr3cuu87idqXTPHybn8eUcGeS0jINta1MfZ0vwy2pW985Z_bpyPpGu_n7_EoAanVdNQjGkNgz9rEMegGCn6yUJBh2SIkGD9OPm5y20jhTYN2wHC3K2RTPa8ag_FEYcY_cszLqyzVrdiZuDj2BQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<span className="absolute top-4 left-4 bg-primary text-secondary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded">
              Clubhouse &amp; Heritage
            </span>
<button aria-label="Enlarge image" onClick={() => setLightboxIndex(2)} className="absolute bottom-4 right-4 w-10 h-10 rounded bg-surface/90 text-primary hover:bg-secondary-container hover:text-primary-container flex items-center justify-center transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</button>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow bg-surface-container-lowest">
<div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>East Wing Memorial Library</span>
<span>December 2024</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs font-semibold">
                The Heritage Library Corner
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Hand-carved Sheesham bookcases holding foundational club treaties, regional flora studies, and peaceful morning reading alcoves.
              </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-caps text-label-caps uppercase">
<span>Plate No. 042/Archival</span>
<span className="material-symbols-outlined text-[18px]">menu_book</span>
</div>
</div>
</article>

<article className={"gallery-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col" + (activeFilter === "all" || activeFilter === "facilities" ? "" : " hidden")}>
<div className="relative w-full h-80 overflow-hidden">
<img alt="The Vintage Snooker Saloon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="Interior of an authentic vintage gentlemen snooker room with two championship green baize slate tables, polished mahogany turned legs, brass hanging pendant lights illuminating cue balls, framed black and white portraits on paneled walls." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBNRBAVeWAPY4uyBQ8XQtXzo8FynKXYD9uBkzZtqfm2TdpMshf7CO_NObquP1sg66LPQQ_VW3Yu-pYl2_Le8ucscJqnkq_JSyRe_vDkNvVB4_HCEAfbTNKWrKfpOzYkekmlUs-IBZTTANR7U5M7in2TyFKEALAenrvsljFjdtxPOFhf4bRUXWLYYbzaMtMGRnz7qsRRXWYoFZM3nZIgY9udF168Qj5eRJU6YjyQp1S8fnc02g1uUsBzg"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<span className="absolute top-4 left-4 bg-primary text-secondary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded">
              Championship Facilities
            </span>
<button aria-label="Enlarge image" onClick={() => setLightboxIndex(3)} className="absolute bottom-4 right-4 w-10 h-10 rounded bg-surface/90 text-primary hover:bg-secondary-container hover:text-primary-container flex items-center justify-center transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</button>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow bg-surface-container-lowest">
<div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>Billiards Room 1</span>
<span>January 2025</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs font-semibold">
                The Vintage Snooker Saloon
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Pristine English baize tables, brass scoreboards, and the timeless click of ivory cue balls during the winter club ladder matches.
              </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-caps text-label-caps uppercase">
<span>Plate No. 028/Saloon</span>
<span className="material-symbols-outlined text-[18px]">sports_cricket</span>
</div>
</div>
</article>

<article className={"gallery-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col" + (activeFilter === "all" || activeFilter === "social" ? "" : " hidden")}>
<div className="relative w-full h-80 overflow-hidden">
<img alt="Annual Founders' Gala Dinner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="Lavish evening outdoor gala dinner on the manicured lawns of Bahawal Gymkhana Club, long banquet tables decorated with white linen, brass candelabras, floral arrangements, warm string fairy lights overhead, distinguished patrons in traditional formal Sherwanis and tuxedos." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn4zKntzSpi2hkTzF53hvMq0L0PyR8AEJ4wYVL9S31ybfjx3HIN__EUAfbrsDbrpPGn6zm68FZeiPTPFgtoB84090uNqsQLNYpyQaIjwxQlqFsKCLGZwWTIACVpbHkHgmZpA5b2VxClwhkcdCHiUwU8AFl-0lPAHOH1RmoOXdopLsijXXqAKJsz1cYTjK8R344pPrX9iPSme0msihPB7BW6LmMKBLIZMfCoyIdEsyWnJYuvvpwKhhEnQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<span className="absolute top-4 left-4 bg-primary text-secondary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded">
              Social &amp; Events
            </span>
<button aria-label="Enlarge image" onClick={() => setLightboxIndex(4)} className="absolute bottom-4 right-4 w-10 h-10 rounded bg-surface/90 text-primary hover:bg-secondary-container hover:text-primary-container flex items-center justify-center transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</button>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow bg-surface-container-lowest">
<div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>The Grand Lawn</span>
<span>November 2024</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs font-semibold">
                Annual Founders' Gala Dinner
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Celebrating 70 years of fellowship. Patron families gather under woven canopies for formal multi-course dinners and chamber orchestra.
              </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-caps text-label-caps uppercase">
<span>Plate No. 063/Gala</span>
<span className="material-symbols-outlined text-[18px]">celebration</span>
</div>
</div>
</article>

<article className={"gallery-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col" + (activeFilter === "all" || activeFilter === "facilities" ? "" : " hidden")}>
<div className="relative w-full h-80 overflow-hidden">
<img alt="Morning Swim in the Olympic Pool" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="Sunlit morning view of an outdoor 50-meter Olympic swimming pool with crystal clear turquoise water, surrounded by sandstone pavers, elegant poolside white lounge chairs, palm trees, and the arched classical club pavilion reflected in the calm water." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsDFL-uQfFxPdeMjRLhWai5ANb39BWfB4gALmkghw1GsDp_gzxJsIyr9BHtHimDpsbRhmwPtITTbMefhy4GwPTKm7Ao2GvgPt5wHktrnFP9DdgcDsy0__vSNhBZQTe1leFfmMV_LWhWW6CM_sIhBCwDGPmiJI6tm4YQBUrQGB0TgEGRgMkw1ZYZsXyuDPbvjUBrJGLxgiT5Du8ST6onb51E767xzHOtraq0wez-hUX2T_LD1Y6DEav_Q"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<span className="absolute top-4 left-4 bg-primary text-secondary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded">
              Championship Facilities
            </span>
<button aria-label="Enlarge image" onClick={() => setLightboxIndex(5)} className="absolute bottom-4 right-4 w-10 h-10 rounded bg-surface/90 text-primary hover:bg-secondary-container hover:text-primary-container flex items-center justify-center transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</button>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow bg-surface-container-lowest">
<div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>Aquatic Pavilion</span>
<span>August 2024</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs font-semibold">
                Morning Swim at the Aquatic Pavilion
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Crystal turquoise water mirroring the neoclassical arches. Member dawn swim regimens run daily from 06:00 under certified coaching supervision.
              </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-caps text-label-caps uppercase">
<span>Plate No. 019/Aquatics</span>
<span className="material-symbols-outlined text-[18px]">pool</span>
</div>
</div>
</article>

<article className={"gallery-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col" + (activeFilter === "all" || activeFilter === "veranda" ? "" : " hidden")}>
<div className="relative w-full h-80 overflow-hidden">
<img alt="Afternoon High Tea on the West Portico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="Afternoon high tea service set on a white wrought iron table on a shaded colonial veranda portico overlooking lush lawn gardens, three-tiered silver pastry stand with scones and finger sandwiches, steaming porcelain teapot, warm natural afternoon light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz2Cvw0Cw3G1HJdJXywdQ6p1Y3TgrddjklgyZBu-p3eqHgcSz5yWqkBd21leaXRaGgyjkQtWEVmwGZXJONmHqZFXeIzetbPFM7-6y_g8j1l3_uQnzu-CJVE4RHbNiSEcYL-WO90ipTsDUpips4irLugWYPK_E0nLA3WrriMlFtNDC6KPVmme2-13YuILsUNNfCykAMt4UJC5k4z13CjQNmrP953ErA-1yiwJehf21JrgkCNE6FC54AFw"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<span className="absolute top-4 left-4 bg-primary text-secondary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded">
              Lawn &amp; Veranda
            </span>
<button aria-label="Enlarge image" onClick={() => setLightboxIndex(6)} className="absolute bottom-4 right-4 w-10 h-10 rounded bg-surface/90 text-primary hover:bg-secondary-container hover:text-primary-container flex items-center justify-center transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</button>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow bg-surface-container-lowest">
<div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>Governor's Portico</span>
<span>September 2024</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs font-semibold">
                High Tea on the West Portico
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Traditional afternoon tea served with sterling silver service, Earl Grey infusions, clotted cream pastries, and uninterrupted desert breezes.
              </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-caps text-label-caps uppercase">
<span>Plate No. 055/Culinary</span>
<span className="material-symbols-outlined text-[18px]">local_cafe</span>
</div>
</div>
</article>

<article className={"gallery-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col" + (activeFilter === "all" || activeFilter === "facilities" ? "" : " hidden")}>
<div className="relative w-full h-80 overflow-hidden">
<img alt="Squash Open Semi-Finals" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="Fast-paced squash tournament action view through the transparent back glass wall of an international regulation squash court, spectators in tiered seating observing two players lunging for a drop shot on clean maple flooring under intense spotlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcf0yfyTY_hsx0G_ax7SvBdFuLCJELRHGtSiX6Z04t6dbEvi1e00vg2wp-S9AboFibKu_Uj3SOTWTAEjTf444We2waeyjjRPKQp5us9h8imatRemxeczPV5-2oUl4Y79Lh3CLkowcUVMxpV1mM9_H8FQf7nF8gpboTgyIYzbskgQcJjLJ7pdjFUPAeVSwlj50etDCpEdpEx3esLmSwJADWgdcmw7FyxTwB1fBkzqhyPBjbhDFXhGCWPQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<span className="absolute top-4 left-4 bg-primary text-secondary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded">
              Championship Facilities
            </span>
<button aria-label="Enlarge image" onClick={() => setLightboxIndex(7)} className="absolute bottom-4 right-4 w-10 h-10 rounded bg-surface/90 text-primary hover:bg-secondary-container hover:text-primary-container flex items-center justify-center transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</button>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow bg-surface-container-lowest">
<div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>Glass Courts 1 &amp; 2</span>
<span>December 2024</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs font-semibold">
                Divisional Squash Open Semi-Finals
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Electrifying five-game decider viewed through the rear glass gallery by veteran club players and junior academy prospects.
              </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-caps text-label-caps uppercase">
<span>Plate No. 033/Rackets</span>
<span className="material-symbols-outlined text-[18px]">sports_handball</span>
</div>
</div>
</article>

<article className={"gallery-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col" + (activeFilter === "all" || activeFilter === "heritage" ? "" : " hidden")}>
<div className="relative w-full h-80 overflow-hidden">
<img alt="The Humidor &amp; Cigar Lounge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="Intimate atmosphere of an opulent heritage cigar lounge with rich polished mahogany wood hearth, warm crackling embers, Spanish cedar humidors, deep oxblood leather Chesterfield couches, and quiet gentleman conversation in the evening glow." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeCSAY6hCvTUzz94XF6jO2ItK1QmD8basqbYeu_-WDTfcx4FQKMtYiOFkY3Lc_mcGOCQT8tmPArfFaOV5qgMDbpPpuoL9kf-sYZ8SHiBYdiWpNY0qb2qitBzxg06BGMq522MqRiQs6d2Ugo0k-jXeGLAW04B2bexZkHwgxPWp_RHP-56WhLM6Q43S7MVBrIitV32VEMjwzkgLyaiCPP5mJrDRaM1ExDUdy_iLvnMiY_a13L44XozyM8w"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<span className="absolute top-4 left-4 bg-primary text-secondary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded">
              Clubhouse &amp; Heritage
            </span>
<button aria-label="Enlarge image" onClick={() => setLightboxIndex(8)} className="absolute bottom-4 right-4 w-10 h-10 rounded bg-surface/90 text-primary hover:bg-secondary-container hover:text-primary-container flex items-center justify-center transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</button>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow bg-surface-container-lowest">
<div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
<span>The Governor's Hearth</span>
<span>January 2025</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-space-xs font-semibold">
                The Humidor &amp; Cigar Lounge
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Reserved for patrons and distinguished guests. Clad in natural cedar paneling with climate-monitored private locker reserves.
              </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-caps text-label-caps uppercase">
<span>Plate No. 071/Annex</span>
<span className="material-symbols-outlined text-[18px]">smoking_rooms</span>
</div>
</div>
</article>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface-container px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl my-space-lg">
<div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-space-lg text-center md:text-left">
<div className="flex flex-col gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary">70</span>
<span className="font-label-caps text-label-caps text-secondary uppercase">Years Continuous Play</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Founded in 1954 under princely civil patron charters.</p>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary">6</span>
<span className="font-label-caps text-label-caps text-secondary uppercase">Championship Courts</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">4 clay courts and 2 high-grade glass squash saloons.</p>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary">442</span>
<span className="font-label-caps text-label-caps text-secondary uppercase">Verified Reviews</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Honored with an uncompromised 4.4★ prestige ledger rating.</p>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary">18</span>
<span className="font-label-caps text-label-caps text-secondary uppercase">Annual Fixtures</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Inter-club tournaments, polo invitationals, and galas.</p>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface px-margin-mobile md:px-margin-tablet lg:px-margin pb-space-xl">
<div className="max-w-[1280px] mx-auto bg-primary text-on-primary rounded-xl p-space-lg md:p-space-xl shadow-lg relative overflow-hidden">

<div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-secondary-container/10 pointer-events-none blur-2xl"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="max-w-2xl flex flex-col gap-space-sm">
<div className="inline-flex items-center gap-space-xs text-secondary-container font-label-caps text-label-caps uppercase">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
            75th Anniversary Club Archive Project (1954–2029)
          </div>
<h2 className="font-headline-md text-headline-md text-surface tracking-tight">
            Do you possess historic club photographs from before 1980?
          </h2>
<p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
            The Executive Committee is presently digitizing rare 35mm prints, founding member tournament certificates, and veranda banquet portraits to preserve the princely heritage of Bahawalpur for generations to follow.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
<button onClick={() => setArchiveModalOpen(true)} className="bg-secondary-container hover:bg-secondary-fixed-dim text-primary-container font-label-md text-label-md uppercase px-space-lg py-3 rounded shadow-md transition-all text-center tracking-wider" type="button">
            Submit Archival Media
          </button>
<Link href="/contact" className="bg-transparent hover:bg-surface/10 text-surface text-center font-label-md text-label-md uppercase px-space-md py-3 rounded transition-colors">
            Contact Club Historian
          </Link>
</div>
</div>
</div>
</section></Reveal>

<div className={"fixed inset-0 z-50 bg-primary/95 backdrop-blur-md flex items-center justify-center p-space-md " + (lightboxIndex !== null ? "" : "hidden")}>
<div className="relative max-w-4xl w-full bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
<div className="relative w-full h-96 sm:h-[480px] bg-primary flex items-center justify-center overflow-hidden">
{lightboxIndex !== null && (
<img alt={GALLERY_ITEMS[lightboxIndex].title} className="w-full h-full object-cover" src={GALLERY_ITEMS[lightboxIndex].src}/>
)}
<button aria-label="Close modal" onClick={() => setLightboxIndex(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 text-surface hover:bg-secondary-container hover:text-primary-container flex items-center justify-center transition-colors shadow-lg" type="button">
<span className="material-symbols-outlined text-[24px]">close</span>
</button>
</div>
<div className="p-space-lg bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
<div>
<span className="bg-primary text-secondary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded">
            Archive
          </span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-2">
            {lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex].title : ""}
          </h3>
</div>
<div className="flex items-center gap-space-sm">
<button onClick={() => setLightboxIndex(null)} className="text-primary hover:text-secondary font-label-md text-label-md uppercase tracking-wider px-space-md py-2" type="button">
            Return to Gallery
          </button>
</div>
</div>
</div>
</div>

<div className={"fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm flex items-center justify-center p-space-md " + (archiveModalOpen ? "" : "hidden")}>
<div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg sm:p-space-xl shadow-2xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase">
<span className="material-symbols-outlined text-[20px]">upload_file</span>
          Archive Submissions
        </div>
<button onClick={() => setArchiveModalOpen(false)} className="text-on-surface-variant hover:text-primary" type="button">
<span className="material-symbols-outlined text-[24px]">close</span>
</button>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">Contribute Archival Media</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Share your family or club photographs. The Curatorial Committee scans and catalogs all original documents with certified archival care before prompt return.
        </p>
</div>
<form className="flex flex-col gap-space-md" onSubmit={handleArchiveSubmit}>
<div>
<label className="block font-label-sm text-label-sm text-primary uppercase font-bold mb-1">Patron / Contributor Name</label>
<input className="w-full px-space-md py-2.5 rounded bg-surface-container-low text-primary placeholder:text-outline text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary-container" name="contributorName" placeholder="e.g. Col. Tariq Abbasi" required type="text"/>
</div>
<div>
<label className="block font-label-sm text-label-sm text-primary uppercase font-bold mb-1">Estimated Era or Year</label>
<input className="w-full px-space-md py-2.5 rounded bg-surface-container-low text-primary placeholder:text-outline text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary-container" name="era" placeholder="e.g. 1968 Winter Tennis Invitational" type="text"/>
</div>
<div>
<label className="block font-label-sm text-label-sm text-primary uppercase font-bold mb-1">Description / Names in Photograph</label>
<textarea className="w-full px-space-md py-2 rounded bg-surface-container-low text-primary placeholder:text-outline text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary-container" name="description" placeholder="Provide any known member names, trophies, or contexts..." rows={3}></textarea>
</div>
<div className="bg-surface-container p-space-md rounded flex flex-col items-center justify-center text-center gap-1 cursor-pointer hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-secondary text-[32px]">cloud_upload</span>
<span className="font-label-md text-label-md text-primary">Drag photographic scan or click to browse</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">TIFF, JPEG, or PNG up to 25MB</span>
</div>
<div className="flex items-center justify-end gap-space-sm pt-space-xs">
<button onClick={() => setArchiveModalOpen(false)} className="px-space-md py-2 text-on-surface-variant hover:text-primary font-label-md text-label-md uppercase" type="button">
            Cancel
          </button>
<button disabled={archiveStatus === "loading"} className="bg-secondary-container hover:bg-secondary-fixed-dim text-primary-container font-label-md text-label-md uppercase px-space-lg py-2.5 rounded shadow disabled:opacity-60" type="submit">
            {archiveStatus === "loading" ? "Sending…" : "Transmit to Ledger"}
          </button>
</div>
{archiveStatus === "sent" && (
  <p className="text-center font-label-sm text-label-sm text-emerald-700">Submitted — thank you for contributing to the archive.</p>
)}
{archiveStatus === "error" && (
  <p className="text-center font-label-sm text-label-sm text-error">Something went wrong. Please try again.</p>
)}
</form>
</div>
</div>


</div>

    </>
  );
}
