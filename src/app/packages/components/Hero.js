"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  FiSearch,
  FiArrowRight,
  FiCheckCircle,
  FiHome,
  FiShield,
} from "react-icons/fi";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function PackagesHero() {
    const searchParams = useSearchParams();
  
    const search = searchParams.get("search")?.toLowerCase()
 
  const [query,setQuery]=useState("")
   const router=useRouter()
  const handleSearch = () => {
    if (!query.trim()) return;

    router.push(
      `/packages?search=${encodeURIComponent(query)}`
    );
  };
     if(search) return
  return (
    <section className="relative overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-slate-50" />

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-violet-200/30 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">

        <div className="max-w-6xl">

          {/* Badge */}

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-sm font-medium text-slate-700">
              100+ Health Packages Available
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            Find the Perfect
            <br />

            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-600 bg-clip-text text-transparent">
              Health Package
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600"
          >
            Explore affordable health checkup packages for diabetes,
            heart care, thyroid, women, senior citizens and complete
            body wellness with home sample collection and fast digital
            reports.
          </motion.p>

          {/* Search */}

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.45 }}
            className="mt-10"
          >
            <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white/80 p-3 shadow-xl backdrop-blur-xl sm:flex-row">

              <div className="flex flex-1 items-center gap-3 px-4">
                <FiSearch className="text-xl text-slate-400" />

                <input
                  type="text"
                  value={query}
                  onChange={(e)=>{setQuery(e.target.value)}}
                  placeholder="Search health packages..."
                  className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>

              <button onClick={handleSearch} className="group flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:-translate-y-1">
                Search

                <FiArrowRight className="transition group-hover:translate-x-1" />
              </button>

            </div>
          </motion.div>

          {/* Quick Stats */}

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            {[
              {
                icon: FiCheckCircle,
                text: "100+ Packages",
              },
              {
                icon: FiHome,
                text: "Home Collection",
              },
              {
                icon: FiShield,
                text: "NABL Certified Labs",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    <Icon className="text-blue-600" />
                  </div>

                  <span className="font-medium text-slate-700">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}