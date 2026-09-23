"use client";

import { useState } from "react";

export default function WriteReviewModal() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const memberInfo = (
      form.elements.namedItem("memberInfo") as HTMLInputElement
    ).value;
    const department = (
      form.elements.namedItem("department") as HTMLSelectElement
    ).value;
    const observations = (
      form.elements.namedItem("observations") as HTMLTextAreaElement
    ).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: memberInfo,
          email: "member-review@bahawalgymkhana.pk",
          phone: "",
          subject: `Member Review (${rating}\u2605) \u2014 ${department}`,
          message: observations,
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("sent");
        form.reset();
        setRating(5);
        setTimeout(() => {
          setOpen(false);
          setStatus("idle");
        }, 1500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary-container text-primary-container font-label-md text-label-md uppercase px-space-lg py-3.5 rounded-lg hover:bg-secondary-fixed-dim transition-all duration-200 shadow-md font-bold cursor-pointer"
        type="button"
      >
        <span className="material-symbols-outlined text-[20px]">
          edit_note
        </span>
        Write a Member Review
      </button>

      <div
        className={
          "fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm flex items-center justify-center p-space-md " +
          (open ? "" : "hidden")
        }
      >
        <div className="bg-surface-container-lowest text-primary rounded-xl max-w-lg w-full p-space-lg md:p-space-xl shadow-2xl relative border border-surface-variant">
          <button
            aria-label="Close Modal"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 text-on-surface-variant hover:text-primary p-1 rounded-full transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              close
            </span>
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-secondary text-[20px]">
              military_tech
            </span>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
              Patron Ledger Submission
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">
            Member Dispatch Form
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Submissions are reviewed by the Honorary Secretary before
            entering the archives.
          </p>
          <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                Membership Folio Number / Name
              </label>
              <input
                className="w-full px-3 py-2 bg-surface-container-low text-primary font-body-sm rounded focus:outline-none focus:ring-1 focus:ring-secondary-container"
                name="memberInfo"
                placeholder="e.g. BG-1984-T / Lt. Col. M. Akram"
                required
                type="text"
              />
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                Rating Assessment
              </label>
              <div className="flex items-center gap-2 text-secondary-container text-[24px]">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    aria-label={`${n} star`}
                    className="hover:scale-110 transition-transform"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontVariationSettings:
                          n <= rating ? "'FILL' 1" : "'FILL' 0",
                      }}
                    >
                      star
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                Department / Facility Visited
              </label>
              <select
                className="w-full px-3 py-2 bg-surface-container-low text-primary font-body-sm rounded focus:outline-none focus:ring-1 focus:ring-secondary-container"
                name="department"
                defaultValue="Tennis & Clay Courts"
              >
                <option>Tennis &amp; Clay Courts</option>
                <option>Squash &amp; Billiards Lounge</option>
                <option>Colonial Dining Hall &amp; Veranda</option>
                <option>Aquatic Pool Complex</option>
                <option>Archival Library &amp; Reading Room</option>
                <option>General Administration &amp; Concierge</option>
              </select>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                Observations &amp; Reflection
              </label>
              <textarea
                className="w-full px-3 py-2 bg-surface-container-low text-primary font-body-sm rounded focus:outline-none focus:ring-1 focus:ring-secondary-container"
                name="observations"
                placeholder="Note your thoughts regarding standards, hospitality, or amenities..."
                required
                rows={3}
              ></textarea>
            </div>
            <div className="pt-space-xs flex items-center justify-end gap-space-sm mt-space-xs">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 font-label-md text-label-md text-on-surface-variant hover:text-primary"
                type="button"
              >
                Cancel
              </button>
              <button
                disabled={status === "loading"}
                className="bg-secondary-container text-primary-container px-space-md py-2 rounded font-label-md text-label-md font-bold hover:bg-secondary-fixed-dim disabled:opacity-60"
                type="submit"
              >
                {status === "loading" ? "Submitting…" : "Submit Review"}
              </button>
            </div>
            {status === "sent" && (
              <p className="text-right font-label-sm text-label-sm text-emerald-700">
                Thank you — your review has been logged.
              </p>
            )}
            {status === "error" && (
              <p className="text-right font-label-sm text-label-sm text-error">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
