import type { Metadata } from "next";
import { Button, Container, Eyebrow, Photo, Title } from "@/components/ui";
import { GalleryTabs } from "./gallery-tabs";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Food, ambience, people and moments around the table at Amaare Breeze Bar, Adchini, South Delhi.",
};

type Shot = { src: string; alt: string };

const sections: {
  id: string;
  tab: string;
  plain: string;
  accent: string;
  text: string;
  shape: "arch" | "rounded";
  cols: string;
  aspect: string;
  shots: (Shot | null)[];
}[] = [
  {
    id: "the-space",
    tab: "The Space",
    plain: "Settle In.",
    accent: "Stay Awhile.",
    text: "A setting made for easy conversations and memorable evenings.",
    shape: "arch",
    cols: "grid-cols-1 sm:grid-cols-3",
    aspect: "aspect-[1/0.95]",
    shots: [
      { src: "/images/girl-brown.jpg", alt: "Guest in Amaare's garden dining room by the fountain" },
      { src: "/images/statue-face.jpg", alt: "Carved stone face detail at the bar" },
      { src: "/images/domes.jpg", alt: "Glass cloches and a table lamp on a striped banquette" },
    ],
  },
  {
    id: "food-drinks",
    tab: "Food & Drinks",
    plain: "Made to Be",
    accent: "Savoured",
    text: "Thoughtfully crafted plates, refreshing drinks, and flavours worth coming back for.",
    shape: "rounded",
    cols: "grid-cols-2 lg:grid-cols-4",
    aspect: "aspect-square",
    shots: [
      { src: "/images/food-plate.jpg", alt: "A plated signature dish" },
      { src: "/images/green-dish.jpg", alt: "A green herb dish being served" },
      { src: "/images/drink-amber.jpg", alt: "An amber cocktail on a coaster" },
      { src: "/images/pour.jpg", alt: "A bartender pouring into a mixing glass" },
    ],
  },
  {
    id: "the-evenings",
    tab: "The Evenings",
    plain: "Good Food. Good Music.",
    accent: "Good Company.",
    text: "From relaxed dinners to lively nights.",
    shape: "rounded",
    cols: "grid-cols-1 sm:grid-cols-2",
    aspect: "aspect-[1.8/1]",
    shots: [
      { src: "/images/red-bar.jpg", alt: "The glowing bar counter at night" },
      { src: "/images/arches-night.jpg", alt: "Lit arches over the garden terrace after dark" },
    ],
  },
  {
    id: "celebrations",
    tab: "Celebrations",
    plain: "Make It an",
    accent: "Amaare Moment",
    text: "Birthdays, gatherings, and occasions worth raising a glass to.",
    shape: "arch",
    cols: "grid-cols-2 lg:grid-cols-4",
    aspect: "aspect-[1/1.2]",
    shots: [
      { src: "/images/girl-cocktail.jpg", alt: "Guest with a cocktail" },
      { src: "/images/girl-yellow.jpg", alt: "Guest posing in the dining room" },
      { src: "/images/girl-drink.jpg", alt: "Guest raising a drink" },
      null, // placeholder: birthday / group table photo
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <section>
        <Container className="pt-16 text-center sm:pt-20">
          <Eyebrow className="mb-5">Gallery</Eyebrow>
          <Title as="h1" plain="The Amaare" accent="Experience" className="text-5xl sm:text-6xl lg:text-7xl" />
          <p className="mt-5 text-[0.95rem] text-muted">Food, ambience, people, and moments around the table.</p>
          <GalleryTabs tabs={sections.map((s) => ({ id: s.id, label: s.tab }))} />
        </Container>
      </section>

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-24">
          <Container className="py-10 sm:py-12">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
              <Title plain={s.plain} accent={s.accent} className="text-3xl sm:text-4xl" accentClass="text-ink" />
              <p className="text-sm text-muted">{s.text}</p>
            </div>
            <div className={`mt-6 grid gap-4 ${s.cols}`}>
              {s.shots.map((shot, i) =>
                shot ? (
                  <Photo
                    key={shot.src}
                    src={shot.src}
                    alt={shot.alt}
                    shape={s.shape}
                    className={`${s.aspect} w-full`}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                ) : (
                  <div
                    key={`placeholder-${i}`}
                    className={`arch flex ${s.aspect} w-full items-center justify-center bg-sand p-6 text-center`}
                  >
                    <span className="eyebrow text-[0.55rem] text-muted">Birthday / group table photo</span>
                  </div>
                ),
              )}
            </div>
          </Container>
        </section>
      ))}

      <section>
        <Container className="py-16">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-forest px-8 py-10 text-paper sm:px-12">
            <div>
              <Title plain="Come Experience" accent="Amaare" className="text-4xl" accentClass="text-peach" />
              <p className="mt-2 text-sm text-paper/70">Your table is waiting.</p>
            </div>
            <Button href="/contact">Reserve Your Table</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
