"use client";

import { useState, type FormEvent } from "react";
import EmergingMarketsReport from "@/components/EmergingMarketsReport";
import {
  CURRENCIES,
  ENTRY_MODES,
  LIMITS,
  RISK_LEVELS,
  validateExpansionRequest,
  type EntryModeId,
  type ExpansionInput,
  type ExpansionReport,
  type RiskLevelId,
} from "@/lib/emerging-markets/options";

interface BriefingResponse {
  preview: boolean;
  preparedAt: string;
  input: ExpansionInput;
  report: ExpansionReport;
}

const fieldClass =
  "w-full bg-ink border border-border px-4 py-3 text-sm text-parchment placeholder:text-parchment-dim/60 focus:border-parchment focus:outline-none transition-colors duration-200";

export default function EmergingMarketsTool() {
  const [currency, setCurrency] = useState("USD");
  const [turnover, setTurnover] = useState("");
  const [products, setProducts] = useState("");
  const [description, setDescription] = useState("");
  const [regions, setRegions] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [risk, setRisk] = useState<RiskLevelId | "">("");
  const [entryModes, setEntryModes] = useState<EntryModeId[]>([]);
  const [fax, setFax] = useState("");
  const [fieldError, setFieldError] = useState<string | undefined>();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<BriefingResponse | null>(null);

  function toggleMode(id: EntryModeId) {
    setEntryModes((current) =>
      current.includes(id) ? current.filter((mode) => mode !== id) : [...current, id],
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setFieldError(undefined);

    const payload = {
      currency,
      turnover,
      products,
      description,
      regions,
      budget,
      timeline,
      risk,
      entryModes,
      company_fax: fax,
    };
    const validated = validateExpansionRequest(payload);
    if (!validated.ok) {
      setError(validated.error);
      setFieldError(validated.field);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/emerging-markets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as BriefingResponse & { error?: string; field?: string };
      if (!response.ok) {
        setError(data.error || "We could not prepare a briefing just now. Please try again.");
        setFieldError(data.field);
        return;
      }
      setResult(data);
      requestAnimationFrame(() => {
        document.getElementById("emerging-markets-report")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } catch {
      setError("We could not reach the chambers site just now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="container-site py-16 md:py-24" id="briefing-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-rule" />
              <span className="label">The briefing</span>
            </div>
            <h2 className="heading-section text-3xl md:text-4xl text-parchment mb-5 text-balance">
              Tell us what the company sells, and on what scale.
            </h2>
            <p className="text-sm md:text-base text-parchment-dim leading-relaxed">
              Turnover and a short account of the business are enough to begin.
              Region, budget, timing, risk, and entry mode may all be left blank.
              The note that comes back is a starting point for counsel, not a
              decision to enter a market.
            </p>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-8 space-y-8" noValidate>
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="company_fax">Fax</label>
              <input
                id="company_fax"
                name="company_fax"
                tabIndex={-1}
                autoComplete="off"
                value={fax}
                onChange={(event) => setFax(event.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
              <div className="sm:col-span-3">
                <label htmlFor="turnover" className="label block mb-3">
                  Annual turnover
                </label>
                <input
                  id="turnover"
                  name="turnover"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="12,000,000"
                  value={turnover}
                  onChange={(event) => setTurnover(event.target.value)}
                  aria-invalid={fieldError === "turnover"}
                  className={fieldClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="currency" className="label block mb-3">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  value={currency}
                  onChange={(event) => setCurrency(event.target.value)}
                  aria-invalid={fieldError === "currency"}
                  className={fieldClass}
                >
                  {CURRENCIES.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.code} — {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <label htmlFor="products" className="label">
                  Products and services
                </label>
                <span className="text-2xs text-parchment-dim/70">
                  {products.trim().length}/{LIMITS.products.max}
                </span>
              </div>
              <textarea
                id="products"
                name="products"
                rows={4}
                maxLength={LIMITS.products.max}
                placeholder="Industrial valves, commissioning, and spare parts for thermal power plants."
                value={products}
                onChange={(event) => setProducts(event.target.value)}
                aria-invalid={fieldError === "products"}
                className={`${fieldClass} resize-y min-h-28`}
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <label htmlFor="description" className="label">
                  The company
                </label>
                <span className="text-2xs text-parchment-dim/70">
                  {description.trim().length}/{LIMITS.description.max}
                </span>
              </div>
              <textarea
                id="description"
                name="description"
                rows={5}
                maxLength={LIMITS.description.max}
                placeholder="Where it is based, who it sells to, and what it is trying to do next."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                aria-invalid={fieldError === "description"}
                className={`${fieldClass} resize-y min-h-32`}
              />
            </div>

            <fieldset className="border border-border px-5 py-6 md:px-7 md:py-8">
              <legend className="label px-2">Preferences — any may be skipped</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div className="md:col-span-2">
                  <label htmlFor="regions" className="label block mb-3">
                    Target regions
                  </label>
                  <input
                    id="regions"
                    name="regions"
                    maxLength={LIMITS.regions.max}
                    placeholder="Gulf, Southeast Asia, Germany"
                    value={regions}
                    onChange={(event) => setRegions(event.target.value)}
                    aria-invalid={fieldError === "regions"}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="label block mb-3">
                    Budget / appetite
                  </label>
                  <input
                    id="budget"
                    name="budget"
                    maxLength={LIMITS.budget.max}
                    placeholder="A modest first year, or a figure"
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    aria-invalid={fieldError === "budget"}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="timeline" className="label block mb-3">
                    Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    maxLength={LIMITS.timeline.max}
                    placeholder="A first invoice within twelve months"
                    value={timeline}
                    onChange={(event) => setTimeline(event.target.value)}
                    aria-invalid={fieldError === "timeline"}
                    className={fieldClass}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="risk" className="label block mb-3">
                    Risk tolerance
                  </label>
                  <select
                    id="risk"
                    name="risk"
                    value={risk}
                    onChange={(event) => setRisk(event.target.value as RiskLevelId | "")}
                    aria-invalid={fieldError === "risk"}
                    className={fieldClass}
                  >
                    <option value="">No preference</option>
                    {RISK_LEVELS.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-7" role="group" aria-labelledby="entry-mode-label">
                <p id="entry-mode-label" className="label mb-4">
                  Preferred entry mode
                </p>
                <div className="flex flex-wrap gap-3">
                  {ENTRY_MODES.map((mode) => {
                    const selected = entryModes.includes(mode.id);
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleMode(mode.id)}
                        className={`px-4 py-2 border text-2xs tracking-widest uppercase transition-colors duration-200 ${
                          selected
                            ? "border-parchment bg-parchment text-ink"
                            : "border-border text-parchment-dim hover:border-parchment-dim hover:text-parchment"
                        }`}
                      >
                        {mode.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </fieldset>

            {error && (
              <p role="alert" className="text-sm text-[#7a3b32] leading-relaxed">
                {error}
              </p>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <button type="submit" className="btn-primary justify-center disabled:opacity-40" disabled={submitting}>
                {submitting ? "Preparing the briefing" : "Prepare the briefing"}
                <span className="text-base leading-none" aria-hidden>
                  →
                </span>
              </button>
              <p className="text-xs text-parchment-dim leading-relaxed max-w-sm">
                The website does not keep a copy of this submission. It is used to
                prepare the briefing and then discarded.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section
        id="emerging-markets-report"
        className="container-site pb-20 md:pb-28 scroll-mt-24"
        aria-live="polite"
      >
        {submitting && (
          <div className="border border-border px-6 py-12 md:px-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="gold-rule animate-pulse" />
              <span className="label">Preparing</span>
            </div>
            <p className="font-serif text-3xl font-light text-parchment mb-3">
              The briefing is being written.
            </p>
            <p className="text-sm text-parchment-dim leading-relaxed max-w-xl">
              This usually takes under a minute. The page will keep your answers.
            </p>
          </div>
        )}

        {!submitting && result && (
          <EmergingMarketsReport
            input={result.input}
            report={result.report}
            preview={result.preview}
            preparedAt={result.preparedAt}
          />
        )}
      </section>
    </>
  );
}
