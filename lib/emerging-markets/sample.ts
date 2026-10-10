import {
  entryModeLabel,
  formatTurnover,
  riskLabel,
  type ExpansionInput,
  type ExpansionReport,
  type MarketBrief,
} from "@/lib/emerging-markets/options";

const COMPLEMENTS = ["United Arab Emirates", "Singapore", "Germany", "Vietnam"];

function offerPhrase(products: string): string {
  const flat = products.replace(/\s+/g, " ").trim();
  const first = flat.split(/[,;.]/)[0]?.trim() || flat;
  const short = first.length > 52 ? first.slice(0, 52).replace(/\s+\S*$/, "") : first;
  return short.charAt(0).toLowerCase() + short.slice(1);
}

function clip(value: string, max: number): string {
  const flat = value.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  const sliced = flat.slice(0, max);
  const lastSpace = sliced.lastIndexOf(" ");
  const base = (lastSpace > max * 0.6 ? sliced.slice(0, lastSpace) : sliced).replace(/[.,;:]$/, "");
  return `${base}…`;
}

function chosenMarkets(regions: string): { names: string[]; also: string[] } {
  const parts = regions
    .split(/[,;/|]/)
    .map((part) => part.trim())
    .filter((part) => part.length > 1);
  const unique: string[] = [];
  for (const part of parts) {
    if (!unique.some((item) => item.toLowerCase() === part.toLowerCase())) unique.push(part);
  }
  if (unique.length === 0) {
    return { names: ["United Arab Emirates", "Singapore", "Germany"], also: [] };
  }
  if (unique.length >= 3) return { names: unique.slice(0, 3), also: unique.slice(3, 6) };
  const names = [...unique];
  for (const extra of COMPLEMENTS) {
    if (names.length >= 3) break;
    if (!names.some((item) => item.toLowerCase() === extra.toLowerCase())) names.push(extra);
  }
  return { names, also: [] };
}

/** Rough USD factors, used only to choose a sample entry route. Not shown as a rate. */
const TO_USD: Record<string, number> = {
  USD: 1,
  EUR: 1.08,
  GBP: 1.27,
  INR: 0.012,
  AED: 0.27,
  SGD: 0.74,
  AUD: 0.66,
  CAD: 0.73,
  CHF: 1.12,
  JPY: 0.0067,
  CNY: 0.14,
  HKD: 0.13,
  SAR: 0.27,
  QAR: 0.27,
  ZAR: 0.055,
  BRL: 0.18,
  KRW: 0.00073,
  SEK: 0.095,
};

function modePhrase(input: ExpansionInput): string {
  if (input.entryModes.length === 1) return entryModeLabel(input.entryModes[0]).toLowerCase();
  if (input.entryModes.length > 1) {
    const labels = input.entryModes.map((mode) => entryModeLabel(mode).toLowerCase());
    return `${labels.slice(0, -1).join(", ")} and ${labels[labels.length - 1]}`;
  }
  const usd = input.turnover * (TO_USD[input.currency] ?? 1);
  if (usd < 5_000_000) return "export through a distributor";
  if (usd < 40_000_000) return "a distributor or a narrow joint venture";
  return "a subsidiary or a joint venture, once demand is evidenced";
}

