"use client";

import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ServiceFAQ({ service }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions About {service.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Find answers to some of the most common questions about our{" "}
            {service.title.toLowerCase()}. If you need additional assistance,
            our team is always happy to help.
          </p>
        </div>

        {/* FAQ Items */}

        <div className="mt-10 space-y-4 sm:mt-12">
          {service.faq.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-md"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <h3 className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                    {item.question}
                  </h3>

                  <FiChevronDown
                    className={`shrink-0 text-xl text-sky-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
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

        {/* CTA */}

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 lg:mt-16">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative p-6 text-center sm:p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Still Have Questions?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-sky-100 sm:text-lg sm:leading-8">
              If you couldn't find the answer you were looking for, our team is
              here to help you understand our diagnostic services, laboratory
              tests, and preventive health packages.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-semibold text-sky-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl sm:w-auto"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}