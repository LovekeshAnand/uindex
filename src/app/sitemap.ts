import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// ponytail: single-page site; add per-library routes here if they ever get their own pages
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: "2026-10-17",
      changeFrequency: "weekly",
      priority: 1,
      images: [`${site.url}/opengraph-image`],
    },
  ];
}