function marketBrief(name: string, input: ExpansionInput, index: number): MarketBrief {
  const products = clip(input.products, 180);
  const mode = modePhrase(input);
  const lead =
    index === 0
      ? `${name} is the place to test first. It can be approached without a heavy local organisation, and buyers there are used to importing specialised products. The company’s offer — ${products} — should be taken to a short list of named customers before any exclusive appointment is signed.`
      : index === 1
        ? `${name} is the sensible complement. It rewards a company that already has a clear specification, a delivery record, and the patience to meet local documentation. It is a better second step than a simultaneous launch.`
        : `${name} is a longer preparation. It belongs on the plan because the offer can travel there, but the first invoice will take longer and the cost of a mistake in the structure is higher.`;

  const riskNotes = [
    `A local partner who owns the customer relationship in ${name} can become difficult to replace. The contract should say who owns the account.`,
    "Product standards, labelling, or a sector licence may be stricter than at home, and that can move the first shipment by months.",
  ];
  if (input.risk === "conservative") {
    riskNotes.push(
      "The stated risk tolerance is conservative, so exclusivity and minimum purchases should wait until sell-through is real.",
    );
  } else if (input.risk === "higher") {
    riskNotes.push(
      "The stated risk appetite is higher. A larger first commitment can be justified, provided the exit from it is written down before money moves.",
    );
  } else {
    riskNotes.push(
      "Risk tolerance was not fully specified, so the first commitment should stay reversible.",
    );
  }

  return {
    name,
    rationale: lead,
    demandFit: `The offer — ${products} — is most plausible where buyers already bring this kind of equipment or service in from abroad, or where local supply is thin on specification, after-sales support, or the paperwork that travels with it. Treat that as a hypothesis to test with named buyers, not as a claim that the market is open.`,
    regulatory: `Entering ${name} turns on foreign-ownership rules, customs classification, product standards, and any licence that attaches to this line of business. Those points are local and they change. They should be confirmed with counsel in ${name} before a contract is signed. Sanctions, export controls, and the identity of the end customer should be checked on each sale.`,
    entryRoute: input.entryModes.length
      ? `Honour the stated preference: ${mode}. Keep the first arrangement short, with a defined territory, and with clarity on price, brand, and who may appoint sub-agents.`
      : `No entry mode was specified. For a first step, ${mode} is the more proportionate route. A subsidiary can wait until a buyer has actually paid.`,
    risks: riskNotes,
  };
}

export function buildSampleReport(input: ExpansionInput): ExpansionReport {
  const { names, also } = chosenMarkets(input.regions);
  const money = formatTurnover(input.turnover, input.currency);
  const products = clip(input.products, 220);
  const about = clip(input.description, 360);
  const preferenceBits = [
    input.regions ? `regions noted: ${clip(input.regions, 160)}` : "no target region was specified",
    input.budget ? `budget noted: ${clip(input.budget, 140)}` : "no budget was specified",
    input.timeline ? `timeline noted: ${clip(input.timeline, 140)}` : "no timeline was specified",
    `risk tolerance: ${riskLabel(input.risk).toLowerCase()}`,
    input.entryModes.length
      ? `preferred entry: ${input.entryModes.map((mode) => entryModeLabel(mode).toLowerCase()).join(", ")}`
      : "no entry mode was specified",
  ];

  const alsoSentence =
    also.length > 0
      ? ` Also noted, and not developed below: ${also.join("; ")}.`
      : "";

  const timelineStep = input.timeline
    ? `Match the first test to the timeline described (“${clip(input.timeline, 140)}”), with a written review date and a ceiling on stock, people, and exclusivity.`
    : "Run a six-month test with a ceiling on stock, people, and exclusivity, and a written date on which the arrangement is reviewed.";

  return {
    headline: `A first reading on where ${offerPhrase(input.products)} could be sold next`,
    overview: `This reading starts from an annual turnover of ${money} and from an offer built around ${products}. As described, the company is this: ${about}\n\nPreferences taken into account — ${preferenceBits.join("; ")}. Where a preference was left blank, the note below chooses a cautious default and says so. The lead markets are ${names.join(", ")}.${alsoSentence}\n\nWhat follows is a structured starting point. It is not a market study, a measured forecast, or a decision to enter.`,
    markets: names.map((name, index) => marketBrief(name, input, index)),
    nextSteps: [
      "Write the offer on one page: who it is for, the specification, the proof you can already show, and the lead time.",
      `Name ten possible buyers in ${names[0]} and speak to five, through a channel that matches the entry route above.`,
      `Ask counsel in ${names[0]} to confirm ownership rules, product approvals, and the contract form before any exclusivity is granted.`,
      timelineStep,
      input.budget
        ? `Hold the first commitment inside the budget described (“${clip(input.budget, 140)}”). If that figure cannot carry a local entity, do not create one yet.`
        : "Do not create a local entity until a buyer has paid and the cost of the entity is known.",
      "Bring the structure — distributor, joint venture, or subsidiary — to counsel before it is signed, including tax residence, how money comes home, and where a dispute would be heard.",
    ],
  };
}
