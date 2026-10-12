"use client";

import { useEffect, useState } from "react";

/** Sticky section index that follows the scroll position. */
export function GalleryTabs({ tabs }: { tabs: { id: string; label: string }[] }) {
  const [active, setActive] = useState(tabs[0]?.id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [tabs]);

  return (
    <nav aria-label="Gallery sections" className="sticky top-[68px] z-30 border-b border-line bg-cream/95 backdrop-blur-sm">
      <ul className="mx-auto flex max-w-[1240px] gap-8 overflow-x-auto px-5 sm:justify-center sm:gap-14 sm:px-10">
        {tabs.map((t, i) => (
          <li key={t.id} className="shrink-0">
            <a
              href={`#${t.id}`}
              aria-current={active === t.id ? "true" : undefined}
              className={`kicker flex items-baseline gap-2 border-b py-5 transition-colors ${
                active === t.id ? "border-sage-deep text-ink" : "border-transparent text-muted hover:text-ink"
              }`}
            >
              <span className="accent text-base normal-case tracking-normal text-sage">{String(i + 1).padStart(2, "0")}</span>
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
