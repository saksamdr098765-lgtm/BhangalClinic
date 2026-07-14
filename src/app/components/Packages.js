"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiShield,
  FiHeart,
  FiActivity,
  FiCheck,
} from "react-icons/fi";

import Link from "next/link";
import { packages } from "../data/packages";


export default function Packages() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-16

        sm:py-20
        lg:py-24
      "
    >

      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="
            absolute
            left-0
            top-0
            h-60
            w-60
            rounded-full
            bg-blue-200/20
            blur-[80px]

            sm:h-72
            sm:w-72
            sm:blur-[100px]
          "
        />


        <div
          className="
            absolute
            bottom-0
            right-0
            h-64
            w-64
            rounded-full
            bg-cyan-200/20
            blur-[90px]

            sm:h-80
            sm:w-80
            sm:blur-[120px]
          "
        />

      </div>



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

        {/* Heading */}

        <motion.div
          initial={{
            opacity:0,
            y:30,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          className="max-w-2xl"
        >

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600

              sm:text-sm
            "
          >
            Health Packages
          </span>


          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-slate-900

              sm:mt-4
              sm:text-4xl

              lg:text-5xl
            "
          >
            Preventive health made simple.
          </h2>


          <p
            className="
              mt-4
              text-base
              leading-7
              text-slate-600

              sm:mt-5
              sm:text-lg
              sm:leading-8
            "
          >
            Choose a health package designed for your lifestyle with transparent
            pricing and home sample collection.
          </p>

        </motion.div>



        {/* Cards */}

   <div
  className="
    mt-14
    flex
    gap-6
    overflow-x-auto
    pb-4
    snap-x
    snap-mandatory
    scrollbar-thin
    scrollbar-thumb-slate-300
    scrollbar-track-transparent
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
>

          {packages.slice(0,6).map((pkg, index) => (
        <motion.div
  key={pkg.id}
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.08 }}
  whileHover={{ y: -6 }}
className="
  group
  flex
  flex-col
  shrink-0
  snap-start
  w-[320px]
  sm:w-[360px]
  lg:w-[390px]
  rounded-[28px]
  border
  border-slate-200
  bg-white/80
  p-7
  backdrop-blur-xl
  transition-all
  duration-300
  hover:-translate-y-2
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

  {/* Price */}

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