"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiShield,
  FiHeart,
  FiActivity,
  FiCheck,
} from "react-icons/fi";

const packages = [
  {
    title: "Basic Health",
    price: "₹799",
    icon: FiShield,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    tests: [
      "CBC Test",
      "Blood Sugar",
      "Urine Routine",
      "ESR",
    ],
  },
  {
    title: "Complete Body Checkup",
    price: "₹2,499",
    icon: FiHeart,
    color: "bg-rose-50",
    iconColor: "text-rose-600",
    featured: true,
    tests: [
      "CBC",
      "LFT",
      "KFT",
      "Lipid Profile",
      "Thyroid",
      "Vitamin D",
    ],
  },
  {
    title: "Diabetes Care",
    price: "₹1,299",
    icon: FiActivity,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    tests: [
      "HbA1c",
      "Fasting Sugar",
      "PP Sugar",
      "Kidney Profile",
    ],
  },
];


export default function Packages() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-16

        sm:py-20
        lg:py-24
      "
    >

      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="
            absolute
            left-0
            top-0
            h-60
            w-60
            rounded-full
            bg-blue-200/20
            blur-[80px]

            sm:h-72
            sm:w-72
            sm:blur-[100px]
          "
        />


        <div
          className="
            absolute
            bottom-0
            right-0
            h-64
            w-64
            rounded-full
            bg-cyan-200/20
            blur-[90px]

            sm:h-80
            sm:w-80
            sm:blur-[120px]
          "
        />

      </div>



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

        {/* Heading */}

        <motion.div
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
            Health Packages
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
            Preventive health made simple.
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
            Choose a health package designed for your lifestyle with transparent
            pricing and home sample collection.
          </p>

        </motion.div>



        {/* Cards */}

        <div
          className="
            mt-8
            grid
            gap-5

            sm:mt-12
            sm:gap-8

            md:grid-cols-2

            lg:grid-cols-3
          "
        >

          {packages.map((pkg,index)=>{

            const Icon = pkg.icon;

            return (

              <motion.div
                key={pkg.title}
                initial={{
                  opacity:0,
                  y:40,
                }}
                whileInView={{
                  opacity:1,
                  y:0,
                }}
                viewport={{
                  once:true,
                }}
                transition={{
                  delay:index*0.15,
                }}

                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  p-5
                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-2xl

                  sm:rounded-[32px]
                  sm:p-8

                  ${
                    pkg.featured
                    ? "border-blue-600 bg-slate-900 text-white"
                    : "border-slate-200 bg-white"
                  }
                `}
              >


                {pkg.featured && (

                  <span
                    className="
                      absolute
                      right-4
                      top-4
                      rounded-full
                      bg-blue-500
                      px-3
                      py-1
                      text-[10px]
                      font-semibold
                      text-white

                      sm:right-6
                      sm:top-6
                      sm:text-xs
                    "
                  >
                    Most Popular
                  </span>

                )}



                {/* Icon */}

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl

                    sm:h-16
                    sm:w-16

                    ${
                      pkg.featured
                      ? "bg-white/10"
                      : pkg.color
                    }
                  `}
                >

                  <Icon
                    className={`
                      text-2xl

                      sm:text-3xl

                      ${
                        pkg.featured
                        ? "text-white"
                        : pkg.iconColor
                      }
                    `}
                  />

                </div>



                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold

                    sm:mt-8
                    sm:text-2xl
                  "
                >
                  {pkg.title}
                </h3>



                <p
                  className={`
                    mt-3
                    text-4xl
                    font-black

                    sm:text-5xl

                    ${
                      pkg.featured
                      ? "text-white"
                      : "text-slate-900"
                    }
                  `}
                >
                  {pkg.price}
                </p>



                <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">

                  {pkg.tests.map((test)=>(

                    <div
                      key={test}
                      className="flex items-center gap-3"
                    >

                      <FiCheck
                        className={
                          pkg.featured
                          ? "text-blue-300"
                          : "text-blue-600"
                        }
                      />

                      <span
                        className={
                          pkg.featured
                          ? "text-sm text-slate-300"
                          : "text-sm text-slate-600"
                        }
                      >
                        {test}
                      </span>

                    </div>

                  ))}

                </div>



                <button
                  className={`
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    py-3.5
                    text-sm
                    font-semibold
                    transition

                    sm:mt-10
                    sm:py-4
                    sm:text-base

                    ${
                      pkg.featured
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "bg-slate-900 text-white hover:bg-blue-600"
                    }
                  `}
                >
                  Book Package
                  <FiArrowRight />

                </button>


              </motion.div>

            );

          })}

        </div>


      </div>

    </section>
  );
}