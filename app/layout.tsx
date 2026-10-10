import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Disclaimer from "@/components/Disclaimer";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://nairandco.in";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nair & Co",
  alternateName: "Nair & Co — Advocates & Consultants",
  description:
    "Nair & Co — Advocates & Consultants is a New Delhi practice of Tushaar Nair, an advocate of the Supreme Court of India. Legal advisory, corporate advisory, policy and regulatory advisory, courtroom litigation including the Supreme Court, mergers and acquisitions, intellectual property, and business expansion are delivered by dedicated teams. Management consultancy and investment banking are delivered by dedicated teams with the firm's strategic alliances and partner firms.",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "135, Additional Building Complex, Supreme Court of India, Tilak Marg",
    addressLocality: "New Delhi",
    postalCode: "110001",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: "Tushaar Nair",
    jobTitle: "Advocate, Supreme Court of India",
  },
  areaServed: "IN",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nair & Co — Advocates & Consultants",
    template: "%s | Nair & Co",
  },
  description:
    "Nair & Co — Advocates & Consultants, New Delhi. Practice of Tushaar Nair, an advocate of the Supreme Court of India. Each service is delivered by a dedicated team.",
  keywords: [
    "Nair & Co",
    "Advocates and Consultants New Delhi",
    "Tushaar Nair",
    "Supreme Court of India advocate",
    "legal advisory India",
    "corporate advisory",
    "regulatory advisory India",
    "intellectual property India",
    "CERC lawyer",
    "India arbitration lawyer",
    "FCRA compliance India",
    "nairandco.in",
  ],
  authors: [{ name: "Nair & Co", url: siteUrl }],
  creator: "Nair & Co",
  publisher: "Nair & Co",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Nair & Co",
    title: "Nair & Co — Advocates & Consultants",
    description:
      "A New Delhi practice of Tushaar Nair, advocate of the Supreme Court of India. Dedicated teams for each service. Management consultancy and investment banking with strategic alliances across the GCC, UK, Europe, and the Americas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nair & Co — Advocates & Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nair & Co — Advocates & Consultants",
    description:
      "New Delhi practice of Tushaar Nair, advocate of the Supreme Court of India. Each service is delivered by a dedicated team, with strategic alliances for management consultancy and investment banking.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="antialiased min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Disclaimer />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
