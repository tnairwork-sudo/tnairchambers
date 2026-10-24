import GuideChrome from "@/components/guides/GuideChrome";
import GuideFooter from "@/components/guides/GuideFooter";

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GuideChrome />
      <main className="pt-16">{children}</main>
      <GuideFooter />
    </>
  );
}
