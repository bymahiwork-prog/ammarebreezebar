import type { Metadata } from "next";
import { directionsUrl } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Button, Container, Display, Img, Kicker, Reveal, TextLink } from "@/components/ui";
import { Ornament, PageHero, VisitList } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Amaare Breeze Bar is a contemporary dining destination in Adchini, South Delhi — good food, thoughtful drinks and an atmosphere made for lingering.",
};

const pillars = [
  {
    kicker: "Food That Brings People Together",
    plain: "Made to Be",
    accent: "Savoured",
    text: "Thoughtfully crafted dishes designed to complement every kind of evening — from casual meals to special occasions.",
    cta: "Explore the Menu",
    href: "/gallery#food-drinks",
  },
  {
    kicker: "The Amaare Atmosphere",
    plain: "Easy Evenings.",
    accent: "Good Energy.",
    text: "A welcoming setting, great music, refreshing drinks and the right company. Come for dinner. Stay for the conversation.",
  },
  {
    kicker: "Made for Every Occasion",
    plain: "Gather. Celebrate.",
    accent: "Unwind.",
    text: "Date nights, birthdays, group dinners and spontaneous plans — every occasion gets a place to come together.",
    cta: "Plan Your Celebration",
    href: "/contact",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero image="/images/menu/highball-garden.jpg" position="center 40%" kicker="About Amaare" plain="The Amaare" accent="Dining Experience">
        <p className="kicker leading-loose text-cream/75">Good Food · Thoughtful Drinks · An Atmosphere Made for Lingering</p>
      </PageHero>

      {/* Statement */}
      <section>
        <Container className="py-16 text-center sm:py-24">
          <Reveal>
            <Ornament />
            <p className="display mx-auto mt-12 max-w-4xl text-[2rem] leading-[1.35] sm:text-[2.7rem]">
              Amaare Breeze Bar is a contemporary dining destination in South Delhi, bringing together food, drinks, music
              and an inviting atmosphere for <span className="accent text-sage">easy, memorable evenings.</span>
            </p>
          </Reveal>
        </Container>
        <Container className="grid grid-cols-12 items-start gap-4 pb-28 sm:gap-8 sm:pb-36">
          <Reveal className="col-span-6 mt-16 sm:col-span-4 sm:mt-24">
            <Img src="/images/hero-statue.jpg" alt="The carved stone face at Amaare" className="aspect-[3/4]" sizes="33vw" />
          </Reveal>
          <Reveal delay={120} className="col-span-6 sm:col-span-4">
            <Img src="/images/menu/skewers.jpg" alt="Glazed skewers served at the table" className="aspect-[3/4.4]" sizes="33vw" pos="center 55%" />
          </Reveal>
          <Reveal delay={240} className="col-span-4 mt-12 hidden sm:block">
            <Img src="/images/menu/golden-coupe.jpg" alt="A golden cocktail at the bar" className="aspect-[3/4]" sizes="33vw" />
          </Reveal>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-linen">
        <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Kicker>Our Philosophy</Kicker>
            <Display plain="More Than" accent="Just Dining" breakAccent className="mt-7 text-5xl sm:text-[4.2rem]" />
            <div className="mt-8 max-w-md space-y-5 leading-[1.85] text-muted">
              <p>
                At Amaare, every meal is about more than what&apos;s on the table. It&apos;s about settling in with good
                company, discovering something new on the menu, enjoying a well-made drink, and letting the evening unfold
                at its own pace.
              </p>
              <p>
                Dinner for two, a catch-up with friends, or a celebration worth gathering for — Amaare is made for moments
                shared around the table.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div aria-hidden className="absolute -bottom-5 -left-5 h-full w-full border border-sage/40" />
            <Img src="/images/menu/sushi.jpg" alt="An avocado roll served on a marble table" className="aspect-[4/5]" />
          </Reveal>
        </Container>
      </section>

      {/* Pillars */}
      <section>
        <Container className="grid gap-16 py-16 sm:py-24 md:grid-cols-3 md:gap-12">
          {pillars.map((p, i) => (
            <Reveal key={p.kicker} delay={i * 120} className="border-t border-ink/20 pt-8">
              <p className="accent text-3xl text-sage">{["I", "II", "III"][i]}</p>
              <p className="kicker mt-6 text-[0.6rem] text-muted">{p.kicker}</p>
              <Display as="h3" plain={p.plain} accent={p.accent} breakAccent className="mt-4 text-[2.4rem]" />
              <p className="mt-5 leading-[1.85] text-muted">{p.text}</p>
              {p.cta && p.href && (
                <div className="mt-8">
                  <TextLink href={p.href}>{p.cta}</TextLink>
                </div>
              )}
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Location */}
      <section className="relative overflow-hidden bg-olive text-cream">
        <Brand kind="mark" tone="cream" className="pointer-events-none absolute -left-20 -top-16 w-[340px] opacity-[0.04]" />
        <Container className="relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Img src="/images/red-bar.jpg" alt="Amaare's glowing bar at night" className="aspect-[4/3]" />
          </Reveal>
          <Reveal delay={150}>
            <Kicker light>Location</Kicker>
            <Display plain="Your South Delhi" accent="Table" breakAccent className="mt-7 text-5xl sm:text-6xl" accentClass="text-sage-pale" />
            <p className="mt-8 max-w-md leading-[1.85] text-cream/75">
              Located in Adchini, South Delhi — a convenient dining destination for guests from Hauz Khas, Green Park,
              Malviya Nagar, Saket and surrounding areas.
            </p>
            <div className="mt-10 max-w-md">
              <VisitList light />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
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

      {/* Closing */}
      <section>
        <Container className="py-16 text-center sm:py-24">
          <Reveal>
            <Ornament />
            <Display plain="Come As You Are." accent="Stay For The Evening." breakAccent className="mt-10 text-5xl sm:text-6xl" />
            <p className="mt-6 text-muted">Good food, good drinks, and a table waiting for you.</p>
            <div className="mt-10">
              <Button href="/contact">Reserve Your Table</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
