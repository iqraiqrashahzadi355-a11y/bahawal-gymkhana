"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FacilitiesContent() {
  const [activeTab, setActiveTab] = useState("all");
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
<option>Championship Tennis Courts</option>
<option>International Squash Complex</option>
<option>Semi-Olympic Swimming Pool</option>
<option>Modern Strength &amp; Conditioning Gym</option>
<option>The Grand Snooker Lounge</option>
<option>The Churchill Cigar &amp; Cards Room</option>
<option>Heritage Library &amp; Reading Room</option>
<option>Sprawling Verandas &amp; Evening Lawn</option>
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

<div className={"facility-card flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group" + (activeTab === "all" || activeTab === "sports" ? "" : " hidden")}>
<div className="relative h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Vibrant red clay tennis courts at Bahawal Gymkhana at golden hour dusk with crisp white lines, dark espresso pavilion benches, surrounded by date palms and illuminated court floodlights under deep ambient Punjab sunset." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC5T7o6-PikT2wXw1tCpM-fnQQvzu80WE2y_dlTUWYB-cPRvYiUfGZK47LwGJaapxNkAOI3cF2d3aqq9wf6nlhRkP67oYcKUSiui04cUsLLFEcWLZL_aS7fEZKWZRbQjjjkqT1DMNtjJ7XJ-hyy48hmPqjnmrStHw2qaaohvIXF-sG-cgEoki0hINcd3Kzs54cxJA9o9hFYlq4Rf2oXv03eK88_q-XROJOE_71iSjAoryVlff2OuDp8g')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-primary text-secondary-container font-label-caps text-label-caps px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">Court 01-05</span>
<span className="bg-secondary-container text-primary-container font-label-caps text-label-caps px-2 py-1 rounded font-bold uppercase">ATP Certified</span>
</div>
<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-surface font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary-container">schedule</span> 06:00 AM – 10:30 PM</span>
<span className="bg-surface-container-lowest/20 backdrop-blur-sm px-2 py-0.5 rounded text-white">Red Clay &amp; Hardcourt</span>
</div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Racquet Sports Division</span>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm font-bold text-primary">4.9</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight mb-space-xs">Championship Tennis Courts</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                Three championship red clay courts crafted with imported crushed brick surfacing, complemented by two tournament-grade floodlit synthetic courts. Host to the prestigious annual Bahawal Cup.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">3 Red Clay Courts</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">2 Synthetic Hardcourts</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">ATP Coaching</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Night Illumination</span>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<button onClick={() => openBooking("Championship Tennis Courts")} type="button" className="inline-flex items-center gap-1.5 bg-secondary-container text-primary-container px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all shadow-sm">
                Reserve Court
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Active League</span>
</div>
</div>
</div>

<div className={"facility-card flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group" + (activeTab === "all" || activeTab === "sports" ? "" : " hidden")}>
<div className="relative h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Interior of world-class professional squash court with polished glass-back wall, maple sprung wood flooring, warm espresso gallery seating, and dramatic crisp overhead stadium lighting." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiz9mCloAsoclEnORTtzA3c--WLe3qTXwRKvrgSsc2wR1ThpWaLXMqGVaDlovWLaGuervRePTamgsT6oaw445EYYK76TlHaf3qY0cDiWQq9ZucsRVP6A5i5HThlSl0FnJYSW68B7bTjEdkLybapt7-wwG0RPtcpdqHZ5yG5L1_CAvP_5FblZLOiAulK_ze_7w0ZIevSFqYCY4b06EAikJwTAVRWNSFcB3OXLUK-BgLyVpdxwV31f1_Cw')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-primary text-secondary-container font-label-caps text-label-caps px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">Courts 1 – 3</span>
<span className="bg-surface-container-lowest/90 text-primary font-label-caps text-label-caps px-2 py-1 rounded font-bold uppercase">WSF Standard</span>
</div>
<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-surface font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary-container">schedule</span> 06:30 AM – 10:00 PM</span>
<span className="bg-surface-container-lowest/20 backdrop-blur-sm px-2 py-0.5 rounded text-white">Full AC Arena</span>
</div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Racquet Complex</span>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm font-bold text-primary">4.8</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight mb-space-xs">International Squash Complex</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                Three glass-back WSF regulation championship squash courts featuring calibrated sprung maple floors, climate-controlled ambient temperature, and an elevated teak viewing balcony.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Glass-Back Walls</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Spectator Balcony</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Ball Machine Fleet</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Sprung Hardwood</span>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<button onClick={() => openBooking("International Squash Complex")} type="button" className="inline-flex items-center gap-1.5 bg-secondary-container text-primary-container px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all shadow-sm">
                Reserve Court
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Locker Included</span>
</div>
</div>
</div>

