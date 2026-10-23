import type { GuidePage } from "@/lib/guides/types";

export const caseStatusGuide: GuidePage = {
  slug: "delhi-high-court-case-status-and-cause-list",
  seoTitle: "Delhi High Court case status and cause list explained",
  description:
    "Delhi High Court case status and cause list explained: how a diary number differs from a case number, and how to read the daily list of matters before a court. Information only.",
  keywords: [
    "Delhi High Court case status and cause list explained",
    "cause list Delhi High Court",
    "case status Delhi High Court",
    "diary number",
    "New Delhi",
  ],
  eyebrow: "Delhi High Court",
  title: "Delhi High Court case status and cause list explained",
  lede: "Delhi High Court case status and cause list explained, in short: case status is the record of one matter, and the cause list is the list of matters a court will take up on a given day. They answer different questions. This note describes how each is read. It does not say what the outcome of any matter will be.",
  inLanguage: "en-IN",
  dateLabel: "23 October 2026",
  sections: [
    {
      heading: "Two different records",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Case status is the history of a single case: who the parties are, which bench it is before, what the next date is if one has been given, and which orders have been uploaded. The cause list is a day's work for a court. A case can have a status and still not be on tomorrow's cause list.",
            "Both are published by the High Court of Delhi on its website. The labels on the page follow the court's current design. The functions do not: one search finds a case, and the other finds a day's list.",
          ],
        },
      ],
    },
    {
      heading: "Diary number and case number",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "A new filing is first identified by a diary number. That number tracks the papers while the registry scrutinises them. After registration the matter receives a case number: a case type, a number, and a year. A writ petition (civil) is not numbered as a bail application. The type is part of the identity of the case.",
            "A search by case number needs the type, the number, and the year. A search by party name can return more than one matter, because names repeat. The diary number remains the way to find a filing that has not yet been registered. Mixing the two numbers is the usual reason a search shows nothing.",
          ],
        },
      ],
    },
    {
      heading: "What case status shows",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The status entry ordinarily shows the parties, the advocate on record if one is named, the next date if the court has given one, and the orders that have been placed on the record. A next date means the matter has been adjourned to that day. It does not mean the matter will be reached, and it does not mean it will be decided.",
            "An order is a separate document from the status line. The status may show that an order was passed on a date before the text of the order is available to read. If the text is not yet uploaded, the status line is not a substitute for it.",
          ],
        },
      ],
    },
    {
      heading: "How a cause list is read",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The cause list is arranged by date and by court. Each court has a number. Within that court the matters are item numbers. The list names the case, the parties, and, where an advocate is on record, the advocate. The bench taking that court is named on the list.",
            "The High Court publishes the list for a sitting in advance, ordinarily the day before. There is a main list, and there may be a supplementary list of matters added afterwards. A matter can move from one list to the other. Checking only the first list, early in the day, can miss a supplementary item.",
            "An item that is not reached is still pending. It has not been decided. It has simply not been called. The list is not itself an order.",
          ],
        },
      ],
    },
    {
      heading: "The display board",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "On a sitting day the High Court displays the item currently being called in each court. That display is how a person in the building, or watching the court's own display, sees which item the court has reached. It moves during the day. It is not the cause list, and it is not the case status.",
          ],
        },
      ],
    },
    {
      heading: "What these tools do not decide",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Case status and the cause list describe where a matter stands in the list and on the record. They do not interpret an order, and they do not say whether a petition is maintainable. The sequence from filing to hearing is described in the note titled How a Delhi High Court case works.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Delhi High Court case status and cause list explained: what are the two records?",
      answer:
        "Delhi High Court case status and cause list explained: case status is the record of one matter, including its number, parties, next date, and uploaded orders. The cause list is the list of matters a numbered court will take up on a given day.",
    },
    {
      question: "What is the difference between a diary number and a case number?",
      answer:
        "A diary number identifies a filing during scrutiny, before registration. A case number, with a case type and a year, identifies the matter after it has been registered.",
    },
    {
      question: "Does a next date mean the case will be decided that day?",
      answer:
        "No. A next date means the matter has been adjourned to that day. It may be listed, it may not be reached, and the cause list for that day is published separately.",
    },
    {
      question: "What is a supplementary cause list?",
      answer:
        "It is a later list of matters added for the same day, after the main cause list. A matter can appear there even if it was not on the first list.",
    },
    {
      question: "Is the cause list an order?",
      answer:
        "No. The cause list says what is proposed to be called. An order is the court's decision, and it is read from the order itself once it is uploaded.",
    },
  ],
};
