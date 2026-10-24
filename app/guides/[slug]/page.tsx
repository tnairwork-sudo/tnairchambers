import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Noto_Sans_Devanagari, Noto_Serif_Devanagari } from "next/font/google";
import GuideView from "@/components/guides/GuideView";
import {
  articleQuestions,
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  getGuide,
  getGuides,
  guideMetaDescription,
  guideUrl,
  guidesIndexUrl,
  languageAlternates,
} from "@/lib/guides";
import { guideArt } from "@/lib/guides/art";
import { siteUrl } from "@/lib/site";

const hindiSans = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-hindi-sans",
  preload: false,
});

const hindiSerif = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-hindi-serif",
  preload: false,
});

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  const url = guideUrl(guide.slug);
  const description = guideMetaDescription(guide);
  const languages = languageAlternates(guide);
  const art = guideArt(guide.slug);
  const alt = guide.illustration?.alt ?? guide.title;
  const ogImage = {
    url: art.hero.src,
    width: art.hero.width,
    height: art.hero.height,
    alt,
  };

  return {
    title: guide.seoTitle,
    description,
    keywords: guide.keywords,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: "article",
      siteName: "Nair & Co",
      title: `${guide.seoTitle} | Nair & Co`,
      description,
      url,
      locale: guide.inLanguage === "hi-IN" ? "hi_IN" : "en_IN",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.seoTitle} | Nair & Co`,
      description,
      images: [ogImage],
    },
  };
}

export default async function GuideArticlePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const url = guideUrl(guide.slug);
  const hindi = guide.inLanguage === "hi-IN";
  const art = guideArt(guide.slug);
  const illustration = guide.illustration;
  const schemas = [
    articleSchema({
      headline: guide.title,
      description: guideMetaDescription(guide),
      url,
      inLanguage: guide.inLanguage,
      image: [art.hero, art.square].map((slot) => ({
        url: `${siteUrl}${slot.src}`,
        width: slot.width,
        height: slot.height,
        caption: illustration?.caption ?? guide.title,
        description: illustration?.alt ?? guide.title,
      })),
    }),
    faqSchema(articleQuestions(guide), url),
    breadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: "Guides", url: guidesIndexUrl },
      { name: guide.title, url },
    ]),
  ];

  return (
    <div className={hindi ? `${hindiSans.variable} ${hindiSerif.variable}` : undefined}>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <GuideView guide={guide} />
    </div>
  );
}
