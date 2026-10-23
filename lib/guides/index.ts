import { bailGuide } from "@/lib/guides/bail";
import { commercialGuide } from "@/lib/guides/commercial";
import { companyGuide } from "@/lib/guides/company";
import { ipGuide } from "@/lib/guides/ip";
import { lawyerGuide } from "@/lib/guides/lawyer";
import { processGuide } from "@/lib/guides/process";
import { slpGuide } from "@/lib/guides/slp";
import { successionGuide } from "@/lib/guides/succession";
import type { GuidePage, GuidesIndexContent } from "@/lib/guides/types";
import { writGuide } from "@/lib/guides/writ";
import { organizationId, siteUrl } from "@/lib/site";

export const guidesPublishedOn = "2026-10-23";

const pages: GuidePage[] = [
  commercialGuide,
  writGuide,
  companyGuide,
  successionGuide,
  ipGuide,
  bailGuide,
  slpGuide,
  processGuide,
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
  seoTitle: "Delhi High Court guides",
  description:
    "Informational notes from New Delhi, India, on Commercial disputes and arbitration in the Delhi High Court, Writ petitions against regulators and government in the Delhi High Court, and the related work of that Court.",
  keywords: [
    "Commercial disputes and arbitration in the Delhi High Court",
    "Writ petitions against regulators and government in the Delhi High Court",
    "Company and corporate disputes in the Delhi High Court",
    "NRI property and succession matters in Delhi",
    "IP and trademark litigation in the Delhi High Court",
    "White-collar bail and anticipatory bail in the Delhi High Court",
    "Supreme Court SLPs from Delhi High Court orders",
    "How a Delhi High Court case works",
    "Delhi High Court lawyer: choosing and working with counsel",
    "New Delhi",
  ],
  eyebrow: "Delhi High Court",
  title: "Delhi High Court guides",
  lede: "These notes describe the work of the High Court of Delhi that concerns companies, promoters, rights holders, and families. They cover commercial disputes and arbitration, writs against regulators and government, the line between this Court and the company law tribunal, property and succession in Delhi, intellectual property, bail in economic offences, and a petition for special leave to the Supreme Court. One note describes how a case moves, including case status, the cause list, and e-filing. Another describes choosing and working with counsel, without naming anyone. They are published from New Delhi, India. They are not advice on any case.",
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
        "The High Court of Delhi, and, where the statute so provides, the Supreme Court on a petition for special leave from an order of that Court. The place named on these pages is New Delhi, India.",
    },
    {
      question:
        "Where does a commercial arbitration sit, as against a company petition?",
      answer:
        "Commercial disputes and arbitration in the Delhi High Court describes sections 9, 11 and 34. Company and corporate disputes in the Delhi High Court describes the matters that go instead to the National Company Law Tribunal. The two are not interchangeable.",
    },
    {
      question: "How is bail in an economic offence described?",
      answer:
        "The note titled White-collar bail and anticipatory bail in the Delhi High Court gives the Sanhita section, the former Code section, and the additional conditions in the money-laundering and company-fraud statutes. A proceeding already pending on 1 July 2024 may continue under the old Code.",
    },
    {
      question: "Do the notes recommend an advocate?",
      answer:
        "No. The note titled Delhi High Court lawyer: choosing and working with counsel describes the relationship. It names no advocate and invites no engagement.",
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
