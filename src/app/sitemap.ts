import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const paths = [
  "/",
  "/nyheter",
  "/traningstider",
  "/om-oss",
  "/kontakt",
  "/bli-medlem",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date("2026-11-03"),
    changeFrequency: path === "/" || path.startsWith("/nyheter") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
