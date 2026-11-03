"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import {
  articleLinks,
  guideLinks,
  guidesIndexLink,
  offTheBriefLink,
} from "@/lib/reading-menu";

function current(pathname: string, href: string, exact = false) {
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Item({
  href,
  label,
  exact = false,
  onNavigate,
}: {
  href: string;
  label: string;
  exact?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = current(pathname, href, exact);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`block text-sm leading-snug transition-colors duration-200 ${
        active
          ? "text-parchment underline decoration-accent underline-offset-4"
          : "text-parchment-dim hover:text-parchment"
      }`}
    >
      {label}
    </Link>
  );
}

export function ReadingLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex flex-col gap-6">
      <Item href={offTheBriefLink.href} label={offTheBriefLink.label} onNavigate={onNavigate} />
      <div>
        <p className="label mb-3">Articles</p>
        <div className="flex flex-col gap-3">
          {articleLinks.map((link) => (
            <Item key={link.href} href={link.href} label={link.label} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
      <div>
        <p className="label mb-3">Guides</p>
        <div className="flex flex-col gap-3">
          <Item
            href={guidesIndexLink.href}
            label={guidesIndexLink.label}
            exact
            onNavigate={onNavigate}
          />
          {guideLinks.map((link) => (
            <Item key={link.href} href={link.href} label={link.label} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ReadingMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const sectionActive =
    current(pathname, offTheBriefLink.href) ||
    current(pathname, guidesIndexLink.href) ||
    articleLinks.some((link) => current(pathname, link.href));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={`nav-link inline-flex items-center gap-1.5 whitespace-nowrap !tracking-[0.08em] xl:!tracking-[0.14em] ${
          open || sectionActive
            ? "text-parchment underline decoration-accent underline-offset-4"
            : ""
        }`}
      >
        Reading
        <svg
          viewBox="0 0 10 6"
          aria-hidden
          className={`h-1.5 w-2 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>
      {open && (
        <nav
          id={menuId}
          aria-label="Reading"
          className="absolute right-0 top-full z-50 mt-3 max-h-[min(70vh,36rem)] w-[min(26rem,calc(100vw-3rem))] overflow-y-auto border border-border bg-ink p-6"
        >
          <ReadingLinks onNavigate={() => setOpen(false)} />
        </nav>
      )}
    </div>
  );
}
