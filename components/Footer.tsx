import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import {
  firmInstagram,
  officeEmail,
  officePhoneDisplay,
  officePhoneHref,
  officePlace,
  personProfiles,
} from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink">
      <div className="container-site py-s6 md:py-s7">
        <div className="mb-s6 grid grid-cols-1 gap-s5 md:grid-cols-2 xl:grid-cols-4">
          {/* Identity */}
          <div>
            <Link href="/" className="inline-block mb-4 hover:opacity-75 transition-opacity duration-200">
              <Wordmark className="text-[1.8rem]" />
            </Link>
            <p className="body-copy max-w-xs text-parchment-dim">
              Advocates &amp; Consultants, New Delhi. Each practice is delivered
              by a dedicated team. Management consultancy and investment banking,
              with our strategic alliances.
            </p>
          </div>

          {/* Practices */}
          <div>
            <p className="label mb-5">Practice Areas</p>
            <ul className="space-y-4">
              {[
                { href: "/energy", label: "Energy & Power Regulation" },
                { href: "/entering-india", label: "India Market Entry" },
                { href: "/ngos", label: "NGO & FCRA Compliance" },
                { href: "/employers", label: "International Employers" },
                { href: "/scomet", label: "SCOMET Cell" },
                { href: "/space-aerospace-defence", label: "Space, Aerospace and Defence" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-parchment-dim hover:text-parchment transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <p className="label mb-5">Insights</p>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/opportunity-atlas"
                  className="text-base text-parchment-dim hover:text-parchment transition-colors duration-200"
                >
                  Opportunity Atlas
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-base text-parchment-dim hover:text-parchment transition-colors duration-200"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/off-the-brief"
                  className="text-base text-parchment-dim hover:text-parchment transition-colors duration-200"
                >
                  Off the Brief
                </Link>
              </li>
              <li>
                <Link
                  href="/reels"
                  className="text-base text-parchment-dim hover:text-parchment transition-colors duration-200"
                >
                  Reels
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label mb-5">Contact</p>
            <ul className="space-y-s2 text-base text-parchment-dim">
              <li>
                <a
                  href={officePhoneHref}
                  className="hover:text-parchment transition-colors duration-200"
                >
                  {officePhoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${officeEmail}`}
                  className="hover:text-parchment transition-colors duration-200"
                >
                  {officeEmail}
                </a>
              </li>
              <li>{officePlace}</li>
              <li>
                <a
                  href={firmInstagram}
                  className="hover:text-parchment transition-colors duration-200"
                >
                  Nair &amp; Co on Instagram
                </a>
              </li>
              {personProfiles.map((profile) => (
                <li key={profile.href}>
                  <a
                    href={profile.href}
                    className="hover:text-parchment transition-colors duration-200"
                  >
                    {profile.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="rule pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs tracking-[0.08em] text-parchment-dim/60 uppercase">
            &copy; {year} Nair &amp; Co. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/reading-room"
              className="text-xs tracking-[0.14em] uppercase text-parchment-dim hover:text-parchment transition-colors"
            >
              The Reading Room
            </Link>
            <p className="text-xs tracking-[0.08em] text-parchment-dim/60 uppercase">
              Supreme Court of India · New Delhi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
