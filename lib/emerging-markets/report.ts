import type { ExpansionReport, MarketBrief } from "@/lib/emerging-markets/options";

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

interface ResponseContentPart {
  type?: string;
  text?: string;
  refusal?: string;
}

interface ResponseOutputItem {
  type?: string;
  content?: ResponseContentPart[];
}

export interface ResponsesApiPayload {
  status?: string;
  error?: { message?: string };
  output?: ResponseOutputItem[];
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
          "A briefing could not be prepared from the details provided. Please revise them, or write to the chambers.",
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
  };
}

export const REPORT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["headline", "overview", "markets", "nextSteps"],
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
  },
} as const;
