import type { Metadata } from "next";
import { directionsUrl } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Container, Reveal } from "@/components/ui";
import { MapEmbed, VisitList } from "@/components/sections";
import { ArchPhoto, FinalCta, Heading, Label, Photo, PhotoHero, Pill } from "@/components/kit";

// Copy from "Amaare Breeze Bar — SEO / AEO / GEO Strategy", About Us.
export const metadata: Metadata = {
  title: "About Us | Contemporary Dining in Adchini, South Delhi",
  description:
    "Amaare Breeze Bar is a contemporary dining destination in Adchini, South Delhi — good food, thoughtful drinks and an atmosphere made for lingering.",
};

const pillars = [
  {
    label: "Food That Brings People Together",
    plain: "Made to Be",
    accent: "Savoured",
    text: "Our dining experience brings together thoughtfully crafted dishes designed to complement every kind of evening — from casual meals to special occasions.",
    cta: { href: "/gallery", label: "Explore the Menu" },
    image: "/images/menu/sushi.jpg",
    pos: "center 55%",
  },
  {
    label: "The Amaare Atmosphere",
    plain: "Easy Evenings.",
    accent: "Good Energy.",
    text: "A welcoming setting, great music, refreshing drinks and the right company come together to create the Amaare experience. Come for dinner. Stay for the conversation. Make an evening of it.",
    image: "/images/space/conservatory-aisle.jpg",
    pos: "center 60%",
  },
  {
    label: "Made for Every Occasion",
    plain: "Gather. Celebrate.",
    accent: "Unwind.",
    text: "From date nights and birthdays to group dinners and spontaneous plans, Amaare gives every occasion a place to come together.",
    cta: { href: "/contact", label: "Plan Your Celebration" },
    image: "/images/menu/chaat-plate.jpg",
    pos: "center 60%",
  },
];

export default function AboutPage() {
  return (
    <>
      <PhotoHero image="/images/space/conservatory-lounge.jpg" pos="center 55%" label="About Amaare" plain="The Amaare" accent="Dining Experience">
        <p className="kicker mb-4 text-[0.7rem] tracking-[0.22em] text-cream/90">
          Good food · Thoughtful drinks · An atmosphere made for lingering
        </p>
        <p>
          Amaare Breeze Bar is a contemporary dining destination in South Delhi, bringing together food, drinks, music and
          an inviting atmosphere for easy, memorable evenings.
        </p>
      </PhotoHero>

      {/* More Than Just Dining — cream */}
      <section className="relative overflow-hidden bg-cream py-16">
        <Brand kind="mark" tone="sage" className="pointer-events-none absolute -left-20 top-10 w-[300px] opacity-[0.06]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-[420px]">
            <ArchPhoto src="/images/space/dining-sign.jpg" alt="The sunlit dining room at Amaare, lanterns overhead" className="aspect-[4/5]" sizes="420px" pos="center 50%" dark={false} />
          </Reveal>
          <Reveal delay={120}>
            <Label mark>Our Philosophy</Label>
            <Heading plain="More Than" accent="Just Dining" />
            <p className="mt-5 text-[1.05rem] leading-[1.8] text-ink/75">At Amaare, every meal is about more than what&apos;s on the table.</p>
            <p className="mt-3 text-[1.05rem] leading-[1.8] text-ink/75">
              It&apos;s about settling in with good company, discovering something new on the menu, enjoying a well-made
              drink, and letting the evening unfold at its own pace.
            </p>
            <p className="mt-3 text-[1.05rem] leading-[1.8] text-ink/75">
              Whether it&apos;s dinner for two, a catch-up with friends, or a celebration worth gathering for, Amaare is made
              for moments shared around the table.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Three pillars — green */}
      <section className="relative overflow-hidden bg-olive py-16 text-cream">
        <Brand kind="mark" tone="cream" className="pointer-events-none absolute -bottom-24 -right-20 w-[380px] opacity-[0.035]" />
        <Container className="relative">
          <Reveal className="text-center">
            <Label dark center>
              The Amaare Way
            </Label>
            <h2 className="display mt-3 text-[2rem] uppercase tracking-[0.04em] sm:text-[2.75rem]">Food, Atmosphere, Occasion</h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {pillars.map((p, i) => (
              <Reveal key={p.label} delay={i * 110} className="flex flex-col text-center">
                <div className="mx-auto w-full max-w-[280px]">
                  <ArchPhoto src={p.image} alt="" className="aspect-[3/3.6]" sizes="280px" pos={p.pos} />
                </div>
                <p className="kicker mt-8 text-[0.6rem] tracking-[0.24em] text-sage-pale">{p.label}</p>
                <h3 className="display mt-2 text-[1.8rem] leading-tight">
                  {p.plain} <span className="accent text-sage-pale">{p.accent}</span>
                </h3>
                <p className="mx-auto mt-3 max-w-xs flex-1 text-[0.92rem] leading-[1.75] text-cream/75">{p.text}</p>
                {p.cta && (
                  <div className="mt-6">
                    <Pill href={p.cta.href} tone="outline">
                      {p.cta.label}
                    </Pill>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder — paper */}
      <section className="relative overflow-hidden bg-paper py-16">
        <Brand kind="mark" tone="sage" className="pointer-events-none absolute -right-20 bottom-0 w-[300px] opacity-[0.06]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-[360px]">
            <ArchPhoto
              src="/images/founder-manish-sharma.jpg"
              alt="Manish Sharma, founder of Amaare Breeze Bar"
              className="aspect-[4/5]"
              sizes="360px"
              pos="center 30%"
              dark={false}
            />
          </Reveal>
          <Reveal delay={120}>
            <Label mark>The Founder</Label>
            <Heading plain="Meet" accent="Manish Sharma" />
            <p className="kicker mt-4 text-[0.66rem] text-sage-deep">Founder, Amaare Breeze Bar</p>
            {/* Replace with the founder's own story once the brand shares it. */}
            <p className="mt-6 max-w-lg text-[1.05rem] leading-[1.8] text-ink/75">
              Amaare Breeze Bar is the vision of founder Manish Sharma — a place where good food, thoughtful drinks and an
              easy atmosphere come together, and every guest is made to feel at home.
            </p>
            <p className="accent mt-6 text-[1.5rem] text-sage-deep">Good food. Great evenings.</p>
          </Reveal>
        </Container>
      </section>

      {/* Photo band */}
      <section aria-hidden className="grid grid-cols-3 gap-1 bg-olive-deep sm:grid-cols-6">
        {["space/marble-table", "menu/negroni", "space/bar-face", "menu/lace-dumpling", "space/conservatory-aisle", "menu/matcha-sour"].map((n) => (
          <Photo key={n} src={`/images/${n}.jpg`} alt="" className="aspect-square" sizes="(min-width:640px) 17vw, 33vw" />
        ))}
      </section>

      {/* Location — cream */}
      <section className="bg-cream py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Label mark>Location</Label>
            <Heading plain="Your South Delhi" accent="Table" />
            <p className="mt-5 max-w-md leading-[1.8] text-ink/75">
              Located in Adchini, South Delhi, Amaare Breeze Bar is a convenient dining destination for guests from Hauz
              Khas, Green Park, Malviya Nagar, Saket and surrounding areas.
            </p>
            <div className="mt-7 max-w-md">
              <VisitList />
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Pill href={directionsUrl}>Get Directions</Pill>
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

      <FinalCta
        image="/images/space/rooftop-entrance-night.jpg"
        plain="Come As You Are."
        accent="Stay For The Evening."
        lines={["Good food, good drinks, and a table waiting for you."]}
        secondary={null}
      />
    </>
  );
}
