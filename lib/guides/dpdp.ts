import type { GuidePage } from "@/lib/guides/types";

export const dpdpGuide: GuidePage = {
  slug: "dpdp-act-compliance-for-foreign-companies",
  group: "entry",
  seoTitle: "DPDP Act compliance for foreign companies",
  description:
    "DPDP Act compliance for foreign companies: when the Digital Personal Data Protection Act, 2023 applies outside India, and what the November 2025 Rules actually commenced. Information only.",
  keywords: [
    "DPDP Act compliance for foreign companies",
    "Digital Personal Data Protection Act",
    "cross-border transfer",
    "data fiduciary",
    "New Delhi",
  ],
  eyebrow: "India Entry",
  title: "DPDP Act compliance for foreign companies",
  lede: "DPDP Act compliance for foreign companies does not depend on having an office in India. The Digital Personal Data Protection Act, 2023 applies to processing in India, and to processing outside India if it is in connection with offering goods or services to data principals in India. A company in Seoul, Singapore, Dubai, Frankfurt or New York is within the Act when that connection exists. This note describes the Act. It does not audit any company.",
  inLanguage: "en-IN",
  dateLabel: "23 October 2026",
  sections: [
    {
      heading: "When a foreign company is in scope",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Section 3 is the territorial rule. The Act applies to a person who processes digital personal data in India, whether or not that person is in India. It also applies to processing outside India, if the processing is in connection with any activity related to offering goods or services to data principals in India. The Act does not require that the foreign company be incorporated here, or that it have a subsidiary, a branch, or a liaison office.",
            "It does not apply to personal data processed by an individual for a personal or domestic purpose, or to personal data made or caused to be made publicly available by the data principal, or by a person under a legal obligation. A business that scrapes personal data and then says the data was public has to be within one of those sentences. The heading of a website is not the sentence.",
            "The person who determines the purpose and the means of processing is the data fiduciary. A vendor who processes on the fiduciary's instructions is a data processor. The fiduciary remains responsible for the processor. A foreign company that decides why the data are collected is the fiduciary, even if an Indian company hosts them. An Indian subsidiary that decides its own purposes is a fiduciary of its own.",
          ],
        },
      ],
    },
    {
      heading: "Consent, and the uses that are not consent",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Personal data are processed for a lawful purpose, either with consent or for a legitimate use the Act specifies. Consent, under section 6, is free, specific, informed, unconditional and unambiguous, and it is given by a clear affirmative action. A bundled acceptance of terms that the reader cannot refuse without losing an unrelated service is not this consent. Consent may be withdrawn, and the withdrawal has to be as easy as the giving.",
            "The notice that accompanies a request for consent tells the data principal the personal data and the purpose, the manner of exercising the rights under the Act, and the manner of making a complaint to the Board. The Rules notified in November 2025 specify the contents of that notice. A notice written only for another statute is not, for that reason, a notice under this Act.",
            "Section 7 lists legitimate uses, in which processing may proceed without the consent just described. They include specified uses by the State, a medical emergency, and certain uses for employment. Employment is not a general permission to process the personal data of customers. It is a use tied to employment. A foreign company with no employees in India does not acquire a legitimate use by employing people somewhere else.",
          ],
        },
      ],
    },
    {
      heading: "Rights, children, and a significant data fiduciary",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "A data principal may ask for a summary of the personal data being processed and of the processing, for the identities of the other fiduciaries with whom the data have been shared, for correction and erasure, and for a grievance to be heard. The principal may nominate another individual to exercise these rights if the principal dies or is incapacitated. The rights are exercised in the manner the Rules provide. They are not a discovery procedure in a lawsuit, and they are not optional once the relevant provision is in force.",
            "A child's personal data are processed only with the verifiable consent of the parent, and the Act restricts tracking, behavioural monitoring and targeted advertising directed at a child. The Rules set out how verifiable consent is obtained. A foreign platform that does not intend to have child users, but does not prevent it, has not answered the section.",
            "The Central Government may notify a data fiduciary, or a class of them, as a significant data fiduciary, by reference to the volume and sensitivity of the data and the risk to the rights of data principals. A significant data fiduciary appoints a data protection officer based in India, undertakes an independent data audit, and undertakes a data protection impact assessment. The appointment is in India. A global privacy officer sitting only in another country does not meet that requirement.",
          ],
        },
      ],
    },
    {
      heading: "Cross-border transfer",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Section 16 permits the transfer of personal data to a country or territory outside India, except where the Central Government has restricted the transfer by notification. The Act is a negative list. It does not require the foreign company to obtain an adequacy decision, and it does not require the data to remain in India. A restriction exists only if a notification has made it.",
            "This note does not record a list of restricted countries. No such list was confirmed for this page. A transfer is checked against the notifications in force on the day of the transfer. A group policy that sends Indian personal data to a parent in Korea, Singapore, the Gulf, Europe or the United States is lawful under section 16 unless a notification has closed that destination. Other Indian laws, including a direction to a significant data fiduciary, can still attach a condition. Section 16 is not a repeal of those conditions.",
          ],
        },
      ],
    },
    {
      heading: "Breach, penalty, and what is already in force",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "A personal data breach is intimated to the Data Protection Board of India and to each affected data principal, in the form and within the time the Rules specify. This note does not invent that time. A period copied from another country's regulation is not the period in these Rules.",
            "The consequence under the Act is a civil penalty, adjudicated by the Board, within the maxima the Schedule sets. The highest maximum is attached to a failure to observe reasonable security safeguards. The Act is not, on these breaches, a criminal statute. The Schedule is the source of the maximum. This note does not restate the figures.",
            "The Rules were notified in November 2025. The provisions that establish the Board were brought into force in November 2025. The Rules phase the remaining operational duties, so that notification of the Rules is not the same fact as every duty already applying to every fiduciary. Which duty applies on a given day is read from the commencement provision of the Rules. A foreign company that builds the notice, the consent, the processor terms and the breach path now is building for the date the Rules name. It is not entitled to treat a phased duty as if the phase had been cancelled.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "When does DPDP Act compliance for foreign companies begin to matter?",
      answer:
        "DPDP Act compliance for foreign companies matters when digital personal data are processed in India, or outside India in connection with offering goods or services to people in India. An Indian office is not required for the Act to apply.",
    },
    {
      question: "Is the foreign parent the data fiduciary if an Indian vendor hosts the data?",
      answer:
        "If the foreign company decides the purpose and the means, it is the fiduciary, and it remains responsible for the processor. The host does not become the fiduciary by storing the data.",
    },
    {
      question: "May personal data of people in India be sent to the parent company abroad?",
      answer:
        "Section 16 permits a transfer unless the Central Government has restricted the destination by notification. This note does not record such a list. The transfer is checked against the notification in force on that day.",
    },
    {
      question: "Does a global privacy officer satisfy the Act for a significant data fiduciary?",
      answer:
        "A significant data fiduciary must appoint a data protection officer based in India. An officer who is not based in India does not meet that requirement. The government decides who is a significant data fiduciary. The company does not elect it.",
    },
    {
      question: "Are all the duties already in force because the Rules were notified?",
      answer:
        "No. The Rules were notified in November 2025 and the Board's provisions were brought into force then. Other duties are phased. The commencement clause of the Rules is the timetable.",
    },
  ],
};
