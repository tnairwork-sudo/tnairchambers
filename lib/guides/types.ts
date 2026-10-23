export type GuideBlock =
  | { type: "paragraphs"; paragraphs: string[] }
  | { type: "list"; ordered?: boolean; items: string[] }
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
  lede: string;
  inLanguage: "en-IN" | "hi-IN";
  dateLabel: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
  alternates?: GuideAlternate[];
  /** Court notes, or the India Entry notes for a foreign company. */
  group?: "court" | "entry";
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
