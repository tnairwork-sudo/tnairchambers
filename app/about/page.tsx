import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Tushaar Nair — Supreme Court Advocate",
  description:
    "Tushaar Nair practices before the Supreme Court of India. A discipline of thinking applied to electricity regulation, arbitration, and cross-border advisory — at the highest levels.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Tushaar Nair — Supreme Court Advocate | TN Chambers",
    description:
      "Tushaar Nair is not easy to place in a single category. That is, perhaps, the most important thing to understand about him.",
    url: "https://tnairchambers.in/about",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tushaar Nair",
  jobTitle: "Supreme Court Advocate",
  worksFor: {
    "@type": "LegalService",
    name: "TN Chambers",
    url: "https://tnairchambers.in",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "135, Additional Building Complex, Supreme Court of India, Tilak Marg",
    addressLocality: "New Delhi",
    postalCode: "110001",
    addressCountry: "IN",
  },
  url: "https://tnairchambers.in/about",
};

const courts = [
  {
    name: "Supreme Court of India",
    body: "We argue matters that require the highest order of preparation and the clearest possible thinking under pressure — constitutional questions, service law, electricity regulation, and matters of national consequence. We do not arrive to participate. We arrive to prevail.",
  },
  {
    name: "High Courts — Punjab & Haryana, Madras",
    body: "We appear before these courts in matters requiring sustained appellate advocacy: civil, service, and regulatory disputes where the quality of argument determines everything.",
  },
  {
    name: "Tribunals — APTEL, NCLAT, CAT",
    body: "We practice before the Appellate Tribunal for Electricity, the National Company Law Appellate Tribunal, and the Central Administrative Tribunal. Each forum demands a different register of preparation. We bring all three.",
  },
  {
    name: "Arbitration & DRT",
    body: "We resolve what others have allowed to fester — commercial disputes, stuck receivables, broken partnerships. The instrument is chosen for its precision, not its drama.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
        {/* Text */}
        <div className="flex flex-col justify-end pb-16 md:pb-24 pt-20 md:pt-32 px-6 md:pl-16 lg:pl-24 order-2 md:order-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-rule" />
            <span className="label">The Advocate</span>
          </div>
          <h1 className="heading-display text-[clamp(2.8rem,5vw,5rem)] text-parchment mb-8 text-balance">
            Tushaar Nair
          </h1>
          <p className="text-lg text-parchment-dim font-serif font-light italic max-w-sm leading-relaxed">
            &ldquo;Not easy to place in a single category. That is, perhaps, the most important thing to understand about him.&rdquo;
          </p>
        </div>
        {/* Photo */}
        <div className="relative min-h-[60vw] md:min-h-0 order-1 md:order-2 overflow-hidden">
          <Image
            src="/tushaar-1.png"
            alt="Tushaar Nair — Supreme Court Advocate"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <div className="container-site"><div className="rule" /></div>

      {/* ── Profile ──────────────────────────────────────────────── */}
      <section className="container-site py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-rule" />
              <span className="label">Profile</span>
            </div>
            <p className="font-serif text-2xl font-light text-parchment leading-snug">
              Supreme Court<br />of India
            </p>
            <p className="mt-4 text-sm text-parchment-dim">
              135, Additional Building Complex<br />
              Tilak Marg, New Delhi – 110001
            </p>
          </div>

          <div className="space-y-6 text-base text-parchment-dim leading-[1.85]">
            <p>
              Tushaar Nair is not easy to place in a single category. That is, perhaps, the most important thing to understand about him. He practices before the Supreme Court of India. He also moves, deliberately and by choice, through a world that extends well beyond law: among founders and families of consequence, among people who build things with their hands and their minds, among those for whom the quality of a room matters as much as what is said in it.
            </p>
            <p>
              He has a serious knowledge of how cloth is constructed and why it matters. He understands music not as background but as a discipline: the relationship between structure and improvisation, between what is written and what is felt. He is drawn to design, to neuroscience, to history, to art, to the question of how human beings actually make decisions under pressure — as opposed to how they imagine they do.
            </p>
            <p>
              These are not hobbies. They are the texture of a mind that refuses to be narrow.
            </p>

            {/* Second photo — inline, editorial */}
            <div className="relative w-full aspect-[3/4] my-8 overflow-hidden">
              <Image
                src="/tushaar-2.png"
                alt="Tushaar Nair"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <p>
              He has spent years building something rarer than a network. A circle. People who were strangers once and are now, by his careful instinct and patient attention, something closer to family. He brings together, in intimate settings across cities, individuals he has selected not by their credentials but by his read of their character. What emerges from those rooms is not professional alliance. It is friendship: the kind that is unafraid of honesty, that survives disagreement, that calls at difficult moments without waiting to be asked.
            </p>
            <p>
              He is rigorous in a courtroom. He is warm in a room. He has a serious knowledge of how institutions work, how wealth moves across generations and how families fail, how a business built on reputation can be undone in a single poorly considered decision. He reads history not for comfort but for pattern: civilisations, dynasties, enterprises — all subject to the same fractures, the same failure modes, the same pivotal moments where the quality of counsel determined everything.
            </p>
            <p>
              He thinks before most people have finished their sentence. Not because he is impatient. Because he has been trained, in the particular crucible of appellate advocacy, to find the structure beneath the surface of things. To hear what is not being said. To see where the argument will fail before it has been made. His genuine attention is earned, not assumed. When it is given, it is given fully.
            </p>
            <p>
              Loyalty, for him, is not a sentiment. It is a practice. The people in his life know this. It is why they stay.
            </p>
            <p>
              He believes, as a matter of philosophy, that the most durable things are built slowly, selectively, and with full awareness of what they are. He is building this practice with the same hand that built everything else in his life: quietly, precisely, and without apology for the standard he intends to keep.
            </p>
          </div>
        </div>
      </section>

      <div className="container-site"><div className="rule" /></div>

      {/* ── A Discipline of Thinking ─────────────────────────────── */}
      <section className="container-site py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-rule" />
              <span className="label">The Philosophy</span>
            </div>
            <h2 className="heading-section text-2xl md:text-3xl text-parchment leading-snug">
              A Discipline<br />of Thinking
            </h2>
          </div>

          <div className="space-y-6 text-base text-parchment-dim leading-[1.85]">
            <p>
              The law, at its best, is not a service industry. It is a discipline of thinking: adversarial, structural, precise, applied to the irreducible messiness of human affairs. A good lawyer does not merely know the rules. A good lawyer knows how systems fail, where documents lie, what the other side is about to argue, and how to build something that holds when everything around it is under pressure.
            </p>
            <p>
              What drives this practice, at its foundation, is a conviction about the human mind itself. That the correct application of human intelligence — trained, disciplined, directed with full attention — can solve even the most complex problems the world presents. Legal problems viewed through that lens are transformed entirely. Strategy is no longer reactive. It becomes a cognitive exercise: how does a mind, at its best, outthink the problem before the problem arrives.
            </p>
            <p>
              That quality of mind does not begin and end at the courtroom door — whether that room is the Supreme Court, the Punjab & Haryana High Court, the Madras High Court, APTEL, NCLAT, the CAT, or a boardroom where a business advisory or investment decision is being made. This is a practice built to apply it generally.
            </p>
          </div>
        </div>
      </section>

      <div className="container-site"><div className="rule" /></div>

      {/* ── The Courts and the Table ─────────────────────────────── */}
      <section className="container-site py-20 md:py-28">
        <div className="flex items-center gap-4 mb-14">
          <div className="gold-rule" />
          <span className="label">The Courts & The Table</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {courts.map((court) => (
            <div
              key={court.name}
              className="bg-ink hover:bg-surface transition-colors duration-300 p-8 md:p-10 flex flex-col gap-4"
            >
              <h3 className="font-serif text-xl md:text-2xl font-light text-parchment">
                {court.name}
              </h3>
              <p className="text-sm text-parchment-dim leading-relaxed">{court.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-10 border-t border-border">
          <p className="font-serif text-xl md:text-2xl font-light text-parchment-dim italic">
            Resolution is the only measure of success.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border">
        <div className="container-site py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="gold-rule" />
              <span className="label">Contact</span>
            </div>
            <h2 className="heading-section text-4xl md:text-5xl text-parchment mb-10 text-balance">
              If you have a problem worth solving, call.
            </h2>
            <a href="tel:+918595203751" className="btn-primary">
              +91 85952 03751
              <span className="text-base leading-none" aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
