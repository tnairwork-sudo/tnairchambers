# Temporary file to generate hash
# This will be deleted after setup

import { createHash, scryptSync } from "node:crypto";

const password = "KartikSohar2024#";
const salt = createHash("sha256").digest().slice(0, 16);
const key = scryptSync(password, salt, 64);
const hash = `${salt.toString("hex")}:${key.toString("hex")}`;

console.log("Add this to Vercel:");
console.log(`RR_PW_PRECIOUS_ELECTROCHEM=${hash}`);
console.log("\nValue only (paste into Vercel):");
console.log(hash);
