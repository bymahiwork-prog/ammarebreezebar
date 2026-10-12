import type { Metadata } from "next";
import { Brand } from "@/components/brand";
import { bar, kitchen } from "@/lib/site";
import { Button, Container, Display, Img, Kicker, Reveal } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { GalleryTabs } from "./gallery-tabs";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Food, ambience, people and moments around the table at Amaare Breeze Bar, Adchini, South Delhi.",
};

const tabs = [
  { id: "the-space", label: "The Space" },
  { id: "food-drinks", label: "Food & Drinks" },
  { id: "the-evenings", label: "The Evenings" },
  { id: "celebrations", label: "Celebrations" },
];

function SectionHead({ n, plain, accent, text }: { n: string; plain: string; accent: string; text: string }) {
  return (
    <Reveal className="mb-12 grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-end sm:gap-10">
      <p className="accent text-6xl leading-none text-sage/40">{n}</p>
      <Display plain={plain} accent={accent} className="text-4xl sm:text-5xl" />
      <p className="max-w-xs text-sm leading-relaxed text-muted sm:text-right">{text}</p>
    </Reveal>
  );
}

export default function GalleryPage() {
  return (
    <>
      <PageHero image="/images/menu/matcha-sour.jpg" position="center 55%" kicker="Gallery" plain="The Amaare" accent="Experience">
        <p>Food, ambience, people, and moments around the table.</p>
      </PageHero>

      <GalleryTabs tabs={tabs} />

      {/* 01 The Space */}
      <section id="the-space" className="scroll-mt-32">
        <Container className="py-24 sm:py-32">
          <SectionHead n="01" plain="Settle In." accent="Stay Awhile." text="A setting made for easy conversations and memorable evenings." />
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            <Reveal className="col-span-12 sm:col-span-7">
              <Img src="/images/girl-brown.jpg" alt="Guest in Amaare's garden dining room by the fountain" className="aspect-[4/3.4]" />
            </Reveal>
            <div className="col-span-12 grid gap-4 sm:col-span-5 sm:gap-6">
              <Reveal delay={120}>
                <Img src="/images/hero-statue.jpg" alt="The carved stone face lit at dusk" className="aspect-[5/3]" sizes="40vw" pos="center 30%" />
              </Reveal>
              <Reveal delay={220}>
                <Img src="/images/domes.jpg" alt="Glass cloches and a table lamp on a striped banquette" className="aspect-[5/3]" sizes="40vw" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 Food & Drinks */}
      <section id="food-drinks" className="scroll-mt-32 bg-linen">
        <Container className="py-24 sm:py-32">
          <SectionHead n="02" plain="Made to Be" accent="Savoured" text="Thoughtfully crafted plates, refreshing drinks, and flavours worth coming back for." />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {[...kitchen.map((k) => ({ src: k.image, alt: k.name })), ...bar.map((b) => ({ src: b.image, alt: b.alt }))].map((p, i) => (
              <Reveal key={p.src} delay={(i % 4) * 90}>
                <Img src={p.src} alt={p.alt} className="aspect-[2/3]" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 03 The Evenings */}
      <section id="the-evenings" className="scroll-mt-32 bg-olive text-cream">
        <Container className="py-24 sm:py-32">
          <Reveal className="mb-12 grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-end sm:gap-10">
            <p className="accent text-6xl leading-none text-sage-pale/40">03</p>
            <Display plain="Good Food. Good Music." accent="Good Company." className="text-4xl sm:text-5xl" accentClass="text-sage-pale" />
            <p className="max-w-xs text-sm text-cream/60 sm:text-right">From relaxed dinners to lively nights.</p>
          </Reveal>
          <div className="grid gap-4 sm:gap-6">
            <Reveal>
              <Img src="/images/arches-night.jpg" alt="Lit arches over the garden terrace after dark" className="aspect-[16/7]" sizes="100vw" />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <Reveal delay={100}>
                <Img src="/images/event-arches.jpg" alt="The garden terrace under lit arches" className="aspect-[16/10]" />
              </Reveal>
              <Reveal delay={200}>
                <Img src="/images/event-glass.jpg" alt="A drink being stirred at the bar" className="aspect-[16/10]" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 04 Celebrations */}
      <section id="celebrations" className="scroll-mt-32">
        <Container className="py-24 sm:py-32">
          <SectionHead n="04" plain="Make It an" accent="Amaare Moment" text="Birthdays, gatherings, and occasions worth raising a glass to." />
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {[
              ["/images/girl-cocktail.jpg", "Guest with a cocktail"],
              ["/images/girl-yellow.jpg", "Guest in the dining room"],
              ["/images/girl-drink.jpg", "Guest raising a drink"],
            ].map(([src, alt], i) => (
              <Reveal key={src} delay={i * 100} className={i % 2 ? "lg:mt-16" : ""}>
                <Img src={src} alt={alt} className="aspect-[3/4]" sizes="(min-width: 1024px) 25vw, 50vw" pos="center 15%" />
              </Reveal>
            ))}
            {/* Placeholder until the birthday / group table photo arrives */}
            <Reveal delay={300} className="lg:mt-16">
              <div className="flex aspect-[3/4] flex-col items-center justify-center gap-5 border border-dashed border-sage/50 bg-linen p-6 text-center text-sage">
                <Brand kind="mark" tone="sage" className="w-10" />
                <span className="kicker text-[0.58rem]">Birthday / group table photo</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="flex flex-wrap items-center justify-between gap-8 py-20">
          <Reveal>
            <Kicker>Your table is waiting</Kicker>
            <Display plain="Come Experience" accent="Amaare" className="mt-5 text-5xl" />
          </Reveal>
          <Reveal delay={120}>
            <Button href="/contact">Reserve Your Table</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
