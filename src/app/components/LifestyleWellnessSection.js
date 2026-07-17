"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const featured = {
  title: "Full Body Checkup",
  description:
    "Comprehensive preventive health screening designed to evaluate major organs, lifestyle diseases, nutritional deficiencies, and overall wellness in one package.",
  image: "/icons/full-body.svg",
  slug: "full-body",
};

const categories = [
  {
    title: "Diabetes Care",
    description: "Monitor blood sugar and long-term diabetic health.",
    image: "/icons/diabetes.svg",
    slug: "diabetes",
    accent: "emerald",
  },
  {
    title: "Vitamin Tests",
    description: "Vitamin D, B12 and nutritional deficiency screening.",
    image: "/icons/vitamins.svg",
    slug: "vitamins",
    accent: "purple",
  },
  {
    title: "Women's Health",
    description: "Preventive health packages specially designed for women.",
    image: "/icons/women-health.svg",
    slug: "women",
    accent: "pink",
  },
  {
    title: "Senior Care",
    description: "Regular wellness screening for healthy ageing.",
    image: "/icons/senior-care.svg",
    slug: "senior",
    accent: "amber",
  },
];

const accents = {
  emerald: "bg-emerald-100",
  purple: "bg-purple-100",
  pink: "bg-pink-100",
  amber: "bg-amber-100",
};

export default function LifestyleWellnessSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-100/40 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-100/30 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Preventive Healthcare
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
            Lifestyle & Wellness Packages
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Annual health screening packages designed to detect lifestyle
            disorders early and help you stay healthy with preventive care.
          </p>
        </div>

        {/* Featured Card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Link
            href={`/packages?tag=${featured.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-[36px] bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 p-8 text-white shadow-2xl lg:flex-row lg:items-center lg:justify-between lg:p-14"
          >
            <div className="max-w-xl">

              <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
                Most Popular
              </span>

              <h3 className="mt-6 text-4xl font-black">
                {featured.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                {featured.description}
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-700 transition group-hover:gap-4">
                Explore Packages
                <FiArrowRight className="text-lg" />
              </div>

            </div>

            <div className="mt-10 flex justify-center lg:mt-0 lg:w-[340px]">
              <Image
                src={featured.image}
                alt={featured.title}
                width={280}
                height={280}
                className="transition duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        </motion.div>

        {/* Small cards start here */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

  {categories.map((item, index) => (
    <motion.div
      key={item.slug}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
    >
      <Link
        href={`/packages?tag=${item.slug}`}
        className="group relative flex h-full overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
      >
        {/* Background Decoration */}

        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-slate-100 transition duration-300 group-hover:scale-125" />

        {/* Left */}

        <div className="relative flex flex-1 flex-col">

          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${accents[item.accent]}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={38}
              height={38}
            />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {item.description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
            Browse Packages

            <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
          </div>

        </div>

        {/* Right Illustration */}

        <div className="relative hidden items-end justify-end md:flex">

          <Image
            src={item.image}
            alt={item.title}
            width={110}
            height={110}
            className="translate-x-5 translate-y-5 opacity-15 transition duration-500 group-hover:scale-110 group-hover:rotate-6"
          />

        </div>

      </Link>
    </motion.div>
  ))}

</div>

</div>
</section>
  )}