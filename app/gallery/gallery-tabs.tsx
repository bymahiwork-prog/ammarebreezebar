"use client";

import { useState } from "react";

export function GalleryTabs({ tabs }: { tabs: { id: string; label: string }[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  return (
    <nav aria-label="Gallery sections" className="mt-8 flex flex-wrap justify-center gap-2">
      {tabs.map((t) => (
        <a
          key={t.id}
          href={`#${t.id}`}
          onClick={() => setActive(t.id)}
          aria-current={active === t.id ? "true" : undefined}
          className={`rounded-full border px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em] transition-colors ${
            active === t.id ? "border-forest bg-forest text-paper" : "border-line text-ink/80 hover:border-clay hover:text-clay"
          }`}
        >
          {t.label}
        </a>
      ))}
    </nav>
  );
}
