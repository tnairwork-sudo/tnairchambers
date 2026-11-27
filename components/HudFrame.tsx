export default function HudFrame() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <svg className="absolute left-s3 top-s8 h-10 w-10 text-gold/80 md:left-s5 md:top-s8" viewBox="0 0 40 40">
        <path d="M1 16 V1 H16" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className="absolute right-s3 top-s8 h-10 w-10 text-gold/80 md:right-s5" viewBox="0 0 40 40">
        <path d="M24 1 H39 V16" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className="absolute bottom-s4 left-s3 h-10 w-10 text-gold/80 md:left-s5" viewBox="0 0 40 40">
        <path d="M1 24 V39 H16" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className="absolute bottom-s4 right-s3 h-10 w-10 text-gold/80 md:right-s5" viewBox="0 0 40 40">
        <path d="M24 39 H39 V24" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <p className="absolute bottom-s4 left-1/2 -translate-x-1/2 font-sans text-[12px] tracking-[0.18em] text-gold/80">
        041 218 006
      </p>
    </div>
  );
}
