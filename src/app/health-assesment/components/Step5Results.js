"use client";

import { motion } from "framer-motion";

import { getRecommendations } from "./recommendationEngine";
import { tests, packages } from "./data";

export default function Step5Results({ assessment }) {
  const recommendations = getRecommendations(assessment);

  return (
    <section className="space-y-8">
      {/* Recommended Tests */}

      <div>
        <h2 className="text-3xl font-black text-slate-900">
          Recommended Tests
        </h2>

        <p className="mt-2 text-slate-600">
          Based on the symptoms you've selected.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {recommendations.tests.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
              No recommendations found.
            </div>
          ) : (
            recommendations.tests.map((item) => {
              const test = tests[item.testId];

              if (!test) return null;

              return (
                <motion.div
                  key={item.testId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {test.name}
                      </h3>

                      <p className="mt-2 text-slate-500">
                        Score: {item.score}
                      </p>
                    </div>

                    <div className="rounded-xl bg-blue-50 px-4 py-2 font-bold text-blue-700">
                      ₹{test.price}
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* Recommended Packages */}

      {recommendations.packages.length > 0 && (
        <div>
          <h2 className="text-3xl font-black text-slate-900">
            Recommended Packages
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {recommendations.packages.map((item) => {
              const pkg = packages[item.packageId];

              if (!pkg) return null;

              return (
                <motion.div
                  key={item.packageId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-3xl border border-blue-100 bg-blue-50 p-6"
                >
                  <h3 className="text-xl font-bold">
                    {pkg.name}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Recommendation Score: {item.score}
                  </p>

                  <div className="mt-5 text-2xl font-black text-blue-700">
                    ₹{pkg.price}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}