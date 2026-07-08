"use client";

import { motion } from "framer-motion";
import {
  FiStar,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";

const reviews = [
  {
    name: "Aman Singh",
    location: "Mohali",
    rating: 5,
    review:
      "Very professional staff and quick report delivery. The online booking process was simple and the home sample collection arrived exactly on time.",
  },
  {
    name: "Neha Sharma",
    location: "Kharar",
    rating: 5,
    review:
      "Clean laboratory, friendly staff, and transparent pricing. I received my reports digitally the same evening.",
  },
  {
    name: "Rajesh Kumar",
    location: "Chandigarh",
    rating: 5,
    review:
      "Booked my parents' health package online. Everything was smooth, from booking to report delivery. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/20 blur-[100px]" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-200/20 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Patient Reviews
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Trusted by families every day.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Real experiences from patients who chose us for accurate diagnostics,
            home sample collection, and fast digital reports.
          </p>
        </motion.div>

        {/* Reviews */}

        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Rating */}

              <div className="flex items-center gap-1">

                {[...Array(review.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="mt-6 leading-8 text-slate-600">
                "{review.review}"
              </p>

              {/* User */}

              <div className="mt-8 flex items-center justify-between">

                <div>

                  <h3 className="font-bold text-slate-900">
                    {review.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                    <FiMapPin />
                    {review.location}
                  </div>

                </div>

                <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-600">
                  <FiCheckCircle />
                  Verified
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}