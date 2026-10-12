import type { MetadataRoute } from "next";
import { nav, posts, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...nav.map((n) => ({ url: `${site.url}${n.href === "/" ? "" : n.href}` })),
    ...posts.map((p) => ({ url: `${site.url}/journal/${p.slug}` })),
  ];
}
