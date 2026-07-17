"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiHome,
  FiClock,
  FiShield,
  FiHeart,
  FiActivity,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Link from "next/link";
import { packages } from "../data/packages";
import PackageCard from "./PackageCard";

export default function Packages() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-100/60 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Preventive Health Packages
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">

            Health checkups that help
            <br />
            you stay one step ahead.

          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">

            Comprehensive health packages with transparent pricing,
            home sample collection, certified testing and quick digital reports.

          </p>

          {/* Quick Benefits */}

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2">

              <FiHome className="text-blue-600" />

              <span className="text-sm font-medium text-slate-700">
                Free Home Collection
              </span>

            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2">

              <FiClock className="text-emerald-600" />

              <span className="text-sm font-medium text-slate-700">
                Fast Reports
              </span>

            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2">

              <FiShield className="text-violet-600" />

              <span className="text-sm font-medium text-slate-700">
                Accurate Results
              </span>

            </div>

          </div>

        </motion.div>

        {/* Cards */}

<Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView={1.1}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 3.5,
      spaceBetween: 24,
    },
  }}
  className="mt-16 !overflow-visible"
>
  {packages.slice(0, 6).map((pkg, index) => (
    <SwiperSlide key={pkg.id}>
      <PackageCard
        pkg={pkg}
        featured={index === 0}
      />
    </SwiperSlide>
  ))}
</Swiper>

      </div>

    </section>
  );
}