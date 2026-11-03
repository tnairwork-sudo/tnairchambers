import { getGuides, guidePath } from "@/lib/guides";
import { getAllOpportunityAtlasArticles } from "@/lib/opportunity-atlas";
import { articleLinks, guideLinks } from "@/lib/reading-menu";

function sameLinks(
  actual: readonly { href: string; label: string }[],
  expected: { href: string; label: string }[]
) {
  return (
    actual.length === expected.length &&
    actual.every(
      (link, index) =>
        link.href === expected[index]?.href &&
        link.label === expected[index]?.label
    )
  );
}

export function assertReadingMenu() {
  const guides = getGuides().map((guide) => ({
    href: guidePath(guide.slug),
    label: guide.title,
  }));
  const articles = getAllOpportunityAtlasArticles().map((article) => ({
    href: `/opportunity-atlas/${article.slug}`,
    label: article.title,
  }));

  if (!sameLinks(guideLinks, guides)) {
    throw new Error(
      `Reading menu guides are out of date. Expected ${JSON.stringify(guides)}`
    );
  }

  if (!sameLinks(articleLinks, articles)) {
    throw new Error(
      `Reading menu articles are out of date. Expected ${JSON.stringify(articles)}`
    );
  }
}
