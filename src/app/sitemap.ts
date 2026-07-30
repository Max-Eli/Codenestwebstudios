import type { MetadataRoute } from "next";
import { site, caseStudies, insights, hasWork, hasInsights } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // /work and /insights are omitted while empty — they're noindex in that
  // state, so listing them here would contradict the page's own directive.
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    ...(hasWork ? [{ path: "/work", priority: 0.8 }] : []),
    { path: "/engagements", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    ...(hasInsights ? [{ path: "/insights", priority: 0.7 }] : []),
    { path: "/contact", priority: 0.9 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...caseStudies.map((c) => ({
      url: `${site.url}/work/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...insights.map((p) => ({
      url: `${site.url}/insights/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
