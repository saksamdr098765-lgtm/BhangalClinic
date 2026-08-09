"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQAccordion({ faqs = [] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = active === index;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all"
          >
            <button
              onClick={() => setActive(isOpen ? -1 : index)}
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-slate-50 sm:px-6"
            >
              <h3 className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                {faq.question}
              </h3>

              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${
                  isOpen
                    ? "bg-blue-600 text-white"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                {isOpen ? <FiMinus /> : <FiPlus />}
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-slate-100 px-5 py-5 sm:px-6">
                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
