"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import SITE_CONFIG from "@/app/SITE_CONFIG";

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
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-slate-50
        to-white
        py-20

        lg:py-28
      "
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-[140px]" />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4

          sm:px-6
        "
      >
        <div
          className="
            grid
            gap-16

            lg:grid-cols-12
          "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity:0,
              x:-40,
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            viewport={{
              once:true,
            }}
            className="
              lg:col-span-4
            "
          >
            <span
              className="
                inline-flex
                rounded-full
                bg-blue-50
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-blue-700

                sm:text-sm
              "
            >
              Frequently Asked Questions
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-tight
                text-slate-900

                lg:text-5xl
              "
            >
              Everything
              <br />

              You Need
              <br />

              To Know.
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-slate-600
              "
            >
              Find answers to the most common questions about
              booking tests, home sample collection, reports,
              and laboratory services.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity:0,
              x:40,
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            viewport={{
              once:true,
            }}
            className="
              lg:col-span-8
            "
          >
                        <div className="space-y-5">
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
                      rounded-[28px]
                      border
                      border-slate-200
                      bg-white
                      shadow-[0_10px_40px_rgba(15,23,42,.05)]
                    "
                  >
                    <button
                      onClick={() =>
                        setActive(isOpen ? -1 : index)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-6
                        px-6
                        py-6
                        text-left
                        transition-colors
                        hover:bg-slate-50

                        sm:px-8
                      "
                    >
                      <h3
                        className="
                          text-lg
                          font-bold
                          leading-7
                          text-slate-900

                          sm:text-xl
                        "
                      >
                        {faq.question}
                      </h3>

                      <div
                        className={`
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "bg-blue-600 text-white rotate-180"
                              : "bg-blue-50 text-blue-600"
                          }
                        `}
                      >
                        {isOpen ? (
                          <FiMinus size={20} />
                        ) : (
                          <FiPlus size={20} />
                        )}
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
                            duration: 0.3,
                          }}
                          className="overflow-hidden"
                        >
                          <div
                            className="
                              border-t
                              border-slate-100
                              px-6
                              py-6

                              sm:px-8
                            "
                          >
                            <p
                              className="
                                text-base
                                leading-8
                                text-slate-600

                                sm:text-lg
                              "
                            >
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
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              viewport={{
                once: true,
              }}
              className="
                mt-10
                rounded-[32px]
                border
                border-blue-100
                bg-blue-50
                p-8
              "
            >
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-blue-600
                "
              >
                Still Have Questions?
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-black
                  text-slate-900
                "
              >
                We're happy to help.
              </h3>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                If you couldn't find the answer you're looking for,
                contact our team. We'll help you choose the right
                test, explain the booking process, or answer any
                questions about home sample collection and reports.
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-4
                "
              >
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="
                    rounded-full
                    bg-blue-600
                    px-7
                    py-3.5
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-500
                  "
                >
                  Call Now
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-7
                    py-3.5
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