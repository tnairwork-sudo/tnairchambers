import type { Metadata } from "next";
import LandingPageClient from "@/components/LandingPageClient";
import { ogImage, organizationId, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Electricity & Energy Regulation in India — Foreign Energy Companies",
  description:
    "Electricity law at Nair & Co covers regulatory proceedings, tariffs, power-purchase disputes, and arbitration involving state electricity authorities, power-sector entities, and public-sector utilities.",
  keywords: [
    "CERC advocate foreign company",
    "APTEL lawyer India",
    "India electricity regulation foreign investor",
    "India power sector legal advisory",
    "renewable energy India regulatory counsel",
    "electricity regulatory commission India advocate",
    "CERC APTEL legal services",
    "India power sector entry legal",
    "electricity law India Supreme Court",
  ],
  alternates: { canonical: `${siteUrl}/energy` },
  openGraph: {
    type: "website",
    siteName: "Nair & Co",
    title: "India Electricity & Energy Regulation — Nair & Co",
    description:
      "Electricity regulation, tariff and power-purchase disputes, and arbitration involving utilities and public-sector power entities.",
    url: `${siteUrl}/energy`,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "India Electricity & Energy Regulation — Nair & Co",
    description:
      "Electricity regulation, tariff and power-purchase disputes, and arbitration involving utilities and public-sector power entities.",
    images: [ogImage.url],
  },
};

const services = [
  {
    title: "CERC & APTEL Proceedings",
    body: "Central Electricity Regulatory Commission filings, tariff petitions, inter-state transmission disputes, and appellate proceedings before APTEL.",
  },
  {
    title: "State Commission Navigation",
    body: "India has 36 state and UT electricity commissions, each with its own procedure. The work is to identify the forum and the record that forum requires.",
  },
  {
    title: "Regulatory Licensing & Approvals",
    body: "Generation, transmission, and distribution licences, open access, and grid-connection disputes.",
  },
  {
    title: "PPA Disputes & Arbitration",
    body: "Power Purchase Agreement disputes, renegotiations, and arbitration — whether before CERC, state commissions, or under institutional arbitration rules.",
  },
  {
    title: "Policy & Regulatory Risk Advisory",
    body: "Advisory on the regulatory setting of a power project: the commissions, the licence, and the contract, before capital is committed.",
  },
  {
    title: "Cross-Border Structuring",
    body: "Foreign direct investment in India's power sector involves FEMA, sectoral caps, and regulatory approvals. The work is to set out that architecture before capital is committed.",
  },
  {
    title: "State electricity sector",
    body: "Matters involving state electricity authorities and power-sector entities, including regulatory questions and disputes in a state electricity sector.",
  },
  {
    title: "Power-sector arbitration",
    body: "Commercial arbitration between utilities and public-sector power corporations, including contractual disputes, alongside arbitrations at the Delhi International Arbitration Centre.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nair & Co — Electricity & Energy Regulation",
  url: `${siteUrl}/energy`,
  provider: { "@id": organizationId },
  description:
    "Supreme Court advocate practice specialising in CERC, APTEL, and energy regulatory proceedings for international energy companies entering India.",
  areaServed: "India",
  serviceType: "Electricity Regulation & Energy Law",
};

export default function EnergyPage() {
  return (
    <LandingPageClient
      eyebrow="Energy & Power · 01"
      heroLine1="Electricity law, regulation, and arbitration."
      heroEmphasis="A dedicated team."
      heroBody="The work covers proceedings before electricity regulatory commissions and APTEL, tariff and power-purchase disputes, and arbitration involving state electricity authorities, power-sector entities, and public-sector utilities."
      problemHeadline="Electricity regulation in India is divided across commissions, a tribunal, and contract."
      problemBody={[
        "The Central Electricity Regulatory Commission, the Appellate Tribunal for Electricity, and the state electricity commissions each have their own procedure. Tariff, licensing, open access, and power-purchase agreements sit across those forums, and often in arbitration as well.",
        "The practice has included electricity matters involving state electricity authorities and power-sector entities, and an arbitration between a state power utility and a public-sector power corporation. It has also included assistance in arbitrations at the Delhi International Arbitration Centre.",
      ]}
      services={services}
      pullQuote="Electricity work here is regulatory, contractual, and arbitral: commissions, APTEL, and disputes involving utilities and infrastructure."
      ctaEyebrow="Energy & Power"
      ctaHeadline="The electricity team is a separate practice within Nair & Co."
      ctaSubtext="Chambers are at the Supreme Court complex, Tilak Marg, New Delhi."
      schemaJson={JSON.stringify(schema)}
    />
  );
}
