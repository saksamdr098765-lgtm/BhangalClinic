"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ServiceFAQAccordion({ faq = [] }) {
  const [open, setOpen] = useState(0);

  if (!faq || faq.length === 0) return null;

  return (
    <div className="mt-6 space-y-3 sm:mt-8">
      {faq.map((item, index) => {
        const isOpen = open === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition hover:border-sky-200"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-${index}`}
              className="flex w-full items-center justify-between gap-3 p-3.5 text-left sm:p-4.5"
            >
              <h3 className="text-xs font-semibold leading-5 text-slate-900 sm:text-base">
                {item.question}
              </h3>

              <FiChevronDown
                className={`shrink-0 text-lg text-sky-600 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id={`faq-${index}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-slate-100 px-3.5 py-3 sm:px-4.5">
                  <p className="text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
