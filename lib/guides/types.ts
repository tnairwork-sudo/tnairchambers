export type GuideListItem = string | { text: string; items: string[] };

export type GuideBlock =
  | { type: "paragraphs"; paragraphs: string[]; italic?: boolean }
  | { type: "list"; ordered?: boolean; items: GuideListItem[] }
  | {
      type: "table";
      caption: string;
      columns: string[];
      rows: string[][];
    };

export type GuideSection = {
  heading: string;
  blocks: GuideBlock[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideAlternate = {
  hrefLang: "en-IN" | "hi-IN";
  slug: string;
  label: string;
};

export type GuideIllustration = {
  /** What the drawing shows, including the article's search phrase. */
  alt: string;
  /** Italic line under the picture, explaining the pun. */
  caption: string;
};

export type GuidePage = {
  slug: string;
  seoTitle: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  title: string;
  /**
   * Completes "This guide answers N questions on …".
   * The number is counted from the question headings and is not stored here.
   */
  questionSpan: string;
  lede: string;
  inLanguage: "en-IN" | "hi-IN";
  dateLabel: string;
  sections: GuideSection[];
  /** Unused on articles. Questions live in the sections, and the schema is built from them. */
  faqs?: GuideFaq[];
  alternates?: GuideAlternate[];
  /** Court notes, the India Entry notes, or an export-control note. */
  group?: "court" | "entry" | "export";
  /** Closing line printed after the sections, in italic. */
  closing?: string;
  /** Set when the guides list is read. Not stored on each note. */
  illustration?: GuideIllustration;
};

export type GuidesIndexContent = {
  seoTitle: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  title: string;
  lede: string;
  inLanguage: "en-IN";
  dateLabel: string;
  faqs: GuideFaq[];
};
