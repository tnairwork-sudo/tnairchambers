type WordmarkProps = {
  className?: string;
};

/**
 * Text wordmark in the site serif.
 */
export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span
      className={`inline-block font-serif font-light tracking-tight text-parchment leading-none whitespace-nowrap ${className}`}
    >
      Nair <span className="italic">&amp;</span> Co
    </span>
  );
}
