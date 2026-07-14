"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiActivity,
} from "react-icons/fi";

export default function RelatedPackages({
  packages = [],
  currentSlug,
}) {
  const related = packages
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">

          <div>

            <span
              className="
                inline-flex
                rounded-full
                border
                border-blue-100
                bg-blue-50
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
              "
            >
              Explore More
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                tracking-tight
                text-slate-900

                lg:text-5xl
              "
            >
              Related Health Packages
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Looking for something different? Explore more
              diagnostic packages designed for preventive
              healthcare and routine wellness.
            </p>

          </div>

          <Link
            href="/packages"
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-blue-600
              transition
              hover:gap-3
            "
          >
            View All Packages

            <FiArrowRight />
          </Link>

        </div>

        {/* Cards */}

        <div
          className="
            mt-14
            grid
            gap-6

            lg:grid-cols-3
          "
        >
          {related.map((pkg, index) => (
            <motion.div
              key={pkg.slug}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * .08,
              }}
              viewport={{
                once: true,
              }}
            >
              <Link
                href={`/packages/${pkg.slug}`}
                className="
                  group
                  block
                  rounded-[30px]
                  border
                  border-slate-200
                  bg-slate-50
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:bg-white
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                  "
                >
                  <FiActivity
                    className="
                      text-2xl
                      text-blue-600
                    "
                  />
                </div>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    text-slate-900
                  "
                >
                  {pkg.name}
                </h3>

                <p
                  className="
                    mt-4
                    line-clamp-3
                    leading-7
                    text-slate-600
                  "
                >
                  {pkg.description}
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div>

                    <p
                      className="
                        text-sm
                        text-slate-500
                      "
                    >
                      Starting From
                    </p>

                    <p
                      className="
                        text-3xl
                        font-black
                        text-slate-900
                      "
                    >
                      ₹{pkg.price}
                    </p>

                  </div>

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-600
                      text-white
                      transition
                      group-hover:translate-x-1
                    "
                  >
                    <FiArrowRight />
                  </div>

                </div>

              </Link>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}