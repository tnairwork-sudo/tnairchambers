import type { Metadata } from "next";
import LandingPageClient from "@/components/LandingPageClient";
import { ogImage, organizationId, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "FCRA Compliance & Legal Advisory for International NGOs in India",
  description:
    "FCRA advisory for foundations and non-profits in India: registration, compliance, governance, and cross-border funding. Some of the work is confidential.",
  keywords: [
    "FCRA lawyer India",
    "foreign NGO India legal advisory",
    "FCRA registration advocate India",
    "foreign contribution regulation act India",
    "international NGO FCRA compliance",
    "NGO legal counsel India",
    "FCRA renewal advocate India",
    "India NGO regulatory compliance",
    "FCRA violation defence India",
    "foreign foundation India FCRA",
  ],
  alternates: { canonical: `${siteUrl}/ngos` },
  openGraph: {
    type: "website",
    siteName: "Nair & Co",
    title: "FCRA & NGO Legal Advisory in India — Nair & Co",
    description:
      "Advisory for foundations and non-profits on the Foreign Contribution (Regulation) Act, governance, and cross-border funding.",
    url: `${siteUrl}/ngos`,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "FCRA & NGO Legal Advisory in India — Nair & Co",
    description:
      "Advisory for foundations and non-profits on the Foreign Contribution (Regulation) Act, governance, and cross-border funding.",
    images: [ogImage.url],
  },
};

const services = [
  {
    title: "FCRA Registration & Renewal",
    body: "New registrations, prior-permission applications, and five-year renewals, including the documents the Ministry of Home Affairs asks for.",
  },
  {
    title: "Compliance review",
    body: "Account designation, utilisation reporting, and sub-granting, read against the Act and the conditions of registration.",
  },
  {
    title: "Show-cause and enforcement",
    body: "Show-cause notices, suspension, and cancellation are separate proceedings. The work is the response and the record.",
  },
  {
    title: "How funds are held and used",
    body: "The way a foundation receives, holds, and applies a foreign contribution is itself a compliance question.",
  },
  {
    title: "Partnerships with Indian organisations",
    body: "Foreign foundations working with Indian implementing organisations meet both FCRA conditions and the terms of the partnership.",
  },
  {
    title: "Governance and cross-border funding",
    body: "Regulatory compliance, governance, and the treatment of cross-border funding. Some matters are undertaken under a non-disclosure arrangement.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nair & Co — NGO & FCRA Legal Advisory",
  url: `${siteUrl}/ngos`,
  provider: { "@id": organizationId },
  description:
    "FCRA registration, compliance, and enforcement defence for international NGOs and foundations operating in India.",
  areaServed: "India",
  serviceType: "FCRA Compliance & NGO Law",
};

export default function NGOsPage() {
  return (
    <LandingPageClient
      eyebrow="International NGOs · 03"
      heroLine1="Foreign contributions,"
      heroEmphasis="and the statute that governs them."
      heroBody="The practice advises foundations and non-profits in India on the Foreign Contribution (Regulation) Act, on governance, and on cross-border funding. Some of that work is confidential."
      problemHeadline="The Foreign Contribution (Regulation) Act sets the terms on which foreign funds may be received and used."
      problemBody={[
        "The Act is administered by the Ministry of Home Affairs. Registration, prior permission, renewal, designated accounts, utilisation, and sub-granting are separate questions. A show-cause, suspension, or cancellation is a further proceeding, with its own record.",
        "The advisory has covered foundations and non-profit organisations on these regulatory and compliance questions, and on governance and cross-border funding. Some matters are undertaken under a non-disclosure arrangement.",
      ]}
      services={services}
      pullQuote="FCRA work here is registration, compliance, governance, and the proceedings that follow when the Ministry raises a question."
      ctaEyebrow="FCRA"
      ctaHeadline="A separate team advises foundations and non-profits."
      ctaSubtext="Chambers are at the Supreme Court complex, Tilak Marg, New Delhi."
      schemaJson={JSON.stringify(schema)}
    />
  );
}
