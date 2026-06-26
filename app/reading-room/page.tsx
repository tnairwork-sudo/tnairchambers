import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession, SESSION_COOKIE } from "@/lib/reading-room/auth";
import Entrance from "@/components/reading-room/Entrance";

export default async function ReadingRoomPage({
  searchParams,
}: {
  searchParams: Promise<{ e?: string }>
}) {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE)?.value;

  if (sessionToken) {
    const session = verifySession(sessionToken);
    if (session) {
      redirect("/reading-room/dossier");
    }
  }

  const params = await searchParams;
  const error = params.e === "1";

  return <Entrance error={error} />;
}
