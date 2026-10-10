export const CURRENCIES = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "INR", name: "Indian Rupee" },
  { code: "AED", name: "UAE Dirham" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "QAR", name: "Qatari Riyal" },
  { code: "ZAR", name: "South African Rand" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "KRW", name: "South Korean Won" },
  { code: "SEK", name: "Swedish Krona" },
] as const;

export const ENTRY_MODES = [
  { id: "export", label: "Export" },
  { id: "jv", label: "Joint venture" },
  { id: "subsidiary", label: "Subsidiary" },
  { id: "distributor", label: "Distributor" },
  { id: "licensing", label: "Licensing" },
  { id: "franchise", label: "Franchise" },
] as const;

export const RISK_LEVELS = [
  { id: "conservative", label: "Conservative" },
  { id: "balanced", label: "Balanced" },
  { id: "higher", label: "Higher appetite" },
] as const;

export const LIMITS = {
  products: { min: 8, max: 800 },
  description: { min: 20, max: 2000 },
  regions: { max: 400 },
  budget: { max: 400 },
  timeline: { max: 400 },
  turnover: 1_000_000_000_000_000,
} as const;

export type CurrencyCode = (typeof CURRENCIES)[number]["code"];
export type EntryModeId = (typeof ENTRY_MODES)[number]["id"];
export type RiskLevelId = (typeof RISK_LEVELS)[number]["id"];

export interface ExpansionInput {
  currency: CurrencyCode;
  turnover: number;
  products: string;
  description: string;
  regions: string;
  budget: string;
  timeline: string;
  risk: RiskLevelId | "";
  entryModes: EntryModeId[];
}

export interface MarketBrief {
  name: string;
  rationale: string;
  demandFit: string;
  regulatory: string;
  entryRoute: string;
  risks: string[];
}

export interface ExpansionReport {
  headline: string;
  overview: string;
  markets: MarketBrief[];
  nextSteps: string[];
}

export type ValidationResult =
  | { ok: true; value: ExpansionInput }
  | { ok: false; error: string; field?: string };

const CURRENCY_CODES = new Set<string>(CURRENCIES.map((item) => item.code));
const ENTRY_MODE_IDS = new Set<string>(ENTRY_MODES.map((item) => item.id));
const RISK_IDS = new Set<string>(RISK_LEVELS.map((item) => item.id));

export function currencyName(code: CurrencyCode): string {
  return CURRENCIES.find((item) => item.code === code)?.name ?? code;
}

export function entryModeLabel(id: EntryModeId): string {
  return ENTRY_MODES.find((item) => item.id === id)?.label ?? id;
}

export function riskLabel(id: RiskLevelId | ""): string {
  if (!id) return "Not specified";
  return RISK_LEVELS.find((item) => item.id === id)?.label ?? "Not specified";
}

export function formatTurnover(amount: number, currency: CurrencyCode): string {
  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(amount);
  return `${formatted} ${currency}`;
}

export function cleanText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim()
    .slice(0, max);
}

function parseTurnover(value: unknown): number | null {
  if (typeof value === "number") {
    if (!Number.isFinite(value) || value <= 0 || value > LIMITS.turnover) return null;
    return Math.round(value * 100) / 100;
  }
  if (typeof value !== "string") return null;
  const stripped = value.trim().replace(/[,\s]/g, "");
  if (!/^\d+(\.\d{1,2})?$/.test(stripped)) return null;
  const amount = Number(stripped);
  if (!Number.isFinite(amount) || amount <= 0 || amount > LIMITS.turnover) return null;
  return amount;
}

export function validateExpansionRequest(body: unknown): ValidationResult {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "We could not read that submission." };
  }

  const record = body as Record<string, unknown>;
  const fax = record.company_fax;
  if (typeof fax === "string" && fax.trim().length > 0) {
    return { ok: false, error: "We could not prepare a briefing from that submission." };
  }
  if (fax !== undefined && fax !== null && fax !== "") {
    return { ok: false, error: "We could not prepare a briefing from that submission." };
  }

  const currency = typeof record.currency === "string" ? record.currency.trim().toUpperCase() : "";
  if (!CURRENCY_CODES.has(currency)) {
    return { ok: false, error: "Choose the currency of the annual turnover.", field: "currency" };
  }

  const turnover = parseTurnover(record.turnover);
  if (turnover === null) {
    return {
      ok: false,
      error: "Enter the annual turnover as a number greater than zero.",
      field: "turnover",
    };
  }

  const products = cleanText(record.products, LIMITS.products.max);
  if (products.length < LIMITS.products.min) {
    return {
      ok: false,
      error: "Describe the products and services in at least a few words.",
      field: "products",
    };
  }
  if (typeof record.products === "string" && record.products.trim().length > LIMITS.products.max) {
    return {
      ok: false,
      error: "The products and services text is too long. Please keep it under 800 characters.",
      field: "products",
    };
  }

  const description = cleanText(record.description, LIMITS.description.max);
  if (description.length < LIMITS.description.min) {
    return {
      ok: false,
      error: "Add a brief description of the company — what it does, and where it is based.",
      field: "description",
    };
  }
  if (
    typeof record.description === "string" &&
    record.description.trim().length > LIMITS.description.max
  ) {
    return {
      ok: false,
      error: "The company description is too long. Please keep it under 2,000 characters.",
      field: "description",
    };
  }

  const regions = cleanText(record.regions, LIMITS.regions.max + 1);
  if (regions.length > LIMITS.regions.max) {
    return { ok: false, error: "Please shorten the target regions.", field: "regions" };
  }
  const budget = cleanText(record.budget, LIMITS.budget.max + 1);
  if (budget.length > LIMITS.budget.max) {
    return { ok: false, error: "Please shorten the budget note.", field: "budget" };
  }
  const timeline = cleanText(record.timeline, LIMITS.timeline.max + 1);
  if (timeline.length > LIMITS.timeline.max) {
    return { ok: false, error: "Please shorten the timeline.", field: "timeline" };
  }

  const riskRaw = typeof record.risk === "string" ? record.risk.trim() : "";
  if (riskRaw && !RISK_IDS.has(riskRaw)) {
    return {
      ok: false,
      error: "Choose a risk tolerance from the list, or leave it blank.",
      field: "risk",
    };
  }

  if (record.entryModes !== undefined && !Array.isArray(record.entryModes)) {
    return { ok: false, error: "Choose entry modes from the list, or leave them blank.", field: "entryModes" };
  }
  const entryModes: EntryModeId[] = [];
  if (Array.isArray(record.entryModes)) {
    for (const mode of record.entryModes) {
      if (typeof mode !== "string" || !ENTRY_MODE_IDS.has(mode)) {
        return {
          ok: false,
          error: "Choose entry modes from the list, or leave them blank.",
          field: "entryModes",
        };
      }
      const id = mode as EntryModeId;
      if (!entryModes.includes(id)) entryModes.push(id);
    }
  }

  return {
    ok: true,
    value: {
      currency: currency as CurrencyCode,
      turnover,
      products,
      description,
      regions,
      budget,
      timeline,
      risk: riskRaw as RiskLevelId | "",
      entryModes,
    },
  };
}
