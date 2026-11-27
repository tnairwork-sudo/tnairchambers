import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactReveal from "@/components/ContactReveal";
import ReelsGrid from "@/components/ReelsGrid";
import SiteJsonLd from "@/components/SiteJsonLd";
import {
  generalInformationLine,
  sectorAreas,
  sectorClosing,
  sectorHeadline,
  sectorLede,
} from "@/lib/aerospace-copy";
import { instagramReels } from "@/lib/instagram-reels";
import { ogImage, organizationId, siteUrl } from "@/lib/site";

const title = "Space, Aerospace and Defence | Nair & Co";
const description =
  "Legal and regulatory advisory on export controls, procurement, foreign investment, technology and disputes in aerospace, space and defence, by Nair & Co, Advocates & Consultants, New Delhi.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteUrl}/space-aerospace-defence` },
  openGraph: {
    type: "website",
    siteName: "Nair & Co",
    title,
    description,
    url: `${siteUrl}/space-aerospace-defence`,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Space, Aerospace and Defence",
  url: `${siteUrl}/space-aerospace-defence`,
  provider: { "@id": organizationId },
  serviceType: "Aerospace, space and defence advisory",
  areaServed: "IN",
  description,
};

const guideLinks = [
  { href: "/guides/fdi-in-india", label: "FDI in India" },
  { href: "/guides/press-note-3", label: "Press Note 3" },
  { href: "/guides/joint-venture-in-india", label: "Joint ventures in India" },
];

export default function SpaceAerospaceDefencePage() {
  return (
    <>
      <SiteJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />
      <main>
        <section className="chapter-dark relative flex min-h-[100svh] items-end overflow-hidden bg-parchment text-ink">
          <div className="absolute inset-0">
            <Image
              src="/images/aerospace/hero-limb-mobile.webp"
              alt="The Moon above the curve of the Earth, with a bright band of atmosphere and cloud"
              fill
              priority
              sizes="100vw"
              className="object-cover md:hidden"
            />
            <Image
              src="/images/aerospace/hero-limb.webp"
              alt="The Moon above the curve of the Earth, with a bright band of atmosphere and cloud"
              fill
              priority
              sizes="100vw"
              className="hidden object-cover md:block"
            />
            <div className="hero-scrim absolute inset-0" />
          </div>
          <div className="container-site relative z-10 pb-s7 pt-s8 md:pb-s8 lg:pb-s9">
            <div className="kicker mb-s3">
              <div className="gold-rule" />
              <span className="label !text-gold">Space, Aerospace and Defence</span>
            </div>
            <h1 className="heading-display max-w-hero text-[clamp(2.4rem,5vw,4.5rem)]">
              {sectorHeadline}
            </h1>
            <p className="body-copy mt-s3 max-w-2xl text-ink/85">{sectorLede}</p>
            <p className="mt-s3 text-[12px] tracking-[0.08em] text-ink/70">Image: NASA</p>
          </div>
        </section>

        <section className="bg-ink">
          <div className="container-site py-s7 md:py-s8">
            <div className="grid grid-cols-1 gap-s3 md:grid-cols-2 md:gap-s4">
              {sectorAreas.map((area) => (
                <article
                  key={area.id}
                  id={area.id}
                  className="scroll-mt-s7 border-t border-antique bg-surface p-s4 md:p-s5"
                >
                  <h2 className="font-serif text-[24px] font-light text-parchment">{area.title}</h2>
                  <div className="mt-s3 space-y-s2">
                    {area.sentences.map((sentence) => (
                      <p key={sentence} className="body-copy text-parchment-dim">
                        {sentence}
                      </p>
                    ))}
                  </div>
                  {area.id === "export-controls" ? (
                    <p className="mt-s3">
                      <Link
                        href="/scomet"
                        className="inline-flex min-h-12 items-center text-parchment underline decoration-antique underline-offset-4"
                      >
                        The SCOMET Cell
                      </Link>
                    </p>
                  ) : null}
                  {area.links ? (
                    <ul className="mt-s3 space-y-s1">
                      {area.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="inline-flex min-h-12 items-center text-parchment underline decoration-antique underline-offset-4"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="mt-s6 md:mt-s7">
              <div className="kicker mb-s3">
                <div className="gold-rule" />
                <span className="label">Guides</span>
              </div>
              <ul className="space-y-s1">
                {guideLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-12 items-center text-parchment underline decoration-antique underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
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
              </div>
              <Link
                href="/reels"
                className="inline-flex min-h-12 items-center font-serif text-[20px] text-ink"
              >
                All reels →
              </Link>
            </div>
            <ReelsGrid reels={instagramReels.slice(0, 3)} layout="strip" />
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="container-site py-s7 md:py-s8">
            <p className="max-w-3xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-snug text-parchment">
              {sectorClosing}
            </p>
            <div className="mt-s6">
              <ContactReveal className="w-full justify-center md:w-auto" />
            </div>
            <p className="mt-s6 text-[12px] leading-relaxed tracking-[0.04em] text-parchment-dim">
              {generalInformationLine}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
