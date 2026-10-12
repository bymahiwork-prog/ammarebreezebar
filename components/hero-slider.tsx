"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Full-bleed crossfading photo slideshow with dots, used behind the home hero. */
export function HeroSlider({ slides }: { slides: { src: string; pos?: string }[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <>
      <div className="absolute inset-0 -z-10">
        {slides.map((s, n) => (
          <div
            key={s.src}
            aria-hidden={n !== i}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ${n === i ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={s.src}
              alt=""
              fill
              priority={n === 0}
              sizes="100vw"
              className={`object-cover ${n === i ? "animate-slowzoom" : ""}`}
              style={{ objectPosition: s.pos ?? "center" }}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 right-5 z-10 flex gap-2 sm:right-10">
        {slides.map((s, n) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Show photo ${n + 1}`}
            aria-current={n === i}
            className={`h-[3px] rounded-full transition-all duration-500 ${n === i ? "w-8 bg-cream" : "w-3 bg-cream/40 hover:bg-cream/70"}`}
          />
        ))}
      </div>
    </>
  );
}
