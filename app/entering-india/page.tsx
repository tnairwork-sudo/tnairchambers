import type { Metadata } from "next";
import LandingPageClient from "@/components/LandingPageClient";
import { ogImage, organizationId, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Foreign Companies Entering India — Legal Advisory for India Market Entry",
  description:
    "Market-entry and cross-border advisory for businesses in India, Oman, and the GCC, including the Sohar Free Zone, warehousing, logistics, and pharmaceutical trading.",
  keywords: [
    "India market entry legal advisory",
    "foreign company India legal counsel",
    "India entry regulatory compliance",
    "foreign direct investment India lawyer",
    "India business setup legal",
    "company registration India foreign",
    "India regulatory advisory international company",
    "FEMA compliance India",
    "India corporate legal counsel foreign",
  ],
  alternates: { canonical: `${siteUrl}/entering-india` },
  openGraph: {
    type: "website",
    siteName: "Nair & Co",
    title: "Entering India — Legal Advisory for Foreign Companies | Nair & Co",
    description:
      "Market entry in India and cross-border advisory in Oman and the GCC, including warehousing, logistics, and the Sohar Free Zone.",
    url: `${siteUrl}/entering-india`,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entering India — Legal Advisory for Foreign Companies | Nair & Co",
    description:
      "Market entry in India and cross-border advisory in Oman and the GCC, including warehousing, logistics, and the Sohar Free Zone.",
    images: [ogImage.url],
  },
};

const services = [
  {
    title: "Entry Structure Advisory",
    body: "Liaison office, branch office, subsidiary, or joint venture. Each structure carries different regulatory, tax, and repatriation consequences.",
  },
  {
    title: "Regulatory Approvals & Licensing",
    body: "Sector approvals, environmental clearances, FDI compliance, and Reserve Bank reporting.",
  },
  {
    title: "FEMA & Foreign Exchange Compliance",
    body: "Capital flows, remittances, and guarantees under the foreign-exchange rules, set out before the money moves.",
  },
  {
    title: "Commercial Contracts & JV Agreements",
    body: "Joint-venture and shareholder arrangements, distribution agreements, and supply contracts, read against how those documents are treated in Indian proceedings.",
  },
  {
    title: "Ongoing Regulatory Counsel",
    body: "Continuing advice as FDI policy, sector rules, and reporting requirements change.",
  },
  {
    title: "Dispute Prevention & Resolution",
    body: "Where a market-entry arrangement later becomes a dispute, the work may be negotiation, arbitration, or litigation.",
  },
  {
    title: "Oman and the Sohar Free Zone",
    body: "Warehousing, logistics, and commercial questions in Oman, including the legal, regulatory, and tax position associated with the Sohar Free Zone and port.",
  },
  {
    title: "GCC market entry",
    body: "Advisory for pharmaceutical trading, infrastructure, manufacturing, chemicals, and medical technology on warehousing, distribution, and expansion in Oman and the wider GCC.",
  },
  {
    title: "Cross-border funding",
    body: "Work with investment-banking partners in Mumbai, Bahrain, the GCC, and Europe on funding, private capital, and strategic transactions.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nair & Co — India Market Entry Legal Advisory",
  url: `${siteUrl}/entering-india`,
  provider: { "@id": organizationId },
  description:
    "Legal advisory for foreign companies entering the Indian market. Corporate structuring, regulatory compliance, FEMA, FDI policy, and ongoing counsel.",
  areaServed: "India",
  serviceType: "India Market Entry & Foreign Investment Law",
};

export default function EnteringIndiaPage() {
  return (
    <LandingPageClient
      eyebrow="India Market Entry · 02"
      heroLine1="Market entry in India,"
      heroEmphasis="and across Oman and the GCC."
      heroBody="The work covers corporate structure, regulatory approvals, and foreign-exchange compliance in India, and warehousing, logistics, and commercial entry in Oman, including the Sohar Free Zone."
      problemHeadline="Entry is a question of structure, licence, and forum."
      problemBody={[
        "A business entering India chooses among a liaison office, a branch, a subsidiary, or a joint venture. Each carries a different set of regulatory, tax, and repatriation consequences. FDI policy, sector rules, and Reserve Bank reporting sit on top of that choice.",
        "Separate from India entry, the practice advises on warehousing, logistics, and distribution in Oman and the GCC, including pharmaceutical trading and the Sohar Free Zone, and on funding conversations with partners in Mumbai, Bahrain, the GCC, and Europe.",
        "The industries include technology, manufacturing, chemicals, infrastructure, and medical technology.",
      ]}
      services={services}
      pullQuote="India entry, Oman and the GCC, and the funding conversations that sit beside them, are described here as subjects of advice."
      ctaEyebrow="Cross-border advisory"
      ctaHeadline="A separate team handles business expansion."
      ctaSubtext="Chambers are at the Supreme Court complex, Tilak Marg, New Delhi."
      schemaJson={JSON.stringify(schema)}
    />
  );
}
