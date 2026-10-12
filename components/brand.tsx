import Image from "next/image";

const sizes = {
  full: { w: 613, h: 553 },
  mark: { w: 332, h: 316 },
  wordmark: { w: 613, h: 204 },
};

type Kind = keyof typeof sizes;
type Tone = "cream" | "sage" | "olive";

/**
 * The Amaare logo, traced to vector from the brand file and saved in
 * brand colours under public/brand (e.g. full-cream.svg, wordmark-sage.svg).
 */
export function Brand({
  kind = "wordmark",
  tone = "sage",
  className = "",
  label,
  priority = false,
}: {
  kind?: Kind;
  tone?: Tone;
  className?: string;
  label?: string;
  priority?: boolean;
}) {
  const s = sizes[kind];
  const t = kind !== "mark" && tone === "olive" ? "sage" : tone;
  return (
    <Image
      src={`/brand/${kind}-${t}.svg`}
      alt={label ?? ""}
      aria-hidden={label ? undefined : true}
      width={s.w}
      height={s.h}
      priority={priority}
      className={`h-auto select-none ${className}`}
      draggable={false}
    />
  );
}
