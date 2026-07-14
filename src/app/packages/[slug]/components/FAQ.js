"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How do I book this package?",
    answer:
      "You can book this package online or contact our team to schedule a convenient appointment. Home sample collection is available in selected areas.",
  },
  {
    question: "Is fasting required before the test?",
    answer:
      "Some tests require 8–12 hours of fasting. The exact instructions depend on the package. Our team will inform you before your appointment.",
  },
  {
    question: "When will I receive my reports?",
    answer:
      "Most reports are available within 24 hours. Certain specialized investigations may require additional processing time.",
  },
  {
    question: "Is home sample collection available?",
    answer:
      "Yes. Our trained phlebotomists can collect samples from your home while following proper hygiene and safety protocols.",
  },
  {
    question: "Are the reports accepted by doctors?",
    answer:
      "Yes. Reports are generated using standardized laboratory procedures and can be shared with your consulting physician.",
  },
  {
    question: "Can I book this package for my parents?",
    answer:
      "Absolutely. You can schedule appointments for family members and choose a convenient time for home sample collection.",
  },
  {
    question: "How should I prepare for the test?",
    answer:
      "Follow any fasting instructions, drink sufficient water, avoid alcohol before testing if advised, and keep previous reports ready if available.",
  },
  {
    question: "Can I download my reports online?",
    answer:
      "Yes. Digital reports are securely shared and can be accessed or downloaded after they are released.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
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
              text-xs
              font-semibold
              text-blue-700
              sm:text-sm
            "
          >
            Frequently Asked Questions
          </span>


          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-slate-900

              sm:text-4xl
              lg:text-5xl
            "
          >
            Everything You
            <br />
            Need to Know
          </h2>


          <p
            className="
              mt-4
              text-base
              leading-7
              text-slate-600

              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Find answers to common questions about booking,
            sample collection, reports, preparation, and more.
          </p>

        </motion.div>


        {/* FAQ */}

        <div
          className="
            mt-10
            space-y-3

            sm:mt-14
            sm:space-y-4
          "
        >

          {faqs.map((item,index)=>{

            const isOpen = open === index;

            return (
              <motion.div
                key={item.question}
                layout
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white

                  sm:rounded-[24px]
                "
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? -1 : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    p-4
                    text-left

                    sm:p-6
                  "
                >

                  <h3
                    className="
                      pr-2
                      text-sm
                      font-semibold
                      leading-6
                      text-slate-900

                      sm:text-lg
                    "
                  >
                    {item.question}
                  </h3>


                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-50

                      sm:h-10
                      sm:w-10
                    "
                  >
                    {
                      isOpen
                      ?
                      <FiMinus className="text-blue-600" />
                      :
                      <FiPlus className="text-blue-600" />
                    }

                  </div>

                </button>


                <AnimatePresence initial={false}>

                {
                  isOpen && (

                    <motion.div
                      initial={{
                        height:0,
                        opacity:0
                      }}
                      animate={{
                        height:"auto",
                        opacity:1
                      }}
                      exit={{
                        height:0,
                        opacity:0
                      }}
                      transition={{
                        duration:0.25
                      }}
                    >

                      <div
                        className="
                          border-t
                          border-slate-100
                          px-4
                          pb-5
                          pt-4

                          sm:px-6
                          sm:pb-6
                          sm:pt-5
                        "
                      >

                        <p
                          className="
                            text-sm
                            leading-7
                            text-slate-600

                            sm:text-base
                            sm:leading-8
                          "
                        >
                          {item.answer}
                        </p>

                      </div>

                    </motion.div>

                  )
                }

                </AnimatePresence>


              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}