"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ContactReveal from "@/components/ContactReveal";
import ReadingMenu, { ReadingLinks } from "@/components/ReadingMenu";
import Wordmark from "@/components/Wordmark";
import { primaryLinks } from "@/lib/reading-menu";

function darkHeroPath(pathname: string) {
  return (
    pathname === "/" ||
    pathname === "/scomet" ||
    pathname === "/space-aerospace-defence" ||
    pathname === "/reels"
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onDark = darkHeroPath(pathname);
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const bar = onDark
    ? open
      ? "bg-parchment/92 backdrop-blur-md"
      : solid
        ? "nav-solid"
        : "bg-transparent"
    : solid
      ? "bg-ink/80 backdrop-blur-md"
      : "bg-transparent";

  const mark = onDark ? "!text-ink" : "!text-parchment";
  const icon = onDark ? "text-ink" : "text-parchment";

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 border-0 transition-[background-color,backdrop-filter] duration-500 motion-reduce:transition-none ${bar} ${
        onDark ? "nav-on-dark" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-s3 px-s3 md:px-s5 xl:px-s6">
        <Link href="/" className={`flex shrink-0 items-center transition-opacity duration-200 hover:opacity-75 ${icon}`}>
          <Wordmark className={`text-[1.55rem] ${mark}`} />
        </Link>

        <div className="hidden xl:flex items-center gap-x-s1 2xl:gap-x-s2">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link whitespace-nowrap !tracking-[0.06em] ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? `underline decoration-accent underline-offset-4 ${onDark ? "" : "text-parchment"}`
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ReadingMenu />
          <ContactReveal variant="compact" className="shrink-0 !min-h-12 !px-s3 text-sm" />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`xl:hidden flex min-h-12 min-w-12 flex-col items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-antique ${icon}`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-px w-5 bg-current transition-all duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition-all duration-200 ${
              open ? "-translate-y-2.5 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div
          className={`xl:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto backdrop-blur-md ${
            onDark ? "bg-parchment/92 text-ink" : "bg-ink/95"
          }`}
        >
          <div className="container-site flex flex-col py-s3">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-link flex min-h-12 items-center ${
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? `underline decoration-accent underline-offset-4 ${onDark ? "" : "text-parchment"}`
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className={`pt-s3 ${onDark ? "border-t border-gold/30" : "border-t border-border"}`}>
              <ReadingLinks onNavigate={() => setOpen(false)} tone={onDark ? "dark" : "light"} />
            </div>
            <ContactReveal variant="compact" className="mt-s2 w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}
