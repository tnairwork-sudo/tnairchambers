import { bailGuide } from "@/lib/guides/bail";
import { feesGuide } from "@/lib/guides/fees";
import { pilGuide, pilGuideHindi } from "@/lib/guides/pil";
import type { GuidePage, GuidesIndexContent } from "@/lib/guides/types";
import { writGuide } from "@/lib/guides/writ";
import { organizationId, siteUrl } from "@/lib/site";

export const guidesPublishedOn = "2026-10-23";

const pages: GuidePage[] = [
  writGuide,
  feesGuide,
  bailGuide,
  pilGuide,
  pilGuideHindi,
];

export function getGuides(): GuidePage[] {
  return pages;
}

export function getGuide(slug: string): GuidePage | undefined {
  return pages.find((page) => page.slug === slug);
}

export function guidePath(slug: string): string {
  return `/guides/${slug}`;
}

export function guideUrl(slug: string): string {
  return `${siteUrl}${guidePath(slug)}`;
}

export const guidesIndexPath = "/guides";
export const guidesIndexUrl = `${siteUrl}${guidesIndexPath}`;

export const guidesIndex: GuidesIndexContent = {
  seoTitle: "Delhi High Court Guides on Writs, Bail, Fees, and PIL",
  description:
    "Informational notes on a writ petition in the Delhi High Court, bail in the Delhi High Court, high court lawyer fees, and what a PIL is (PIL kya hai).",
  keywords: [
    "delhi high court lawyer",
    "writ petition delhi high court",
    "high court lawyer fees",
    "bail in delhi high court",
    "pil kya hai",
    "Delhi High Court",
    "New Delhi",
  ],
  eyebrow: "Delhi High Court",
  title: "Guides",
  lede: "These notes describe procedure in the High Court of Delhi. They cover a writ petition under Article 226, including delay and laches, bail under the Bharatiya Nagarik Suraksha Sanhita, public interest litigation, and the difference between court fees and a professional fee. They are published from New Delhi, India. They are not advice on any case.",
  inLanguage: "en-IN",
  dateLabel: "23 October 2026",
  faqs: [
    {
      question: "Are these guides legal advice?",
      answer:
        "No. They describe procedure and the governing provisions. They are not advice on any facts, and reading them does not create an advocate-client relationship.",
    },
    {
      question: "Do the guides quote a lawyer's fee?",
      answer:
        "No. The note on fees explains court fees and the factors that affect a professional fee. It states no figure and makes no offer.",
    },
    {
      question: "Which court do the notes describe?",
      answer:
        "The High Court of Delhi. The place named on these pages is New Delhi, India, and no other address is given.",
    },
    {
      question: "Is bail described under the old Code or the new Sanhita?",
      answer:
        "The Bharatiya Nagarik Suraksha Sanhita has been in force from 1 July 2024. The bail note gives the Sanhita section and the former Code of Criminal Procedure section. A proceeding already pending on that date may continue under the old Code.",
    },
    {
      question: "Where is the Hindi note on PIL kya hai?",
      answer:
        "The public interest litigation note is published in English and in Hindi. The Hindi page is linked from the English page, and the other way round.",
    },
  ],
};

export function languageAlternates(
  page: GuidePage
): Record<string, string> | undefined {
  if (!page.alternates?.length) {
    return undefined;
  }

  const languages: Record<string, string> = {};
  for (const alternate of page.alternates) {
    languages[alternate.hrefLang] = guideUrl(alternate.slug);
  }

  const english = page.alternates.find(
    (alternate) => alternate.hrefLang === "en-IN"
  );
  if (english) {
    languages["x-default"] = guideUrl(english.slug);
  }

  return languages;
}

function publisher() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: "Nair & Co",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/wordmark.svg`,
    },
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  url: string;
  inLanguage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    inLanguage: input.inLanguage,
    datePublished: guidesPublishedOn,
    dateModified: guidesPublishedOn,
    author: {
      "@type": "Organization",
      name: "Nair & Co",
      url: siteUrl,
    },
    publisher: publisher(),
    mainEntityOfPage: input.url,
    contentLocation: {
      "@type": "Place",
      name: "New Delhi, India",
    },
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[],
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
