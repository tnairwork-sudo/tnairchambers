"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EXPLORED_EVENT, readExplored } from "@/lib/explored";

export type GuideExploreItem = {
  slug: string;
  href: string;
  eyebrow: string;
  questions: number;
  title: string;
  description: string;
};

function Eyebrow({ item, onAccent }: { item: GuideExploreItem; onAccent?: boolean }) {
  return (
    <span className={`label ${onAccent ? "!text-ink" : ""}`}>
      {item.eyebrow}
      {item.questions > 0 ? (
        <>
          <span className={onAccent ? "mx-3 text-ink/50" : "mx-3 text-parchment-dim/40"}>
            /
          </span>
          {item.questions} questions
        </>
      ) : null}
    </span>
  );
}

function TurnButton({
  expanded,
  onClick,
  onAccent,
}: {
  expanded: boolean;
  onClick: () => void;
  onAccent?: boolean;
}) {
  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-label={expanded ? "Show the title side" : "Show the description"}
      onClick={onClick}
      className={`mt-auto inline-flex h-11 w-11 items-center justify-center border ${
        onAccent ? "border-ink/30 text-ink" : "border-border text-parchment"
      }`}
    >
      <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
        <path
          d={expanded ? "M2 6h8" : "M6 2v8M2 6h8"}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    </button>
  );
}

export default function GuideExploreGrid({ items }: { items: GuideExploreItem[] }) {
  const [flipped, setFlipped] = useState<string | null>(null);
  const [explored, setExplored] = useState<string[]>([]);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const sync = () => setExplored(readExplored());
    sync();
    window.addEventListener(EXPLORED_EVENT, sync);
    return () => window.removeEventListener(EXPLORED_EVENT, sync);
  }, []);

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item, index) => {
        const isFlipped = flipped === item.slug;
        const seen = explored.includes(item.slug);
        const accentCorner = index % 5 === 0;

        if (!motion) {
          return (
            <li key={item.slug} className="border border-border bg-ink p-6">
              <Eyebrow item={item} />
              <Link
                href={item.href}
                className="mt-3 block font-serif text-3xl font-light text-parchment text-balance"
              >
                {item.title}
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-parchment-dim md:text-base">
                {item.description}
              </p>
            </li>
          );
        }

        return (
          <li key={item.slug} className="h-[19rem] [perspective:1000px]">
            <div
              className={`relative h-[19rem] transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none ${
                isFlipped ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              <div
                className="absolute inset-0 flex flex-col border border-border bg-ink p-6 [backface-visibility:hidden]"
                inert={isFlipped ? true : undefined}
              >
                {accentCorner ? (
                  <span aria-hidden className="absolute right-0 top-0 h-8 w-8 bg-accent" />
                ) : null}
                {seen ? <span aria-hidden className="absolute bottom-0 left-0 h-1 w-full bg-accent" /> : null}
                <Eyebrow item={item} />
                <Link
                  href={item.href}
                  className="mt-3 block font-serif text-xl font-light leading-snug text-parchment text-balance md:text-2xl"
                >
                  {item.title}
                </Link>
                <TurnButton expanded={false} onClick={() => setFlipped(item.slug)} />
              </div>
              <div
                className="absolute inset-0 flex flex-col border border-accent bg-accent p-6 text-ink [backface-visibility:hidden] [transform:rotateY(180deg)]"
                inert={!isFlipped ? true : undefined}
              >
                <Eyebrow item={item} onAccent />
                <p className="mt-3 text-sm leading-relaxed md:text-base">{item.description}</p>
                <Link href={item.href} className="mt-4 font-serif text-2xl font-light text-balance">
                  {item.title}
                </Link>
                <TurnButton expanded onAccent onClick={() => setFlipped(null)} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
