"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  formatOpportunityAtlasDate,
  type OpportunityAtlasArticle,
} from "@/lib/opportunity-atlas";

interface OpportunityAtlasArticleCardProps {
  article: OpportunityAtlasArticle;
  featured?: boolean;
}

export default function OpportunityAtlasArticleCard({
  article,
  featured = false,
}: OpportunityAtlasArticleCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (!motion) {
    return (
    <article
      className={`border border-border bg-ink transition-colors duration-300 hover:bg-surface ${
        featured ? "overflow-hidden" : "h-full"
      }`}
    >
      <Link
        href={`/opportunity-atlas/${article.slug}`}
        className={`block h-full ${featured ? "" : "flex flex-col"}`}
      >
        <div className={`relative ${featured ? "aspect-[16/9] md:aspect-[5/4]" : "aspect-[16/10]"}`}>
          <Image
            src={article.featuredImage.src}
            alt={article.featuredImage.alt}
            fill
            className="object-cover"
            sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
          />
        </div>

        <div className={`flex flex-col ${featured ? "p-8 md:p-10 gap-5" : "p-6 md:p-8 gap-4 flex-1"}`}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="label">{article.category}</span>
            {article.publishedAt ? (
              <span className="text-2xs tracking-wide uppercase text-parchment-dim/70">
                {formatOpportunityAtlasDate(article.publishedAt)}
              </span>
            ) : null}
            <span className="text-2xs tracking-wide uppercase text-parchment-dim/70">
              {article.readingTime}
            </span>
          </div>

          <div className="space-y-4">
            <h3
              className={`font-serif font-light text-parchment text-balance ${
                featured ? "text-3xl md:text-4xl" : "text-2xl"
              }`}
            >
              {article.title}
            </h3>
            <p className="text-sm md:text-base text-parchment-dim leading-relaxed max-w-prose-tight">
              {article.excerpt}
            </p>
          </div>

          <span className="mt-auto inline-flex items-center gap-3 label text-parchment underline decoration-accent underline-offset-4">
            Read More
            <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </article>
    );
  }

  return (
    <article className={`[perspective:1200px] ${featured ? "" : "h-full"}`}>
      <div
        className={`relative h-full min-h-[22rem] transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div
          className="absolute inset-0 flex flex-col border border-border bg-ink [backface-visibility:hidden]"
          inert={flipped ? true : undefined}
        >
          <Link
            href={`/opportunity-atlas/${article.slug}`}
            className="flex h-full flex-col"
          >
            <div className={`relative ${featured ? "aspect-[16/9] md:aspect-[5/4]" : "aspect-[16/10]"}`}>
              <Image
                src={article.featuredImage.src}
                alt={article.featuredImage.alt}
                fill
                className="object-cover"
                sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
              />
            </div>
            <div className={`flex flex-col ${featured ? "gap-5 p-8 md:p-10" : "flex-1 gap-4 p-6 md:p-8"}`}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="label">{article.category}</span>
                {article.publishedAt ? (
                  <span className="text-2xs uppercase tracking-wide text-parchment-dim/70">
                    {formatOpportunityAtlasDate(article.publishedAt)}
                  </span>
                ) : null}
                <span className="text-2xs uppercase tracking-wide text-parchment-dim/70">
                  {article.readingTime}
                </span>
              </div>
              <h3
                className={`font-serif font-light text-balance text-parchment ${
                  featured ? "text-3xl md:text-4xl" : "text-2xl"
                }`}
              >
                {article.title}
              </h3>
              <span className="mt-auto inline-flex items-center gap-3 label text-parchment underline decoration-accent underline-offset-4">
                Read More
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
          <button
            type="button"
            aria-expanded={false}
            aria-label="Show the description"
            onClick={() => setFlipped(true)}
            className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center border border-border bg-ink text-parchment"
          >
            <span aria-hidden>+</span>
          </button>
        </div>
        <div
          className="absolute inset-0 flex flex-col justify-between border border-accent bg-accent p-6 text-ink [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-8"
          inert={!flipped ? true : undefined}
        >
          <p className="text-sm leading-relaxed md:text-base">{article.excerpt}</p>
          <div>
            <Link
              href={`/opportunity-atlas/${article.slug}`}
              className="font-serif text-2xl font-light text-balance"
            >
              {article.title}
            </Link>
            <button
              type="button"
              aria-expanded
              aria-label="Show the title side"
              onClick={() => setFlipped(false)}
              className="mt-6 inline-flex h-11 w-11 items-center justify-center border border-ink/30"
            >
              <span aria-hidden>-</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
