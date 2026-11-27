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
    <p className="mb-s4 inline-flex min-h-12 items-center border border-antique bg-parchment px-s3 text-xs uppercase tracking-[0.14em] text-ink">
      {label}
    </p>
  );
}
