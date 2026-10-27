export type OffTheBriefQa = {
  q: string;
  a: string;
};

export type OffTheBriefSession = {
  day?: number;
  pagesFrom?: number;
  pagesTo?: number;
  label?: string;
  qa: OffTheBriefQa[];
};

export type OffTheBriefBook = {
  slug: string;
  title: string;
  author: string;
  intro?: string;
  published: boolean;
  sessions: OffTheBriefSession[];
};

export type OffTheBriefRelatedWork = {
  authors: string;
  title: string;
  year: number;
  citation: string;
};

export type OffTheBriefPaper = {
  subject: string;
  title: string;
  authors?: string;
  year?: number;
  citation?: string;
  slug: string;
  published: boolean;
  relatedWork?: OffTheBriefRelatedWork[];
  qa: OffTheBriefQa[];
};

export type OffTheBriefPaperGroup = {
  subject: string;
  id: string;
  papers: OffTheBriefPaper[];
};

export const offTheBriefBooks: OffTheBriefBook[] = [
  {
    slug: "behave",
    title: "Behave",
    author: "Robert M. Sapolsky",
    published: true,
    sessions: [],
  },
  {
    slug: "troublemaker",
    title: "Troublemaker",
    author: "Leah Remini",
    intro: "Read as a study of persuasion, belonging and propaganda.",
    published: false,
    sessions: [
      {
        day: 1,
        pagesFrom: 1,
        pagesTo: 15,
        qa: [
          {
            q: "What do the opening pages cover?",
            a: "Front matter, then an introduction. Remini calls herself an apostate and lists her own flaws before the story starts. From there she turns to a Brooklyn childhood, taken as far as her first visit to the New York centre in Times Square.",
          },
          {
            q: "Why does she confess her own flaws first?",
            a: "To leave an opponent nothing new to expose. Remini puts the admissions on the page herself, ahead of any attack. She treats that candour as counter-propaganda.",
          },
          {
            q: "How is the movement first presented to people?",
            a: "As self-improvement, not as religion. Remini, writing about Scientology, says the first offer was a path described as scientific and testable, a way toward a person's potential.",
          },
          {
            q: "What comes first, belief or belonging?",
            a: "Belonging. What Remini describes arriving first is respect, the experience of being listened to, and someone taking her side. On page 8 she writes: \"This person understands me. He or she is my ally. This group believes in me.\"",
          },
          {
            q: "How does the book describe recognition for donors?",
            a: "Remini describes donors applauded onstage, or given a framed certificate. In her account, that recognition turns the money into status, and the status into identity, and the cost rises step by step. She estimates about $2 million spent on services and about $3 million donated.",
          },
          {
            q: "What keeps people in?",
            a: "On Remini's account, a total claim on time, an insular world, and disconnection from anyone declared a Suppressive Person. She also describes control over what members may read.",
          },
          {
            q: "How does the book set two kinds of attention side by side?",
            a: "The pages place two treatments next to each other. In one, trust follows candour and restraint. In the other, applause is staged when money is given. Remini presents the first as the honest form and the second as the dark one.",
          },
        ],
      },
    ],
  },
  {
    slug: "the-art-of-the-deal",
    title: "The Art of the Deal",
    author: "Donald J. Trump with Tony Schwartz",
    intro: "Read in ten parts as a study of negotiation and deal-making.",
    published: true,
    sessions: [
      {
        label: "Part 1: Dealing: A Week in the Life (chapter 1)",
        qa: [
          {
            q: "Why does this account keep several exits open at once?",
            a: "In the Holiday Inns stake, the book names three ways out: take control, sell at a profit, or be bought out at a premium. It also has him courting Gulf & Western while a dozen other parties wanted the theatres. Those open options are why, in this telling, there was no need to hurry.",
          },
          {
            q: "How did patience lower the price of Mar-a-Lago?",
            a: "The book says the first bid, of $15 million, was refused. Each time another buyer fell away, the next bid was lower. The price it records at the end is $5 million, plus $3 million for the furnishings. The leverage it points to is the seller's fatigue.",
          },
          {
            q: "When does the book stand by a deal he refuses?",
            a: "It describes an oil venture put to him as a deal that could not lose, at $50 million. He declined, on instinct. The book says the venture later went bankrupt. In this account he stayed with what he knew, and he passed on a deal that felt wrong even when the paper looked perfect.",
          },
          {
            q: "Why does the messenger matter in this account?",
            a: "The book says Helmut Jahn was replaced as architect by Alex Cooper, a former city planner who was respected in the approvals office. It also says Gliedman was hired after opposing him in court. The request, in this account, went through people the decision-maker already trusted.",
          },
          {
            q: "Why does the book linger on the Wollman Rink pour?",
            a: "It describes the concrete pour running on the front pages for days. The book treats that single, checkable event as worth more than a run of announcements.",
          },
          {
            q: "What does brevity signal in these calls?",
            a: "The book times calls with the people he speaks to most. Greenberg is finished in under two minutes. Schrager covers six subjects in ten minutes. It presents those short, decisive exchanges as a mark of status.",
          },
        ],
      },
    ],
  },
];

