import type { Metadata } from "next";
import Image from "next/image";
import { bar, kitchen, directionsUrl, site } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Container, Reveal } from "@/components/ui";
import { Faq, MapEmbed, VisitList } from "@/components/sections";
import { HeroSlider } from "@/components/hero-slider";
import { Label, Photo, Pill } from "@/components/kit";

// Layout modelled on the Seezen homepage; copy from "Amaare Breeze Bar — SEO / AEO / GEO Strategy".
export const metadata: Metadata = {
  title: { absolute: "Amaare Breeze Bar | Restaurant in South Delhi" },
  description:
    "Discover Amaare Breeze Bar, a contemporary dining destination in South Delhi offering thoughtfully crafted food, drinks and an inviting atmosphere.",
};

function CenterHead({ label, title, dark = false }: { label: string; title: string; dark?: boolean }) {
  return (
    <Reveal className="text-center">
      <Label dark={dark} center>
        {label}
      </Label>
      <h2 className={`display mt-3 text-[2rem] uppercase tracking-[0.04em] sm:text-[2.75rem] ${dark ? "text-cream" : "text-olive"}`}>{title}</h2>
    </Reveal>
  );
}

const marquee = [
  "Amaare Breeze Bar",
  "Contemporary Dining in Adchini, South Delhi",
  "Thoughtfully Crafted Food",
  "Refreshing Cocktails",
  "Celebrations & Date Nights",
  "Daytime Glasshouse · Sunset · Under the Stars",
];

const moments = [
  { n: "01", title: "Daytime Glasshouse", text: "Sunlit lunches and easy afternoons with the people you like most.", image: "/images/menu/dimsum.jpg", pos: "center 45%" },
  { n: "02", title: "Sunset", text: "Cocktails, good music and the hour when the evening settles in.", image: "/images/menu/pink-cocktail.jpg", pos: "center 60%" },
  { n: "03", title: "Under the Stars", text: "Long dinners and conversations that run past dessert.", image: "/images/arches-night.jpg" },
  { n: "04", title: "Good Company", text: "Dinner for two, drinks with friends, or simply a reason to step out.", image: "/images/menu/skewers.jpg", pos: "center 55%" },
];

