"use client";

import { useState } from "react";

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState("");
  const [responseMode, setResponseMode] = useState("email");
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
    const emailAddress = (
      form.elements.namedItem("emailAddress") as HTMLInputElement
    ).value;
    const mobileNumber = (
      form.elements.namedItem("mobileNumber") as HTMLInputElement
    ).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: emailAddress,
          phone: mobileNumber,
          subject: `[${inquiryType || "general"}] ${subject}`,
          message: `${message}\n\nPreferred response channel: ${responseMode}`,
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("sent");
        setFeedback(json.message);
        form.reset();
        setInquiryType("");
        setResponseMode("email");
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
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label
              className="font-label-md text-label-md text-primary flex items-center justify-between"
              htmlFor="fullName"
            >
              <span>Full Name</span>
              <span className="font-label-sm text-label-sm text-secondary">
                *
              </span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-outline text-[18px] pointer-events-none">
                person
              </span>
              <input
                className="w-full bg-surface-container-low text-primary font-body-md text-body-md pl-10 pr-3 py-2.5 rounded-lg outline-none transition-all placeholder:text-outline/70 focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(242,169,59,0.4)]"
                id="fullName"
                name="fullName"
                placeholder="e.g. Major Tariq Abbasi (Retd)"
                required
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="font-label-md text-label-md text-primary flex items-center justify-between"
              htmlFor="emailAddress"
            >
              <span>Email Address</span>
              <span className="font-label-sm text-label-sm text-secondary">
                *
              </span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-outline text-[18px] pointer-events-none">
                mail
              </span>
              <input
                className="w-full bg-surface-container-low text-primary font-body-md text-body-md pl-10 pr-3 py-2.5 rounded-lg outline-none transition-all placeholder:text-outline/70 focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(242,169,59,0.4)]"
                id="emailAddress"
                name="emailAddress"
                placeholder="patron@domain.pk"
                required
                type="email"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label
              className="font-label-md text-label-md text-primary flex items-center justify-between"
              htmlFor="mobileNumber"
            >
              <span>Mobile Number</span>
              <span className="font-label-sm text-label-sm text-secondary">
                *
              </span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-outline text-[18px] pointer-events-none">
                call
              </span>
              <input
                className="w-full bg-surface-container-low text-primary font-body-md text-body-md pl-10 pr-3 py-2.5 rounded-lg outline-none transition-all placeholder:text-outline/70 focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(242,169,59,0.4)]"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="+92 300 1234567"
                required
                type="tel"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="font-label-md text-label-md text-primary flex items-center justify-between"
              htmlFor="inquiryType"
            >
              <span>Inquiring As</span>
              <span className="font-label-sm text-label-sm text-secondary">
                *
              </span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-outline text-[18px] pointer-events-none">
                badge
              </span>
              <select
                className="w-full bg-surface-container-low text-primary font-body-md text-body-md pl-10 pr-8 py-2.5 rounded-lg outline-none transition-all appearance-none cursor-pointer focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(242,169,59,0.4)]"
                id="inquiryType"
                name="inquiryType"
                required
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
              >
                <option disabled value="">
                  Select Membership Status
                </option>
                <option value="prospective">
                  Prospective Member (Permanent / Corporate)
                </option>
                <option value="current">
                  Current Member (General Ledger Holder)
                </option>
                <option value="reciprocal">
                  Reciprocal Club Guest (Affiliated Gymkhana)
                </option>
                <option value="event">
                  Private Event &amp; Lawn Banquet Host
                </option>
                <option value="sports">
                  Tournament &amp; Sports Visiting Player
                </option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3 text-outline text-[18px] pointer-events-none">
                expand_more
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            className="font-label-md text-label-md text-primary flex items-center justify-between"
            htmlFor="subject"
          >
            <span>Subject / Reference</span>
            <span className="font-label-sm text-label-sm text-secondary">
              *
            </span>
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-3 text-outline text-[18px] pointer-events-none">
              edit_note
            </span>
            <input
              className="w-full bg-surface-container-low text-primary font-body-md text-body-md pl-10 pr-3 py-2.5 rounded-lg outline-none transition-all placeholder:text-outline/70 focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(242,169,59,0.4)]"
              id="subject"
              name="subject"
              placeholder="e.g. Reciprocal Stay Verification / Lawn Booking for 15th"
              required
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            className="font-label-md text-label-md text-primary flex items-center justify-between"
            htmlFor="message"
          >
            <span>Detailed Inquiry / Requirements</span>
            <span className="font-label-sm text-label-sm text-secondary">
              *
            </span>
          </label>
          <textarea
            className="w-full bg-surface-container-low text-primary font-body-md text-body-md p-3 rounded-lg outline-none transition-all resize-none placeholder:text-outline/70 focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(242,169,59,0.4)]"
            id="message"
            name="message"
            placeholder="Kindly articulate your inquiry, dates, guest counts, or specific clubhouse departments required..."
            required
            rows={5}
          ></textarea>
        </div>

        <div className="bg-surface-container-low p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="font-label-sm text-label-sm font-semibold text-primary">
            Required Response Channel:
          </span>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center gap-2 cursor-pointer font-label-sm text-label-sm text-on-surface-variant">
              <input
                checked={responseMode === "email"}
                onChange={() => setResponseMode("email")}
                className="accent-secondary h-4 w-4"
                name="responseMode"
                type="radio"
                value="email"
              />
              Official Email
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer font-label-sm text-label-sm text-on-surface-variant">
              <input
                checked={responseMode === "phone"}
                onChange={() => setResponseMode("phone")}
                className="accent-secondary h-4 w-4"
                name="responseMode"
                type="radio"
                value="phone"
              />
              Concierge Call
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer font-label-sm text-label-sm text-on-surface-variant">
              <input
                checked={responseMode === "whatsapp"}
                onChange={() => setResponseMode("whatsapp")}
                className="accent-secondary h-4 w-4"
                name="responseMode"
                type="radio"
                value="whatsapp"
              />
              Patron WhatsApp
            </label>
          </div>
        </div>

        <div className="pt-2">
          <button
            className="w-full inline-flex items-center justify-center gap-2 bg-secondary-container text-primary-container font-label-md text-label-md uppercase tracking-wider px-6 py-4 rounded-lg hover:bg-secondary-fixed-dim transition-all duration-200 shadow-[0_4px_16px_rgba(242,169,59,0.35)] active:translate-y-0.5 cursor-pointer font-bold disabled:opacity-60"
            type="submit"
            disabled={status === "loading"}
          >
            <span className="material-symbols-outlined text-[20px]">
              send
            </span>
            <span>
              {status === "loading" ? "Transmitting…" : "Transmit Inquiry"}
            </span>
          </button>
        </div>
        <p className="font-label-sm text-label-sm text-outline text-center">
          Correspondence is logged in compliance with Bahawal Gymkhana Club
          Bylaws (Rev. 2024).
        </p>
      </form>

      {status === "sent" && (
        <div className="mt-6 p-4 rounded-lg bg-surface-container text-primary border-l-4 border-secondary-container transition-all">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-secondary text-[24px]">
              verified
            </span>
            <div>
              <p className="font-title-md text-title-md font-bold text-primary">
                Inquiry Successfully Transmitted
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {feedback}
              </p>
            </div>
          </div>
        </div>
      )}
      {status === "error" && (
        <div className="mt-6 p-4 rounded-lg bg-error-container text-on-error-container border-l-4 border-error transition-all">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[24px]">
              error
            </span>
            <p className="font-body-sm text-body-sm">{feedback}</p>
          </div>
        </div>
      )}
    </>
  );
}
