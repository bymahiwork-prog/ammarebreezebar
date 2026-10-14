"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type Category = "space" | "food" | "evenings" | "celebrations";

export type GalleryPhoto = {
  src: string;
  w: number;
  h: number;
  alt: string;
  caption: string;
  category: Category;
};

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "space", label: "The Space" },
  { id: "food", label: "Food & Drinks" },
  { id: "evenings", label: "The Evenings" },
  { id: "celebrations", label: "Celebrations" },
];

const categoryLabel: Record<Category, string> = {
  space: "The Space",
  food: "Food & Drinks",
  evenings: "The Evenings",
  celebrations: "Celebrations",
};

/** Filterable masonry gallery with a lightbox — same behaviour as the Zammaya gallery. */
export function GalleryGrid({ photos, intro }: { photos: GalleryPhoto[]; intro: Record<Category, { title: string; text: string }> }) {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const visible = filter === "all" ? photos : photos.filter((p) => p.category === filter);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);
  const step = useCallback(
    (dir: 1 | -1) => setOpenIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <>
      <div role="group" aria-label="Filter photos" className="mt-8 flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full border px-5 py-2.5 text-[0.78rem] font-medium tracking-wide transition-colors ${
              filter === f.id
                ? "border-cream bg-cream text-olive-deep"
                : "border-cream/30 text-cream/85 hover:border-sage-pale hover:text-sage-pale"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filter !== "all" && (
        <div className="mx-auto mt-10 max-w-xl text-center">
          <h2 className="display text-[2rem] text-cream sm:text-[2.4rem]">{intro[filter].title}</h2>
          <p className="mt-2 text-cream/70">{intro[filter].text}</p>
        </div>
      )}

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((p, i) => (
          <button
            key={p.src}
            type="button"
            aria-label={`Open photo: ${p.caption}`}
            onClick={(e) => {
              triggerRef.current = e.currentTarget;
              setOpenIndex(i);
            }}
            className="group relative mb-4 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-2xl bg-olive text-left"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              className="block h-auto w-full brightness-[0.93] transition-[transform,filter] duration-700 group-hover:scale-[1.04] group-hover:brightness-100"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-olive-deep/85 via-transparent to-transparent opacity-100 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100" />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-5 bottom-4 flex flex-col gap-1 transition-all duration-500 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
            >
              <span className="kicker text-[0.6rem] tracking-[0.26em] text-sage-pale">{categoryLabel[p.category]}</span>
              <span className="accent text-[1.4rem] leading-tight text-cream">{p.caption}</span>
            </span>
          </button>
        ))}
      </div>

      {current && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={(e) => e.target === e.currentTarget && close()}
          className="fixed inset-0 z-[100] grid grid-cols-[1fr_1fr] grid-rows-[64px_minmax(0,1fr)_auto_auto] items-center bg-olive-deep/[0.97] p-3 sm:grid-cols-[64px_minmax(0,1fr)_64px] sm:grid-rows-[64px_minmax(0,1fr)_auto] sm:p-4"
        >
          <span className="kicker justify-self-start pl-2 text-[0.66rem] tracking-[0.26em] text-sage-pale sm:col-span-2">
            {String(openIndex + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="flex h-12 w-12 items-center justify-center justify-self-end rounded-full border border-cream/30 text-2xl text-cream hover:border-sage-pale hover:text-sage-pale sm:col-start-3"
          >
            ×
          </button>
          <figure className="relative col-span-2 h-full w-full sm:col-span-1 sm:col-start-2 sm:row-start-2">
            <Image src={current.src} alt={current.alt} fill sizes="90vw" className="object-contain" />
          </figure>
          {visible.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="row-start-4 flex h-12 w-12 items-center justify-center justify-self-start rounded-full border border-cream/30 text-xl text-cream hover:border-sage-pale hover:text-sage-pale sm:col-start-1 sm:row-start-2"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="col-start-2 row-start-4 flex h-12 w-12 items-center justify-center justify-self-end rounded-full border border-cream/30 text-xl text-cream hover:border-sage-pale hover:text-sage-pale sm:col-start-3 sm:row-start-2"
              >
                →
              </button>
            </>
          )}
          <p className="col-span-2 row-start-3 flex items-baseline gap-4 py-3 text-sm text-cream/75 sm:col-span-3">
            <span className="accent text-[1.4rem] text-cream">{current.caption}</span>
            <span className="kicker text-[0.6rem] tracking-[0.24em] text-sage-pale">{categoryLabel[current.category]}</span>
          </p>
        </div>
      )}
    </>
  );
}
