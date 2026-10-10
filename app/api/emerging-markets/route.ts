import { NextResponse } from "next/server";
import { AnalysisError, prepareBriefing } from "@/lib/emerging-markets/analyze";
import { validateExpansionRequest } from "@/lib/emerging-markets/options";
import { noteAnalysis, noteRequest } from "@/lib/emerging-markets/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const MAX_BODY = 20_000;

function clientAddress(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown";
  return ip.slice(0, 80);
}

function limited(retryAfterSec: number) {
  const error =
    retryAfterSec >= 60
      ? "Another briefing can be requested in a few minutes."
      : "Please wait a moment before requesting another briefing.";
  return NextResponse.json(
    { error, retryAfterSec },
    { status: 429, headers: { "Retry-After": String(retryAfterSec) } },
  );
}

export function GET() {
  return NextResponse.json(
    { error: "Use the briefing form on the website." },
    { status: 405, headers: { Allow: "POST" } },
  );
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json(
          { error: "This briefing can only be requested from the chambers website." },
          { status: 403 },
        );
      }
    } catch {
      return NextResponse.json(
        { error: "This briefing can only be requested from the chambers website." },
        { status: 403 },
      );
    }
  }

  const flood = noteRequest(clientAddress(request));
  if (!flood.ok) return limited(flood.retryAfterSec);

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Send the company details as JSON." }, { status: 415 });
  }

  const declared = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declared) && declared > MAX_BODY) {
    return NextResponse.json(
      { error: "That submission is too long. Please shorten the description and try again." },
      { status: 413 },
    );
  }

  let raw = "";
  try {
    raw = await request.text();
  } catch {
    return NextResponse.json({ error: "We could not read that submission." }, { status: 400 });
  }
  if (raw.length > MAX_BODY) {
    return NextResponse.json(
      { error: "That submission is too long. Please shorten the description and try again." },
      { status: 413 },
    );
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "We could not read that submission." }, { status: 400 });
  }

  const parsed = validateExpansionRequest(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error, field: parsed.field }, { status: 400 });
  }

  const analysisLimit = noteAnalysis(clientAddress(request));
  if (!analysisLimit.ok) return limited(analysisLimit.retryAfterSec);

  try {
    const result = await prepareBriefing(parsed.value);
    return NextResponse.json({
      preview: result.preview,
      preparedAt: new Date().toISOString(),
      input: parsed.value,
      report: result.report,
    });
  } catch (error) {
    if (error instanceof AnalysisError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    return NextResponse.json(
      {
        error:
          "We could not prepare a briefing just now. Please try again, or write to tushaar@tnairchambers.in.",
      },
      { status: 500 },
    );
  }
}
