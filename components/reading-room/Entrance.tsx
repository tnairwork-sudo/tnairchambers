"use client";

import Image from "next/image";
import { authenticate } from "@/app/reading-room/actions";
import SubmitButton from "@/components/reading-room/SubmitButton";

export default function Entrance({ error }: { error: boolean }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-[420px]">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="TN Chambers"
            width={80}
            height={40}
            className="h-10 w-auto"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Gold rule */}
        <div className="flex justify-center mb-8">
          <div className="gold-rule" />
        </div>

        {/* Title */}
        <h1 className="heading-display text-center text-4xl mb-3">
          The Reading Room
        </h1>

        {/* Subtitle */}
        <p className="label text-center mb-10">
          Private Client Access · By Reference Only
        </p>

        {/* Form */}
        <form action={authenticate} className="space-y-6">
          {/* Client Reference field */}
          <div>
            <label htmlFor="clientId" className="label block mb-2">
              Client Reference
            </label>
            <input
              id="clientId"
              name="clientId"
              type="text"
              autoComplete="username"
              required
              className="w-full bg-surface border border-border text-parchment px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink transition-all"
            />
          </div>

          {/* Passphrase field */}
          <div>
            <label htmlFor="password" className="label block mb-2">
              Passphrase
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full bg-surface border border-border text-parchment px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink transition-all"
            />
          </div>

          {/* Error message */}
          {error && (
            <p className="text-gold-light text-sm text-center">
              Those credentials were not recognised.
            </p>
          )}

          {/* Submit button */}
          <SubmitButton />
        </form>

        {/* Footnote */}
        <p className="text-center text-2xs text-parchment-dim mt-8">
          Clients without a reference should contact{" "}
          <a
            href="mailto:tushaar@tnairchambers.in"
            className="text-gold hover:text-gold-light transition-colors"
          >
            tushaar@tnairchambers.in
          </a>
          .
        </p>
      </div>
    </div>
  );
}
