import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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

const siteUrl = "https://tnairchambers.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TN Chambers — Supreme Court Advocate | Electricity, Arbitration & Cross-Border Advisory",
    template: "%s | TN Chambers",
  },
  description:
    "TN Chambers is a Supreme Court advocate practice specialising in electricity regulation, arbitration, and cross-border legal advisory for international companies operating in India.",
  keywords: [
    "Supreme Court advocate India",
    "CERC lawyer",
    "APTEL advocate",
    "electricity regulation India",
    "India arbitration lawyer",
    "foreign company India legal counsel",
    "India entry legal advisory",
    "FCRA compliance India",
    "cross-border legal advisory India",
    "TN Chambers",
    "tnairchambers.in",
  ],
  authors: [{ name: "TN Chambers", url: siteUrl }],
  creator: "TN Chambers",
  publisher: "TN Chambers",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "TN Chambers",
    title: "TN Chambers — Supreme Court Advocate Practice",
    description:
      "Electricity regulation, arbitration, and cross-border legal advisory. Built for companies navigating India's legal architecture.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TN Chambers — Supreme Court Advocate Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TN Chambers — Supreme Court Advocate Practice",
    description:
      "Electricity regulation, arbitration, and cross-border legal advisory for companies navigating India.",
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
        {children}
      </body>
    </html>
  );
}
