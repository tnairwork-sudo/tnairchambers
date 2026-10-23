import type { GuidePage } from "@/lib/guides/types";

const pilAlternates = [
  {
    hrefLang: "en-IN" as const,
    slug: "pil-delhi-high-court",
    label: "English",
  },
  {
    hrefLang: "hi-IN" as const,
    slug: "pil-delhi-high-court-hindi",
    label: "हिन्दी",
  },
];

export const pilGuide: GuidePage = {
  slug: "pil-delhi-high-court",
  seoTitle: "What is a PIL, and how to file a PIL",
  description:
    "What is a PIL, and how to file a PIL, in the Delhi High Court under the Delhi High Court (Public Interest Litigation) Rules, 2010. Information only.",
  keywords: [
    "public interest litigation Delhi High Court",
    "PIL Delhi High Court",
    "PIL kya hai",
    "Article 226 public interest",
    "Delhi High Court PIL Rules 2010",
    "New Delhi",
  ],
  eyebrow: "Delhi High Court",
  title: "What is a PIL, and how to file a PIL",
  lede: "What is a PIL, and how to file a PIL, are the two questions this note answers for the Delhi High Court. A public interest litigation is not a separate article of the Constitution. It is a writ petition under Article 226, filed for a public injury rather than a private dispute, and screened under the Delhi High Court (Public Interest Litigation) Rules, 2010. The Hindi note answers the question often typed as PIL kya hai.",
  inLanguage: "en-IN",
  dateLabel: "23 October 2026",
  alternates: pilAlternates,
  sections: [
    {
      heading: "What a PIL is",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The ordinary rule is that a person comes to court for his or her own legal right. Public interest litigation is the practice by which the court will look at a petition brought for a class of persons who are themselves unable to approach the court, where the injury is public. The High Court of Delhi has written that practice into rules.",
            "The rules were framed in 2010. The High Court says so on its own website. They are made for the exercise of jurisdiction under Article 226, and they define a public interest litigation as a writ petition under Article 226 filed as a public interest litigation, or a letter that the court entertains as one under the rules.",
            "A private writ and a public interest petition are easy to confuse because both are filed under Article 226. The difference is the interest. A person who complains of an order made against himself or herself files an ordinary writ. A person who has no personal stake, and who says that a class of people has been injured, is in the territory of these rules.",
          ],
        },
      ],
    },
    {
      heading: "What is not entertained",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The rules are explicit about letter petitions. Unless the committee directs otherwise, letter petitions in the following categories are not entertained as public interest litigation.",
          ],
        },
        {
          type: "list",
          items: [
            "Disputes between a landlord and a tenant.",
            "Service matters, and matters of pension, other than family pension, and of gratuity.",
            "Personal disputes between individuals.",
            "Disputes about contractual or statutory liabilities.",
            "Matrimonial disputes.",
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "An anonymous letter is not entertained, nor is a letter from which the writer cannot be identified. A private dispute does not become a public interest litigation by being described as one.",
          ],
        },
      ],
    },
    {
      heading: "What the petition must say",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "A writ petition that is intended to be a public interest litigation has to carry a specific set of statements. The rules place them in the opening paragraphs. In substance, the petition states the following.",
          ],
        },
        {
          type: "list",
          items: [
            "An inscription in the title, immediately below the number of the writ petition, that the matter is a public interest litigation.",
            "That the petitioner has no personal interest, that the petition is not guided by self-gain or by gain to any other person or institution, and that there is no motive other than public interest.",
            "The source of the petitioner's knowledge of the facts, and the inquiry made to check them.",
            "The class of persons for whose benefit the petition is filed, and how those persons are unable to approach the court themselves.",
            "The persons or bodies likely to be affected by the orders sought, who are joined as respondents, and a statement that, to the petitioner's knowledge, no other person or body is likely to be affected.",
            "The petitioner's background, so far as it shows competence to espouse the cause. An organisation states the names of its office bearers and the nature of its work, and gives the undertaking the rules require.",
            "Any representation already made to the authority concerned, and any reply received.",
            "Any earlier public interest petition or letter petition, in a table, with the number, the status, and the outcome.",
            "A brief pleading of the cause, the grounds, and a precise prayer.",
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "If any of that information cannot be given, the petition says why. The petition is accompanied by an affidavit in the form the rules annex. The affidavit is the petitioner's confirmation that the petition conforms to the rules, that there is no personal gain, and that material which would bear on whether the court should entertain the petition has not been concealed.",
          ],
        },
      ],
    },
    {
      heading: "Letter petitions",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "A letter addressed to the High Court, or to the Chief Justice, or to a judge, can be a letter petition under the rules. It is processed by a public interest litigation cell, which is headed by an officer not below the rank of Deputy Registrar. The cell places letters before a committee of at least two sitting judges nominated by the Chief Justice.",
            "If the committee approves a letter to be entertained, it is placed before the public interest litigation bench, unless the Chief Justice directs otherwise. The cell prepares a gist in English, the points of public concern, any reply from a department, and the addresses of the departments or officials who may be necessary parties.",
            "A letter is not a shorter way around the requirements that apply to a formal petition. It is a different point of entry, and it is screened.",
          ],
        },
      ],
    },
    {
      heading: "After the petition is filed",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The petition is filed through the High Court's e-filing facility. The Chief Justice constitutes a bench which, subject to any direction to the contrary, hears public interest litigation. The Chief Justice may still mark a matter to another bench.",
            "The rules do not limit the court's inherent power to make orders required by the ends of justice, or to prevent abuse of the process. That power includes restraining a petitioner or an advocate who files a frivolous or motivated public interest litigation.",
            "Nothing in this note suggests that a petition will be entertained. The screening is the point of the rules. A petition that is in truth a private dispute is an ordinary writ, if it is a writ at all, and the note on Article 226 describes that procedure.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is a PIL in the Delhi High Court?",
      answer:
        "What is a PIL: it is a writ petition under Article 226 filed for a public injury, or a letter the court entertains as one, under the Delhi High Court (Public Interest Litigation) Rules, 2010. It is not a separate constitutional article, and it is not a private dispute under another name.",
    },
    {
      question: "Can a personal dispute be filed as a public interest litigation?",
      answer:
        "No. The rules provide that letter petitions in landlord and tenant disputes, service and ordinary pension and gratuity matters, personal disputes, contractual or statutory liabilities, and matrimonial disputes are not entertained as public interest litigation, unless the committee directs otherwise.",
    },
    {
      question: "Are anonymous complaints entertained?",
      answer:
        "No. The rules say that an anonymous letter, or a letter from which the writer's identity cannot be established, shall not be entertained.",
    },
    {
      question: "What must the petitioner disclose?",
      answer:
        "The absence of personal gain, the source of the facts, the class of persons affected and why they cannot approach the court, who else may be affected, the petitioner's background, any representation already made, and any earlier public interest petition. An affidavit in the form annexed to the rules accompanies the petition.",
    },
    {
      question: "How to file a PIL in the Delhi High Court?",
      answer:
        "On how to file a PIL, lodge a writ petition under Article 226 that carries the statements the 2010 Rules require, with the affidavit in the annexed form, through the High Court's e-filing facility. A private dispute is not filed as a public interest litigation.",
    },
  ],
};