<div className={"facility-card flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group" + (activeTab === "all" || activeTab === "outdoors" ? "" : " hidden")}>
<div className="relative h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Semi-Olympic 25-meter outdoor resort swimming pool at luxury club, with crystal turquoise water, travertine stone pool deck, teak sun loungers with mustard yellow umbrellas, surrounded by manicured colonial architecture." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKwBtfAHcbbZqh5sMUqgfccV_qbLBVOat7rfMhLDooiRYSEZm4WRMuvoZHAknZG3dEjwSGdI39cDCWMxLgehODHkOWkmn9qSHq79umI2mHpiFIESojmQIVPlPone0CXknExk99pGu1ZvkaHuzsGcwoqcYGL_TgNWnxfz63_pWHnVlCiuoEtWyFpwW7siBfV-mBkRcPRYu6puhE8uwLZtIdhWaFaw3IciSolvm7fdPPqj2T46krvT4__g')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-primary text-secondary-container font-label-caps text-label-caps px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">25-Meter Aquatic</span>
<span className="bg-secondary-container text-primary-container font-label-caps text-label-caps px-2 py-1 rounded font-bold uppercase">Heated / Cooled</span>
</div>
<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-surface font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary-container">schedule</span> 06:00 AM – 09:30 PM</span>
<span className="bg-surface-container-lowest/20 backdrop-blur-sm px-2 py-0.5 rounded text-white">Ladies Hours Daily</span>
</div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Aquatics &amp; Wellness</span>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm font-bold text-primary">4.9</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight mb-space-xs">Semi-Olympic Swimming Pool</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                Heated in winter and chilled during Punjab summers, this 6-lane, 25-meter pool is surrounded by private poolside cabanas, dedicated ladies-only swimming intervals, and an organic juice bar.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">25m 6-Lane Pool</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Climate Regulated</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Juice Bar</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Private Cabanas</span>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<button onClick={() => openBooking("Semi-Olympic Swimming Pool")} type="button" className="inline-flex items-center gap-1.5 bg-secondary-container text-primary-container px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all shadow-sm">
                Reserve Lane
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Lifeguard On Duty</span>
</div>
</div>
</div>

<div className={"facility-card flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group" + (activeTab === "all" || activeTab === "sports" ? "" : " hidden")}>
<div className="relative h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="High-end luxury health club gym interior with dark espresso teak accents, state-of-the-art matte black cardio equipment, free weights dumbbells, large mirror walls, and warm architectural lighting." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBU2ko5eZPO8Ydbq7oZjGPGaWEfYLSRF6nZadRfGr3tzx87dq8ot5KjgPo9mzF9AkY3BBAxZFtdNlr3yEvrvqrVpNtAom1puMGrSino_V8zapeDSMGBedYy_RHShV45GG7VuWGPRCK4ckfGjO3DvQInvrD4SuzZ9yMDUw3bw2m8V5-36gug49GlLRVnbO20FPrWWxOQ7qdR3FHsN6RyraiL_UDTjZMCGUd1fTCd8wnHebXn0mn28y-Opw')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-primary text-secondary-container font-label-caps text-label-caps px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">Technogym Suite</span>
<span className="bg-surface-container-lowest/90 text-primary font-label-caps text-label-caps px-2 py-1 rounded font-bold uppercase">Performance</span>
</div>
<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-surface font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary-container">schedule</span> 05:30 AM – 11:00 PM</span>
<span className="bg-surface-container-lowest/20 backdrop-blur-sm px-2 py-0.5 rounded text-white">Trainer Supervised</span>
</div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Athletic Conditioning</span>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm font-bold text-primary">4.7</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight mb-space-xs">Modern Strength &amp; Gym</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                Fitted with Italian Technogym cardio runners, Olympic squat racks, dumbbells up to 50kg, and an integrated thermal suite comprising eucalyptus steam and Scandinavian cedar sauna.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Technogym Pure</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Free Weights to 50kg</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Finnish Sauna</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Certified Trainers</span>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<button onClick={() => openBooking("Modern Strength & Conditioning Gym")} type="button" className="inline-flex items-center gap-1.5 bg-secondary-container text-primary-container px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all shadow-sm">
                Book Session
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Includes Towels</span>
</div>
</div>
</div>

