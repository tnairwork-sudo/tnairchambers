import type { NextConfig } from "next";

const firmProfilePdfPath = "/profile/Nair-and-Co-Firm-Profile.pdf";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/profile",
        destination: firmProfilePdfPath,
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: firmProfilePdfPath,
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          {
            key: "Content-Disposition",
            value:
              'inline; filename="Nair-and-Co-Firm-Profile.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
