export type SectorArea = {
  id: string;
  title: string;
  sentences: string[];
  href: string;
  links?: { href: string; label: string }[];
};

export const sectorStatement =
  "Nair & Co advises on the legal and regulatory side of aerospace, space and defence in India: export controls, supply and procurement contracts, foreign investment and joint ventures, technology and intellectual property, and disputes before courts and tribunals. Each matter is delivered by a dedicated team.";

export const sectorHeadline =
  "Where aircraft, launch vehicles and satellites meet the law.";

export const sectorLede =
  "The work covers the legal and regulatory questions that come with building, supplying, exporting and operating aerospace, space and defence systems in India.";

export const sectorAreas: SectorArea[] = [
  {
    id: "export-controls",
    title: "Export controls and SCOMET",
    sentences: [
      "Whether goods, software and technology need an export authorisation under India's SCOMET list, and the documents that go with an application.",
      "The in-house SCOMET Cell handles this work.",
    ],
    href: "/scomet",
  },
  {
    id: "procurement",
    title: "Defence procurement and supply contracts",
    sentences: [
      "Contracts and compliance for suppliers and integrators working with defence customers and prime contractors.",
      "The work is to set out obligations, delivery terms and risk before a contract is signed.",
    ],
    href: "/space-aerospace-defence#procurement",
  },
  {
    id: "investment",
    title: "Foreign investment and joint ventures",
    sentences: [
      "Entry routes, sectoral conditions and approvals for foreign companies investing in or partnering with Indian aerospace and defence businesses.",
      "See also the guides on FDI in India, Press Note 3 and joint ventures.",
    ],
    href: "/space-aerospace-defence#investment",
    links: [
      { href: "/guides/fdi-in-india", label: "FDI in India" },
      { href: "/guides/press-note-3", label: "Press Note 3" },
      {
        href: "/guides/joint-venture-in-india",
        label: "Joint ventures in India",
      },
    ],
  },
  {
    id: "aviation",
    title: "Aviation law",
    sentences: [
      "Legal questions that arise in civil and commercial aviation.",
    ],
    href: "/space-aerospace-defence#aviation",
  },
  {
    id: "technology",
    title: "Technology, licensing and intellectual property",
    sentences: [
      "Licence, transfer and protection of technology and designs, including what may and may not be shared across borders.",
      "Handled with the intellectual property team.",
    ],
    href: "/space-aerospace-defence#technology",
  },
  {
    id: "disputes",
    title: "Disputes and arbitration",
    sentences: [
      "Commercial disputes and arbitration, and proceedings before the Delhi High Court, the Supreme Court of India and tribunals, through the courtroom litigation team.",
    ],
    href: "/space-aerospace-defence#disputes",
  },
];

export const sectorClosing =
  "Matters in this sector are delivered by separate, dedicated teams, with the SCOMET Cell for export authorisation.";

export const generalInformationLine =
  "This page is general information, not legal advice.";

export const scometHomeList = [
  "Classification memos",
  "Filing templates and end-user documents",
  "Application consulting",
  "Risk analysis before filing",
  "Export-control due diligence",
  "Corporate advisory and internal compliance",
] as const;

export const scometServices: { title: string; body: string }[] = [
  {
    title: "Classification and applicability",
    body: "Whether an item, a piece of software or a body of technology falls within the SCOMET list, and under which category and entry. A written classification memo sets out the reasoning.",
  },
  {
    title: "SCOMET filing templates",
    body: "The documents that go with an application, prepared for the applicant's case: end-user certificates in the prescribed formats, the legal undertaking, the covering letter and the technical description.",
  },
  {
    title: "Consulting on SCOMET applications",
    body: "Choosing the authorisation route and the licensing authority, and preparing the application so that every document agrees with the others before anything is submitted.",
  },
  {
    title: "Risk analysis of applications",
    body: "A review before filing: classification, end user and destination, technology transfer, catch-all exposure, and consistency across the purchase order, the certificate and the technical description.",
  },
  {
    title: "Due diligence",
    body: "Export-control due diligence on a transaction, a group or a supply chain, including whether screening rules reflect India's own list and not only international ones.",
  },
  {
    title: "Corporate advisory",
    body: "Internal compliance programmes, intra-company transfer arrangements, record keeping and post-shipment reporting, set out as policies and documents a business can run.",
  },
  {
    title: "Replies to queries and deficiency letters",
    body: "Written responses to queries raised during the review of an application.",
  },
  {
    title: "Remedies",
    body: "Where an authorisation is refused, or a penalty or seizure follows, the courtroom litigation team advises on the remedies available.",
  },
];

export const scometSteps: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Classify",
    body: "The item, software or technology is classified against the current list.",
  },
  {
    n: "02",
    title: "Plan the route",
    body: "The authorisation route and the licensing authority are chosen.",
  },
  {
    n: "03",
    title: "Prepare the file",
    body: "The documents are prepared and checked against one another. The applicant files on its own DGFT login and digital signature.",
  },
  {
    n: "04",
    title: "After the decision",
    body: "Licence conditions, validity, reporting and renewal dates are tracked.",
  },
];

export const scometSectors =
  "Aerospace and space systems, unmanned aerial systems, defence electronics, specialty chemicals, advanced materials, semiconductors and electronics, and software and technology.";

export const scometHonesty =
  "Authorisations are decided by the government, and the decision is discretionary. The cell prepares and advises. It does not promise an outcome or a timeline.";

export const scometClosing =
  "This page is general information, not legal advice. Rules change, so please check the current DGFT notifications.";
