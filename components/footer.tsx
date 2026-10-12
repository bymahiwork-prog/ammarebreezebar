import Link from "next/link";
import { site, directionsUrl, nav } from "@/lib/site";
import { Brand } from "./brand";

// Same structure as the Zammaya footer: brand · explore · visit · reserve, then a slim bottom bar.
export function Footer() {
  const whatsapp = `${site.whatsapp}?text=${encodeURIComponent(
    "Hello Amaare, I would like to know more about reservations.",
  )}`;

  const head = "display mb-5 text-[1.4rem] text-sage-pale";
  const link = "block w-fit text-[0.82rem] leading-[1.9] text-cream/70 transition-colors hover:text-sage-pale";

  return (
    <footer className="relative overflow-hidden border-t border-sage/40 bg-olive-deep px-5 pb-6 pt-14 text-cream sm:px-10">
      <Brand kind="mark" tone="cream" className="pointer-events-none absolute -bottom-24 -right-24 w-[380px] opacity-[0.035]" />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.1fr_1.1fr] lg:gap-11">
          <div>
            <Link href="/" aria-label={`${site.name} — home`} className="inline-block">
              <Brand kind="full" tone="cream" label={site.name} className="w-[130px]" />
            </Link>
            <p className="accent mt-5 text-[1.35rem] text-sage-pale">Good food. Great evenings.</p>
            <p className="mt-3 max-w-xs text-[0.82rem] leading-[1.9] text-cream/65">
              A contemporary dining destination in Adchini, South Delhi, bringing together thoughtfully crafted food,
              refreshing drinks, and an inviting atmosphere.
            </p>
          </div>

          <div>
            <h3 className={head}>Explore</h3>
            <nav aria-label="Footer" className="flex flex-col gap-1">
              {nav.map((l) => (
                <Link key={l.href} href={l.href} className={link}>
                  {l.label === "About" ? "About Us" : l.label === "Contact" ? "Contact Us" : l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className={head}>Visit Amaare</h3>
            <address className="text-[0.82rem] not-italic leading-[1.9] text-cream/70">{site.address}</address>
            <p className="text-[0.82rem] leading-[1.9] text-cream/70">{site.hours}</p>
            <div className="mt-3 space-y-1">
              <a href={site.phoneHref} className={link}>
                {site.phone}
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={link}>
                WhatsApp Us
              </a>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={link}>
                Get Directions ↗
              </a>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className={link}>
                Instagram ↗
              </a>
            </div>
          </div>

          <div>
            <h3 className={head}>Your Evening Awaits</h3>
            <p className="mb-6 text-[0.82rem] leading-[1.9] text-cream/65">
              Make your next dinner, celebration, or evening out something to remember.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-cream bg-cream px-6 py-3 text-[0.78rem] font-medium tracking-wide text-olive-deep transition-colors hover:bg-transparent hover:text-cream"
            >
              Reserve Your Table <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 border-t border-sage/25 pt-5 text-[0.72rem] text-cream/50 sm:flex-row sm:items-center">
          <p>© {site.name}. All rights reserved. Amaare by Zammaya.</p>
          <a href="#top" className="whitespace-nowrap transition-colors hover:text-sage-pale">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
