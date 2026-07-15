"use client";

import { motion } from "framer-motion";
import { FiSearch, FiArrowRight, FiCheck,FiHome,FiClock } from "react-icons/fi";
import Link from "next/link";
import { packages } from "@/app/data/packages";
import { useSearchParams } from "next/navigation";


export default function PackagesPage() {
    const searchParams = useSearchParams();

  const search = searchParams.get("search")?.toLowerCase() || "";

 
  const filteredPackages = packages.filter((pkg) => {
  return (
    pkg.name.toLowerCase().includes(search) ||
    pkg.shortDescription.toLowerCase().includes(search) ||
    pkg.description.toLowerCase().includes(search)
  );
});

// Show 6 random packages if nothing matches
const displayedPackages =  filteredPackages.length > 0
    ? filteredPackages
    : [...packages]
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
  return (
  <section
  className="
    relative
    overflow-hidden
    bg-gradient-to-b
    from-slate-50
    via-white
    to-slate-50
    py-5
    pb-24
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
      bg-cyan-100/50
      blur-[150px]
    "
  />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Hero */}

    <div className="mx-auto max-w-3xl text-center">

      <span
        className="
          inline-flex
          rounded-full
          border
          border-blue-100
          bg-white
          px-5
          py-2
          text-sm
          font-medium
          text-blue-700
        "
      >
        Preventive Healthcare
      </span>

      <h1
        className="
          mt-7
          text-5xl
          font-black
          tracking-tight
          text-slate-900
         text-nowrap
          lg:text-7xl
        "
      >
        {search?search:"Health"}
        <span className="text-blue-600">
          {" "}Packages
        </span>
      </h1>

      <p
        className="
          mx-auto
          mt-7
          max-w-2xl
          text-lg
          leading-8
          text-slate-600
        "
      >
        Discover comprehensive diagnostic packages designed for
        preventive healthcare, routine wellness, and early disease
        detection with convenient home sample collection.
      </p>

    </div>

   

    {/* Section Header */}

    <div
      className="
        mt-20
        flex
        items-end
        justify-between
      "
    >
      <div>

        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
          Available Packages
        </p>

        <h2
          className="
            mt-3
            text-4xl
            font-black
            text-slate-900
          "
        >
          Choose Your Health Checkup
        </h2>

      </div>

      <p className="hidden text-slate-500 lg:block">
        {displayedPackages.length} Packages Available
      </p>

    </div>

 

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {displayedPackages.map((pkg, index) => (
        <motion.div
  key={pkg.id}
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.08 }}
  whileHover={{ y: -6 }}
className="
  group
  flex
  h-full
  flex-col
  rounded-[28px]
  border
  border-slate-200
  bg-white/80
  p-7
  backdrop-blur-xl
  transition-all
  duration-300
  hover:border-blue-200
  hover:shadow-xl
"
>
  {/* Header */}

  <div className="flex items-start justify-between">
    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
      {pkg.tests} Tests
    </span>

    {pkg.popular && (
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
        Popular
      </span>
    )}
  </div>

  <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
    {pkg.name}
  </h2>

  <p className="mt-3 line-clamp-2 text-slate-600 leading-7">
    {pkg.description}
  </p>

  {/* Meta */}

  <div className="mt-6 flex flex-wrap gap-2">
    <span className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600">
      🏠 Home Collection
    </span>

    <span className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600">
      24h Reports
    </span>
  </div>

 <div className="mt-auto pt-8">

  {/* Price */}

  <div>
    <div className="flex items-end gap-3">
      <span className="text-5xl font-black text-slate-900">
        ₹{pkg.price}
      </span>

      <span className="pb-2 text-lg line-through text-slate-400">
        ₹{pkg.originalPrice}
      </span>
    </div>

    <p className="mt-2 text-sm font-medium text-emerald-600">
      Save ₹{pkg.originalPrice - pkg.price}
    </p>
  </div>

  <Link
    href={`/packages/${pkg.slug}`}
    className="
      mt-8
      flex
      items-center
      justify-center
      gap-2
      rounded-full
      bg-blue-600
      px-6
      py-4
      font-semibold
      text-white
      transition
      hover:bg-blue-700
    "
  >
    View Package
    <FiArrowRight className="transition group-hover:translate-x-1" />
  </Link>

</div>
</motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}