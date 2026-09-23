"use client";

import { useMemo, useState } from "react";

type ReviewCard = {
  id: string;
  initials: string;
  avatarStyle: "filled" | "outline" | "muted";
  name: string;
  subtitleLeft: string;
  subtitleRight: string;
  rating: number;
  quote: string;
  tagIcon: string;
  tagLabel: string;
  timeAgo: string;
  category: "tennis" | "family" | "dining" | "reciprocal";
};

const REVIEWS: ReviewCard[] = [
  {
    id: "1",
    initials: "TM",
    avatarStyle: "filled",
    name: "Brig. (R) Tariq Mahmood",
    subtitleLeft: "Local Guide",
    subtitleRight: "38 reviews",
    rating: 5,
    quote:
      "An institution of unmatched dignity in Bahawalpur. The clay tennis courts are the best maintained in South Punjab. The high tea on the lawn around sunset has been our family ritual every Sunday for twenty years.",
    tagIcon: "sports_tennis",
    tagLabel: "Clay Courts & Lawns",
    timeAgo: "2 weeks ago",
    category: "tennis",
  },
  {
    id: "2",
    initials: "AA",
    avatarStyle: "muted",
    name: "Ayesha Abbasi",
    subtitleLeft: "Verified Member",
    subtitleRight: "",
    rating: 5,
    quote:
      "The ladies\u2019 swimming hours are strictly private and very respectful. Wonderful temperature-controlled pool, clean locker rooms, and very courteous staff.",
    tagIcon: "pool",
    tagLabel: "Aquatic Complex",
    timeAgo: "1 month ago",
    category: "family",
  },
  {
    id: "3",
    initials: "KS",
    avatarStyle: "outline",
    name: "M. Kamran Sheikh",
    subtitleLeft: "Google Reviewer",
    subtitleRight: "4 months ago",
    rating: 4,
    quote:
      "Great atmosphere, delicious food in the dining hall \u2014 especially the club sandwiches and mutton karahi. Snooker tables are pristine. Membership process takes time due to balloting, but well worth the wait.",
    tagIcon: "restaurant",
    tagLabel: "Colonial Dining & Snooker",
    timeAgo: "4 months ago",
    category: "dining",
  },
  {
    id: "4",
    initials: "HR",
    avatarStyle: "filled",
    name: "Dr. Hamza Raza",
    subtitleLeft: "Reciprocal Member",
    subtitleRight: "Lahore Gymkhana",
    rating: 5,
    quote:
      "Enjoyed my stay through reciprocal club privileges. The colonial architecture is preserved with immense care. Courteous administration.",
    tagIcon: "handshake",
    tagLabel: "Reciprocal Privilege",
    timeAgo: "3 months ago",
    category: "reciprocal",
  },
  {
    id: "5",
    initials: "FL",
    avatarStyle: "outline",
    name: "Farooq Lodhi",
    subtitleLeft: "Member",
    subtitleRight: "6 years tenure",
    rating: 4,
    quote:
      "Squash courts and gym are top-notch. Parking is secure and spacious. One of the few tranquil, green spaces left in the city.",
    tagIcon: "fitness_center",
    tagLabel: "Squash & Fitness",
    timeAgo: "5 months ago",
    category: "tennis",
  },
  {
    id: "6",
    initials: "NJ",
    avatarStyle: "muted",
    name: "Nadia Jamil",
    subtitleLeft: "Member",
    subtitleRight: "Family Wing",
    rating: 5,
    quote:
      "The library is a quiet sanctuary with fantastic newspapers and archives. Truly an oasis of culture in Bahawalpur.",
    tagIcon: "local_library",
    tagLabel: "Archival Library",
    timeAgo: "6 months ago",
    category: "family",
  },
];

const PILLS: { key: string; label: string }[] = [
  { key: "all", label: "Most Recent" },
  { key: "5star", label: "Highest Rated (5\u2605)" },
  { key: "tennis", label: "Athletics & Tennis" },
  { key: "dining", label: "Family & Dining" },
];

function avatarClasses(style: ReviewCard["avatarStyle"]) {
  if (style === "filled") return "bg-primary-container text-secondary-container";
  if (style === "outline") return "bg-surface-container text-primary";
  return "bg-secondary-container/30 text-primary";
}

export default function ReviewsFilter() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = REVIEWS;
    if (filter === "5star") list = list.filter((r) => r.rating === 5);
    else if (filter === "tennis")
      list = list.filter((r) => r.category === "tennis");
    else if (filter === "dining")
      list = list.filter((r) => r.category === "dining" || r.category === "family");

    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (r) =>
          r.quote.toLowerCase().includes(q) ||
          r.name.toLowerCase().includes(q) ||
          r.tagLabel.toLowerCase().includes(q)
      );
    }
    return list;
  }, [filter, query]);

  return (
    <>
      <section className="w-full py-space-md bg-surface">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col lg:flex-row items-center justify-between gap-space-md">
            <div className="relative w-full lg:w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest text-primary placeholder-on-surface-variant/60 font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all"
                placeholder="Search reviews (e.g., tennis, tea, pool, lawn)..."
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap items-center gap-space-xs w-full lg:w-auto">
              {PILLS.map((pill) => (
                <button
                  key={pill.key}
                  onClick={() => setFilter(pill.key)}
                  type="button"
                  className={
                    "px-space-md py-2 rounded-lg font-label-md text-label-md transition-all duration-200 " +
                    (filter === pill.key
                      ? "bg-primary-container text-secondary-container shadow-sm"
                      : "bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container")
                  }
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <div className="flex items-center justify-between mb-space-lg">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                Public Testimonials
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-0.5">
                Chronicles of the Clubhouse
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
              <span>Showing {filtered.length} of 442 verified dispatches</span>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-space-xl text-on-surface-variant font-body-md text-body-md">
              No reviews match your search.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {filtered.map((r) => (
                <article
                  key={r.id}
                  className="review-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-space-sm mb-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div
                          className={
                            "w-12 h-12 rounded-full flex items-center justify-center font-bold text-headline-sm shrink-0 " +
                            avatarClasses(r.avatarStyle)
                          }
                        >
                          {r.initials}
                        </div>
                        <div>
                          <h3 className="font-title-md text-title-md text-primary leading-tight">
                            {r.name}
                          </h3>
                          <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm mt-0.5">
                            <span className="text-secondary font-medium">
                              {r.subtitleLeft}
                            </span>
                            {r.subtitleRight && (
                              <>
                                <span>•</span>
                                <span>{r.subtitleRight}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-primary-container px-2 py-1 rounded text-secondary-container font-label-sm text-label-sm font-bold shrink-0">
                        <span>{r.rating.toFixed(1)}</span>
                        <span
                          className="material-symbols-outlined text-[14px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-md">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-space-md border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-[16px]">
                        {r.tagIcon}
                      </span>{" "}
                      {r.tagLabel}
                    </span>
                    <span>{r.timeAgo}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
