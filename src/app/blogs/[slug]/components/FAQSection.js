
import { FiChevronDown } from "react-icons/fi";
import FAQAccordion from "./FaqAccordian";

export default function FAQSection({ faq = [] }) {

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
    <FAQAccordion faq={faq}></FAQAccordion>
    </section>
  );
}