import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Tushaar Nair",
  description:
    "Tushaar Nair is an advocate of the Supreme Court of India. He leads Nair & Co — Advocates & Consultants, a New Delhi practice in which each service is delivered by a dedicated team.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Tushaar Nair — Nair & Co, Advocates & Consultants",
    description:
      "Advocate of the Supreme Court of India, and the practice of Nair & Co — Advocates & Consultants, New Delhi. Each service is delivered by a dedicated team.",
    url: "https://nairandco.in/about",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tushaar Nair",
  jobTitle: "Advocate, Supreme Court of India",
  worksFor: {
    "@type": "LegalService",
    name: "Nair & Co",
    alternateName: "Nair & Co — Advocates & Consultants",
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
