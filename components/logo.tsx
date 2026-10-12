import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Amaare Breeze Bar — home" className="flex items-center gap-2.5">
      <span
        aria-hidden
        className={`flex h-8 w-8 items-center justify-center rounded-full border font-display text-lg italic leading-none ${
          light ? "border-paper/40 text-paper" : "border-line bg-paper text-forest"
        }`}
      >
        a
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl ${light ? "text-paper" : "text-ink"}`}>amaaré</span>
        <span className={`mt-0.5 text-[0.5rem] uppercase tracking-[0.32em] ${light ? "text-paper/60" : "text-muted"}`}>
          Breeze Bar
        </span>
      </span>
    </Link>
  );
}
