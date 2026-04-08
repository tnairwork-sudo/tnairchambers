"use client";

import { useEffect, useState } from "react";

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
        <div className="border-b border-border px-8 py-6">
          <div className="flex items-center gap-4 mb-1">
            <div className="gold-rule" />
            <span className="label">Legal Notice</span>
          </div>
          <h1 className="font-serif text-2xl font-light text-parchment mt-3">
            Disclaimer
          </h1>
        </div>

        {/* Body */}
        <div className="px-8 py-6 space-y-5 text-sm text-parchment-dim leading-relaxed">
          <p>
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, tnairchambers.in, you acknowledge and confirm that you are seeking information relating to TN Chambers of your own accord and that there has been no form of solicitation, advertisement or inducement by TN Chambers or any of its members.
          </p>
          <p>
            The content of this website is for informational purposes only and shall not be interpreted as soliciting or advertisement. No material or information provided on this website should be construed as legal advice. TN Chambers shall not be liable for any consequence of any action taken by relying on the material or information provided on this website.
          </p>
          <p>
            The contents of this website are the intellectual property of TN Chambers.
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
