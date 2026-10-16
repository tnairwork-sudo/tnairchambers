export const siteUrl = "https://nairandco.in";

export const personId = `${siteUrl}/#tushar-nair`;
export const organizationId = `${siteUrl}/#nair-and-co`;
export const websiteId = `${siteUrl}/#website`;

export const brandName = "Nair & Co, Advocates & Consultants";

export const chamberStreetAddress =
  "Chamber No. 135, D Block, Additional Building Complex, Supreme Court of India, Tilak Marg";
export const chamberLocality = "New Delhi";
export const chamberRegion = "Delhi";
export const chamberPostalCode = "110001";
export const chamberAddressLine = `${chamberStreetAddress}, ${chamberLocality} ${chamberPostalCode}`;

export const chamberPhoneDisplay = "+91 85952 03751";
export const chamberPhoneHref = "tel:+918595203751";
export const chamberPhoneSchema = "+91-85952-03751";
export const chamberEmail = "tushaar@tnairchambers.in";

export const personProfiles = [
  { href: "https://www.linkedin.com/in/nairtushar9", label: "LinkedIn" },
  { href: "https://www.instagram.com/nairtushar9", label: "Instagram" },
  { href: "https://thebigdinner.in", label: "The Big Dinner" },
] as const;

export const personSameAs = personProfiles.map((profile) => profile.href);

export const ogImagePath = "/og-image.png";

export const ogImage = {
  url: ogImagePath,
  width: 1200,
  height: 630,
  alt: "Tushar Nair | Nair & Co, Advocates & Consultants",
};

export const homepageTitle =
  "Tushar Nair | Nair & Co, Advocates & Consultants";

export const homepageDescription =
  "Tushar Nair, Supreme Court of India advocate and founder of Nair & Co, leads advocates and consultants in New Delhi. The firm was formerly T Nair Chambers.";

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Tushar Nair",
      alternateName: ["Tushaar Nair", "T Nair", "Nair Tushar"],
      jobTitle: "Advocate, Supreme Court of India",
      telephone: chamberPhoneSchema,
      email: chamberEmail,
      description:
        "Tushar Nair, also written Tushaar Nair, is an advocate enrolled with the Bar Council of Delhi in 2024 (enrolment D/4136/2024) and the founder of Nair & Co, Advocates & Consultants. He practises before the Supreme Court of India, the Delhi High Court and the Punjab & Haryana High Court. The firm was formerly T Nair Chambers.",
      url: `${siteUrl}/about`,
      image: `${siteUrl}/tushaar-1.png`,
      worksFor: {
        "@type": ["LegalService", "Organization"],
        "@id": organizationId,
        name: "Nair & Co",
        url: siteUrl,
      },
      sameAs: personSameAs,
    },
    {
      "@type": ["LegalService", "Organization"],
      "@id": organizationId,
      name: "Nair & Co",
      legalName: "Nair & Co",
      alternateName: [brandName, "T Nair Chambers", "TN Chambers"],
      url: siteUrl,
      description:
        "Nair & Co, Advocates & Consultants, is a New Delhi practice founded by Tushar Nair. The firm was formerly T Nair Chambers. Legal, corporate, regulatory, and courtroom work, including electricity and power, are delivered by dedicated teams. Management consultancy and investment banking are delivered with strategic alliances.",
      founder: {
        "@type": "Person",
        "@id": personId,
        name: "Tushar Nair",
      },
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/wordmark.svg`,
      },
      image: `${siteUrl}${ogImagePath}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: chamberStreetAddress,
        addressLocality: chamberLocality,
        addressRegion: chamberRegion,
        postalCode: chamberPostalCode,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.6225,
        longitude: 77.2405,
      },
      telephone: chamberPhoneSchema,
      email: chamberEmail,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: chamberPhoneSchema,
        email: chamberEmail,
        contactType: "office",
        areaServed: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      knowsAbout: [
        "Electricity law",
        "Power sector regulation",
        "CERC and state electricity regulatory commissions",
        "APTEL appeals",
        "Supreme Court of India litigation",
        "Delhi High Court litigation",
        "Punjab and Haryana High Court litigation",
        "Corporate advisory",
        "FCRA compliance",
        "Trademark law",
        "Arbitration",
        "National Company Law Tribunal proceedings",
        "National Company Law Appellate Tribunal proceedings",
        "Data protection",
        "Property disputes",
        "Foreign market entry into India",
        "Labour law for international employers",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: brandName,
      alternateName: "Nair & Co",
      publisher: { "@id": organizationId },
      inLanguage: "en-IN",
    },
  ],
};
