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

const courts = [
  {
    name: "Supreme Court of India",
    body: "Constitutional questions, service law, electricity regulation, and matters of national consequence. We do not arrive to participate. We arrive to prevail.",
  },
  {
    name: "High Courts",
    sub: "Punjab & Haryana · Madras",
    body: "Sustained appellate advocacy in civil, service, and regulatory disputes where the quality of argument determines everything.",
  },
  {
    name: "Tribunals",
    sub: "APTEL · NCLAT · CAT",
    body: "The Appellate Tribunal for Electricity, the National Company Law Appellate Tribunal, and the Central Administrative Tribunal. Each forum demands a different register of preparation.",
  },
  {
    name: "Arbitration & DRT",
    body: "Commercial disputes, stuck receivables, broken partnerships. The instrument is chosen for its precision, not its drama.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="min-h-[90vh] flex flex-col justify-end pb-16 md:pb-24 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 60% 40%, #e8e0cc 0%, transparent 70%)",
            }}
          />
          <div className="container-site relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="gold-rule" />
              <span className="label">Supreme Court of India · New Delhi</span>
            </div>
            <h1 className="heading-display text-[clamp(2.8rem,7vw,6.5rem)] text-parchment mb-10 max-w-hero text-balance">
              The right argument,
              <br />
              <em className="text-gold-light font-light not-italic">made precisely,</em>
              <br />
              changes everything.
            </h1>
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
            <a href="tel:+918595203751" className="btn-primary">
              Call +91 85952 03751
              <span className="text-base leading-none" aria-hidden>→</span>
            </a>
          </div>
        </section>

        <div className="container-site"><div className="rule" /></div>

        {/* ── Tushaar Nair teaser ──────────────────────────────────── */}
        <section className="container-site py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="gold-rule" />
                <span className="label">The Advocate</span>
              </div>
              <h2 className="heading-section text-4xl md:text-5xl text-parchment mb-0 text-balance">
                Tushaar Nair
              </h2>
            </div>
            <div className="space-y-5 text-parchment-dim leading-relaxed">
              <p>
                He practices before the Supreme Court of India. He thinks before most people have finished their sentence — not because he is impatient, but because he has been trained, in the particular crucible of appellate advocacy, to find the structure beneath the surface of things.
              </p>
              <p>
                To hear what is not being said. To see where the argument will fail before it has been made.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 label text-gold hover:text-gold-light transition-colors duration-200 mt-2">
                Full Profile →
              </Link>
            </div>
          </div>
        </section>

        <div className="container-site"><div className="rule" /></div>

        {/* ── A Discipline of Thinking ─────────────────────────────── */}
        <section className="bg-surface-2 border-y border-border">
          <div className="container-site py-16 md:py-20">
            <blockquote className="max-w-3xl">
              <p className="heading-section text-2xl md:text-3xl text-parchment font-light italic leading-relaxed mb-6">
                &ldquo;The law, at its best, is not a service industry. It is a discipline of thinking: adversarial, structural, precise, applied to the irreducible messiness of human affairs.&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div className="gold-rule" />
                <Link href="/about" className="label hover:text-parchment transition-colors duration-200">
                  A Discipline of Thinking →
                </Link>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── Courts and the Table ─────────────────────────────────── */}
        <section className="container-site py-20 md:py-28">
          <div className="flex items-center gap-4 mb-14">
            <div className="gold-rule" />
            <span className="label">The Courts & The Table</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-10">
            {courts.map((court) => (
              <div
                key={court.name}
                className="bg-ink hover:bg-surface transition-colors duration-300 p-8 md:p-10 flex flex-col gap-3"
              >
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-parchment">
                    {court.name}
                  </h3>
                  {court.sub && (
                    <p className="label text-parchment-dim/60 mt-1">{court.sub}</p>
                  )}
                </div>
                <p className="text-sm text-parchment-dim leading-relaxed">{court.body}</p>
              </div>
            ))}
          </div>
          <p className="font-serif text-xl text-parchment-dim italic">
            Resolution is the only measure of success.
          </p>
        </section>

        <div className="container-site"><div className="rule" /></div>

        {/* ── International Advisory ───────────────────────────────── */}
        <section className="container-site py-20 md:py-28">
          <div className="flex items-center gap-4 mb-14">
            <div className="gold-rule" />
            <span className="label">International Advisory</span>
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

        {/* ── Marquee ──────────────────────────────────────────────── */}
        <div className="border-y border-border py-4 overflow-hidden">
          <div className="flex gap-16 whitespace-nowrap opacity-30">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="label text-parchment">
                Supreme Court · APTEL · NCLAT · CAT · Arbitration · Cross-Border Advisory · FCRA · Labour Law ·&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-surface border-t border-border">
          <div className="container-site py-24 md:py-32">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="gold-rule" />
                <span className="label">Contact</span>
              </div>
              <h2 className="heading-section text-4xl md:text-5xl text-parchment mb-6 text-balance">
                Tell us your problem.<br />We&apos;ll tell you if we&apos;re the right people to solve it.
              </h2>
              <p className="text-base text-parchment-dim leading-relaxed mb-10 max-w-prose-tight">
                We will ask the right questions, give you an honest read, and you will leave knowing exactly where you stand.
              </p>
              <a href="tel:+918595203751" className="btn-primary">
                Call +91 85952 03751
                <span className="text-base leading-none" aria-hidden>→</span>
              </a>
              <p className="mt-6 text-xs text-parchment-dim/60 tracking-wide">
                Confidential. Available for clients in all time zones.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
