import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import EmergingMarketsTool from "@/components/EmergingMarketsTool";

const siteUrl = "https://nairandco.in";
const path = "/emerging-markets";

export const metadata: Metadata = {
  title: "Emerging Markets and Business Opportunities",
  description:
    "A private briefing on business expansion. Enter turnover, products, and preferences, and receive a written note on markets, demand, regulatory questions, entry route, risks, and next steps.",
  keywords: [
    "emerging markets",
    "business expansion",
    "market entry strategy",
    "cross-border structuring",
    "foreign investment",
    "Nair & Co",
  ],
  alternates: { canonical: path },
  openGraph: {
    title: "Emerging Markets and Business Opportunities | Nair & Co",
    description:
      "A written briefing on where a company might expand: markets, demand, regulatory questions, entry route, risks, and next steps.",
    url: `${siteUrl}${path}`,
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emerging Markets and Business Opportunities",
  url: `${siteUrl}${path}`,
  description:
    "An informational briefing tool on international business expansion, prepared for visitors to Nair & Co.",
  isPartOf: {
    "@type": "WebSite",
    name: "Nair & Co",
    url: siteUrl,
  },
  about: {
    "@type": "LegalService",
    name: "Nair & Co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "135, Additional Building Complex, Supreme Court of India, Tilak Marg",
      addressLocality: "New Delhi",
      postalCode: "110001",
      addressCountry: "IN",
    },
  },
};

export default function EmergingMarketsPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="border-b border-border">
        <div className="container-site py-20 md:py-28 lg:py-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-rule" />
            <span className="label">Cross-border advisory</span>
          </div>
          <h1 className="heading-display text-[clamp(2.6rem,6vw,5.2rem)] text-parchment mb-6 text-balance max-w-hero">
            Emerging Markets and Business Opportunities
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-gold-light font-light mb-8 max-w-3xl text-balance">
            A written note on where the company might go next.
          </p>
          <p className="text-base md:text-lg text-parchment-dim leading-relaxed max-w-3xl">
            Set out the annual turnover, the products and services, and a short
            description of the company. Add a region, a budget, a timeline, a
            risk tolerance, or a preferred way in — or leave any of those blank.
            What comes back is a briefing on markets that may fit, the demand
            for what you sell, the regulatory and legal questions, a route in,
            the risks, and the practical next steps. A live briefing searches
            the web and X for current news, trade data, and regulation, and
            lists the sources it used.
          </p>
        </div>
      </section>
      <EmergingMarketsTool />
    </PageLayout>
  );
}
