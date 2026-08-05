"use client";

import { useState } from "react";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { trackSearch } from "@/app/lib/tracking";

const POPULAR_TESTS = [
  "CBC",
  "HbA1c",
  "Vitamin D",
  "Thyroid",
  "LFT",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const value = query.trim();

    if (!value) return;

    trackSearch(value);

    router.push(
      `/packages?search=${encodeURIComponent(value)}`
    );
  };

  return (
    <div className="w-full">
      {/* Search Box */}

      <div
        className="
          group
          flex
          items-center
          rounded-[28px]
          border
          border-slate-200
          bg-white/80
          shadow-[0_20px_60px_rgba(15,23,42,.08)]
          backdrop-blur-2xl
          transition-all
          duration-300
          hover:shadow-[0_20px_70px_rgba(15,23,42,.12)]
          focus-within:scale-[1.01]
          focus-within:border-blue-500
          focus-within:shadow-[0_20px_80px_rgba(37,99,235,.18)]
        "
      >
        <div className="pl-6 text-slate-400">
          <FiSearch size={22} />
        </div>

        <input
          type="search"
          value={query}
          placeholder="Search pathology tests..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="
            h-16
            flex-1
            bg-transparent
            px-4
            text-[16px]
            outline-none
            placeholder:text-slate-400
          "
        />

        <button
          type="button"
          aria-label="Search Packages"
          onClick={handleSearch}
          className="
            mr-2
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-slate-900
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-blue-600
          "
        >
          <FiArrowRight />
        </button>
      </div>

      {/* Popular Tests */}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="text-sm text-slate-500">
          Popular:
        </span>

        {POPULAR_TESTS.map((test) => (
          <button
            key={test}
            type="button"
            onClick={() => setQuery(test)}
            className="
              rounded-full
              border
              border-slate-200
              bg-white/70
              px-4
              py-2
              text-sm
              font-medium
              text-slate-700
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-400
              hover:bg-white
              hover:shadow-lg
            "
          >
            {test}
          </button>
        ))}
      </div>
    </div>
  );
}