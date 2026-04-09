import type { Metadata } from "next";
import LandingPageClient from "@/components/LandingPageClient";

export const metadata: Metadata = {
  title: "India Labour Law Advisory for International Employers — TN Chambers",
  description:
    "Employing people in India is not like employing people anywhere else. Labour law, termination risk, contractor classification, and state-level variations will surprise you. TN Chambers provides clear, direct advisory for international employers.",
  keywords: [
    "India labour law foreign employer",
    "employment law India international company",
    "India termination law foreign company",
    "contractor employee classification India",
    "India HR legal advisory",
    "India employment compliance international",
    "labour law India advocate",
    "India workforce legal advisory",
    "PF ESI compliance India foreign employer",
    "India labour code compliance",
  ],
  alternates: { canonical: "/employers" },
  openGraph: {
    title: "India Employment & Labour Law for International Employers — TN Chambers",
    description:
      "Employing people in India is not like employing people anywhere else. Labour law, termination risk, contractor classification, and state-level variations will surprise you. They don't have to.",
    url: "https://tnairchambers.in/employers",
  },
};

const services = [
  {
    title: "Employment Contract Review & Drafting",
    body: "Contracts that are legally enforceable in India, not just in the jurisdiction of your headquarters. We draft for the Indian employment law reality — not for theoretical best practice.",
  },
  {
    title: "Termination Risk Assessment",
    body: "India's Industrial Disputes Act, standing orders, and retrenchment provisions create real termination risk for employers. We assess the exposure before you act — not after.",
  },
  {
    title: "Contractor Classification",
    body: "The line between contractor and employee is one of the most litigated questions in Indian labour law. Misclassification carries significant retrospective liability. We map your workforce structures clearly.",
  },
  {
    title: "PF, ESI & Statutory Compliance",
    body: "Provident Fund, Employees' State Insurance, gratuity, and the new Labour Codes — the statutory compliance obligations for Indian employers are layered and change with headcount and state.",
  },
  {
    title: "State-Level Labour Law Navigation",
    body: "Labour law in India is partly state-governed. Shops and Establishments Acts, state-specific industrial relations rules, and local enforcement patterns vary significantly. We advise across states.",
  },
  {
    title: "Workforce Restructuring & Exits",
    body: "Redundancies, restructuring, and leadership transitions carry legal risk in India that most international employers discover too late. We structure exits correctly from the start.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "TN Chambers — India Labour & Employment Law Advisory",
  url: "https://tnairchambers.in/employers",
  description:
    "Labour law, employment compliance, termination risk, and contractor classification advisory for international companies employing people in India.",
  areaServed: "India",
  serviceType: "Employment & Labour Law",
};

export default function EmployersPage() {
  return (
    <LandingPageClient
      eyebrow="International Employers · 04"
      heroLine1="Employing people in India"
      heroEmphasis="will surprise you. It doesn't have to."
      heroBody="Labour law, termination risk, contractor classification, and state-level variations are not challenges you discover after the problem has happened. We get you ahead of them."
      problemHeadline="India's employment law doesn't work like anywhere else. Most employers find this out at the worst possible moment."
      problemBody={[
        "India's labour law framework is not a unified system. It is a layered architecture of central statutes, state-level rules, standing orders, and enforcement patterns that differ not just by state but by industry, headcount, and type of establishment.",
        "International companies that enter India with their standard employment practices — at-will termination, broad contractor usage, centralised payroll — frequently discover retrospective statutory liability, reinstatement orders, and enforcement actions they never anticipated.",
        "The New Labour Codes have consolidated some of this, but implementation is uneven and the transition period has created its own compliance questions. We stay current, so you don't have to.",
      ]}
      services={services}
      pullQuote="The question is never whether Indian labour law is complex. It is. The question is whether your India HR structure has been built by someone who understands that complexity — or whether you are about to find out."
      ctaEyebrow="Employment Law Advisory"
      ctaHeadline="Tell us how you currently employ people in India. We'll tell you where your exposure is."
      ctaSubtext="A 30-minute call. We'll ask about your headcount, your states of operation, your contractor arrangements, and your current contracts. You'll leave with a clear picture of what needs attention."
      gradientStyle={{
        background:
          "radial-gradient(ellipse 65% 50% at 55% 35%, #181825 0%, transparent 70%)",
      }}
      schemaJson={JSON.stringify(schema)}
    />
  );
}
