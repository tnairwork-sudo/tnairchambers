"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactReveal from "@/components/ContactReveal";
import { personProfiles } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    title: "Inter-state water disputes",
    body: [
      "The work includes major inter-state river water disputes before the Supreme Court of India and the Krishna Water Disputes Tribunal, including proceedings concerning the Cauvery. The questions have been those of inter-state water law, statutory interpretation, public law, and the allocation of water resources.",
      "That work has included briefing senior advocates and drafting applications.",
    ],
  },
  {
    title: "Electricity law and arbitration",
    body: [
      "Electricity work has included matters in a state electricity sector, involving state electricity authorities and power-sector entities, and an arbitration between a state power utility and a public-sector power corporation.",
      "Further work has included assisting in arbitrations at the Delhi International Arbitration Centre. The subject matter covers electricity regulation, contractual disputes, commercial arbitration, and disputes involving public-sector and infrastructure entities.",
    ],
  },
  {
    title: "Litigation and dispute resolution",
    body: [
      "Independent appearances include the Supreme Court of India, the Delhi High Court, the Punjab & Haryana High Court, the National Company Law Tribunal, the Central Administrative Tribunal, consumer forums, and district courts, including the Gurugram, Patiala House, Saket and Tis Hazari courts.",
      "Other work has involved briefing senior advocates in land, property, civil and commercial disputes before the Supreme Court, and in matrimonial proceedings before the Punjab & Haryana High Court. Recovery work has involved financial institutions. The range is civil, commercial, contractual, recovery, property, and regulatory disputes.",
    ],
  },
  {
    title: "Institutions and industries",
    body: [
      "Matters have involved state governments, educational institutions, financial institutions, and businesses in aviation, infrastructure, manufacturing, technology, pharmaceuticals, chemicals, and property, together with data-science companies, foundations, and non-profits. Some of that work is subject to confidentiality.",
    ],
  },
  {
    title: "Corporate, private equity, and investment banking",
    body: [
      "Advisory work has covered companies facing financial distress and the possibility of non-performing classification: funding, restructuring, and negotiations with investors and financial stakeholders. It has also included private-equity and corporate-funding discussions.",
      "There are working relationships with investment-banking professionals and financial institutions in Mumbai and Bahrain, and with partners across Mumbai, Bahrain, the GCC, and Europe, on funding, private capital, and strategic transactions. The work sits between legal structuring, investor negotiations, capital raising, and commercial arrangements.",
    ],
  },
  {
    title: "Oman, the GCC, and cross-border advisory",
    body: [
      "Cross-border work has included travel to Oman on warehousing, logistics, and commercial questions, including the legal, regulatory, and tax position associated with the Sohar Free Zone and port.",
      "That advisory has covered pharmaceutical companies and pharmaceutical trading enterprises setting up warehousing and distribution in Oman; infrastructure, manufacturing, and chemical-sector businesses looking at Oman and the wider GCC; and technology and medical-technology companies on market entry and expansion. It also covers structuring, tax, and regulatory questions across India, Oman, and the GCC.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "Intellectual-property work has included protection and enforcement: counterfeit goods, infringement, notices, trademark registration, and the commercial use of intellectual property, including for manufacturing and engineering businesses and for technology and consumer businesses.",
    ],
  },
  {
    title: "FCRA and institutional advisory",
    body: [
      "Foundations and non-profits in India have been advised on the Foreign Contribution (Regulation) Act, on governance, and on cross-border funding. Some of that work is covered by non-disclosure arrangements.",
    ],
  },
];

const forums = [
  { name: "Supreme Court of India", body: "Inter-state water disputes, civil, commercial, land, and property matters, including work briefing senior advocates." },
  { name: "Delhi High Court", body: "Independent appearances in civil, commercial, and related proceedings." },
  { name: "Punjab & Haryana High Court", body: "Independent appearances, and briefing senior counsel in matrimonial and related proceedings." },
  { name: "Krishna Water Disputes Tribunal", body: "Assistance and appearances in a major inter-state river water dispute." },
  { name: "NCLT, CAT, and consumer forums", body: "Company, service, and consumer proceedings." },
  { name: "DIAC arbitrations", body: "Arbitrations at the Delhi International Arbitration Centre, including electricity and commercial disputes." },
  { name: "District courts", body: "Gurugram, Patiala House, Saket, and Tis Hazari, among other district courts." },
];

