"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiAward,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const highlights = [
  "15+ Years of Clinical Experience",
  "Advanced Diagnostic Expertise",
  "Patient-Centered Healthcare",
  "Quality Assured Laboratory Standards",
];

export default function MedicalLeadership() {
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

        lg:py-32
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          left-0
          top-0
          h-80
          w-80
          rounded-full
          bg-blue-100/50
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-96
          w-96
          rounded-full
          bg-cyan-100/40
          blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-4

          sm:px-8

          xl:px-12
        "
      >
        <div
          className="
            grid
            items-center
            gap-16

            lg:grid-cols-12
          "
        >
          {/* Left Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              lg:col-span-5
            "
          >
            <div
              className="
                relative
                h-[520px]
                overflow-hidden
                rounded-[36px]
                shadow-[0_35px_80px_rgba(15,23,42,.12)]

                lg:h-[760px]
              "
            >
              <Image
                src="/doctor.jpg"
                fill
                alt="Chief Pathologist"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950/40
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              lg:col-span-7
            "
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
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
              <FiAward />

              Medical Leadership
            </span>

            <h2
              className="
                mt-8
                text-4xl
                font-black
                leading-[0.95]
                tracking-tight
                text-slate-900

                sm:text-5xl

                xl:text-7xl
              "
            >
              Meet Our
              <br />

              Chief
              <br />

              <span className="text-blue-600">
                Pathologist.
              </span>
            </h2>

            <div className="mt-10">
              <h3
                className="
                  text-3xl
                  font-black
                  text-slate-900
                "
              >
                Dr. Manpreet Singh
              </h3>

              <p
                className="
                  mt-2
                  uppercase
                  tracking-[0.25em]
                  text-blue-600
                  font-semibold
                "
              >
                MBBS • MD Pathology
              </p>
            </div>

            <div
              className="
                mt-10
                space-y-6
                text-lg
                leading-9
                text-slate-600
              "
            >
              <p>
                With years of experience in clinical pathology,
                Dr. Manpreet Singh has dedicated his career to
                delivering accurate diagnostic services that help
                physicians and patients make informed healthcare
                decisions with confidence.
              </p>

              <p>
                Every report generated at Bhangal Clinical
                Laboratory reflects our commitment to scientific
                precision, advanced technology, and strict quality
                standards. From routine blood investigations to
                specialized diagnostic testing, our focus remains
                on providing dependable results with compassion and
                care.
              </p>
            </div>

            <div
              className="
                mt-10
                grid
                gap-4

                sm:grid-cols-2
              "
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-600
                      text-white
                    "
                  >
                    <FiCheckCircle />
                  </div>

                  <span
                    className="
                      font-medium
                      text-slate-700
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
                        {/* Quote */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
              className="
                mt-14
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8

                lg:p-10
              "
            >
              <p
                className="
                  text-2xl
                  font-black
                  leading-tight
                  text-slate-900

                  lg:text-4xl
                "
              >
                "Every diagnosis is more than a report.
                <span className="text-blue-600">
                  {" "}It is the beginning of better healthcare.
                </span>
                "
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />

                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-slate-500
                  "
                >
                  Dr. Manpreet Singh
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-24
            rounded-[36px]
            border
            border-slate-200
            bg-white
            p-8

            lg:p-14
          "
        >
          <div
            className="
              grid
              gap-10

              md:grid-cols-2

              xl:grid-cols-4
            "
          >
            {[
              {
                number: "15+",
                title: "Years of Experience",
              },
              {
                number: "20K+",
                title: "Patients Served",
              },
              {
                number: "100+",
                title: "Diagnostic Tests",
              },
              {
                number: "99%",
                title: "Accurate Reporting",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  text-center
                "
              >
                <h3
                  className="
                    text-5xl
                    font-black
                    text-slate-900

                    xl:text-6xl
                  "
                >
                  {item.number}
                </h3>

                <p
                  className="
                    mt-3
                    text-base
                    font-medium
                    text-slate-500
                  "
                >
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

    

      </div>
    </section>
  );
}