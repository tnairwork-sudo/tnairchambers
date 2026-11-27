export type InstagramReel = {
  shortcode: string;
  url: string;
  title: string;
  postedAt: string;
  excerpt: string;
  poster?: string;
};

/**
 * Curated Phase 1 feed for @nairandco.
 * Newest first. Titles are working titles from the caption or poster.
 * Excerpts are the opening of the caption, without hashtags.
 * Phase 2 (Instagram API) is documented in docs/instagram-feed.md and is not wired.
 */
export const instagramReels: InstagramReel[] = [
  {
    shortcode: "DgMwtNpyLoA",
    url: "https://www.instagram.com/reel/DgMwtNpyLoA/",
    title: "The Sheepdog and the Jet",
    postedAt: "2026-11-26T14:47:00+05:30",
    excerpt:
      "You know how a sheepdog works? The shepherd doesn't chase every sheep.",
    poster: "/instagram/DgMwtNpyLoA.jpg",
  },
  {
    shortcode: "DgIbIgLSQnR",
    url: "https://www.instagram.com/reel/DgIbIgLSQnR/",
    title: "India's defence gaps: supply and demand",
    postedAt: "2026-11-24T22:20:00+05:30",
    excerpt: "Imagine ordering 180 cars, paying for them in the showroom.",
    poster: "/instagram/DgIbIgLSQnR.jpg",
  },
  {
    shortcode: "DgAJFiKpBaF",
    url: "https://www.instagram.com/reel/DgAJFiKpBaF/",
    title: "How a rocket steers",
    postedAt: "2026-11-21T17:09:00+05:30",
    excerpt:
      "Last week SpaceX caught its Starship ship with the tower's arms.",
    poster: "/instagram/DgAJFiKpBaF.jpg",
  },
  {
    shortcode: "Df7t2yhSccZ",
    url: "https://www.instagram.com/reel/Df7t2yhSccZ/",
    title: "HAL's order book and who supplies it",
    postedAt: "2026-11-19T23:54:00+05:30",
    excerpt: "HAL has seven to eight years of work already signed.",
    poster: "/instagram/Df7t2yhSccZ.jpg",
  },
  {
    shortcode: "DfxZTHfS3oj",
    url: "https://www.instagram.com/reel/DfxZTHfS3oj/",
    title: "The cost of a cheaper shot",
    postedAt: "2026-11-15T23:42:00+05:30",
    excerpt:
      "A Shahed-type drone is estimated at twenty to fifty thousand dollars.",
    poster: "/instagram/DfxZTHfS3oj.jpg",
  },
  {
    shortcode: "Dfoi0HES7Wq",
    url: "https://www.instagram.com/reel/Dfoi0HES7Wq/",
    title: "A History of the Impossible, Part 5 of 5",
    postedAt: "2026-11-12T13:13:00+05:30",
    excerpt: "The end.",
    poster: "/instagram/Dfoi0HES7Wq.jpg",
  },
];

export function formatReelDate(postedAt: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(postedAt));
}
