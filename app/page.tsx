import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { bar, events, kitchen, directionsUrl, site } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Button, Container, Display, Img, Kicker, Reveal, TextLink } from "@/components/ui";
import { Faq, MapEmbed, Ornament, TableAwaits, VisitList } from "@/components/sections";

const hours = [
  {
    title: "Daytime Glasshouse",
    sub: "Lunches · Celebrations",
    image: "/images/menu/dimsum.jpg",
    alt: "Dim sum lifted from a bamboo steamer in daylight",
    pos: "center 45%",
  },
  {
    title: "Sunset",
    sub: "Cocktails · Music",
    image: "/images/menu/pink-cocktail.jpg",
    alt: "A pink cocktail in the garden at golden hour",
    pos: "center 60%",
  },
  {
    title: "Under the Stars",
    sub: "Dinners · Evenings",
    image: "/images/arches-night.jpg",
    alt: "The lit arches of the terrace after dark",
    pos: "center",
  },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero: three photographs, the full logo centred ——— */}
      <section className="relative isolate h-[100svh] min-h-[640px] overflow-hidden bg-olive-deep text-cream">
        <div className="absolute inset-0 -z-10 grid grid-cols-1 md:grid-cols-3">
          {[
            ["/images/menu/negroni.jpg", "center 55%"],
            ["/images/menu/matcha-sour.jpg", "center 50%"],
            ["/images/menu/pink-cocktail.jpg", "center 60%"],
          ].map(([src, pos], i) => (
            <div key={src} className={`relative overflow-hidden ${i === 1 ? "" : "hidden md:block"}`}>
              <div className="absolute inset-0 animate-slowzoom" style={{ animationDelay: `${i * 150}ms` }}>
                <Image src={src} alt="" fill priority sizes="(min-width: 768px) 34vw, 100vw" className="object-cover" style={{ objectPosition: pos }} />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(28,34,26,.72)_0%,rgba(28,34,26,.55)_45%,rgba(28,34,26,.35)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-olive-deep/80 to-transparent" />

        <div className="flex h-full flex-col items-center justify-center px-6 pt-16 text-center">
          <div className="animate-rise">
            <Brand kind="full" tone="cream" label={site.name} priority className="w-[220px] sm:w-[300px] lg:w-[340px]" />
          </div>
          <p className="accent mt-10 animate-rise text-[1.9rem] text-cream/90 [animation-delay:200ms] sm:text-[2.4rem]">
            Good food. Great evenings.
          </p>
          <p className="kicker mt-5 animate-rise text-cream/70 [animation-delay:300ms]">Contemporary Dining · Adchini, South Delhi</p>
          <div className="mt-11 flex animate-rise flex-wrap justify-center gap-4 [animation-delay:420ms]">
            <Button href="/contact" variant="light">
              Reserve a Table
            </Button>
            <Button href="#kitchen" variant="line-light">
              Explore the Menu
            </Button>
          </div>
        </div>

        <a href="#welcome" aria-label="Scroll down" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-cream/70">
          <span className="kicker text-[0.55rem]">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-cream/50" />
        </a>
      </section>

      {/* ——— Welcome ——— */}
      <section id="welcome" className="scroll-mt-20">
        <Container className="max-w-4xl py-32 text-center sm:py-40">
          <Reveal>
            <Ornament />
            <p className="display mt-12 text-[2.1rem] leading-[1.3] sm:text-[3rem]">
              More than a meal — <span className="accent text-sage">a whole evening.</span>
            </p>
            <p className="mx-auto mt-8 max-w-xl text-[1.05rem] leading-[1.9] text-muted">
              At Amaare, dining is about the whole experience. From thoughtfully crafted plates and refreshing cocktails to
              an atmosphere made for conversations, celebrations, and unhurried evenings — every visit is designed to feel
              effortless.
            </p>
            <div className="mt-12">
              <TextLink href="/about">Discover Amaare</TextLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ——— Day to night ——— */}
      <section>
        <Container className="grid gap-6 pb-32 sm:grid-cols-3 sm:pb-40">
          {hours.map((h, i) => (
            <Reveal key={h.title} delay={i * 140} className={i === 1 ? "sm:mt-20" : ""}>
              <figure>
                <Img src={h.image} alt={h.alt} pos={h.pos} className="aspect-[3/4.2]" sizes="(min-width: 640px) 33vw, 100vw" />
                <figcaption className="mt-7 text-center">
                  <p className="display text-[1.9rem]">{h.title}</p>
                  <p className="kicker mt-3 text-[0.6rem] text-muted">{h.sub}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* ——— From the kitchen ——— */}
      <section id="kitchen" className="scroll-mt-20 bg-linen py-28 sm:py-36">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Kicker>From the Kitchen</Kicker>
              <Display plain="Made for" accent="the Table" breakAccent className="mt-6 text-5xl sm:text-[4.4rem]" />
            </div>
            <p className="max-w-sm leading-[1.85] text-muted">
              Thoughtfully crafted. Made to be shared. A menu designed for everything from casual dinners to long evenings
              with friends.
            </p>
          </Reveal>
        </Container>
        <Reveal delay={120}>
          <ul
            aria-label="Dishes from the Amaare kitchen"
            className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 scroll-pl-5 [scrollbar-width:thin] sm:gap-7 sm:px-10 sm:scroll-pl-10 xl:pl-[calc((100vw-1240px)/2+2.5rem)] xl:scroll-pl-[calc((100vw-1240px)/2+2.5rem)]"
          >
            {kitchen.map((d) => (
              <li key={d.name} className="w-[72vw] shrink-0 snap-start sm:w-[340px]">
                <Img src={d.image} alt={d.name} className="aspect-[2/3]" sizes="340px" />
                <p className="display mt-6 text-2xl">{d.name}</p>
                <p className="mt-1.5 text-sm text-muted">{d.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Container>
          <p className="kicker mt-6 text-[0.58rem] text-muted">Scroll for more →</p>
        </Container>
      </section>

      {/* ——— The bar: full-bleed garden photograph ——— */}
      <section className="relative isolate flex min-h-[90svh] items-center overflow-hidden text-cream">
        <Image src="/images/menu/highball-garden.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-deep/80 via-olive-deep/40 to-transparent" />
        <Container>
          <Reveal className="max-w-lg">
            <Kicker light>The Bar</Kicker>
            <Display plain="Pour Something" accent="Good" breakAccent className="mt-6 text-5xl sm:text-[4.6rem]" accentClass="text-sage-pale" />
            <p className="mt-8 leading-[1.85] text-cream/80">
              From refreshing cocktails to familiar favourites, made to complement the mood, the meal, and the moment.
            </p>
            <div className="mt-10">
              <Button href="/gallery#food-drinks" variant="light">
                See the Bar
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-olive py-6 sm:py-8">
        <ul className="grid grid-cols-3 gap-2 px-2 sm:gap-3 sm:px-3 lg:grid-cols-6">
          {bar.map((b, i) => (
            <li key={b.image} data-reveal style={{ "--d": `${i * 80}ms` } as CSSProperties}>
              <Img src={b.image} alt={b.alt} className="aspect-[2/3]" sizes="(min-width: 1024px) 17vw, 33vw" />
            </li>
          ))}
        </ul>
      </section>

      {/* ——— Celebrations ——— */}
      <section className="relative overflow-hidden bg-olive text-cream">
        <Brand kind="mark" tone="cream" className="pointer-events-none absolute -right-24 bottom-0 w-[420px] opacity-[0.04]" />
        <Container className="relative grid items-center gap-16 py-28 sm:py-36 lg:grid-cols-2 lg:gap-24">
          <Reveal className="relative">
            <Img src="/images/menu/chaat-plate.jpg" alt="A celebration plate served at Amaare" className="aspect-[4/5]" pos="center 60%" />
          </Reveal>
          <Reveal delay={150}>
            <Kicker light>Celebrations</Kicker>
            <Display plain="For Every Reason" accent="to Gather" breakAccent className="mt-7 text-5xl sm:text-[4.4rem]" accentClass="text-sage-pale" />
            <p className="kicker mt-8 leading-loose text-cream/70">Birthdays · Date Nights · Catch-ups · Milestones</p>
            <p className="mt-6 max-w-md text-[1.05rem] leading-[1.85] text-cream/75">
              Some evenings deserve a little more. Make your next celebration an Amaare evening.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="light">
                Plan Your Celebration
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ——— Events, set like a menu ——— */}
      <section>
        <Container className="max-w-5xl py-28 sm:py-36">
          <Reveal className="text-center">
            <Kicker className="justify-center">Events</Kicker>
            <Display plain="What's Happening" accent="at Amaare" className="mt-6 text-5xl sm:text-6xl" />
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
              Special evenings, live music and seasonal experiences — there&apos;s always something happening around the
              table.
            </p>
          </Reveal>
          <ul className="mt-16 border-t border-ink/15">
            {events.map((e, i) => (
              <li
                key={i}
                data-reveal
                style={{ "--d": `${i * 100}ms` } as CSSProperties}
                className="grid items-baseline gap-3 border-b border-ink/15 py-8 sm:grid-cols-[200px_1fr_auto] sm:gap-10"
              >
                <p className="kicker text-[0.62rem] text-sage">{e.when}</p>
                <div>
                  <h3 className="display text-3xl">{e.name}</h3>
                  <p className="mt-2 text-muted">{e.text}</p>
                </div>
                <Link href="/contact" className="kicker text-sage-deep hover:text-olive">
                  Enquire →
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ——— Location ——— */}
      <section className="bg-linen">
        <Container className="grid gap-16 py-28 sm:py-36 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Kicker>Location</Kicker>
            <Display plain="In the Heart of" accent="South Delhi" breakAccent className="mt-7 text-5xl sm:text-6xl" />
            <p className="mt-8 max-w-md leading-[1.85] text-muted">
              Located in Adchini — a dining destination for those looking to eat, unwind and spend time well. Easy to reach
              from Hauz Khas, Green Park, Malviya Nagar and Saket.
            </p>
            <div className="mt-12 max-w-md">
              <VisitList />
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/contact">Reserve Your Table</Button>
              <Button href={directionsUrl} variant="line">
                Get Directions
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <MapEmbed className="h-full min-h-[440px]" />
          </Reveal>
        </Container>
      </section>

      <Faq />
      <TableAwaits image="/images/menu/amber-old-fashioned.jpg" />
    </>
  );
}
