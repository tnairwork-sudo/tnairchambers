import fs from "node:fs";
import path from "node:path";

/**
 * Finished drawings, named by the article slug:
 *   public/guides/art/<slug>.webp         16:9 hero, 1600 by 900
 *   public/guides/art/<slug>-square.webp  1:1, 1200 by 1200
 * Until a file is present, metadata uses the neutral plate in this folder.
 * The page itself shows a plain block, not a substitute picture.
 */
export const guideArtHeroSize = { width: 1600, height: 900 } as const;
export const guideArtSquareSize = { width: 1200, height: 1200 } as const;

const plateHero = "/guides/art/_plate.png";
const plateSquare = "/guides/art/_plate-square.png";

export type GuideArtFile = {
  src: string;
  width: number;
  height: number;
  /** True only when Design has delivered the drawing for this slug. */
  ready: boolean;
};

function delivered(filename: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public/guides/art", filename));
}

export function guideArt(slug: string): { hero: GuideArtFile; square: GuideArtFile } {
  const heroName = `${slug}.webp`;
  const squareName = `${slug}-square.webp`;
  const heroReady = delivered(heroName);
  const squareReady = delivered(squareName);

  return {
    hero: heroReady
      ? { src: `/guides/art/${heroName}`, ...guideArtHeroSize, ready: true }
      : { src: plateHero, ...guideArtHeroSize, ready: false },
    square: squareReady
      ? { src: `/guides/art/${squareName}`, ...guideArtSquareSize, ready: true }
      : { src: plateSquare, ...guideArtSquareSize, ready: false },
  };
}
