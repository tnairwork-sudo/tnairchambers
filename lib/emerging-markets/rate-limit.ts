const ANALYSIS_WINDOW_MS = 30 * 60 * 1000;
const ANALYSIS_MAX = 6;
const MIN_GAP_MS = 10 * 1000;
const FLOOD_WINDOW_MS = 10 * 60 * 1000;
const FLOOD_MAX = 30;

interface Bucket {
  analysis: number[];
  flood: number[];
}

const globalStore = globalThis as typeof globalThis & {
  __tnEmergingMarketsRateLimit?: Map<string, Bucket>;
};

function buckets(): Map<string, Bucket> {
  if (!globalStore.__tnEmergingMarketsRateLimit) {
    globalStore.__tnEmergingMarketsRateLimit = new Map();
  }
  return globalStore.__tnEmergingMarketsRateLimit;
}

function prune(times: number[], now: number, windowMs: number): number[] {
  return times.filter((time) => now - time < windowMs);
}

export interface RateLimitResult {
  ok: boolean;
  retryAfterSec: number;
}

function retryAfter(times: number[], now: number, windowMs: number): number {
  const oldest = times[0] ?? now;
  return Math.max(1, Math.ceil((windowMs - (now - oldest)) / 1000));
}

/** Coarse cap on all requests, including invalid ones. */
export function noteRequest(key: string): RateLimitResult {
  const now = Date.now();
  const store = buckets();
  const bucket = store.get(key) ?? { analysis: [], flood: [] };
  bucket.flood = prune(bucket.flood, now, FLOOD_WINDOW_MS);
  if (bucket.flood.length >= FLOOD_MAX) {
    store.set(key, bucket);
    return { ok: false, retryAfterSec: retryAfter(bucket.flood, now, FLOOD_WINDOW_MS) };
  }
  bucket.flood.push(now);
  store.set(key, bucket);
  if (store.size > 5000) {
    const first = store.keys().next().value;
    if (first) store.delete(first);
  }
  return { ok: true, retryAfterSec: 0 };
}

/** Stricter cap, applied only once a submission is valid. */
export function noteAnalysis(key: string): RateLimitResult {
  const now = Date.now();
  const store = buckets();
  const bucket = store.get(key) ?? { analysis: [], flood: [] };
  bucket.analysis = prune(bucket.analysis, now, ANALYSIS_WINDOW_MS);
  const last = bucket.analysis[bucket.analysis.length - 1];
  if (last && now - last < MIN_GAP_MS) {
    store.set(key, bucket);
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil((MIN_GAP_MS - (now - last)) / 1000)) };
  }
  if (bucket.analysis.length >= ANALYSIS_MAX) {
    store.set(key, bucket);
    return { ok: false, retryAfterSec: retryAfter(bucket.analysis, now, ANALYSIS_WINDOW_MS) };
  }
  bucket.analysis.push(now);
  store.set(key, bucket);
  return { ok: true, retryAfterSec: 0 };
}
