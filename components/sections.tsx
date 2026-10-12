import Image from "next/image";
import { site, directionsUrl, mapEmbedUrl, faqs } from "@/lib/site";
import { Button, Container, Eyebrow, Title } from "./ui";

/** Full-width dark CTA over a photo: "Your Table Awaits". */
export function TableAwaits() {
  return (
    <section className="relative isolate overflow-hidden bg-forest">
      <Image src="/images/arches-night.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest/30 via-forest/20 to-forest/70" />
      <Container className="py-24 text-center sm:py-32">
        <Title plain="Your Table" accent="Awaits" className="text-5xl text-paper sm:text-6xl" accentClass="text-peach" />
        <p className="mt-4 text-sm text-paper/80">Good food. Good drinks. Good company. See you at Amaare.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact">Reserve Your Table</Button>
          <Button href={directionsUrl} variant="outline-light">
            Get Directions
          </Button>
        </div>
      </Container>
    </section>
  );
}

/** Light centred CTA used to close inner pages. */
export function ClosingCta({
  plain,
  accent,
  text,
  href = "/contact",
  cta = "Reserve Your Table",
}: {
  plain: string;
  accent: string;
  text: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section>
      <Container className="py-20 text-center sm:py-24">
        <Title plain={plain} accent={accent} className="mx-auto max-w-2xl text-4xl sm:text-5xl" />
        <p className="mt-4 text-sm text-muted">{text}</p>
        <div className="mt-8">
          <Button href={href}>{cta}</Button>
        </div>
      </Container>
    </section>
  );
}

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-sand ${className}`}>
      <iframe
        title={`Map showing ${site.name} in ${site.area}`}
        src={mapEmbedUrl}
        className="h-full min-h-72 w-full border-0 grayscale-[30%] sepia-[15%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section>
      <Container className="max-w-3xl py-20 sm:py-24">
        <Title plain="Frequently Asked" accent="Questions" className="text-center text-4xl text-ink sm:text-5xl" accentClass="text-ink" />
        <div className="mt-10 border-t border-line">
          {faqs.map((f, i) => (
            <details key={f.q} className="group border-b border-line py-5" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 font-display text-xl text-ink">
                {f.q}
                <span aria-hidden className="faq-icon text-xl text-muted transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  plain,
  accent,
  children,
  center = false,
  as = "h2",
}: {
  eyebrow?: string;
  plain: string;
  accent?: string;
  children?: React.ReactNode;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <Title
        as={as}
        plain={plain}
        accent={accent}
        className={as === "h1" ? "text-5xl sm:text-6xl lg:text-7xl" : "text-4xl sm:text-5xl"}
      />
      {children && <div className="mt-5 text-[0.95rem] leading-relaxed text-muted">{children}</div>}
    </div>
  );
}