export default function AboutContent({ schemaJson }: { schemaJson: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".about-eyebrow", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo(".about-hero-name", { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.4")
        .fromTo(".about-hero-quote", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5");

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

      gsap.fromTo(
        ".bio-para",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".bio-section", start: "top 78%" },
        }
      );

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

      gsap.fromTo(
        ".experience-block",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".experience-section", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".court-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".courts-grid", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".about-cta-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-cta", start: "top 80%" },
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
        <section className="about-hero-section grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
          <div className="flex flex-col justify-end pb-16 md:pb-24 pt-20 md:pt-32 px-6 md:pl-16 lg:pl-24 order-2 md:order-1">
            <div className="about-eyebrow flex items-center gap-4 mb-8">
              <div className="gold-rule" />
              <span className="label">The Advocate</span>
            </div>
            <h1 className="about-hero-name heading-display text-[clamp(3rem,5vw,5.5rem)] text-parchment mb-8">
              Tushaar Nair
              <span className="label mt-6 block max-w-[14rem] !tracking-[0.16em] sm:max-w-none sm:!tracking-[0.22em]">Tushar Nair · Founder, Nair & Co</span>
            </h1>
            <p className="about-hero-quote text-lg text-parchment-dim font-serif font-light italic max-w-md leading-relaxed">
              Advocate, Supreme Court of India. Enrolled with the Bar Council of Delhi in 2024. The practice was formerly T Nair Chambers.
            </p>
          </div>

          <div className="relative min-h-[60vw] md:min-h-0 order-1 md:order-2 overflow-hidden">
            <Image
              src="/tushaar-1.png"
              alt="Tushar Nair (Tushaar Nair), advocate enrolled with the Bar Council of Delhi"
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

        <section className="bio-section container-site py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-rule" />
                <span className="label">Profile</span>
              </div>
              <p className="font-serif text-2xl font-light text-parchment leading-snug">
                Nair &amp; Co
              </p>
              <p className="mt-2 label">Advocates &amp; Consultants</p>
              <p className="mt-6 text-sm text-parchment leading-relaxed">
                Tushar Nair<br />
                <span className="text-parchment-dim">also written Tushaar Nair</span>
              </p>
              <p className="mt-4 text-sm text-parchment-dim">
                Bar Council of Delhi<br />
                Enrolled 2024 · D/4136/2024
              </p>
              <p className="mt-4 text-sm text-parchment-dim">
                135, Additional Building Complex<br />
                Tilak Marg, New Delhi, 110001
              </p>
              <ul className="mt-6 space-y-2">
                {personProfiles.map((profile) => (
                  <li key={profile.href}>
                    <a
                      href={profile.href}
                      className="text-sm text-gold hover:text-gold-light transition-colors duration-300"
                    >
                      {profile.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-base text-parchment-dim leading-[1.85]">
              <p className="bio-para">
                Tushar Nair is an advocate practising before the Supreme Court of India. The name is also written Tushaar Nair. He was enrolled with the Bar Council of Delhi in 2024, and he founded Nair &amp; Co, Advocates &amp; Consultants, in New Delhi. The firm was formerly T Nair Chambers.
              </p>
              <p className="bio-para">
                The practice covers inter-state water disputes, electricity law, arbitration, commercial litigation, corporate advisory, private equity, investment banking, intellectual property, and cross-border transactions. Courtroom work, legal advisory, corporate advisory, policy and regulatory advisory, electricity and power, mergers and acquisitions, intellectual property, and business expansion are each carried by a separate team. Management consultancy and investment banking are delivered by their own teams, with strategic alliances and partner firms in Mumbai, Bahrain, the GCC, the United Kingdom, Europe, and the Americas.
              </p>
              <p className="bio-para">
                Alongside litigation, the work includes advice to Indian and international businesses on commercial opportunities in Oman and the GCC: warehousing, logistics, market entry, regulatory structuring, and investment. He also writes on arbitration in India and on cross-border trade, including an{" "}
                <a
                  href="/opportunity-atlas/duty-free-conditions-apply"
                  className="text-gold hover:text-gold-light transition-colors duration-300"
                >
                  Opportunity Atlas note on the India-Oman CEPA
                </a>
                .
              </p>

              <div className="about-photo-2-wrap relative w-full aspect-[3/4] my-8 overflow-hidden">
                <Image
                  src="/tushaar-2.png"
                  alt="Tushar Nair (Tushaar Nair)"
                  fill
                  className="about-photo-2 object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              <p className="bio-para">
                He is a member of the Young Leaders Advisory Board of the Institute of Risk Management, and takes part in discussions on institutional risk, governance, and emerging business risks. Reporting on the inter-state water work has appeared in the Hindustan Times, The Economic Times, and The Times of India. Other professional work has been featured in ELLE India and Grazia India.
              </p>
              <p className="bio-para">
                He founded and hosts{" "}
                <a
                  href="https://thebigdinner.in"
                  className="text-gold hover:text-gold-light transition-colors duration-300"
                >
                  The Big Dinner
                </a>
                , a private monthly dinner series held in London, Mumbai, Delhi, Dubai, Hyderabad, and Bengaluru. It is a personal, non-commercial initiative. The rooms bring together people from family offices, science, engineering, aviation, the arts, design, music, consulting, defence, manufacturing, and hospitality. The community is about 1,500.
              </p>
            </div>
          </div>
        </section>

        <div className="container-site">
          <div className="rule" />
        </div>

        <section id="experience" className="experience-section container-site py-20 md:py-28">
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-rule" />
            <span className="label">Experience</span>
          </div>
          <p className="experience-block text-base text-parchment-dim leading-relaxed max-w-2xl mb-14">
            Forums, subjects, and industries. The notes below describe the kind of work, not its outcome.
          </p>
          <div className="space-y-14">
            {experience.map((item) => (
              <article key={item.title} className="experience-block grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-16">
                <h2 className="heading-section text-2xl md:text-3xl text-parchment leading-snug">
                  {item.title}
                </h2>
                <div className="space-y-5 text-base text-parchment-dim leading-[1.85]">
                  {item.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="container-site">
          <div className="rule" />
        </div>

        <section className="container-site py-20 md:py-28">
          <div className="flex items-center gap-4 mb-14">
            <div className="gold-rule" />
            <span className="label">Courts, tribunals, and fora</span>
          </div>

          <div className="courts-grid grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {forums.map((court) => (
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
        </section>

        <section className="about-cta bg-surface border-t border-border">
          <div className="container-site py-24 md:py-32">
            <div className="about-cta-content max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="gold-rule" />
                <span className="label">Chambers</span>
              </div>
              <h2 className="heading-section text-4xl md:text-5xl text-parchment mb-6 text-balance">
                New Delhi
              </h2>
              <p className="text-base text-parchment-dim leading-relaxed mb-10 max-w-xl">
                135, Additional Building Complex, Supreme Court of India, Tilak Marg, New Delhi 110001.
              </p>
              <ContactReveal />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
