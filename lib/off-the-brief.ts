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
  sessions: OffTheBriefSession[];
};

export const offTheBriefBooks: OffTheBriefBook[] = [
  {
    slug: "behave",
    title: "Behave",
    author: "Robert M. Sapolsky",
    sessions: [],
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