export default function Home() {
  return (
    <>
      {/* 1 · Hero — full-bleed slideshow, text on the left */}
      <section className="relative isolate flex h-[100svh] min-h-[600px] items-center overflow-hidden bg-olive-deep text-cream">
        <HeroSlider
          slides={[
            { src: "/images/menu/highball-garden.jpg", pos: "center 40%" },
            { src: "/images/menu/dimsum.jpg", pos: "center 40%" },
            { src: "/images/arches-night.jpg" },
            { src: "/images/menu/negroni.jpg", pos: "center 55%" },
          ]}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(24,30,22,.88)_0%,rgba(24,30,22,.62)_45%,rgba(24,30,22,.2)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-olive-deep/70 to-transparent" />

        <Container className="pt-16">
          <div className="max-w-2xl">
            <h1 className="kicker animate-rise text-[0.72rem] tracking-[0.32em] text-sage-pale">Contemporary Dining Restaurant in South Delhi</h1>
            <p className="display mt-5 animate-rise text-[3.2rem] leading-[1.02] [animation-delay:120ms] sm:text-[4.8rem]">
              Good Food.
              <br />
              <span className="accent text-sage-pale">Great Evenings.</span>
            </p>
            <p className="mt-6 max-w-lg animate-rise text-[1rem] leading-[1.75] text-cream/85 [animation-delay:220ms]">
              A contemporary dining destination in <strong className="font-medium text-cream">Adchini, South Delhi</strong>,
              bringing together thoughtfully crafted food, refreshing drinks, and an inviting atmosphere.
            </p>
            <div className="mt-8 flex animate-rise flex-wrap gap-3 [animation-delay:320ms]">
              <Pill href="/contact" tone="cream">
                Reserve Your Table
              </Pill>
              <Pill href="#menu" tone="outline">
                Explore the Menu
              </Pill>
            </div>
            <div className="mt-10 animate-rise [animation-delay:420ms]">
              <p className="text-sm font-medium">{site.area}</p>
              <p className="mt-0.5 text-xs text-cream/65">{site.hours}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Marquee strip */}
      <div aria-hidden className="overflow-hidden border-y border-cream/10 bg-olive-deep py-4 text-cream/90">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center">
              {marquee.map((m) => (
                <span key={`${k}-${m}`} className="kicker flex items-center whitespace-nowrap text-[0.78rem] tracking-[0.22em]">
                  <span className="px-6">{m}</span>
                  <span className="text-sage-pale">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2 · About — cream */}
      <section className="relative overflow-hidden bg-cream py-16">
        <Brand kind="mark" tone="sage" className="pointer-events-none absolute -right-20 top-10 w-[300px] opacity-[0.06]" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="grid grid-cols-[0.8fr_1.2fr] items-end gap-4">
            <Photo src="/images/menu/golden-coupe.jpg" alt="A golden cocktail at the bar" className="aspect-[2/3] rounded-2xl" sizes="(min-width:1024px) 20vw, 40vw" />
            <Photo src="/images/menu/dimsum.jpg" alt="Dim sum lifted from a bamboo steamer" className="aspect-[4/5] rounded-2xl" sizes="(min-width:1024px) 30vw, 60vw" pos="center 45%" />
          </Reveal>
          <Reveal delay={120}>
            <Label>About Amaare</Label>
            <h2 className="display mt-3 text-[2.4rem] text-olive sm:text-[3.2rem]">
              More Than <span className="accent text-sage">Just a Meal</span>
            </h2>
            <p className="mt-5 text-[1.05rem] leading-[1.8] text-ink/75">At Amaare, dining is about the whole experience.</p>
            <p className="mt-3 text-[1.05rem] leading-[1.8] text-ink/75">
              From thoughtfully crafted plates and refreshing cocktails to an atmosphere made for conversations,
              celebrations, and unhurried evenings — every visit is designed to feel effortless.
            </p>
            <div className="mt-7">
              <Pill href="/about">Discover Amaare →</Pill>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3 · Food — arch-framed dishes sliding slowly, in the brand's own style */}
      <section id="menu" className="relative scroll-mt-20 overflow-hidden bg-olive py-16">
        <Brand kind="mark" tone="cream" className="pointer-events-none absolute -left-24 -top-20 w-[340px] opacity-[0.035]" />
        <Container className="relative">
          <Reveal className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-4">
                <Brand kind="mark" tone="cream" className="w-7 opacity-70" />
                <Label dark>Cravings</Label>
              </div>
              <h2 className="display mt-4 text-[2.6rem] leading-[1.02] text-cream sm:text-[3.6rem]">
                Made for <span className="accent text-sage-pale">the Table</span>
              </h2>
            </div>
            <div className="max-w-sm lg:pb-2">
              <p className="text-[0.98rem] leading-[1.75] text-cream/75">
                Thoughtfully crafted. Made to be shared. Explore a menu designed for everything from casual dinners to long
                evenings with friends.
              </p>
            </div>
          </Reveal>
        </Container>

        <div className="group relative mt-12">
          <ul className="flex w-max animate-[marquee_70s_linear_infinite] gap-8 pl-8 group-hover:[animation-play-state:paused]">
            {[...kitchen, ...kitchen].map((d, n) => (
              <li key={`${d.name}-${n}`} aria-hidden={n >= kitchen.length} className="w-[250px] shrink-0 sm:w-[270px]">
                <div className="relative">
                  <div aria-hidden className="absolute -inset-2 rounded-t-full border border-sage-pale/30" />
                  <Photo
                    src={d.image}
                    alt={n >= kitchen.length ? "" : d.name}
                    className="aspect-[3/4.2] rounded-t-full"
                    sizes="270px"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="kicker text-[0.6rem] text-sage-pale/80">{String((n % kitchen.length) + 1).padStart(2, "0")}</p>
                  <h3 className="accent mt-1.5 text-[1.55rem] text-cream">{d.name}</h3>
                  <p className="mt-1 text-[0.82rem] text-cream/60">{d.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Pill href="/gallery#food-drinks" tone="cream">
            Explore Our Menu
          </Pill>
        </div>
      </section>

      {/* 4 · Drinks — arch-framed hero cocktail, text beside, small arches below */}
      <section className="relative overflow-hidden bg-olive-deep py-16">
        <Brand kind="mark" tone="cream" className="pointer-events-none absolute -bottom-24 -right-20 w-[380px] opacity-[0.035]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[440px]">
            <div aria-hidden className="absolute -inset-3 rounded-t-full border border-sage-pale/30" />
            <Photo
              src="/images/menu/negroni.jpg"
              alt="A ruby-red cocktail on an Amaare coaster"
              className="aspect-[4/5] rounded-t-full"
              sizes="(min-width:1024px) 440px, 90vw"
              pos="center 55%"
            />
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full bg-cream px-5 py-2.5 text-olive-deep shadow-lg">
              <Brand kind="mark" tone="olive" className="w-5" />
              <span className="kicker text-[0.6rem]">Pour House</span>
            </div>
          </Reveal>
          <Reveal delay={120} className="text-cream">
            <div className="flex items-center gap-4">
              <Brand kind="mark" tone="cream" className="w-7 opacity-70" />
              <Label dark>The Bar</Label>
            </div>
            <h2 className="display mt-4 text-[2.6rem] leading-[1.02] sm:text-[3.6rem]">
              Pour Something <span className="accent text-sage-pale">Good</span>
            </h2>
            <p className="mt-5 max-w-md text-[1rem] leading-[1.8] text-cream/80">
              From refreshing cocktails to familiar favourites, our drinks are made to complement the mood, the meal, and
              the moment.
            </p>
            <ul className="mt-8 grid max-w-md grid-cols-3 gap-4">
              {bar.slice(1, 4).map((b) => (
                <li key={b.image}>
                  <Photo src={b.image} alt={b.alt} className="aspect-[3/4] rounded-t-full" sizes="140px" />
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Pill href="/gallery#food-drinks" tone="cream">
                Explore Drinks
              </Pill>
              <span className="kicker text-[0.62rem] text-sage-pale/80">Cocktails · Familiar Favourites</span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 5 · Ambience — cream, numbered cards like "What makes Seezen special?" */}
      <section className="bg-cream py-16">
        <Container>
          <CenterHead label="The Amaare Experience" title="Find Your Easy Evening" />
          <Reveal className="mx-auto mt-4 max-w-2xl text-center">
            <p className="leading-[1.75] text-ink/70">
              A relaxed setting, good music, great food, and the right company. Whether it&apos;s a dinner for two, drinks
              with friends, or simply a reason to step out — Amaare sets the scene.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {moments.map((m, n) => (
              <Reveal key={m.n} delay={n * 90}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-paper p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <span className="display absolute right-5 top-4 text-4xl text-sage/20">{m.n}</span>
                  <Photo src={m.image} alt="" className="h-20 w-20 rounded-full" sizes="80px" pos={m.pos} />
                  <h3 className="display mt-5 text-[1.45rem] text-olive">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Pill href="/gallery">View Gallery</Pill>
          </div>
        </Container>
      </section>

      {/* 6 · Celebrations — full-bleed photo */}
      <section className="relative isolate overflow-hidden py-24 text-center text-cream">
        <Image src="/images/menu/chaat-plate.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" style={{ objectPosition: "center 60%" }} />
        <div className="absolute inset-0 -z-10 bg-olive-deep/75" />
        <Container className="max-w-3xl">
          <Reveal>
            <Label dark center>
              Celebrations
            </Label>
            <h2 className="display mt-3 text-[2.6rem] sm:text-[3.8rem]">
              For Every Reason <span className="accent text-sage-pale">to Gather</span>
            </h2>
            <p className="kicker mt-5 text-[0.72rem] tracking-[0.24em] text-cream/85">Birthdays · Date Nights · Catch-ups · Milestones</p>
            <p className="mx-auto mt-5 max-w-md text-[1.05rem] leading-[1.75] text-cream/80">
              Some evenings deserve a little more. Make your next celebration an Amaare evening.
            </p>
            <div className="mt-8">
              <Pill href="/contact" tone="cream">
                Plan Your Celebration
              </Pill>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 7 · Location — cream */}
      <section className="bg-cream py-16 text-ink">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Label>Location</Label>
            <h2 className="display mt-3 text-[2.4rem] text-olive sm:text-[3.2rem]">
              In the Heart of <span className="accent text-sage">South Delhi</span>
            </h2>
            <p className="mt-5 max-w-md leading-[1.8] text-ink/75">
              Located in Adchini, Amaare Breeze Bar is a dining destination for those looking to eat, unwind and spend time
              well.
            </p>
            <p className="mt-3 max-w-md leading-[1.8] text-ink/75">
              Conveniently accessible from Hauz Khas, Green Park, Malviya Nagar, Saket and surrounding South Delhi
              neighbourhoods.
            </p>
            <div className="mt-7 max-w-md">
              <VisitList />
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Pill href={directionsUrl}>
                Get Directions
              </Pill>
              <Pill href="/contact" tone="outline-dark">
                Reserve Your Table
              </Pill>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <MapEmbed className="h-[380px] rounded-2xl" />
          </Reveal>
        </Container>
      </section>

      {/* 8 · FAQ */}
      <Faq dark />

      {/* 9 · Final CTA */}
      <section className="relative isolate overflow-hidden py-24 text-center text-cream">
        <Image src="/images/menu/amber-old-fashioned.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-olive-deep/75" />
        <Container className="max-w-2xl">
          <Reveal>
            <Brand kind="mark" tone="cream" className="mx-auto w-12 opacity-90" />
            <h2 className="display mt-5 text-[2.8rem] sm:text-[4rem]">
              Your Table <span className="accent text-sage-pale">Awaits</span>
            </h2>
            <p className="mt-4 text-[1.05rem] text-cream/85">Good food. Good drinks. Good company.</p>
            <p className="text-[1.05rem] text-cream/85">See you at Amaare.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Pill href="/contact" tone="cream">
                Reserve Your Table
              </Pill>
              <Pill href={directionsUrl} tone="outline">
                Get Directions
              </Pill>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
