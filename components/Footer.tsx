import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink">
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Identity */}
          <div>
            <p className="font-serif text-2xl font-light text-parchment mb-3">
              TN Chambers
            </p>
            <p className="text-sm text-parchment-dim leading-relaxed max-w-xs">
              Supreme Court Advocate. Electricity regulation, arbitration, and
              cross-border advisory for international clients.
            </p>
          </div>

          {/* Practices */}
          <div>
            <p className="label mb-5">Practice Areas</p>
            <ul className="space-y-3">
              {[
                { href: "/energy", label: "Energy & Power Regulation" },
                { href: "/entering-india", label: "India Market Entry" },
                { href: "/ngos", label: "NGO & FCRA Compliance" },
                { href: "/employers", label: "International Employers" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-parchment-dim hover:text-parchment transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-parchment-dim">
              <li>
                <a
                  href="mailto:tushaar@tnairchambers.in"
                  className="hover:text-parchment transition-colors duration-200"
                >
                  tushaar@tnairchambers.in
                </a>
              </li>
              <li>135, Additional Building Complex</li>
              <li>Supreme Court of India, Tilak Marg</li>
              <li>New Delhi – 110001</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="rule pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-2xs tracking-wide text-parchment-dim/60 uppercase">
            &copy; {year} TN Chambers. All rights reserved.
          </p>
          <p className="text-2xs tracking-wide text-parchment-dim/60 uppercase">
            Supreme Court of India · New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
