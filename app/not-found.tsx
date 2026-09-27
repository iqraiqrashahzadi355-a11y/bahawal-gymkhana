import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[60vh] px-margin-mobile py-space-xl">
      <img
        src="/logo-emblem.png"
        alt="Bahawal Gymkhana crest"
        className="h-24 w-auto mb-space-lg opacity-90"
      />
      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
        Off the Beaten Path
      </span>
      <h1 className="font-headline-lg text-headline-lg text-primary mt-space-sm mb-space-sm">
        404 — Ground Not Found
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-space-lg">
        This particular court, veranda, or page doesn&apos;t seem to exist at
        Bahawal Gymkhana. It may have been relocated or the address was
        entered incorrectly.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-space-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-secondary-container text-primary-container font-label-md text-label-md uppercase px-space-lg py-3 rounded-lg hover:bg-secondary-fixed-dim transition-all shadow-sm"
        >
          Return to Clubhouse
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-transparent text-primary border border-outline-variant font-label-md text-label-md uppercase px-space-lg py-3 rounded-lg hover:bg-surface-container transition-all"
        >
          Contact the Concierge
        </Link>
      </div>
    </div>
  );
}
