"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface ContactRevealProps {
  /** "full" = phone + address block (for CTA sections)
   *  "compact" = phone only, smaller layout (for nav) */
  variant?: "full" | "compact";
  className?: string;
}

export default function ContactReveal({
  variant = "full",
  className = "",
}: ContactRevealProps) {
  const [revealed, setRevealed] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (revealed && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }
      );
    }
  }, [revealed]);

  if (!revealed) {
    return (
      <button
        onClick={() => setRevealed(true)}
        className={`btn-primary ${className}`}
      >
        Contact
        <span className="text-base leading-none" aria-hidden>
          →
        </span>
      </button>
    );
  }

  if (variant === "compact") {
    return (
      <div ref={contentRef} style={{ opacity: 0 }} className="flex flex-col gap-1">
        <a
          href="tel:+918595203751"
          className="font-sans text-xs tracking-widest uppercase font-medium text-parchment hover:text-gold transition-colors duration-200"
        >
          +91 85952 03751
        </a>
        <a
          href="mailto:tushaar@tnairchambers.in"
          className="font-sans text-2xs tracking-wide text-parchment-dim hover:text-parchment transition-colors duration-200 uppercase"
        >
          tushaar@tnairchambers.in
        </a>
      </div>
    );
  }

  return (
    <div ref={contentRef} style={{ opacity: 0 }}>
      <a
        href="tel:+918595203751"
        className="font-serif text-3xl md:text-4xl font-light text-parchment block mb-5 hover:text-gold-light transition-colors duration-200"
      >
        +91 85952 03751
      </a>
      <div className="space-y-1.5 text-sm text-parchment-dim leading-relaxed">
        <p>
          <a
            href="mailto:tushaar@tnairchambers.in"
            className="hover:text-parchment transition-colors duration-200"
          >
            tushaar@tnairchambers.in
          </a>
        </p>
        <p>135, Additional Building Complex</p>
        <p>Supreme Court of India, Tilak Marg</p>
        <p>New Delhi – 110001</p>
      </div>
      <p className="mt-6 text-xs text-parchment-dim/60 tracking-wide">
        Confidential. Available for clients in all time zones.
      </p>
    </div>
  );
}
