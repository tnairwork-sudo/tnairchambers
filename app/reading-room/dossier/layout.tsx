import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession, SESSION_COOKIE } from "@/lib/reading-room/auth";
import { getDossier } from "@/lib/reading-room/clients";
import DossierShell from "@/components/reading-room/DossierShell";

export default async function DossierLayout({
  children,
}: {
  children: React.ReactNode;
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

  return <DossierShell clientName={dossier.name}>{children}</DossierShell>;
}
