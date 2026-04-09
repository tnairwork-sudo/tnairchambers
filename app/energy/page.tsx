import type { Metadata } from "next";
import LandingPageClient from "@/components/LandingPageClient";

export const metadata: Metadata = {
  title: "Electricity & Energy Regulation in India — Foreign Energy Companies",
  description:
    "Foreign energy companies entering India's power sector need counsel who has argued before CERC, APTEL, and state electricity commissions. TN Chambers provides regulatory advocacy, licensing strategy, and dispute resolution for international power sector clients.",
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
  alternates: { canonical: "/energy" },
  openGraph: {
    title: "India Electricity & Energy Regulation — TN Chambers",
    description:
      "You want to enter India's power sector. CERC, APTEL, and regulatory unpredictability are standing between your capital and your returns. We've argued this from the inside.",
    url: "https://tnairchambers.in/energy",
  },
};

const services = [
  {
    title: "CERC & APTEL Proceedings",
    body: "Central Electricity Regulatory Commission filings, tariff petitions, inter-state transmission disputes, and appellate proceedings before APTEL — handled with the precision these forums require.",
  },
  {
    title: "State Commission Navigation",
    body: "India has 36 state and UT electricity commissions, each with its own procedural norms and regulatory culture. We know which arguments land, and which ones backfire.",
  },
  {
    title: "Regulatory Licensing & Approvals",
    body: "Generation, transmission, and distribution licences. Open access approvals. Grid connection disputes. We navigate the licensing architecture so your project doesn't stall at the gate.",
  },
  {
    title: "PPA Disputes & Arbitration",
    body: "Power Purchase Agreement disputes, renegotiations, and arbitration — whether before CERC, state commissions, or under institutional arbitration rules.",
  },
  {
    title: "Policy & Regulatory Risk Advisory",
    body: "Before you commit capital, you need to understand the regulatory risk. We provide honest, direct advisory on where India's power sector regulation is headed — and where it will resist.",
  },
  {
    title: "Cross-Border Structuring",
    body: "Foreign direct investment in India's power sector involves FEMA, sectoral caps, and regulatory approvals. We align the legal and regulatory architecture from day one.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "TN Chambers — Electricity & Energy Regulation",
  url: "https://tnairchambers.in/energy",
  description:
    "Supreme Court advocate practice specialising in CERC, APTEL, and energy regulatory proceedings for international energy companies entering India.",
  areaServed: "India",
  serviceType: "Electricity Regulation & Energy Law",
};

export default function EnergyPage() {
  return (
    <LandingPageClient
      eyebrow="Energy & Power · 01"
      heroLine1="You want to enter India's power sector."
      heroEmphasis="We've argued it from the inside."
      heroBody="CERC, APTEL, state commissions, and regulatory unpredictability are standing between your capital and your returns. You need someone who has stood in these proceedings — not just read about them."
      problemHeadline="India's power sector is an opportunity. The regulatory architecture is a labyrinth."
      problemBody={[
        "India has one of the world's most complex electricity regulatory structures. The Central Electricity Regulatory Commission, the Appellate Tribunal for Electricity, 36 state commissions, the Ministry of Power, and the nodal agencies — each with overlapping jurisdiction and conflicting precedent.",
        "International energy companies consistently underestimate the regulatory risk. They arrive with financial models, technology, and capital — and then encounter a system that moves on its own timeline, in its own language, and rewards those who understand its internal logic.",
        "We have operated in this system for years. We know the precedents, the regulators, the procedural pressure points, and the arguments that succeed.",
      ]}
      services={services}
      pullQuote="The question is not whether India's electricity regulators will push back. They will. The question is whether your counsel knows exactly where — and has a prepared response."
      ctaEyebrow="Energy & Power Advisory"
      ctaHeadline="Tell us your project. We'll tell you exactly where the regulatory risk sits."
      ctaSubtext="A 30-minute call. We'll ask about your project structure, your timeline, and your exposure. You'll leave with a clear picture of what stands between you and operational approval in India."
      schemaJson={JSON.stringify(schema)}
    />
  );
}
