import Link from "next/link";
import { site, directionsUrl, nav } from "@/lib/site";
import { Brand } from "./brand";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-olive-deep text-cream/75">
      <Brand kind="mark" tone="cream" className="pointer-events-none absolute -right-28 -top-16 w-[460px] opacity-[0.04]" />
      <Container className="relative pb-10 pt-24">
        <div className="flex flex-col items-center text-center">
          <Brand kind="full" tone="cream" label={site.name} className="w-[200px] sm:w-[230px]" />
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-cream/55">
            Daytime glasshouse, sunset cocktails and easy evenings in South Delhi.
          </p>
        </div>

        <div className="mt-20 grid gap-12 border-t border-cream/10 pt-14 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="kicker mb-5 text-sage-pale">Visit</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                  {site.address}
                </a>
              </li>
              <li>{site.hours}</li>
            </ul>
          </div>
          <div className="sm:text-center">
            <p className="kicker mb-5 text-sage-pale">Reservations</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={site.phoneHref} className="display text-2xl text-cream hover:text-sage-pale">
                  {site.phone}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream">
                  Make an enquiry →
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:text-right">
            <p className="kicker mb-5 text-sage-pale">Follow</p>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cream">
              Instagram · {site.instagram}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 text-xs text-cream/40 sm:flex-row">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {nav.slice(1).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="kicker text-[0.6rem] hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>© {site.name}. Amaare by Zammaya.</p>
        </div>
      </Container>
    </footer>
  );
}
