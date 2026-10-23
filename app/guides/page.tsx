import type { Metadata } from "next";
import Link from "next/link";
import { bciDisclaimer } from "@/lib/guides/disclaimer";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  getGuides,
  guidePath,
  guidesIndex,
  guidesIndexUrl,
} from "@/lib/guides";
import { ogImage, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: guidesIndex.seoTitle,
  description: guidesIndex.description,
  keywords: guidesIndex.keywords,
  alternates: { canonical: guidesIndexUrl },
  openGraph: {
    type: "website",
    siteName: "Nair & Co",
    title: `${guidesIndex.seoTitle} | Nair & Co`,
    description: guidesIndex.description,
    url: guidesIndexUrl,
    locale: "en_IN",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${guidesIndex.seoTitle} | Nair & Co`,
    description: guidesIndex.description,
    images: [ogImage.url],
  },
};

export default function GuidesIndexPage() {
  const guides = getGuides();
  const schemas = [
    articleSchema({
      headline: guidesIndex.title,
      description: guidesIndex.description,
      url: guidesIndexUrl,
      inLanguage: guidesIndex.inLanguage,
    }),
    faqSchema(guidesIndex.faqs, guidesIndexUrl),
    breadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: "Guides", url: guidesIndexUrl },
    ]),
  ];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="border-b border-border">
        <div className="container-site py-16 md:py-20 lg:py-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-rule" />
            <span className="label">{guidesIndex.eyebrow}</span>
          </div>
          <h1 className="heading-display text-[clamp(2.8rem,6vw,5.4rem)] text-parchment mb-6 text-balance max-w-hero">
            {guidesIndex.title}
          </h1>
          <p className="text-base md:text-lg text-parchment-dim leading-relaxed max-w-3xl mb-8">
            {guidesIndex.lede}
          </p>
          <p className="text-sm text-parchment">Nair &amp; Co</p>
          <p className="text-sm text-parchment-dim">
            New Delhi, India
            <span className="mx-3 text-parchment-dim/40">/</span>
            {guidesIndex.dateLabel}
          </p>
        </div>
      </section>

      <section className="container-site py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="heading-section text-3xl md:text-4xl text-parchment mb-8">
            Notes
          </h2>
          <ul className="border-t border-border">
            {guides.map((guide) => (
              <li key={guide.slug} className="border-b border-border">
                <Link
                  href={guidePath(guide.slug)}
                  className="block py-7 group"
                >
                  <span className="label text-gold">{guide.eyebrow}</span>
                  <span className="mt-3 block font-serif text-3xl font-light text-parchment group-hover:text-gold-light transition-colors duration-200 text-balance">
                    {guide.title}
                  </span>
                  <span className="mt-3 block text-sm md:text-base text-parchment-dim leading-relaxed">
                    {guide.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site pb-16 md:pb-20">
        <div className="max-w-3xl">
          <h2 className="heading-section text-3xl md:text-4xl text-parchment mb-8">
            Questions
          </h2>
          <div className="space-y-8 text-base md:text-lg text-parchment-dim leading-relaxed">
            {guidesIndex.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-serif text-2xl text-parchment font-light mb-3 text-balance">
                  {faq.question}
                </h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          <section className="mt-16 border border-border bg-surface px-6 py-8 md:px-8 md:py-10">
            <p className="label mb-5">Bar Council of India</p>
            <div className="space-y-4 text-sm text-parchment-dim leading-[1.85]">
              {bciDisclaimer.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
