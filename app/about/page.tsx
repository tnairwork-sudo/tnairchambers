import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";
import { ogImage, siteJsonLd, siteUrl } from "@/lib/site";

const title = "Tushar Nair — Supreme Court Advocate";
const description =
  "Tushar Nair, also written Tushaar Nair, is an advocate enrolled with the Bar Council of Delhi in 2024 and the founder of Nair & Co, formerly T Nair Chambers. He practises before the Supreme Court of India, the Delhi High Court and the Punjab & Haryana High Court.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    type: "profile",
    title: "Tushar Nair — Supreme Court Advocate | Nair & Co",
    description,
    url: `${siteUrl}/about`,
    siteName: "Nair & Co",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Nair — Supreme Court Advocate | Nair & Co",
    description,
    images: [ogImage.url],
  },
};

export default function AboutPage() {
  return <AboutContent schemaJson={JSON.stringify(siteJsonLd)} />;
}
