"use client";

import { useState } from "react";

export default function MembershipForm() {
  const [tier, setTier] = useState("Family");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const fullName = (form.elements.namedItem("fullName") as HTMLInputElement)
      .value;
    const cnicNumber = (
      form.elements.namedItem("cnicNumber") as HTMLInputElement
    ).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)
      .value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)
      .value;
    const proposerName = (
      form.elements.namedItem("proposerName") as HTMLInputElement
    ).value;
    const seconderName = (
      form.elements.namedItem("seconderName") as HTMLInputElement
    ).value;
    const statement = (
      form.elements.namedItem("statement") as HTMLTextAreaElement
    ).value;

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          membershipType: tier,
          proposer: `${proposerName} / Seconder: ${seconderName}`,
          message: `CNIC/Passport: ${cnicNumber}\n\n${statement}`,
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("sent");
        setFeedback(json.message);
        form.reset();
        setTier("Family");
      } else {
        setStatus("error");
        setFeedback(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  }

  return (
    <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-1">
          <label
            className="font-label-md text-label-md text-primary"
            htmlFor="fullName"
          >
            Full Legal Name *
          </label>
          <input
            className="bg-surface-container-low text-primary placeholder-on-surface-variant/60 font-body-md text-body-md px-space-md py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            id="fullName"
            name="fullName"
            placeholder="e.g. Mian Tariq Mahmood Abbasi"
            required
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="font-label-md text-label-md text-primary"
            htmlFor="cnicNumber"
          >
            CNIC / Passport Number *
          </label>
          <input
            className="bg-surface-container-low text-primary placeholder-on-surface-variant/60 font-body-md text-body-md px-space-md py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            id="cnicNumber"
            name="cnicNumber"
            placeholder="31202-XXXXXXX-X"
            required
            type="text"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-1">
          <label
            className="font-label-md text-label-md text-primary"
            htmlFor="email"
          >
            Email Address *
          </label>
          <input
            className="bg-surface-container-low text-primary placeholder-on-surface-variant/60 font-body-md text-body-md px-space-md py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            id="email"
            name="email"
            placeholder="tariq@domain.pk"
            required
            type="email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="font-label-md text-label-md text-primary"
            htmlFor="phone"
          >
            Mobile Phone *
          </label>
          <input
            className="bg-surface-container-low text-primary placeholder-on-surface-variant/60 font-body-md text-body-md px-space-md py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            id="phone"
            name="phone"
            placeholder="+92 300 1234567"
            required
            type="tel"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="font-label-md text-label-md text-primary"
          htmlFor="tierSelect"
        >
          Preferred Membership Tier *
        </label>
        <select
          className="bg-surface-container-low text-primary font-body-md text-body-md px-space-md py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
          id="tierSelect"
          name="tierSelect"
          required
          value={tier}
          onChange={(e) => setTier(e.target.value)}
        >
          <option value="Family">
            Family Membership (PKR 750,000 + 7,500/mo)
          </option>
          <option value="Individual">
            Individual Member (PKR 450,000 + 4,500/mo)
          </option>
          <option value="Corporate">
            Corporate Patron (PKR 1,500,000 + 15,000/mo)
          </option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-1">
          <label
            className="font-label-md text-label-md text-primary"
            htmlFor="proposerName"
          >
            Proposer Name &amp; Member ID *
          </label>
          <input
            className="bg-surface-container-low text-primary placeholder-on-surface-variant/60 font-body-md text-body-md px-space-md py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            id="proposerName"
            name="proposerName"
            placeholder="e.g. Brig. (R) Asif Ali Khan (#BG-1142)"
            required
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="font-label-md text-label-md text-primary"
            htmlFor="seconderName"
          >
            Seconder Name &amp; Member ID *
          </label>
          <input
            className="bg-surface-container-low text-primary placeholder-on-surface-variant/60 font-body-md text-body-md px-space-md py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            id="seconderName"
            name="seconderName"
            placeholder="e.g. Dr. Haroon Rashdi (#BG-0891)"
            required
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="font-label-md text-label-md text-primary"
          htmlFor="statement"
        >
          Brief Statement of Sporting or Civic Interest
        </label>
        <textarea
          className="bg-surface-container-low text-primary placeholder-on-surface-variant/60 font-body-md text-body-md px-space-md py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
          id="statement"
          name="statement"
          placeholder="Mention primary sports interests (e.g., Clay Court Tennis, Squash, Snooker), family lineage in Bahawalpur, or professional background..."
          rows={3}
        ></textarea>
      </div>

      <div className="flex items-start gap-space-sm pt-space-xs">
        <input
          className="mt-1 accent-primary h-4 w-4 rounded"
          id="attestRules"
          name="attestRules"
          required
          type="checkbox"
        />
        <label
          className="font-body-sm text-body-sm text-on-surface-variant leading-snug"
          htmlFor="attestRules"
        >
          I hereby declare all particulars correct and agree to adhere
          unconditionally to the Bye-Laws and Code of Conduct of Bahawal
          Gymkhana Club, Est. 1954.
        </label>
      </div>

      <div className="pt-space-xs flex flex-col gap-space-sm">
        <button
          className="w-full inline-flex items-center justify-center bg-secondary-container text-primary-container font-label-md text-label-md uppercase px-space-lg py-3.5 rounded hover:bg-secondary-fixed-dim transition-all shadow-md active:translate-y-0.5 disabled:opacity-60"
          type="submit"
          disabled={status === "loading"}
        >
          <span>
            {status === "loading"
              ? "Submitting…"
              : "Submit Membership Inquiry"}
          </span>
          <span className="material-symbols-outlined ml-2 text-[20px]">
            send
          </span>
        </button>

        {status === "sent" && (
          <div className="p-space-md rounded bg-surface-container-highest text-primary font-body-sm text-body-sm flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[24px]">
              task_alt
            </span>
            <div>
              <strong>Inquiry Logged into Protocol Ledger.</strong>{" "}
              {feedback}
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="p-space-md rounded bg-error-container text-on-error-container font-body-sm text-body-sm flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[24px]">
              error
            </span>
            <div>{feedback}</div>
          </div>
        )}
      </div>
    </form>
  );
}
