"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQSection({ faq = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq.length) return null;

  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700 sm:px-4 sm:py-1.5 sm:text-sm">
          Frequently Asked Questions
        </span>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Common Questions
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Find answers to the most commonly asked questions about this
          health topic.
        </p>
      </div>

      {/* FAQ */}
      <div className="space-y-3 sm:space-y-4">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <h3 className="flex-1 text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                  {item.question}
                </h3>

                <FiChevronDown
                  className={`h-5 w-5 shrink-0 text-sky-600 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-100 px-5 py-5 sm:px-6">
                    <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}