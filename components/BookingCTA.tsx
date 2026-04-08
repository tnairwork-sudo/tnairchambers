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

          {/* Replace href with your Calendly or booking URL */}
          <a
            href="https://calendly.com/tnairchambers/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a 30-Minute Advisory Call
            <span className="text-base leading-none" aria-hidden>→</span>
          </a>

          <p className="mt-6 text-xs text-parchment-dim/60 tracking-wide">
            No commitment. Confidential. Available for clients in all time zones.
          </p>
        </div>
      </div>
    </section>
  );
}
