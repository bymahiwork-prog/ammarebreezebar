import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/site";
import { Button, Container, Eyebrow, Photo, Title } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Amaare Journal",
  description:
    "Food, dining, drinks and the Amaare way — guides to the best restaurants, date nights and celebrations in South Delhi.",
};

export default function JournalPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section>
        <Container className="pt-16 text-center sm:pt-20">
          <Eyebrow className="mb-5">Blog</Eyebrow>
          <Title as="h1" plain="The Amaare" accent="Journal" className="text-5xl sm:text-6xl lg:text-7xl" />
          <p className="eyebrow mt-6 text-ink/70">Food · Dining · Drinks · The Amaare Way</p>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <Link
            href={`/journal/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl bg-sand md:grid-cols-2"
          >
            <Photo
              src={featured.image}
              alt=""
              shape="square"
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="aspect-[4/3] w-full md:aspect-auto md:min-h-80"
            />
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="eyebrow text-[0.6rem] text-clay">Featured · {featured.tag}</p>
              <h2 className="mt-3 font-display text-4xl font-light leading-tight group-hover:text-clay">{featured.title}</h2>
              <p className="mt-3 text-sm text-muted">{featured.excerpt}</p>
              <p className="eyebrow mt-6 text-[0.6rem] text-clay">Read the Story →</p>
            </div>
          </Link>

          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {rest.map((p) => (
              <Link key={p.slug} href={`/journal/${p.slug}`} className="group">
                <Photo src={p.image} alt="" shape="arch" className="aspect-square w-full" sizes="(min-width: 1024px) 25vw, 50vw" />
                <p className="eyebrow mt-4 text-[0.58rem] text-clay">{p.tag}</p>
                <h3 className="mt-1 font-display text-2xl leading-snug group-hover:text-clay">{p.title}</h3>
              </Link>
            ))}
            <div className="arch flex aspect-square w-full flex-col items-center justify-center bg-forest p-6 text-center text-paper lg:aspect-auto">
              <p className="font-display text-2xl">Read enough?</p>
              <p className="font-display text-2xl italic text-peach">Come dine with us.</p>
              <Button href="/contact" className="mt-5 !px-5 !py-2.5">
                Reserve a Table
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
