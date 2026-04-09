import ContactReveal from "@/components/ContactReveal";

interface BookingCTAProps {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  id?: string;
}

export default function BookingCTA({
  eyebrow = "Advisory Call",
  headline,
  subtext,
  id = "book",
}: BookingCTAProps) {
  return (
    <section id={id} className="bg-surface border-t border-border">
      <div className="container-site py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="gold-rule" />
            <span className="label">{eyebrow}</span>
          </div>

          <h2 className="heading-section text-4xl md:text-5xl text-parchment mb-6 text-balance">
            {headline}
          </h2>

          {subtext && (
            <p className="text-base text-parchment-dim leading-relaxed mb-10 max-w-prose-tight">
              {subtext}
            </p>
          )}

          <ContactReveal />
        </div>
      </div>
    </section>
  );
}
