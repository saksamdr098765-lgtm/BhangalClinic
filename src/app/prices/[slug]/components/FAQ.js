"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQ({ faqs }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Everything You Need to Know
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Find answers to the most common questions before booking
            your test.
          </p>
        </div>

        {/* Accordion */}

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() =>
                    setOpen(active ? -1 : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <FiChevronDown
                    className={`transition duration-300 ${
                      active ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    active
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-slate-600 leading-7">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}