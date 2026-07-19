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
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_460px]">
          {/* Left */}

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              <FiHome />

              Home Sample Collection
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Home Blood Sample Collection in {location.city}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Skip the hassle of visiting the laboratory. Our home sample
              collection service allows you to book blood tests and health
              checkups from the comfort of your home. A trained phlebotomist
              visits your location, safely collects the required samples using
              sterile equipment, and transports them to our laboratory while
              maintaining strict quality standards.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              This service is ideal for senior citizens, busy professionals,
              pregnant women, children, patients recovering from illness, and
              anyone who prefers convenient diagnostic testing without traveling
              to the laboratory.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Convenient Home Visits",
                "Trained Phlebotomists",
                "Sterile Sample Collection",
                "Fast Digital Reports",
                "Affordable Service",
                "Safe Sample Transportation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4"
                >
                  <FiCheckCircle className="text-sky-600" />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/services/home-sample-collection"
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-700"
              >
                Learn More

                <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="rounded-[32px] bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 p-8 text-white shadow-2xl">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15">
              <FiHome size={38} />
            </div>

            <h3 className="mt-8 text-3xl font-black">
              How It Works
            </h3>

            <div className="mt-8 space-y-6">
              {[
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
              ].map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {step.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-sky-100">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h4 className="text-xl font-bold">
                Serving {location.city} & Nearby Areas
              </h4>

              <p className="mt-3 leading-7 text-sky-100">
                Book reliable home sample collection for routine blood tests,
                preventive health packages, diabetes monitoring, thyroid tests,
                Vitamin D & B12 tests, and many other diagnostic investigations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}