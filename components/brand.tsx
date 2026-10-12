import type { CSSProperties } from "react";

const files = {
  mark: { src: "/brand/logo-mark.svg", ratio: "332 / 316" },
  wordmark: { src: "/brand/logo-wordmark.svg", ratio: "613 / 204" },
  full: { src: "/brand/logo-full.svg", ratio: "613 / 553" },
};

/**
 * The Amaare logo, traced to vector from the brand file.
 * It takes the current text colour, so `text-sage` / `text-cream` recolour it.
 */
export function Brand({
  kind = "wordmark",
  className = "",
  label,
}: {
  kind?: keyof typeof files;
  className?: string;
  label?: string;
}) {
  const f = files[kind];
  const style: CSSProperties = {
    aspectRatio: f.ratio,
    maskImage: `url(${f.src})`,
    WebkitMaskImage: `url(${f.src})`,
  };
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`brand-mask ${className}`}
      style={style}
    />
  );
}
