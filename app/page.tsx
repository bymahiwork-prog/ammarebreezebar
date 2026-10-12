import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { bar, events, kitchen, directionsUrl, site } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Button, Container, Display, Img, Kicker, Reveal, TextLink } from "@/components/ui";
import { Faq, MapEmbed, TableAwaits, VisitList } from "@/components/sections";

// Copy follows "Amaare Breeze Bar — SEO / AEO / GEO Strategy", Homepage Content (sections 1–10).
export const metadata: Metadata = {
  title: { absolute: "Amaare Breeze Bar | Restaurant in South Delhi" },
  description:
    "Discover Amaare Breeze Bar, a contemporary dining destination in South Delhi offering thoughtfully crafted food, drinks and an inviting atmosphere.",
};

export default function Home() {
  return (
    <>
      {/* 1 · Hero */}
      <section className="relative isolate h-[100svh] min-h-[620px] overflow-hidden bg-olive-deep text-cream">
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(28,34,26,.74)_0%,rgba(28,34,26,.56)_45%,rgba(28,34,26,.38)_100%)]" />

        <div className="flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <div className="animate-rise">
            <Brand kind="full" tone="cream" label={site.name} priority className="w-[190px] sm:w-[250px] lg:w-[280px]" />
          </div>
          <p className="display mt-9 animate-rise text-[2.4rem] leading-[1.05] [animation-delay:150ms] sm:text-[3.4rem]">
            Good Food. <span className="accent text-sage-pale">Great Evenings.</span>
          </p>
          <h1 className="kicker mt-5 animate-rise text-cream/75 [animation-delay:250ms]">Contemporary Dining Restaurant in South Delhi</h1>
          <p className="mt-5 max-w-lg animate-rise text-[0.98rem] leading-relaxed text-cream/80 [animation-delay:330ms]">
            A contemporary dining destination in South Delhi, bringing together thoughtfully crafted food, refreshing drinks,
            and an inviting atmosphere.
          </p>
          <div className="mt-9 flex animate-rise flex-wrap justify-center gap-4 [animation-delay:430ms]">
            <Button href="/contact" variant="light">
              Reserve Your Table
            </Button>
            <Button href="#menu-highlights" variant="line-light">
              Explore the Menu
            </Button>
          </div>
        </div>
      </section>

      {/* 2 · Intro — cream */}
      <section className="bg-cream">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <Reveal>
            <Kicker>The Amaare Experience</Kicker>
            <Display plain="More Than" accent="Just a Meal" breakAccent className="mt-3 text-[2.5rem] sm:text-[3.2rem]" />
            <p className="mt-4 max-w-lg text-[1.05rem] leading-[1.85] text-muted">
              At Amaare, dining is about the whole experience. From thoughtfully crafted plates and refreshing cocktails to
              an atmosphere made for conversations, celebrations, and unhurried evenings — every visit is designed to feel
              effortless.
            </p>
            <div className="mt-6">
              <TextLink href="/about">Discover Amaare</TextLink>
            </div>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-3 sm:gap-4">
            <Img src="/images/menu/dimsum.jpg" alt="Dim sum lifted from a bamboo steamer" className="aspect-[3/4]" sizes="(min-width: 1024px) 22vw, 50vw" pos="center 45%" />
            <Img src="/images/menu/golden-coupe.jpg" alt="A golden cocktail at the bar" className="mt-8 aspect-[3/4]" sizes="(min-width: 1024px) 22vw, 50vw" />
          </Reveal>
        </Container>
      </section>

      {/* 3 · Food — green */}
      <section id="menu-highlights" className="scroll-mt-20 bg-olive py-16 text-cream sm:py-20">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Kicker light>Cravings</Kicker>
              <Display plain="Made for" accent="the Table" className="mt-3 text-[2.5rem] sm:text-[3.2rem]" accentClass="text-sage-pale" />
            </div>
            <div className="max-w-sm">
              <p className="leading-[1.8] text-cream/75">
                Thoughtfully crafted. Made to be shared. Explore a menu designed for everything from casual dinners to long
                evenings with friends.
              </p>
              <div className="mt-5">
                <TextLink href="/gallery#food-drinks" light>
                  Explore Our Menu
                </TextLink>
              </div>
            </div>
          </Reveal>
        </Container>
        <Reveal delay={100}>
          <ul
            aria-label="Dishes from the Amaare kitchen"
            className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scroll-pl-5 [scrollbar-width:thin] sm:gap-5 sm:px-10 sm:scroll-pl-10 xl:pl-[calc((100vw-1240px)/2+2.5rem)] xl:scroll-pl-[calc((100vw-1240px)/2+2.5rem)]"
          >
            {kitchen.map((d) => (
              <li key={d.name} className="w-[64vw] shrink-0 snap-start sm:w-[290px]">
                <Img src={d.image} alt={d.name} className="aspect-[3/4]" sizes="290px" />
                <p className="display mt-4 text-xl">{d.name}</p>
                <p className="mt-1 text-sm text-cream/60">{d.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 4 · Drinks — green, photo-led */}
      <section className="bg-olive-deep text-cream">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[540px]">
            <Image src="/images/menu/highball-garden.jpg" alt="A highball with a leaf garnish in the garden" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center px-5 py-12 sm:px-12 lg:px-14 lg:py-12">
            <Reveal>
              <Kicker light>Pour House</Kicker>
              <Display plain="Pour Something" accent="Good" breakAccent className="mt-3 text-[2.5rem] sm:text-[3.2rem]" accentClass="text-sage-pale" />
              <p className="mt-4 max-w-md leading-[1.8] text-cream/75">
                From refreshing cocktails to familiar favourites, our drinks are made to complement the mood, the meal, and
                the moment.
              </p>
              <ul className="mt-6 grid max-w-sm grid-cols-3 gap-3">
                {bar.slice(0, 3).map((b) => (
                  <li key={b.image}>
                    <Img src={b.image} alt={b.alt} className="aspect-[2/3]" sizes="150px" />
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="/gallery#food-drinks" variant="light">
                  Explore Drinks
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 · Ambience — cream */}
      <section className="bg-cream">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal className="order-2 grid grid-cols-5 gap-3 sm:gap-4 lg:order-1">
            <Img src="/images/arches-night.jpg" alt="The lit arches of the terrace after dark" className="col-span-3 aspect-[4/5]" sizes="(min-width: 1024px) 26vw, 60vw" />
            <div className="col-span-2 grid gap-3 sm:gap-4">
              <Img src="/images/menu/pink-cocktail.jpg" alt="A cocktail beside a sculpture in the garden" className="aspect-[3/4]" sizes="(min-width: 1024px) 17vw, 40vw" pos="center 60%" />
              <Img src="/images/hero-statue.jpg" alt="The carved stone face at Amaare" className="aspect-square" sizes="(min-width: 1024px) 17vw, 40vw" />
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <Kicker>The Space</Kicker>
            <Display plain="Find Your" accent="Easy Evening" breakAccent className="mt-3 text-[2.5rem] sm:text-[3.2rem]" />
            <p className="mt-4 max-w-md text-[1.05rem] leading-[1.85] text-muted">
              A relaxed setting, good music, great food, and the right company. Whether it&apos;s a dinner for two, drinks
              with friends, or simply a reason to step out — Amaare sets the scene.
            </p>
            <div className="mt-6">
              <Button href="/gallery">View Gallery</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 6 · Celebrations — green */}
      <section className="relative overflow-hidden bg-olive text-cream">
        <Brand kind="mark" tone="cream" className="pointer-events-none absolute -bottom-10 -right-24 w-[380px] opacity-[0.04]" />
        <Container className="relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={120} className="lg:order-2">
            <Kicker light>Celebrations</Kicker>
            <Display plain="For Every Reason" accent="to Gather" breakAccent className="mt-3 text-[2.5rem] sm:text-[3.2rem]" accentClass="text-sage-pale" />
            <p className="kicker mt-4 leading-loose text-sage-pale">Birthdays · Date Nights · Catch-ups · Milestones</p>
            <p className="mt-4 max-w-md text-[1.05rem] leading-[1.8] text-cream/75">
              Some evenings deserve a little more. Make your next celebration an Amaare evening.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="light">
                Plan Your Celebration
              </Button>
            </div>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-3 sm:gap-4 lg:order-1">
            <Img src="/images/menu/chaat-plate.jpg" alt="A celebration plate served at Amaare" className="aspect-[3/4]" pos="center 60%" sizes="(min-width: 1024px) 25vw, 50vw" />
            <Img src="/images/menu/skewers.jpg" alt="Glazed skewers shared at the table" className="mt-8 aspect-[3/4]" pos="center 55%" sizes="(min-width: 1024px) 25vw, 50vw" />
          </Reveal>
        </Container>
      </section>

      {/* 7 · Events — cream */}
      <section className="bg-cream">
        <Container className="py-12 sm:py-16">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Kicker>Events</Kicker>
              <Display plain="What's Happening" accent="at Amaare" className="mt-3 text-[2.5rem] sm:text-[3rem]" />
            </div>
            <div className="max-w-sm">
              <p className="leading-relaxed text-muted">
                From special evenings and live music to seasonal experiences, there&apos;s always something happening around
                the table.
              </p>
              <div className="mt-5">
                <TextLink href="/contact">Explore Events</TextLink>
              </div>
            </div>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {events.map((e, i) => (
              <li key={i} data-reveal style={{ "--d": `${i * 100}ms` } as CSSProperties} className="bg-paper">
                <Img src={e.image} alt="" className="aspect-[16/10]" sizes="(min-width: 640px) 33vw, 100vw" />
                <div className="p-6">
                  <p className="kicker text-[0.6rem] text-sage">{e.when}</p>
                  <h3 className="display mt-3 text-2xl">{e.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{e.text}</p>
                  <Link href="/contact" className="kicker mt-5 inline-block text-[0.6rem] text-sage-deep hover:text-olive">
                    Enquire →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 8 · Location — green */}
      <section className="bg-olive text-cream">
        <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <Kicker light>Location</Kicker>
            <Display plain="In the Heart of" accent="South Delhi" breakAccent className="mt-3 text-[2.5rem] sm:text-[3rem]" accentClass="text-sage-pale" />
            <p className="mt-4 max-w-md leading-[1.8] text-cream/75">
              Located in Adchini, Amaare Breeze Bar is a dining destination for those looking to eat, unwind and spend time
              well. Conveniently accessible from Hauz Khas, Green Park, Malviya Nagar, Saket and surrounding South Delhi
              neighbourhoods.
            </p>
            <div className="mt-6 max-w-md">
              <VisitList light />
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href={directionsUrl} variant="light">
                Get Directions
              </Button>
              <Button href="/contact" variant="line-light">
                Reserve Your Table
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <MapEmbed className="h-full min-h-[340px]" />
          </Reveal>
        </Container>
      </section>

      {/* 9 · FAQ — green */}
      <Faq dark />

      {/* 10 · Final CTA */}
      <TableAwaits image="/images/menu/amber-old-fashioned.jpg" />
    </>
  );
}
