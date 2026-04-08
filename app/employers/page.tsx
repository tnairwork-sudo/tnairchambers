import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "India Labour Law Advisory for International Employers — TN Chambers",
  description:
    "Employing people in India is not like employing people anywhere else. Labour law, termination risk, contractor classification, and state-level variations will surprise you. TN Chambers provides clear, direct advisory for international employers.",
  keywords: [
    "India labour law foreign employer",
    "employment law India international company",
    "India termination law foreign company",
    "contractor employee classification India",
    "India HR legal advisory",
    "India employment compliance international",
    "labour law India advocate",
    "India workforce legal advisory",
    "PF ESI compliance India foreign employer",
    "India labour code compliance",
  ],
  alternates: { canonical: "/employers" },
  openGraph: {
    title: "India Employment & Labour Law for International Employers — TN Chambers",
    description:
      "Employing people in India is not like employing people anywhere else. Labour law, termination risk, contractor classification, and state-level variations will surprise you. They don't have to.",
    url: "https://tnairchambers.in/employers",
  },
};

const services = [
  {
    title: "Employment Contract Review & Drafting",
    body: "Contracts that are legally enforceable in India, not just in the jurisdiction of your headquarters. We draft for the Indian employment law reality — not for theoretical best practice.",
  },
  {
    title: "Termination Risk Assessment",
    body: "India's Industrial Disputes Act, standing orders, and retrenchment provisions create real termination risk for employers. We assess the exposure before you act — not after.",
  },
  {
    title: "Contractor Classification",
    body: "The line between contractor and employee is one of the most litigated questions in Indian labour law. Misclassification carries significant retrospective liability. We map your workforce structures clearly.",
  },
  {
    title: "PF, ESI & Statutory Compliance",
    body: "Provident Fund, Employees' State Insurance, gratuity, and the new Labour Codes — the statutory compliance obligations for Indian employers are layered and change with headcount and state.",
  },
  {
    title: "State-Level Labour Law Navigation",
    body: "Labour law in India is partly state-governed. Shops and Establishments Acts, state-specific industrial relations rules, and local enforcement patterns vary significantly. We advise across states.",
  },
  {
    title: "Workforce Restructuring & Exits",
    body: "Redundancies, restructuring, and leadership transitions carry legal risk in India that most international employers discover too late. We structure exits correctly from the start.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "TN Chambers — India Labour & Employment Law Advisory",
  url: "https://tnairchambers.in/employers",
  description:
    "Labour law, employment compliance, termination risk, and contractor classification advisory for international companies employing people in India.",
  areaServed: "India",
  serviceType: "Employment & Labour Law",
};

export default function EmployersPage() {
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
              "radial-gradient(ellipse 65% 50% at 55% 35%, #0d0d1a 0%, transparent 70%)",
          }}
        />
        <div className="container-site relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-rule" />
            <span className="label">International Employers · 04</span>
          </div>
          <h1 className="heading-display text-[clamp(2.4rem,6vw,5.5rem)] text-parchment mb-8 max-w-hero text-balance">
            Employing people in India
            <br />
            <em className="text-gold-light font-light not-italic">
              will surprise you. It doesn&apos;t have to.
            </em>
          </h1>
          <p className="text-base md:text-lg text-parchment-dim leading-relaxed max-w-2xl">
            Labour law, termination risk, contractor classification, and state-level variations are not challenges you discover after the problem has happened. We get you ahead of them.
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
              India&apos;s employment law doesn&apos;t work like anywhere else. Most employers find this out at the worst possible moment.
            </h2>
          </div>
          <div className="space-y-5 text-parchment-dim leading-relaxed md:pt-16">
            <p>
              India&apos;s labour law framework is not a unified system. It is a layered architecture of central statutes, state-level rules, standing orders, and enforcement patterns that differ not just by state but by industry, headcount, and type of establishment.
            </p>
            <p>
              International companies that enter India with their standard employment practices — at-will termination, broad contractor usage, centralised payroll — frequently discover retrospective statutory liability, reinstatement orders, and enforcement actions they never anticipated.
            </p>
            <p>
              The New Labour Codes have consolidated some of this, but implementation is uneven and the transition period has created its own compliance questions. We stay current, so you don&apos;t have to.
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
              &ldquo;The question is never whether Indian labour law is complex. It is. The question is whether your India HR structure has been built by someone who understands that complexity — or whether you are about to find out.&rdquo;
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
        eyebrow="Employment Law Advisory"
        headline="Tell us how you currently employ people in India. We'll tell you where your exposure is."
        subtext="A 30-minute call. We'll ask about your headcount, your states of operation, your contractor arrangements, and your current contracts. You'll leave with a clear picture of what needs attention."
      />
    </PageLayout>
  );
}
