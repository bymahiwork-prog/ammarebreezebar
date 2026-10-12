import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/lib/site";
import { Container, Eyebrow, Photo, TextLink } from "@/components/ui";
import { ClosingCta } from "@/components/sections";

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
      <article>
        <Container className="max-w-3xl pt-16 sm:pt-20">
          <Eyebrow className="mb-4 text-clay">{post.tag}</Eyebrow>
          <h1 className="font-display text-5xl font-light leading-[1.05] sm:text-6xl">{post.title}</h1>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">{post.excerpt}</p>
          <Photo src={post.image} alt="" priority className="mt-10 aspect-[16/9] w-full" sizes="(min-width: 768px) 768px, 100vw" />
          {/* Article body goes here once the SEO blogs are written. */}
          <p className="mt-10 rounded-2xl bg-sand p-6 text-sm text-muted">This story is coming soon.</p>
          <div className="mt-8">
            <TextLink href="/journal">← Back to the Journal</TextLink>
          </div>
        </Container>
      </article>
      <ClosingCta plain="Read enough?" accent="Come dine with us." text="Good food, good drinks, and a table waiting for you." />
    </>
  );
}
