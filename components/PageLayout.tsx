import SiteJsonLd from "@/components/SiteJsonLd";
import Nav from "./Nav";
import Footer from "./Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteJsonLd />
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
