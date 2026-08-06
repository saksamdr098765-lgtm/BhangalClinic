import Image from "next/image";
import TrackedLink from "./TrackedLink";
import {
  FiArrowRight,
  FiCheckCircle,
  FiSearch,
  FiMapPin,
  FiHome,
  FiClock,
  FiShield,
} from "react-icons/fi";

const popularTests = [
  "Full Body Checkup",
  "CBC Test",
  "Thyroid Profile",
  "Diabetes Package",
];

const trustItems = [
  "NABL Standards",
  "Same Day Reports",
  "Home Collection",
  "100+ Tests",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <FiShield />
              Trusted Diagnostic Laboratory
            </div>

            <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Accurate Lab Tests
              <span className="block text-blue-600">
                At Home & Near You
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Book health checkups, pathology tests, and preventive packages
              with fast reports, home sample collection, and trusted quality
              standards.
            </p>

            {/* Search */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
              <form action="/packages" method="GET" className="flex flex-col gap-3 lg:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-50 px-4">
                  <FiSearch className="text-slate-400" />
                  <input
                    type="text"
                    name="search"
                    placeholder="Search tests, packages..."
                    aria-label="Search tests and packages"
                    className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 font-semibold text-white transition duration-300 hover:bg-blue-700"
                >
                  Search
                  <FiArrowRight />
                </button>
              </form>

              <div className="mt-4 flex flex-wrap gap-2">
                {popularTests.map((item) => (
                  <TrackedLink
                    key={item}
                    href={`/packages?search=${encodeURIComponent(item)}`}
                    tracking={`hero-populartest-${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition duration-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item}
                  </TrackedLink>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedLink
                href="/packages"
                tracking="hero-explore-packages"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition duration-300 hover:bg-slate-800"
              >
                Explore Packages
                <FiArrowRight />
              </TrackedLink>

              <TrackedLink
                href="/contact"
                tracking="hero-home-collection"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition duration-300 hover:border-blue-500 hover:text-blue-600"
              >
                <FiHome />
                Home Collection
              </TrackedLink>
            </div>

            {/* Trust */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <FiCheckCircle className="text-green-500" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative h-[560px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
              <Image
                src="/images/hero-lab.webp"
                alt="Diagnostic Pathology Laboratory Equipment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -left-8 top-8 hidden w-64 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-100 p-3">
                  <FiHome className="text-xl text-green-600" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Home Collection
                  </p>
                  <p className="text-sm text-slate-500">
                    Book in under 60 seconds
                  </p>
                </div>
              </div>
            </div>

            {/* Report Card */}
            <div className="absolute -bottom-6 right-0 w-72 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-3">
                  <FiClock className="text-xl text-blue-600" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Reports in 24 Hours
                  </p>
                  <p className="text-sm text-slate-500">
                    Secure online access
                  </p>
                </div>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-4/5 rounded-full bg-blue-600"></div>
              </div>
            </div>

            {/* Location */}
            <div className="absolute right-12 top-10 hidden rounded-full bg-white px-4 py-2 shadow-lg lg:flex items-center gap-2">
              <FiMapPin className="text-red-500" />
              <span className="text-sm font-medium">
                Home Sample Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}