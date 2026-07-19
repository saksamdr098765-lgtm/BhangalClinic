"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQSection({ faq = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq.length) return null;

  return (
    <section className="mt-20">
      <div className="mb-10">
        <span className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
          Frequently Asked Questions
        </span>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Common Questions
        </h2>

        <p className="mt-3 max-w-2xl text-slate-600">
          Find answers to the most commonly asked questions about this
          health topic.
        </p>
      </div>

      <div className="space-y-4">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? -1 : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="pr-4 text-lg font-semibold text-slate-900">
                  {item.question}
                </h3>

                <FiChevronDown
                  className={`h-5 w-5 text-sky-600 transition-transform duration-300 ${
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
                  <div className="border-t border-slate-100 px-6 py-5">
                    <p className="leading-8 text-slate-600">
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