import Image from "next/image";
import type { ReactNode } from "react";
import { site, directionsUrl, mapEmbedUrl, faqs } from "@/lib/site";
import { Brand } from "./brand";
import { Button, Container, Display, Kicker, Reveal } from "./ui";

/** Full-bleed photographic page opener with the title set over it. */
export function PageHero({
  image,
  kicker,
  plain,
  accent,
  children,
  tall = false,
  position = "center",
}: {
  image: string;
  kicker: string;
  plain: string;
  accent?: string;
  children?: ReactNode;
  tall?: boolean;
  position?: string;
}) {
  return (
    <section className={`relative isolate flex items-end overflow-hidden bg-olive text-cream ${tall ? "min-h-[100svh]" : "min-h-[62svh]"}`}>
      <div className="absolute inset-0 -z-10 animate-slowzoom">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: position }} />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(26,32,24,.55)_0%,rgba(26,32,24,.15)_35%,rgba(26,32,24,.35)_60%,rgba(26,32,24,.85)_100%)]" />
      <Container className="pb-12 pt-36 sm:pb-16">
        <div className="max-w-3xl">
          <div className="animate-rise">
            <Kicker light>{kicker}</Kicker>
          </div>
          <div className="animate-rise [animation-delay:120ms]">
            <Display
              as="h1"
              plain={plain}
              accent={accent}
              breakAccent
              className="mt-7 text-[3.3rem] sm:text-7xl lg:text-[6.2rem]"
              accentClass="text-sage-pale"
            />
          </div>
          {children && <div className="mt-8 max-w-xl animate-rise text-[1.02rem] leading-relaxed text-cream/80 [animation-delay:260ms]">{children}</div>}
        </div>
      </Container>
    </section>
  );
}

/** Small logo ornament between two hairlines. */
export function Ornament({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <div aria-hidden className={`flex items-center justify-center gap-5 ${light ? "text-sage-pale/70" : "text-sage/80"} ${className}`}>
      <span className="h-px w-16 bg-current opacity-60" />
      <Brand kind="mark" tone={light ? "cream" : "sage"} className="w-8 opacity-80" />
      <span className="h-px w-16 bg-current opacity-60" />
    </div>
  );
}

export function Marquee({ words, dark = false }: { words: string[]; dark?: boolean }) {
  const row = [...words, ...words];
  return (
    <div aria-hidden className={`overflow-hidden border-y py-6 ${dark ? "border-cream/10 bg-olive text-cream/85" : "border-line bg-cream text-sage-deep"}`}>
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center">
            {row.map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center">
                <span className="accent whitespace-nowrap px-8 text-3xl sm:text-4xl">{w}</span>
                <Brand kind="mark" tone={dark ? "cream" : "sage"} className="w-5 opacity-60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Full-bleed closing call to reserve. */
export function TableAwaits({ image = "/images/arches-night.jpg" }: { image?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-olive text-cream">
      <Image src={image} alt="" fill sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-olive-deep/70" />
      <Container className="py-20 text-center sm:py-28">
        <Reveal>
          <Brand kind="full" tone="cream" className="mx-auto w-[150px]" />
          <Display plain="Your Table" accent="Awaits" className="mt-8 text-5xl sm:text-7xl" accentClass="text-sage-pale" />
          <p className="mx-auto mt-6 max-w-md text-cream/75">Good food. Good drinks. Good company. See you at Amaare.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="light">
              Reserve Your Table
            </Button>
            <Button href={directionsUrl} variant="line-light">
              Get Directions
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-olive-deep ${className}`}>
      <iframe
        title={`Map showing ${site.name} in ${site.area}`}
        src={mapEmbedUrl}
        className="absolute inset-0 h-full w-full border-0 [filter:grayscale(.85)_sepia(.25)_contrast(.95)]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

/** Address / phone / hours as a menu-style list with dotted leaders. */
export function VisitList({ light = false }: { light?: boolean }) {
  const rows: [string, ReactNode][] = [
    ["Address", site.address],
    ["Reservations", <a key="p" href={site.phoneHref} className="hover:underline">{site.phone}</a>],
    ["Hours", site.hours],
  ];
  return (
    <dl className="space-y-4 text-[0.95rem]">
      {rows.map(([k, v]) => (
        <div key={k} className="flex items-baseline gap-4">
          <dt className={`kicker shrink-0 ${light ? "text-sage-pale" : "text-sage"}`}>{k}</dt>
          <span aria-hidden className={`mb-1 flex-1 border-b border-dotted ${light ? "border-cream/25" : "border-ink/25"}`} />
          <dd className="text-right">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Faq({ dark = false }: { dark?: boolean }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className={dark ? "bg-olive-deep text-cream" : "bg-cream"}>
      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Kicker light={dark}>Good to Know</Kicker>
          <Display
            plain="Frequently Asked"
            accent="Questions"
            breakAccent
            className="mt-6 text-5xl sm:text-6xl"
            accentClass={dark ? "text-sage-pale" : "text-sage"}
          />
        </Reveal>
        <Reveal delay={120}>
          <div className={`border-t ${dark ? "border-cream/15" : "border-ink/15"}`}>
            {faqs.map((f, i) => (
              <details key={f.q} className={`group border-b ${dark ? "border-cream/15" : "border-ink/15"}`} open={i === 0}>
                <summary className="flex cursor-pointer items-start justify-between gap-8 py-7">
                  <span className="flex gap-6">
                    <span className={`accent pt-1 text-xl ${dark ? "text-sage-pale" : "text-sage"}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="display text-[1.45rem] leading-snug">{f.q}</span>
                  </span>
                  <span aria-hidden className={`faq-icon mt-1 text-2xl font-light transition-transform duration-300 ${dark ? "text-sage-pale" : "text-sage"}`}>
                    +
                  </span>
                </summary>
                <p className={`-mt-2 pb-7 pl-12 leading-relaxed ${dark ? "text-cream/65" : "text-muted"}`}>{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
