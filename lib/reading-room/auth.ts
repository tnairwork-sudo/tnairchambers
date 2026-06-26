import "server-only";
import { createHash, createHmac, scryptSync, timingSafeEqual } from "node:crypto";

/**
 * Hash a password with a random salt using scrypt.
 * Returns "<saltHex>:<hashHex>" format.
 */
export function hashPassword(password: string): string {
  const salt = createHash("sha256").digest().slice(0, 16);
  const key = scryptSync(password, salt, 64);
  return `${salt.toString("hex")}:${key.toString("hex")}`;
}

/**
 * Verify a password against its stored hash using constant-time comparison.
 */
export function verifyPassword(password: string, stored: string): boolean {
  const [saltHex, hashHex] = stored.split(":");
  if (!saltHex || !hashHex) return false;

  try {
    const salt = Buffer.from(saltHex, "hex");
    const key = scryptSync(password, salt, 64);
    const providedHash = key.toString("hex");

    const storedBuffer = Buffer.from(hashHex, "hex");
    const providedBuffer = Buffer.from(providedHash, "hex");

    return timingSafeEqual(providedBuffer, storedBuffer);
  } catch {
    return false;
  }
}

/**
 * Retrieve the stored password hash for a client from env.
 * Variable name is RR_PW_<CLIENTID> (uppercase, non-alphanumerics → _).
 */
export function getStoredPassword(clientId: string): string | null {
  const key = `RR_PW_${clientId.toUpperCase().replace(/[^A-Z0-9]/g, "_")}`;
  return process.env[key] ?? null;
}

export const SESSION_COOKIE = "rr_session";
export const SESSION_MAX_AGE = 43200; // 12 hours in seconds

/**
 * Create a signed session token.
 * Payload: { sub (clientId), exp (expiration timestamp) } base64url-encoded.
 */
export function createSession(clientId: string): string {
  const secret = process.env.RR_SESSION_SECRET;
  if (!secret) throw new Error("RR_SESSION_SECRET is not set");

  const exp = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
  const payload = { sub: clientId, exp };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");

  const signature = createHmac("sha256", secret)
    .update(body)
    .digest()
    .toString("base64url");

  return `${body}.${signature}`;
}

/**
 * Verify a signed session token.
 * Returns { sub, exp } if valid, null otherwise.
 */
export function verifySession(
  token: string
): { sub: string; exp: number } | null {
  const secret = process.env.RR_SESSION_SECRET;
  if (!secret) return null;

  try {
    const [body, signature] = token.split(".");
    if (!body || !signature) return null;

    const expectedSignature = createHmac("sha256", secret)
      .update(body)
      .digest()
      .toString("base64url");

    const signatureBuf = Buffer.from(signature, "base64url");
    const expectedBuf = Buffer.from(expectedSignature, "base64url");

    if (!timingSafeEqual(signatureBuf, expectedBuf)) return null;

    const payload = JSON.parse(
      Buffer.from(body, "base64url").toString("utf-8")
    ) as { sub: string; exp: number };

    if (payload.exp <= Date.now() / 1000) return null;

    return payload;
  } catch {
    return null;
  }
}
