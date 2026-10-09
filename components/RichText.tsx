import type { ReactNode } from "react";

/**
 * Minimal inline markup used by Opportunity Atlas articles:
 * **bold**, *italic*, and [label](href). Plain text is returned unchanged.
 */
export function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let buffer = "";
  let key = 0;
  let index = 0;

  const flush = () => {
    if (!buffer) {
      return;
    }
    nodes.push(buffer);
    buffer = "";
  };

  while (index < text.length) {
    if (text.startsWith("**", index)) {
      const end = text.indexOf("**", index + 2);
      if (end !== -1) {
        flush();
        nodes.push(
          <strong key={key++} className="font-medium text-parchment">
            {text.slice(index + 2, end)}
          </strong>
        );
        index = end + 2;
        continue;
      }
    }

    if (text[index] === "*") {
      const end = text.indexOf("*", index + 1);
      if (end !== -1 && end > index + 1) {
        flush();
        nodes.push(<em key={key++}>{text.slice(index + 1, end)}</em>);
        index = end + 1;
        continue;
      }
    }

    if (text[index] === "[") {
      const labelEnd = text.indexOf("]", index + 1);
      if (labelEnd !== -1 && text[labelEnd + 1] === "(") {
        const hrefEnd = text.indexOf(")", labelEnd + 2);
        if (hrefEnd !== -1) {
          const label = text.slice(index + 1, labelEnd);
          const href = text.slice(labelEnd + 2, hrefEnd);
          const external = /^https?:\/\//.test(href);
          flush();
          nodes.push(
            <a
              key={key++}
              href={href}
              className="text-gold underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:text-gold-light"
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>
          );
          index = hrefEnd + 1;
          continue;
        }
      }
    }

    buffer += text[index];
    index += 1;
  }

  flush();
  return nodes;
}

export default function RichText({ text }: { text: string }) {
  return <>{parseInline(text)}</>;
}
