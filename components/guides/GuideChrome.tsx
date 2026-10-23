"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Wordmark from "@/components/Wordmark";

const links = [
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "Tushaar Nair" },
  { href: "/energy", label: "Energy & Power" },
  { href: "/entering-india", label: "Entering India" },
  { href: "/ngos", label: "NGOs" },
  { href: "/employers", label: "Employers" },
  { href: "/opportunity-atlas", label: "Opportunity Atlas" },
];

export default function GuideChrome() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-border">
        <nav className="container-site flex items-center justify-between h-16 gap-8 lg:gap-10">
          <Link
            href="/"
            className="flex shrink-0 items-center hover:opacity-75 transition-opacity duration-200"
          >
            <Wordmark className="text-[1.55rem]" />
          </Link>

          <div className="hidden lg:flex items-center gap-x-4 xl:gap-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link whitespace-nowrap !tracking-[0.08em] xl:!tracking-[0.14em] ${
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? "text-parchment"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-gold"
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

        {open && (
          <div className="lg:hidden bg-ink border-t border-border">
            <div className="container-site py-6 flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`nav-link ${
                    pathname === link.href ||
                    pathname.startsWith(`${link.href}/`)
                      ? "text-parchment"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
    </header>
  );
}
