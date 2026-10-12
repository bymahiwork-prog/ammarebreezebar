import type { CSSProperties } from "react";
import Link from "next/link";
import { events, directionsUrl } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Button, Container, Display, Img, Kicker, Reveal, TextLink } from "@/components/ui";
import { Faq, MapEmbed, Marquee, PageHero, TableAwaits, VisitList } from "@/components/sections";

const moments = [
  { n: "I", title: "Daytime Glasshouse", sub: "Lunches · Celebrations" },
  { n: "II", title: "Sunset", sub: "Cocktails · Music" },
  { n: "III", title: "Under the Stars", sub: "Dinners · Evenings" },
];

const offerings = [
  {
    kicker: "Cravings",
    title: "Made for",
    accent: "the Table",
    text: "Thoughtfully crafted. Made to be shared. A menu designed for everything from casual dinners to long evenings with friends.",
    cta: "Explore Our Menu",
    href: "/gallery#food-drinks",
    image: "/images/food-plate.jpg",
    alt: "A shared plate at Amaare",
  },
  {
    kicker: "Pour House",
    title: "Pour Something",
    accent: "Good",
    text: "From refreshing cocktails to familiar favourites, made to complement the mood, the meal, and the moment.",
    cta: "Explore Drinks",
    href: "/gallery#food-drinks",
    image: "/images/drink-amber.jpg",
    alt: "A cocktail served at Amaare",
  },
  {
    kicker: "The Space",
    title: "Find Your",
    accent: "Easy Evening",
    text: "A relaxed setting, good music, great food, and the right company. Dinner for two or drinks with friends — Amaare sets the scene.",
    cta: "View Gallery",
    href: "/gallery",
    image: "/images/girl-brown.jpg",
    alt: "A guest in Amaare's garden dining room",
  },
];

