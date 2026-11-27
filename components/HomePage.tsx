"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BigDinner from "@/components/BigDinner";
import ContactReveal from "@/components/ContactReveal";
import ReelsGrid from "@/components/ReelsGrid";
import ValuesStrip from "@/components/ValuesStrip";
import { sectorAreas, sectorHeadline, sectorStatement, scometHomeList } from "@/lib/aerospace-copy";
import { instagramReels } from "@/lib/instagram-reels";
import { firmInstagram } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const courts = [
  { name: "Supreme Court of India", body: "Constitutional questions, service law, electricity regulation, and matters of national consequence. We do not arrive to participate. We arrive to prevail." },
  { name: "High Courts", sub: "Delhi · Punjab & Haryana · Madras", body: "Sustained appellate advocacy in civil, service, and regulatory disputes where the quality of argument determines everything." },
  { name: "Tribunals", sub: "APTEL · NCLAT · CAT", body: "The Appellate Tribunal for Electricity, the National Company Law Appellate Tribunal, and the Central Administrative Tribunal. Each forum demands a different register of preparation." },
  { name: "Arbitration & DRT", body: "Commercial disputes, stuck receivables, broken partnerships. The instrument is chosen for its precision, not its drama." },
];

const practices = [
  { href: "/energy", number: "01", label: "Energy & Power", body: "CERC, APTEL, state electricity commissions. Regulatory advocacy for foreign energy companies entering India's power sector." },
  { href: "/entering-india", number: "02", label: "Entering India", body: "Market entry, regulatory compliance, corporate structuring, and ongoing counsel. Business first, law second." },
  { href: "/ngos", number: "03", label: "NGOs & FCRA", body: "FCRA registration, renewals, and compliance advisory for international NGOs and foundations operating in India." },
  { href: "/employers", number: "04", label: "International Employers", body: "Labour law, termination risk, contractor classification, and state-level compliance for companies employing in India." },
];

