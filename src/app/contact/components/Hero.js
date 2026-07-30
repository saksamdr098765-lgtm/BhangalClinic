"use client";

import { trackBookDemo, trackBookingForm, trackPhoneClick } from "@/app/lib/tracking";
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
    <section className="relative overflow-hidden bg-white pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Book Your Test
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

              Healthcare
              <br />

              Starts With

              <span className="mt-2 block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                One Booking.
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Schedule your diagnostic test, request home sample
              collection or speak with our laboratory team.
              Fast booking, trusted reports and compassionate
              care—all in one place.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="#booking"
                onClick={()=>trackBookingForm()}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl"
              >
                Book Appointment
                <FiArrowRight />
              </Link>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                onClick={()=>trackPhoneClick("contactPage")}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
              >
                Call Laboratory
              </a>

            </div>

            {/* Features */}

            <div className="mt-10 flex flex-col gap-4 text-sm font-medium text-slate-700 sm:flex-row sm:flex-wrap sm:gap-6">

              <div className="flex items-center gap-3">
                <FiHome className="text-lg text-blue-600" />
                Home Collection
              </div>

              <div className="flex items-center gap-3">
                <FiClock className="text-lg text-blue-600" />
                Same Day Reports
              </div>

              <div className="flex items-center gap-3">
                <FiCalendar className="text-lg text-blue-600" />
                Easy Online Booking
              </div>

            </div>

          </motion.div>

          {/* Right Booking Panel */}
                    {/* Right Booking Panel */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,.08)] sm:p-8">

              {/* Status */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    Laboratory Status
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-slate-900">
                    Open Today
                  </h3>

                </div>

                <div className="flex items-center gap-2">

                  <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />

                  <span className="text-sm font-semibold text-emerald-600">
                    Live
                  </span>

                </div>

              </div>

              {/* Information */}

              <div className="mt-8 space-y-4 rounded-2xl bg-slate-50 p-5">

                {[
                  ["Working Hours", "8:00 AM – 8:00 PM"],
                  ["Home Collection", "Available"],
                  ["Digital Reports", "Same Day*"],
                  ["Booking Time", "< 1 Minute"],
                ].map(([label, value]) => (

                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-slate-200 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-slate-500">
                      {label}
                    </span>

                    <span className="text-sm font-semibold text-slate-900">
                      {value}
                    </span>

                  </div>

                ))}

              </div>

              {/* Benefits */}

              <div className="mt-8 space-y-3">

                {[
                  "Certified Laboratory",
                  "Experienced Professionals",
                  "Secure Digital Reports",
                  "Affordable Health Packages",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">

                      <FiArrowRight className="text-blue-600" />

                    </div>

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              {/* CTA */}

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">

                <p className="text-sm text-blue-100">
                  Need Assistance?
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  We're here to help.
                </h4>

                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Call our team or complete the booking form below.
                  We'll confirm your appointment as quickly as possible.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}