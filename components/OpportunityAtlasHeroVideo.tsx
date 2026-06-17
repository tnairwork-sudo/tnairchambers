"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface OpportunityAtlasHeroVideoProps {
  title: string;
  videoSrc?: string;
  youtubeId?: string;
  posterSrc: string;
  posterAlt: string;
  captionsSrc?: string;
  caption?: string;
}

export default function OpportunityAtlasHeroVideo({
  title,
  videoSrc,
  youtubeId,
  posterSrc,
  posterAlt,
  captionsSrc,
  caption,
}: OpportunityAtlasHeroVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isPlaying || youtubeId) {
      return;
    }

    void videoRef.current?.play().catch(() => {
      setIsPlaying(false);
    });
  }, [isPlaying, youtubeId]);

  return (
    <figure className="space-y-3 md:space-y-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-surface shadow-[0_16px_36px_rgba(15,13,10,0.1)]">
        {isPlaying ? (
          youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="h-full w-full"
              style={{ border: "none" }}
            />
          ) : (
          <video
            ref={videoRef}
            controls
            playsInline
            preload="none"
            poster={posterSrc}
            className="h-full w-full object-cover"
            aria-label={title}
          >
            <source src={videoSrc} type="video/mp4" />
            {captionsSrc ? (
              <track kind="captions" src={captionsSrc} srcLang="en" label="English" default />
            ) : null}
          </video>
          )
        ) : (
          <>
            <Image
              src={posterSrc}
              alt={posterAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1200px) 1200px, 100vw"
              loading="lazy"
            />
            <button
              type="button"
              aria-label={`Play video: ${title}`}
              className="group absolute inset-0 grid place-items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              onClick={() => setIsPlaying(true)}
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold text-surface transition-all duration-200 group-hover:scale-105 group-hover:brightness-105 motion-reduce:transform-none motion-reduce:transition-none md:h-20 md:w-20">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-6 w-6 translate-x-[1px] md:h-7 md:w-7"
                  fill="currentColor"
                >
                  <path d="M8 6v12l10-6z" />
                </svg>
              </span>
            </button>
          </>
        )}
      </div>
      {caption ? (
        <figcaption className="text-sm leading-relaxed text-parchment-dim">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
