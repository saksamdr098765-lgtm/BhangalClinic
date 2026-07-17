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
import SITE_CONFIG from "@/app/SITE_CONFIG";

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
   <section
  className="
    relative
    overflow-hidden
    bg-white
    pt-20
    pb-14

    sm:pt-24
    sm:pb-20

    lg:pt-32
    lg:pb-24
  "
>

  {/* Background */}

  <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50" />

  {/* Medical Pattern */}

  <div
    className="
      absolute
      inset-0
      opacity-[0.04]
      [background-image:radial-gradient(#0284c7_1px,transparent_1px)]
      [background-size:22px_22px]
    "
  />

  {/* Glow */}

  <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-sky-200/50 blur-[170px]" />

  <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-[170px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

    <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">

      {/* LEFT */}

      <motion.div
        {...fadeUp}
        transition={{
          duration: .45
        }}
      >

     

        {/* Category */}

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-sky-600">

      {pkg.category}

        </p>

        {/* Heading */}

        <h1
          className="
            mt-4
            text-4xl
            font-black
            leading-[1]
            tracking-tight
            text-slate-900

            sm:text-5xl

            lg:text-7xl
          "
        >
          {pkg.name}
        </h1>

        {/* Description */}

        <p
          className="
            mt-7
            max-w-2xl
            text-lg
            leading-8
            text-slate-600
          "
        >
          {pkg.description}
        </p>

        {/* Healthcare Highlights */}

        <div className="mt-8 flex flex-wrap gap-3">

          <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">

            <FiHome className="text-emerald-600" />

            <span className="text-sm font-semibold text-slate-700">
              Home Collection
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2">

            <FiClock className="text-sky-600" />

            <span className="text-sm font-semibold text-slate-700">
              24 Hour Reports
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2">

            <FiShield className="text-violet-600" />

            <span className="text-sm font-semibold text-slate-700">
              Quality Assured
            </span>

          </div>

        </div>

        {/* Premium Price Card */}

        <div className="mt-10 max-w-md rounded-[30px] border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-6 shadow-xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">

            Package Price

          </p>

          <div className="mt-4 flex items-end gap-4">

            <h2 className="text-5xl font-black text-slate-900">

              ₹{pkg.price}

            </h2>

            <span className="pb-2 text-2xl text-slate-400 line-through">

              ₹{pkg.originalPrice}

            </span>

          </div>

          <div className="mt-4 inline-flex rounded-full bg-emerald-100 px-4 py-2">

            <span className="text-sm font-bold text-emerald-700">

              Save ₹{pkg.originalPrice - pkg.price}

            </span>

          </div>

        </div>
                {/* CTA */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <button
          onClick={()=>{handleWhatsApp(pkg)}}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-sky-600
              to-cyan-600
              px-8
              py-4
              font-semibold
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
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
              rounded-2xl
              border
              border-sky-200
              bg-white
              px-8
              py-4
              font-semibold
              text-slate-700
              transition
              hover:border-sky-500
              hover:bg-sky-50
            "
          >

            Free Consultation

          </a>

        </div>

      </motion.div>

      {/* ================= RIGHT ================= */}

      <motion.div
        {...fadeUp}
        transition={{
          delay: .15
        }}
      >

        <div className="rounded-[36px] border border-sky-100 bg-white p-6 shadow-[0_25px_60px_rgba(14,165,233,.12)] lg:p-8">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-600">

              Included In This Package

            </p>

            <h3 className="mt-3 text-3xl font-black text-slate-900">

              Everything You Need

            </h3>

          </div>

          {/* Feature Cards */}

          <div className="mt-8 grid gap-4">

            {[
              {
                icon: FiHome,
                title: "Home Collection",
                color: "bg-emerald-50",
                icon: <FiHome className="text-emerald-600" />,
              },
              {
                icon: FiClock,
                title: "Fast Digital Reports",
                color: "bg-sky-50",
                icon: <FiClock className="text-sky-600" />,
              },
              {
                icon: FiShield,
                title: "Quality Assured Testing",
                color: "bg-violet-50",
                icon: <FiShield className="text-violet-600" />,
              },
              {
                icon: FiCheckCircle,
                title: `${pkg?.testsCount} Diagnostic Tests`,
                color: "bg-cyan-50",
                icon: <FiCheckCircle className="text-cyan-600" />,
              },
            ].map((item) => (

              <div
                key={item.title}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-slate-100
                  bg-slate-50
                  p-4
                  transition
                  hover:border-sky-200
                  hover:bg-white
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
                    ${item.color}
                  `}
                >
                  {item.icon}
                </div>

                <div>

                  <p className="font-semibold text-slate-900">

                    {item.title}

                  </p>

                  <p className="mt-1 text-sm text-slate-500">

                    Included with every booking

                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Recommended */}

          <div className="mt-8 rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-600 p-6">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">

              Recommended For

            </p>

            <p className="mt-4 text-lg font-semibold leading-8 text-white">

              Working professionals, annual preventive checkups,
              adults above 30 years, senior citizens, and anyone
              looking to monitor their overall health.

            </p>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>
  );
}