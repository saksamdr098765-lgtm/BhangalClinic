"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiHelpCircle,
} from "react-icons/fi";

export default function FAQ({ location }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            <FiHelpCircle className="h-4 w-4" />

            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
            Common Questions About Our Services in {location.city}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
            Have questions about laboratory tests, health packages, report
            delivery, or home sample collection? Here are answers to the
            questions our patients ask most frequently.
          </p>
        </div>

        {/* FAQs */}

        <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-5">
          {location.faq.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50 sm:gap-6 sm:px-6 sm:py-5"
                >
                  <h3 className="text-base font-bold leading-6 text-slate-900 sm:text-lg">
                    {item.question}
                  </h3>

                  <FiChevronDown
                    className={`h-5 w-5 shrink-0 text-sky-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-600 sm:px-6 sm:py-5 sm:text-base sm:leading-8">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 p-6 text-center text-white shadow-xl sm:mt-14 sm:rounded-3xl sm:p-8 lg:mt-16">
          <h3 className="text-2xl font-black sm:text-3xl">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-sky-100 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            Our team is always happy to help. Contact DK Bhangal Laboratory for
            assistance with laboratory tests, preventive health checkups,
            report availability, pricing, or home sample collection services.
          </p>
        </div>
      </div>
    </section>
  );
}