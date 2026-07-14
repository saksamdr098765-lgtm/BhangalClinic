"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiHome,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero({ pkg }) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        pt-24
        pb-14

        sm:pt-28
        sm:pb-20

        lg:pt-36
        lg:pb-24
      "
    >

      {/* Background */}

      <div className="absolute inset-0 bg-slate-50" />

      <div
        className="
          absolute
          inset-0
          opacity-30
          [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />


      <div
        className="
          absolute
          -left-32
          top-10
          h-64
          w-64
          rounded-full
          bg-blue-100/60
          blur-3xl

          sm:h-[420px]
          sm:w-[420px]
        "
      />

      <div
        className="
          absolute
          -right-32
          bottom-0
          h-64
          w-64
          rounded-full
          bg-cyan-100/50
          blur-3xl

          sm:h-[420px]
          sm:w-[420px]
        "
      />


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
            items-center
            gap-10

            lg:grid-cols-2
            lg:gap-16
          "
        >


          {/* LEFT */}

          <motion.div
            {...fadeUp}
            transition={{
              duration:.45
            }}
          >

            <span
              className="
                inline-flex
                rounded-full
                border
                border-blue-100
                bg-white
                px-3
                py-1.5
                text-xs
                font-semibold
                text-blue-700
                shadow-sm

                sm:px-4
                sm:py-2
                sm:text-sm
              "
            >
              {pkg.tests} Diagnostic Tests
            </span>


            <h1
              className="
                mt-5
                text-3xl
                font-black
                leading-tight
                tracking-tight
                text-slate-900

                sm:text-5xl

                lg:text-7xl
              "
            >
              {pkg.name}
            </h1>


            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-slate-600

                sm:mt-6
                sm:text-lg
                sm:leading-8
              "
            >
              {pkg.description}
            </p>



            {/* Highlights */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2

                sm:mt-8
                sm:gap-3
              "
            >

              {[
                {
                  icon:FiHome,
                  text:"Home Collection"
                },
                {
                  icon:FiClock,
                  text:"24h Reports"
                },
                {
                  icon:FiShield,
                  text:"NABL Certified"
                },
              ].map((item)=>{

                const Icon=item.icon;

                return (

                  <div
                    key={item.text}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-slate-200
                      bg-white/80
                      px-3
                      py-2
                    "
                  >

                    <Icon className="text-sm text-blue-600"/>

                    <span
                      className="
                        text-xs
                        font-medium
                        text-slate-700

                        sm:text-sm
                      "
                    >
                      {item.text}
                    </span>

                  </div>

                );

              })}

            </div>



            {/* Price */}

            <div className="mt-8 sm:mt-10">

              <div
                className="
                  flex
                  flex-wrap
                  items-end
                  gap-3
                "
              >

                <span
                  className="
                    text-4xl
                    font-black
                    text-slate-900

                    sm:text-5xl
                  "
                >
                  ₹{pkg.price}
                </span>


                <span
                  className="
                    pb-1
                    text-xl
                    text-slate-400
                    line-through

                    sm:text-2xl
                  "
                >
                  ₹{pkg.originalPrice}
                </span>

              </div>


              <p
                className="
                  mt-2
                  text-sm
                  font-semibold
                  text-emerald-600
                "
              >
                Save ₹{pkg.originalPrice - pkg.price}
              </p>

            </div>




            {/* CTA */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:mt-10
              "
            >

              <Link
                href="/book-test"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-blue-600
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  transition
                  hover:-translate-y-1

                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >

                Book This Package

                <FiArrowRight
                  className="
                    transition
                    group-hover:translate-x-1
                  "
                />

              </Link>


              <Link
                href="/contact"
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-7
                  py-3.5
                  text-center
                  text-sm
                  font-semibold
                  text-slate-700
                  transition
                  hover:border-blue-300
                  hover:bg-blue-50

                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >
                Talk to an Expert
              </Link>

            </div>


          </motion.div>





          {/* RIGHT CARD */}

          <motion.div
            {...fadeUp}
            transition={{
              delay:.15
            }}
          >

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white/80
                p-5
                shadow-xl
                backdrop-blur-xl

                sm:p-8
              "
            >

              <h3
                className="
                  text-lg
                  font-bold
                  text-slate-900

                  sm:text-xl
                "
              >
                Package Highlights
              </h3>


              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">

                {[
                  `${pkg.tests} Health Tests`,
                  "Free Home Sample Collection",
                  "Digital Reports",
                  "NABL Certified Laboratory",
                  "Doctor Reviewed Reports",
                ].map((item)=>(

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
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-50
                      "
                    >
                      <FiCheckCircle className="text-blue-600"/>
                    </div>


                    <span
                      className="
                        text-sm
                        font-medium
                        text-slate-700

                        sm:text-base
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>



              <div
                className="
                  mt-6
                  rounded-2xl
                  bg-blue-50
                  p-4

                  sm:mt-8
                  sm:p-5
                "
              >

                <p className="text-sm text-slate-600">
                  Recommended For
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    font-semibold
                    leading-6
                    text-slate-900

                    sm:text-base
                  "
                >
                  Annual health checkups, working professionals,
                  adults above 30 years, and preventive healthcare.
                </p>

              </div>


            </div>

          </motion.div>


        </div>

      </div>

    </section>
  );
}