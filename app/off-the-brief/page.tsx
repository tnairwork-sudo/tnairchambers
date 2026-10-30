import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import {
  offTheBriefIndexLabel,
  offTheBriefPaperLine,
  offTheBriefSessionHeading,
  offTheBriefSessionId,
  publishedOffTheBriefBooks,
  publishedOffTheBriefPaperGroups,
  type OffTheBriefQa,
} from "@/lib/off-the-brief";
import { legalServiceId, siteUrl } from "@/lib/site";

const path = "/off-the-brief";
const pageUrl = `${siteUrl}${path}`;
const description = "Notes from reading beyond the law.";

export const metadata: Metadata = {
  title: "Off the Brief",
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    siteName: "Nair & Co",
    title: "Off the Brief | Nair & Co",
    description,
    url: pageUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Off the Brief | Nair & Co",
    description,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Off the Brief",
  description,
  inLanguage: "en-IN",
  url: pageUrl,
  mainEntityOfPage: pageUrl,
  author: {
    "@type": "Organization",
    name: "Nair & Co, Advocates & Consultants",
    url: siteUrl,
  },
  publisher: { "@id": legalServiceId },
};

const linkClass =
  "text-parchment underline decoration-gold/70 underline-offset-4 hover:text-gold transition-colors duration-200";

