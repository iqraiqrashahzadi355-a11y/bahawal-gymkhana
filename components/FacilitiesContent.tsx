"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Facility } from "@/lib/facilities";

export default function FacilitiesContent() {
  const [activeTab, setActiveTab] = useState("all");
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState(
    "Championship Tennis Courts"
  );
  const [bookingStatus, setBookingStatus] = useState<
    "idle" | "loading" | "sent" | "error"
  >("idle");

  function openBooking(facility: string) {
    setSelectedFacility(facility);
    setBookingStatus("idle");
    setModalOpen(true);
  }

  const [facilitiesLoading, setFacilitiesLoading] = useState(true);

  useEffect(() => {
    fetch("/api/facilities")
      .then((res) => res.json())
      .then((json) => setFacilities(json.facilities))
      .catch(() => setFacilities([]))
      .finally(() => setFacilitiesLoading(false));
  }, []);

  async function handleBookingSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBookingStatus("loading");
    const form = e.currentTarget;
    const membershipId = (
      form.elements.namedItem("membershipId") as HTMLInputElement
    ).value;
    const preferredTime = (
      form.elements.namedItem("preferredTime") as HTMLInputElement
    ).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `Member ${membershipId}`,
          email: "member@bahawalgymkhana.pk",
          phone: "",
          subject: `Facility Reservation: ${selectedFacility}`,
          message: `Membership ID: ${membershipId}\nPreferred time: ${preferredTime}\nFacility: ${selectedFacility}`,
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setBookingStatus("sent");
        setTimeout(() => setModalOpen(false), 1500);
      } else {
        setBookingStatus("error");
      }
    } catch {
      setBookingStatus("error");
    }
  }

  return (
    <>
<div className="flex flex-col w-full">

<div className={"fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-sm transition-opacity duration-300 " + (modalOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
<div className={"bg-surface rounded-xl max-w-lg w-full p-space-lg shadow-xl transition-transform duration-300 " + (modalOpen ? "scale-100" : "scale-95")}>
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container">calendar_month</span>
<span className="font-headline-sm text-headline-sm text-primary">Reserve Facility</span>
</div>
<button onClick={() => setModalOpen(false)} className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-variant transition-colors" type="button">
<span className="material-symbols-outlined text-sm">close</span>
</button>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Exclusive member booking ledger. Confirm court, lane, or table slots up to 72 hours in advance.</p>
<form className="space-y-space-sm" onSubmit={handleBookingSubmit}>
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Select Facility Ground</label>
<select className="w-full bg-surface-container-lowest px-3 py-2 text-primary font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-container shadow-sm" value={selectedFacility} onChange={(e) => setSelectedFacility(e.target.value)}>
{facilities.map((f) => (
  <option key={f.id}>{f.title}</option>
))}
</select>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Membership ID</label>
<input className="w-full bg-surface-container-lowest px-3 py-2 text-primary font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-container shadow-sm" name="membershipId" placeholder="BG-XXXX" required type="text"/>
</div>
<div>
<label className="block font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Preferred Time</label>
<input className="w-full bg-surface-container-lowest px-3 py-2 text-primary font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-container shadow-sm" name="preferredTime" required type="time" defaultValue="17:00"/>
</div>
</div>
<div className="pt-space-sm flex gap-space-sm">
<button onClick={() => setModalOpen(false)} className="flex-1 py-2 rounded-lg bg-surface-container text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface-variant transition-colors" type="button">Cancel</button>
<button disabled={bookingStatus === "loading"} className="flex-1 py-2 rounded-lg bg-secondary-container text-primary-container font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all shadow-md disabled:opacity-60" type="submit">{bookingStatus === "loading" ? "Sending…" : "Confirm Slot"}</button>
</div>
{bookingStatus === "sent" && (
  <p className="text-center font-label-sm text-label-sm text-emerald-700 pt-1">
    Reservation request sent — the front desk will confirm shortly.
  </p>
)}
{bookingStatus === "error" && (
  <p className="text-center font-label-sm text-label-sm text-error pt-1">
    Something went wrong. Please try again.
  </p>
)}
</form>
</div>
</div>

<Reveal><section className="w-full bg-gradient-to-b from-surface-container-low via-surface-container-low to-surface py-space-xl">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-space-xs bg-surface-container px-3 py-1 rounded-full mb-space-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-caps text-label-caps text-secondary uppercase">Sanctuary of Sporting Heritage • Established 1954</span>
</div>
<h1 className="font-display-hero text-display-hero text-primary tracking-tight leading-none mb-space-sm">
            World-Class Sports &amp; Leisure Facilities
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Engineered for competitive athletics, curated for relaxed social distinction. Available exclusively to members and affiliated guests across 45 private acres of Bahawalpur royal sanctuary.
          </p>
</div>

<div className="flex items-center gap-2 bg-surface-container-lowest p-1.5 rounded-xl shadow-md overflow-x-auto self-start lg:self-end">
<button onClick={() => setActiveTab("all")} className={activeTab === "all" ? "facility-tab bg-primary text-surface px-4 py-2 rounded-lg font-label-md text-label-md transition-all" : "facility-tab bg-transparent text-on-surface-variant hover:text-primary px-4 py-2 rounded-lg font-label-md text-label-md transition-all"}>All Grounds</button>
<button onClick={() => setActiveTab("sports")} className={activeTab === "sports" ? "facility-tab bg-primary text-surface px-4 py-2 rounded-lg font-label-md text-label-md transition-all" : "facility-tab bg-transparent text-on-surface-variant hover:text-primary px-4 py-2 rounded-lg font-label-md text-label-md transition-all"}>Athletic Courts</button>
<button onClick={() => setActiveTab("leisure")} className={activeTab === "leisure" ? "facility-tab bg-primary text-surface px-4 py-2 rounded-lg font-label-md text-label-md transition-all" : "facility-tab bg-transparent text-on-surface-variant hover:text-primary px-4 py-2 rounded-lg font-label-md text-label-md transition-all"}>Social Salons</button>
<button onClick={() => setActiveTab("outdoors")} className={activeTab === "outdoors" ? "facility-tab bg-primary text-surface px-4 py-2 rounded-lg font-label-md text-label-md transition-all" : "facility-tab bg-transparent text-on-surface-variant hover:text-primary px-4 py-2 rounded-lg font-label-md text-label-md transition-all"}>Lawn &amp; Aquatic</button>
</div>
</div>

<div className="mt-space-lg pt-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-md">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-600"></span> 8 Active Facilities Open Today</span>
<span className="hidden sm:inline">•</span>
<span className="hidden sm:inline">Certified Imperial Standards</span>
</div>
<div className="flex items-center gap-1 font-label-caps uppercase text-secondary">
<span>Punjab Lawn &amp; Racquet Guild No. 12</span>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full py-space-xl bg-surface">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="facilities-grid">

{facilitiesLoading &&
  Array.from({ length: 6 }).map((_, i) => (
    <div
      key={`skeleton-${i}`}
      className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden animate-pulse"
    >
      <div className="h-64 bg-surface-container-high"></div>
      <div className="p-space-lg flex flex-col gap-space-sm">
        <div className="h-3 w-1/3 bg-surface-container-high rounded"></div>
        <div className="h-5 w-2/3 bg-surface-container-high rounded"></div>
        <div className="h-3 w-full bg-surface-container-high rounded"></div>
        <div className="h-3 w-5/6 bg-surface-container-high rounded"></div>
        <div className="h-9 w-1/2 bg-surface-container-high rounded-lg mt-space-xs"></div>
      </div>
    </div>
  ))}

{!facilitiesLoading &&
  facilities
  .filter((f) => activeTab === "all" || f.category === activeTab)
  .map((f) => (
    <div
      key={f.id}
      className="facility-card flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={f.image}
          alt={f.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-primary text-secondary-container font-label-caps text-label-caps px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
            {f.badges[0]}
          </span>
          <span className="bg-secondary-container text-primary-container font-label-caps text-label-caps px-2 py-1 rounded font-bold uppercase">
            {f.badges[1]}
          </span>
        </div>
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-surface font-label-sm text-label-sm">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-secondary-container">schedule</span>
            {f.schedule}
          </span>
          <span className="area-tag-badge px-2 py-0.5 rounded text-white">{f.areaTag}</span>
        </div>
      </div>
      <div className="p-space-lg flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              {f.division}
            </span>
            <div className="flex items-center gap-1 text-secondary">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="font-label-sm text-label-sm font-bold text-primary">{f.rating}</span>
            </div>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight mb-space-xs">
            {f.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
            {f.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-space-md">
            {f.tags.map((tag) => (
              <span key={tag} className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="pt-space-sm flex items-center justify-between">
          <button
            onClick={() => openBooking(f.ctaFacility)}
            type="button"
            className="inline-flex items-center gap-1.5 bg-secondary-container text-primary-container px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all shadow-sm"
          >
            {f.ctaLabel}
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{f.footerLabel}</span>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-7 p-space-lg md:p-space-xl flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1 rounded-full mb-space-md">
<span className="material-symbols-outlined text-secondary text-[18px]">sports_tennis</span>
<span className="font-label-caps text-label-caps text-secondary uppercase">Signature Heritage Arena</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-space-sm">
                The Tennis Pavilion &amp; Annual Invitational
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                For seven decades, the red clay courts of Bahawal Gymkhana have stood as the epicenter of southern Punjab's tennis legacy. Hand-dressed daily using crushed terracotta silt and calibrated saline rolling, each court delivers the authentic sliding bite demanded by discerning players.
              </p>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm mb-space-lg">
<div className="bg-surface-container p-3 rounded-lg">
<span className="block font-label-caps text-label-caps text-secondary uppercase">Court Surface</span>
<span className="font-headline-sm text-headline-sm text-primary">Red Clay</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant mt-0.5">Slow pace &amp; high spin</span>
</div>
<div className="bg-surface-container p-3 rounded-lg">
<span className="block font-label-caps text-label-caps text-secondary uppercase">Illumination</span>
<span className="font-headline-sm text-headline-sm text-primary">1,200 LUX</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant mt-0.5">Zero glare stadium LEDs</span>
</div>
<div className="bg-surface-container p-3 rounded-lg">
<span className="block font-label-caps text-label-caps text-secondary uppercase">Pro Shop</span>
<span className="font-headline-sm text-headline-sm text-primary">Wilson Pro</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant mt-0.5">Custom stringing &amp; gear</span>
</div>
<div className="bg-surface-container p-3 rounded-lg">
<span className="block font-label-caps text-label-caps text-secondary uppercase">Junior Academy</span>
<span className="font-headline-sm text-headline-sm text-primary">Ages 6-18</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant mt-0.5">ATP Level-2 Trainers</span>
</div>
</div>

<div className="bg-surface-container-high/60 p-space-md rounded-lg mb-space-lg">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">military_tech</span>
<div>
<h4 className="font-title-md text-title-md text-primary mb-1">The 71st Bahawal Invitational Cup</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Registrations for the winter championship circuit open on the first Monday of November. Exclusive entry draw for members and affiliate provincial delegates.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-sm">
<button onClick={() => openBooking("Championship Tennis Courts")} type="button" className="inline-flex items-center justify-center gap-2 bg-secondary-container text-primary-container font-label-md text-label-md uppercase px-space-lg py-3 rounded-lg hover:bg-secondary-fixed-dim transition-all shadow-[0_4px_12px_rgba(242,169,59,0.35)]">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Book a Facility Session
              </button>
<a href="/Bahawal-Gymkhana-Prospectus.pdf" download className="inline-flex items-center justify-center gap-1.5 px-space-md py-3 rounded-lg bg-transparent text-primary hover:bg-surface-container font-label-md text-label-md uppercase transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                Download Academy Prospectus
              </a>
</div>
</div>

<div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
<div className="absolute inset-0 w-full h-full bg-cover bg-center" data-alt="Close up architectural detail of colonial tennis spectator pavilion at Bahawal Gymkhana with dark wood rafters, pristine red clay tennis court in foreground with member players in classic whites, bright sunlit Punjab afternoon." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJHhn0TBu0P95YeD7WTRw3-E6VYxbv8QHdfIeOmC6bOWNYUTcZBF9QiPFCv2svYO_gLAxN6gbHN_7R2Sube1Z5eWCv0T2DdTVMt3OJU5B3vBBz99faevLSoaLBswaxfyhqa2uiUhpwS-pjvahRV-aOsvWjZOUqnnn8VBLpZo1DU1KjeufA9y84uXVbVWmkFKUUv-31PvtX5DNHLRyrLjFOmUXUd-1L8fPKNDjf-qrT13zCUti352NCqw')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 bg-surface/95 backdrop-blur-md p-space-md rounded-xl shadow-lg">
<div className="flex items-center justify-between mb-2">
<span className="font-label-caps text-label-caps text-secondary uppercase">Court Status Right Now</span>
<span className="inline-flex items-center gap-1 text-emerald-700 font-label-sm text-label-sm font-bold">
<span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span> Clay Courts Rolling Complete
                </span>
</div>
<div className="flex items-center justify-between text-primary font-body-sm text-body-sm">
<span>Clay Moisture Index: <strong>Optimal 18%</strong></span>
<span>Next Slot: <strong>04:30 PM</strong></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section></Reveal>

<Reveal><section className="w-full py-space-xl bg-surface">
<div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Etiquette &amp; Standards</span>
<h2 className="font-headline-md text-headline-md text-primary mt-1">Ground Regulations &amp; Member Privileges</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mt-2 md:mt-0">
          Upholding the decorum and athletic integrity of the Gymkhana since 1954. All members and verified guests are requested to honor the house codes.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[22px]">apparel</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-1">Strict Tennis &amp; Squash Whites</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Predominantly white attire is strictly required on all red clay courts and squash arenas. Non-marking gum rubber soles are mandatory.</p>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[22px]">badge</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-1">Guest Escort Policy</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Members may introduce up to three accompanying athletic guests per session. Guest facility dues are billed directly to the patron's quarterly ledger.</p>
</div>

<div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[22px]">volume_off</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-1">Acoustic Decorum</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Mobile devices must remain muted across all facilities, specifically within the Grand Snooker Lounge, Library, and Verandas.</p>
</div>
</div>
</div>
</section></Reveal>
</div>

    </>
  );
}
