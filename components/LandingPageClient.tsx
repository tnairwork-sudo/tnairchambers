"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export interface ServiceItem {
  title: string;
  body: string;
}

export interface LandingPageClientProps {
  eyebrow: string;
  heroLine1: string;
  heroEmphasis: string;
  heroBody: string;
  problemLabel?: string;
  problemHeadline: string;
  problemBody: string[];
  services: ServiceItem[];
  servicesLabel?: string;
  pullQuote: string;
  ctaEyebrow: string;
  ctaHeadline: string;
  ctaSubtext: string;
  gradientStyle?: React.CSSProperties;
  schemaJson: string;
}

export default function LandingPageClient({
  eyebrow,
  heroLine1,
  heroEmphasis,
  heroBody,
  problemLabel = "The Problem",
  problemHeadline,
  problemBody,
  services,
  servicesLabel = "What We Handle",
  pullQuote,
  ctaEyebrow,
  ctaHeadline,
  ctaSubtext,
  gradientStyle,
  schemaJson,
}: LandingPageClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── Hero entrance ──────────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".lp-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          ".lp-hero-line1",
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.4"
        )
        .fromTo(
          ".lp-hero-emphasis",
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.75"
        )
        .fromTo(
          ".lp-hero-body",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        );

      // ── Pain point section ─────────────────────────────────────────
      gsap.fromTo(
        ".pain-headline",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pain-section",
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        ".pain-body-para",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pain-section",
            start: "top 72%",
          },
        }
      );

      // ── Services grid ──────────────────────────────────────────────
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
          },
        }
      );

      // ── Pull quote ─────────────────────────────────────────────────
      gsap.fromTo(
        ".pull-quote",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pull-quote-section",
            start: "top 80%",
          },
        }
      );

      // ── CTA ────────────────────────────────────────────────────────
      gsap.fromTo(
        ".cta-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-section",
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
        <section className="min-h-[80vh] flex flex-col justify-end pb-20 md:pb-28 relative overflow-hidden">
          {gradientStyle && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={gradientStyle}
            />
          )}
          <div className="container-site relative z-10">
            <div className="lp-eyebrow flex items-center gap-4 mb-8">
              <div className="gold-rule" />
              <span className="label">{eyebrow}</span>
            </div>

            <h1 className="heading-display text-[clamp(2.6rem,6vw,5.5rem)] text-parchment mb-8 max-w-hero">
              <span className="lp-hero-line1 block overflow-hidden">
                <span className="block">{heroLine1}</span>
              </span>
              <span className="lp-hero-emphasis block overflow-hidden">
                <em className="block text-gold-light font-light not-italic">
                  {heroEmphasis}
                </em>
              </span>
            </h1>

            <p className="lp-hero-body text-base md:text-lg text-parchment-dim leading-relaxed max-w-2xl">
              {heroBody}
            </p>
          </div>
        </section>

        <div className="container-site">
          <div className="rule" />
        </div>

        {/* ── Pain point ──────────────────────────────────────────── */}
        <section className="pain-section container-site py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="pain-headline flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="gold-rule" />
                  <span className="label">{problemLabel}</span>
                </div>
                <h2 className="heading-section text-3xl md:text-4xl text-parchment text-balance">
                  {problemHeadline}
                </h2>
              </div>
            </div>
            <div className="space-y-5 text-parchment-dim leading-relaxed md:pt-16">
              {problemBody.map((para, i) => (
                <p key={i} className="pain-body-para">
                  {para}
                </p>
              ))}
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
            <span className="label">{servicesLabel}</span>
          </div>
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((item) => (
              <div
                key={item.title}
                className="service-card bg-ink hover:bg-surface transition-colors duration-300 p-8 md:p-10 flex flex-col gap-4"
              >
                <h3 className="font-serif text-xl font-light text-parchment">
                  {item.title}
                </h3>
                <p className="text-sm text-parchment-dim leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pull quote ───────────────────────────────────────────── */}
        <section className="pull-quote-section bg-surface-2 border-y border-border">
          <div className="container-site py-16 md:py-24">
            <blockquote className="pull-quote max-w-3xl">
              <p className="heading-section text-2xl md:text-[2rem] text-parchment font-light italic leading-[1.4] mb-8">
                &ldquo;{pullQuote}&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div className="gold-rule" />
                <span className="label">TN Chambers</span>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section id="book" className="cta-section bg-surface border-t border-border">
          <div className="container-site py-24 md:py-32">
            <div className="cta-content max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="gold-rule" />
                <span className="label">{ctaEyebrow}</span>
              </div>
              <h2 className="heading-section text-4xl md:text-5xl text-parchment mb-6 text-balance">
                {ctaHeadline}
              </h2>
              <p className="text-base text-parchment-dim leading-relaxed mb-10 max-w-prose-tight">
                {ctaSubtext}
              </p>
              <a href="tel:+918595203751" className="btn-primary">
                Call +91 85952 03751
                <span className="text-base leading-none" aria-hidden>
                  →
                </span>
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
