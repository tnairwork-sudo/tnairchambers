import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { getGuides, guidePath } from "@/lib/guides";

export default function GuideFooter() {
  const year = new Date().getFullYear();
  const guides = getGuides();

  return (
    <footer className="border-t border-border bg-ink">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          <div>
            <Link
              href="/"
              className="inline-block mb-4 hover:opacity-75 transition-opacity duration-200"
            >
              <Wordmark className="text-[1.8rem]" />
            </Link>
            <p className="text-sm text-parchment-dim leading-relaxed max-w-xs">
              Informational notes on the High Court of Delhi.
              New Delhi, India.
            </p>
          </div>
          <div>
            <p className="label mb-5">Guides</p>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/guides"
                  className="text-sm text-parchment-dim hover:text-parchment transition-colors duration-200"
                >
                  All guides
                </Link>
              </li>
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={guidePath(guide.slug)}
                    className="text-sm text-parchment-dim hover:text-parchment transition-colors duration-200"
                  >
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rule pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-2xs tracking-wide text-parchment-dim/60 uppercase">
            &copy; {year} Nair &amp; Co. All rights reserved.
          </p>
          <p className="text-2xs tracking-wide text-parchment-dim/60 uppercase">
            New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  );
}