export default function Home() {
  return (
    <>
      <PageHero
        tall
        image="/images/arches-night.jpg"
        kicker="Adchini · South Delhi"
        plain="Good Food."
        accent="Great Evenings."
      >
        <p>
          A contemporary dining destination bringing together thoughtfully crafted food, refreshing drinks, and an
          inviting atmosphere.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="light">
            Reserve Your Table
          </Button>
          <Button href="/gallery#food-drinks" variant="line-light">
            Explore the Menu
          </Button>
        </div>
      </PageHero>

      {/* Day to night */}
      <section className="bg-linen">
        <Container className="grid divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {moments.map((m, i) => (
            <Reveal key={m.title} delay={i * 120} className="px-6 py-12 text-center sm:py-16">
              <p className="accent text-2xl text-sage">{m.n}</p>
              <p className="display mt-3 text-[1.9rem]">{m.title}</p>
              <p className="kicker mt-4 text-[0.6rem] text-muted">{m.sub}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Intro */}
      <section className="relative overflow-hidden">
        <Brand kind="mark" className="pointer-events-none absolute -left-24 top-24 w-[380px] text-sage/[0.07]" />
        <Container className="relative grid items-center gap-16 py-28 sm:py-36 lg:grid-cols-2 lg:gap-24">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative ml-auto w-[78%]">
              <div aria-hidden className="absolute -right-4 -top-4 h-full w-full border border-sage/40" />
              <Img src="/images/hero-statue.jpg" alt="The carved stone face at Amaare, lit at dusk" className="aspect-[4/5]" />
            </div>
            <div className="absolute -bottom-12 left-0 w-[46%] border-[10px] border-cream shadow-[0_30px_60px_-30px_rgba(0,0,0,.35)]">
              <Img src="/images/domes.jpg" alt="Glass cloches on a table at Amaare" className="aspect-[3/4]" />
            </div>
          </Reveal>
          <Reveal delay={150} className="order-1 lg:order-2">
            <Kicker>The Amaare Experience</Kicker>
            <Display plain="More Than" accent="Just a Meal" breakAccent className="mt-7 text-5xl sm:text-[4.2rem]" />
            <p className="mt-8 max-w-md text-[1.05rem] leading-[1.85] text-muted">
              At Amaare, dining is about the whole experience. From thoughtfully crafted plates and refreshing cocktails
              to an atmosphere made for conversations, celebrations, and unhurried evenings — every visit is designed to
              feel effortless.
            </p>
            <div className="mt-10">
              <TextLink href="/about">Discover Amaare</TextLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <Marquee words={["Daytime Glasshouse", "Sunset Cocktails", "Celebrations", "Date Nights", "Under the Stars"]} />

      {/* Offerings */}
      <section>
        <Container className="space-y-28 py-28 sm:space-y-36 sm:py-36">
          {offerings.map((o, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={o.kicker} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <Img src={o.image} alt={o.alt} className="aspect-[5/4]" sizes="(min-width: 1024px) 58vw, 100vw" />
                </Reveal>
                <Reveal delay={150} className={`lg:col-span-5 ${flip ? "lg:order-1 lg:pr-6" : "lg:pl-6"}`}>
                  <p className="accent text-7xl leading-none text-sage/35">{String(i + 1).padStart(2, "0")}</p>
                  <Kicker className="mt-6">{o.kicker}</Kicker>
                  <Display plain={o.title} accent={o.accent} breakAccent className="mt-5 text-5xl" />
                  <p className="mt-6 max-w-sm leading-[1.85] text-muted">{o.text}</p>
                  <div className="mt-9">
                    <TextLink href={o.href}>{o.cta}</TextLink>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </Container>
      </section>

      {/* Celebrations */}
      <section className="relative overflow-hidden bg-olive text-cream">
        <Brand kind="mark" className="pointer-events-none absolute -right-20 bottom-10 w-[360px] text-cream/[0.04]" />
        <Container className="relative grid items-center gap-20 py-28 sm:py-36 lg:grid-cols-2">
          <Reveal className="relative pb-16">
            <div className="w-[68%]">
              <Img src="/images/girl-cocktail.jpg" alt="Guest raising a cocktail at an Amaare celebration" className="aspect-[3/4]" pos="center 15%" />
            </div>
            <div className="absolute bottom-0 right-0 w-[48%] border-[10px] border-olive">
              <Img src="/images/girl-drink.jpg" alt="Guest enjoying a drink at Amaare" className="aspect-[3/4]" pos="center 15%" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Kicker light>Celebrations</Kicker>
            <Display
              plain="For Every Reason"
              accent="to Gather"
              breakAccent
              className="mt-7 text-5xl sm:text-[4.2rem]"
              accentClass="text-sage-pale"
            />
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

      {/* Events — set like a menu */}
      <section>
        <Container className="py-28 sm:py-36">
          <Reveal className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Kicker>Events</Kicker>
              <Display plain="What's Happening" accent="at Amaare" breakAccent className="mt-6 text-5xl sm:text-6xl" />
            </div>
            <p className="max-w-sm leading-relaxed text-muted">
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
                  className="group grid items-center gap-6 border-b border-ink/15 py-8 sm:grid-cols-[180px_1fr_auto] sm:gap-10"
                >
                  <div className="relative hidden aspect-[4/3] w-[180px] overflow-hidden sm:block">
                    <Img src={e.image} alt="" className="h-full w-full" sizes="180px" />
                  </div>
                  <div>
                    <p className="kicker text-[0.6rem] text-sage">{e.when}</p>
                    <h3 className="display mt-3 text-3xl transition-colors group-hover:text-sage-deep">{e.name}</h3>
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

      {/* Location */}
      <section className="bg-linen">
        <Container className="grid gap-16 py-28 sm:py-36 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Kicker>Location</Kicker>
            <Display plain="In the Heart of" accent="South Delhi" breakAccent className="mt-7 text-5xl sm:text-6xl" />
            <p className="mt-8 max-w-md leading-[1.85] text-muted">
              Located in Adchini — a dining destination for those looking to eat, unwind and spend time well. Easy to
              reach from Hauz Khas, Green Park, Malviya Nagar and Saket.
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
      <TableAwaits image="/images/red-bar.jpg" />
    </>
  );
}
