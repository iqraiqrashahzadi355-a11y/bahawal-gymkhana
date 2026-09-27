"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { GalleryItem } from "@/lib/gallery";

export default function GalleryContent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [galleryLoading, setGalleryLoading] = useState(true);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((json) => setGalleryItems(json.items))
      .catch(() => setGalleryItems([]))
      .finally(() => setGalleryLoading(false));
  }, []);
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

{galleryLoading &&
  Array.from({ length: 6 }).map((_, i) => (
    <div
      key={`skeleton-${i}`}
      className="bg-surface-container-lowest rounded-xl overflow-hidden animate-pulse"
    >
      <div className="h-80 bg-surface-container-high"></div>
      <div className="p-space-lg flex flex-col gap-space-sm">
        <div className="h-3 w-1/3 bg-surface-container-high rounded"></div>
        <div className="h-5 w-2/3 bg-surface-container-high rounded"></div>
        <div className="h-3 w-full bg-surface-container-high rounded"></div>
      </div>
    </div>
  ))}

{!galleryLoading &&
  galleryItems
    .filter((g) => activeFilter === "all" || g.category === activeFilter)
    .map((g) => (
      <article
        key={g.id}
        className={
          "gallery-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col" +
          (g.featured ? " lg:col-span-2" : "")
        }
      >
        <div className={"relative w-full overflow-hidden " + (g.featured ? "h-80 sm:h-96" : "h-80")}>
          <img
            alt={g.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            src={g.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
          <div className="absolute top-4 left-4 flex gap-space-xs">
            {g.badges.map((badge) => (
              <span
                key={badge}
                className="bg-primary text-secondary-container font-label-caps text-label-caps uppercase px-space-sm py-1 rounded"
              >
                {badge}
              </span>
            ))}
          </div>
          <button
            aria-label="Enlarge image"
            onClick={() => setLightboxIndex(galleryItems.findIndex((item) => item.id === g.id))}
            className="absolute bottom-4 right-4 w-10 h-10 rounded bg-surface/90 text-primary hover:bg-secondary-container hover:text-primary-container flex items-center justify-center transition-colors shadow-md"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">zoom_in</span>
          </button>
        </div>
        <div className="p-space-lg flex flex-col justify-between flex-grow bg-surface-container-lowest">
          <div>
            <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
              <span>{g.location}</span>
              <span>{g.date}</span>
            </div>
            <h3
              className={
                g.featured
                  ? "font-headline-sm text-headline-sm text-primary mb-space-xs"
                  : "font-title-md text-title-md text-primary mb-space-xs font-semibold"
              }
            >
              {g.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {g.description}
            </p>
          </div>
          <div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-caps text-label-caps uppercase">
            <span>{g.plate}</span>
            <span className="material-symbols-outlined text-[18px]">{g.icon}</span>
          </div>
        </div>
      </article>
    ))}
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
<img alt={galleryItems[lightboxIndex]?.title} className="w-full h-full object-cover" src={galleryItems[lightboxIndex]?.image}/>
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
            {lightboxIndex !== null ? galleryItems[lightboxIndex]?.title : ""}
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
