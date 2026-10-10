import type { BriefingSource, ExpansionReport, MarketBrief } from "@/lib/emerging-markets/options";

export class AnalysisError extends Error {
  readonly code: "missing_key" | "timeout" | "upstream" | "refusal" | "empty" | "shape" | "config";
  readonly status: number;

  constructor(
    code: AnalysisError["code"],
    message: string,
    status = 502,
  ) {
    super(message);
    this.name = "AnalysisError";
    this.code = code;
    this.status = status;
  }
}

interface CitationAnnotation {
  type?: string;
  url?: string;
  title?: string;
}

interface ResponseContentPart {
  type?: string;
  text?: string;
  refusal?: string;
  annotations?: CitationAnnotation[];
}

interface ResponseOutputItem {
  type?: string;
  content?: ResponseContentPart[];
}

export interface ResponsesApiPayload {
  status?: string;
  error?: { message?: string };
  citations?: unknown;
  output?: ResponseOutputItem[];
}

const INLINE_CITATION = /\[\[\d+\]\]\((https?:\/\/[^)\s]+)\)/g;

export function safeHttpUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > 500) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (!url.hostname.includes(".")) return null;
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}

export function sourceHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "Source";
  }
}

function canonicalUrl(url: string): string {
  return url.replace(/\/$/, "").toLowerCase();
}

/** Remove inline citation markdown so it cannot break the JSON briefing. */
export function liftInlineCitations(raw: string): { text: string; urls: string[] } {
  const urls: string[] = [];
  const text = raw.replace(INLINE_CITATION, (_match, url: string) => {
    urls.push(url);
    return "";
  });
  return { text, urls };
}

export function citationUrls(payload: ResponsesApiPayload): string[] {
  const urls: string[] = [];
  if (Array.isArray(payload.citations)) {
    for (const item of payload.citations) {
      if (typeof item === "string") urls.push(item);
    }
  }
  for (const item of payload.output ?? []) {
    for (const part of item.content ?? []) {
      for (const annotation of part.annotations ?? []) {
        if (annotation.url) urls.push(annotation.url);
      }
    }
  }
  return urls;
}

export function mergeSources(primary: BriefingSource[], extraUrls: string[]): BriefingSource[] {
  const seen = new Set<string>();
  const merged: BriefingSource[] = [];

  const add = (source: BriefingSource) => {
    const url = safeHttpUrl(source.url);
    if (!url || merged.length >= 8) return;
    const key = canonicalUrl(url);
    if (seen.has(key)) return;
    seen.add(key);
    const title = source.title.replace(/\s+/g, " ").trim().slice(0, 140);
    const note = source.note.replace(/\s+/g, " ").trim().slice(0, 240);
    merged.push({
      title: title || sourceHost(url),
      url,
      note: note || "Cited in this briefing.",
    });
  };

  for (const source of primary) add(source);
  if (merged.length < 3) {
    for (const url of extraUrls) {
      add({ title: "", url, note: "Retrieved during search." });
    }
  }
  return merged;
}

function asProse(value: unknown, max: number, label: string): string {
  if (typeof value !== "string") {
    throw new AnalysisError("shape", `The briefing was missing ${label}.`);
  }
  const cleaned = value
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  if (!cleaned) {
    throw new AnalysisError("shape", `The briefing was missing ${label}.`);
  }
  return cleaned.slice(0, max);
}

function asLines(value: unknown, maxItems: number, maxLength: number, label: string): string[] {
  if (!Array.isArray(value)) {
    throw new AnalysisError("shape", `The briefing was missing ${label}.`);
  }
  const lines = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .slice(0, maxItems)
    .map((item) => item.slice(0, maxLength));
  if (lines.length === 0) {
    throw new AnalysisError("shape", `The briefing was missing ${label}.`);
  }
  return lines;
}

function asSources(value: unknown): BriefingSource[] {
  if (!Array.isArray(value)) return [];
  const sources: BriefingSource[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object" || Array.isArray(item)) continue;
    const record = item as Record<string, unknown>;
    const url = typeof record.url === "string" ? record.url : "";
    const title = typeof record.title === "string" ? record.title : "";
    const note = typeof record.note === "string" ? record.note : "";
    sources.push({ title, url, note });
  }
  return mergeSources(sources, []);
}

function asMarket(value: unknown, index: number): MarketBrief {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new AnalysisError("shape", "One of the recommended markets could not be read.");
  }
  const market = value as Record<string, unknown>;
  return {
    name: asProse(market.name, 120, `a name for market ${index + 1}`),
    rationale: asProse(market.rationale, 900, `the reasoning for market ${index + 1}`),
    demandFit: asProse(market.demandFit, 900, `the demand fit for market ${index + 1}`),
    regulatory: asProse(market.regulatory, 900, `the regulatory notes for market ${index + 1}`),
    entryRoute: asProse(market.entryRoute, 900, `the entry route for market ${index + 1}`),
    risks: asLines(market.risks, 4, 320, `the risks for market ${index + 1}`),
  };
}

export function extractOutputText(payload: ResponsesApiPayload): string {
  if (payload.error?.message) {
    throw new AnalysisError("upstream", "The briefing service returned an error.");
  }

  const chunks: string[] = [];
  for (const item of payload.output ?? []) {
    if (item.type !== "message") continue;
    for (const part of item.content ?? []) {
      if (part.type === "refusal") {
        throw new AnalysisError(
          "refusal",
          "A briefing could not be prepared from the details provided. Please revise them, or write to the firm.",
        );
      }
      if (part.type === "output_text" && part.text) chunks.push(part.text);
    }
  }

  const text = chunks.join("").trim();
  if (!text) {
    throw new AnalysisError("empty", "The briefing service returned an empty response. Please try again.");
  }
  return text;
}

export function normalizeReport(value: unknown): ExpansionReport {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new AnalysisError("shape", "The briefing could not be read. Please try again.");
  }
  const record = value as Record<string, unknown>;
  if (!Array.isArray(record.markets) || record.markets.length < 3) {
    throw new AnalysisError("shape", "The briefing did not include enough markets. Please try again.");
  }

  return {
    headline: asProse(record.headline, 180, "a headline"),
    overview: asProse(record.overview, 1600, "an overview"),
    markets: record.markets.slice(0, 4).map((market, index) => asMarket(market, index)),
    nextSteps: asLines(record.nextSteps, 6, 400, "next steps"),
    sources: asSources(record.sources),
  };
}

export const REPORT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["headline", "overview", "markets", "nextSteps", "sources"],
  properties: {
    headline: { type: "string" },
    overview: { type: "string" },
    markets: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["name", "rationale", "demandFit", "regulatory", "entryRoute", "risks"],
        properties: {
          name: { type: "string" },
          rationale: { type: "string" },
          demandFit: { type: "string" },
          regulatory: { type: "string" },
          entryRoute: { type: "string" },
          risks: { type: "array", items: { type: "string" } },
        },
      },
    },
    nextSteps: { type: "array", items: { type: "string" } },
    sources: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["title", "url", "note"],
        properties: {
          title: { type: "string" },
          url: { type: "string" },
          note: { type: "string" },
        },
      },
    },
  },
} as const;
