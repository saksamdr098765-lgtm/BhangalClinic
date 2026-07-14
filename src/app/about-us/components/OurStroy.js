"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2014",
    title: "Laboratory Established",
    description:
      "Started with a vision of providing accurate and affordable diagnostic services.",
  },
  {
    year: "2018",
    title: "Modern Equipment",
    description:
      "Upgraded with advanced diagnostic technology for faster and more reliable reports.",
  },
  {
    year: "2022",
    title: "Home Collection",
    description:
      "Introduced convenient home sample collection for patients across the region.",
  },
  {
    year: "Today",
    title: "Trusted by Thousands",
    description:
      "Continuing to deliver quality diagnostics with a patient-first approach.",
  },
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-[1fr_.9fr] lg:gap-24">

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-700">
              Our Story
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
              Building Trust Through
              <span className="block text-blue-600">
                Accurate Diagnostics.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Since our beginning, Bhangal Clinical Laboratory has focused on
              one mission—providing reliable pathology services that patients
              and doctors can trust.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Through experienced professionals, modern laboratory technology,
              and compassionate patient care, we continue helping families make
              informed healthcare decisions with confidence.
            </p>
          </motion.div>

          {/* Timeline */}

          <div className="relative">

            <div className="absolute left-4 top-3 bottom-3 w-px bg-slate-200" />

            <div className="space-y-10">

              {timeline.map((item, index) => (

                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6"
                >

                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 ring-8 ring-blue-50">
                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>

                  <div>

                    <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                      {item.year}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}