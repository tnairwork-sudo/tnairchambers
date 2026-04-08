import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TN Chambers — Supreme Court Advocate | Electricity, Arbitration & Cross-Border Advisory",
  description:
    "TN Chambers is a Supreme Court advocate practice built on one belief — the right argument, made precisely, changes everything. Electricity regulation, arbitration, and cross-border advisory for companies navigating India.",
  alternates: { canonical: "/" },
};

const practices = [
  {
    href: "/energy",
    label: "Energy & Power",
    number: "01",
    description:
      "CERC, APTEL, state electricity commissions. Regulatory advocacy for foreign energy companies entering or operating in India's power sector.",
  },
  {
    href: "/entering-india",
    label: "Entering India",
    number: "02",
    description:
      "India market entry, regulatory compliance, corporate structuring, and ongoing legal counsel for international businesses. Business first, law second.",
  },
  {
    href: "/ngos",
    label: "NGOs & FCRA",
    number: "03",
    description:
      "FCRA registration and renewals, compliance advisory, and regulatory navigation for international NGOs and foundations operating in India.",
  },
  {
    href: "/employers",
    label: "International Employers",
    number: "04",
    description:
      "Labour law, termination risk, contractor classification, and state-level compliance for companies employing people in India.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="min-h-[90vh] flex flex-col justify-end pb-16 md:pb-24 relative overflow-hidden">
          {/* Subtle background texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 60% 40%, #1a1508 0%, transparent 70%)",
            }}
          />

          <div className="container-site relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-10">
              <div className="gold-rule" />
              <span className="label">Supreme Court of India · Est. Delhi</span>
            </div>

            {/* Headline */}
            <h1 className="heading-display text-[clamp(2.8rem,7vw,6.5rem)] text-parchment mb-10 max-w-hero text-balance">
              The right argument,
              <br />
              <em className="text-gold-light font-light not-italic">made precisely,</em>
              <br />
              changes everything.
            </h1>

            {/* Three sentences */}
            <div className="max-w-2xl mb-12">
              <p className="text-base md:text-lg text-parchment-dim leading-relaxed mb-4">
                TN Chambers is a Supreme Court advocate practice built on one belief — the right argument, made precisely, changes everything.
              </p>
              <p className="text-base md:text-lg text-parchment-dim leading-relaxed mb-4">
                We operate at the intersection of electricity regulation, arbitration, and cross-border advisory for companies navigating India&apos;s legal architecture.
              </p>
              <p className="text-base md:text-lg text-parchment leading-relaxed font-light">
                We don&apos;t wait to be found. We already know your problem.
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://calendly.com/tnairchambers/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a 30-Minute Advisory Call
              <span className="text-base leading-none" aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────── */}
        <div className="container-site">
          <div className="rule" />
        </div>

        {/* ── Practice areas ───────────────────────────────────────── */}
        <section className="container-site py-20 md:py-28">
          <div className="flex items-center gap-4 mb-14">
            <div className="gold-rule" />
            <span className="label">Practice Areas</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {practices.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-ink hover:bg-surface transition-colors duration-300 p-8 md:p-10 flex flex-col gap-6"
              >
                <div className="flex items-start justify-between">
                  <span className="label text-parchment-dim/40">{p.number}</span>
                  <span className="label group-hover:text-gold transition-colors duration-200">
                    View →
                  </span>
                </div>
                <div>
                  <h2 className="heading-section text-2xl md:text-3xl text-parchment mb-3">
                    {p.label}
                  </h2>
                  <p className="text-sm text-parchment-dim leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────── */}
        <div className="container-site">
          <div className="rule" />
        </div>

        {/* ── Philosophy ───────────────────────────────────────────── */}
        <section className="container-site py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="gold-rule" />
                <span className="label">The Practice</span>
              </div>
              <h2 className="heading-section text-4xl md:text-5xl text-parchment mb-6 text-balance">
                Built for international<br />
                clients. Based in Delhi.
              </h2>
            </div>
            <div className="space-y-5 text-parchment-dim leading-relaxed md:pt-20">
              <p>
                Most international clients arrive in India with advisors who understand the law but not the architecture — the regulators, the politics, the timing, the room.
              </p>
              <p>
                TN Chambers was built to close that gap. We combine deep regulatory expertise with the kind of strategic clarity that comes only from having stood in these proceedings, read these orders, and argued these positions at the highest levels.
              </p>
              <p>
                Our clients are not looking for a local correspondent. They are looking for counsel who already speaks their language — and who knows exactly where India&apos;s legal system will push back.
              </p>
            </div>
          </div>
        </section>

        {/* ── Marquee rule ─────────────────────────────────────────── */}
        <div className="border-y border-border py-4 overflow-hidden">
          <div className="flex gap-16 whitespace-nowrap animate-none opacity-30">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="label text-parchment">
                Supreme Court · CERC · APTEL · Arbitration · Cross-Border Advisory · FCRA · Labour Law ·&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* ── Homepage CTA ─────────────────────────────────────────── */}
        <section id="book" className="bg-surface border-t border-border">
          <div className="container-site py-24 md:py-32">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="gold-rule" />
                <span className="label">Advisory Call</span>
              </div>
              <h2 className="heading-section text-4xl md:text-5xl text-parchment mb-6 text-balance">
                Tell us your problem.<br />We'll tell you if we're the right people to solve it.
              </h2>
              <p className="text-base text-parchment-dim leading-relaxed mb-10 max-w-prose-tight">
                A 30-minute call. No commitment. We will ask the right questions, give you an honest read, and you will leave knowing exactly where you stand.
              </p>
              <a
                href="https://calendly.com/tnairchambers/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a 30-Minute Advisory Call
                <span className="text-base leading-none" aria-hidden>→</span>
              </a>
              <p className="mt-6 text-xs text-parchment-dim/60 tracking-wide">
                No commitment. Confidential. Available for clients in all time zones.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
