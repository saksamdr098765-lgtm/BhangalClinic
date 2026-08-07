"use client";

import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function ServiceFAQ({ service }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Questions About {service.title}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Find quick answers about our {service.title.toLowerCase()}.
          </p>
        </div>

        {/* FAQ Accordion Items */}
        <div className="mt-6 space-y-3 sm:mt-8">
          {service.faq.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition hover:border-sky-200"
              >
                <button
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

        {/* CTA Banner */}
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-5 text-white sm:rounded-3xl sm:p-8">
          <div className="relative text-center">
            <h3 className="text-lg font-bold sm:text-2xl">
              Still Have Questions?
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-xs text-sky-100 sm:text-sm">
              Our team is here to help you understand our diagnostic services and preventive packages.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-xs font-semibold text-sky-700 transition hover:bg-slate-100 sm:w-auto sm:text-sm"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}