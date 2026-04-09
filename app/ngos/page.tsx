import type { Metadata } from "next";
import LandingPageClient from "@/components/LandingPageClient";

export const metadata: Metadata = {
  title: "FCRA Compliance & Legal Advisory for International NGOs in India",
  description:
    "International NGOs operating in India face FCRA registration, compliance obligations, and a fast-changing regulatory environment. TN Chambers provides legal advisory that keeps your licence to operate intact.",
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
  alternates: { canonical: "/ngos" },
  openGraph: {
    title: "FCRA & NGO Legal Advisory in India — TN Chambers",
    description:
      "Operating as a foreign NGO in India means navigating FCRA, compliance requirements, and a legal environment that changes faster than most advisories can track. One wrong move costs you your licence to operate.",
    url: "https://tnairchambers.in/ngos",
  },
};

const services = [
  {
    title: "FCRA Registration & Renewal",
    body: "New FCRA registrations, prior permission applications, and five-year renewals — handled precisely, with the documentation and timing that the Ministry of Home Affairs requires.",
  },
  {
    title: "FCRA Compliance Audit",
    body: "We review your current compliance posture — account designations, utilisation reporting, sub-granting arrangements — and identify exposure before the regulator does.",
  },
  {
    title: "MHA Show-Cause & Enforcement Response",
    body: "If you have received a show-cause notice, suspension notice, or cancellation order, you need an advocate who has handled these proceedings. Speed and precision are everything at this stage.",
  },
  {
    title: "Programme Structure Advisory",
    body: "How you receive, hold, and deploy foreign contribution determines your regulatory risk. We advise on programme structures that achieve your mission without triggering compliance exposure.",
  },
  {
    title: "CSR Partnership Compliance",
    body: "Foreign foundations partnering with Indian implementing organisations face a distinct set of FCRA and CSR compliance questions. We map the obligations on both sides.",
  },
  {
    title: "Regulatory Strategy for India Expansion",
    body: "For international NGOs planning to deepen their India operations, we provide a clear-eyed assessment of the regulatory path — including the political context that most legal advisors avoid.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "TN Chambers — NGO & FCRA Legal Advisory",
  url: "https://tnairchambers.in/ngos",
  description:
    "FCRA registration, compliance, and enforcement defence for international NGOs and foundations operating in India.",
  areaServed: "India",
  serviceType: "FCRA Compliance & NGO Law",
};

export default function NGOsPage() {
  return (
    <LandingPageClient
      eyebrow="International NGOs · 03"
      heroLine1="One wrong move costs you"
      heroEmphasis="your licence to operate."
      heroBody="Operating as a foreign NGO in India means navigating FCRA, compliance requirements, and a legal environment that changes faster than most advisories can track."
      problemHeadline="FCRA is not just paperwork. It is your permission to exist."
      problemBody={[
        "The Foreign Contribution (Regulation) Act governs how international NGOs receive and utilise foreign funds in India. The Ministry of Home Affairs administers it with increasing scrutiny. Cancellations, suspensions, and show-cause notices have increased substantially.",
        "Most international NGOs discover their compliance gap only when enforcement has already begun. By that point, your operations are frozen, your Indian partners are under pressure, and the legal response needs to be both immediate and correct.",
        "We have handled FCRA proceedings at every stage — from registration to enforcement defence. We know what the Ministry is looking for, what triggers investigation, and what it takes to restore operational status.",
      ]}
      services={services}
      pullQuote="In FCRA proceedings, timeliness is everything. A correct response filed one day late can cost you the registration entirely. This is not an area where you want to be finding your advocate."
      ctaEyebrow="NGO & FCRA Advisory"
      ctaHeadline="Tell us your situation. We'll tell you your exposure — and your options."
      ctaSubtext="A 30-minute call. Whether you are registering for the first time, preparing for renewal, or responding to enforcement, we will give you a direct assessment of where you stand and what needs to happen next."
      gradientStyle={{
        background:
          "radial-gradient(ellipse 60% 50% at 40% 50%, #251818 0%, transparent 70%)",
      }}
      schemaJson={JSON.stringify(schema)}
    />
  );
}
