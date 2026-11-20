import { MetadataRoute } from "next";
import { CORE_VERTICALS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://corevilt.com";

  const staticRoutes = [
    "",
    "/about",
    "/solutions",
    "/industries",
    "/methodology",
    "/projects",
    "/contact",
    "/amc-sla",
    "/careers",
    "/quality-policy",
    "/hse-policy",
    "/infosec-policy",
    "/sustainability",
    "/vendor-portal",
    "/terms-of-engagement",
    "/privacy-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/solutions" || route === "/contact" ? 0.9 : 0.8,
  }));

  const verticalRoutes = CORE_VERTICALS.map((vertical) => ({
    url: `${baseUrl}/solutions/${vertical.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...verticalRoutes];
}
