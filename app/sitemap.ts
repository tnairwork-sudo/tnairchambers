import type { MetadataRoute } from "next";
import { getGuides, guidesIndexUrl, guidesPublishedOn, guideUrl } from "@/lib/guides";
import { getAllOpportunityAtlasArticles, siteUrl } from "@/lib/opportunity-atlas";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/energy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/entering-india`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/ngos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/employers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/opportunity-atlas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = getAllOpportunityAtlasArticles().map(
    (article) => ({
      url: `${siteUrl}/opportunity-atlas/${article.slug}`,
      ...(article.publishedAt
        ? { lastModified: new Date(article.publishedAt) }
        : {}),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const guideRoutes: MetadataRoute.Sitemap = [
    {
      url: guidesIndexUrl,
      lastModified: new Date(guidesPublishedOn),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...getGuides().map((guide) => ({
      url: guideUrl(guide.slug),
      lastModified: new Date(guidesPublishedOn),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticRoutes, ...articleRoutes, ...guideRoutes];
}