export const offTheBriefPapers: OffTheBriefPaper[] = [
  {
    subject: "Social psychology, conversation and social perception",
    title:
      "The Liking Gap in Conversations: Do People Like Us More Than We Think?",
    authors:
      "Erica J. Boothby, Gus Cooney, Gillian M. Sandstrom, Margaret S. Clark",
    year: 2018,
    citation:
      "Psychological Science, 29(11), 1742 to 1756; doi:10.1177/0956797618783714",
    slug: "liking-gap",
    published: true,
    qa: [
      {
        q: "What question did the researchers ask?",
        a: "After a conversation with someone new, do people judge accurately how much the other person liked them?",
      },
      {
        q: "What did they find?",
        a: "They did not. Across five studies, people consistently underestimated how much their conversation partners liked them and enjoyed their company. The authors call this illusion the liking gap.",
      },
      {
        q: "Where was the effect observed?",
        a: "Among strangers meeting in a laboratory, among first-year university students getting to know the people they shared halls with, and among members of the public at a personal development workshop. It held for short and long conversations alike.",
      },
      {
        q: "Does the gap fade once people know each other?",
        a: "Not quickly. Among the students sharing halls, it lasted for several months as the new relationships developed.",
      },
      {
        q: "Why does it happen?",
        a: "The signals of liking are visible during the conversation. People miss them because they are absorbed in their own self-critical thoughts about how they came across, and they assume the other person judges them as harshly as they judge themselves.",
      },
      {
        q: "What is the practical takeaway?",
        a: "After a first meeting, you are probably liked more than you think. Paying attention to how the other person actually responds is a better guide than your own replay of what you said.",
      },
    ],
  },
  {
    subject: "Psychophysiology, music and arousal",
    title:
      "Cardiovascular, cerebrovascular, and respiratory changes induced by different types of music in musicians and non-musicians: the importance of silence",
    authors: "L. Bernardi, C. Porta, P. Sleight",
    year: 2006,
    citation:
      "Heart, 92(4), 445 to 452; published online September 2005; doi:10.1136/hrt.2005.064600",
    slug: "importance-of-silence",
    published: true,
    qa: [
      {
        q: "What did the study set out to measure?",
        a: "How different kinds of music change breathing, blood pressure, heart rate and blood flow to the brain, and whether tempo, rhythm, style, preference or musical training matter.",
      },
      {
        q: "How was it done?",
        a: "Twelve practising musicians and twelve matched non-musicians listened, in random order, to six styles: slow classical, fast classical, twelve-tone, techno, rap and raga. A two-minute pause was inserted at random.",
      },
      {
        q: "What drove the effects?",
        a: "Tempo, more than style. Faster tempi and simpler rhythms raised breathing, blood pressure and heart rate. Fast classical and techno produced similar results when they were similarly fast. Slow pieces had a smaller effect, and raga brought the largest fall in heart rate.",
      },
      {
        q: "What happened during the silence?",
        a: "The pause produced the strongest relaxation of all. Heart rate, blood pressure and breathing fell even below the resting baseline taken before any music was played.",
      },
      {
        q: "Did musical training make a difference?",
        a: "Yes. Musicians' breathing was more sensitive to tempo than that of non-musicians.",
      },
      {
        q: "What is the practical takeaway?",
        a: "Pace sets arousal. Faster music focuses attention, slower music calms, and a well-placed silence calms most of all.",
      },
    ],
  },
  {
    subject: "Behavioural science, memory and the evaluation of experience",
    title: "When More Pain Is Preferred to Less: Adding a Better End",
    authors:
      "Daniel Kahneman, Barbara L. Fredrickson, Charles A. Schreiber, Donald A. Redelmeier",
    year: 1993,
    citation:
      "Psychological Science, 4(6), 401 to 405; doi:10.1111/j.1467-9280.1993.tb00589.x",
    slug: "adding-a-better-end",
    published: true,
    relatedWork: [
      {
        authors: "Barbara L. Fredrickson and Daniel Kahneman",
        title:
          "Duration neglect in retrospective evaluations of affective episodes",
        year: 1993,
        citation:
          "Journal of Personality and Social Psychology, 65(1), 45 to 55; doi:10.1037/0022-3514.65.1.45",
      },
      {
        authors: "Donald A. Redelmeier and Daniel Kahneman",
        title:
          "Patients' memories of painful medical treatments: real-time and retrospective evaluations of two minimally invasive procedures",
        year: 1996,
        citation:
          "Pain, 66(1), 3 to 8; doi:10.1016/0304-3959(96)02994-6",
      },
    ],
    qa: [
      {
        q: "What question did the researchers ask?",
        a: "When people look back on an experience, do they remember it as the sum of every moment, or do some moments count far more than others?",
      },
      {
        q: "How was it tested?",
        a: "Volunteers held a hand in uncomfortably cold water twice. One trial lasted 60 seconds. The other lasted the same 60 seconds and then continued for another 30 seconds while the water was warmed slightly, still unpleasant but less so. Asked which trial they would rather repeat, most chose the longer one, even though it contained strictly more discomfort.",
      },
      {
        q: "What explains that choice?",
        a: "Memory does not keep a running total. Remembered experience is shaped largely by its most intense moment, the peak, and by how it ends. The researchers called this the peak-end rule. A companion study by Fredrickson and Kahneman, using short film clips, found the matching pattern of duration neglect: how long an experience lasted had surprisingly little effect on how it was later judged.",
      },
      {
        q: "Does it hold outside the laboratory?",
        a: "Redelmeier and Kahneman recorded patients' discomfort minute by minute during colonoscopy and kidney stone treatment. Patients' later ratings tracked the worst moment and the final few minutes far more closely than the length of the procedure. A later randomised trial found that ending a colonoscopy more gently improved how patients remembered it.",
      },
      {
        q: "Has the finding been questioned?",
        a: "It has been qualified rather than overturned. Later reviews find that peaks and endings do carry extra weight, but that the overall average of an experience matters too, and that duration is not always ignored. The effect is strongest for brief, single episodes with a clear shape and weaker for long or complex ones. Some researchers also note that what people remember and what they actually felt at the time are different measures, and the rule describes only the first.",
      },
      {
        q: "What is the practical takeaway?",
        a: "How something ends, and its single strongest moment, will largely decide how it is remembered. Attention spent on a good close is rarely wasted.",
      },
    ],
  },
];

function anchorSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function publishedOffTheBriefBooks() {
  return offTheBriefBooks.filter((book) => book.published);
}

export function publishedOffTheBriefPapers() {
  return offTheBriefPapers.filter((paper) => paper.published);
}

export function publishedOffTheBriefPaperGroups(): OffTheBriefPaperGroup[] {
  const groups: OffTheBriefPaperGroup[] = [];

  for (const paper of publishedOffTheBriefPapers()) {
    const current = groups[groups.length - 1];
    if (current && current.subject === paper.subject) {
      current.papers.push(paper);
    } else {
      groups.push({
        subject: paper.subject,
        id: `papers-${anchorSlug(paper.subject)}`,
        papers: [paper],
      });
    }
  }

  return groups;
}

export function offTheBriefSessionId(
  book: OffTheBriefBook,
  session: OffTheBriefSession
) {
  if (session.label) {
    return `${book.slug}-${anchorSlug(session.label)}`;
  }

  return `${book.slug}-day-${session.day}-${session.pagesFrom}-${session.pagesTo}`;
}

export function offTheBriefSessionLabel(session: OffTheBriefSession) {
  if (
    session.day == null ||
    session.pagesFrom == null ||
    session.pagesTo == null
  ) {
    return session.label ?? "Session";
  }

  const pages =
    session.pagesFrom === session.pagesTo
      ? `page ${session.pagesFrom}`
      : `pages ${session.pagesFrom}-${session.pagesTo}`;
  return `Day ${session.day}, ${pages}`;
}

export function offTheBriefSessionHeading(session: OffTheBriefSession) {
  return session.label ?? offTheBriefSessionLabel(session);
}

export function offTheBriefIndexLabel(session: OffTheBriefSession) {
  if (session.label) return session.label;
  if (session.pagesFrom == null || session.pagesTo == null) return "Session";
  if (session.pagesFrom === session.pagesTo) return `Page ${session.pagesFrom}`;
  return `Pages ${session.pagesFrom}-${session.pagesTo}`;
}

export function offTheBriefPaperLine(paper: OffTheBriefPaper) {
  if (paper.year == null) return paper.citation;
  if (!paper.citation) return String(paper.year);
  return `${paper.year} (${paper.citation})`;
}
