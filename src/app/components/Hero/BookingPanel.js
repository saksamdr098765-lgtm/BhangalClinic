"use client";

import { motion } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiHome,
  FiCheckCircle,
  FiSearch,
} from "react-icons/fi";

const tests = ["CBC", "HbA1c", "Thyroid", "Vitamin D"];

export default function BookingPanel() {
  return (
  <div
  className="
    relative
    flex
    w-full
    justify-center
    px-0

    sm:px-0
  "
>

      {/* Glow */}
      <div
        className="
          absolute
          top-1/2
          h-[300px]
          w-[300px]
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[100px]

          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[120px]
        "
      />


      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0],
        }}
        transition={{
          duration: 0.8,
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          relative
          w-full
          max-w-md
          rounded-[28px]
          border
          border-slate-200
          bg-white
          p-5
          shadow-[0_40px_90px_rgba(15,23,42,.12)]

          sm:rounded-[34px]
          sm:p-7
        "
      >

        <span className="text-sm font-semibold text-blue-600">
          Online Booking
        </span>


        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          Book Your Test
        </h2>


        {/* Search */}
        <div
          className="
            mt-6
            flex
            h-12
            items-center
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4

            sm:mt-8
            sm:h-14
            sm:rounded-2xl
          "
        >
          <FiSearch className="text-slate-400" />

          <input
            placeholder="Search CBC, HbA1c..."
            className="
              flex-1
              bg-transparent
              px-3
              outline-none
            "
          />
        </div>


        {/* Tests */}
        <div className="mt-6 flex flex-wrap gap-2">

          {tests.map((test) => (
            <button
              key={test}
              className="
                rounded-full
                bg-slate-100
                px-4
                py-2
                text-sm
                transition
                hover:bg-blue-600
                hover:text-white
              "
            >
              {test}
            </button>
          ))}

        </div>


        {/* Details */}

        <div className="mt-8 space-y-4">

          {[
            [FiCalendar, "Tomorrow", "Date"],
            [FiClock, "09:30 AM", "Time"],
            [FiHome, "Home Collection", "Service"],
          ].map(([Icon, title, label]) => (

            <div
              key={label}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-slate-50
                p-4
              "
            >

              <div className="flex items-center gap-3">

                <Icon className="text-blue-600" />

                <span>
                  {title}
                </span>

              </div>


              <span className="text-sm text-slate-400">
                {label}
              </span>

            </div>

          ))}

        </div>


        {/* Footer */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            rounded-2xl
            bg-blue-600
            p-5
            text-white
          "
        >

          <div>

            <p className="text-sm opacity-80">
              Starting From
            </p>

            <h3 className="text-3xl font-bold">
              ₹399
            </h3>

          </div>


          <button
            className="
              rounded-xl
              bg-white
              px-5
              py-3
              font-semibold
              text-blue-600
              transition
              hover:scale-105
            "
          >
            Continue
          </button>

        </div>


      </motion.div>



      {/* Floating Status */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
right-0
top-6

          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          py-3
          shadow-xl
          hidden 
          sm:block
          sm:-left-12
          sm:right-auto
          sm:top-20
          sm:rounded-2xl
          sm:px-5
          sm:py-4
        "
      >

        <div className="flex items-center gap-3">

          <FiCheckCircle
            className="text-emerald-500"
            size={22}
          />

          <div>

            <p className="text-xs text-slate-500">
              Booking Status
            </p>

            <p className="font-semibold">
              Confirmed
            </p>

          </div>

        </div>

      </motion.div>


    </div>
  );
}