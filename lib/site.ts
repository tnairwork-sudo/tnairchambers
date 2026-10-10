export const siteUrl = "https://nairandco.in";

export const personId = `${siteUrl}/#tushar-nair`;
export const organizationId = `${siteUrl}/#nair-and-co`;

/**
 * sameAs accepts only profile URLs that already exist in this codebase,
 * plus https://thebigdinner.in, which is the founder's public project.
 * LinkedIn and Instagram profile URLs are not present in the repository.
 */
export const personSameAs = ["https://thebigdinner.in"];

export const ogImagePath = "/og-image.png";

export const ogImage = {
  url: ogImagePath,
  width: 1200,
  height: 630,
  alt: "Tushar Nair | Nair & Co — Advocates & Consultants",
};

export const homepageTitle =
  "Tushar Nair | Nair & Co — Advocates & Consultants";

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
      description:
        "Tushar Nair is an Advocate at the Supreme Court of India and the founder of Nair & Co.",
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
      alternateName: ["T Nair Chambers", "TN Chambers"],
      url: siteUrl,
      description:
        "Nair & Co is a New Delhi practice of advocates and consultants founded by Tushar Nair. The firm was formerly T Nair Chambers.",
      founder: {
        "@type": "Person",
        "@id": personId,
        name: "Tushar Nair",
      },
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      image: `${siteUrl}${ogImagePath}`,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "135, Additional Building Complex, Supreme Court of India, Tilak Marg",
        addressLocality: "New Delhi",
        postalCode: "110001",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
  ],
};
