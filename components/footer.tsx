import Link from "next/link";
import { site, directionsUrl } from "@/lib/site";
import { Container } from "./ui";

const explore = [
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/franchise", label: "Franchise" },
  { href: "/journal", label: "The Journal" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-paper/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-paper">amaaré</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
            Daytime glasshouse, sunset cocktails and easy evenings in South Delhi. Amaare by Zammaya.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4 text-peach">Explore</p>
          <ul className="space-y-2 text-sm">
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4 text-peach">Visit</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                {site.area}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-paper">
                {site.phone}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4 text-peach">Follow</p>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-paper">
            Instagram · {site.instagram}
          </a>
        </div>
      </Container>
      <div className="border-t border-paper/10">
        <Container className="py-6 text-xs text-paper/50">© {site.name}. All rights reserved.</Container>
      </div>
    </footer>
  );
}
