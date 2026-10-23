import type { GuidePage } from "@/lib/guides/types";

export const processGuide: GuidePage = {
  slug: "how-a-delhi-high-court-case-works",
  seoTitle: "How a Delhi High Court case works",
  description:
    "How a Delhi High Court case works, from lodging and scrutiny to listing, notice, hearing, and the order. Information only, from New Delhi, India.",
  keywords: [
    "How a Delhi High Court case works",
    "Delhi High Court procedure",
    "cause list",
    "diary number",
    "New Delhi",
  ],
  eyebrow: "Delhi High Court",
  title: "How a Delhi High Court case works",
  lede: "How a Delhi High Court case works is a sequence, not a single hearing. Papers are lodged, the registry scrutinises them, the matter is registered and then listed, the other side is notified, and the court hears it and passes an order. This note describes that sequence in general. A writ, a bail application, and a public interest petition each have a note of their own.",
  inLanguage: "en-IN",
  dateLabel: "23 October 2026",
  sections: [
    {
      heading: "The court, and the kinds of work",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The High Court of Delhi sits at New Delhi. It hears writ petitions under Article 226, criminal work including bail, appeals, and the original civil suits the law assigns to it. The Chief Justice allocates classes of work to benches by roster. A matter is listed before the bench to which that class belongs.",
            "The sequence below is the ordinary path of a contested matter. An uncontested request, or a matter disposed of at the first call, is shorter. The path is not a promise that every case will pass every step.",
          ],
        },
      ],
    },
    {
      heading: "Lodging and scrutiny",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "A new matter is lodged, ordinarily through the e-filing facility described in the note titled E-filing in the Delhi High Court. It receives a diary number. The registry checks the papers. Defects are notified and cured. When the filing is in order it is registered and receives a case number.",
            "Registration means the matter is a case on the file of the court. It does not mean the case has been argued, and it does not mean any interim order has been made.",
          ],
        },
      ],
    },
    {
      heading: "Listing",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "A registered matter is listed according to the roster. The cause list for a sitting names the court, the item number, and the case. How that list is read is the subject of the note titled Delhi High Court case status and cause list explained.",
            "Where an early listing is sought, the request follows the current practice direction. It is a request about when the matter is called. The court decides whether to take it up.",
          ],
        },
      ],
    },
    {
      heading: "Notice and the written response",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "If the court issues notice, the other parties are served in the manner the order and the rules require. A respondent who is served files a reply, often called a counter affidavit in a writ. The petitioner may file a rejoinder. Each of those papers is on affidavit where the practice requires it.",
            "The court may also pass an interim order before the final hearing. An interim order holds the position for the time being. It is not the final decision. In a writ, Article 226(3) sets a consequence where an interim order is made without copies and without a hearing, and the affected party then applies to vacate it. That consequence is described in the note titled Writ petition in Delhi High Court.",
          ],
        },
      ],
    },
    {
      heading: "The hearing and the order",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "On the day of hearing the matter is called by its item number, if it is reached. Counsel, or a party in person, addresses the court on the record. The court may adjourn, may decide a part of the controversy, or may reserve and pronounce the order later.",
            "The order is the court's decision for that hearing. Once it is signed and uploaded it is the text that governs, not a recollection of what was said. Case status shows that an order exists. The order itself is read separately.",
            "A further proceeding, such as an appeal or a review, exists only where the law provides it, and only within the conditions that law sets. This note does not set those conditions out case by case.",
          ],
        },
      ],
    },
    {
      heading: "Where the other notes fit",
      blocks: [
        {
          type: "list",
          items: [
            "Writ petition in Delhi High Court describes a petition under Article 226.",
            "Article 226 writ after limitation describes delay and laches.",
            "Bail in the Delhi High Court describes regular and anticipatory bail.",
            "What is a PIL, and how to file a PIL, describes a public interest petition. The Hindi note is titled PIL kya hai.",
            "E-filing in the Delhi High Court describes lodging. Delhi High Court case status and cause list explained describes how a matter is found afterwards.",
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "Those notes are descriptions of procedure. None of them predicts the result of a case.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How a Delhi High Court case works, in one sequence?",
      answer:
        "How a Delhi High Court case works: the papers are lodged and scrutinised, the matter is registered, it is listed before the roster bench, notice goes if the court so directs, replies are filed, the court hears the matter if it is reached, and an order is passed.",
    },
    {
      question: "Does registration mean the case has been decided?",
      answer:
        "No. Registration means the filing has a case number. Hearing and the order come later, if the matter is listed and reached.",
    },
    {
      question: "Who decides which bench hears the case?",
      answer:
        "The Chief Justice allocates classes of work by roster. A matter is listed before the bench to which that class of work is assigned.",
    },
    {
      question: "Is an interim order the end of the case?",
      answer:
        "No. An interim order holds the position until the matter is finally decided, or until the court varies it. The final order is a separate step.",
    },
    {
      question: "Does every case go through every step?",
      answer:
        "No. A matter may be disposed of at the first call, or adjourned, or not reached. The sequence above is the ordinary path of a contested case, not a timetable.",
    },
  ],
};
