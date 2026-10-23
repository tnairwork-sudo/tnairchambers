import type { ReactNode } from "react";
import Link from "next/link";
import SetHtmlLang from "@/components/guides/SetHtmlLang";
import { bciDisclaimer, bciDisclaimerHindi } from "@/lib/guides/disclaimer";
import {
  getGuides,
  guidePath,
} from "@/lib/guides";
import type { GuideBlock, GuidePage } from "@/lib/guides/types";

const INLINE_LINK = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;

function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(INLINE_LINK)) {
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    nodes.push(
      <Link
        key={`${start}-${match[2]}`}
        href={match[2]}
        className="text-parchment underline decoration-gold/70 underline-offset-4 hover:text-gold transition-colors duration-200"
      >
        {match[1]}
      </Link>
    );
    last = start + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

function Blocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        if (block.type === "paragraphs") {
          return (
            <div key={index} className="space-y-5">
              {block.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
          );
        }

        if (block.type === "list") {
          if (block.ordered) {
            return (
              <ol
                key={index}
                className="list-decimal space-y-3 pl-5 text-parchment-dim marker:text-parchment"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="pl-2">
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            );
          }

          return (
            <ul key={index} className="space-y-3">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="relative pl-6">
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.72em] h-1.5 w-1.5 rounded-full bg-gold"
                  />
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          );
        }

        return (
          <div key={index} className="overflow-x-auto border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="sr-only">{block.caption}</caption>
              <thead className="bg-surface">
                <tr>
                  {block.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b border-border px-4 py-3 label text-parchment"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("|")} className="border-b border-border last:border-b-0">
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3 align-top">
                        <RichText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-border px-4 py-3 text-xs text-parchment-dim leading-relaxed">
              {block.caption}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function GuideView({ guide }: { guide: GuidePage }) {
  const hindi = guide.inLanguage === "hi-IN";
  const group = guide.group ?? "court";
  const others = getGuides().filter(
    (item) => item.slug !== guide.slug && (item.group ?? "court") === group
  );
  const headingStyle = hindi
    ? { fontFamily: "var(--font-hindi-serif), serif" }
    : undefined;

  return (
    <article
      style={
        hindi
          ? { fontFamily: "var(--font-hindi-sans), sans-serif" }
          : undefined
      }
    >
      {hindi ? <SetHtmlLang lang="hi" /> : null}

      <section className="border-b border-border">
        <div className="container-site py-16 md:py-20 lg:py-24">
          <Link
            href="/guides"
            className="inline-flex items-center gap-3 label text-gold hover:text-gold-light transition-colors duration-200 mb-8"
          >
            <span aria-hidden>←</span>
            {hindi ? "सभी मार्गदर्शिकाएँ" : "All guides"}
          </Link>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
            <span className="label text-gold">{guide.eyebrow}</span>
            <span className="text-2xs tracking-wide uppercase text-parchment-dim/70">
              {guide.dateLabel}
            </span>
            <span className="text-2xs tracking-wide uppercase text-parchment-dim/70">
              New Delhi, India
            </span>
          </div>

          <h1
            className="heading-display text-[clamp(2.8rem,6vw,5.4rem)] text-parchment mb-6 text-balance max-w-hero"
            style={headingStyle}
          >
            {guide.title}
          </h1>
          <p className="text-base md:text-lg text-parchment-dim leading-relaxed max-w-3xl">
            <RichText text={guide.lede} />
          </p>

          {guide.alternates && guide.alternates.length > 0 ? (
            <p className="mt-8 text-sm text-parchment-dim">
              {hindi ? "यह नोट अंग्रेजी में भी है." : "This note is also published in Hindi."}{" "}
              {guide.alternates
                .filter((alternate) => alternate.slug !== guide.slug)
                .map((alternate) => (
                  <Link
                    key={alternate.slug}
                    href={guidePath(alternate.slug)}
                    hrefLang={alternate.hrefLang}
                    className="text-parchment underline decoration-gold/70 underline-offset-4 hover:text-gold transition-colors duration-200"
                  >
                    {alternate.label}
                  </Link>
                ))}
            </p>
          ) : null}

          <p className="mt-8 text-sm text-parchment">
            <Link
              href="/"
              className="underline decoration-gold/70 underline-offset-4 hover:text-gold transition-colors duration-200"
            >
              Nair &amp; Co, Advocates &amp; Consultants
            </Link>
          </p>
          <p className="text-sm text-parchment-dim">New Delhi, India</p>
        </div>
      </section>

      <section className="container-site py-16 md:py-20">
        <div className="max-w-3xl space-y-14 md:space-y-16 text-base md:text-lg text-parchment-dim leading-relaxed">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2
                className="heading-section text-3xl md:text-4xl text-parchment mb-6 text-balance"
                style={headingStyle}
              >
                {section.heading}
              </h2>
              <Blocks blocks={section.blocks} />
            </section>
          ))}

          <section>
            <h2
              className="heading-section text-3xl md:text-4xl text-parchment mb-8 text-balance"
              style={headingStyle}
            >
              {hindi ? "प्रश्न" : "Questions"}
            </h2>
            <div className="space-y-8">
              {guide.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3
                    className="font-serif text-2xl text-parchment font-light mb-3 text-balance"
                    style={headingStyle}
                  >
                    {faq.question}
                  </h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2
              className="heading-section text-3xl md:text-4xl text-parchment mb-6 text-balance"
              style={headingStyle}
            >
              {hindi ? "अन्य नोट" : "Other notes"}
            </h2>
            <ul className="space-y-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={guidePath(item.slug)}
                    className="text-parchment underline decoration-gold/70 underline-offset-4 hover:text-gold transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="border border-border bg-surface px-6 py-8 md:px-8 md:py-10">
            <p className="label mb-5">Bar Council of India</p>
            {hindi ? (
              <div className="space-y-4 mb-6">
                {bciDisclaimerHindi.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-[1.85]">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
            <div className="space-y-4">
              {bciDisclaimer.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-[1.85]">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        </div>
      </section>
    </article>
  );
}
