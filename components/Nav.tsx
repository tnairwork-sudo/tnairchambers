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
      <nav className="container-site flex items-center justify-between h-16 gap-8 lg:gap-10">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center hover:opacity-75 transition-opacity duration-200">
          <Wordmark className="text-[1.55rem]" />
        </Link>

        <div className="hidden lg:flex items-center gap-x-2 xl:gap-x-6">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link whitespace-nowrap !tracking-[0.08em] xl:!tracking-[0.14em] ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-parchment underline decoration-accent underline-offset-4"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ReadingMenu />
          <ContactReveal variant="compact" className="shrink-0 py-2.5 px-5 text-2xs" />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
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
        <div className="lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto bg-ink border-t border-border">
          <div className="container-site py-6 flex flex-col gap-5">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-link ${
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? "text-parchment underline decoration-accent underline-offset-4"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-5">
              <ReadingLinks onNavigate={() => setOpen(false)} />
            </div>
            <ContactReveal variant="compact" className="py-3 px-5 text-2xs w-fit" />
          </div>
        </div>
      )}
    </header>
  );
}
