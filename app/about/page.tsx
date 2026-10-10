import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Tushaar Nair — Supreme Court Advocate",
  description:
    "Tushaar Nair practices before the Supreme Court of India. A discipline of thinking applied to electricity regulation, arbitration, and cross-border advisory — at the highest levels.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Tushaar Nair — Supreme Court Advocate | Nair & Co",
    description:
      "Tushaar Nair is not easy to place in a single category. That is, perhaps, the most important thing to understand about him.",
    url: "https://nairandco.in/about",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tushaar Nair",
  jobTitle: "Supreme Court Advocate",
  worksFor: {
    "@type": "LegalService",
    name: "Nair & Co",
    url: "https://nairandco.in",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "135, Additional Building Complex, Supreme Court of India, Tilak Marg",
    addressLocality: "New Delhi",
    postalCode: "110001",
    addressCountry: "IN",
  },
  url: "https://nairandco.in/about",
};

export default function AboutPage() {
  return <AboutContent schemaJson={JSON.stringify(schema)} />;
}
