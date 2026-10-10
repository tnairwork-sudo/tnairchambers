import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import OpportunityAtlasIndex from "@/components/OpportunityAtlasIndex";
import {
  getAllOpportunityAtlasArticles,
  getFeaturedOpportunityAtlasArticle,
  siteUrl,
} from "@/lib/opportunity-atlas";
import { ogImage, organizationId } from "@/lib/site";

const articles = getAllOpportunityAtlasArticles();
const featuredArticle = getFeaturedOpportunityAtlasArticle() ?? articles[0];

export const metadata: Metadata = {
  title: "Opportunity Atlas: International Business Opportunities and Global Expansion",
  description:
    "Opportunity Atlas is Nair & Co’s publication covering international business opportunities, market-entry strategy, foreign investment, global expansion, and cross-border regulatory advisory.",
  keywords: [
    "International Business Opportunities",
    "Market Entry Strategy",
    "Foreign Investment",
    "Global Expansion",
    "Cross-Border Business",
    "Regulatory Advisory",
    "Opportunity Atlas",
  ],
  alternates: { canonical: `${siteUrl}/opportunity-atlas` },
  openGraph: {
    title: "Opportunity Atlas | Nair & Co",
    description:
      "Strategic insight into foreign investment, market entry, regulatory developments, and cross-border growth opportunities.",
    url: `${siteUrl}/opportunity-atlas`,
    siteName: "Nair & Co",
    type: "website",
    images: [
      {
        url: featuredArticle.openGraphImage,
        width: 1200,
        height: 630,
        alt: featuredArticle.featuredImage.alt,
      },
      ogImage,
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opportunity Atlas | Nair & Co",
    description:
      "Strategic insight into foreign investment, market entry, regulatory developments, and cross-border growth opportunities.",
    images: [featuredArticle.openGraphImage],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Opportunity Atlas",
  url: `${siteUrl}/opportunity-atlas`,
  description:
    "Nair & Co’s publication covering international business opportunities, market-entry strategy, foreign investment, global expansion, and cross-border regulatory advisory.",
  isPartOf: {
    "@type": "WebSite",
    "@id": organizationId,
    name: "Nair & Co",
    url: siteUrl,
  },
};

export default function OpportunityAtlasPage() {
  if (!featuredArticle) {
    return null;
  }

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <OpportunityAtlasIndex
        articles={articles}
        featuredArticle={featuredArticle}
      />
    </PageLayout>
  );
}
