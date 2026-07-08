"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDroplet,
  FiHeart,
  FiActivity,
  FiSun,
} from "react-icons/fi";

const tests = [
  {
    icon: FiDroplet,
    name: "CBC Test",
    desc: "Complete Blood Count",
    price: "₹399",
    bg: "bg-red-50",
    color: "text-red-500",
  },
  {
    icon: FiActivity,
    name: "HbA1c Test",
    desc: "Average Blood Sugar",
    price: "₹599",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    icon: FiHeart,
    name: "Thyroid Profile",
    desc: "T3, T4 & TSH",
    price: "₹699",
    bg: "bg-violet-50",
    color: "text-violet-600",
  },
  {
    icon: FiSun,
    name: "Vitamin D",
    desc: "Vitamin D Screening",
    price: "₹999",
    bg: "bg-amber-50",
    color: "text-amber-500",
  },
];

export default function PopularTests() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-blue-50/40
        to-white
        py-16

        sm:py-20
        lg:py-24
      "
    >

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -left-20
            top-10
            h-60
            w-60
            rounded-full
            bg-blue-200/30
            blur-[80px]

            sm:h-80
            sm:w-80
            sm:blur-[100px]
          "
        />


        <div
          className="
            absolute
            -right-20
            bottom-0
            h-72
            w-72
            rounded-full
            bg-cyan-200/30
            blur-[90px]

            sm:h-96
            sm:w-96
            sm:blur-[120px]
          "
        />


        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage:
              "linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>



      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">


        {/* Heading */}

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
          className="max-w-2xl"
        >

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600

              sm:text-sm
            "
          >
            Popular Tests
          </span>


          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-slate-900

              sm:mt-4
              sm:text-4xl

              lg:text-5xl
            "
          >
            Book your test in seconds.
          </h2>


          <p
            className="
              mt-4
              text-base
              leading-7
              text-slate-600

              sm:mt-5
              sm:text-lg
              sm:leading-8
            "
          >
            Transparent pricing, fast reports, and convenient home sample
            collection.
          </p>

        </motion.div>



        {/* Cards */}

        <div
          className="
            mt-8
            grid
            gap-4

            sm:mt-12
            sm:gap-6

            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          {tests.map((test,index)=>{

            const Icon = test.icon;

            return (

              <motion.div
                key={test.name}
                initial={{
                  opacity:0,
                  y:30,
                }}
                whileInView={{
                  opacity:1,
                  y:0,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  delay:index*0.08,
                }}

                className="
                  group
                  rounded-[24px]
                  border
                  border-slate-200/70
                  bg-white/90
                  p-5
                  shadow-sm
                  backdrop-blur
                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-blue-200
                  hover:shadow-2xl

                  sm:rounded-[28px]
                  sm:p-7
                "
              >


                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    ${test.bg}

                    sm:h-16
                    sm:w-16
                  `}
                >

                  <Icon
                    className={`
                      text-2xl
                      ${test.color}

                      sm:text-3xl
                    `}
                  />

                </div>


                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-slate-900

                    sm:mt-8
                    sm:text-2xl
                  "
                >
                  {test.name}
                </h3>


                <p className="mt-2 text-sm text-slate-500 sm:text-base">
                  {test.desc}
                </p>


                <div className="mt-6 flex items-center justify-between sm:mt-8">

                  <span className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {test.price}
                  </span>


                  <button
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-600
                      text-white
                      transition

                      group-hover:scale-110
                      group-hover:rotate-45

                      sm:h-12
                      sm:w-12
                    "
                  >
                    <FiArrowRight />
                  </button>

                </div>


              </motion.div>

            );

          })}

        </div>



        {/* CTA */}

        <motion.div
          initial={{
            opacity:0,
          }}
          whileInView={{
            opacity:1,
          }}
          viewport={{
            once:true,
          }}
          className="
            mt-10
            flex
            justify-center

            sm:mt-16
          "
        >

          <button
            className="
              w-full
              rounded-full
              border
              border-slate-300
              px-8
              py-3.5
              font-semibold
              text-slate-700
              transition

              hover:bg-slate-900
              hover:text-white

              sm:w-auto
              sm:py-4
            "
          >
            View All Tests
          </button>

        </motion.div>


      </div>

    </section>
  );
}