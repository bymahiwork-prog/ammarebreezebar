import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type BtnVariant = "solid" | "outline" | "light" | "outline-light";

const btnStyles: Record<BtnVariant, string> = {
  solid: "bg-clay text-paper hover:bg-clay-dark",
  outline: "border border-ink/30 text-ink hover:border-clay hover:text-clay",
  light: "bg-paper text-forest hover:bg-sand",
  "outline-light": "border border-paper/50 text-paper hover:bg-paper/10",
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
  const external = href.startsWith("http") || href.startsWith("tel:");
  const cls = `inline-flex items-center justify-center rounded-full px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-colors ${btnStyles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`eyebrow inline-block border-b pb-1 font-medium transition-colors ${
        light ? "border-peach/60 text-peach hover:text-paper" : "border-clay/50 text-clay hover:text-clay-dark"
      }`}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow text-muted ${className}`}>{children}</p>;
}

/** Heading with an italic accent part, e.g. "More Than" + "Just a Meal". */
export function Title({
  plain,
  accent,
  as: Tag = "h2",
  className = "",
  accentClass = "text-clay",
}: {
  plain: string;
  accent?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  accentClass?: string;
}) {
  return (
    <Tag className={`font-display font-light leading-[1.05] tracking-[-0.01em] ${className}`}>
      {plain}
      {accent && (
        <>
          {" "}
          <em className={`font-light ${accentClass}`}>{accent}</em>
        </>
      )}
    </Tag>
  );
}

export function Photo({
  src,
  alt,
  shape = "rounded",
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  shape?: "arch" | "rounded" | "square";
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const radius = shape === "arch" ? "arch" : shape === "rounded" ? "rounded-2xl" : "";
  return (
    <div className={`relative overflow-hidden bg-sand ${radius} ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}
