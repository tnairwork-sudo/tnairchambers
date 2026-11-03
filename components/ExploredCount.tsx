"use client";

import { useEffect, useState } from "react";
import { EXPLORED_EVENT, readExplored } from "@/lib/explored";

export default function ExploredCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sync = () => setCount(readExplored().length);
    sync();
    window.addEventListener(EXPLORED_EVENT, sync);
    return () => window.removeEventListener(EXPLORED_EVENT, sync);
  }, []);

  const label = `${count} ${count === 1 ? "guide" : "guides"} explored`;

  return (
    <p className="mb-10 inline-flex border border-accent bg-accent px-4 py-2 text-2xs uppercase tracking-[0.14em] text-ink">
      {label}
    </p>
  );
}
