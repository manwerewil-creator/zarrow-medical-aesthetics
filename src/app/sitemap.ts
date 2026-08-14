import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/treatments",
    "/gallery",
    "/about",
    "/contact",
    "/booking",
  ];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/treatments" ? 0.9 : 0.7,
  }));
}
