"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiHeart,
  FiDroplet,
  FiShield,
  FiSun,
  FiCheck,
} from "react-icons/fi";

const categories = [
  {
    title: "Blood Health",
    icon: FiDroplet,
    tests: [
      "Complete Blood Count (CBC)",
      "Hemoglobin",
      "RBC Count",
      "WBC Count",
      "Platelet Count",
      "ESR",
    ],
  },
  {
    title: "Diabetes",
    icon: FiActivity,
    tests: [
      "Fasting Blood Sugar",
      "HbA1c",
      "Random Blood Sugar",
    ],
  },
  {
    title: "Liver Function",
    icon: FiHeart,
    tests: [
      "SGOT (AST)",
      "SGPT (ALT)",
      "Bilirubin",
      "Albumin",
      "Total Protein",
    ],
  },
  {
    title: "Kidney Function",
    icon: FiShield,
    tests: [
      "Creatinine",
      "Blood Urea",
      "Uric Acid",
      "Electrolytes",
    ],
  },
  {
    title: "Thyroid",
    icon: FiSun,
    tests: [
      "T3",
      "T4",
      "TSH",
    ],
  },
  {
    title: "Heart Health",
    icon: FiHeart,
    tests: [
      "Total Cholesterol",
      "HDL",
      "LDL",
      "Triglycerides",
      "VLDL",
    ],
  },
];

export default function IncludedTests({ pkg }) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-4
              py-2
              text-sm
              font-medium
              text-blue-700
            "
          >
            Tests Included
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-slate-900

              lg:text-5xl
            "
          >
            What's Included in
            <br />
            {pkg.name}
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            This package includes a comprehensive set of diagnostic
            investigations covering major organs and body systems to
            help evaluate your overall health and identify potential
            medical conditions at an early stage.
          </p>

        </div>

        {/* Categories */}

        <div
          className="
            mt-16
            grid
            gap-8

            lg:grid-cols-2

            xl:grid-cols-3
          "
        >
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-xl
                "
              >
                {/* Header */}

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-50
                    "
                  >
                    <Icon
                      className="
                        text-xl
                        text-blue-600
                      "
                    />
                  </div>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-slate-900
                      "
                    >
                      {category.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {category.tests.length} Tests
                    </p>

                  </div>

                </div>

                {/* Tests */}

                <div className="mt-7 space-y-4">

                  {category.tests.map((test) => (
                    <div
                      key={test}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <div
                        className="
                          mt-0.5
                          flex
                          h-6
                          w-6
                          items-center
                          justify-center
                          rounded-full
                          bg-blue-50
                        "
                      >
                        <FiCheck
                          className="
                            text-xs
                            text-blue-600
                          "
                        />
                      </div>

                      <span
                        className="
                          leading-6
                          text-slate-700
                        "
                      >
                        {test}
                      </span>

                    </div>
                  ))}

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}

        <div
          className="
            mx-auto
            mt-16
            max-w-4xl
            rounded-[28px]
            border
            border-blue-100
            bg-blue-50/60
            p-8
            text-center
          "
        >
          <h3
            className="
              text-2xl
              font-bold
              text-slate-900
            "
          >
            Looking for a specific test?
          </h3>

          <p
            className="
              mt-4
              leading-8
              text-slate-600
            "
          >
            The investigations shown above represent the primary tests
            included in this package. Depending on the package type,
            additional biomarkers and specialized parameters may also
            be included to provide a more detailed assessment of your
            health.
          </p>
        </div>

      </div>
    </section>
  );
}