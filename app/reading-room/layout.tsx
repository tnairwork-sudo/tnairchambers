import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Reading Room",
  alternates: { canonical: `${siteUrl}/reading-room` },
};

export default function ReadingRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-ink text-parchment min-h-screen">
      {children}
    </section>
  );
}
