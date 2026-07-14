"use client";

import { motion } from "framer-motion";
import {
  FiShield,
  FiUsers,
  FiClock,
  FiHome,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiAward,
    title: "NABL Quality Standards",
    description:
      "Reliable testing processes with strict quality control.",
  },
  {
    icon: FiUsers,
    title: "Experienced Team",
    description:
      "Qualified professionals committed to accurate diagnostics.",
  },
  {
    icon: FiHome,
    title: "Home Sample Collection",
    description:
      "Convenient collection from your home with trained staff.",
  },
  {
    icon: FiClock,
    title: "Fast Digital Reports",
    description:
      "Reports delivered securely within the promised turnaround time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            grid
            items-center
            gap-16

            lg:grid-cols-2
          "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-blue-100
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
              "
            >
              Why Patients Trust Us
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-slate-900

                lg:text-5xl
              "
            >
              Trusted Diagnostics
              <br />
              Backed by Experience
            </h2>

            <p
              className="
                mt-8
                text-lg
                leading-8
                text-slate-600
              "
            >
              At Bhangal Clinical Laboratory, every diagnostic test is
              performed with a focus on accuracy, consistency, and
              patient care. Our experienced team follows standardized
              laboratory procedures using modern equipment to ensure
              dependable results that patients and doctors can trust.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-slate-600
              "
            >
              From preventive health checkups to specialized diagnostic
              investigations, we are committed to providing a seamless
              experience with home sample collection, timely reporting,
              transparent pricing, and compassionate service.
            </p>

            <div
              className="
                mt-10
                space-y-4
              "
            >
              {[
                "High-quality laboratory standards",
                "Secure digital reports",
                "Comfortable home collection",
                "Affordable preventive healthcare",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-100
                    "
                  >
                    <FiCheckCircle className="text-blue-600" />
                  </div>

                  <span
                    className="
                      font-medium
                      text-slate-700
                    "
                  >
                    {item}
                  </span>

                </div>
              ))}
            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              space-y-5
            "
          >
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    transition
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-lg
                  "
                >
                  <div className="flex gap-5">

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-50
                      "
                    >
                      <Icon
                        className="
                          text-2xl
                          text-blue-600
                        "
                      />
                    </div>

                    <div>

                      <h3
                        className="
                          text-xl
                          font-bold
                          text-slate-900
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          leading-7
                          text-slate-600
                        "
                      >
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

            {/* Trust Card */}

            <div
              className="
                rounded-[28px]
                bg-blue-600
                p-8
                text-white
              "
            >
              <FiShield className="text-3xl" />

              <h3
                className="
                  mt-5
                  text-2xl
                  font-bold
                "
              >
                Your Health Comes First
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-blue-100
                "
              >
                Every sample is handled with care, processed using
                established laboratory protocols, and reviewed to
                deliver dependable diagnostic results.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}