import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Foreign Companies Entering India — Legal Advisory for India Market Entry",
  description:
    "India market entry legal advisory for foreign companies. Regulatory compliance, corporate structuring, licensing, and ongoing counsel from a Supreme Court advocate who puts business first, law second.",
  keywords: [
    "India market entry legal advisory",
    "foreign company India legal counsel",
    "India entry regulatory compliance",
    "foreign direct investment India lawyer",
    "India business setup legal",
    "company registration India foreign",
    "India regulatory advisory international company",
    "FEMA compliance India",
    "India corporate legal counsel foreign",
  ],
  alternates: { canonical: "/entering-india" },
  openGraph: {
    title: "Entering India — Legal Advisory for Foreign Companies | TN Chambers",
    description:
      "India is the opportunity. The regulatory, compliance, and legal architecture is the obstacle. TN Chambers provides counsel who speaks your language — business first, law second.",
    url: "https://tnairchambers.in/entering-india",
  },
};

const services = [
  {
    title: "Entry Structure Advisory",
    body: "Liaison office, branch office, subsidiary, or joint venture — each structure carries different regulatory obligations, tax exposure, and repatriation rights. We map the tradeoffs clearly before you commit.",
  },
  {
    title: "Regulatory Approvals & Licensing",
    body: "Sector-specific approvals, environmental clearances, FDI policy compliance, and RBI reporting requirements. We handle the paperwork so you can focus on the business.",
  },
  {
    title: "FEMA & Foreign Exchange Compliance",
    body: "Foreign exchange management is one of the most frequently misunderstood areas for international companies. We ensure your capital flows, remittances, and guarantees are structured correctly from day one.",
  },
  {
    title: "Commercial Contracts & JV Agreements",
    body: "Joint venture negotiations, shareholder agreements, distribution arrangements, and supply contracts — drafted to protect your interests in Indian courts, not just in theory.",
  },
  {
    title: "Ongoing Regulatory Counsel",
    body: "India's regulatory landscape changes. We provide ongoing advisory so your India operations stay compliant as rules evolve — with direct access, not a ticketing system.",
  },
  {
    title: "Dispute Prevention & Resolution",
    body: "Most India market entry disputes are avoidable. We identify the risk points early. When disputes do arise, we resolve them through negotiation, arbitration, or litigation at the highest levels.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "TN Chambers — India Market Entry Legal Advisory",
  url: "https://tnairchambers.in/entering-india",
  description:
    "Legal advisory for foreign companies entering the Indian market. Corporate structuring, regulatory compliance, FEMA, FDI policy, and ongoing counsel.",
  areaServed: "India",
  serviceType: "India Market Entry & Foreign Investment Law",
};

export default function EnteringIndiaPage() {
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
              "radial-gradient(ellipse 70% 50% at 70% 40%, #ddd8e8 0%, transparent 70%)",
          }}
        />
        <div className="container-site relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-rule" />
            <span className="label">India Market Entry · 02</span>
          </div>
          <h1 className="heading-display text-[clamp(2.4rem,6vw,5.5rem)] text-parchment mb-8 max-w-hero text-balance">
            India is the opportunity.
            <br />
            <em className="text-gold-light font-light not-italic">
              The legal architecture is the obstacle.
            </em>
          </h1>
          <p className="text-base md:text-lg text-parchment-dim leading-relaxed max-w-2xl">
            You need Indian counsel who speaks your language — business first, law second. Who understands what you&apos;re trying to build, and can navigate the system around it.
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
              India doesn&apos;t punish ambition. It punishes unfamiliarity.
            </h2>
          </div>
          <div className="space-y-5 text-parchment-dim leading-relaxed md:pt-16">
            <p>
              The companies that struggle in India are not the ones who lack ambition or capital. They are the ones who arrived with advisors who understand the rules but not the system — the regulators, the timelines, the unofficial sequences, the ways in which compliance on paper can still leave you operationally exposed.
            </p>
            <p>
              India&apos;s legal and regulatory architecture is not hostile to foreign capital. It is simply unfamiliar, layered, and moving. The FDI policy changes. RBI master directions are updated. Sector-specific rules overlap with central and state frameworks.
            </p>
            <p>
              We provide the kind of counsel that helps you see the whole board — not just the square you&apos;re currently standing on.
            </p>
          </div>
        </div>
      </section>

      <div className="container-site">
        <div className="rule" />
      </div>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="container-site py-20 md:py-28">
        <div className="flex items-center gap-4 mb-14">
          <div className="gold-rule" />
          <span className="label">What We Handle</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((item) => (
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

      {/* ── Pull quote ───────────────────────────────────────────── */}
      <section className="bg-surface-2 border-y border-border">
        <div className="container-site py-16 md:py-20">
          <blockquote className="max-w-3xl">
            <p className="heading-section text-2xl md:text-3xl text-parchment font-light italic leading-relaxed mb-6">
              &ldquo;The question we ask every new international client is simple: what does success look like in 18 months? That answer shapes the legal strategy — not the other way around.&rdquo;
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
        eyebrow="India Entry Advisory"
        headline="Tell us what you're building in India. We'll tell you what stands in the way."
        subtext="A 30-minute call. We'll ask about your sector, your structure, your timeline, and your existing advisors. You'll leave with an honest read of the path ahead."
      />
    </PageLayout>
  );
}
