import { bailGuide } from "@/lib/guides/bail";
import { caseStatusGuide } from "@/lib/guides/case-status";
import { efilingGuide } from "@/lib/guides/efiling";
import { lawyerGuide } from "@/lib/guides/lawyer";
import { limitationGuide } from "@/lib/guides/limitation";
import { pilGuide, pilGuideHindi } from "@/lib/guides/pil";
import { processGuide } from "@/lib/guides/process";
import type { GuidePage, GuidesIndexContent } from "@/lib/guides/types";
import { writGuide } from "@/lib/guides/writ";
import { organizationId, siteUrl } from "@/lib/site";

export const guidesPublishedOn = "2026-10-23";

const pages: GuidePage[] = [
  writGuide,
  limitationGuide,
  processGuide,
  caseStatusGuide,
  efilingGuide,
  bailGuide,
  pilGuide,
  pilGuideHindi,
  lawyerGuide,
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
  seoTitle: "Delhi High Court Guides",
  description:
    "Informational notes from New Delhi, India, including Writ petition in Delhi High Court, Bail in the Delhi High Court, What is a PIL, and PIL kya hai.",
  keywords: [
    "Writ petition in Delhi High Court",
    "Article 226 writ after limitation",
    "Delhi High Court case status and cause list explained",
    "E-filing in the Delhi High Court",
    "Bail in the Delhi High Court",
    "What is a PIL",
    "how to file a PIL",
    "PIL kya hai",
    "How a Delhi High Court case works",
    "Delhi High Court lawyer: a guide to choosing and working with counsel",
    "New Delhi",
  ],
  eyebrow: "Delhi High Court",
  title: "Guides",
  lede: "These notes describe procedure in the High Court of Delhi. They cover a writ petition, delay, the life of a case, case status and the cause list, e-filing, bail, and public interest litigation in English and in Hindi. A separate note describes choosing and working with counsel, without naming anyone. They are published from New Delhi, India. They are not advice on any case.",
  inLanguage: "en-IN",
  dateLabel: "23 October 2026",
  faqs: [
    {
      question: "Are these guides legal advice?",
      answer:
        "No. They describe procedure and the governing provisions. They are not advice on any facts, and reading them does not create an advocate-client relationship.",
    },
    {
      question: "Which court do the notes describe?",
      answer:
        "The High Court of Delhi. The place named on these pages is New Delhi, India, and no other address is given.",
    },
    {
      question: "Is bail described under the old Code or the new Sanhita?",
      answer:
        "The Bharatiya Nagarik Suraksha Sanhita has been in force from 1 July 2024. The note titled Bail in the Delhi High Court gives the Sanhita section and the former Code of Criminal Procedure section. A proceeding already pending on that date may continue under the old Code.",
    },
    {
      question: "Where is the Hindi note on PIL kya hai?",
      answer:
        "The English note is titled What is a PIL, and how to file a PIL. The Hindi note is titled PIL kya hai. Each links to the other.",
    },
    {
      question: "Do the notes recommend an advocate?",
      answer:
        "No. The note titled Delhi High Court lawyer: a guide to choosing and working with counsel describes the relationship. It names no advocate and invites no engagement.",
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
