import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui";
import { Label, Pill } from "@/components/kit";
import { Brand } from "@/components/brand";
import { GalleryGrid, type GalleryPhoto } from "./gallery-grid";

export const metadata: Metadata = {
  title: "Gallery | Food, Drinks & Ambience in Adchini",
  description:
    "See inside Amaare Breeze Bar — the space, plated food, cocktails, evenings and celebrations at our contemporary dining restaurant in Adchini, South Delhi.",
};

// To add photos: drop the file in public/images and add a line here (w/h = the image's pixel size).
const photos: GalleryPhoto[] = [
  { src: "/images/space/conservatory-wide.jpg", w: 2400, h: 1794, alt: "The sunlit glasshouse with lanterns, palms and checkered floor", caption: "The glasshouse", category: "space" },
  { src: "/images/menu/highball-garden.jpg", w: 1800, h: 1200, alt: "A highball with a leaf garnish in Amaare's garden", caption: "Green, all around", category: "space" },
  { src: "/images/menu/dimsum.jpg", w: 1200, h: 1800, alt: "Dim sum lifted from a bamboo steamer", caption: "Steamed, to share", category: "food" },
  { src: "/images/menu/negroni.jpg", w: 1200, h: 1800, alt: "A ruby-red cocktail on an Amaare coaster", caption: "A ruby pour", category: "food" },
  { src: "/images/space/rooftop-arches-night.jpg", w: 2400, h: 1600, alt: "The rooftop terrace under lit arches after dark", caption: "Under the arches", category: "evenings" },
  { src: "/images/menu/pink-cocktail.jpg", w: 1200, h: 1800, alt: "A pink cocktail beside a sculpture in the garden", caption: "Golden hour", category: "evenings" },
  { src: "/images/menu/sushi.jpg", w: 1200, h: 1800, alt: "Avocado roll on a marble table", caption: "Made for the table", category: "food" },
  { src: "/images/space/statue-sunset.jpg", w: 2400, h: 1599, alt: "The giant sculpted face on Amaare's rooftop at sunset", caption: "Sunset on the rooftop", category: "space" },
  { src: "/images/menu/chaat-plate.jpg", w: 1200, h: 1800, alt: "A layered plate served in a ceramic hand", caption: "Something to celebrate", category: "celebrations" },
  { src: "/images/menu/golden-coupe.jpg", w: 1200, h: 1800, alt: "A golden cocktail in a coupe glass", caption: "Raise a glass", category: "celebrations" },
  { src: "/images/space/rooftop-entrance-night.jpg", w: 2400, h: 1600, alt: "The glowing onyx bar and the Amaare sign at night", caption: "The bar, after dark", category: "evenings" },
  { src: "/images/menu/matcha-sour.jpg", w: 1200, h: 1800, alt: "A green cocktail on a carved stone ledge", caption: "On the stone ledge", category: "space" },
  { src: "/images/menu/skewers.jpg", w: 1200, h: 1800, alt: "Glazed skewers lifted from the plate", caption: "Off the grill", category: "food" },
  { src: "/images/menu/amber-old-fashioned.jpg", w: 1200, h: 1800, alt: "An amber cocktail with a caramel garnish", caption: "Slow sips", category: "evenings" },
  { src: "/images/menu/lace-dumpling.jpg", w: 1200, h: 1800, alt: "Pan-crisped dumplings with golden lace", caption: "Golden lace", category: "food" },
  { src: "/images/space/marble-table.jpg", w: 1600, h: 2400, alt: "A red marble table set with brass lamp and amber glasses", caption: "Set for the evening", category: "space" },
  { src: "/images/menu/paprika-gin.jpg", w: 1200, h: 1800, alt: "A spiced-rim cocktail on an Amaare coaster", caption: "A spiced rim", category: "celebrations" },
  { src: "/images/space/bar-face.jpg", w: 1600, h: 2400, alt: "The carved stone face behind the bar", caption: "Behind the bar", category: "space" },
  { src: "/images/space/conservatory-lounge.jpg", w: 2400, h: 1600, alt: "Cream sofas beside the fountain in the glasshouse", caption: "By the fountain", category: "space" },
  { src: "/images/space/statue-dusk.jpg", w: 2400, h: 1599, alt: "The rooftop sculpture lit at dusk", caption: "Blue hour", category: "evenings" },
  { src: "/images/space/dining-sign.jpg", w: 1600, h: 2400, alt: "Sunlit dining room with lanterns and the Amaare sign", caption: "Lunch, in the light", category: "space" },
  { src: "/images/space/rooftop-aerial.jpg", w: 2400, h: 1599, alt: "The rooftop terrace and bar at golden hour", caption: "Golden hour", category: "celebrations" },
  { src: "/images/space/conservatory-aisle.jpg", w: 1600, h: 2400, alt: "A long row of tables under the wooden ceiling", caption: "Long tables", category: "celebrations" },
  { src: "/images/menu/ribs.jpg", w: 1200, h: 1800, alt: "Sticky glazed ribs with sesame", caption: "Sticky, charred, shared", category: "food" },
  { src: "/images/space/rooftop-terrace.jpg", w: 2400, h: 1599, alt: "Rooftop tables under glass cloches at dusk", caption: "The terrace", category: "celebrations" },
];

// Section copy from the SEO / AEO / GEO strategy doc.
const intro = {
  space: { title: "Settle In. Stay Awhile.", text: "A setting made for easy conversations and memorable evenings." },
  food: { title: "Made to Be Savoured", text: "Thoughtfully crafted plates, refreshing drinks, and flavours worth coming back for." },
  evenings: { title: "Good Food. Good Music. Good Company.", text: "From relaxed dinners to lively nights, discover the energy of Amaare." },
  celebrations: { title: "Make It an Amaare Moment", text: "Birthdays, gatherings, and occasions worth raising a glass to." },
};

export default function GalleryPage() {
  return (
    <div className="bg-olive-deep text-cream">
      <section className="relative overflow-hidden">
        <Brand kind="mark" tone="cream" className="pointer-events-none absolute -right-24 top-24 w-[360px] opacity-[0.035]" />
        <Container className="relative pb-6 pt-36 text-center sm:pt-40">
          <div className="flex items-center justify-center gap-4 text-sage-pale">
            <span aria-hidden className="h-px w-8 bg-current opacity-70" />
            <Label dark>Gallery</Label>
            <span aria-hidden className="h-px w-8 bg-current opacity-70" />
          </div>
          <h1 className="display mt-5 text-[3rem] leading-[0.98] sm:text-[5.2rem]">
            The Amaare <span className="accent text-sage-pale">Experience</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-[1.75] text-cream/75">
            Food, ambience, people, and moments around the table.
          </p>
          <GalleryGrid photos={photos} intro={intro} />
        </Container>
      </section>

      <section className="mt-10 border-t border-sage/25 bg-olive">
        <Container className="flex flex-wrap items-center justify-between gap-7 py-14">
          <div>
            <h2 className="display text-[2.2rem] leading-[1.05] sm:text-[3rem]">
              Come Experience <span className="accent text-sage-pale">Amaare</span>
            </h2>
            <p className="mt-2 text-cream/70">Your table is waiting.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Pill href="/contact" tone="cream">
              Reserve Your Table
            </Pill>
            <Pill href={site.instagramUrl} tone="outline">
              {site.instagram} ↗
            </Pill>
          </div>
        </Container>
      </section>
    </div>
  );
}
