import Image from "next/image";

interface OpportunityAtlasFigureProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
}

export default function OpportunityAtlasFigure({
  src,
  alt,
  caption,
  priority = false,
  sizes = "(min-width: 1280px) 860px, 100vw",
}: OpportunityAtlasFigureProps) {
  return (
    <figure className="m-0 space-y-3 md:space-y-4">
      <div className="relative aspect-[16/9] overflow-hidden border border-border bg-surface">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={sizes}
        />
      </div>
      {caption ? (
        <figcaption className="text-sm italic leading-relaxed text-parchment-dim">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
