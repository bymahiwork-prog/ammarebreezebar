import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/site";
import { Brand } from "@/components/brand";
import { Button, Container, Img, Kicker, Reveal } from "@/components/ui";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "The Amaare Journal",
  description:
    "Food, dining, drinks and the Amaare way — guides to the best restaurants, date nights and celebrations in South Delhi.",
};

export default function JournalPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero image="/images/menu/negroni.jpg" position="center 55%" kicker="Blog" plain="The Amaare" accent="Journal">
        <p className="kicker leading-loose text-cream/75">Food · Dining · Drinks · The Amaare Way</p>
      </PageHero>

      <section>
        <Container className="py-24 sm:py-32">
          <Reveal>
            <Link href={`/journal/${featured.slug}`} className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Img src={featured.image} alt="" priority className="aspect-[4/3] lg:col-span-7" sizes="(min-width: 1024px) 58vw, 100vw" />
              <div className="lg:col-span-5">
                <Kicker>Featured · {featured.tag}</Kicker>
                <h2 className="display mt-6 text-5xl leading-[1.08] transition-colors group-hover:text-sage-deep">{featured.title}</h2>
                <p className="mt-6 max-w-sm leading-[1.85] text-muted">{featured.excerpt}</p>
                <p className="kicker mt-9 inline-block border-b border-sage-deep/50 pb-2 text-sage-deep">Read the Story</p>
              </div>
            </Link>
          </Reveal>

          <div className="mt-28 border-t border-ink/15 pt-16">
            <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 100}>
                  <Link href={`/journal/${p.slug}`} className="group block">
                    <Img src={p.image} alt="" className="aspect-[4/3]" sizes="(min-width: 1024px) 33vw, 50vw" pos="center 20%" />
                    <div className="mt-6 flex items-baseline gap-4">
                      <span className="accent text-xl text-sage">{String(i + 2).padStart(2, "0")}</span>
                      <p className="kicker text-[0.6rem] text-muted">{p.tag}</p>
                    </div>
                    <h3 className="display mt-3 text-[1.8rem] leading-snug transition-colors group-hover:text-sage-deep">{p.title}</h3>
                  </Link>
                </Reveal>
              ))}
              <Reveal delay={200}>
                <div className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden bg-olive p-8 text-center text-cream sm:aspect-auto sm:h-full">
                  <Brand kind="mark" tone="cream" className="w-10 opacity-80" />
                  <p className="display mt-6 text-3xl">Read enough?</p>
                  <p className="accent text-3xl text-sage-pale">Come dine with us.</p>
                  <Button href="/contact" variant="light" className="mt-8">
                    Reserve a Table
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
