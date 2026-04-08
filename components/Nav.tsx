"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "Tushaar Nair" },
  { href: "/energy", label: "Energy & Power" },
  { href: "/entering-india", label: "Entering India" },
  { href: "/ngos", label: "NGOs" },
  { href: "/employers", label: "Employers" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-sm border-b border-border">
      <nav className="container-site flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-75 transition-opacity duration-200">
          <Image
            src="/logo.png"
            alt="TN Chambers"
            width={72}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                pathname === link.href ? "text-parchment" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+918595203751" className="btn-primary py-2.5 px-5 text-2xs">
            +91 85952 03751
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
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
        <div className="md:hidden bg-ink border-t border-border">
          <div className="container-site py-6 flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-link ${
                  pathname === link.href ? "text-parchment" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+918595203751"
              className="btn-primary py-3 px-5 text-2xs w-fit"
            >
              +91 85952 03751
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
