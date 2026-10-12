import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/lib/site";
import { Container, Reveal, TextLink } from "@/components/ui";
import { Ornament, PageHero, TableAwaits } from "@/components/sections";

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

  return (
    <>
      <PageHero image={post.image} kicker={`The Journal · ${post.tag}`} plain={post.title}>
        <p>{post.excerpt}</p>
      </PageHero>
      <article>
        <Container className="max-w-2xl py-16 text-center sm:py-24">
          <Reveal>
            <Ornament />
            {/* Article body goes here once the SEO blogs are written. */}
            <p className="display mt-10 text-3xl">This story is coming soon.</p>
            <div className="mt-10">
              <TextLink href="/journal">Back to the Journal</TextLink>
            </div>
          </Reveal>
        </Container>
      </article>
      <TableAwaits />
    </>
  );
}
