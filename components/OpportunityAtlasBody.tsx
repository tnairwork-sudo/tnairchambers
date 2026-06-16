import type { ArticleBodyBlock } from "@/lib/opportunity-atlas";

interface OpportunityAtlasBodyProps {
  body: ArticleBodyBlock[];
}

export default function OpportunityAtlasBody({ body }: OpportunityAtlasBodyProps) {
  return (
    <div className="space-y-14 md:space-y-16">
      {body.map((block, index) => {
        if (block.type === "paragraphs") {
          return (
            <div key={index} className="space-y-5 text-base md:text-lg text-parchment-dim leading-relaxed">
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="border-y border-border bg-surface px-6 py-8 md:px-10 md:py-12"
            >
              <p className="heading-section text-2xl md:text-[2rem] text-parchment italic leading-[1.5]">
                &ldquo;{block.quote}&rdquo;
              </p>
              {block.citation ? (
                <footer className="mt-6 flex items-center gap-4">
                  <div className="gold-rule" />
                  <span className="label">{block.citation}</span>
                </footer>
              ) : null}
            </blockquote>
          );
        }

        if (block.type === "section") {
          return (
            <section key={index} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="gold-rule" />
                <span className="label">Section</span>
              </div>
              <h2 className="heading-section text-3xl md:text-4xl text-parchment text-balance">
                {block.title}
              </h2>
              <div className="space-y-5 text-base md:text-lg text-parchment-dim leading-relaxed">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          );
        }

        if (block.type === "cards") {
          return (
            <section key={index} className="space-y-6">
              {block.title ? (
                <>
                  <div className="flex items-center gap-4">
                    <div className="gold-rule" />
                    <span className="label">Focus Areas</span>
                  </div>
                  <h2 className="heading-section text-3xl md:text-4xl text-parchment text-balance">
                    {block.title}
                  </h2>
                </>
              ) : null}
              {block.intro ? (
                <p className="text-base md:text-lg text-parchment-dim leading-relaxed">
                  {block.intro}
                </p>
              ) : null}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                {block.items.map((item) => (
                  <div key={item.title} className="bg-ink p-6 md:p-8 flex flex-col gap-4">
                    <h3 className="font-serif text-2xl font-light text-parchment">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-parchment-dim leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        }

        return (
          <section key={index} className="space-y-6">
            {block.title ? (
              <>
                <div className="flex items-center gap-4">
                  <div className="gold-rule" />
                  <span className="label">Action Plan</span>
                </div>
                <h2 className="heading-section text-3xl md:text-4xl text-parchment text-balance">
                  {block.title}
                </h2>
              </>
            ) : null}
            {block.intro ? (
              <p className="text-base md:text-lg text-parchment-dim leading-relaxed">
                {block.intro}
              </p>
            ) : null}
            <div className="grid grid-cols-1 gap-px bg-border">
              {block.items.map((item) => (
                <div key={item.timeframe} className="bg-ink p-6 md:p-8 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-5 md:gap-8">
                  <div>
                    <p className="label text-gold mb-2">{item.timeframe}</p>
                    <h3 className="font-serif text-2xl font-light text-parchment">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-parchment-dim leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
