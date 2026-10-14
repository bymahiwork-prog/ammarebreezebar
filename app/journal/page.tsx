import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/site";
import { Container, Reveal } from "@/components/ui";
import { FinalCta, Label, Photo, PhotoHero, Pill } from "@/components/kit";

export const metadata: Metadata = {
  title: "The Amaare Journal | Dining Guides for South Delhi",
  description:
    "Food, dining, drinks and the Amaare way — guides to the best restaurants, date nights and celebrations in South Delhi.",
};

export default function JournalPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PhotoHero image="/images/menu/negroni.jpg" pos="center 55%" label="Blog" plain="The Amaare" accent="Journal">
        <p className="kicker text-[0.72rem] tracking-[0.24em] text-cream/90">Food · Dining · Drinks · The Amaare Way</p>
      </PhotoHero>

      <section className="bg-cream py-16">
        <Container>
          {/* Featured story */}
          <Reveal>
            <Link
              href={`/journal/${featured.slug}`}
              className="group grid overflow-hidden rounded-[24px] border border-line bg-paper shadow-sm transition-shadow duration-300 hover:shadow-xl lg:grid-cols-2"
            >
              <Photo src={featured.image} alt="" className="aspect-[4/3] lg:aspect-auto lg:min-h-[420px]" sizes="(min-width:1024px) 50vw, 100vw" priority />
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <Label mark>Featured · {featured.tag}</Label>
                <h2 className="display mt-4 text-[2.2rem] leading-[1.08] text-olive transition-colors group-hover:text-sage-deep sm:text-[2.8rem]">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-[1.75] text-ink/70">{featured.excerpt}</p>
                <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-sage-deep px-6 py-2.5 text-[0.8rem] font-medium text-cream transition-colors group-hover:bg-olive">
                  Read the Story →
                </span>
              </div>
            </Link>
          </Reveal>

          {/* All stories */}
          <div className="mt-14 flex items-end justify-between gap-6 border-b border-line pb-5">
            <h2 className="display text-[1.8rem] text-olive sm:text-[2.2rem]">
              More from <span className="accent text-sage">the Journal</span>
            </h2>
            <p className="kicker hidden text-[0.62rem] text-muted sm:block">{rest.length} stories</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/journal/${p.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Photo src={p.image} alt="" className="aspect-[4/3]" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" pos="center 45%" />
                  <div className="p-6">
                    <p className="kicker text-[0.6rem] tracking-[0.24em] text-sage">{p.tag}</p>
                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h3 className="display text-[1.35rem] leading-snug text-olive">{p.title}</h3>
                      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-deep text-cream transition-colors group-hover:bg-olive">
                        →
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Pill href="/contact">Reserve a Table</Pill>
          </div>
        </Container>
      </section>

      <FinalCta
        image="/images/menu/dimsum.jpg"
        pos="center 40%"
        plain="Read enough?"
        accent="Come dine with us."
        lines={["Good food. Good drinks. Good company."]}
      />
    </>
  );
}
