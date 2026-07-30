"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import SITE_CONFIG from "@/app/SITE_CONFIG";
import { trackPhoneClick, trackWhatsAppClick } from "@/app/lib/tracking";

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
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe_0%,transparent_45%)] opacity-60" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center lg:col-span-4 lg:text-left"
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-blue-100
                bg-white
                px-4
                py-2
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-blue-700
                shadow-sm

                sm:text-xs
              "
            >
              Frequently Asked Questions
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-black
                leading-tight
                text-slate-900

                sm:text-4xl

                lg:text-5xl
              "
            >
              Everything
              <span className="block text-blue-600">
                You Need To Know
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-md
                text-sm
                leading-7
                text-slate-600

                sm:text-base

                lg:mx-0
              "
            >
              Find answers to the most common questions about booking
              tests, home sample collection, reports, and laboratory
              services.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="lg:col-span-8"
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = active === index;

                return (
                  <motion.div
                    key={faq.question}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      shadow-sm
                    "
                  >
                    <button
                      onClick={() => setActive(isOpen ? -1 : index)}
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-4
                        px-5
                        py-5
                        text-left
                        transition
                        hover:bg-slate-50

                        sm:px-6
                      "
                    >
                      <h3
                        className="
                          text-base
                          font-semibold
                          leading-7
                          text-slate-900

                          sm:text-lg
                        "
                      >
                        {faq.question}
                      </h3>

                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          transition-all
                          ${
                            isOpen
                              ? "bg-blue-600 text-white"
                              : "bg-blue-50 text-blue-600"
                          }
                        `}
                      >
                        {isOpen ? <FiMinus /> : <FiPlus />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 px-5 py-5 sm:px-6">
                            <p className="text-sm leading-7 text-slate-600 sm:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
                        {/* Bottom CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
              className="
                mt-8
                rounded-3xl
                border
                border-blue-100
                bg-gradient-to-br
                from-blue-50
                to-white
                p-6

                sm:p-8
              "
            >
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-blue-100
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-blue-700
                "
              >
                Still Have Questions?
              </span>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-black
                  text-slate-900

                  sm:text-3xl
                "
              >
                We're happy to help.
              </h3>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-slate-600

                  sm:text-base
                "
              >
                If you couldn't find the answer you're looking for,
                contact our team. We'll help you choose the right test,
                explain the booking process, and answer any questions
                about home sample collection or reports.
              </p>

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                "
              >
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  onClick={()=>{trackPhoneClick("contact-faq")}}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                  "
                >
                  Call Now
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  onClick={()=>{trackWhatsAppClick("contact-faq")}}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-slate-700
                    transition
                    hover:border-blue-300
                    hover:bg-blue-50
                  "
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}