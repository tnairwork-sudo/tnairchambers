const KEY = "tnc-guides-explored";
export const EXPLORED_EVENT = "tnc-guides-explored";

export function readExplored(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => typeof item === "string");
  } catch {
    return [];
  }
}

export function markExplored(slug: string) {
  const current = readExplored();
  if (current.includes(slug)) return current;
  const next = [...current, slug];
  window.localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent(EXPLORED_EVENT));
  return next;
}
