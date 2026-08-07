import Image from "next/image";
import TrackingLink from "@/app/components/TrackingLink";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import {
  FiArrowRight,
  FiClock,
  FiHome,
  FiCheckCircle,
  FiPhone,
} from "react-icons/fi";

export default function Hero({ hero }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">

        {/* Left */}

        <div>

          {hero.badge && (
            <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              {hero.badge}
            </span>
          )}

          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {hero.description}
          </p>

          {/* Highlights */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <FiClock className="text-sky-600" size={20} />
              <div>
                <p className="text-xs text-slate-500">
                  Report Time
                </p>
                <p className="font-semibold">
                  {hero.reportTime}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <FiHome className="text-sky-600" size={20} />
              <div>
                <p className="text-xs text-slate-500">
                  Home Collection
                </p>
                <p className="font-semibold">
                  {hero.homeCollection}
                </p>
              </div>
            </div>

          </div>

          {/* Trust */}

          <div className="mt-8 space-y-3">

            {hero.trustPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <FiCheckCircle className="text-emerald-600" />

                <span className="text-slate-700">
                  {item}
                </span>
              </div>
            ))}

          </div>

          {/* CTA */}

          <div className="mt-10 flex flex-wrap gap-4">

            <TrackingLink
              href={hero.bookingUrl}
              tracking="test-hero-book-now"
              className="inline-flex items-center rounded-xl bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-700"
            >
              {hero.bookButton}

              <FiArrowRight className="ml-2" />
            </TrackingLink>

            <TrackedPhoneLink
              location="test-hero-call-now"
              className="inline-flex items-center rounded-xl border border-slate-300 px-7 py-4 font-semibold transition hover:border-sky-600 hover:text-sky-600"
            >
              <FiPhone className="mr-2" />

              Call Now
            </TrackedPhoneLink>

          </div>

        </div>

        {/* Right */}

        <div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

            <Image
              src={hero.image}
              alt={hero.imageAlt}
              width={700}
              height={700}
              className="h-full w-full object-cover"
              priority
            />

          </div>

        </div>

      </div>
    </section>
  );
}