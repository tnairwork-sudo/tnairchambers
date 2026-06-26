"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  verifyPassword,
  getStoredPassword,
  createSession,
  SESSION_COOKIE,
  SESSION_MAX_AGE,
} from "@/lib/reading-room/auth";
import { getDossier } from "@/lib/reading-room/clients";

export async function authenticate(formData: FormData): Promise<void> {
  const clientId = (formData.get("clientId") as string)?.trim().toLowerCase() ?? "";
  const password = (formData.get("password") as string) ?? "";

  // Always verify to keep timing roughly uniform
  const stored = getStoredPassword(clientId);
  const passwordValid = stored ? verifyPassword(password, stored) : false;
  const dossierExists = getDossier(clientId) !== null;

  if (!passwordValid || !dossierExists) {
    // Generic error: never reveal whether id or password was wrong
    redirect("/reading-room?e=1");
  }

  // Authentication successful: create session and set cookie
  const sessionToken = createSession(clientId);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/reading-room",
    maxAge: SESSION_MAX_AGE,
  });

  redirect("/reading-room/dossier");
}

export async function signOut(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  redirect("/reading-room");
}
