import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { verifySession, SESSION_COOKIE } from "@/lib/reading-room/auth";
import { getDossier, getReport } from "@/lib/reading-room/clients";
import FreeZoneScenario from "@/components/reading-room/reports/FreeZoneScenario";

export default async function ReportPage({
  params,
}: {
  params: Promise<{ reportId: string }>
}) {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE)?.value;

  if (!sessionToken) {
    redirect("/reading-room");
  }

  const session = verifySession(sessionToken);
  if (!session) {
    redirect("/reading-room");
  }

  const dossier = getDossier(session.sub);
  if (!dossier) {
    redirect("/reading-room");
  }

  const { reportId } = await params;
  const report = getReport(session.sub, reportId);
  if (!report) {
    notFound();
  }

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const updatedDate = dateFormatter.format(new Date(report.updated));

  return (
    <div className="container-site py-12 max-w-4xl">
      {/* Breadcrumb */}
      <Link
        href="/reading-room/dossier"
        className="inline-flex items-center gap-2 text-2xs tracking-ultra uppercase text-parchment-dim hover:text-parchment transition-colors mb-8"
      >
        ← Back to Dossier
      </Link>

      {/* Report header */}
      <div className="mb-12 pb-12 border-b border-border">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xs tracking-ultra uppercase font-medium text-gold">
                {report.kind === "scenario"
                  ? "Interactive Model"
                  : report.kind === "memorandum"
                    ? "Memorandum"
                    : "Dashboard"}
              </span>
              <span className="text-2xs text-parchment-dim">{updatedDate}</span>
            </div>
            <h1 className="heading-display text-4xl mb-2">{report.title}</h1>
            <p className="text-lg text-parchment-dim">{report.summary}</p>
            {report.reference && (
              <p className="text-sm text-parchment-dim mt-4 font-mono">
                Ref: {report.reference}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Report content */}
      <div className="mb-12">
        {report.viewer === "free-zone-scenario" && <FreeZoneScenario />}
        {report.kind === "memorandum" && (
          <div className="bg-surface border border-border p-8 text-parchment-dim">
            <p className="text-center italic">
              Memorandum content · Privileged & Confidential
            </p>
          </div>
        )}
      </div>

      {/* Confidentiality notice */}
      <div className="text-center text-sm text-parchment-dim italic pt-12 border-t border-border">
        Privileged & Confidential — prepared for {dossier.name} only
      </div>
    </div>
  );
}
