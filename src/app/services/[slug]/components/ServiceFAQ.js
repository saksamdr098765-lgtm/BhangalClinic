import Link from "next/link";
import ServiceFAQAccordion from "./ServiceFAQAccordion";

export default function ServiceFAQ({ service }) {
  if (!service?.faq?.length) return null;

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

        {/* FAQ Accordion Client Component */}
        <ServiceFAQAccordion faq={service.faq} />

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