function QaList({ items }: { items: OffTheBriefQa[] }) {
  return (
    <div className="mt-6 space-y-8">
      {items.map((item) => (
        <div key={item.q}>
          <h4 className="font-serif text-xl font-light leading-snug text-parchment">
            {item.q}
          </h4>
          <p className="mt-3 text-base leading-relaxed text-parchment-dim md:text-lg">
            {item.a}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function OffTheBriefPage() {
  const books = publishedOffTheBriefBooks();
  const paperGroups = publishedOffTheBriefPaperGroups();

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        <header className="border-b border-border">
          <div className="container-site py-16 md:py-20 lg:py-24">
            <div className="mb-8 flex items-center gap-4">
              <div className="gold-rule" />
              <span className="label">Reading</span>
            </div>
            <h1 className="heading-display mb-6 max-w-hero text-balance text-[clamp(2.8rem,6vw,5.4rem)] text-parchment">
              Off the Brief
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-parchment-dim md:text-lg">
              Notes from reading beyond the law
            </p>
            <p className="mt-8 text-sm text-parchment">
              <Link href="/" className={linkClass}>
                Nair &amp; Co, Advocates &amp; Consultants
              </Link>
            </p>
            <p className="text-sm text-parchment-dim">New Delhi, India</p>
          </div>
        </header>

        <div className="container-site py-16 md:py-20">
          <div className="max-w-3xl">
            <nav aria-label="Contents">
              <h2 className="heading-section mb-6 text-3xl text-parchment md:text-4xl">
                Books
              </h2>
              <ol className="space-y-5 text-base leading-relaxed md:text-lg">
                {books.map((book) => (
                  <li key={book.slug}>
                    <a href={`#${book.slug}`} className={linkClass}>
                      {book.title}
                    </a>
                    {book.sessions.length > 0 ? (
                      <ol className="mt-3 space-y-2 pl-5 text-sm md:text-base">
                        {book.sessions.map((session) => {
                          const id = offTheBriefSessionId(book, session);
                          return (
                            <li key={id}>
                              <a href={`#${id}`} className={linkClass}>
                                {offTheBriefIndexLabel(session)}
                              </a>
                            </li>
                          );
                        })}
                      </ol>
                    ) : null}
                  </li>
                ))}
              </ol>

              <h2 className="heading-section mb-6 mt-16 text-3xl text-parchment md:mt-20 md:text-4xl">
                Scientific Papers
              </h2>
              {paperGroups.length === 0 ? (
                <p className="text-base italic text-parchment-dim md:text-lg">
                  Reports begin soon.
                </p>
              ) : (
                <div className="space-y-8">
                  {paperGroups.map((group) => (
                    <div key={group.id}>
                      <a
                        href={`#${group.id}`}
                        className="text-sm text-parchment-dim underline decoration-gold/70 underline-offset-4 hover:text-gold md:text-base"
                      >
                        {group.subject}
                      </a>
                      <ol className="mt-3 space-y-2 pl-5 text-sm leading-relaxed md:text-base">
                        {group.papers.map((paper) => (
                          <li key={paper.slug}>
                            <a href={`#${paper.slug}`} className={linkClass}>
                              {paper.title}
                            </a>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              )}
            </nav>

            <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
              {books.map((book) => (
                <section key={book.slug} id={book.slug} className="scroll-mt-24">
                  <h2 className="heading-section text-balance text-3xl text-parchment md:text-4xl">
                    {book.title}
                  </h2>
                  <p className="mt-3 text-base text-parchment-dim md:text-lg">
                    {book.author}
                  </p>
                  {book.intro ? (
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-parchment-dim md:text-lg">
                      {book.intro}
                    </p>
                  ) : null}
                  {book.sessions.length === 0 ? (
                    <p className="mt-8 text-base italic text-parchment-dim md:text-lg">
                      Notes begin soon.
                    </p>
                  ) : (
                    <div className="mt-10 space-y-14">
                      {book.sessions.map((session) => {
                        const id = offTheBriefSessionId(book, session);
                        return (
                          <section key={id} id={id} className="scroll-mt-24">
                            <h3 className="heading-section text-2xl text-parchment md:text-3xl">
                              {offTheBriefSessionHeading(session)}
                            </h3>
                            <QaList items={session.qa} />
                          </section>
                        );
                      })}
                    </div>
                  )}
                </section>
              ))}

              {paperGroups.length > 0 ? (
                <section id="scientific-papers" className="scroll-mt-24">
                  <h2 className="heading-section text-3xl text-parchment md:text-4xl">
                    Scientific Papers
                  </h2>
                  <div className="mt-10 space-y-16">
                    {paperGroups.map((group) => (
                      <div key={group.id} id={group.id} className="scroll-mt-24">
                        <p className="text-sm leading-relaxed text-gold-light md:text-base">
                          {group.subject}
                        </p>
                        <div className="mt-8 space-y-16">
                          {group.papers.map((paper) => {
                            const line = offTheBriefPaperLine(paper);
                            return (
                              <article
                                key={paper.slug}
                                id={paper.slug}
                                className="scroll-mt-24"
                              >
                                <h3 className="heading-section text-balance text-2xl text-parchment md:text-3xl">
                                  {paper.title}
                                </h3>
                                {paper.authors ? (
                                  <p className="mt-3 text-base text-parchment-dim md:text-lg">
                                    {paper.authors}
                                  </p>
                                ) : null}
                                {line ? (
                                  <p className="mt-2 text-sm leading-relaxed text-parchment-dim md:text-base">
                                    {line}
                                  </p>
                                ) : null}
                                {paper.link ? (
                                  <p className="mt-2 text-sm leading-relaxed break-words">
                                    <a href={paper.link} className={linkClass}>
                                      {paper.link}
                                    </a>
                                  </p>
                                ) : null}
                                {paper.relatedWork && paper.relatedWork.length > 0 ? (
                                  <div className="mt-4">
                                    <p className="text-xs tracking-wide text-parchment-dim/80">
                                      Related work
                                    </p>
                                    <ul className="mt-2 space-y-2">
                                      {paper.relatedWork.map((item) => (
                                        <li
                                          key={item.title}
                                          className="text-sm leading-relaxed text-parchment-dim"
                                        >
                                          {item.authors}, {item.title}, {item.year} (
                                          {item.citation}).
                                          {item.link ? (
                                            <a
                                              href={item.link}
                                              className={`${linkClass} mt-1 block break-words`}
                                            >
                                              {item.link}
                                            </a>
                                          ) : null}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                                <QaList items={paper.qa} />
                              </article>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
