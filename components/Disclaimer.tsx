"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Disclaimer() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const already = localStorage.getItem("tnc-disclaimer-accepted");
    if (!already) setVisible(true);
  }, []);

  function handleAccept() {
    if (!accepted) return;
    localStorage.setItem("tnc-disclaimer-accepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(28, 24, 20, 0.6)", backdropFilter: "blur(4px)" }}
    >
      <div className="bg-ink border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="border-b border-border px-8 py-6 flex flex-col gap-4">
          <Image
            src="/logo.png"
            alt="TN Chambers"
            width={64}
            height={32}
            className="h-8 w-auto"
          />
          <h1 className="font-serif text-3xl font-light text-parchment">
            Disclaimer
          </h1>
        </div>

        {/* Body */}
        <div className="px-8 py-7 space-y-5 text-sm text-parchment-dim leading-[1.85]">
          <p>
            The Bar Council of India prohibits advocates from advertising or soliciting in any form. By visiting tnairchambers.in, you confirm that you are seeking information about TN Chambers entirely of your own volition — and that no solicitation, advertisement, or inducement of any kind has been made by TN Chambers or any of its members.
          </p>
          <p>
            Everything on this website is provided for informational purposes only. Nothing here constitutes legal advice, nor should it be read as an invitation to form an advocate-client relationship. TN Chambers accepts no liability for any action taken, or omitted, in reliance upon the information contained herein.
          </p>
          <p>
            All content on this website is the intellectual property of TN Chambers and may not be reproduced or used without prior written consent.
          </p>
        </div>

        {/* Checkbox + CTA */}
        <div className="border-t border-border px-8 py-6">
          <label className="flex items-start gap-3 cursor-pointer group mb-6">
            <div className="relative mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-4 h-4 border transition-colors duration-200 flex items-center justify-center
                ${accepted ? "bg-parchment border-parchment" : "border-border bg-transparent group-hover:border-parchment-dim"}`}
              >
                {accepted && (
                  <svg className="w-2.5 h-2.5 text-ink" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
            <span className="text-xs text-parchment-dim leading-relaxed">
              I have read and understood the disclaimer above. I wish to proceed to the website of TN Chambers.
            </span>
          </label>

          <button
            onClick={handleAccept}
            disabled={!accepted}
            className={`btn-primary w-full justify-center transition-opacity duration-200
              ${!accepted ? "opacity-30 cursor-not-allowed" : "opacity-100"}`}
          >
            I Accept & Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
