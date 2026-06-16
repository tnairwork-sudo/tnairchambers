export const siteUrl = "https://tnairchambers.in";

export const opportunityAtlasCategories = [
  "Market Entry",
  "Foreign Investment",
  "Regulatory Updates",
  "International Trade",
  "Emerging Markets",
  "Technology & Innovation",
  "Sustainability",
  "Global Expansion",
] as const;

export type OpportunityAtlasCategory =
  (typeof opportunityAtlasCategories)[number];

export type ArticleBodyBlock =
  | {
      type: "paragraphs";
      paragraphs: string[];
    }
  | {
      type: "quote";
      quote: string;
      citation?: string;
    }
  | {
      type: "section";
      title: string;
      paragraphs: string[];
    }
  | {
      type: "cards";
      title?: string;
      intro?: string;
      items: Array<{
        title: string;
        body: string;
      }>;
    }
  | {
      type: "timeline";
      title?: string;
      intro?: string;
      items: Array<{
        label: string;
        timeframe: string;
        body: string;
      }>;
    };

export interface OpportunityAtlasArticle {
  slug: string;
  title: string;
  author: string;
  authorBio: string;
  publishedAt: string;
  readingTime: string;
  featured: boolean;
  category: OpportunityAtlasCategory;
  excerpt: string;
  featuredImage: {
    src: string;
    alt: string;
  };
  seoTitle: string;
  metaDescription: string;
  openGraphImage: string;
  body: ArticleBodyBlock[];
  relatedSlugs: string[];
}

