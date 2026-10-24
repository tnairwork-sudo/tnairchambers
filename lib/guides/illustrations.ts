import type { GuideIllustration } from "@/lib/guides/types";

/**
 * The drawing is supplied later, as public/guides/art/<slug>.webp (16:9)
 * and public/guides/art/<slug>-square.webp (1:1). The caption says what
 * the pun is, so the picture and the line can be made together.
 */
const illustrations: Record<string, GuideIllustration> = {
  "commercial-disputes-and-arbitration-delhi-high-court": {
    alt: "Commercial disputes and arbitration in the Delhi High Court: one route is a suit before a judge, and the other is the private process the contract already chose.",
    caption:
      "One route is a suit before a judge. The other is the private process the contract already chose.",
  },
  "writ-petitions-against-regulators-delhi-high-court": {
    alt: "Writ petitions against regulators and government in the Delhi High Court: a regulator's order can look final, and the Court's power to look at it is still limited.",
    caption:
      "A regulator's order can look final. The High Court's power to look at it is still limited.",
  },
  "company-and-corporate-disputes-delhi-high-court": {
    alt: "Company and corporate disputes in the Delhi High Court: some fights go to a tribunal, and others stay ordinary contract disputes.",
    caption:
      "Some company fights go to a tribunal. Others stay ordinary contract disputes.",
  },
  "nri-property-and-succession-delhi": {
    alt: "NRI property and succession matters in Delhi: a foreign grant, and a Delhi flat whose title still follows Indian law.",
    caption:
      "A foreign grant does not, by itself, change the name on a flat in Delhi.",
  },
  "ip-and-trademark-litigation-delhi-high-court": {
    alt: "IP and trademark litigation in the Delhi High Court: two near-matching names, and the difference a buyer would notice.",
    caption:
      "Two names can look almost the same. The case is the difference a buyer would notice.",
  },
  "white-collar-bail-delhi-high-court": {
    alt: "White-collar bail and anticipatory bail in the Delhi High Court: the job title is a label, and anticipatory bail is an instruction written before arrest.",
    caption:
      "The job title is only a label. Anticipatory bail is an instruction written in advance, and the section decides it.",
  },
  "supreme-court-slp-from-delhi-high-court": {
    alt: "Supreme Court SLPs from Delhi High Court orders: there is a route from the High Court, and the Supreme Court does not have to let the case in.",
    caption:
      "There is a route from the High Court. Leave is permission, and the Supreme Court does not have to grant it.",
  },
  "how-a-delhi-high-court-case-works": {
    alt: "How a Delhi High Court case works: a diary number held in the hand, and a cause list on the wall that has not called it.",
    caption:
      "The paper in the hand is a diary number. The board on the wall has not called it.",
  },
  "delhi-high-court-lawyer": {
    alt: "Delhi High Court lawyer: choosing and working with counsel, shown as a map of one case rather than a ranking of names.",
    caption:
      "The papers are a map of one case. They are not a ranking of names.",
  },
  "fdi-in-india": {
    alt: "FDI in India: automatic route, government route and 100% FDI sectors, shown as three outcomes: proceed, wait for approval, or a prohibited activity.",
    caption:
      "Three outcomes. One may proceed. One waits for approval. One was never open.",
  },
  "press-note-3": {
    alt: "Press Note 3 explained: the letterhead names one country, and the test follows the person who owns the shares.",
    caption:
      "The letterhead names one country. The test follows the person who owns the shares.",
  },
  "joint-venture-in-india": {
    alt: "Joint ventures in India with a foreign company: the contract can set house rules, and it cannot rewrite the law that applies to the company.",
    caption:
      "The contract can set the house rules. It cannot rewrite the law that applies to the company.",
  },
  "dpdp-act-compliance": {
    alt: "DPDP Act compliance for foreign companies: a business with no shop in the city whose checkout still collects a name.",
    caption:
      "There is no shop in the city. The checkout can still collect a name, and the Act can still apply.",
  },
  "setting-up-foreign-subsidiary-in-india": {
    alt: "Setting up a foreign subsidiary in India: a liaison office, a branch office, and a subsidiary, of which only the subsidiary is a company of its own.",
    caption:
      "Three permissions. Only the subsidiary is a company of its own.",
  },
  "employer-of-record-india": {
    alt: "Employer of record in India and Indian labour codes: the contract names one employer, and another company directs the work.",
    caption:
      "The contract can name one employer. Another company can still direct the work.",
  },
  "repatriation-of-profits-from-india": {
    alt: "Repatriation of profits from India: a dividend, a branch profit, and a sale of shares, three different payments leaving the same building.",
    caption:
      "A dividend, a branch profit, and a sale of shares are three different payments, even when they leave the same building.",
  },
  "enforcement-of-foreign-judgments-in-india": {
    alt: "Enforcement of foreign judgments and arbitral awards in India: a court seal and an arbitrator's signature, enforced under different statutes.",
    caption:
      "A court seal and an arbitrator's signature are different papers. They are enforced under different statutes.",
  },
};

export function illustrationFor(slug: string): GuideIllustration {
  const illustration = illustrations[slug];
  if (!illustration) {
    throw new Error(`No illustration copy for guide: ${slug}`);
  }
  return illustration;
}
