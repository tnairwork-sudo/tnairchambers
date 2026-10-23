import type { GuideIllustration } from "@/lib/guides/types";

/**
 * The drawing is supplied later, as public/guides/art/<slug>.webp (16:9)
 * and public/guides/art/<slug>-square.webp (1:1). The caption says what
 * the pun is, so the picture and the line can be made together.
 */
const illustrations: Record<string, GuideIllustration> = {
  "commercial-disputes-and-arbitration-delhi-high-court": {
    alt: "Commercial disputes and arbitration in the Delhi High Court, drawn as two doors in one frame: one opening onto a judge, the other onto a private table.",
    caption:
      "Two doors share one frame. One opens onto a judge. The other opens onto the private table the contract already chose.",
  },
  "writ-petitions-against-regulators-delhi-high-court": {
    alt: "Writ petitions against regulators and government in the Delhi High Court: a large official stamp, and a narrow opening a writ petition delhi high court looks through.",
    caption:
      "The stamp is large. The opening the court looks through is small.",
  },
  "company-and-corporate-disputes-delhi-high-court": {
    alt: "Company and corporate disputes in the Delhi High Court: one company register, divided between a tribunal and a contract.",
    caption:
      "One register, divided. One half is the tribunal. The other half is still a contract.",
  },
  "nri-property-and-succession-delhi": {
    alt: "NRI property and succession matters in Delhi: a key cut for a Delhi lock, and a foreign skyline on the ring that cannot turn it. An NRI property dispute delhi stays with the house.",
    caption:
      "The key is cut for a lock in Delhi. The skyline hanging on the ring does not turn it.",
  },
  "ip-and-trademark-litigation-delhi-high-court": {
    alt: "IP and trademark litigation in the Delhi High Court: two near-matching labels, and the gap between them. Trademark infringement delhi high court is that gap.",
    caption:
      "Two labels, almost twins. The narrow space between them is the case.",
  },
  "white-collar-bail-delhi-high-court": {
    alt: "White-collar bail and anticipatory bail in the Delhi High Court: a white collar as a label on the case, and a door latch made from the statute. Anticipatory bail delhi high court is that latch, before the door closes.",
    caption:
      "The collar is a name for the case. The latch on the door is the statute.",
  },
  "supreme-court-slp-from-delhi-high-court": {
    alt: "Supreme Court SLPs from Delhi High Court orders: a stair that ends at a shut door. An SLP supreme court from delhi high court asks for leave, and the door does not owe a key.",
    caption:
      "The stair up from the High Court is real. The door at the top does not owe anyone a key.",
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
    alt: "FDI in India: automatic route, government route and 100% FDI sectors, drawn as three gates. One is open, one asks you to wait, and one was never a gate. The FDI rules in india are the gates.",
    caption:
      "Three gates. One stands open. One asks you to wait. One was never a gate.",
  },
  "press-note-3": {
    alt: "Press Note 3 explained: a letterhead from somewhere else, and a thread running past it to the person who owns the shares. Press note 3 follows the thread.",
    caption:
      "The letterhead says one country. The thread runs past it, to the person who owns the shares.",
  },
  "joint-venture-in-india": {
    alt: "Joint ventures in India with a foreign company: two keys, cut differently, turning one Indian lock. A joint venture in india with foreign company cannot redraw the door.",
    caption:
      "Two keys, cut differently, turn one Indian lock. Neither key can redraw the door.",
  },
  "dpdp-act-compliance": {
    alt: "DPDP Act compliance for foreign companies: a shop window facing Delhi, with no shop behind it. DPDP act compliance does not wait for a lease.",
    caption:
      "There is no shop on the street. The window still faces Delhi, and it still asks for a name.",
  },
  "setting-up-foreign-subsidiary-in-india": {
    alt: "Setting up a foreign subsidiary in India: liaison office, branch office or subsidiary, drawn as three desks, only one of them a building of its own. A liaison office in india does not earn.",
    caption:
      "Three desks in a row. Only the third is a building of its own.",
  },
  "employer-of-record-india": {
    alt: "Employer of record in India and Indian labour codes: a nameplate that says employer, and other hands directing the day. Employer of record india is the nameplate, not the test.",
    caption:
      "The nameplate says employer. The hands directing the day belong to someone else.",
  },
  "repatriation-of-profits-from-india": {
    alt: "Repatriation of profits from India: three envelopes leaving one building, the flap of each a different payment.",
    caption:
      "Three envelopes leave one building. The flap, not the paper, tells them apart.",
  },
  "enforcement-of-foreign-judgments-in-india": {
    alt: "Enforcement of foreign judgments and arbitral awards in India: a court seal and an arbitrator's signature on one table, opening different doors. Enforcement of foreign judgments in india follows the seal.",
    caption:
      "Two papers on one table. A court seal and an arbitrator's signature open different doors.",
  },
};

export function illustrationFor(slug: string): GuideIllustration {
  const illustration = illustrations[slug];
  if (!illustration) {
    throw new Error(`No illustration copy for guide: ${slug}`);
  }
  return illustration;
}
