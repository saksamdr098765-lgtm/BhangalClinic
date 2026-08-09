import SITE_CONFIG from "@/app/SITE_CONFIG";
import FAQAccordion from "./FAQAccordion";

const faqs = [
  {
    question: "How can I book a blood test?",
    answer:
      "You can book online through our website, call our laboratory directly, or request a home sample collection at your preferred time.",
  },
  {
    question: "Do you provide home sample collection?",
    answer:
      "Yes. Our trained phlebotomists collect samples safely from your home across our service areas.",
  },
  {
    question: "When will I receive my reports?",
    answer:
      "Most routine diagnostic reports are delivered digitally on the same day, while specialized tests may take longer.",
  },
  {
    question: "Can I download my reports online?",
    answer:
      "Yes. Reports are securely delivered online and can be downloaded anytime after they're available.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept cash, UPI, debit cards, credit cards, and other supported online payment methods.",
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe_0%,transparent_45%)] opacity-60" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: Static Server-Rendered Section Heading */}
          <div className="text-center lg:col-span-4 lg:text-left">
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm sm:text-xs">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Everything
              <span className="block text-blue-600">
                You Need To Know
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base lg:mx-0">
              Find answers to the most common questions about booking
              tests, home sample collection, reports, and laboratory
              services.
            </p>
          </div>

          {/* Right: Client Accordion & Static CTA Card */}
          <div className="lg:col-span-8">
            <FAQAccordion faqs={faqs} />

            {/* Bottom CTA */}
            <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Still Have Questions?
              </span>

              <h3 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">
                We're happy to help.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                If you couldn't find the answer you're looking for,
                contact our team. We'll help you choose the right test,
                explain the booking process, and answer any questions
                about home sample collection or reports.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Call Now
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}