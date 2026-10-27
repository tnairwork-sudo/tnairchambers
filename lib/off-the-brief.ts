export type OffTheBriefQa = {
  q: string;
  a: string;
};

export type OffTheBriefSession = {
  day: number;
  pagesFrom: number;
  pagesTo: number;
  qa: OffTheBriefQa[];
};

export type OffTheBriefBook = {
  slug: string;
  title: string;
  author: string;
  intro?: string;
  sessions: OffTheBriefSession[];
};

export const offTheBriefBooks: OffTheBriefBook[] = [
  {
    slug: "behave",
    title: "Behave",
    author: "Robert M. Sapolsky",
    sessions: [],
  },
  {
    slug: "troublemaker",
    title: "Troublemaker",
    author: "Leah Remini",
    intro:
      "Read as a study of persuasion, belonging and propaganda.",
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
            q: "How does public recognition work as a hook?",
            a: "Remini describes donors applauded onstage, or given a framed certificate. In her account, that recognition turns the money into status, and the status into identity, and the cost rises step by step. She estimates about $2 million spent on services and about $3 million donated.",
          },
          {
            q: "What keeps people in?",
            a: "On Remini's account, a total claim on time, an insular world, and disconnection from anyone declared a Suppressive Person. She also describes control over what members may read.",
          },
          {
            q: "What is the lesson on persuasion?",
            a: "People are won by how they are treated, long before they accept a doctrine. Trust built through candour and restraint is the honest version of that. Staged applause for money is the dark one.",
          },
        ],
      },
    ],
  },
];

export function offTheBriefSessionId(
  book: OffTheBriefBook,
  session: OffTheBriefSession
) {
  return `${book.slug}-day-${session.day}-${session.pagesFrom}-${session.pagesTo}`;
}

export function offTheBriefSessionLabel(session: OffTheBriefSession) {
  const pages =
    session.pagesFrom === session.pagesTo
      ? `page ${session.pagesFrom}`
      : `pages ${session.pagesFrom}-${session.pagesTo}`;
  return `Day ${session.day}, ${pages}`;
}
