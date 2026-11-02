import type { GuidePage } from "@/lib/guides/types";

export const scometGuide: GuidePage = {
  slug: "scomet-crash-course",
  group: "export",
  seoTitle: "SCOMET: A Crash Course on India's Export Controls",
  description:
    "SCOMET is India's list of sensitive items that need a government licence before they leave the country. The name stands for Special Chemicals, Organisms, Materials, Equipment and Technologies.",
  keywords: [
    "SCOMET",
    "Special Chemicals, Organisms, Materials, Equipment and Technologies",
    "DGFT",
    "end-user certificate",
    "Foreign Trade (Development and Regulation) Act, 1992",
    "New Delhi",
  ],
  eyebrow: "Export controls",
  title: "SCOMET: A Crash Course on India's Export Controls",
  questionSpan: "India's SCOMET export controls",
  lede: "",
  inLanguage: "en-IN",
  dateLabel: "2 November 2026",
  closing:
    "This note is general information, not legal advice. Rules change, so please check the current DGFT notifications or speak to us about your specific case.",
  sections: [
    {
      heading: "What SCOMET is",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "SCOMET is India's list of sensitive items that need a government licence before they leave the country. The name stands for Special Chemicals, Organisms, Materials, Equipment and Technologies. The list sits in Appendix 3 to Schedule 2 of the ITC(HS) export classification. The legal backing comes from the Foreign Trade (Development and Regulation) Act, 1992 and the Weapons of Mass Destruction and their Delivery Systems (Prohibition of Unlawful Activities) Act, 2005.",
          ],
        },
      ],
    },
    {
      heading: "Why it exists",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "India aligns its controls with the international export control regimes. It is a member of the Missile Technology Control Regime (MTCR), the Wassenaar Arrangement (conventional arms and dual-use goods) and the Australia Group (chemical and biological items). India is not a member of the Nuclear Suppliers Group, but it follows that group's guidelines.",
          ],
        },
      ],
    },
    {
      heading: "The categories",
      blocks: [
        {
          type: "list",
          items: [
            "**Category 0:** nuclear materials and equipment (licensed by the Department of Atomic Energy)",
            "**Category 1:** toxic chemical agents and precursors",
            "**Category 2:** micro-organisms and toxins",
            "**Category 3:** materials, materials processing equipment and related technologies",
            "**Category 4:** nuclear-related other equipment and technology",
            "**Category 5:** aerospace systems, equipment and parts, including rockets, unmanned aerial vehicles and their subsystems",
            "**Category 6:** munitions list (licensed by the Department of Defence Production)",
            "**Category 7:** reserved",
            "**Category 8:** special materials and dual-use items such as electronics, computers, telecommunications, sensors and navigation",
          ],
        },
      ],
    },
    {
      heading: "What is controlled",
      blocks: [
        {
          type: "list",
          items: [
            "**Goods:** the physical items themselves.",
            "**Software and technology:** drawings, designs, manuals and technical assistance. These are controlled even when shared by email or in a meeting.",
            "**Catch-all:** an item that is not on the list can still need a licence if the exporter knows or suspects it may be used in a weapons or missile programme.",
          ],
        },
      ],
    },
    {
      heading: "Who grants the licence",
      blocks: [
        {
          type: "list",
          items: [
            "**DGFT:** most categories, acting on the advice of an inter-ministerial working group drawn from the Ministries of External Affairs and Defence, DRDO, the space and atomic energy departments, Customs and others.",
            "**Department of Defence Production:** Category 6.",
            "**Department of Atomic Energy:** Category 0 and nuclear-related items.",
          ],
        },
      ],
    },
    {
      heading: "The process",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Classify the item against the list.",
            {
              text: "Apply online on the DGFT portal. The application needs:",
              items: [
                "an end-user certificate in the prescribed format (Appendix 10J)",
                "the purchase order or contract",
                "a technical description",
                "the company's documents",
              ],
            },
            "The working group reviews the file and may raise queries through a deficiency letter.",
            "The licence is granted or refused. Simple cases can take a few weeks, and sensitive items take longer.",
            "After export, the exporter must report shipments and follow the licence conditions.",
          ],
        },
      ],
    },
    {
      heading: "The end-user certificate",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The end-user certificate is the foreign buyer's formal promise covering three things:",
          ],
        },
        {
          type: "list",
          items: [
            "who will use the item, and for what purpose",
            "that the item will not be re-exported without India's consent",
            "that it will not be used for weapons of mass destruction",
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "The prescribed wording should not be changed. The quantity, value, addresses and signatory must match every other document in the file.",
          ],
        },
      ],
    },
    {
      heading: "Why applications get stuck",
      blocks: [
        {
          type: "list",
          items: [
            "documents that do not match each other",
            "edited end-user certificate wording",
            "an end user or destination of concern",
            "technology transfer that was not declared",
            "vague descriptions of the end use",
          ],
        },
      ],
    },
    {
      heading: "Penalties",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: ["Exporting without a licence can lead to:"],
        },
        {
          type: "list",
          items: [
            "suspension of the Importer-Exporter Code",
            "heavy penalties and seizure of goods",
            "prosecution under the 2005 Act, with imprisonment in serious cases",
          ],
        },
      ],
    },
    {
      heading: "Good practice",
      blocks: [
        {
          type: "list",
          items: [
            "Classify products early, before contracts are signed.",
            "Build an Internal Compliance Programme. DGFT encourages one.",
            "Check whether a Global Authorisation for Intra-Company Transfers suits group exports.",
            "Keep records of every shipment and every transfer of technical information.",
          ],
        },
      ],
    },
    {
      heading: "How we help",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: ["We advise exporters on:"],
        },
        {
          type: "list",
          items: [
            "classification",
            "licence applications",
            "end-user documentation",
            "replies to deficiency letters",
            "ongoing export control compliance",
          ],
        },
      ],
    },
  ],
};
