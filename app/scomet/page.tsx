import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactReveal from "@/components/ContactReveal";
import HudFrame from "@/components/HudFrame";
import SiteJsonLd from "@/components/SiteJsonLd";
import {
  scometClosing,
  scometHonesty,
  scometSectors,
  scometServices,
  scometSteps,
} from "@/lib/aerospace-copy";
import { ogImage, organizationId, siteUrl } from "@/lib/site";

const title = "SCOMET Cell | Nair & Co";
const description =
  "Nair & Co's in-house SCOMET Cell: classification, filing templates, application consulting, risk analysis and export-control due diligence for sensitive goods, software and technology, New Delhi.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteUrl}/scomet` },
  openGraph: {
    type: "website",
    siteName: "Nair & Co",
    title,
    description,
    url: `${siteUrl}/scomet`,
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
  name: "SCOMET Cell",
  url: `${siteUrl}/scomet`,
  provider: { "@id": organizationId },
  serviceType: "Export control advisory (SCOMET)",
  areaServed: "IN",
  description,
};

export default function ScometPage() {
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
              src="/images/aerospace/stator-blade.webp"
              alt="A turbine stator blade held in a hot-gas rig, the metal beside a heated nozzle"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="hero-scrim absolute inset-0" />
          </div>
          <HudFrame />
          <div className="container-site relative z-10 pb-s7 pt-s8 md:pb-s8 lg:pb-s9">
            <div className="kicker mb-s3">
              <div className="gold-rule" />
              <span className="label !text-gold">SCOMET Cell</span>
            </div>
            <h1 className="heading-display max-w-hero text-[clamp(2.6rem,6vw,5rem)]">
              The SCOMET Cell.
            </h1>
            <p className="body-copy mt-s3 max-w-2xl text-ink/85">
              An in-house cell of Nair &amp; Co, Advocates &amp; Consultants, for export authorisation under India&apos;s SCOMET list: Special Chemicals, Organisms, Materials, Equipment and Technologies.
            </p>
            <p className="mt-s3 text-[12px] tracking-[0.08em] text-ink/70">Image: NASA</p>
          </div>
        </section>

        <section className="bg-ink">
          <div className="container-site grid gap-s5 py-s7 md:grid-cols-2 md:py-s8">
            <p className="body-copy text-parchment-dim">
              SCOMET is India&apos;s list of sensitive items that need a government licence before they leave the country. It reaches physical goods, and it also reaches software and technology, including drawings, designs and technical assistance shared by email or in a meeting.
            </p>
            <p className="body-copy text-parchment-dim">
              The cell advises on what the list does and does not reach, and prepares the classification, the documents and the file for an application to the Directorate General of Foreign Trade (DGFT) or the Department of Defence Production (DDP). Each matter is led by Tushaar Nair, Advocate.
            </p>
          </div>
        </section>

        <section className="bg-surface">
          <div className="container-site py-s7 md:py-s8">
            <div className="kicker mb-s5 md:mb-s6">
              <div className="gold-rule" />
              <span className="label">What the cell does</span>
            </div>
            <div className="grid grid-cols-1 gap-s3 md:grid-cols-2 md:gap-s4">
              {scometServices.map((item) => (
                <article key={item.title} className="border-t border-antique bg-ink p-s4 md:p-s5">
                  <h2 className="font-serif text-[24px] font-light text-parchment">{item.title}</h2>
                  <p className="body-copy mt-s3 text-parchment-dim">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="chapter-dark bg-parchment text-ink">
          <div className="container-site py-s7 md:py-s8">
            <div className="kicker mb-s5 md:mb-s6">
              <div className="gold-rule" />
              <span className="label !text-gold">How a matter runs</span>
            </div>
            <ol className="grid grid-cols-1 gap-s3 md:grid-cols-2 md:gap-s4">
              {scometSteps.map((step) => (
                <li key={step.n} className="border-t border-gold/40 bg-graphite p-s4 md:p-s5">
                  <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-gold">{step.n}</p>
                  <h2 className="mt-s3 font-serif text-[32px] font-light">{step.title}</h2>
                  <p className="body-copy mt-s3 text-ink/80">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-ink">
          <div className="container-site py-s7 md:py-s8">
            <div className="kicker mb-s3">
              <div className="gold-rule" />
              <span className="label">Sectors</span>
            </div>
            <p className="body-copy max-w-3xl text-parchment">{scometSectors}</p>
            <p className="body-copy mt-s6 max-w-3xl text-parchment-dim">{scometHonesty}</p>
            <p className="mt-s6">
              <Link
                href="/guides/scomet-crash-course"
                className="inline-flex min-h-12 items-center font-serif text-[20px] text-parchment underline decoration-antique underline-offset-4"
              >
                Read the SCOMET crash course →
              </Link>
            </p>
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="container-site py-s7 md:py-s8">
            <div className="kicker mb-s3">
              <div className="gold-rule" />
              <span className="label">Contact</span>
            </div>
            <ContactReveal className="w-full justify-center md:w-auto" />
            <p className="mt-s6 max-w-3xl text-[12px] leading-relaxed tracking-[0.04em] text-parchment-dim">
              {scometClosing}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
