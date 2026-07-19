"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ServiceFAQ({ service }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Questions About {service.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Find answers to some of the most common questions about our{" "}
            {service.title.toLowerCase()}. If you need additional assistance,
            our team is always happy to help.
          </p>
        </div>

        {/* FAQs */}

        <div className="mt-14 space-y-4">
          {service.faq.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50"
                >
                  <h3 className="pr-6 text-lg font-semibold text-slate-900">
                    {item.question}
                  </h3>

                  <FiChevronDown
                    className={`text-xl text-sky-600 transition-transform duration-300 ${
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

        {/* Bottom Card */}

        <div className="mt-16 rounded-[30px] bg-gradient-to-r from-sky-600 to-blue-700 p-8 text-center text-white">
          <h3 className="text-2xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-sky-100">
            If you couldn't find the answer you were looking for, our team is
            available to help you understand our diagnostic services, testing
            process, and health packages.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-2xl bg-white px-7 py-4 font-semibold text-sky-700 transition hover:scale-105"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}