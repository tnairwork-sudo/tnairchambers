"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

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

export default function AboutContent({ schemaJson }: { schemaJson: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── Hero entrance ──────────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".about-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          ".about-hero-name",
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.4"
        )
        .fromTo(
          ".about-hero-quote",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.5"
        );

      // Hero photo parallax
      gsap.fromTo(
        ".about-hero-photo",
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      // ── Profile bio paragraphs ─────────────────────────────────────
      gsap.fromTo(
        ".bio-para",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bio-section",
            start: "top 78%",
          },
        }
      );

      // Second photo parallax
      gsap.fromTo(
        ".about-photo-2",
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-photo-2-wrap",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        }
      );

      // ── Philosophy section ─────────────────────────────────────────
      gsap.fromTo(
        ".philosophy-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".philosophy-section",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".philosophy-para",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".philosophy-section",
            start: "top 75%",
          },
        }
      );

      // ── Courts grid ────────────────────────────────────────────────
      gsap.fromTo(
        ".court-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".courts-grid",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".courts-resolution",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".courts-resolution",
            start: "top 90%",
          },
        }
      );

      // ── CTA ────────────────────────────────────────────────────────
      gsap.fromTo(
        ".about-cta-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-cta",
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />

      <Nav />

      <main className="pt-16">
        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="about-hero-section grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
          {/* Text */}
          <div className="flex flex-col justify-end pb-16 md:pb-24 pt-20 md:pt-32 px-6 md:pl-16 lg:pl-24 order-2 md:order-1">
            <div className="about-eyebrow flex items-center gap-4 mb-8">
              <div className="gold-rule" />
              <span className="label">The Advocate</span>
            </div>
            <h1 className="about-hero-name heading-display text-[clamp(3rem,5vw,5.5rem)] text-parchment mb-8">
              Tushaar Nair
            </h1>
            <p className="about-hero-quote text-lg text-parchment-dim font-serif font-light italic max-w-sm leading-relaxed">
              &ldquo;Not easy to place in a single category. That is, perhaps, the most important thing to understand about him.&rdquo;
            </p>
          </div>

          {/* Photo */}
          <div className="relative min-h-[60vw] md:min-h-0 order-1 md:order-2 overflow-hidden">
            <Image
              src="/tushaar-1.png"
              alt="Tushaar Nair — Supreme Court Advocate"
              fill
              className="about-hero-photo object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        <div className="container-site">
          <div className="rule" />
        </div>

        {/* ── Profile ─────────────────────────────────────────────── */}
        <section className="bio-section container-site py-20 md:py-28">
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
              <p className="bio-para">
                Tushaar Nair is not easy to place in a single category. That is, perhaps, the most important thing to understand about him. He practices before the Supreme Court of India. He also moves, deliberately and by choice, through a world that extends well beyond law: among founders and families of consequence, among people who build things with their hands and their minds, among those for whom the quality of a room matters as much as what is said in it.
              </p>
              <p className="bio-para">
                He has a serious knowledge of how cloth is constructed and why it matters. He understands music not as background but as a discipline: the relationship between structure and improvisation, between what is written and what is felt. He is drawn to design, to neuroscience, to history, to art, to the question of how human beings actually make decisions under pressure — as opposed to how they imagine they do.
              </p>
              <p className="bio-para">
                These are not hobbies. They are the texture of a mind that refuses to be narrow.
              </p>

              {/* Second photo — inline, editorial */}
              <div className="about-photo-2-wrap relative w-full aspect-[3/4] my-8 overflow-hidden">
                <Image
                  src="/tushaar-2.png"
                  alt="Tushaar Nair"
                  fill
                  className="about-photo-2 object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              <p className="bio-para">
                He has spent years building something rarer than a network. A circle. People who were strangers once and are now, by his careful instinct and patient attention, something closer to family. He brings together, in intimate settings across cities, individuals he has selected not by their credentials but by his read of their character. What emerges from those rooms is not professional alliance. It is friendship: the kind that is unafraid of honesty, that survives disagreement, that calls at difficult moments without waiting to be asked.
              </p>
              <p className="bio-para">
                He is rigorous in a courtroom. He is warm in a room. He has a serious knowledge of how institutions work, how wealth moves across generations and how families fail, how a business built on reputation can be undone in a single poorly considered decision. He reads history not for comfort but for pattern: civilisations, dynasties, enterprises — all subject to the same fractures, the same failure modes, the same pivotal moments where the quality of counsel determined everything.
              </p>
              <p className="bio-para">
                He thinks before most people have finished their sentence. Not because he is impatient. Because he has been trained, in the particular crucible of appellate advocacy, to find the structure beneath the surface of things. To hear what is not being said. To see where the argument will fail before it has been made. His genuine attention is earned, not assumed. When it is given, it is given fully.
              </p>
              <p className="bio-para">
                Loyalty, for him, is not a sentiment. It is a practice. The people in his life know this. It is why they stay.
              </p>
              <p className="bio-para">
                He believes, as a matter of philosophy, that the most durable things are built slowly, selectively, and with full awareness of what they are. He is building this practice with the same hand that built everything else in his life: quietly, precisely, and without apology for the standard he intends to keep.
              </p>
            </div>
          </div>
        </section>

        <div className="container-site">
          <div className="rule" />
        </div>

        {/* ── A Discipline of Thinking ─────────────────────────────── */}
        <section className="philosophy-section container-site py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="philosophy-heading flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="gold-rule" />
                  <span className="label">The Philosophy</span>
                </div>
                <h2 className="heading-section text-2xl md:text-3xl text-parchment leading-snug">
                  A Discipline<br />of Thinking
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-base text-parchment-dim leading-[1.85]">
              <p className="philosophy-para">
                The law, at its best, is not a service industry. It is a discipline of thinking: adversarial, structural, precise, applied to the irreducible messiness of human affairs. A good lawyer does not merely know the rules. A good lawyer knows how systems fail, where documents lie, what the other side is about to argue, and how to build something that holds when everything around it is under pressure.
              </p>
              <p className="philosophy-para">
                What drives this practice, at its foundation, is a conviction about the human mind itself. That the correct application of human intelligence — trained, disciplined, directed with full attention — can solve even the most complex problems the world presents. Legal problems viewed through that lens are transformed entirely. Strategy is no longer reactive. It becomes a cognitive exercise: how does a mind, at its best, outthink the problem before the problem arrives.
              </p>
              <p className="philosophy-para">
                That quality of mind does not begin and end at the courtroom door — whether that room is the Supreme Court, the Punjab & Haryana High Court, the Madras High Court, APTEL, NCLAT, the CAT, or a boardroom where a business advisory or investment decision is being made. This is a practice built to apply it generally.
              </p>
            </div>
          </div>
        </section>

        <div className="container-site">
          <div className="rule" />
        </div>

        {/* ── The Courts and the Table ─────────────────────────────── */}
        <section className="container-site py-20 md:py-28">
          <div className="flex items-center gap-4 mb-14">
            <div className="gold-rule" />
            <span className="label">The Courts & The Table</span>
          </div>

          <div className="courts-grid grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {courts.map((court) => (
              <div
                key={court.name}
                className="court-card bg-ink hover:bg-surface transition-colors duration-300 p-8 md:p-10 flex flex-col gap-4"
              >
                <h3 className="font-serif text-xl md:text-2xl font-light text-parchment">
                  {court.name}
                </h3>
                <p className="text-sm text-parchment-dim leading-relaxed">{court.body}</p>
              </div>
            ))}
          </div>

          <div className="courts-resolution mt-10 pt-10 border-t border-border">
            <p className="font-serif text-xl md:text-2xl font-light text-parchment-dim italic">
              Resolution is the only measure of success.
            </p>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="about-cta bg-surface border-t border-border">
          <div className="container-site py-24 md:py-32">
            <div className="about-cta-content max-w-2xl">
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
              <p className="mt-6 text-xs text-parchment-dim/60 tracking-wide">
                Confidential. Available for clients in all time zones.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
