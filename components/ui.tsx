import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type BtnVariant = "solid" | "line" | "light" | "line-light";

const btn: Record<BtnVariant, string> = {
  solid: "bg-sage-deep text-paper hover:bg-olive",
  line: "border border-ink/35 text-ink hover:bg-ink hover:text-paper hover:border-ink",
  light: "bg-cream text-olive hover:bg-paper",
  "line-light": "border border-cream/50 text-cream hover:bg-cream hover:text-olive hover:border-cream",
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  className?: string;
}) {
  const cls = `group inline-flex items-center justify-center gap-3 px-7 py-[0.95rem] text-[0.66rem] font-normal uppercase tracking-[0.28em] transition-colors duration-300 ${btn[variant]} ${className}`;
  const inner = (
    <>
      {children}
      <span aria-hidden className="inline-block h-px w-5 bg-current transition-all duration-300 group-hover:w-8" />
    </>
  );
  if (/^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Understated text link with a drawn underline. */
export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`kicker group relative inline-block pb-2 ${light ? "text-sage-pale" : "text-sage-deep"}`}
    >
      {children}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-current opacity-50 transition-transform duration-500 group-hover:scale-x-[0.4]"
      />
    </Link>
  );
}

export function Kicker({ children, className = "", light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={`kicker flex items-center gap-4 ${light ? "text-sage-pale" : "text-sage"} ${className}`}>
      <span aria-hidden className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

/** Display heading: Gilda for the plain words, Cormorant italic for the accent. */
export function Display({
  plain,
  accent,
  as: Tag = "h2",
  className = "",
  accentClass = "text-sage",
  breakAccent = false,
}: {
  plain: string;
  accent?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  accentClass?: string;
  breakAccent?: boolean;
}) {
  return (
    <Tag className={`display ${className}`}>
      {plain}
      {accent && (
        <>
          {breakAccent ? <br /> : " "}
          <span className={`accent ${accentClass}`}>{accent}</span>
        </>
      )}
    </Tag>
  );
}

export function Img({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  zoom = true,
  pos,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
  /** CSS object-position, e.g. "center 20%" to keep faces in frame. */
  pos?: string;
}) {
  return (
    <div className={`group/img relative overflow-hidden bg-linen ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={pos ? { objectPosition: pos } : undefined}
        className={`object-cover ${zoom ? "transition-transform duration-[1400ms] ease-out group-hover/img:scale-[1.04]" : ""}`}
      />
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-10 ${className}`}>{children}</div>;
}

/** Wrapper that fades its child in on scroll. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div data-reveal className={className} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}
