"use client";

import { useMemo, useState } from "react";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 1,
});

export default function FreeZoneScenario() {
  const [importValue, setImportValue] = useState(5000000); // ₹5M
  const [mfnDuty, setMfnDuty] = useState(10); // 10%
  const [cepaDuty, setCepaDuty] = useState(2); // 2%
  const [fzCost, setFzCost] = useState(50000000); // ₹50M

  const calculations = useMemo(() => {
    const mfnLiability = importValue * (mfnDuty / 100);
    const cepaLiability = importValue * (cepaDuty / 100);
    const annualSaving = mfnLiability - cepaLiability;
    const paybackMonths = annualSaving > 0 ? (fzCost / annualSaving) * 12 : 0;

    return {
      mfnLiability,
      cepaLiability,
      annualSaving,
      paybackMonths,
    };
  }, [importValue, mfnDuty, cepaDuty, fzCost]);

  const maxMfn = Math.max(calculations.mfnLiability, calculations.cepaLiability);

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-surface border border-border p-8 space-y-6">
        <h3 className="heading-section text-lg">Model Inputs</h3>

        {/* Annual Import Value */}
        <div>
          <label className="label block mb-3">
            Annual Import Value (₹)
          </label>
          <input
            type="range"
            min="1000000"
            max="50000000"
            step="1000000"
            value={importValue}
            onChange={(e) => setImportValue(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-parchment mt-2">
            {currencyFormatter.format(importValue)}
          </p>
        </div>

        {/* Standard (MFN) Duty % */}
        <div>
          <label className="label block mb-3">Standard Duty (%)</label>
          <input
            type="range"
            min="0"
            max="30"
            step="0.5"
            value={mfnDuty}
            onChange={(e) => setMfnDuty(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-parchment mt-2">{numberFormatter.format(mfnDuty)}%</p>
        </div>

        {/* CEPA Duty % */}
        <div>
          <label className="label block mb-3">CEPA Duty (%)</label>
          <input
            type="range"
            min="0"
            max="30"
            step="0.5"
            value={cepaDuty}
            onChange={(e) => setCepaDuty(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-parchment mt-2">{numberFormatter.format(cepaDuty)}%</p>
        </div>

        {/* Free Zone Establishment Cost */}
        <div>
          <label className="label block mb-3">
            FZ Establishment Cost (₹)
          </label>
          <input
            type="range"
            min="10000000"
            max="200000000"
            step="5000000"
            value={fzCost}
            onChange={(e) => setFzCost(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-parchment mt-2">
            {currencyFormatter.format(fzCost)}
          </p>
        </div>
      </div>

      {/* Comparative Bars */}
      <div className="bg-surface border border-border p-8 space-y-6">
        <h3 className="heading-section text-lg">Annual Duty Liability</h3>

        <div className="space-y-4">
          {/* MFN bar */}
          <div>
            <p className="label mb-2">Standard (MFN)</p>
            <div className="bg-surface-2 h-12 relative overflow-hidden border border-border">
              <div
                className="bg-parchment h-full transition-all"
                style={{
                  width: `${maxMfn > 0 ? (calculations.mfnLiability / maxMfn) * 100 : 0}%`,
                }}
              />
            </div>
            <p className="text-sm text-parchment mt-2">
              {currencyFormatter.format(calculations.mfnLiability)}
            </p>
          </div>

          {/* CEPA bar (highlighted in gold) */}
          <div>
            <p className="label mb-2">CEPA Preferential</p>
            <div className="bg-surface-2 h-12 relative overflow-hidden border border-border">
              <div
                className="bg-gold h-full transition-all"
                style={{
                  width: `${maxMfn > 0 ? (calculations.cepaLiability / maxMfn) * 100 : 0}%`,
                }}
              />
            </div>
            <p className="text-sm text-gold mt-2">
              {currencyFormatter.format(calculations.cepaLiability)}
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Annual Saving */}
        <div className="bg-surface border border-border p-8 text-center">
          <p className="label mb-4">Annual Saving (CEPA vs MFN)</p>
          <p className="text-4xl font-serif text-gold">
            {currencyFormatter.format(calculations.annualSaving)}
          </p>
        </div>

        {/* Establishment Payback */}
        <div className="bg-surface border border-border p-8 text-center">
          <p className="label mb-4">Establishment Payback</p>
          <p className="text-4xl font-serif text-gold-light">
            {calculations.paybackMonths > 0
              ? `${numberFormatter.format(calculations.paybackMonths)} months`
              : "—"}
          </p>
        </div>
      </div>

      {/* Caveat */}
      <p className="text-center text-sm text-parchment-dim italic border-t border-border pt-6">
        This model is illustrative and not a substitute for professional legal or commercial advice.
      </p>
    </div>
  );
}
