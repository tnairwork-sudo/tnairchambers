import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "FCRA Compliance & Legal Advisory for International NGOs in India",
  description:
    "International NGOs operating in India face FCRA registration, compliance obligations, and a fast-changing regulatory environment. TN Chambers provides legal advisory that keeps your licence to operate intact.",
  keywords: [
    "FCRA lawyer India",
    "foreign NGO India legal advisory",
    "FCRA registration advocate India",
    "foreign contribution regulation act India",
    "international NGO FCRA compliance",
    "NGO legal counsel India",
    "FCRA renewal advocate India",
    "India NGO regulatory compliance",
    "FCRA violation defence India",
    "foreign foundation India FCRA",
  ],
  alternates: { canonical: "/ngos" },
  openGraph: {
    title: "FCRA & NGO Legal Advisory in India — TN Chambers",
    description:
      "Operating as a foreign NGO in India means navigating FCRA, compliance requirements, and a legal environment that changes faster than most advisories can track. One wrong move costs you your licence to operate.",
    url: "https://tnairchambers.in/ngos",
  },
};

const services = [
  {
    title: "FCRA Registration & Renewal",
    body: "New FCRA registrations, prior permission applications, and five-year renewals — handled precisely, with the documentation and timing that the Ministry of Home Affairs requires.",
  },
  {
    title: "FCRA Compliance Audit",
    body: "We review your current compliance posture — account designations, utilisation reporting, sub-granting arrangements — and identify exposure before the regulator does.",
  },
  {
    title: "MHA Show-Cause & Enforcement Response",
    body: "If you have received a show-cause notice, suspension notice, or cancellation order, you need an advocate who has handled these proceedings. Speed and precision are everything at this stage.",
  },
  {
    title: "Programme Structure Advisory",
    body: "How you receive, hold, and deploy foreign contribution determines your regulatory risk. We advise on programme structures that achieve your mission without triggering compliance exposure.",
  },
  {
    title: "CSR Partnership Compliance",
    body: "Foreign foundations partnering with Indian implementing organisations face a distinct set of FCRA and CSR compliance questions. We map the obligations on both sides.",
  },
  {
    title: "Regulatory Strategy for India Expansion",
    body: "For international NGOs planning to deepen their India operations, we provide a clear-eyed assessment of the regulatory path — including the political context that most legal advisors avoid.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "TN Chambers — NGO & FCRA Legal Advisory",
  url: "https://tnairchambers.in/ngos",
  description:
    "FCRA registration, compliance, and enforcement defence for international NGOs and foundations operating in India.",
  areaServed: "India",
  serviceType: "FCRA Compliance & NGO Law",
};

export default function NGOsPage() {
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
              "radial-gradient(ellipse 60% 50% at 40% 50%, #e8d8d8 0%, transparent 70%)",
          }}
        />
        <div className="container-site relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-rule" />
            <span className="label">International NGOs · 03</span>
          </div>
          <h1 className="heading-display text-[clamp(2.4rem,6vw,5.5rem)] text-parchment mb-8 max-w-hero text-balance">
            One wrong move costs you
            <br />
            <em className="text-gold-light font-light not-italic">
              your licence to operate.
            </em>
          </h1>
          <p className="text-base md:text-lg text-parchment-dim leading-relaxed max-w-2xl">
            Operating as a foreign NGO in India means navigating FCRA, compliance requirements, and a legal environment that changes faster than most advisories can track.
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
              FCRA is not just paperwork. It is your permission to exist.
            </h2>
          </div>
          <div className="space-y-5 text-parchment-dim leading-relaxed md:pt-16">
            <p>
              The Foreign Contribution (Regulation) Act governs how international NGOs receive and utilise foreign funds in India. The Ministry of Home Affairs administers it with increasing scrutiny. Cancellations, suspensions, and show-cause notices have increased substantially.
            </p>
            <p>
              Most international NGOs discover their compliance gap only when enforcement has already begun. By that point, your operations are frozen, your Indian partners are under pressure, and the legal response needs to be both immediate and correct.
            </p>
            <p>
              We have handled FCRA proceedings at every stage — from registration to enforcement defence. We know what the Ministry is looking for, what triggers investigation, and what it takes to restore operational status.
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
              &ldquo;In FCRA proceedings, timeliness is everything. A correct response filed one day late can cost you the registration entirely. This is not an area where you want to be finding your advocate.&rdquo;
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
        eyebrow="NGO & FCRA Advisory"
        headline="Tell us your situation. We'll tell you your exposure — and your options."
        subtext="A 30-minute call. Whether you are registering for the first time, preparing for renewal, or responding to enforcement, we will give you a direct assessment of where you stand and what needs to happen next."
      />
    </PageLayout>
  );
}
