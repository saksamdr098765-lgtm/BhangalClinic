"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiHome,
  FiCheckCircle,
  FiCoffee,
} from "react-icons/fi";
import { defaultTheme, testTheme } from "../data/tests";
import { trackTestClick } from "../lib/tracking";
import SITE_CONFIG from "../SITE_CONFIG";


export default function TestCard({ test ,location}) {
  const theme = testTheme[test.organ] || defaultTheme;
  const Icon = theme.icon;
  const handleWhatsApp = (test) => {
    trackTestClick(`${location}-${test.name}`)
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
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25 },
      }}
      className={`
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        ${theme.cardBg}
        shadow-sm
        transition-all
        duration-300
        ${theme.border}
        hover:shadow-xl
      `}
    >
      <div className="p-5 sm:p-6 flex flex-1 flex-col">

        {/* Header */}

        <div className="flex items-start justify-between gap-3">

          <div className="flex items-start gap-4 flex-1 min-w-0">

            <div
              className={`
                h-14
                w-14
                rounded-2xl
                ${theme.iconBg}
                ${theme.iconText}
                flex
                items-center
                justify-center
                shadow-sm
                transition-transform
                duration-300
                group-hover:scale-110
              `}
            >
              <Icon className="text-2xl" />
            </div>

            <div className="min-w-0">

              <span
                className={`
                  inline-flex
                  rounded-full
                  px-2.5
                  py-1
                  text-[11px]
                  font-semibold
                  ${theme.badgeBg}
                  ${theme.badgeText}
                `}
              >
                {test.organ}
              </span>

              <h3 className="mt-2 text-lg font-bold leading-6 text-slate-900">
                {test.shortName}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {test.name}
              </p>

            </div>

          </div>

          <div className="text-right">

            <p className="text-xs text-slate-500">
              From
            </p>

            <h4 className="text-2xl font-black text-slate-900">
              ₹{test.price}
            </h4>

          </div>

        </div>

        {/* Description */}

        <p className="mt-5 line-clamp-2 text-sm leading-6 text-slate-600">
          {test.description}
        </p>

        {/* Medical Information */}

        <div className="mt-6 grid grid-cols-2 gap-3">

          <div className="rounded-2xl bg-white/80 p-3 border border-white">

            <p className="text-[11px] uppercase tracking-wide text-slate-500">
              Sample
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {test.sampleType}
            </p>

          </div>

          <div className="rounded-2xl bg-white/80 p-3 border border-white">

            <p className="text-[11px] uppercase tracking-wide text-slate-500">
              Parameters
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {test.parameterCount}
            </p>

          </div>

        </div>

        {/* Features */}

        <div className="mt-5 space-y-2">

          <div className="flex items-center gap-2 text-sm text-slate-700">
            <FiClock className={theme.iconText} />
            Reports in {test.reportTime}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-700">
            <FiHome className={theme.iconText} />
            Home Sample Collection
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-700">
            {test.fasting ? (
              <>
                <FiCoffee className={theme.iconText} />
                Fasting Required
              </>
            ) : (
              <>
                <FiCheckCircle className="text-emerald-600" />
                No Fasting Required
              </>
            )}
          </div>

        </div>

        {/* CTA */}

        <div className="mt-auto pt-6">

          <button
            onClick={() => handleWhatsApp(test)}
            className={`
              w-full
              h-11
              rounded-2xl
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              ${
                theme.color === "red"
                  ? "bg-red-600 hover:bg-red-700"
                  : theme.color === "emerald"
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : theme.color === "indigo"
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : theme.color === "cyan"
                  ? "bg-cyan-600 hover:bg-cyan-700"
                  : theme.color === "amber"
                  ? "bg-amber-600 hover:bg-amber-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }
            `}
          >
            Book Test

            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

      </div>

    </motion.article>
  );
}