<div className={"facility-card flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group" + (activeTab === "all" || activeTab === "leisure" ? "" : " hidden")}>
<div className="relative h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Classic gentleman's club snooker room with green baize full-sized Riley billiard tables, brass pendant lamps hanging low, dark wood paneled walls with framed heritage trophies and rich leather seating." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgMHaHMeoFLWnTXkYcQtVOLuXBjBK03i8pgE2Kvg2prp7BNeAD6-Xt53Ksdi6JmQ7z2q36wbXrt53cGLbDNDuGcwhpRUHW5125OCK7NN9Ogl-dZJQvbXP174sxQ6nbE5szMxWx4k3JKMe8IFas18S2hU1sAroC1FWvl2cG4MmehS9_YTcwMo5RlFshuHTSvDxEtuKil25i8PGmmTl0w4oCzHZZQOj-vnP2YjzwSdhjMIHWYx8yzrBxrw')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-primary text-secondary-container font-label-caps text-label-caps px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">Antique Riley</span>
<span className="bg-surface-container-lowest/90 text-primary font-label-caps text-label-caps px-2 py-1 rounded font-bold uppercase">Acoustic Quiet</span>
</div>
<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-surface font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary-container">schedule</span> 11:00 AM – Midnight</span>
<span className="bg-surface-container-lowest/20 backdrop-blur-sm px-2 py-0.5 rounded text-white">4 Championship Tables</span>
</div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Billiards &amp; Parlor</span>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm font-bold text-primary">5.0</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight mb-space-xs">The Grand Snooker Lounge</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                Four heirloom full-size mahogany Riley snooker tables with West of England Strachan 6811 cloth, brass tournament markers, and a strictly enforced acoustic quiet zone for championship concentration.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">4 Riley Tables</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Strachan 6811 Cloth</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Tournament Markers</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Quiet Zone</span>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<button onClick={() => openBooking("The Grand Snooker Lounge")} type="button" className="inline-flex items-center gap-1.5 bg-secondary-container text-primary-container px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all shadow-sm">
                Book Table
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Marker Service</span>
</div>
</div>
</div>

<div className={"facility-card flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group" + (activeTab === "all" || activeTab === "leisure" ? "" : " hidden")}>
<div className="relative h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Luxurious colonial members cigar lounge with deep button-tufted brown leather Chesterfield armchairs, Spanish cedar walk-in humidor, warm amber crystal chandeliers, and vintage green baize bridge tables." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhWiK5o8WgX-iTl_9OveZWT_MA_cEyuFYSp7CfqVx2fZWD5jb9WJRHXv5DmOAbHXBaQoTcaiXQGF1r7oZGy89mzeFsm2W8HRZYTcqexxnojfFq5OPR3N-Nl9xo6OJduRIR0poYX3Pz3vuUt1TGx6WbNM6bkVtz0kydim88fmO5u0taSYiPP-AfAlZZs5J9sQPGvEjO0u3BEEOORLq0JrjFVxL7kr0nU-4pvxbY8410mdFMfZPnwL67XQ')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-primary text-secondary-container font-label-caps text-label-caps px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">Private Saloon</span>
<span className="bg-secondary-container text-primary-container font-label-caps text-label-caps px-2 py-1 rounded font-bold uppercase">Over 21 Only</span>
</div>
<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-surface font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary-container">schedule</span> 04:00 PM – 01:00 AM</span>
<span className="bg-surface-container-lowest/20 backdrop-blur-sm px-2 py-0.5 rounded text-white">Spanish Cedar Humidor</span>
</div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Private Member Parlor</span>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm font-bold text-primary">4.9</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight mb-space-xs">The Churchill Cigar &amp; Cards</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                An intimate retreat lined with buttoned Chesterfield leather armchairs, climate-regulated humidor stocked with imported Cuban selections, and tournament bridge tables with dedicated steward service.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Walk-in Humidor</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Bridge &amp; Rummy</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Chesterfields</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Steward Call</span>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<button onClick={() => openBooking("The Churchill Cigar & Cards Room")} type="button" className="inline-flex items-center gap-1.5 bg-secondary-container text-primary-container px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all shadow-sm">
                Reserve Salon
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Locker Available</span>
</div>
</div>
</div>

