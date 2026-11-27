"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import {
  formatReelDate,
  type InstagramReel,
} from "@/lib/instagram-reels";

type ReelsGridProps = {
  reels: InstagramReel[];
  layout?: "grid" | "strip";
};

function CornerBrackets() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-s3 h-[calc(100%-48px)] w-[calc(100%-48px)] text-gold/70"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M1 14 V1 H14" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <path d="M86 1 H99 V14" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <path d="M1 86 V99 H14" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <path d="M86 99 H99 V86" fill="none" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <span
      aria-hidden
      className="absolute left-s3 top-s3 grid h-11 w-11 place-items-center rounded-full border border-ink/80 text-ink"
    >
      <svg viewBox="0 0 12 12" className="ml-0.5 h-3 w-3">
        <path d="M3 1.5 L10 6 L3 10.5 Z" fill="currentColor" />
      </svg>
    </span>
  );
}

export default function ReelsGrid({ reels, layout = "grid" }: ReelsGridProps) {
  const [active, setActive] = useState<InstagramReel | null>(null);
  const [frameFailed, setFrameFailed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (active && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new CustomEvent("nair:scroll-lock", { detail: true }));
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setFrameFailed(true), 7000);
      const closeButton = dialog.querySelector<HTMLElement>("[data-reel-close]");
      closeButton?.focus();
    }

    if (!active && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("nair:scroll-lock", { detail: false }));
      openerRef.current?.focus();
    }

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [active]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("nair:scroll-lock", { detail: false }));
    };
  }, []);

  function close() {
    setActive(null);
  }

  function onFrameLoad() {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setFrameFailed(false);
  }

  if (reels.length === 0) {
    return <p className="body-copy text-ink/70">Reels will appear here.</p>;
  }

  const listClass =
    layout === "strip"
      ? "flex gap-s3 overflow-x-auto snap-x snap-mandatory pb-s2 lg:grid lg:grid-cols-4 lg:overflow-visible"
      : "grid grid-cols-2 gap-s3 md:grid-cols-3 md:gap-s4 xl:grid-cols-4";

  return (
    <>
      <ul className={listClass}>
        {reels.map((reel) => (
          <li
            key={reel.shortcode}
            className={
              layout === "strip"
                ? "w-[72vw] shrink-0 snap-start sm:w-[42vw] lg:w-auto"
                : ""
            }
          >
            <button
              type="button"
              className="group relative block aspect-[9/16] w-full overflow-hidden bg-graphite text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-antique focus-visible:ring-offset-2 focus-visible:ring-offset-parchment"
              onClick={(event) => {
                openerRef.current = event.currentTarget;
                setFrameFailed(false);
                setActive(reel);
              }}
            >
              {reel.poster ? (
                <Image
                  src={reel.poster}
                  alt=""
                  fill
                  sizes={
                    layout === "strip"
                      ? "(min-width: 1024px) 25vw, 72vw"
                      : "(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw"
                  }
                  className="object-cover"
                />
              ) : (
                <span className="absolute inset-0 bg-graphite">
                  <CornerBrackets />
                </span>
              )}
              <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-graphite via-graphite/80 to-transparent" />
              <PlayGlyph />
              <span className="absolute inset-x-0 bottom-0 flex flex-col gap-s1 p-s3">
                <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink/80">
                  {formatReelDate(reel.postedAt)}
                </span>
                <span className="font-serif text-[20px] font-light leading-tight text-ink">
                  {reel.title}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 text-ink backdrop:bg-graphite/92"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        {active ? (
          <div
            className="flex h-full items-center justify-center p-s3"
            onClick={close}
          >
            <div
              className="flex w-[min(420px,92vw)] flex-col gap-s3 bg-graphite p-s3 md:p-s4"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-s3">
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-gold">
                    {formatReelDate(active.postedAt)}
                  </p>
                  <h2 id={titleId} className="mt-s1 font-serif text-[24px] font-light">
                    {active.title}
                  </h2>
                </div>
                <button
                  type="button"
                  data-reel-close
                  onClick={close}
                  className="inline-flex min-h-12 min-w-12 items-center justify-center border border-gold/40 px-s2 text-[12px] uppercase tracking-[0.14em] text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-antique"
                >
                  Close
                </button>
              </div>

              {frameFailed ? (
                <p className="body-copy text-ink/80">
                  The film can be opened on Instagram.
                </p>
              ) : (
                <iframe
                  title={active.title}
                  src={`https://www.instagram.com/reel/${active.shortcode}/embed/`}
                  className="h-[min(80vh,760px)] w-full bg-parchment"
                  loading="lazy"
                  allowFullScreen
                  onLoad={onFrameLoad}
                />
              )}

              <p className="body-copy text-ink/80">{active.excerpt}</p>
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center text-ink underline decoration-gold/60 underline-offset-4"
              >
                Open on Instagram
              </a>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
