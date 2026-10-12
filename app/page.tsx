import { site, events, directionsUrl } from "@/lib/site";
import { Button, Container, Eyebrow, Photo, TextLink, Title } from "@/components/ui";
import { Faq, MapEmbed, SectionIntro, TableAwaits } from "@/components/sections";

const moments = [
  { title: "Daytime Glasshouse", sub: "Lunches · Celebrations" },
  { title: "Sunset", sub: "Cocktails · Music" },
  { title: "Under the Stars", sub: "Dinners · Evenings" },
];

const features = [
  {
    eyebrow: "Cravings",
    title: "Made for the Table",
    text: "Thoughtfully crafted. Made to be shared. A menu designed for everything from casual dinners to long evenings with friends.",
    cta: "Explore Our Menu",
    href: "/gallery#food-drinks",
    image: "/images/food-plate.jpg",
    alt: "A shared plate at Amaare",
  },
  {
    eyebrow: "Pour House",
    title: "Pour Something Good",
    text: "From refreshing cocktails to familiar favourites, made to complement the mood, the meal, and the moment.",
    cta: "Explore Drinks",
    href: "/gallery#food-drinks",
    image: "/images/drink-amber.jpg",
    alt: "A cocktail served at Amaare",
  },
  {
    eyebrow: "The Space",
    title: "Find Your Easy Evening",
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
      {/* Hero */}
      <section>
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Eyebrow className="mb-6">{site.area.replace(", ", " · ")}</Eyebrow>
            <h1 className="font-display text-6xl font-light leading-[0.95] tracking-[-0.02em] sm:text-7xl lg:text-8xl">
              Good Food.
              <br />
              <em className="text-clay">Great Evenings.</em>
            </h1>
            <p className="eyebrow mt-6 text-ink/70">Contemporary dining restaurant in South Delhi</p>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
              A contemporary dining destination bringing together thoughtfully crafted food, refreshing drinks, and an
              inviting atmosphere.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Reserve Your Table</Button>
              <Button href="/gallery#food-drinks" variant="outline">
                Explore the Menu
              </Button>
            </div>
          </div>
          {/* Swap for the day-to-night video loop once it's ready (public/videos/hero.mp4). */}
          <Photo
            src="/images/hero-statue.jpg"
            alt="The carved stone face at Amaare, lit at dusk"
            shape="arch"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[1/1.02] w-full"
          />
        </Container>
      </section>

      {/* Day-to-night band */}
      <section className="bg-forest text-paper">
        <Container className="grid gap-8 py-10 text-center sm:grid-cols-3">
          {moments.map((m) => (
            <div key={m.title}>
              <p className="font-display text-3xl italic">{m.title}</p>
              <p className="eyebrow mt-2 text-[0.6rem] text-paper/60">{m.sub}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Experience intro */}
      <section>
        <Container className="pt-20 text-center sm:pt-28">
          <SectionIntro eyebrow="The Amaare Experience" plain="More Than" accent="Just a Meal" center>
            <p>
              At Amaare, dining is about the whole experience. From thoughtfully crafted plates and refreshing cocktails
              to an atmosphere made for conversations, celebrations, and unhurried evenings — every visit is designed to
              feel effortless.
            </p>
          </SectionIntro>
          <div className="mt-8">
            <TextLink href="/about">Discover Amaare →</TextLink>
          </div>
        </Container>

        <Container className="grid gap-6 py-16 sm:py-20 md:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="arch flex flex-col bg-sand p-4 pb-7">
              <Photo src={f.image} alt={f.alt} shape="arch" className="aspect-[1/1.05] w-full" />
              <div className="flex flex-1 flex-col px-2 pt-6">
                <Eyebrow>{f.eyebrow}</Eyebrow>
                <Title as="h3" plain={f.title} className="mt-2 text-3xl" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{f.text}</p>
                <div className="mt-5">
                  <Button href={f.href} variant="outline" className="!px-5 !py-2.5 !text-clay !border-clay/50">
                    {f.cta}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      {/* Celebrations */}
      <section className="bg-forest text-paper">
        <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2">
          <div className="grid grid-cols-2 items-start gap-4">
            <Photo
              src="/images/girl-cocktail.jpg"
              alt="Guest raising a cocktail at an Amaare celebration"
              shape="arch"
              className="aspect-[2/3] w-full"
            />
            <Photo
              src="/images/girl-drink.jpg"
              alt="Guest enjoying a drink at Amaare"
              shape="arch"
              className="mt-12 aspect-[2/3] w-full"
            />
          </div>
          <div>
            <p className="eyebrow text-peach">Celebrations</p>
            <Title plain="For Every Reason" accent="to Gather" className="mt-4 text-5xl sm:text-6xl" accentClass="text-peach" />
            <p className="eyebrow mt-5 text-paper/80">Birthdays · Date Nights · Catch-ups · Milestones</p>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-paper/70">
              Some evenings deserve a little more. Make your next celebration an Amaare evening.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="light">
                Plan Your Celebration
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Events */}
      <section>
        <Container className="py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionIntro eyebrow="Events" plain="What's Happening" accent="at Amaare">
              <p>Special evenings, live music and seasonal experiences — there&apos;s always something happening around the table.</p>
            </SectionIntro>
            <TextLink href="/contact">Explore Events →</TextLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {events.map((e, i) => (
              <article key={i} className="overflow-hidden rounded-2xl bg-paper ring-1 ring-line">
                <Photo src={e.image} alt="" shape="square" className="aspect-[16/10] w-full" />
                <div className="p-6">
                  <p className="eyebrow text-[0.6rem] text-clay">{e.when}</p>
                  <h3 className="mt-2 font-display text-2xl">{e.name}</h3>
                  <p className="mt-1 text-sm text-muted">{e.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="bg-sand">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-2">
          <div>
            <SectionIntro eyebrow="Location" plain="In the Heart of" accent="South Delhi">
              <p>
                Located in Adchini — a dining destination for those looking to eat, unwind and spend time well. Easy to
                reach from Hauz Khas, Green Park, Malviya Nagar and Saket.
              </p>
            </SectionIntro>
            <dl className="mt-8 space-y-3 text-sm">
              {[
                ["Address", site.address],
                ["Reservations", site.phone],
                ["Hours", site.hours],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[8rem_1fr] gap-4">
                  <dt className="eyebrow text-[0.6rem] text-muted">{k}</dt>
                  <dd>{k === "Reservations" ? <a href={site.phoneHref} className="hover:text-clay">{v}</a> : v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={directionsUrl} variant="outline">
                Get Directions
              </Button>
              <Button href="/contact">Reserve Your Table</Button>
            </div>
          </div>
          <MapEmbed className="min-h-80" />
        </Container>
      </section>

      <Faq />
      <TableAwaits />
    </>
  );
}
