import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Electricity & Energy Regulation in India — Foreign Energy Companies",
  description:
    "Foreign energy companies entering India's power sector need counsel who has argued before CERC, APTEL, and state electricity commissions. TN Chambers provides regulatory advocacy, licensing strategy, and dispute resolution for international power sector clients.",
  keywords: [
    "CERC advocate foreign company",
    "APTEL lawyer India",
    "India electricity regulation foreign investor",
    "India power sector legal advisory",
    "renewable energy India regulatory counsel",
    "electricity regulatory commission India advocate",
    "CERC APTEL legal services",
    "India power sector entry legal",
    "electricity law India Supreme Court",
  ],
  alternates: { canonical: "/energy" },
  openGraph: {
    title: "India Electricity & Energy Regulation — TN Chambers",
    description:
      "You want to enter India's power sector. CERC, APTEL, and regulatory unpredictability are standing between your capital and your returns. We've argued this from the inside.",
    url: "https://tnairchambers.in/energy",
  },
};

const challenges = [
  {
    title: "CERC & APTEL Proceedings",
    body: "Central Electricity Regulatory Commission filings, tariff petitions, inter-state transmission disputes, and appellate proceedings before APTEL — handled with the precision these forums require.",
  },
  {
    title: "State Commission Navigation",
    body: "India has 36 state and UT electricity commissions, each with its own procedural norms and regulatory culture. We know which arguments land, and which ones backfire.",
  },
  {
    title: "Regulatory Licensing & Approvals",
    body: "Generation, transmission, and distribution licences. Open access approvals. Grid connection disputes. We navigate the licensing architecture so your project doesn't stall at the gate.",
  },
  {
    title: "PPA Disputes & Arbitration",
    body: "Power Purchase Agreement disputes, renegotiations, and arbitration — whether before CERC, state commissions, or under institutional arbitration rules.",
  },
  {
    title: "Policy & Regulatory Risk Advisory",
    body: "Before you commit capital, you need to understand the regulatory risk. We provide honest, direct advisory on where India's power sector regulation is headed — and where it will resist.",
  },
  {
    title: "Cross-Border Structuring",
    body: "Foreign direct investment in India's power sector involves FEMA, sectoral caps, and regulatory approvals. We align the legal and regulatory architecture from day one.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "TN Chambers — Electricity & Energy Regulation",
  url: "https://tnairchambers.in/energy",
  description:
    "Supreme Court advocate practice specialising in CERC, APTEL, and energy regulatory proceedings for international energy companies entering India.",
  areaServed: "India",
  serviceType: "Electricity Regulation & Energy Law",
};

export default function EnergyPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="min-h-[70vh] flex flex-col justify-end pb-16 md:pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 60%, #dde8d8 0%, transparent 70%)",
          }}
        />
        <div className="container-site relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-rule" />
            <span className="label">Energy & Power · 01</span>
          </div>
          <h1 className="heading-display text-[clamp(2.4rem,6vw,5.5rem)] text-parchment mb-8 max-w-hero text-balance">
            You want to enter India&apos;s power sector.
            <br />
            <em className="text-gold-light font-light not-italic">
              We&apos;ve argued it from the inside.
            </em>
          </h1>
          <p className="text-base md:text-lg text-parchment-dim leading-relaxed max-w-2xl">
            CERC, APTEL, state commissions, and regulatory unpredictability are standing between your capital and your returns. You need someone who has stood in these proceedings — not just read about them.
          </p>
        </div>
      </section>

      <div className="container-site">
        <div className="rule" />
      </div>

      {/* ── Pain point ───────────────────────────────────────────── */}
      <section className="container-site py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="gold-rule" />
              <span className="label">The Problem</span>
            </div>
            <h2 className="heading-section text-3xl md:text-4xl text-parchment mb-6 text-balance">
              India&apos;s power sector is an opportunity. The regulatory architecture is a labyrinth.
            </h2>
          </div>
          <div className="space-y-5 text-parchment-dim leading-relaxed md:pt-16">
            <p>
              India has one of the world&apos;s most complex electricity regulatory structures. The Central Electricity Regulatory Commission, the Appellate Tribunal for Electricity, 36 state commissions, the Ministry of Power, and the nodal agencies — each with overlapping jurisdiction and conflicting precedent.
            </p>
            <p>
              International energy companies consistently underestimate the regulatory risk. They arrive with financial models, technology, and capital — and then encounter a system that moves on its own timeline, in its own language, and rewards those who understand its internal logic.
            </p>
            <p>
              We have operated in this system for years. We know the precedents, the regulators, the procedural pressure points, and the arguments that succeed.
            </p>
          </div>
        </div>
      </section>

      <div className="container-site">
        <div className="rule" />
      </div>

      {/* ── Services grid ────────────────────────────────────────── */}
      <section className="container-site py-20 md:py-28">
        <div className="flex items-center gap-4 mb-14">
          <div className="gold-rule" />
          <span className="label">What We Handle</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="bg-ink hover:bg-surface transition-colors duration-300 p-8 flex flex-col gap-4"
            >
              <h3 className="font-serif text-xl font-light text-parchment">
                {item.title}
              </h3>
              <p className="text-sm text-parchment-dim leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Proof statement ──────────────────────────────────────── */}
      <section className="bg-surface-2 border-y border-border">
        <div className="container-site py-16 md:py-20">
          <blockquote className="max-w-3xl">
            <p className="heading-section text-2xl md:text-3xl text-parchment font-light italic leading-relaxed mb-6">
              &ldquo;The question is not whether India&apos;s electricity regulators will push back. They will. The question is whether your counsel knows exactly where — and has a prepared response.&rdquo;
            </p>
            <footer className="flex items-center gap-4">
              <div className="gold-rule" />
              <span className="label">TN Chambers</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <BookingCTA
        eyebrow="Energy & Power Advisory"
        headline="Tell us your project. We'll tell you exactly where the regulatory risk sits."
        subtext="A 30-minute call. We'll ask about your project structure, your timeline, and your exposure. You'll leave with a clear picture of what stands between you and operational approval in India."
      />
    </PageLayout>
  );
}
