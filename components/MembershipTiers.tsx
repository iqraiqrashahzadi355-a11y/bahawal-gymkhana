"use client";

import { useEffect, useState } from "react";
import type { MembershipTier } from "@/lib/membership-tiers";

export default function MembershipTiers() {
  const [tiers, setTiers] = useState<MembershipTier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/membership-tiers")
      .then((res) => res.json())
      .then((json) => setTiers(json.tiers))
      .catch(() => setTiers([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-surface-container-lowest rounded-lg p-space-lg animate-pulse flex flex-col gap-space-sm"
          >
            <div className="h-4 w-1/3 bg-surface-container-high rounded"></div>
            <div className="h-6 w-2/3 bg-surface-container-high rounded"></div>
            <div className="h-16 w-full bg-surface-container-high rounded"></div>
            <div className="h-40 w-full bg-surface-container-high rounded"></div>
            <div className="h-10 w-full bg-surface-container-high rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={
            "flex flex-col justify-between rounded-lg transition-all " +
            (tier.popular
              ? "bg-surface-container-lowest shadow-xl relative lg:-mt-3 lg:mb-3 ring-1 ring-secondary-container/40"
              : "bg-surface-container-lowest shadow-sm hover:shadow-md")
          }
        >
          {tier.popular && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-gradient-to-r from-secondary to-secondary-container text-primary-container font-label-sm text-label-sm font-bold uppercase tracking-wider px-space-md py-1.5 rounded-full shadow-md whitespace-nowrap">
              <span
                className="material-symbols-outlined text-[15px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              Most Popular
            </div>
          )}

          <div className={"p-space-lg " + (tier.popular ? "pt-space-xl" : "")}>
            <div className="flex justify-between items-start mb-space-xs">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                {tier.category}
              </span>
              <span
                className={
                  "material-symbols-outlined text-[22px] " +
                  (tier.popular ? "text-secondary" : "text-outline-variant")
                }
              >
                {tier.icon}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
              {tier.name}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-snug">
              {tier.tagline}
            </p>

            <div className="bg-surface-container-low p-space-md rounded-lg mb-space-md">
              <div className="font-headline-sm text-headline-sm text-primary font-bold">
                {tier.entranceFee}
                <span className="font-label-sm text-label-sm text-on-surface-variant font-normal ml-1">
                  / Entrance (One-time)
                </span>
              </div>
              <div className="font-label-sm text-label-sm text-secondary font-bold mt-1">
                + {tier.monthlyFee}{" "}
                <span className="text-on-surface-variant font-normal">
                  {tier.monthlyLabel}
                </span>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-space-sm gap-y-1.5 mb-space-lg font-body-sm text-body-sm text-on-surface">
              {tier.features.map((f) => (
                <li
                  key={f.text}
                  className={
                    "flex items-start gap-1.5 leading-snug " +
                    (f.included ? "" : "text-on-surface-variant/70")
                  }
                >
                  <span
                    className={
                      "material-symbols-outlined text-[15px] mt-0.5 shrink-0 " +
                      (f.included ? "text-secondary" : "text-outline-variant")
                    }
                  >
                    {f.included ? "check" : "close"}
                  </span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#apply-form"
            className={
              "mx-space-lg mb-space-lg inline-flex items-center justify-center font-label-md text-label-md uppercase py-3 rounded transition-all " +
              (tier.popular
                ? "bg-secondary-container text-primary-container hover:bg-secondary-fixed-dim shadow-md py-3.5"
                : "bg-surface-container text-primary hover:bg-secondary-container hover:text-primary-container")
            }
          >
            {tier.ctaLabel}
          </a>
        </div>
      ))}
    </div>
  );
}
