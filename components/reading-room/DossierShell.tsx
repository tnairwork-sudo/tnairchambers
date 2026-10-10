import Link from "next/link";
import { signOut } from "@/app/reading-room/actions";
import Wordmark from "@/components/Wordmark";

export default function DossierShell({
  clientName,
  children,
}: {
  clientName: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-ink border-b border-border">
        <div className="container-site py-6 flex items-center justify-between">
          {/* Logo + Wordmark */}
          <Link href="/reading-room/dossier" className="flex items-center gap-4 hover:opacity-75 transition-opacity">
            <Wordmark className="text-[1.45rem]" />
            <span className="font-serif text-parchment text-xl tracking-tight hidden sm:inline">
              The Reading Room
            </span>
          </Link>

          {/* Client name + Sign out */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-parchment-dim">{clientName}</span>
            <form action={signOut}>
              <button
                type="submit"
                className="text-2xs tracking-ultra uppercase text-parchment-dim hover:text-parchment transition-colors font-medium"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-ink border-t border-border mt-12">
        <div className="container-site py-6 text-center text-2xs text-parchment-dim">
          Privileged & Confidential · Nair &amp; Co · New Delhi
        </div>
      </footer>
    </div>
  );
}
