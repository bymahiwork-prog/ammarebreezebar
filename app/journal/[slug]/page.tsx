import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/site";
import { Container, Reveal } from "@/components/ui";
import { FinalCta, Photo, PhotoHero, Pill } from "@/components/kit";
import { Ornament } from "@/components/sections";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function JournalPost({ params }: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PhotoHero image={post.image} pos="center 45%" label={`The Journal · ${post.tag}`} plain={post.title}>
        <p>{post.excerpt}</p>
      </PhotoHero>
      <article className="bg-cream py-16">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <Ornament />
            {/* Article body goes here once the SEO blogs are written. */}
            <p className="display mt-8 text-[2rem] text-olive">This story is coming soon.</p>
            <div className="mt-8">
              <Pill href="/journal" tone="outline-dark">
                ← Back to the Journal
              </Pill>
            </div>
          </Reveal>
        </Container>
        <Container className="mt-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {others.map((p) => (
              <Link key={p.slug} href={`/journal/${p.slug}`} className="group overflow-hidden rounded-2xl border border-line bg-paper">
                <Photo src={p.image} alt="" className="aspect-[4/3]" sizes="33vw" />
                <p className="display p-5 text-[1.2rem] leading-snug text-olive group-hover:text-sage-deep">{p.title}</p>
              </Link>
            ))}
          </div>
        </Container>
      </article>
      <FinalCta image="/images/menu/amber-old-fashioned.jpg" plain="Your Table" accent="Awaits" lines={["Good food. Good drinks. Good company.", "See you at Amaare."]} />
    </>
  );
}
