"use client";

import SITE_CONFIG from "@/app/SITE_CONFIG";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiHome,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        pt-32
        pb-20

        lg:pt-40
        lg:pb-28
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
          bg-blue-100/60
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-0
          h-96
          w-96
          rounded-full
          bg-cyan-100/60
          blur-[160px]
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
            gap-16

            lg:grid-cols-5
          "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .7,
            }}
            className="
              lg:col-span-3
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
              Book Your Test
            </span>

            <h1
              className="
                mt-8
                text-5xl
                font-black
                leading-[0.95]
                tracking-tight
                text-slate-900

                sm:text-6xl

                lg:text-7xl
              "
            >
              Healthcare
              <br />

              Starts With
              <br />

              <span className="text-blue-600">
                One Booking.
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-slate-600
              "
            >
              Schedule your diagnostic test, request home sample
              collection, or speak with our laboratory team.
              Fast booking, trusted reports, and compassionate
              care—all in one place.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                gap-4

                sm:flex-row
              "
            >
              <Link
                href="#booking"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-blue-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                Book Appointment

                <FiArrowRight />
              </Link>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  px-8
                  py-4
                  font-semibold
                  text-slate-700
                  transition
                  hover:border-blue-300
                  hover:bg-blue-50
                "
              >
                Call Laboratory
              </a>
            </div>

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-6
              "
            >
              <div className="flex items-center gap-3">
                <FiHome className="text-blue-600 text-xl" />
                <span className="font-medium text-slate-700">
                  Home Collection
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiClock className="text-blue-600 text-xl" />
                <span className="font-medium text-slate-700">
                  Same Day Reports
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiCalendar className="text-blue-600 text-xl" />
                <span className="font-medium text-slate-700">
                  Easy Online Booking
                </span>
              </div>
            </div>
          </motion.div>
                    {/* Right Booking Panel */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              relative
              lg:col-span-2
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                -top-10
                -right-10
                h-40
                w-40
                rounded-full
                bg-blue-300/30
                blur-[80px]
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-[0_30px_80px_rgba(15,23,42,.12)]
              "
            >
              {/* Header */}

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Today's Availability
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-slate-900">
                    Open
                  </h3>
                </div>

                <div
                  className="
                    h-4
                    w-4
                    rounded-full
                    bg-emerald-500
                    shadow-[0_0_20px_rgba(34,197,94,.6)]
                  "
                />
              </div>

              {/* Divider */}

              <div className="my-8 h-px bg-slate-200" />

              {/* Schedule */}

              <div className="space-y-5">

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">
                    Working Hours
                  </span>

                  <span className="font-semibold text-slate-900">
                    8:00 AM – 8:00 PM
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">
                    Home Collection
                  </span>

                  <span className="font-semibold text-emerald-600">
                    Available
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">
                    Reports
                  </span>

                  <span className="font-semibold text-slate-900">
                    Same Day*
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">
                    Booking Time
                  </span>

                  <span className="font-semibold text-slate-900">
                    Under 1 Minute
                  </span>
                </div>

              </div>

              {/* Divider */}

              <div className="my-8 h-px bg-slate-200" />

              {/* Features */}

              <div className="space-y-4">

                {[
                  "Certified Laboratory",
                  "Secure Digital Reports",
                  "Experienced Professionals",
                  "Affordable Health Packages",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-50
                      "
                    >
                      <FiArrowRight className="text-blue-600" />
                    </div>

                    <span className="font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              {/* Bottom CTA */}

              <div
                className="
                  mt-10
                  rounded-[24px]
                  bg-blue-600
                  p-6
                  text-white
                "
              >
                <p className="text-blue-100 text-sm">
                  Need Assistance?
                </p>

                <h4 className="mt-2 text-2xl font-black">
                  Our team is ready to help.
                </h4>

                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Call us or complete the booking form below.
                  We'll confirm your appointment quickly.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}