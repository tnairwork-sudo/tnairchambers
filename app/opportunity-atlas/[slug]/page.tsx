import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import OpportunityAtlasArticleCard from "@/components/OpportunityAtlasArticleCard";
import OpportunityAtlasBody from "@/components/OpportunityAtlasBody";
import OpportunityAtlasHeroVideo from "@/components/OpportunityAtlasHeroVideo";
import {
  formatOpportunityAtlasDate,
  getAllOpportunityAtlasArticles,
  getOpportunityAtlasArticleBySlug,
  getRelatedOpportunityAtlasArticles,
  siteUrl,
} from "@/lib/opportunity-atlas";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllOpportunityAtlasArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getOpportunityAtlasArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    keywords: [
      "International Business Opportunities",
      "Market Entry Strategy",
      "Foreign Investment",
      "Global Expansion",
      "Cross-Border Business",
      "Regulatory Advisory",
      article.category,
    ],
    alternates: { canonical: `/opportunity-atlas/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.metaDescription,
      url: `${siteUrl}/opportunity-atlas/${article.slug}`,
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [article.openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
      images: [article.openGraphImage],
    },
  };
}

export default async function OpportunityAtlasArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = getOpportunityAtlasArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedOpportunityAtlasArticles(article.slug);
  const articleUrl = `${siteUrl}/opportunity-atlas/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: [`${siteUrl}${article.openGraphImage}`],
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TN Chambers",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: articleUrl,
    articleSection: article.category,
    keywords: [
      "International Business Opportunities",
      "Market Entry Strategy",
      "Foreign Investment",
      "Global Expansion",
      "Cross-Border Business",
      "Regulatory Advisory",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Opportunity Atlas",
        item: `${siteUrl}/opportunity-atlas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article>
        <section className="border-b border-border">
          <div className="container-site py-16 md:py-20 lg:py-24">
            <Link
              href="/opportunity-atlas"
              className="inline-flex items-center gap-3 label text-gold hover:text-gold-light transition-colors duration-200 mb-8"
            >
              <span aria-hidden>←</span>
              Back to Opportunity Atlas
            </Link>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <span className="label text-gold">{article.category}</span>
              <span className="text-2xs tracking-wide uppercase text-parchment-dim/70">
                {formatOpportunityAtlasDate(article.publishedAt)}
              </span>
              <span className="text-2xs tracking-wide uppercase text-parchment-dim/70">
                {article.readingTime}
              </span>
            </div>

            <h1 className="heading-display text-[clamp(2.8rem,6vw,5.4rem)] text-parchment mb-6 text-balance max-w-hero">
              {article.title}
            </h1>
            <p className="text-base md:text-lg text-parchment-dim leading-relaxed max-w-3xl mb-8">
              {article.excerpt}
            </p>
            <div className="space-y-2 text-sm text-parchment-dim">
              <p className="text-parchment">By {article.author}</p>
              <p>{article.authorBio}</p>
            </div>
          </div>
        </section>

        <section className="container-site py-10 md:py-14">
          {article.heroVideo ? (
            <OpportunityAtlasHeroVideo
              title={article.heroVideo.title}
              videoSrc={article.heroVideo.src}
              posterSrc={article.heroVideo.posterSrc}
              posterAlt={article.heroVideo.posterAlt}
              captionsSrc={article.heroVideo.captionsSrc}
              caption={article.heroVideo.caption}
            />
          ) : (
            <div className="relative aspect-[16/9] border border-border overflow-hidden">
              <Image
                src={article.featuredImage.src}
                alt={article.featuredImage.alt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          )}
        </section>

        <section className="container-site pb-20 md:pb-28">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_280px] gap-14 xl:gap-16">
            <div className="max-w-4xl">
              <OpportunityAtlasBody body={article.body} />
            </div>

            <aside className="xl:pt-2">
              <div className="border border-border bg-surface p-6 md:p-8 sticky top-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="gold-rule" />
                  <span className="label">Article Details</span>
                </div>
                <dl className="space-y-5 text-sm text-parchment-dim">
                  <div>
                    <dt className="label mb-2">Author</dt>
                    <dd className="text-parchment">{article.author}</dd>
                  </div>
                  <div>
                    <dt className="label mb-2">Published</dt>
                    <dd>{formatOpportunityAtlasDate(article.publishedAt)}</dd>
                  </div>
                  <div>
                    <dt className="label mb-2">Reading Time</dt>
                    <dd>{article.readingTime}</dd>
                  </div>
                  <div>
                    <dt className="label mb-2">Category</dt>
                    <dd>{article.category}</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>
      </article>

      {relatedArticles.length > 0 ? (
        <section className="border-t border-border bg-surface">
          <div className="container-site py-20 md:py-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="gold-rule" />
              <span className="label">Related Articles</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <OpportunityAtlasArticleCard
                  key={relatedArticle.slug}
                  article={relatedArticle}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </PageLayout>
  );
}
