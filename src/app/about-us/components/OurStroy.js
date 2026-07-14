"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2014",
    title: "Laboratory Established",
  },
  {
    year: "2018",
    title: "Modern Diagnostic Equipment",
  },
  {
    year: "2022",
    title: "Home Sample Collection",
  },
  {
    year: "Today",
    title: "Trusted by Thousands of Patients",
  },
];

export default function OurStory() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20

        lg:py-28
      "
    >
      <div
        className="
          absolute
          left-0
          top-0
          h-72
          w-72
          rounded-full
          bg-blue-100/50
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-4

          sm:px-6
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            max-w-4xl
            text-center
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
            Our Story
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              text-slate-900

              sm:text-5xl
            "
          >
            Building Trust Through
            <br />

            <span className="text-blue-600">
              Accurate Diagnostics.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-slate-600
            "
          >
            At Bhangal Clinical Laboratory, our journey has always been
            driven by one purpose — delivering reliable diagnostic
            services with precision, compassion, and integrity. Every
            test we perform contributes to better healthcare decisions
            for our patients and their families.
          </p>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-9
              text-slate-600
            "
          >
            By combining experienced professionals, modern laboratory
            technology, and a patient-first approach, we continue to
            provide accurate reports, timely service, and a diagnostic
            experience patients can trust.
          </p>
        </motion.div>

        {/* Timeline */}

        <div
          className="
            mt-20
            grid
            gap-6

            md:grid-cols-2
          "
        >
          {timeline.map((item) => (
            <motion.div
              key={item.year}
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
              className="
                flex
                items-start
                gap-6
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
              "
            >
              <h3
                className="
                  text-3xl
                  font-black
                  text-blue-600
                "
              >
                {item.year}
              </h3>

              <div>
                <h4
                  className="
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
                {/* Editorial Image */}

    

      </div>
    </section>
  );
}