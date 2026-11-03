"use client";

import { useEffect, useRef, useState } from "react";

const rules = [
  {
    n: "01",
    title: "Selection",
    body: "Participation is extended by invitation only. Every name in this room is chosen deliberately. Our criteria are not disclosed.",
  },
  {
    n: "02",
    title: "Dress",
    body: "Men: a suit. Women: cocktail attire. No exceptions. The room has an aesthetic. You are part of it the moment you walk in.",
  },
  {
    n: "03",
    title: "RSVP",
    body: "Confirm or decline. Ghosting is a choice, and it will be treated as one. Silence results in permanent removal from all cities.",
  },
  {
    n: "06",
    title: "Conduct",
    body: "The quality of the evening is only ever as good as the people in the room. This is how we protect that.",
  },
];

function CountUp({ to, play }: { to: number; play: boolean }) {
  const [value, setValue] = useState(to);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !play) {
      setValue(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 900);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(to * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    setValue(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [play, to]);

  return <>{value}</>;
}

export default function BigDinner() {
  const ref = useRef<HTMLElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPlay(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.add("is-in");
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="the-big-dinner"
      aria-labelledby="big-dinner-title"
      className="big-dinner relative overflow-hidden border-y border-border bg-parchment text-ink"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent"
      />
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-2 bg-accent md:w-3" />
      <div className="container-site relative grid gap-12 py-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] md:py-28 lg:gap-20">
        <div className="big-dinner-mark">
          <p className="label text-ink/70">thebigdinner.in</p>
          <div className="relative mt-8 aspect-square max-w-[16rem] border border-ink/15 bg-accent text-ink">
            <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
              <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="100" r="8" fill="currentColor" />
              <path d="M28 150h144" stroke="currentColor" strokeWidth="1" />
              <path d="M46 150V78h28v72M126 150V58h28v92" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            <p className="absolute bottom-4 left-4 right-4 font-serif text-2xl font-light leading-tight">
              A private room
            </p>
          </div>
        </div>

        <div>
          <h2
            id="big-dinner-title"
            className="heading-display text-[clamp(2.6rem,6vw,5rem)] leading-[1.02]"
          >
            The Big Dinner
          </h2>
          <p className="mt-6 font-serif text-2xl font-light md:text-3xl">It is a bet on people.</p>
          <h3 className="mt-10 font-serif text-3xl font-light md:text-4xl">
            This is not a networking event.
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
            <p>
              The Big Dinner is a closed room. Convened privately, once each month. Every guest is chosen with intention, for the texture of their thinking, the weight of their experience, and the quality of their presence.
            </p>
            <p>
              No pitches. No elevator lines. No business cards. What happens instead is rarer: conversation that moves, ideas that collide, and friendships that do not require a transaction to begin.
            </p>
            <p>This is how we used to do it. Before the world taught us to be useful before we were real.</p>
          </div>

          <h3 className="mt-12 font-serif text-2xl font-light md:text-3xl">
            What the room requires of you
          </h3>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {rules.map((rule) => (
              <li
                key={rule.n}
                className={`border p-5 transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${
                  rule.n === "01"
                    ? "border-accent bg-accent text-ink"
                    : "border-ink/15 bg-ink text-parchment"
                }`}
              >
                <p className="label opacity-70">{rule.n}</p>
                <h4 className="mt-3 font-serif text-2xl font-light">{rule.title}</h4>
                <p className="mt-3 text-sm leading-relaxed opacity-80">{rule.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-12 font-serif text-3xl font-light md:text-4xl">
            <CountUp to={21} play={play} /> editions held. So far.
          </p>
          <p className="mt-4 text-base text-ink/80 md:text-lg">The conversation is the hospitality.</p>
          <p className="mt-3 text-base text-ink/80 md:text-lg">
            The room fills itself with the people who show up.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="https://www.thebigdinner.in"
              className="btn-primary w-full justify-center focus:ring-offset-parchment sm:w-auto"
            >
              Request an Invitation for The Big Dinner.
            </a>
            <a
              href="https://www.instagram.com/thebigdinnerr/"
              className="text-sm text-ink underline decoration-accent underline-offset-4"
            >
              Instagram @thebigdinnerr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
