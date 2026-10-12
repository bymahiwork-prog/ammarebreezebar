"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Brand } from "./brand";

const left = nav.slice(0, 3);
const right = nav.slice(3);

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
  const onDark = !solid && !open;

  const link = (item: { href: string; label: string }) => (
    <Link
      key={item.href}
      href={item.href}
      aria-current={isActive(item.href) ? "page" : undefined}
      className={`kicker relative py-2 transition-colors after:absolute after:-bottom-0.5 after:left-1/2 after:h-px after:-translate-x-1/2 after:bg-current after:transition-all after:duration-500 ${
        isActive(item.href) ? "after:w-full" : "after:w-0 hover:after:w-full"
      }`}
    >
      {item.label}
    </Link>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "border-b border-line/80 bg-cream/95 text-ink backdrop-blur-sm" : "text-cream"
        }`}
      >
        <div className={`mx-auto grid max-w-[1240px] grid-cols-[1fr_auto_1fr] items-center px-5 transition-all duration-500 sm:px-10 ${solid ? "h-[68px]" : "h-[92px]"}`}>
          <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
            {left.map(link)}
          </nav>
          <div className="lg:hidden" />

          <Link href="/" aria-label={`${site.name} — home`} className={`${onDark ? "text-cream" : "text-sage"} transition-colors`}>
            <Brand kind="wordmark" className={`transition-all duration-500 ${solid ? "w-[118px]" : "w-[150px]"}`} />
          </Link>

          <div className="flex items-center justify-end gap-9">
            <nav aria-label="More" className="hidden items-center gap-9 lg:flex">
              {right.map(link)}
            </nav>
            <Link
              href="/contact"
              className={`kicker hidden border px-5 py-3 transition-colors xl:inline-block ${
                onDark ? "border-cream/60 hover:bg-cream hover:text-olive" : "border-sage-deep bg-sage-deep text-paper hover:bg-olive"
              }`}
            >
              Reserve
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu"
              className={`kicker relative z-50 flex items-center gap-3 lg:hidden ${open ? "text-cream" : ""}`}
            >
              {open ? "Close" : "Menu"}
              <span aria-hidden className="flex w-6 flex-col gap-[5px]">
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
        className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-olive px-6 pb-10 pt-28 text-cream lg:hidden"
      >
        <Brand kind="mark" className="pointer-events-none absolute -right-16 bottom-24 w-72 text-cream/[0.06]" />
        <ul className="relative space-y-1">
          {nav.map((item, i) => (
            <li key={item.href} className="animate-rise" style={{ animationDelay: `${i * 60}ms` }}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`display block py-1.5 text-[2.6rem] ${isActive(item.href) ? "text-sage-pale" : "text-cream"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative mt-10 space-y-5">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="kicker inline-block bg-cream px-7 py-4 text-olive"
          >
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
