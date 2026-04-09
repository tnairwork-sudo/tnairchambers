"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const courts = [
  { name: "Supreme Court of India", body: "Constitutional questions, service law, electricity regulation, and matters of national consequence. We do not arrive to participate. We arrive to prevail." },
  { name: "High Courts", sub: "Punjab & Haryana · Madras", body: "Sustained appellate advocacy in civil, service, and regulatory disputes where the quality of argument determines everything." },
  { name: "Tribunals", sub: "APTEL · NCLAT · CAT", body: "The Appellate Tribunal for Electricity, the National Company Law Appellate Tribunal, and the Central Administrative Tribunal. Each forum demands a different register of preparation." },
  { name: "Arbitration & DRT", body: "Commercial disputes, stuck receivables, broken partnerships. The instrument is chosen for its precision, not its drama." },
];

const practices = [
  { href: "/energy", number: "01", label: "Energy & Power", body: "CERC, APTEL, state electricity commissions. Regulatory advocacy for foreign energy companies entering India's power sector." },
  { href: "/entering-india", number: "02", label: "Entering India", body: "Market entry, regulatory compliance, corporate structuring, and ongoing counsel. Business first, law second." },
  { href: "/ngos", number: "03", label: "NGOs & FCRA", body: "FCRA registration, renewals, and compliance advisory for international NGOs and foundations operating in India." },
  { href: "/employers", number: "04", label: "International Employers", body: "Labour law, termination risk, contractor classification, and state-level compliance for companies employing in India." },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ── Hero load sequence ─────────────────────────────────────
    const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });

    heroTl
      .from(".hero-eyebrow", { y: 24, opacity: 0, duration: 1 })
      .from(".hero-line", { y: 80, opacity: 0, duration: 1.2, stagger: 0.12 }, "-=0.6")
      .from(".hero-body p", { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.5")
      .from(".hero-cta", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(".hero-image-wrap", { scale: 1.08, opacity: 0, duration: 1.8, ease: "power3.out" }, 0.2);

    // ── Hero photo parallax on scroll ──────────────────────────
    gsap.to(".hero-image-wrap", {
      yPercent: -18,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // ── Manifesto lines reveal ─────────────────────────────────
    gsap.from(".manifesto-line", {
      y: 60,
      opacity: 0,
      stagger: 0.18,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".manifesto-section",
        start: "top 72%",
      },
    });

    // ── About photo parallax ───────────────────────────────────
    gsap.to(".about-image", {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    // ── About text reveal ──────────────────────────────────────
    gsap.from(".about-text-item", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 65%",
      },
    });

    // ── Philosophy quote reveal ────────────────────────────────
    gsap.from(".philosophy-text", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".philosophy-section",
        start: "top 70%",
      },
    });

    // ── Courts cards stagger ───────────────────────────────────
    gsap.from(".court-card", {
      y: 70,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".courts-section",
        start: "top 70%",
      },
    });

    // ── Practice cards stagger ─────────────────────────────────
    gsap.from(".practice-card", {
      y: 70,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".practices-section",
        start: "top 70%",
      },
    });

    // ── Section labels & rules ─────────────────────────────────
    gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
      gsap.from(el, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    // ── CTA section ────────────────────────────────────────────
    gsap.from(".cta-content", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 70%",
      },
    });
  }, { scope: containerRef });

  return (
    <>
      <Nav />
      <div ref={containerRef}>
        <main>

          {/* ── HERO ─────────────────────────────────────────────── */}
          <section className="hero-section relative min-h-screen flex overflow-hidden bg-ink">
            {/* Left — text */}
            <div className="relative z-10 flex flex-col justify-end pb-16 md:pb-24 pt-32 w-full md:w-[48%] px-6 md:pl-16 lg:pl-24">
              <div className="hero-eyebrow flex items-center gap-4 mb-10">
                <div className="gold-rule" />
                <span className="label">Supreme Court of India · New Delhi</span>
              </div>

              <h1 className="mb-10">
                <div className="overflow-hidden">
                  <div className="hero-line heading-display text-[clamp(2.6rem,5.5vw,5.2rem)] text-parchment leading-[1.05]">
                    The right argument,
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="hero-line heading-display text-[clamp(2.6rem,5.5vw,5.2rem)] text-gold-light leading-[1.05] italic not-italic font-light">
                    made precisely,
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="hero-line heading-display text-[clamp(2.6rem,5.5vw,5.2rem)] text-parchment leading-[1.05]">
                    changes everything.
                  </div>
                </div>
              </h1>

              <div className="hero-body max-w-md mb-10 space-y-4">
                <p className="text-base text-parchment-dim leading-relaxed">
                  TN Chambers is a Supreme Court advocate practice built on one belief — the right argument, made precisely, changes everything.
                </p>
                <p className="text-base text-parchment leading-relaxed font-light">
                  We don&apos;t wait to be found. We already know your problem.
                </p>
              </div>

              <div className="hero-cta">
                <a href="tel:+918595203751" className="btn-primary">
                  Call +91 85952 03751
                  <span className="text-base leading-none" aria-hidden>→</span>
                </a>
              </div>
            </div>

            {/* Right — photo */}
            <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full overflow-hidden">
              <div className="hero-image-wrap w-full h-[115%] -top-[8%] absolute">
                <Image
                  src="/tushaar-1.png"
                  alt="Tushaar Nair — Supreme Court Advocate"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="55vw"
                />
                {/* Gradient fade on left edge */}
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent w-[40%]" />
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
              <div className="w-px h-12 bg-parchment-dim animate-[pulse_2s_ease-in-out_infinite]" />
            </div>
          </section>

          {/* ── MANIFESTO ────────────────────────────────────────── */}
          <section className="manifesto-section bg-surface border-y border-border py-28 md:py-40">
            <div className="container-site max-w-4xl">
              <div className="overflow-hidden mb-2">
                <p className="manifesto-line font-serif text-[clamp(1.6rem,3.5vw,3rem)] font-light text-parchment leading-[1.3]">
                  We operate at the intersection of electricity regulation,
                </p>
              </div>
              <div className="overflow-hidden mb-2">
                <p className="manifesto-line font-serif text-[clamp(1.6rem,3.5vw,3rem)] font-light text-parchment leading-[1.3]">
                  arbitration, and cross-border advisory
                </p>
              </div>
              <div className="overflow-hidden mb-8">
                <p className="manifesto-line font-serif text-[clamp(1.6rem,3.5vw,3rem)] font-light text-gold-light italic leading-[1.3]">
                  for companies navigating India&apos;s legal architecture.
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="manifesto-line text-base text-parchment-dim leading-relaxed max-w-xl">
                  We don&apos;t wait to be found. We already know your problem.
                </p>
              </div>
            </div>
          </section>

          {/* ── TUSHAAR TEASER ───────────────────────────────────── */}
          <section className="about-section relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-ink">
            {/* Text */}
            <div className="relative z-10 flex flex-col justify-center py-24 md:py-32 w-full md:w-[50%] px-6 md:pl-16 lg:pl-24 md:pr-16">
              <div className="about-text-item flex items-center gap-4 mb-8">
                <div className="gold-rule" />
                <span className="label">The Advocate</span>
              </div>
              <h2 className="about-text-item heading-display text-[clamp(2.4rem,5vw,4.5rem)] text-parchment mb-8">
                Tushaar Nair
              </h2>
              <div className="about-text-item space-y-5 text-parchment-dim leading-relaxed text-base max-w-md mb-10">
                <p>
                  He practices before the Supreme Court of India. He thinks before most people have finished their sentence — not because he is impatient, but because he has been trained, in the particular crucible of appellate advocacy, to find the structure beneath the surface of things.
                </p>
                <p>
                  To hear what is not being said. To see where the argument will fail before it has been made.
                </p>
              </div>
              <div className="about-text-item">
                <Link href="/about" className="inline-flex items-center gap-3 label text-gold hover:text-gold-light transition-colors duration-300">
                  Full Profile →
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="relative w-full md:w-[50%] min-h-[60vw] md:min-h-0 overflow-hidden">
              <div className="about-image absolute inset-0 scale-110">
                <Image
                  src="/tushaar-2.png"
                  alt="Tushaar Nair"
                  fill
                  className="object-cover object-top"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            </div>
          </section>

          {/* ── PHILOSOPHY PULL QUOTE ────────────────────────────── */}
          <section className="philosophy-section bg-surface-2 border-y border-border py-24 md:py-36">
            <div className="container-site">
              <blockquote className="philosophy-text max-w-4xl">
                <p className="font-serif text-[clamp(1.5rem,3vw,2.6rem)] font-light italic text-parchment leading-[1.4] mb-8">
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

          {/* ── COURTS & TABLE ───────────────────────────────────── */}
          <section className="courts-section container-site py-24 md:py-32">
            <div className="reveal-up flex items-center gap-4 mb-14">
              <div className="gold-rule" />
              <span className="label">The Courts & The Table</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {courts.map((court) => (
                <div key={court.name} className="court-card bg-ink hover:bg-surface transition-colors duration-500 p-8 md:p-10 flex flex-col gap-3">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-light text-parchment">{court.name}</h3>
                    {court.sub && <p className="label text-parchment-dim/50 mt-1">{court.sub}</p>}
                  </div>
                  <p className="text-sm text-parchment-dim leading-relaxed">{court.body}</p>
                </div>
              ))}
            </div>
            <div className="reveal-up mt-10 pt-10 border-t border-border">
              <p className="font-serif text-xl text-parchment-dim italic">Resolution is the only measure of success.</p>
            </div>
          </section>

          {/* ── MARQUEE ──────────────────────────────────────────── */}
          <div className="border-y border-border py-4 overflow-hidden">
            <div className="flex gap-16 whitespace-nowrap opacity-20">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="label text-parchment">
                  Supreme Court · APTEL · NCLAT · CAT · Arbitration · Cross-Border Advisory · FCRA · Labour Law ·&nbsp;
                </span>
              ))}
            </div>
          </div>

          {/* ── INTERNATIONAL ADVISORY ───────────────────────────── */}
          <section className="practices-section container-site py-24 md:py-32">
            <div className="reveal-up flex items-center gap-4 mb-14">
              <div className="gold-rule" />
              <span className="label">International Advisory</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {practices.map((p) => (
                <Link key={p.href} href={p.href} className="practice-card group bg-ink hover:bg-surface transition-colors duration-500 p-8 md:p-10 flex flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <span className="label text-parchment-dim/30">{p.number}</span>
                    <span className="label group-hover:text-gold transition-colors duration-300">View →</span>
                  </div>
                  <div>
                    <h2 className="heading-section text-2xl md:text-3xl text-parchment mb-3">{p.label}</h2>
                    <p className="text-sm text-parchment-dim leading-relaxed">{p.body}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────── */}
          <section className="cta-section bg-surface border-t border-border min-h-[60vh] flex items-center">
            <div className="container-site py-24 md:py-32 w-full">
              <div className="cta-content max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="gold-rule" />
                  <span className="label">Contact</span>
                </div>
                <h2 className="heading-display text-[clamp(2.4rem,5vw,4.8rem)] text-parchment mb-10 text-balance leading-[1.05]">
                  Tell us your problem.<br />
                  <em className="text-gold-light font-light not-italic">We&apos;ll tell you if we&apos;re the right people to solve it.</em>
                </h2>
                <a href="tel:+918595203751" className="btn-primary">
                  Call +91 85952 03751
                  <span className="text-base leading-none" aria-hidden>→</span>
                </a>
                <p className="mt-6 text-xs text-parchment-dim/50 tracking-wide">
                  Confidential. Available for clients in all time zones.
                </p>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
