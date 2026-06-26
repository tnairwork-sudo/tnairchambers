import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { verifySession, SESSION_COOKIE } from "@/lib/reading-room/auth";
import { getDossier } from "@/lib/reading-room/clients";

export default async function DossierPage() {
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

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="container-site py-12 max-w-4xl">
      {/* Engagement header */}
      <h1 className="heading-display text-5xl mb-2">{dossier.name}</h1>
      <p className="text-lg text-parchment-dim mb-8">{dossier.engagement}</p>

      {/* Metadata */}
      <dl className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 pb-12 border-b border-border">
        <div>
          <dt className="label mb-2">Counsel</dt>
          <dd className="text-sm text-parchment">{dossier.counsel}</dd>
        </div>
        <div>
          <dt className="label mb-2">Reference</dt>
          <dd className="text-sm text-parchment font-mono">{dossier.reference}</dd>
        </div>
        <div>
          <dt className="label mb-2">Opened</dt>
          <dd className="text-sm text-parchment">
            {dateFormatter.format(new Date(dossier.opened))}
          </dd>
        </div>
      </dl>

      {/* Reports */}
      <div>
        <h2 className="heading-section text-2xl mb-8">Reports & Analysis</h2>
        <div className="space-y-4">
          {dossier.reports.map((report) => {
            const kindLabel =
              report.kind === "scenario"
                ? "Interactive Model"
                : report.kind === "memorandum"
                  ? "Memorandum"
                  : "Dashboard";
            const updatedDate = dateFormatter.format(new Date(report.updated));

            return (
              <Link
                key={report.id}
                href={`/reading-room/dossier/${report.id}`}
                className="block bg-surface border border-border p-6 hover:border-gold transition-colors group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xs tracking-ultra uppercase font-medium text-gold">
                        {kindLabel}
                      </span>
                      <span className="text-2xs text-parchment-dim">
                        {updatedDate}
                      </span>
                    </div>
                    <h3 className="heading-section text-lg text-parchment group-hover:text-gold transition-colors">
                      {report.title}
                    </h3>
                    <p className="text-sm text-parchment-dim mt-2">
                      {report.summary}
                    </p>
                    {report.reference && (
                      <p className="text-2xs text-parchment-dim mt-3 font-mono">
                        Ref: {report.reference}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0 text-gold group-hover:translate-x-1 transition-transform">
                    {report.kind === "scenario" ? "Open →" : "Read →"}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
