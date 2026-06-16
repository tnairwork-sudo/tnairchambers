"use client";

import { useMemo, useState } from "react";
import ContactReveal from "@/components/ContactReveal";
import OpportunityAtlasArticleCard from "@/components/OpportunityAtlasArticleCard";
import {
  opportunityAtlasCategories,
  type OpportunityAtlasArticle,
} from "@/lib/opportunity-atlas";

interface OpportunityAtlasIndexProps {
  articles: OpportunityAtlasArticle[];
  featuredArticle: OpportunityAtlasArticle;
}

export default function OpportunityAtlasIndex({
  articles,
  featuredArticle,
}: OpportunityAtlasIndexProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") {
      return articles;
    }

    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory, articles]);

  const latestArticles = useMemo(() => {
    const nonFeatured = filteredArticles.filter(
      (article) => article.slug !== featuredArticle.slug
    );

    return nonFeatured.length > 0 ? nonFeatured : filteredArticles;
  }, [featuredArticle.slug, filteredArticles]);

  return (
    <>
      <section className="min-h-[70vh] flex items-end border-b border-border">
        <div className="container-site py-20 md:py-28 lg:py-36">
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-rule" />
            <span className="label">Opportunity Atlas</span>
          </div>
          <h1 className="heading-display text-[clamp(2.8rem,6vw,5.6rem)] text-parchment mb-6 text-balance max-w-hero">
            Opportunity Atlas
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-gold-light font-light mb-8">
            Mapping Global Business Opportunities.
          </p>
          <p className="text-base md:text-lg text-parchment-dim leading-relaxed max-w-3xl">
            Opportunity Atlas provides strategic insights into emerging markets,
            foreign investment opportunities, international expansion
            strategies, regulatory developments, and sector-specific growth
            trends across the world.
          </p>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="gold-rule" />
          <span className="label">Featured Article</span>
        </div>
        <OpportunityAtlasArticleCard article={featuredArticle} featured />
      </section>

      <section className="container-site pb-12 md:pb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="gold-rule" />
              <span className="label">Category Filters</span>
            </div>
            <h2 className="heading-section text-3xl md:text-4xl text-parchment text-balance">
              Latest insights
            </h2>
          </div>
          <p className="text-sm text-parchment-dim leading-relaxed max-w-xl">
            Filter Opportunity Atlas by theme to surface market-entry analysis,
            foreign investment guidance, regulatory updates, and expansion-led
            commercial strategy.
          </p>
        </div>

        <div
          className="flex flex-wrap gap-3 mb-10"
          role="toolbar"
          aria-label="Filter Opportunity Atlas articles by category"
        >
          {[
            "All",
            ...opportunityAtlasCategories,
          ].map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`px-4 py-2 border text-2xs tracking-widest uppercase transition-colors duration-200 ${
                  isActive
                    ? "border-parchment bg-parchment text-ink"
                    : "border-border text-parchment-dim hover:border-parchment-dim hover:text-parchment"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {latestArticles.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {latestArticles.map((article) => (
              <OpportunityAtlasArticleCard
                key={article.slug}
                article={article}
              />
            ))}
          </div>
        ) : (
          <div className="border border-border bg-surface p-8 md:p-10">
            <p className="font-serif text-2xl font-light text-parchment mb-3">
              No insights in this category yet.
            </p>
            <p className="text-sm md:text-base text-parchment-dim leading-relaxed max-w-prose-tight">
              Explore another Opportunity Atlas category to view currently
              published analysis.
            </p>
          </div>
        )}
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-site py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="gold-rule" />
              <span className="label">Contact TN Chambers</span>
            </div>
            <h2 className="heading-section text-4xl md:text-5xl text-parchment mb-6 text-balance">
              Exploring new markets?
            </h2>
            <p className="text-base md:text-lg text-parchment-dim leading-relaxed mb-10 max-w-prose-tight">
              TN Chambers helps businesses navigate international expansion,
              regulatory compliance, investment structuring, and strategic
              growth opportunities.
            </p>
            <ContactReveal />
          </div>
        </div>
      </section>
    </>
  );
}
