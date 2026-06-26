import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Reading Room",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
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
