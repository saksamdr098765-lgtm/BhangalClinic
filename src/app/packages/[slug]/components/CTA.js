"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiHome,
  FiShield,
} from "react-icons/fi";
import SITE_CONFIG from "@/app/SITE_CONFIG";

export default function CTA({ pkg }) {
  const features = [
    {
      icon: FiHome,
      title: "Home Sample Collection",
    },
    {
      icon: FiClock,
      title: "Reports in 24-48 Hours",
    },
    {
      icon: FiShield,
      title: "Reliable Laboratory Services",
    },
  ];
   const handleWhatsApp = (test) => {
    const message = `Hello,
  
  I would like to book the following test.
  
  *Test:* ${test.name}
  *Description:* ${test.desc}
  *Price:* ${test.price}
  
  Please share the available slots and booking process.
  
  Thank you.`;
  
    const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
      message
    )}`;
  
    window.open(url, "_blank");
  };
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-20 lg:py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/60 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-xl

            lg:rounded-[40px]
          "
        >

          <div
            className="
              grid

              lg:grid-cols-[1.1fr_.9fr]
            "
          >

            {/* LEFT */}

            <div className="p-6 sm:p-8 lg:p-12">

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-blue-50
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-blue-700

                  sm:text-sm
                "
              >
                Book Your Health Checkup
              </span>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-black
                  leading-tight
                  text-slate-900

                  sm:text-4xl

                  lg:text-5xl
                "
              >
                Ready to Take
                <span className="block text-blue-600">
                  Better Care of Your Health?
                </span>
              </h2>

              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-slate-600

                  sm:text-lg
                  sm:leading-8
                "
              >
                Book the{" "}
                <span className="font-semibold text-slate-900">
                  {pkg.name}
                </span>{" "}
                today for accurate diagnostic testing, experienced healthcare
                professionals, convenient home sample collection, and secure
                digital reports.
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                "
              >

                <button
                onClick={()=>{handleWhatsApp(pkg)}}
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-4
                    font-semibold
                    text-white
                    transition-all

                    hover:bg-blue-700
                    hover:-translate-y-1
                  "
                >
                  Book This Package

                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </button>

                <a
                href={`tel:${SITE_CONFIG.phone}`}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-6
                    py-4
                    font-semibold
                    text-slate-700
                    transition

                    hover:border-blue-300
                    hover:bg-blue-50
                  "
                >
                  Contact Us
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div
              className="
                border-t
                border-slate-200
                bg-slate-50
                p-6

                sm:p-8

                lg:border-l
                lg:border-t-0
                lg:p-12
              "
            >

              <h3 className="text-xl font-bold text-slate-900">
                Why Choose This Package?
              </h3>

              <p className="mt-2 text-slate-600">
                Everything you need for a convenient and reliable diagnostic
                experience.
              </p>

              <div className="mt-8 space-y-4">

                {features.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-4
                      "
                    >

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-50
                        "
                      >
                        <Icon className="text-blue-600" size={22} />
                      </div>

                      <div>

                        <h4 className="font-semibold text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm text-slate-500">
                          Trusted healthcare with patient-first service.
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

              <div
                className="
                  mt-8
                  rounded-2xl
                  bg-blue-600
                  p-5
                  text-white
                "
              >

                <p className="text-sm uppercase tracking-wider text-blue-100">
                  Starting From
                </p>

                <div className="mt-2 flex items-end gap-3">

                  <span className="text-4xl font-black">
                    ₹{pkg.price}
                  </span>

                  {pkg.originalPrice && (
                    <span className="pb-1 text-lg text-blue-100 line-through">
                      ₹{pkg.originalPrice}
                    </span>
                  )}

                </div>

                {pkg.discount && (
                  <p className="mt-2 font-semibold text-white">
                    {pkg.discount}
                  </p>
                )}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}