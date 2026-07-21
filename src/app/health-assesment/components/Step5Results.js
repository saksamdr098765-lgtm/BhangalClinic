"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiPackage, FiActivity } from "react-icons/fi";

import { getRecommendations } from "./recommendationEngine";
import { tests, packages } from "./data";

import Link from "next/link";
import SITE_CONFIG from "@/app/SITE_CONFIG";


export default function Step5Results({ assessment }) {
  const recommendations = getRecommendations(assessment);
   const handleWhatsApp = (test) => {
    const message = `Hello,
  
  I would like to book the following test.
  
  *Test:* ${test.name}
 
  *Price:* ${test.price}
  
  Please share the available slots and booking process.
  
  Thank you.`;
  
    const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="space-y-10">
      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white sm:p-8"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/15 p-3">
            <FiCheckCircle className="text-2xl" />
          </div>

          <div>
            <p className="text-sm text-blue-100">
              Assessment Complete
            </p>

            <h1 className="text-2xl font-black sm:text-3xl">
              Your Recommended Tests
            </h1>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base">
          Based on the symptoms and information you provided, these
          laboratory tests and health packages may be suitable. These
          recommendations are educational and should not replace medical
          advice from a qualified healthcare professional.
        </p>
      </motion.div>
 {/* Packages */}

      {recommendations.packages.length > 0 && (
        <section>
          <div className="flex items-center gap-3">
            <FiPackage className="text-2xl text-blue-600" />

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Recommended Health Packages
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Comprehensive packages offering better value.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {recommendations.packages.map((item) => {
              const pkg = packages[item.packageId];

              if (!pkg) return null;

              return (
                <Link
                key={item.packageId}
                href={`/packages/${item.packageId}`}
                >
                <motion.div
                 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-blue-100 bg-blue-50 p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {pkg.name}
                      </h3>

                      <p className="mt-2 text-sm text-slate-600">
                        Recommendation Score: {item.score}
                      </p>
                    </div>

                    <span className="rounded-xl bg-white px-3 py-2 text-lg font-bold text-blue-700 shadow-sm">
                      ₹{pkg.price}
                    </span>
                  </div>
                </motion.div></Link>
              );
            })}
          </div>
        </section>
      )}
      {/* Tests */}

      <section>
        <div className="flex items-center gap-3">
          <FiActivity className="text-2xl text-blue-600" />

          <div>
            <h2 className="text-2xl font-black text-slate-900">
              Recommended Tests
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Individual laboratory tests.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {recommendations.tests.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
              <p className="text-slate-500">
                No test recommendations found.
              </p>
            </div>
          ) : (
            recommendations.tests.map((item) => {
              const test = tests[item.testId];

              if (!test) return null;

              return (
                <motion.button
                onClick={()=>{handleWhatsApp(test)}}
                  key={item.testId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {test.name}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        Recommendation Score: {item.score}
                      </p>
                    </div>

                    <span className="rounded-xl bg-blue-50 px-3 py-2 text-lg font-bold text-blue-700">
                      ₹{test.price}
                    </span>
                  </div>
                </motion.button>
              );
            })
          )}
        </div>
      </section>

     

      {/* Disclaimer */}

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="font-semibold text-slate-900">
          Important
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          These recommendations are generated based on your responses and
          are intended for informational purposes only. Please consult a
          qualified healthcare professional for diagnosis and treatment.
        </p>
      </div>
    </section>
  );
}