import type { GuidePage } from "@/lib/guides/types";

export const efilingGuide: GuidePage = {
  slug: "e-filing-in-the-delhi-high-court",
  seoTitle: "E-filing in the Delhi High Court",
  description:
    "E-filing in the Delhi High Court: how a new matter is lodged electronically, how the registry notifies defects, and how the papers are submitted again. Information only.",
  keywords: [
    "E-filing in the Delhi High Court",
    "Delhi High Court e-filing",
    "diary number",
    "defects",
    "New Delhi",
  ],
  eyebrow: "Delhi High Court",
  title: "E-filing in the Delhi High Court",
  lede: "E-filing in the Delhi High Court is the ordinary way a new petition or application is lodged. The filer enters the case type and the parties, uploads the papers, and the registry scrutinises what was uploaded. This note describes that sequence. It does not say that any particular filing will be registered.",
  inLanguage: "en-IN",
  dateLabel: "23 October 2026",
  sections: [
    {
      heading: "What is lodged",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The e-filing facility is the High Court's own system for receiving new matters and later applications. An advocate may file, and a party may file in person, in the manner the current practice direction allows. A paper filing is the exception, and only where that direction permits it.",
            "The filing is one case type. A civil writ, a criminal writ, a bail application, and a public interest petition are not the same type. The type selected at the start is the type the registry will scrutinise. Choosing the wrong type is a defect, not a formality.",
          ],
        },
      ],
    },
    {
      heading: "The steps",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "The filer signs in to the High Court's e-filing facility.",
            "The case type is selected, and the parties are entered, with addresses sufficient for notice.",
            "The petition or application, the affidavit, and the annexures are uploaded, paginated and identified.",
            "Where an advocate is engaged, the vakalatnama is part of the filing.",
            "The registry scrutinises the papers.",
            "If there is a defect, it is notified through the facility. It is cured, and the papers are submitted again, within the time the registry indicates.",
            "When the filing is in order it is registered and given a case number. Until then it is traced by its diary number.",
          ],
        },
      ],
    },
    {
      heading: "Defects",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "A defect is an objection by the registry: a missing page, an annexure that is not identified, a party who cannot be served on the address given, a petition that does not match the case type. The objection is specific. The cure is to correct that objection and submit the papers again. Arguing with the objection inside the same defective filing does not remove it.",
            "The time for removing defects is the time the registry states. This note does not invent a number of days. A filing that is left defective is not a registered case.",
          ],
        },
      ],
    },
    {
      heading: "Diary number, then case number",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The diary number is the identity of the filing during scrutiny. The case number is the identity after registration. Listings, the cause list, and case status use the case number once it exists. Searching the cause list for a diary number, as if it were already a case number, will not find the matter.",
            "How those two numbers are read after registration is described in the note titled Delhi High Court case status and cause list explained.",
          ],
        },
      ],
    },
    {
      heading: "What e-filing does not do",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Lodging a petition does not list it, and listing it does not decide it. The court still has to take the matter up. Urgent listing, where the current practice allows a request for it, is a request about when the matter is called. It is not a separate jurisdiction.",
            "The contents of a writ petition, and the separate question of delay, are described in the notes titled Writ petition in Delhi High Court and Article 226 writ after limitation. E-filing is only the act of lodging the papers.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is E-filing in the Delhi High Court?",
      answer:
        "E-filing in the Delhi High Court is the ordinary electronic lodging of a new petition or application. The case type and the parties are entered, the papers are uploaded, and the registry scrutinises them.",
    },
    {
      question: "What is a diary number?",
      answer:
        "It is the number that identifies a filing while the registry is still scrutinising it, before a case number is given.",
    },
    {
      question: "What happens if the registry raises a defect?",
      answer:
        "The defect is notified through the e-filing facility. The filer corrects it and submits the papers again within the time the registry indicates. A defective filing is not, by itself, a registered case.",
    },
    {
      question: "Does filing the papers list the case for hearing?",
      answer:
        "No. Registration and listing are later steps. The cause list is a separate record, published for a sitting day.",
    },
    {
      question: "Can a party file without an advocate?",
      answer:
        "A party may file in person where the High Court's current practice allows it. Where an advocate is engaged, the vakalatnama is part of the filing. This note does not invite either course.",
    },
  ],
};
