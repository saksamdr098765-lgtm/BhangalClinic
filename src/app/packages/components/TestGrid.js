"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiHome,
  FiCheckCircle,
} from "react-icons/fi";
import SITE_CONFIG from "@/app/SITE_CONFIG";
import { tests } from "@/app/data/tests";

export default function TestGrid() {

const handleWhatsApp = (test) => {
  const message = `Hello,

I would like to book the following test.

*Test:* ${test.name}
*Description:* ${test.description}
*Price:* ${test.price}

Please share the available slots and booking process.

Thank you.`;

  const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
};
  return (
    <section id="test-grid" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p
              className="
                text-sm
                font-medium
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              Available Tests
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-black
                text-slate-900

                lg:text-4xl
              "
            >
              {tests.length}+ Laboratory Tests
            </h2>

          </div>

          <p className="text-slate-500">
            Transparent pricing • Digital reports
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            grid
            gap-6

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {tests.map((test, index) => (
            <motion.div
              key={test.slug}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:border-blue-200
                hover:shadow-lg
              "
            >
              {/* Category */}

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-blue-50
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-blue-700
                "
              >
                {test.category}
              </span>

              {/* Name */}

              <h3
                className="
                  mt-5
                  text-2xl
                  font-bold
                  leading-snug
                  text-slate-900
                "
              >
                {test.name}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-3
                  line-clamp-2
                  leading-7
                  text-slate-600
                "
              >
                {test.description}
              </p>

              {/* Info */}

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3">
                  <FiClock className="text-blue-600" />

                  <span className="text-slate-600">
                    Report in {test.reportTime}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FiHome className="text-blue-600" />

                  <span className="text-slate-600">
                    Home Sample Collection
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-blue-600" />

                  <span className="text-slate-600">
                    NABL Standard Testing
                  </span>
                </div>

              </div>

              {/* Footer */}

              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-between
                "
              >
                <div>

                  <p className="text-sm text-slate-500">
                    Starting From
                  </p>

                  <p
                    className="
                      text-3xl
                      font-black
                      text-slate-900
                    "
                  >
                    ₹{test.price}
                  </p>

                </div>

                <button
                onClick={()=>{handleWhatsApp(test)}}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                    text-white
                    transition
                    group-hover:translate-x-1
                  "
                >
                  <FiArrowRight />
                </button>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}