export const pilGuideHindi: GuidePage = {
  slug: "pil-delhi-high-court-hindi",
  seoTitle: "PIL kya hai",
  description:
    "PIL kya hai: दिल्ली उच्च न्यायालय में जनहित याचिका क्या है, और 2010 के नियमों के अनुसार उसे कैसे दायर किया जाता है. केवल जानकारी, नई दिल्ली, भारत.",
  keywords: [
    "pil kya hai",
    "PIL क्या है",
    "जनहित याचिका",
    "दिल्ली उच्च न्यायालय",
    "public interest litigation",
    "New Delhi",
  ],
  eyebrow: "दिल्ली उच्च न्यायालय",
  title: "PIL kya hai",
  lede: "जनहित याचिका को संक्षेप में PIL कहा जाता है. खोज में यह प्रश्न अक्सर PIL kya hai लिखा जाता है. दिल्ली उच्च न्यायालय में यह संविधान के अनुच्छेद 226 के अधीन एक रिट याचिका है, जिसे निजी विवाद के लिए नहीं, बल्कि सार्वजनिक क्षति के लिए दायर किया जाता है. इसकी प्रक्रिया दिल्ली उच्च न्यायालय (जनहित याचिका) नियम, 2010 में है.",
  inLanguage: "hi-IN",
  dateLabel: "23 अक्तूबर 2026",
  alternates: pilAlternates,
  sections: [
    {
      heading: "जनहित याचिका क्या है",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "साधारण नियम यह है कि व्यक्ति अपने स्वयं के विधिक अधिकार के लिए न्यायालय आता है. जनहित याचिका वह अभ्यास है जिसमें न्यायालय ऐसी याचिका पर विचार कर सकता है जो उन लोगों के एक वर्ग के लिए लाई गई हो जो स्वयं न्यायालय नहीं आ सकते, और क्षति सार्वजनिक हो. दिल्ली उच्च न्यायालय ने इस अभ्यास को नियमों में लिखा है.",
            "ये नियम 2010 में बने. उच्च न्यायालय अपनी वेबसाइट पर यह कहता है. नियमों में जनहित याचिका की परिभाषा यह है: अनुच्छेद 226 के अधीन जनहित याचिका के रूप में दायर रिट याचिका, या ऐसा पत्र जिसे न्यायालय इन नियमों के अनुसार जनहित याचिका के रूप में ग्रहण करे.",
            "निजी रिट और जनहित याचिका दोनों अनुच्छेद 226 के अधीन होती हैं, इसलिए दोनों उलझ जाती हैं. अंतर हित का है. जिस व्यक्ति के विरुद्ध आदेश हुआ हो, वह साधारण रिट दायर करता है. जिस व्यक्ति का अपना हित न हो, और जो कहे कि लोगों के एक वर्ग को क्षति हुई है, वह इन नियमों के क्षेत्र में है.",
          ],
        },
      ],
    },
    {
      heading: "जिसे जनहित याचिका नहीं माना जाता",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "पत्र याचिकाओं के बारे में नियम स्पष्ट हैं. जब तक समिति अन्यथा निर्देश न दे, निम्नलिखित श्रेणियों की पत्र याचिकाएँ जनहित याचिका के रूप में ग्रहण नहीं की जातीं.",
          ],
        },
        {
          type: "list",
          items: [
            "मकान मालिक और किरायेदार के बीच विवाद.",
            "सेवा मामले, तथा पेंशन के मामले, पारिवारिक पेंशन को छोड़कर, और उपदान के मामले.",
            "व्यक्तियों के बीच निजी विवाद.",
            "संविदात्मक या कानूनी देयताओं से जुड़े विवाद.",
            "वैवाहिक विवाद.",
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "अनाम पत्र ग्रहण नहीं किया जाता, और न वह पत्र जिससे लिखने वाले की पहचान न हो. निजी विवाद, जनहित कह देने मात्र से जनहित याचिका नहीं बन जाता.",
          ],
        },
      ],
    },
    {
      heading: "याचिका में क्या लिखना होता है",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "जो रिट याचिका जनहित याचिका के रूप में लानी हो, उसमें कुछ निश्चित कथन होने चाहिए. नियम उन्हें प्रारंभिक अनुच्छेदों में रखते हैं. संक्षेप में याचिका में ये बातें होती हैं.",
          ],
        },
        {
          type: "list",
          items: [
            "रिट याचिका की संख्या के ठीक नीचे, शीर्षक में यह अंकित हो कि मामला जनहित याचिका है.",
            "याचिकाकर्ता का कोई निजी हित नहीं है, याचिका स्वलाभ या किसी अन्य व्यक्ति या संस्था के लाभ के लिए नहीं है, और जनहित के अलावा कोई अन्य उद्देश्य नहीं है.",
            "तथ्यों की जानकारी का स्रोत, और उनकी जाँच के लिए की गई पूछताछ.",
            "जिन लोगों के लाभ के लिए याचिका है वह वर्ग, और वे स्वयं न्यायालय क्यों नहीं आ सकते.",
            "जिन व्यक्तियों या निकायों पर मांगे गए आदेशों का प्रभाव पड़ सकता है, उन्हें पक्षकार बनाया जाए, और याचिकाकर्ता की जानकारी में ऐसा कोई अन्य व्यक्ति या निकाय न हो.",
            "याचिकाकर्ता की पृष्ठभूमि, जहाँ तक वह इस कारण को उठाने की क्षमता दिखाए. संस्था होने पर पदाधिकारियों के नाम और कार्य की प्रकृति, तथा नियमों के अनुसार अपेक्षित वचन.",
            "संबंधित प्राधिकारी को दिया गया कोई अभ्यावेदन, और मिला उत्तर.",
            "पहले दायर कोई जनहित याचिका या पत्र याचिका, तालिका में, संख्या, स्थिति और परिणाम के साथ.",
            "कारण का संक्षिप्त कथन, आधार, और स्पष्ट प्रार्थना.",
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "यदि इनमें से कोई बात नहीं बताई जा सकती, तो याचिका में कारण लिखा जाता है. याचिका के साथ नियमों में संलग्न प्रारूप का शपथपत्र होता है. शपथपत्र में याचिकाकर्ता यह पुष्ट करता है कि याचिका नियमों के अनुरूप है, निजी लाभ नहीं है, और वह सामग्री नहीं छिपाई गई है जिससे न्यायालय यह देखे कि याचिका सुनी जाए या नहीं.",
          ],
        },
      ],
    },
    {
      heading: "पत्र याचिका",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "उच्च न्यायालय, मुख्य न्यायाधीश, या किसी न्यायाधीश को लिखा पत्र इन नियमों के अधीन पत्र याचिका हो सकता है. उसे जनहित याचिका प्रकोष्ठ देखता है, जिसके प्रमुख उप-पंजीयक से निम्न पद के अधिकारी नहीं होते. प्रकोष्ठ पत्रों को समिति के समक्ष रखता है. समिति में मुख्य न्यायाधीश द्वारा नामित कम से कम दो कार्यरत न्यायाधीश होते हैं.",
            "यदि समिति किसी पत्र को ग्रहण करने की स्वीकृति दे, तो उसे जनहित याचिका पीठ के समक्ष रखा जाता है, जब तक मुख्य न्यायाधीश अन्यथा निर्देश न दें. प्रकोष्ठ अंग्रेजी में सार, जनचिंता के बिंदु, विभाग से आया उत्तर, और उन विभागों या अधिकारियों के पते तैयार करता है जो आवश्यक पक्ष हो सकते हैं.",
            "पत्र, औपचारिक याचिका की अपेक्षाओं से बचने का छोटा मार्ग नहीं है. यह प्रवेश का दूसरा द्वार है, और इसकी जाँच होती है.",
          ],
        },
      ],
    },
    {
      heading: "दाखिल होने के बाद",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "याचिका उच्च न्यायालय की ई-फाइलिंग सुविधा से दायर होती है. मुख्य न्यायाधीश एक पीठ गठित करते हैं जो, विपरीत निर्देश न हो तो, जनहित याचिका सुनती है. मुख्य न्यायाधीश किसी मामले को दूसरी पीठ को भी चिह्नित कर सकते हैं.",
            "नियम न्यायालय की अंतर्निहित शक्ति को सीमित नहीं करते. न्यायालय न्याय के लिए आवश्यक आदेश दे सकता है, और प्रक्रिया के दुरुपयोग को रोक सकता है. इस शक्ति में तुच्छ या प्रेरित जनहित याचिका दायर करने वाले याचिकाकर्ता या अधिवक्ता को रोकना सम्मिलित है.",
            "इस पृष्ठ से यह अर्थ नहीं निकलता कि याचिका ग्रहण कर ही ली जाएगी. नियमों का उद्देश्य यही जाँच है. जो याचिका वास्तव में निजी विवाद हो, वह साधारण रिट है, यदि वह रिट हो. अनुच्छेद 226 की प्रक्रिया अलग नोट में है.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "PIL kya hai?",
      answer:
        "दिल्ली उच्च न्यायालय में जनहित याचिका, अनुच्छेद 226 के अधीन सार्वजनिक क्षति के लिए दायर रिट याचिका है, या ऐसा पत्र जिसे न्यायालय दिल्ली उच्च न्यायालय (जनहित याचिका) नियम, 2010 के अनुसार ग्रहण करे. यह अलग संवैधानिक अनुच्छेद नहीं है, और न ही निजी विवाद का दूसरा नाम है.",
    },
    {
      question: "क्या निजी विवाद को जनहित याचिका बनाकर दायर किया जा सकता है?",
      answer:
        "नहीं. नियमों के अनुसार मकान मालिक और किरायेदार, सेवा तथा साधारण पेंशन और उपदान, निजी विवाद, संविदात्मक या कानूनी देयताएँ, और वैवाहिक विवादों की पत्र याचिकाएँ जनहित याचिका के रूप में ग्रहण नहीं की जातीं, जब तक समिति अन्यथा निर्देश न दे.",
    },
    {
      question: "क्या अनाम शिकायत सुनी जाती है?",
      answer:
        "नहीं. नियम कहते हैं कि अनाम पत्र, या वह पत्र जिससे लिखने वाले की पहचान न हो, ग्रहण नहीं किया जाएगा.",
    },
    {
      question: "याचिकाकर्ता को क्या बताना होता है?",
      answer:
        "निजी लाभ का अभाव, तथ्यों का स्रोत, प्रभावित लोगों का वर्ग और वे न्यायालय क्यों नहीं आ सकते, और किस पर आदेश का प्रभाव पड़ सकता है, याचिकाकर्ता की पृष्ठभूमि, किया गया अभ्यावेदन, और पहले की जनहित याचिका. नियमों से संलग्न प्रारूप का शपथपत्र साथ होता है.",
    },
    {
      question: "PIL kya hai, दिल्ली उच्च न्यायालय में?",
      answer:
        "PIL kya hai: यह अनुच्छेद 226 के अधीन सार्वजनिक क्षति के लिए दायर रिट याचिका है, या ऐसा पत्र जिसे न्यायालय 2010 के नियमों के अनुसार ग्रहण करे. यह अलग संवैधानिक अनुच्छेद नहीं है.",
    },
  ],
};
