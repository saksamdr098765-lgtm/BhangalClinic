"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "How do I book a health package?",
    answer:
      "Simply choose your preferred health package, click 'Book Now', select your preferred date and time, and complete the booking process. Our team will contact you to confirm your appointment.",
  },
  {
    question: "Is home sample collection available?",
    answer:
      "Yes. We provide home sample collection for most of our health packages. Our trained phlebotomists visit your location at your selected time to collect the samples safely and hygienically.",
  },
  {
    question: "How long does it take to receive reports?",
    answer:
      "Most reports are delivered digitally within 24 to 48 hours. Some specialized tests may require additional processing time.",
  },
  {
    question: "Are your laboratories NABL certified?",
    answer:
      "Yes. All tests are processed in NABL-certified laboratories using advanced diagnostic equipment to ensure reliable and accurate results.",
  },
  {
    question: "Do I need to fast before the test?",
    answer:
      "Some tests require fasting while others do not. If fasting is required, you'll receive clear instructions during booking and before sample collection.",
  },
  {
    question: "Can I reschedule my appointment?",
    answer:
      "Absolutely. You can reschedule your appointment by contacting our support team before your scheduled sample collection time.",
  },
];

function FAQItem({ faq, active, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">
      <button
        type="button"
        aria-expanded={active}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50 sm:px-7 sm:py-6"
      >
        <h3 className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
          {faq.question}
        </h3>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 ${
            active
              ? "rotate-180 bg-blue-600 text-white"
              : "text-slate-500"
          }`}
        >
          <FiChevronDown size={18} />
        </div>
      </button>

      {active && (
        <div className="border-t border-slate-100 px-5 py-5 sm:px-7 sm:py-6">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-blue-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Find answers to the most common questions about our health
            packages, home sample collection, reports, and the booking
            process.
          </p>
        </div>

        <div className="mt-10 space-y-4 sm:mt-14">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              active={open === index}
              onToggle={() =>
                setOpen(open === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}