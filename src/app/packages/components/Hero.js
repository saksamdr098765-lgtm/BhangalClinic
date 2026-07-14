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

  const search = searchParams.get("search")?.toLowerCase();

  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;

    router.push(
      `/packages?search=${encodeURIComponent(query)}`
    );
  };

  if (search) return null;

  return (
    <section className="relative overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-slate-50" />

      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[120px]" />

      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-violet-200/30 blur-[120px] sm:h-96 sm:w-96 sm:blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 pt-20 pb-14 sm:px-6 sm:pt-24 sm:pb-20 lg:py-28">
        <div className="mx-auto max-w-5xl text-center lg:text-left">
          {/* Badge */}

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur sm:px-4 sm:py-2 sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-slate-700">
              100+ Health Packages Available
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-7xl"
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
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0"
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
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg sm:flex-row sm:rounded-3xl sm:p-3">
              <div className="flex h-12 flex-1 items-center gap-3 px-3 sm:px-4">
                <FiSearch className="text-lg text-slate-400 sm:text-xl" />

                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSearch()
                  }
                  placeholder="Search health packages..."
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 sm:text-base"
                />
              </div>

              <button
                onClick={handleSearch}
                className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700 sm:h-14 sm:rounded-2xl sm:px-8 sm:text-base"
              >
                Search

                <FiArrowRight className="transition group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Quick Stats */}

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.6 }}
            className="mt-10 grid gap-3 sm:grid-cols-3"
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
                <motion.div
                  key={item.text}
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    px-4
                    py-4
                    shadow-sm
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-50
                    "
                  >
                    <Icon className="text-blue-600" />
                  </div>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-slate-700

                      sm:text-base
                    "
                  >
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}