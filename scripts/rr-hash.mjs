#!/usr/bin/env node

import { createHash, scryptSync } from "node:crypto";

const clientId = process.argv[2];
const password = process.argv[3];

if (!clientId || !password) {
  console.error(
    "Usage: node scripts/rr-hash.mjs <client-id> \"<password>\""
  );
  process.exit(1);
}

// Same scheme as lib/reading-room/auth.ts hashPassword()
const salt = createHash("sha256").digest().slice(0, 16);
const key = scryptSync(password, salt, 64);
const hash = `${salt.toString("hex")}:${key.toString("hex")}`;

const envKey = `RR_PW_${clientId.toUpperCase().replace(/[^A-Z0-9]/g, "_")}`;
console.log(`${envKey}=${hash}`);
