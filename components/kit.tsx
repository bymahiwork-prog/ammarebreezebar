import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { directionsUrl } from "@/lib/site";
import { Brand } from "./brand";
import { Container, Reveal } from "./ui";

/* Shared building blocks for every page — the same look as the home page. */

export function Pill({
  href,
  children,
  tone = "solid",
}: {
  href: string;
  children: ReactNode;
  tone?: "solid" | "outline" | "cream" | "outline-dark";
}) {
  const styles = {
    solid: "bg-sage-deep text-cream hover:bg-olive",
    cream: "bg-cream text-olive-deep hover:bg-paper",
    outline: "border border-cream/70 text-cream hover:bg-cream hover:text-olive-deep",
    "outline-dark": "border border-olive/40 text-olive hover:bg-olive hover:text-cream",
  }[tone];
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.82rem] font-medium tracking-wide transition-colors duration-300 ${styles}`;
  return /^(https?:|tel:)/.test(href) ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Label({
  children,
  dark = false,
  center = false,
  mark = false,
}: {
  children: ReactNode;
  dark?: boolean;
  center?: boolean;
  mark?: boolean;
}) {
  const text = <p className={`kicker text-[0.72rem] tracking-[0.3em] ${dark ? "text-sage-pale" : "text-sage"}`}>{children}</p>;
  if (!mark) return <div className={center ? "flex justify-center" : ""}>{text}</div>;
  return (
    <div className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
      <Brand kind="mark" tone={dark ? "cream" : "sage"} className="w-7 opacity-70" />
      {text}
    </div>
  );
}

/** Heading in Bodoni with an italic accent. */
export function Heading({
  plain,
  accent,
  dark = false,
  as: Tag = "h2",
  className = "",
  center = false,
  breakAccent = false,
}: {
  plain: string;
  accent?: string;
  dark?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
  center?: boolean;
  breakAccent?: boolean;
}) {
  return (
    <Tag
      className={`display leading-[1.04] ${dark ? "text-cream" : "text-olive"} ${center ? "text-center" : ""} ${
        className || "mt-4 text-[2.5rem] sm:text-[3.4rem]"
      }`}
    >
      {plain}
      {accent && (
        <>
          {breakAccent ? <br /> : " "}
          <span className={`accent ${dark ? "text-sage-pale" : "text-sage"}`}>{accent}</span>
        </>
      )}
    </Tag>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  sizes = "50vw",
  pos,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  pos?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-olive ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={pos ? { objectPosition: pos } : undefined}
      />
    </div>
  );
}

/** Photo inside an arch with a fine outline — the Amaare signature frame. */
export function ArchPhoto({
  src,
  alt,
  className = "",
  sizes = "50vw",
  pos,
  dark = true,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  pos?: string;
  dark?: boolean;
}) {
  return (
    <div className="relative">
      <div aria-hidden className={`absolute -inset-2.5 rounded-t-full border ${dark ? "border-sage-pale/30" : "border-sage/35"}`} />
      <Photo src={src} alt={alt} className={`rounded-t-full ${className}`} sizes={sizes} pos={pos} />
    </div>
  );
}

/** Inner-page opener: full-bleed photo, text on the left, like the home hero. */
export function PhotoHero({
  image,
  pos,
  label,
  plain,
  accent,
  children,
}: {
  image: string;
  pos?: string;
  label: string;
  plain: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-olive-deep text-cream">
      <div className="absolute inset-0 -z-10 animate-slowzoom">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: pos ?? "center" }} />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(24,30,22,.86)_0%,rgba(24,30,22,.55)_50%,rgba(24,30,22,.2)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-olive-deep/80 to-transparent" />
      <Container className="pb-14 pt-36 sm:pb-16">
        <div className="max-w-2xl">
          <div className="animate-rise">
            <Label dark>{label}</Label>
          </div>
          <h1 className="display mt-4 animate-rise text-[2.9rem] leading-[1.02] [animation-delay:120ms] sm:text-[4.4rem]">
            {plain}
            {accent && (
              <>
                <br />
                <span className="accent text-sage-pale">{accent}</span>
              </>
            )}
          </h1>
          {children && <div className="mt-6 max-w-lg animate-rise text-[1rem] leading-[1.75] text-cream/85 [animation-delay:220ms]">{children}</div>}
        </div>
      </Container>
    </section>
  );
}

/** Closing call to action over a photo. */
export function FinalCta({
  image,
  pos,
  plain,
  accent,
  lines,
  primary = { href: "/contact", label: "Reserve Your Table" },
  secondary = { href: directionsUrl, label: "Get Directions" },
}: {
  image: string;
  pos?: string;
  plain: string;
  accent?: string;
  lines: string[];
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string } | null;
}) {
  return (
    <section className="relative isolate overflow-hidden py-24 text-center text-cream">
      <Image src={image} alt="" fill sizes="100vw" className="-z-10 object-cover" style={{ objectPosition: pos ?? "center" }} />
      <div className="absolute inset-0 -z-10 bg-olive-deep/75" />
      <Container className="max-w-2xl">
        <Reveal>
          <Brand kind="mark" tone="cream" className="mx-auto w-12 opacity-90" />
          <h2 className="display mt-5 text-[2.6rem] leading-[1.05] sm:text-[3.8rem]">
            {plain} {accent && <span className="accent text-sage-pale">{accent}</span>}
          </h2>
          {lines.map((l) => (
            <p key={l} className="mt-2 text-[1.05rem] text-cream/85 first-of-type:mt-4">
              {l}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Pill href={primary.href} tone="cream">
              {primary.label}
            </Pill>
            {secondary && (
              <Pill href={secondary.href} tone="outline">
                {secondary.label}
              </Pill>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