const articles: OpportunityAtlasArticle[] = [
  {
    slug: "duty-free-conditions-apply",
    title: "Duty-Free, Conditions Apply",
    author: "Tushar Nair",
    authorBio:
      "Tushar Nair is an Advocate practising before the Supreme Court of India and the Delhi High Court.",
    publishedAt: "2026-06-16",
    readingTime: "10 min read",
    featured: true,
    category: "International Trade",
    excerpt:
      "The India-Oman CEPA moved a border overnight. For Indian businesses, the opportunity is immediate, valuable, and entirely dependent on legal structuring done before the first shipment leaves port.",
    featuredImage: {
      src: "/opportunity-atlas/duty-free-conditions-apply.svg",
      alt: "Abstract TN Chambers illustration for the India-Oman CEPA article.",
    },
    seoTitle:
      "Duty-Free, Conditions Apply — India-Oman CEPA, Origin Rules & Market Entry",
    metaDescription:
      "An Opportunity Atlas analysis of the India-Oman CEPA: duty-free access, regulatory reliance, origin rules, Omanisation, and the legal structuring Indian businesses need to capture the benefit.",
    openGraphImage: "/opportunity-atlas/duty-free-conditions-apply.svg",
    relatedSlugs: [],
    body: [
      {
        type: "paragraphs",
        paragraphs: [
          "The India-Oman CEPA hands Indian business a rare prize. Whether a firm actually collects it will be decided by its lawyers, not its tariff schedule.",
          "On the morning of June 1, 2026, the first consignments left Indian ports for Oman under a new set of rules. Gems and jewellery worth about $120 million cleared in a single day, all of it duty-free. There was no fanfare to match the scale of what had shifted and there rarely is with trade agreements. The cameras come for the signing. The consequences arrive quietly, in the manifests.",
          "Make no mistake about what happened. India did not sign just another trade pact. It moved a border. And a moving border is, before it is anything else, a legal event.",
        ],
      },
      {
        type: "quote",
        quote:
          "India did not sign just another trade pact. It moved a border. And a moving border is, before it is anything else, a legal event.",
        citation: "Opportunity Atlas",
      },
      {
        type: "section",
        title: "Is that hyperbole, or is it actually big?",
        paragraphs: [
          "It is big and the proof is in two numbers. Set aside the figure everyone is quoting, that 98.08% of Oman’s tariff lines are now duty-free. On its own it means little because a tariff already near zero going to zero changes nothing.",
          "Look instead at where India started. The day before the deal took effect only 15.33% of India’s exports entered Oman without duty. The morning after, the number was 99.38%.",
          "That is the whole story. Roughly eighty-four points of India’s export basket crossed from taxed to free in a single night. Not phased over a decade the way these things usually go, but live on day one. For any company already selling into Oman’s $28 billion import market that is a permanent reset of the margin against every rival shipping from a country without such a deal. China, Turkey, most of Europe: they wake up more expensive, and they stay that way.",
          "So the size is real. The next question is what exactly a firm can do now that it could not do before.",
        ],
      },
      {
        type: "cards",
        title: "What is genuinely new here?",
        intro:
          "Strip out the boilerplate and three things in this agreement are new. Each one is, on inspection, a legal mechanism rather than a tariff cut.",
        items: [
          {
            title: "Medicine",
            body: "An Indian drug already cleared by the U.S. FDA, Europe’s EMA, Britain’s MHRA, or Australia’s TGA can now win Omani marketing approval in 90 days with no fresh inspection. The CEPA replaces delay with a regulatory-reliance commitment, and reliance is only as good as the dossier filed to invoke it.",
          },
          {
            title: "Traditional medicine",
            body: "For the first time in any trade agreement anywhere, a country has opened its market to traditional medicine across every mode of supply. A dedicated annexe covers licensing, digital qualifying exams, shared standards, and medical travel, giving Ayurveda and Yoga practices a binding path into a Gulf market.",
          },
          {
            title: "People and ownership",
            body: "India can now staff its Omani operations with its own managers and specialists, the cap on company transfers having risen from 20% to 50%, and it can hold those operations with 100% foreign direct investment through commercial presence in major service sectors. That is a people question and a corporate-structuring question from day one.",
          },
        ],
      },
      {
        type: "section",
        title: "What is the catch?",
        paragraphs: [
          "Two things, and they cut in opposite directions.",
          "India opened a narrower door than Oman did, by design. It cut duties on roughly 77.79% of its own tariff lines and for sensitive goods like dates, marble, and petrochemicals it used tariff-rate quotas rather than full elimination. Dairy, cereals, and edible oils stayed behind protective walls. That asymmetry is the deal’s quiet achievement, not its flaw: a balanced agreement, well negotiated.",
          "What Oman kept is the more important catch, because most coverage has it wrong. The CEPA does not suspend Omanisation. Oman’s own Ministry of Commerce and Investment Promotion stated plainly that the agreement does not affect its labour-localisation policies, and that negative lists and professions reserved for Omani nationals continue to apply in full. The raised transfer ceiling lets a firm move its own people; it does not exempt that firm from hiring Omanis. Any staffing model built on the assumption of a labour shield is built on sand. This is exactly the kind of misreading that turns a celebrated opportunity into a penalty, and exactly where counsel earns its keep.",
          "With the trade understood, the practical question is the only one that pays: where is the money?",
        ],
      },
      {
        type: "cards",
        title: "Where is the money?",
        intro:
          "The talk of every sector winning is just noise. The real opportunity sits in a few places.",
        items: [
          {
            title: "Electronics",
            body: "Oman imported about $1.7 billion in electronics last year, and India supplied only $146 million of it. The gap is the prize, and the tariff that kept Indian components out against Chinese supply has just been removed.",
          },
          {
            title: "Jewellery",
            body: "The 5% duty is gone, and exporters were shipping on day one. The deeper shift is in the route: goods that once detoured through Dubai can now sail straight to Muscat or Salalah, removing a layer of cost with the middleman.",
          },
          {
            title: "Services",
            body: "India already runs a surplus with Oman in services trade, yet of the $12.5 billion in services Oman buys from the world each year India holds barely 5%. The room is enormous, and the new ownership and mobility rules are what turn it into revenue.",
          },
          {
            title: "Pharmaceuticals",
            body: "This is the surest bet of all. The firm that files its dossier first takes the 90-day window before anyone else reacts.",
          },
        ],
      },
      {
        type: "section",
        title: "Can Oman be a launchpad?",
        paragraphs: [
          "It can and its real pitch to Indian capital is geography. Its deepwater ports, Duqm and Salalah, sit outside the Strait of Hormuz. When the Gulf seizes up, and it does, those supply lines keep moving and the insurance stays cheap. From there a firm can re-export across the Gulf states and into East Africa, and, the most seductive line of all, reach the United States through Oman’s own trade deal with Washington.",
          "Handle that last promise with cold eyes. The American door opens only if your Omani plant performs genuine substantial transformation, enough to satisfy that agreement’s own rules of origin. Ship lightly repackaged Indian goods through a warehouse in Sohar and you will not qualify; you will draw a penalty. Whether a given operation crosses that line is not a logistics question. It is an origin-law opinion, and it should be obtained before the plant is built, not after the first container is seized.",
          "That caution points at the larger one. If the advantage can be lost, where is it lost?",
        ],
      },
      {
        type: "cards",
        title: "Where is the advantage lost?",
        intro:
          "Not in the tariff schedule, which is the easy part. It is lost in the conditions attached to the schedule, and they are all legal.",
        items: [
          {
            title: "Rules of origin",
            body: "Duty-free status applies only to goods that are genuinely Indian, either wholly obtained here or transformed enough to clear the value-addition or change-in-classification thresholds. A preference claimed but not substantiated invites recovery and penalty.",
          },
          {
            title: "Digital certification",
            body: "The certificate of origin is now fully digital, filed through the government’s Trade Connect platform. The practical trap is clerical: the name on the trade profile must match the name on the digital signature exactly, or the consignment stalls.",
          },
          {
            title: "Preserved exposures",
            body: "Trade remedies, state-to-state dispute settlement, investment, intellectual property, government procurement, and digital-trade chapters all remain live advisory surfaces. The benefit is real, but conditional at every turn.",
          },
        ],
      },
      {
        type: "section",
        title: "So who actually captures this?",
        paragraphs: [
          "Not the firm that ships first. The firm that is advised first.",
          "Read back through the opportunity and notice that almost nothing in it is self-executing. The 90-day drug approval needs a dossier prepared to invoke regulatory reliance. The traditional-medicine annexe needs licensing and qualification handled under a brand-new framework. The wholly owned subsidiary needs incorporation under Omani company and free-zone law. The transfer ceiling needs immigration structuring that respects Omanisation rather than assuming it away. The US gateway needs an origin opinion. The duty-free claim itself needs an origin determination and a clean digital certificate. The cross-border contracts need a governing law, a seat, and an enforcement plan. Each is a legal act, and the sequence in which they are done decides whether the firm is early and compliant or merely early.",
          "This is the part the trade-press celebration leaves out. A tariff line is an invitation; a realised benefit is a structured transaction. The corridor will reward the businesses that treat legal structuring as the opening move and not the closing formality, and it will quietly tax the ones that do not. For Indian counsel, that is the actual opportunity in this agreement: not to react to disputes after they arise, but to design the entry so they do not.",
          "Knowing where it is won and lost, the only thing left is the order of moves.",
        ],
      },
      {
        type: "timeline",
        title: "What does a firm do, and in what order?",
        intro: "The sequence matters as much as the moves.",
        items: [
          {
            label: "Survey the ground",
            timeframe: "Weeks 1 to 4",
            body: "Confirm HS classifications, screen against the quota and exclusion lines, and commission the rules-of-origin assessment in parallel because it is the slowest step and the one most likely to disqualify a claim. This is diligence and it is legal work.",
          },
          {
            label: "Secure the lines",
            timeframe: "Weeks 5 to 8",
            body: "Onboard to Trade Connect, reconcile the profile and signature names, and use the Indian inspection certificates Oman must now accept. Drug makers file dossiers now and start the clock. Begin drafting the distribution, supply, or agency contracts with their arbitration clauses already in them.",
          },
          {
            label: "Take position",
            timeframe: "Weeks 9 to 12",
            body: "If the prize justifies presence and not just export, incorporate the wholly owned entity in Sohar, Duqm, or Salalah, structure the workforce around Omanisation rather than against it, and build the American-gateway structure only on a written origin opinion.",
          },
        ],
      },
      {
        type: "section",
        title: "Move, and move advised",
        paragraphs: [
          "Move, and the reason is not size. Trade between the two countries runs around $11 billion, modest by India’s measure. The reason is that the deal is clean: the benefit lands now instead of leaking out over ten years, the concessions are balanced, and three of its provisions have never existed in any agreement before.",
          "But move advised. The window in which being early is itself the advantage is open today and closes the moment competitors finish their own paperwork. Speed wins it. Speed without structure forfeits the very benefit the firm raced to reach, and forfeits it on a technicality it never saw.",
          "The ground has shifted. The question is no longer whether to move. It is how fast, and how well counselled.",
        ],
      },
    ],
  },
];

export function getAllOpportunityAtlasArticles() {
  return [...articles].sort(
    (first, second) =>
      new Date(second.publishedAt).getTime() -
      new Date(first.publishedAt).getTime()
  );
}

export function getFeaturedOpportunityAtlasArticle() {
  return getAllOpportunityAtlasArticles().find((article) => article.featured);
}

export function getOpportunityAtlasArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedOpportunityAtlasArticles(slug: string) {
  const current = getOpportunityAtlasArticleBySlug(slug);

  if (!current) {
    return [];
  }

  const allArticles = getAllOpportunityAtlasArticles().filter(
    (article) => article.slug !== slug
  );

  const explicitlyRelated = current.relatedSlugs
    .map((relatedSlug) => allArticles.find((article) => article.slug === relatedSlug))
    .filter((article): article is OpportunityAtlasArticle => Boolean(article));

  if (explicitlyRelated.length > 0) {
    return explicitlyRelated;
  }

  return allArticles
    .filter((article) => article.category === current.category)
    .slice(0, 3);
}

export function formatOpportunityAtlasDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
