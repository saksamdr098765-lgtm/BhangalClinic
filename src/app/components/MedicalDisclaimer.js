import React from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function MedicalDisclaimer({ className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-slate-800 shadow-sm sm:p-5 ${className}`}
      role="note"
      aria-label="Medical Disclaimer"
    >
      <div className="flex items-start gap-3">
        <FiAlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 sm:h-6 sm:w-6" />
        <div className="text-xs leading-relaxed text-slate-700 sm:text-sm sm:leading-relaxed">
          <span className="font-semibold text-slate-900">Medical Disclaimer: </span>
          This is general information, not medical advice. If your symptoms are severe, sudden, or don’t improve, talk to a healthcare professional.
        </div>
      </div>
    </div>
  );
}
