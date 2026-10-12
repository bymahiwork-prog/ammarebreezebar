import Link from "next/link";
import { site, directionsUrl, nav } from "@/lib/site";
import { Brand } from "./brand";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-olive-deep text-cream/75">
      <Brand kind="mark" className="pointer-events-none absolute -right-24 -top-10 w-[420px] text-cream/[0.035]" />
      <Container className="relative pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Brand kind="full" label={site.name} className="w-[150px] text-sage-pale" />
            <p className="mt-8 max-w-[18rem] text-sm leading-relaxed text-cream/55">
              Daytime glasshouse, sunset cocktails and easy evenings in South Delhi. Amaare by Zammaya.
            </p>
          </div>
          <div>
            <p className="kicker mb-6 text-sage-pale">Explore</p>
            <ul className="space-y-3 text-sm">
              {nav.slice(1).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker mb-6 text-sage-pale">Visit</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                  {site.address}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-cream">
                  {site.phone}
                </a>
              </li>
              <li>{site.hours}</li>
            </ul>
          </div>
          <div>
            <p className="kicker mb-6 text-sage-pale">Follow</p>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cream">
              Instagram
              <br />
              <span className="text-cream/50">{site.instagram}</span>
            </a>
          </div>
        </div>
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40">
          <p>© {site.name}. All rights reserved.</p>
          <p className="kicker text-[0.6rem]">Adchini · New Delhi</p>
        </div>
      </Container>
    </footer>
  );
}
