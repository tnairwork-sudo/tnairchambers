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
            <span className="label text-gold">{article.category}</span>
            <span className="text-2xs tracking-wide uppercase text-parchment-dim/70">
              {formatOpportunityAtlasDate(article.publishedAt)}
            </span>
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

          <span className="mt-auto inline-flex items-center gap-3 label text-gold hover:text-gold-light transition-colors duration-200">
            Read More
            <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
