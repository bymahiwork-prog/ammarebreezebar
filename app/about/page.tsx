import type { Metadata } from "next";
import { directionsUrl } from "@/lib/site";
import { Button, Container, Eyebrow, Photo, TextLink, Title } from "@/components/ui";
import { ClosingCta, SectionIntro } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Amaare Breeze Bar is a contemporary dining destination in Adchini, South Delhi — good food, thoughtful drinks and an atmosphere made for lingering.",
};

const pillars = [
  {
    eyebrow: "Food That Brings People Together",
    title: "Made to Be Savoured",
    text: "Thoughtfully crafted dishes designed to complement every kind of evening — from casual meals to special occasions.",
    cta: "Explore the Menu",
    href: "/gallery#food-drinks",
  },
  {
    eyebrow: "The Amaare Atmosphere",
    title: "Easy Evenings. Good Energy.",
    text: "A welcoming setting, great music, refreshing drinks and the right company. Come for dinner. Stay for the conversation.",
  },
  {
    eyebrow: "Made for Every Occasion",
    title: "Gather. Celebrate. Unwind.",
    text: "Date nights, birthdays, group dinners and spontaneous plans — every occasion gets a place to come together.",
    cta: "Plan Your Celebration",
    href: "/contact",
  },
];

export default function AboutPage() {
  return (
    <>
      <section>
        <Container className="pt-16 text-center sm:pt-20">
          <Eyebrow className="mb-5">About Amaare</Eyebrow>
          <Title as="h1" plain="The Amaare" accent="Dining Experience" className="text-5xl sm:text-6xl lg:text-7xl" />
          <p className="eyebrow mt-6 text-ink/70">Good Food · Thoughtful Drinks · An Atmosphere Made for Lingering</p>
          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted">
            Amaare Breeze Bar is a contemporary dining destination in South Delhi, bringing together food, drinks, music
            and an inviting atmosphere for easy, memorable evenings.
          </p>
        </Container>
        <Container className="grid grid-cols-3 items-end gap-3 py-14 sm:gap-6">
          <Photo src="/images/statue-face.jpg" alt="Carved stone detail inside Amaare" shape="arch" className="aspect-[1/0.85] w-full" />
          <Photo src="/images/girl-yellow.jpg" alt="A guest in Amaare's dining room" shape="arch" className="aspect-[1/1.15] w-full" />
          <Photo src="/images/domes.jpg" alt="Glass cloches on a dining table at Amaare" shape="arch" className="aspect-[1/0.85] w-full" />
        </Container>
      </section>

      <section className="bg-sand">
        <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2">
          <SectionIntro eyebrow="Our Philosophy" plain="More Than" accent="Just Dining">
            <p>
              At Amaare, every meal is about more than what&apos;s on the table. It&apos;s about settling in with good company,
              discovering something new on the menu, enjoying a well-made drink, and letting the evening unfold at its
              own pace.
            </p>
            <p className="mt-4">
              Dinner for two, a catch-up with friends, or a celebration worth gathering for — Amaare is made for moments
              shared around the table.
            </p>
          </SectionIntro>
          <Photo src="/images/green-dish.jpg" alt="A signature plate served at Amaare" className="aspect-[1.15/1] w-full" />
        </Container>
      </section>

      <section>
        <Container className="grid gap-6 py-20 sm:py-24 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="arch border border-line px-7 pb-9 pt-14 text-center">
              <Eyebrow className="text-[0.58rem]">{p.eyebrow}</Eyebrow>
              <Title as="h3" plain={p.title} className="mt-3 text-3xl" />
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
              {p.cta && p.href && (
                <div className="mt-5">
                  <TextLink href={p.href}>{p.cta}</TextLink>
                </div>
              )}
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-forest text-paper">
        <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2">
          <Photo src="/images/red-bar.jpg" alt="Amaare's glowing bar at night" shape="arch" className="aspect-[4/3] w-full" />
          <div>
            <p className="eyebrow text-peach">Location</p>
            <Title plain="Your South Delhi" accent="Table" className="mt-4 text-5xl sm:text-6xl" accentClass="text-peach" />
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-paper/70">
              Located in Adchini, South Delhi — a convenient dining destination for guests from Hauz Khas, Green Park,
              Malviya Nagar, Saket and surrounding areas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={directionsUrl} variant="outline-light">
                Get Directions
              </Button>
              <Button href="/contact" variant="light">
                Reserve Your Table
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta plain="Come As You Are." accent="Stay For The Evening." text="Good food, good drinks, and a table waiting for you." />
    </>
  );
}