const teams: { name: string; line: string; href?: string; featured?: boolean }[] = [
  {
    name: "Electricity & Power",
    href: "/energy",
    featured: true,
    line: "Regulatory, tariff, and power purchase agreement disputes before electricity regulatory commissions and APTEL, by a dedicated team.",
  },
  { name: "Legal Advisory", line: "Legal questions in a commercial or institutional matter, by a dedicated team." },
  { name: "Corporate Advisory", line: "Corporate structure, governance, and the documents of a business, by a separate team." },
  { name: "Policy & Regulatory Advisory", line: "Statutes, regulators, and sector policy, advised upon by a dedicated team." },
  { name: "Courtroom Litigation", line: "Advocacy before the Supreme Court of India, the Delhi High Court and the Punjab & Haryana High Court, and before tribunals, by a dedicated team." },
  { name: "Management Consultancy", line: "Management questions, delivered by a dedicated team with our strategic alliances and partner firms." },
  { name: "Investment Banking", line: "Investment banking work, delivered by a dedicated team with our strategic alliances and partner firms." },
  { name: "Mergers & Acquisitions", line: "The work of mergers and acquisitions, delivered by a dedicated team." },
  { name: "Intellectual Property", line: "Intellectual property advisory, delivered by a separate team." },
  { name: "Business Expansion, Growth & Strategic Negotiation", line: "Expansion, growth, and negotiation, delivered by a dedicated team." },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Hero load sequence ─────────────────────────────────────
    if (!reduceMotion) {
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl
        .from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.9 })
        .from(".hero-line", { y: 48, opacity: 0, duration: 1.1, stagger: 0.12 }, "-=0.55")
        .from(".hero-body p", { y: 24, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.45")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.9 }, "-=0.4")
        .from(".hero-image-wrap", { scale: 1.04, opacity: 0, duration: 1.2 }, 0.2);

      gsap.to(".hero-image-inner", {
        scale: 1.04,
        duration: 40,
        ease: "none",
      });
    }

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
      stagger: 0.12,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".manifesto-section",
        start: "top 72%",
      },
    });

    // ── Practice teams ─────────────────────────────────────────
    gsap.from(".team-card", {
      y: 70,
      opacity: 0,
      stagger: 0.08,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".teams-section",
        start: "top 70%",
      },
    });

    gsap.from(".alliances-copy", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".alliances-section",
        start: "top 75%",
      },
    });

    // ── About section fade-in ──────────────────────────────────
    // (no parallax on this photo: fixed position to keep face visible)

    // ── About text reveal ──────────────────────────────────────
    gsap.from(".about-text-item", {
      y: 40,
      opacity: 0,
      stagger: 0.12,
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
    if (!reduceMotion) {
      gsap.from(".sector-tile", {
        y: 36,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".sector-section",
          start: "top 72%",
        },
      });

      gsap.from(".scomet-home", {
        y: 32,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".scomet-home",
          start: "top 75%",
        },
      });
    }

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
          <section className="hero-section chapter-dark relative flex min-h-screen overflow-hidden bg-parchment text-ink">
            <div className="hero-image-wrap absolute inset-x-0 top-0 h-[120%]">
              <div className="hero-image-inner absolute inset-0">
                <Image
                  src="/images/aerospace/hero-limb-mobile.webp"
                  alt="The Moon above the curve of the Earth, with a bright band of atmosphere and cloud, photographed from orbit"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover md:hidden"
                />
                <Image
                  src="/images/aerospace/hero-limb.webp"
                  alt="The Moon above the curve of the Earth, with a bright band of atmosphere and cloud, photographed from orbit"
                  fill
                  priority
                  sizes="100vw"
                  className="hidden object-cover md:block"
                />
              </div>
            </div>
            <div className="hero-scrim absolute inset-0" />

            <div className="relative z-10 flex w-full flex-col justify-end px-s3 pb-s6 pt-s8 md:w-[48%] md:pb-s7 md:pl-s6 lg:pb-s8 lg:pl-s6">
              <div className="hero-eyebrow kicker mb-s5">
                <div className="gold-rule" />
                <span className="label !text-gold">Advocates &amp; Consultants · New Delhi</span>
              </div>

              <h1 className="mb-s5">
                <div className="flow-root mb-s4 md:mb-s5">
                  <div className="line-mask text-[clamp(1.65rem,2.6vw,2.35rem)]">
                    <div className="hero-line heading-display leading-none text-ink">
                      Tushar Nair
                      <span className="font-light text-ink"> · </span>
                      <span className="italic font-light text-ink">Nair &amp; Co</span>
                    </div>
                  </div>
                </div>
                <div className="flow-root">
                  <div className="line-mask text-[clamp(2.4rem,5vw,4.8rem)]">
                    <div className="hero-line heading-display leading-[1.2] text-ink">
                      Everything
                    </div>
                  </div>
                </div>
                <div className="flow-root mt-s1">
                  <div className="line-mask text-[clamp(2.4rem,5vw,4.8rem)]">
                    <div className="hero-line heading-display font-light leading-[1.2] text-ink">
                      a client needs,
                    </div>
                  </div>
                </div>
                <div className="flow-root mt-s1">
                  <div className="line-mask text-[clamp(2.4rem,5vw,4.8rem)]">
                    <div className="hero-line heading-display leading-[1.2] text-ink">
                      under one roof.
                    </div>
                  </div>
                </div>
              </h1>

              <div className="hero-body mb-s5 max-w-md space-y-s2">
                <p className="body-copy text-ink/75">
                  Nair &amp; Co, Advocates &amp; Consultants. The New Delhi practice of Tushaar Nair, an advocate practising before the Supreme Court of India, the Delhi High Court and the Punjab &amp; Haryana High Court. Each service is delivered by a dedicated, separate team.
                </p>
                <p className="body-copy font-light text-ink">
                  Management consultancy and investment banking are delivered with our strategic alliances and partner firms.
                </p>
              </div>

              <div className="hero-cta">
                <ContactReveal className="w-full justify-center md:w-auto" />
              </div>
              <p className="mt-s3 text-[12px] tracking-[0.08em] text-ink/70">Image: NASA</p>
            </div>
          </section>

          {/* ── MANIFESTO ────────────────────────────────────────── */}
          <section className="manifesto-section relative overflow-hidden border-y border-border bg-surface py-s7 md:py-s8">
            <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-s2 bg-gradient-to-l from-antique/20 to-transparent md:w-s4" />
            <div className="container-site max-w-4xl">
              <div className="overflow-hidden mb-2">
                <p className="manifesto-line font-serif text-[clamp(1.6rem,3.5vw,3rem)] font-light text-parchment leading-[1.3]">
                  Legal work, corporate work, policy,
                </p>
              </div>
              <div className="overflow-hidden mb-2">
                <p className="manifesto-line font-serif text-[clamp(1.6rem,3.5vw,3rem)] font-light text-parchment leading-[1.3]">
                  the courtroom, and what sits beside them.
                </p>
              </div>
              <div className="overflow-hidden mb-8">
                <p className="manifesto-line font-serif text-[clamp(1.6rem,3.5vw,3rem)] font-light text-parchment italic leading-[1.3]">
                  A dedicated team for each.
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="manifesto-line text-base text-parchment-dim leading-relaxed max-w-xl">
                  Nair &amp; Co, Advocates &amp; Consultants, is the New Delhi practice of Tushaar Nair, an advocate practising before the Supreme Court of India, the Delhi High Court and the Punjab &amp; Haryana High Court. Legal advisory, corporate advisory, policy and regulatory advisory, courtroom litigation, electricity and power, mergers and acquisitions, intellectual property, and business expansion are each the work of a separate team. Management consultancy and investment banking are delivered by dedicated teams, with our strategic alliances and partner firms.
                </p>
              </div>
            </div>
          </section>

          <section className="sector-section chapter-dark bg-parchment text-ink">
            <div className="container-site py-s7 md:py-s8">
              <div className="kicker mb-s3">
                <div className="gold-rule" />
                <span className="label !text-gold">Space, Aerospace and Defence</span>
              </div>
              <h2 className="heading-display max-w-hero text-[clamp(2rem,4vw,3.5rem)] text-ink">
                {sectorHeadline}
              </h2>
              <p className="body-copy mt-s3 max-w-3xl text-ink/80">{sectorStatement}</p>
              <figure className="mt-s6">
                <div className="relative aspect-video">
                  <Image
                    src="/images/aerospace/atmosphere.webp"
                    alt="Earth's atmosphere at an orbital sunrise, a thin bright band above the cloud deck"
                    fill
                    sizes="(min-width: 1024px) 1100px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-s2 text-[12px] tracking-[0.08em] text-ink/70">
                  Image: NASA
                </figcaption>
              </figure>
              <div className="mt-s6 grid grid-cols-1 gap-s3 md:grid-cols-2 md:gap-s4 lg:grid-cols-3">
                {sectorAreas.map((area) => (
                  <Link
                    key={area.id}
                    href={area.href}
                    className="sector-tile border-t border-gold/40 bg-graphite p-s4 md:p-s5"
                  >
                    <h3 className="font-serif text-[24px] font-light text-ink">{area.title}</h3>
                    <p className="body-copy mt-s3 text-ink/80">{area.sentences[0]}</p>
                  </Link>
                ))}
              </div>
              <Link
                href="/space-aerospace-defence"
                className="mt-s6 inline-flex min-h-12 items-center font-serif text-[20px] text-ink"
              >
                Space, Aerospace and Defence →
              </Link>
            </div>
          </section>

          <section className="scomet-home bg-surface">
            <div className="container-site py-s7 md:py-s8">
              <div className="grid gap-s6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end">
                <div>
                  <div className="kicker mb-s3">
                    <div className="gold-rule" />
                    <span className="label">SCOMET Cell</span>
                  </div>
                  <h2 className="heading-display text-[clamp(2rem,4vw,3.5rem)] text-parchment">
                    From classification to the completed file.
                  </h2>
                  <p className="body-copy mt-s3 max-w-2xl text-parchment-dim">
                    The in-house SCOMET Cell advises on export authorisation for sensitive goods, software and technology under India&apos;s SCOMET list, and prepares the documents that go with an application.
                  </p>
                </div>
                <ul className="grid gap-s2">
                  {scometHomeList.map((item) => (
                    <li key={item} className="border-t border-antique pt-s2 text-base text-parchment">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-s6 flex flex-col gap-s2 md:flex-row md:items-center md:gap-s5">
                <Link
                  href="/scomet"
                  className="inline-flex min-h-12 items-center font-serif text-[20px] text-parchment"
                >
                  The SCOMET Cell →
                </Link>
                <Link
                  href="/guides/scomet-crash-course"
                  className="inline-flex min-h-12 items-center text-base text-parchment-dim underline decoration-antique underline-offset-4"
                >
                  Read the SCOMET crash course
                </Link>
              </div>
            </div>
          </section>

          <section className="chapter-dark bg-parchment text-ink">
            <div className="container-site py-s7 md:py-s8">
              <div className="mb-s5 flex flex-col gap-s3 md:mb-s6 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="kicker mb-s3">
                    <div className="gold-rule" />
                    <span className="label !text-gold">Instagram</span>
                  </div>
                  <h2 className="heading-display text-[clamp(2rem,4vw,3.5rem)]">Notes on film.</h2>
                  <p className="body-copy mt-s3 max-w-2xl text-ink/80">
                    Short films from the Nair &amp; Co Instagram, on aircraft, engines, orbit and the industries around them.
                  </p>
                </div>
                <div className="flex flex-col gap-s1">
                  <a
                    href={firmInstagram}
                    className="inline-flex min-h-12 items-center text-ink underline decoration-gold/60 underline-offset-4"
                  >
                    Follow @nairandco
                  </a>
                  <Link href="/reels" className="inline-flex min-h-12 items-center font-serif text-[20px] text-ink">
                    All reels →
                  </Link>
                </div>
              </div>
              <ReelsGrid reels={instagramReels.slice(0, 4)} layout="strip" />
            </div>
          </section>

          {/* ── WHAT WE DO ───────────────────────────────────────── */}
          <section id="what-we-do" aria-labelledby="what-we-do-label" className="teams-section container-site py-s7 md:py-s8">
            <div className="reveal-up kicker mb-6">
              <div className="gold-rule" />
              <span id="what-we-do-label" className="label">What We Do</span>
            </div>
            <p className="reveal-up body-copy mb-s5 max-w-2xl text-parchment-dim md:mb-s6">
              Ten practice teams, each separate from the others. Management consultancy and investment banking are delivered with our strategic alliances and partner firms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {teams.map((team, index) => {
                const className = `team-card group flex flex-col gap-s3 bg-ink p-s4 transition-colors duration-500 hover:bg-surface md:p-s5 ${
                  team.featured ? "md:col-span-2 lg:col-span-3 md:flex-row md:items-end md:justify-between" : ""
                }`;
                const inner = (
                  <>
                    <div className="flex flex-col gap-4 max-w-3xl">
                      <span className="label text-parchment-dim/30">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h2 className="font-serif text-xl md:text-2xl font-light text-parchment mb-4">{team.name}</h2>
                        <p className="text-base leading-[1.65] text-parchment-dim">{team.line}</p>
                      </div>
                    </div>
                    {team.href && <span className="label group-hover:text-parchment transition-colors duration-300">View →</span>}
                  </>
                );
                return team.href ? (
                  <Link key={team.name} href={team.href} className={className}>
                    {inner}
                  </Link>
                ) : (
                  <div key={team.name} className={className}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── ALLIANCES ────────────────────────────────────────── */}
          <section id="alliances" aria-labelledby="alliances-label" className="alliances-section border-y border-border bg-surface">
            <div className="container-site py-s7 md:py-s8">
              <div className="alliances-copy">
                <div className="kicker mb-10">
                  <div className="gold-rule" />
                  <span id="alliances-label" className="label">Alliances</span>
                </div>
                <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif font-light text-[clamp(2rem,4.2vw,3.6rem)] text-parchment leading-[1.15] tracking-tight">
                  {["GCC", "UK", "Europe", "Americas"].map((region, index) => (
                    <span key={region} className="inline-flex items-baseline gap-4">
                      {region}
                      {index < 3 && <span className="text-parchment-dim" aria-hidden="true">·</span>}
                    </span>
                  ))}
                </p>
                <p className="mt-8 max-w-2xl text-base text-parchment-dim leading-relaxed">
                  Strategic alliances and partner firms in investment banking and management consultancy across these regions, with further strategic tie-ups around the world. Both are delivered by dedicated teams.
                </p>
              </div>
            </div>
          </section>

          {/* ── TUSHAAR TEASER ───────────────────────────────────── */}
          <section className="about-section relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-ink">
            {/* Text */}
            <div className="relative z-10 flex w-full flex-col justify-center px-s3 py-s7 md:w-[50%] md:py-s8 md:pl-s6 md:pr-s6 lg:pl-s6">
              <div className="about-text-item kicker mb-8">
                <div className="gold-rule" />
                <span className="label">The Advocate</span>
              </div>
              <h2 className="about-text-item heading-display text-[clamp(2.4rem,5vw,4.5rem)] text-parchment mb-8">
                Tushaar Nair
              </h2>
              <div className="about-text-item space-y-5 text-parchment-dim leading-relaxed text-base max-w-md mb-10">
                <p>
                  He practises before the Supreme Court of India, the Delhi High Court and the Punjab &amp; Haryana High Court, and leads Nair &amp; Co, Advocates &amp; Consultants, in New Delhi. Each service is delivered by a dedicated, separate team. Management consultancy and investment banking are delivered with strategic alliances and partner firms.
                </p>
                <p>
                  He thinks before most people have finished their sentence, not because he is impatient, but because he has been trained, in the particular crucible of appellate advocacy, to find the structure beneath the surface of things.
                </p>
                <p>
                  To hear what is not being said. To see where the argument will fail before it has been made.
                </p>
              </div>
              <div className="about-text-item">
                <Link href="/about" className="inline-flex items-center gap-3 label text-parchment underline decoration-accent underline-offset-4 transition-colors duration-300">
                  Full Profile →
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="relative w-full md:w-[50%] min-h-[60vw] md:min-h-0 overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/tushaar-2.png"
                  alt="Tushar Nair (Tushaar Nair)"
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
              </div>
            </div>
          </section>

          {/* ── PHILOSOPHY PULL QUOTE ────────────────────────────── */}
          <section className="philosophy-section border-y border-border bg-surface-2 py-s7 md:py-s8">
            <div className="container-site">
              <blockquote className="philosophy-text max-w-4xl">
                <p className="font-serif text-[clamp(1.5rem,3vw,2.6rem)] font-light italic text-parchment leading-[1.4] mb-8">
                  &ldquo;The law, at its best, is not a service industry. It is a discipline of thinking: adversarial, structural, precise, applied to the irreducible messiness of human affairs.&rdquo;
                </p>
                <footer className="kicker">
                  <div className="gold-rule" />
                  <Link href="/about" className="label hover:text-parchment transition-colors duration-200">
                    A Discipline of Thinking →
                  </Link>
                </footer>
              </blockquote>
            </div>
          </section>

          <BigDinner />

          {/* ── COURTS & TABLE ───────────────────────────────────── */}
          <section className="courts-section container-site py-s7 md:py-s8">
            <div className="reveal-up kicker mb-14">
              <div className="gold-rule" />
              <span className="label">The Courts & The Table</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {courts.map((court) => (
                <div key={court.name} className="court-card flex flex-col gap-s3 bg-ink p-s4 transition-colors duration-500 hover:bg-surface md:p-s5">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-light text-parchment">{court.name}</h3>
                    {court.sub && <p className="label text-parchment-dim/50 mt-1">{court.sub}</p>}
                  </div>
                  <p className="text-base leading-[1.65] text-parchment-dim">{court.body}</p>
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
          <section className="practices-section container-site py-s7 md:py-s8">
            <div className="reveal-up kicker mb-14">
              <div className="gold-rule" />
              <span className="label">International Advisory</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {practices.map((p) => (
                <Link key={p.href} href={p.href} className="practice-card group flex flex-col gap-s3 bg-ink p-s4 transition-colors duration-500 hover:bg-surface md:p-s5">
                  <div className="flex items-start justify-between">
                    <span className="label text-parchment-dim/30">{p.number}</span>
                    <span className="label group-hover:text-parchment transition-colors duration-300">View →</span>
                  </div>
                  <div>
                    <h2 className="heading-section text-2xl md:text-3xl text-parchment mb-3">{p.label}</h2>
                    <p className="text-base leading-[1.65] text-parchment-dim">{p.body}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────── */}
          <section className="cta-section bg-surface border-t border-border min-h-[60vh] flex items-center">
            <div className="container-site w-full py-s7 md:py-s8">
              <div className="cta-content max-w-3xl">
                <div className="kicker mb-8">
                  <div className="gold-rule" />
                  <span className="label">Contact</span>
                </div>
                <h2 className="heading-display text-[clamp(2.4rem,5vw,4.8rem)] text-parchment mb-10 text-balance leading-[1.05]">
                  Tell us your problem.<br />
                  <em className="text-parchment font-light not-italic">We&apos;ll tell you if we&apos;re the right people to solve it.</em>
                </h2>
                <ContactReveal className="w-full justify-center md:w-auto" />
              </div>
            </div>
          </section>
          <ValuesStrip />

        </main>
        <Footer />
      </div>
    </>
  );
}
