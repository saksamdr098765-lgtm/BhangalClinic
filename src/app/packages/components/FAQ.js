"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

function FAQItem({ faq, index, active, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <h3 className="pr-6 text-base font-semibold text-slate-900 sm:text-lg">
          {faq.question}
        </h3>

        <FiChevronDown
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
            active ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="border-t border-slate-100 px-6 py-5">
              <p className="leading-7 text-slate-600">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-blue-50 py-20">
      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Find answers to the most common questions about our health
            packages, home sample collection, reports, and booking process.
          </p>
        </motion.div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
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