<div className={"facility-card flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group" + (activeTab === "all" || activeTab === "leisure" ? "" : " hidden")}>
<div className="relative h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Stately heritage library with floor-to-ceiling dark mahogany bookshelves, vintage brass rolling ladders, warm banker lamps on green marble study tables, tall arched colonial windows with garden views." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGVuiVy0ojcouSsdvhc8Rq6Rqa-Kkqyj6INW7h3Y5IalAHc3letmiZBIuU6rWVKap83TL9kpVDgPLCKBhZO72WtJmaAGHZTSWdz6htSBzkrVuh3AM2U02_6X0xmNlnykFk8Dlxg6RhEZj6TW2MdBAEpxoV3O9UHLCWN4w7ts0RIQav0rvxiwwwqFwSVQJTnxWdoq0k-dnpLpFsv696OiQ7xdqnXh1w1LSY8hhZehA8QhhUt6UT27d50Q')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-primary text-secondary-container font-label-caps text-label-caps px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">6,000+ Folios</span>
<span className="bg-surface-container-lowest/90 text-primary font-label-caps text-label-caps px-2 py-1 rounded font-bold uppercase">Quiet Study</span>
</div>
<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-surface font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary-container">schedule</span> 08:00 AM – 10:00 PM</span>
<span className="bg-surface-container-lowest/20 backdrop-blur-sm px-2 py-0.5 rounded text-white">High-Speed Wi-Fi</span>
</div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Archival Collection</span>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm font-bold text-primary">4.8</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight mb-space-xs">Heritage Library &amp; Reading</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                Over 6,000 historical and literary texts, princely state records of the Nawabs of Bahawalpur, national and global gazettes, coupled with silent Wi-Fi study alcoves.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Rare Royal Manuscripts</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">International Dailies</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Study Carrels</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Digital Archiving</span>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<button onClick={() => openBooking("Heritage Library & Reading Room")} type="button" className="inline-flex items-center gap-1.5 bg-secondary-container text-primary-container px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all shadow-sm">
                Reserve Carrel
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Archivist Support</span>
</div>
</div>
</div>

<div className={"facility-card flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group" + (activeTab === "all" || activeTab === "outdoors" ? "" : " hidden")}>
<div className="relative h-64 overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Expansive manicured colonial clubhouse veranda opening onto lush emerald green evening lawns with classic white wrought-iron furniture, Mughal fountain gently flowing, warm evening fairy lights and golden twilight sky." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDi4E3EiMqkbdJ_JhVNHE0vvOYI51_fviSzq0H4acfaZP-Aj3qBRu-FzYwGF-uyCCoXUx806i2jIMuNS_26NkNu2gRYuH0EFZV8eZGSoS6XXGIWVsff73ztXhmpm5ZAra8PHiEK1IWxWlRzEkF1yrNiHwJ2hElpowxCjiSLge05weZy6Z-emwCkmml2GsK4p3jkmVym7YSzWKsusoAxHNRfNsvQNX-R3-Ph41zbIBBOZqRWCG_EwT3gNg')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-primary text-secondary-container font-label-caps text-label-caps px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">Bermuda Turf</span>
<span className="bg-secondary-container text-primary-container font-label-caps text-label-caps px-2 py-1 rounded font-bold uppercase">Evening Banquet</span>
</div>
<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-surface font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary-container">schedule</span> 04:30 PM – 11:30 PM</span>
<span className="bg-surface-container-lowest/20 backdrop-blur-sm px-2 py-0.5 rounded text-white">Live Grill &amp; High Tea</span>
</div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Al Fresco Hospitality</span>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm font-bold text-primary">5.0</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight mb-space-xs">Sprawling Verandas &amp; Lawn</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                Pristine Bermuda grass grounds centered around an illuminated Mughal fountain. Revered for traditional club high-tea at sunset, live barbecue pits, and leisurely member conversations.
              </p>
<div className="flex flex-wrap gap-1.5 mb-space-md">
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Mughal Water Fountain</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Traditional High Tea</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Live Charcoal Grill</span>
<span className="bg-surface-container px-2.5 py-1 rounded text-primary font-label-sm text-label-sm">Arched Verandas</span>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<button onClick={() => openBooking("Sprawling Verandas & Evening Lawn")} type="button" className="inline-flex items-center gap-1.5 bg-secondary-container text-primary-container px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all shadow-sm">
                Reserve Table
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Host Service</span>
</div>
</div>
</div>
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
<Link href="/contact" className="inline-flex items-center justify-center gap-1.5 px-space-md py-3 rounded-lg bg-transparent text-primary hover:bg-surface-container font-label-md text-label-md uppercase transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                Download Academy Prospectus
              </Link>
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
