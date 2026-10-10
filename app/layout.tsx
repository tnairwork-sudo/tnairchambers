import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Disclaimer from "@/components/Disclaimer";
import SmoothScroll from "@/components/SmoothScroll";
import {
  homepageDescription,
  homepageTitle,
  ogImage,
  siteJsonLd,
  siteUrl,
} from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homepageTitle,
    template: "%s | Nair & Co",
  },
  description: homepageDescription,
  keywords: [
    "Tushar Nair",
    "Tushaar Nair",
    "T Nair",
    "Nair Tushar",
    "Nair & Co",
    "Advocates and Consultants New Delhi",
    "T Nair Chambers",
    "TN Chambers",
    "Supreme Court advocate India",
    "Delhi High Court advocate",
    "Punjab and Haryana High Court advocate",
    "CERC lawyer",
    "India arbitration lawyer",
    "FCRA compliance India",
    "cross-border legal advisory India",
    "legal advisory India",
    "corporate advisory",
    "regulatory advisory India",
    "intellectual property India",
    "nairandco.in",
  ],
  authors: [{ name: "Tushar Nair", url: `${siteUrl}/about` }],
  creator: "Tushar Nair",
  publisher: "Nair & Co",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Nair & Co",
    title: homepageTitle,
    description: homepageDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homepageTitle,
    description: homepageDescription,
    images: [ogImage.url],
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
      <body className="antialiased min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Disclaimer />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
