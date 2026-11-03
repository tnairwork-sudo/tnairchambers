"use client";

import { useEffect } from "react";
import { markExplored } from "@/lib/explored";

export default function MarkExplored({ slug }: { slug: string }) {
  useEffect(() => {
    markExplored(slug);
  }, [slug]);

  return null;
}
