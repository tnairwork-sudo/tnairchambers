import type { Metadata } from "next";
import LandingPageClient from "@/components/LandingPageClient";

export const metadata: Metadata = {
  title: "Foreign Companies Entering India — Legal Advisory for India Market Entry",
  description:
    "India market entry legal advisory for foreign companies. Regulatory compliance, corporate structuring, licensing, and ongoing counsel from a Supreme Court advocate who puts business first, law second.",
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
  alternates: { canonical: "/entering-india" },
  openGraph: {
    title: "Entering India — Legal Advisory for Foreign Companies | TN Chambers",
    description:
      "India is the opportunity. The regulatory, compliance, and legal architecture is the obstacle. TN Chambers provides counsel who speaks your language — business first, law second.",
    url: "https://tnairchambers.in/entering-india",
  },
};

const services = [
  {
    title: "Entry Structure Advisory",
    body: "Liaison office, branch office, subsidiary, or joint venture — each structure carries different regulatory obligations, tax exposure, and repatriation rights. We map the tradeoffs clearly before you commit.",
  },
  {
    title: "Regulatory Approvals & Licensing",
    body: "Sector-specific approvals, environmental clearances, FDI policy compliance, and RBI reporting requirements. We handle the paperwork so you can focus on the business.",
  },
  {
    title: "FEMA & Foreign Exchange Compliance",
    body: "Foreign exchange management is one of the most frequently misunderstood areas for international companies. We ensure your capital flows, remittances, and guarantees are structured correctly from day one.",
  },
  {
    title: "Commercial Contracts & JV Agreements",
    body: "Joint venture negotiations, shareholder agreements, distribution arrangements, and supply contracts — drafted to protect your interests in Indian courts, not just in theory.",
  },
  {
    title: "Ongoing Regulatory Counsel",
    body: "India's regulatory landscape changes. We provide ongoing advisory so your India operations stay compliant as rules evolve — with direct access, not a ticketing system.",
  },
  {
    title: "Dispute Prevention & Resolution",
    body: "Most India market entry disputes are avoidable. We identify the risk points early. When disputes do arise, we resolve them through negotiation, arbitration, or litigation at the highest levels.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "TN Chambers — India Market Entry Legal Advisory",
  url: "https://tnairchambers.in/entering-india",
  description:
    "Legal advisory for foreign companies entering the Indian market. Corporate structuring, regulatory compliance, FEMA, FDI policy, and ongoing counsel.",
  areaServed: "India",
  serviceType: "India Market Entry & Foreign Investment Law",
};

export default function EnteringIndiaPage() {
  return (
    <LandingPageClient
      eyebrow="India Market Entry · 02"
      heroLine1="India is the opportunity."
      heroEmphasis="The legal architecture is the obstacle."
      heroBody="You need Indian counsel who speaks your language — business first, law second. Who understands what you're trying to build, and can navigate the system around it."
      problemHeadline="India doesn't punish ambition. It punishes unfamiliarity."
      problemBody={[
        "The companies that struggle in India are not the ones who lack ambition or capital. They are the ones who arrived with advisors who understand the rules but not the system — the regulators, the timelines, the unofficial sequences, the ways in which compliance on paper can still leave you operationally exposed.",
        "India's legal and regulatory architecture is not hostile to foreign capital. It is simply unfamiliar, layered, and moving. The FDI policy changes. RBI master directions are updated. Sector-specific rules overlap with central and state frameworks.",
        "We provide the kind of counsel that helps you see the whole board — not just the square you're currently standing on.",
      ]}
      services={services}
      pullQuote="The question we ask every new international client is simple: what does success look like in 18 months? That answer shapes the legal strategy — not the other way around."
      ctaEyebrow="India Entry Advisory"
      ctaHeadline="Tell us what you're building in India. We'll tell you what stands in the way."
      ctaSubtext="A 30-minute call. We'll ask about your sector, your structure, your timeline, and your existing advisors. You'll leave with an honest read of the path ahead."
      gradientStyle={{
        background:
          "radial-gradient(ellipse 70% 50% at 70% 40%, #1a1825 0%, transparent 70%)",
      }}
      schemaJson={JSON.stringify(schema)}
    />
  );
}
