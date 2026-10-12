"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Brand } from "./brand";

/** Logo on the left, links in the middle, Reserve a Table on the right. */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 text-cream transition-[background-color,border-color] duration-500 ${
          solid || open ? "border-b border-cream/10 bg-olive-deep/95 backdrop-blur-md" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto grid max-w-[1320px] grid-cols-[auto_1fr_auto] items-center gap-6 px-5 transition-[height] duration-500 sm:px-10 ${
            solid ? "h-[76px]" : "h-[96px]"
          }`}
        >
          <Link href="/" aria-label={`${site.name} — home`} className="block shrink-0">
            <Brand kind="wordmark" tone="cream" priority className={`transition-[width] duration-500 ${solid ? "w-[118px]" : "w-[138px]"}`} />
          </Link>

          <nav aria-label="Main" className="hidden items-center justify-center gap-[clamp(1.4rem,2.6vw,2.8rem)] lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`kicker relative whitespace-nowrap py-2 text-[0.66rem] transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-sage-pale after:transition-all after:duration-500 ${
                  isActive(item.href) ? "text-sage-pale after:w-full" : "text-cream/85 after:w-0 hover:text-cream hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="lg:hidden" />

          <div className="flex items-center justify-end gap-4">
            <Link
              href="/contact"
              className={`hidden whitespace-nowrap rounded-full px-6 py-2.5 text-[0.8rem] font-medium tracking-wide transition-colors sm:inline-block ${
                solid ? "bg-cream text-olive-deep hover:bg-paper" : "border border-cream/70 text-cream hover:bg-cream hover:text-olive-deep"
              }`}
            >
              Reserve a Table
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center border border-cream/30 lg:hidden"
            >
              <span aria-hidden className="flex w-5 flex-col gap-[5px]">
                <span className={`h-px bg-current transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
                <span className={`h-px bg-current transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-olive-deep px-6 pb-10 pt-32 text-cream lg:hidden"
      >
        <Brand kind="mark" tone="cream" className="pointer-events-none absolute -right-20 bottom-20 w-80 opacity-[0.06]" />
        <ul className="relative">
          {nav.map((item, i) => (
            <li key={item.href} className="animate-rise border-b border-cream/10" style={{ animationDelay: `${i * 60}ms` }}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`display block py-4 text-[2.2rem] ${isActive(item.href) ? "text-sage-pale" : "text-cream"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative mt-10 space-y-5">
          <Link href="/contact" onClick={() => setOpen(false)} className="kicker inline-block bg-cream px-7 py-4 text-olive-deep">
            Reserve a Table
          </Link>
          <p className="text-sm text-cream/60">
            {site.area} · <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </div>
      </div>
    </>
  );
}
