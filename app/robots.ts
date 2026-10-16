import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/reading-room" },
      ...[
        "Googlebot",
        "Bingbot",
        "Google-Extended",
        "GPTBot",
        "OAI-SearchBot",
        "ChatGPT-User",
        "PerplexityBot",
        "Perplexity-User",
        "ClaudeBot",
        "Claude-SearchBot",
        "Applebot-Extended",
      ].map((userAgent) => ({ userAgent, allow: "/", disallow: "/reading-room" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
