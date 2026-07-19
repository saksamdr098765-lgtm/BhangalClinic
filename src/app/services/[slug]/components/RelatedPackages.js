"use client";

import PackageCard from "@/app/components/PackageCard";
import { packages } from "@/app/data/packages";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";


export default function RelatedPackages({ service }) {
  const relatedPackages = packages.filter((pkg) =>
    service.relatedPackages.includes(pkg.slug)
  );

  if (!relatedPackages.length) return null;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Recommended Packages
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Health Packages Related to This Service
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Make the most of your diagnostic visit by choosing a preventive
            health package that combines multiple laboratory investigations in
            one affordable screening plan. These packages are carefully selected
            based on the service you're viewing.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {relatedPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg}
          ></PackageCard>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-16 rounded-[32px] bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-8 text-white lg:flex lg:items-center lg:justify-between lg:p-10">
          <div>
            <h3 className="text-3xl font-bold">
              Looking for a Complete Health Checkup?
            </h3>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-sky-100">
              Explore our complete collection of preventive health packages
              designed for men, women, senior citizens, and families.
            </p>
          </div>

          <Link
            href="/packages"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-sky-700 transition hover:scale-105 lg:mt-0"
          >
            Explore All Packages

            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}