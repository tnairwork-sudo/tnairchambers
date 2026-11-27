"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ContactReveal from "@/components/ContactReveal";
import ReadingMenu, { ReadingLinks } from "@/components/ReadingMenu";
import Wordmark from "@/components/Wordmark";
import { primaryLinks } from "@/lib/reading-menu";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-s3 px-s3 md:px-s5 xl:px-s6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center hover:opacity-75 transition-opacity duration-200">
          <Wordmark className="text-[1.55rem]" />
        </Link>

        <div className="hidden xl:flex items-center gap-x-s1 2xl:gap-x-s2">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link whitespace-nowrap !tracking-[0.06em] ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-parchment underline decoration-accent underline-offset-4"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ReadingMenu />
          <ContactReveal variant="compact" className="shrink-0 !min-h-12 !px-s3 text-sm" />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden flex min-h-12 min-w-12 flex-col items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-antique"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-parchment transition-all duration-200 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-parchment transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-parchment transition-all duration-200 ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto bg-ink border-t border-border">
          <div className="container-site flex flex-col py-s3">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-link flex min-h-12 items-center ${
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? "text-parchment underline decoration-accent underline-offset-4"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-s3">
              <ReadingLinks onNavigate={() => setOpen(false)} />
            </div>
            <ContactReveal variant="compact" className="mt-s2 w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}
