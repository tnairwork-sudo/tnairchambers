import {
  entryModeLabel,
  formatTurnover,
  riskLabel,
  type ExpansionInput,
  type ExpansionReport,
} from "@/lib/emerging-markets/options";

interface EmergingMarketsReportProps {
  input: ExpansionInput;
  report: ExpansionReport;
  preview: boolean;
  preparedAt: string;
}

function formatPreparedAt(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

function Preference({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border py-4">
      <p className="label mb-2">{label}</p>
      <p className="text-sm text-parchment leading-relaxed whitespace-pre-wrap">{value}</p>
    </div>
  );
}

export default function EmergingMarketsReport({
  input,
  report,
  preview,
  preparedAt,
}: EmergingMarketsReportProps) {
  const prepared = formatPreparedAt(preparedAt);
  const modes =
    input.entryModes.length > 0
      ? input.entryModes.map((mode) => entryModeLabel(mode)).join(", ")
      : "Not specified";

  return (
    <article className="border border-border bg-ink" aria-labelledby="briefing-title">
      <header className="px-6 py-8 md:px-10 md:py-10 border-b border-border">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="gold-rule" />
              <span className="label">TN Chambers · New Delhi</span>
            </div>
            <p className="label mb-3">Confidential briefing</p>
            <h2
              id="briefing-title"
              className="heading-section text-3xl md:text-5xl text-parchment text-balance max-w-3xl"
            >
              {report.headline}
            </h2>
          </div>
          {prepared && (
            <p className="text-2xs tracking-widest uppercase text-parchment-dim shrink-0">
              {prepared}
            </p>
          )}
        </div>
      </header>

      {preview && (
        <div className="px-6 py-5 md:px-10 bg-surface border-b border-border">
          <p className="text-sm text-parchment-dim leading-relaxed max-w-3xl">
            Sample layout. No AI key is configured in this environment, so this
            briefing is an illustration assembled on the server from your answers.
            It is not a model-generated analysis.
          </p>
        </div>
      )}

      <div className="px-6 py-8 md:px-10 md:py-10 border-b border-border">
        <p className="label mb-4">Overview</p>
        {report.overview.split(/\n\n+/).map((paragraph, index) => (
          <p
            key={index}
            className="text-base md:text-lg text-parchment leading-relaxed mb-5 last:mb-0 max-w-3xl whitespace-pre-wrap"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="px-6 py-8 md:px-10 md:py-10 border-b border-border bg-surface/60">
        <p className="label mb-2">Basis of this briefing</p>
        <p className="text-sm text-parchment-dim leading-relaxed mb-6 max-w-3xl">
          The note above was prepared from the details submitted. Preferences left
          blank were not treated as constraints.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
          <Preference label="Annual turnover" value={formatTurnover(input.turnover, input.currency)} />
          <Preference label="Risk tolerance" value={riskLabel(input.risk)} />
          <Preference label="Products and services" value={input.products} />
          <Preference label="Preferred entry" value={modes} />
          <Preference label="Company" value={input.description} />
          <Preference label="Target regions" value={input.regions || "Not specified"} />
          <Preference label="Budget / appetite" value={input.budget || "Not specified"} />
          <Preference label="Timeline" value={input.timeline || "Not specified"} />
        </div>
      </div>

      <div className="px-6 py-4 md:px-10">
        {report.markets.map((market, index) => (
          <section key={`${market.name}-${index}`} className="py-10 border-b border-border last:border-b-0">
            <p className="label mb-3">Market {String(index + 1).padStart(2, "0")}</p>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-parchment mb-8 text-balance">
              {market.name}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <p className="label mb-3">Why this market</p>
                <p className="text-sm md:text-base text-parchment leading-relaxed whitespace-pre-wrap">
                  {market.rationale}
                </p>
              </div>
              <div>
                <p className="label mb-3">Demand fit</p>
                <p className="text-sm md:text-base text-parchment leading-relaxed whitespace-pre-wrap">
                  {market.demandFit}
                </p>
              </div>
              <div>
                <p className="label mb-3">Regulatory and legal</p>
                <p className="text-sm md:text-base text-parchment leading-relaxed whitespace-pre-wrap">
                  {market.regulatory}
                </p>
              </div>
              <div>
                <p className="label mb-3">Entry route</p>
                <p className="text-sm md:text-base text-parchment leading-relaxed whitespace-pre-wrap">
                  {market.entryRoute}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <p className="label mb-4">Key risks</p>
              <ul className="space-y-3">
                {market.risks.map((risk, riskIndex) => (
                  <li key={riskIndex} className="flex gap-4 text-sm md:text-base text-parchment leading-relaxed">
                    <span className="mt-2 h-px w-4 bg-gold shrink-0" aria-hidden />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="px-6 py-10 md:px-10 md:py-12 border-t border-border">
        <p className="label mb-4">Practical next steps</p>
        <ol className="space-y-6 max-w-3xl">
          {report.nextSteps.map((step, index) => (
            <li key={index} className="flex gap-5">
              <span className="font-serif text-2xl text-gold-light leading-none shrink-0 w-8">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm md:text-base text-parchment leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-surface border-t border-border px-6 py-12 md:px-10 md:py-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-rule" />
            <span className="label">Consult TN Chambers</span>
          </div>
          <h3 className="heading-section text-3xl md:text-4xl text-parchment mb-5 text-balance">
            Discuss the structure before you commit to a market.
          </h3>
          <p className="text-base text-parchment-dim leading-relaxed mb-8 max-w-prose-tight">
            TN Chambers advises on cross-border structuring, market entry, and the
            regulatory questions that sit underneath an expansion. If this briefing
            describes a path you are considering, the chambers can take it up with you.
          </p>
          <div className="space-y-2 text-sm text-parchment-dim leading-relaxed mb-8">
            <p>
              <a
                href="mailto:tushaar@tnairchambers.in?subject=Cross-border%20market%20entry"
                className="text-parchment hover:text-gold-light transition-colors duration-200"
              >
                tushaar@tnairchambers.in
              </a>
            </p>
            <p>
              <a
                href="tel:+918595203751"
                className="font-serif text-3xl font-light text-parchment hover:text-gold-light transition-colors duration-200"
              >
                +91 85952 03751
              </a>
            </p>
            <p className="pt-2">135, Additional Building Complex</p>
            <p>Supreme Court of India, Tilak Marg</p>
            <p>New Delhi – 110001</p>
          </div>
          <a
            href="mailto:tushaar@tnairchambers.in?subject=Cross-border%20market%20entry"
            className="btn-primary"
          >
            Write to the chambers
            <span className="text-base leading-none" aria-hidden>
              →
            </span>
          </a>
        </div>
      </section>

      <footer className="px-6 py-6 md:px-10 border-t border-border">
        <p className="text-xs text-parchment-dim/80 leading-relaxed max-w-3xl">
          {preview
            ? "This illustration was assembled from your answers because no AI key is configured here. A live briefing is generated by artificial intelligence from the information submitted. "
            : "This analysis is generated by artificial intelligence from the information submitted. "}
          It is informational only. It is not legal advice, a formal opinion, or an
          invitation to create an advocate-client relationship. Rules differ by
          jurisdiction and they change. Confirm any step with qualified counsel before
          acting on it.
        </p>
      </footer>
    </article>
  );
}
