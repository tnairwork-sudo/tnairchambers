import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Disclaimer from "@/components/Disclaimer";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  homepageDescription,
  homepageTitle,
  ogImage,
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

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined;
const bingSiteVerification =
  process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim() || undefined;

const verification: Metadata["verification"] | undefined =
  googleSiteVerification || bingSiteVerification
    ? {
        ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
        ...(bingSiteVerification
          ? { other: { "msvalidate.01": bingSiteVerification } }
          : {}),
      }
    : undefined;

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
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  ...(verification ? { verification } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen">
        <Disclaimer />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
