"use client";

import { useEffect, useState } from "react";
import { EXPLORED_EVENT, readExplored } from "@/lib/explored";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function SitePlay() {
  const [progress, setProgress] = useState(0);
  const [explored, setExplored] = useState(0);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    setMotion(!reduced);
    const syncExplored = () => setExplored(readExplored().length);
    syncExplored();
    window.addEventListener(EXPLORED_EVENT, syncExplored);
    window.addEventListener("storage", syncExplored);

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, window.scrollY / height) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let cursor: HTMLDivElement | null = null;
    let move: ((event: PointerEvent) => void) | null = null;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!reduced && fine) {
      cursor = document.createElement("div");
      cursor.setAttribute("aria-hidden", "true");
      cursor.style.cssText =
        "position:fixed;top:0;left:0;z-index:70;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:999px;border:1px solid #d50000;pointer-events:none;mix-blend-mode:multiply;transition:transform 160ms ease-out;";
      document.body.appendChild(cursor);
      move = (event: PointerEvent) => {
        if (!cursor) return;
        cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      };
      window.addEventListener("pointermove", move);
    }

    const onDown = (event: PointerEvent) => {
      if (reduced) return;
      if (event.pointerType === "mouse" && fine) return;
      const spark = document.createElement("span");
      spark.setAttribute("aria-hidden", "true");
      spark.style.cssText = `position:fixed;z-index:70;left:${event.clientX}px;top:${event.clientY}px;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:999px;background:#d50000;pointer-events:none;`;
      document.body.appendChild(spark);
      spark.animate(
        [
          { transform: "scale(1)", opacity: 0.9 },
          { transform: "scale(3.2)", opacity: 0 },
        ],
        { duration: 420, easing: "ease-out" }
      ).onfinish = () => spark.remove();
    };
    window.addEventListener("pointerdown", onDown);

    return () => {
      window.removeEventListener(EXPLORED_EVENT, syncExplored);
      window.removeEventListener("storage", syncExplored);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onDown);
      if (move) window.removeEventListener("pointermove", move);
      cursor?.remove();
    };
  }, []);

  const exploredLabel = `${explored} ${explored === 1 ? "guide" : "guides"} explored`;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px] bg-accent/15"
        aria-hidden
      >
        <div
          className="h-full bg-accent"
          style={{
            width: `${progress * 100}%`,
            transition: motion ? "width 120ms linear" : "none",
          }}
        />
      </div>
      <p className="sr-only" aria-live="polite">
        {exploredLabel}
      </p>
    </>
  );
}
