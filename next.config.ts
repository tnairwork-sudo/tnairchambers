// Redeploy marker. The portrait production deployment failed in the same second it was created. This source already passes next build.
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
      {
        source: "/tushaar-1.png",
        destination: "/tushaar-portrait.webp",
        permanent: true,
      },
      {
        source: "/tushaar-2.png",
        destination: "/tushaar-portrait.webp",
        permanent: true,
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
