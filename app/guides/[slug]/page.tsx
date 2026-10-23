import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Noto_Sans_Devanagari, Noto_Serif_Devanagari } from "next/font/google";
import GuideView from "@/components/guides/GuideView";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  getGuide,
  getGuides,
  guideUrl,
  guidesIndexUrl,
  languageAlternates,
} from "@/lib/guides";
import { ogImage, siteUrl } from "@/lib/site";

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
  const languages = languageAlternates(guide);

  return {
    title: guide.seoTitle,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: "article",
      siteName: "Nair & Co",
      title: `${guide.seoTitle} | Nair & Co`,
      description: guide.description,
      url,
      locale: guide.inLanguage === "hi-IN" ? "hi_IN" : "en_IN",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.seoTitle} | Nair & Co`,
      description: guide.description,
      images: [ogImage.url],
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
  const schemas = [
    articleSchema({
      headline: guide.title,
      description: guide.description,
      url,
      inLanguage: guide.inLanguage,
    }),
    faqSchema(guide.faqs, url),
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
