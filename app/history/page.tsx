import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our History | Bahawal Gymkhana",
};

const TIMELINE = [
  {
    year: "1954",
    title: "Founding Under Princely Patronage",
    body: "Bahawal Gymkhana was established in the Civil Lines of Bahawalpur, envisioned as the premier bastion of gentlemanly sport, physical refinement, and distinguished social congregation in the state.",
  },
  {
    year: "1960s",
    title: "The Clay Courts Take Shape",
    body: "The championship red-clay tennis courts were laid and quickly became the centrepiece of the club's sporting calendar, hosting the region's earliest invitational tournaments.",
  },
  {
    year: "1970s–80s",
    title: "Expansion of the Clubhouse",
    body: "The colonnaded verandas, the Heritage Library, and the Grand Snooker Lounge were added, cementing the club's reputation as Bahawalpur's foremost social sanctuary.",
  },
  {
    year: "1990s",
    title: "The Aquatic Pavilion",
    body: "A temperature-controlled swimming pool and adjoining pavilion were introduced, extending the club's offerings beyond racquet sports to year-round family leisure.",
  },
  {
    year: "2000s–Present",
    title: "Seven Decades of Continuity",
    body: "Today, across 18 acres of lush grounds, the club continues to host state dignitary tournaments, multi-generational family milestones, and the annual Bahawal Invitational Cup — carrying its founding standards of hospitality and decorum into a new century.",
  },
];

export default function HistoryPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary text-surface py-space-xl relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin relative z-10">
          <span className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest">
            Archival Ledger #1954
          </span>
          <h1 className="font-headline-lg text-headline-lg text-surface mt-space-sm mb-space-sm">
            Seven Decades of Southern Punjab Camaraderie
          </h1>
          <p className="font-body-lg text-body-lg text-surface/80 max-w-2xl">
            From a princely charter in 1954 to today&apos;s 1,200+ active
            patrons, the story of Bahawal Gymkhana is the story of
            Bahawalpur&apos;s sporting and social life itself.
          </p>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-[900px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <div className="grid grid-cols-3 gap-space-xs sm:gap-space-sm py-space-sm bg-surface-container rounded p-space-sm sm:p-space-md mb-space-xl">
            <div className="flex flex-col items-center text-center">
              <span className="font-headline-lg text-[19px] sm:text-headline-md md:text-headline-lg text-primary leading-tight break-words">
                1954
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
                Foundation
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-headline-lg text-[19px] sm:text-headline-md md:text-headline-lg text-primary leading-tight break-words">
                1,200+
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
                Active Patrons
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-headline-lg text-[19px] sm:text-headline-md md:text-headline-lg text-primary leading-tight break-words">
                18 Acres
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
                Lush Grounds
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-space-lg">
            {TIMELINE.map((item, i) => (
              <div key={item.year} className="flex gap-space-md">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-container text-secondary-container flex items-center justify-center font-headline-sm text-[13px] font-bold text-center px-1">
                    {item.year.slice(0, 4)}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="w-[2px] flex-1 bg-surface-container-high mt-1" />
                  )}
                </div>
                <div className="pb-space-lg">
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                    {item.year}
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-primary mt-1 mb-1">
                    {item.title}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface-container-low rounded-xl p-space-lg text-center flex flex-col items-center gap-space-sm mt-space-lg">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              Royal Charter
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Preserving southern Punjab&apos;s finest sporting lineage for
              over 70 continuous years. Join the next chapter of the club&apos;s
              story.
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 bg-secondary-container text-primary-container font-label-md text-label-md uppercase px-space-lg py-2.5 rounded-lg hover:bg-secondary-fixed-dim transition-all shadow-sm mt-1"
            >
              Explore Membership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
