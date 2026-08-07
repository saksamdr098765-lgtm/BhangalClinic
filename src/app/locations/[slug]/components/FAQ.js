"use client";

import { useState } from "react";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import {
  FiChevronDown,
  FiHelpCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FAQ({ location }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            <FiHelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </span>

          <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Common Questions About Services in {location.city}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Quick answers regarding tests, packages, report delivery, and home collection.
          </p>
        </div>

        {/* FAQ Accordion Items */}
        <div className="mt-6 space-y-3 sm:mt-8">
          {location.faq.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition hover:border-sky-200"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-3 p-3.5 text-left transition-colors hover:bg-slate-50 sm:p-4.5"
                >
                  <h3 className="text-xs font-semibold leading-5 text-slate-900 sm:text-base">
                    {item.question}
                  </h3>

                  <FiChevronDown
                    className={`h-4 w-4 shrink-0 text-sky-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-3.5 py-3 text-xs leading-5 text-slate-600 sm:px-4.5 sm:text-sm sm:leading-6">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Tracked WhatsApp CTA */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-5 text-center text-white shadow-lg sm:rounded-3xl sm:p-8">
          <h3 className="text-lg font-bold sm:text-2xl">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-xs text-sky-100 sm:text-sm">
            Contact DK Bhangal Laboratory for quick assistance with lab tests, health packages, reports, or home collection in {location.city}.
          </p>

          <div className="mt-4 flex justify-center">
            <TrackedWhatsappLink
              text={`Hi, I have a question about laboratory services in ${location.city}.`}
              location={`location-faq-whatsapp-${location.city}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-sky-700 transition hover:bg-slate-100 sm:text-sm"
            >
              <FaWhatsapp className="text-base text-green-600" />
              Ask on WhatsApp
            </TrackedWhatsappLink>
          </div>
        </div>
      </div>
    </section>
  );
}