"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

const highlights = [
  "15+ Years of Clinical Experience",
  "Advanced Diagnostic Expertise",
  "Patient-Centered Healthcare",
  "Quality Assured Laboratory Standards",
];

export default function MedicalLeadership() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

      {/* Background */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Doctor Image */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1"
          >

            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-slate-200 shadow-2xl sm:rounded-[36px]">

              <Image
                src="/doctor.jpg"
                fill
                alt="Chief Pathologist"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2"
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-700">
              <FiAward />
              Medical Leadership
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Meet Our
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Chief Pathologist
              </span>
            </h2>

            <div className="mt-8">

              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Dharminder Kumar
              </h3>

              {/* <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                MBBS • MD Pathology
              </p> */}

            </div>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">

              <p>
               Dharminder Kumar has dedicated his career to delivering
                reliable pathology services that help physicians and patients
                make informed healthcare decisions with confidence.
              </p>

              <p>
                Every report generated at Bhangal Clinical Laboratory reflects
                our commitment to scientific precision, advanced technology and
                uncompromising quality standards.
              </p>

            </div>

            {/* Highlights */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">

                    <FiCheckCircle />

                  </div>

                  <span className="text-sm font-medium text-slate-700 sm:text-base">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Quote */}
                        <motion.blockquote
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 border-l-4 border-blue-600 pl-5"
            >
              <p className="text-xl font-bold leading-relaxed text-slate-900 sm:text-2xl">
                “Every diagnosis is more than a report.
                <span className="text-blue-600">
                  {" "}It is the beginning of better healthcare.
                </span>
                ”
              </p>

              <footer className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                — Dharminder Kumar
              </footer>
            </motion.blockquote>

          </motion.div>

        </div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">

            {[
              {
                number: "10+",
                title: "Years Experience",
              },
              {
                number: "15K+",
                title: "Patients Served",
              },
              {
                number: "100+",
                title: "Tests Available",
              },
              {
                number: "99%",
                title: "Report Accuracy",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-blue-100
                  hover:shadow-xl

                  sm:p-8
                "
              >
                <h3
                  className="
                    text-3xl
                    font-black
                    tracking-tight
                    text-slate-900
                    transition-colors
                    duration-300

                    group-hover:text-blue-600

                    sm:text-5xl
                  "
                >
                  {item.number}
                </h3>

                <div className="my-4 h-1 w-12 rounded-full bg-blue-600" />

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.18em]
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