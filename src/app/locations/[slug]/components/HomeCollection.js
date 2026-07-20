"use client";

import Link from "next/link";
import {
  FiHome,
  FiArrowRight,
  FiCheckCircle,
  FiCalendar,
  FiClock,
  FiShield,
} from "react-icons/fi";

export default function HomeCollection({ location }) {
  const benefits = [
    "Convenient Home Visits",
    "Trained Phlebotomists",
    "Sterile Sample Collection",
    "Fast Digital Reports",
    "Affordable Service",
    "Safe Sample Transportation",
  ];

  const steps = [
    {
      icon: FiCalendar,
      title: "Book an Appointment",
      text: "Choose a convenient date and time for sample collection.",
    },
    {
      icon: FiHome,
      title: "Home Visit",
      text: "Our trained professional visits your home for sample collection.",
    },
    {
      icon: FiShield,
      title: "Safe Processing",
      text: "Samples are transported securely to our laboratory for analysis.",
    },
    {
      icon: FiClock,
      title: "Receive Reports",
      text: "Access your reports quickly through our digital reporting system.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_430px] lg:gap-12">
          {/* Left */}

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
              <FiHome className="h-4 w-4" />
              Home Sample Collection
            </span>

            <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
              Home Blood Sample Collection in {location.city}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
              Skip the hassle of visiting the laboratory. Our home sample
              collection service allows you to book blood tests and health
              checkups from the comfort of your home. A trained phlebotomist
              visits your location, safely collects the required samples using
              sterile equipment, and transports them to our laboratory while
              maintaining strict quality standards.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
              This service is ideal for senior citizens, busy professionals,
              pregnant women, children, patients recovering from illness, and
              anyone who prefers convenient diagnostic testing without
              travelling to the laboratory.
            </p>

            {/* Benefits */}

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-sky-200 hover:bg-sky-50 sm:rounded-2xl sm:p-4"
                >
                  <FiCheckCircle className="h-5 w-5 shrink-0 text-sky-600" />

                  <span className="text-sm font-medium text-slate-700 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-8 sm:mt-10">
              <Link
                href="/services/home-sample-collection"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700 sm:rounded-2xl sm:px-7 sm:py-4"
              >
                Learn More

                <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="rounded-2xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 p-5 text-white shadow-2xl sm:rounded-3xl sm:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 sm:h-20 sm:w-20 sm:rounded-3xl">
              <FiHome className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>

            <h3 className="mt-6 text-2xl font-black sm:mt-8 sm:text-3xl">
              How It Works
            </h3>

            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="flex gap-3 rounded-xl bg-white/10 p-3 backdrop-blur sm:gap-4 sm:rounded-2xl sm:p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {step.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-sky-100">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Card */}

            <div className="mt-6 rounded-xl bg-white/10 p-4 backdrop-blur sm:mt-8 sm:rounded-2xl sm:p-6">
              <h4 className="text-lg font-bold sm:text-xl">
                Serving {location.city} & Nearby Areas
              </h4>

              <p className="mt-3 text-sm leading-7 text-sky-100">
                Book reliable home sample collection for routine blood tests,
                preventive health packages, diabetes monitoring, thyroid tests,
                Vitamin D & B12 tests, and many other diagnostic
                investigations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}