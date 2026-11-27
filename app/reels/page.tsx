import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ReelsGrid from "@/components/ReelsGrid";
import SiteJsonLd from "@/components/SiteJsonLd";
import { instagramReels } from "@/lib/instagram-reels";
import { firmInstagram, ogImage, organizationId, siteUrl, websiteId } from "@/lib/site";

const title = "Reels | Nair & Co";
const description =
  "Short films from the Nair & Co Instagram, on aircraft, engines, orbit and the industries around them.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteUrl}/reels` },
  openGraph: {
    type: "website",
    siteName: "Nair & Co",
    title,
    description,
    url: `${siteUrl}/reels`,
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
  "@type": "CollectionPage",
  name: "Reels",
  url: `${siteUrl}/reels`,
  description,
  isPartOf: { "@id": websiteId },
  publisher: { "@id": organizationId },
};

export default function ReelsPage() {
  return (
    <>
      <SiteJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />
      <main className="chapter-dark bg-parchment pt-s8 text-ink">
        <div className="container-site pb-s7 md:pb-s8">
          <div className="kicker mb-s3">
            <div className="gold-rule" />
            <span className="label !text-gold">Instagram</span>
          </div>
          <h1 className="heading-display text-[clamp(2.4rem,5vw,4.5rem)]">Notes on film.</h1>
          <p className="body-copy mt-s3 max-w-2xl text-ink/80">
            Short films from the Nair &amp; Co Instagram, on aircraft, engines, orbit and the industries around them.
          </p>
          <p className="mt-s4">
            <a
              href={firmInstagram}
              className="inline-flex min-h-12 items-center text-ink underline decoration-gold/60 underline-offset-4"
            >
              Follow @nairandco
            </a>
          </p>
          <div className="mt-s6 md:mt-s7">
            <ReelsGrid reels={instagramReels} />
          </div>
          <p className="mt-s6">
            <Link href="/" className="inline-flex min-h-12 items-center text-ink/80">
              Home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
