"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiHelpCircle,
} from "react-icons/fi";

export default function FAQ({ location }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            <FiHelpCircle />

            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Common Questions About Our Services in {location.city}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Have questions about laboratory tests, health packages, report
            delivery, or home sample collection? Here are answers to some of
            the questions our patients ask most frequently.
          </p>
        </div>

        {/* FAQs */}

        <div className="mt-16 space-y-5">
          {location.faq.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition hover:bg-slate-50"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.question}
                  </h3>

                  <FiChevronDown
                    className={`shrink-0 text-xl text-sky-600 transition-transform duration-300 ${
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
                    <div className="border-t border-slate-100 px-6 py-5 text-slate-600 leading-8">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom */}

        <div className="mt-16 rounded-[30px] bg-gradient-to-r from-sky-600 to-blue-700 p-8 text-center text-white">
          <h3 className="text-3xl font-black">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-sky-100">
            Our team is always happy to help. Contact DK Bhangal Laboratory for
            assistance with laboratory tests, preventive health checkups, report
            availability, pricing, or home sample collection services.
          </p>
        </div>
      </div>
    </section>
  );
}