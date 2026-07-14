"use client";

import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const durations = [
  "Today",
  "2-3 Days",
  "1 Week",
  "2-4 Weeks",
  "More than a Month",
];

const genders = ["Male", "Female", "Other"];

const conditions = [
  "Diabetes",
  "High Blood Pressure",
  "Thyroid Disorder",
  "Heart Disease",
  "Kidney Disease",
  "Liver Disease",
  "Pregnancy",
  "None",
];

export default function Step4Details({
  assessment,
  setAssessment,
  previousStep,
  nextStep,
}) {
  const toggleCondition = (condition) => {
    let updated = [...assessment.conditions];

    if (condition === "None") {
      updated = ["None"];
    } else {
      updated = updated.filter((c) => c !== "None");

      if (updated.includes(condition)) {
        updated = updated.filter((c) => c !== condition);
      } else {
        updated.push(condition);
      }
    }

    setAssessment({
      ...assessment,
      conditions: updated,
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[36px] border border-slate-200/70 bg-white/80 p-8 shadow-xl backdrop-blur-2xl"
    >
      <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
        Step 4
      </span>

      <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
        Tell us a little more
      </h2>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        These details help us improve your laboratory test recommendations.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Age */}

        <div>
          <label className="mb-3 block font-semibold text-slate-800">
            Age
          </label>

          <input
            type="number"
            min="1"
            max="120"
            value={assessment.age}
            onChange={(e) =>
              setAssessment({
                ...assessment,
                age: e.target.value,
              })
            }
            placeholder="Enter your age"
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Gender */}

        <div>
          <label className="mb-3 block font-semibold text-slate-800">
            Gender
          </label>

          <div className="grid grid-cols-3 gap-3">
            {genders.map((gender) => (
              <button
                key={gender}
                onClick={() =>
                  setAssessment({
                    ...assessment,
                    gender,
                  })
                }
                className={`rounded-2xl border px-4 py-4 font-medium transition

                ${
                  assessment.gender === gender
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white hover:border-blue-300"
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Duration */}

      <div className="mt-10">
        <label className="mb-4 block font-semibold text-slate-800">
          How long have you had these symptoms?
        </label>

        <div className="flex flex-wrap gap-3">
          {durations.map((duration) => (
            <button
              key={duration}
              onClick={() =>
                setAssessment({
                  ...assessment,
                  duration,
                })
              }
              className={`rounded-full border px-5 py-3 transition

              ${
                assessment.duration === duration
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white hover:border-blue-300"
              }`}
            >
              {duration}
            </button>
          ))}
        </div>
      </div>

      {/* Medical History */}

      <div className="mt-10">
        <label className="mb-4 block font-semibold text-slate-800">
          Existing Medical Conditions
        </label>

        <div className="flex flex-wrap gap-3">
          {conditions.map((condition) => (
            <button
              key={condition}
              onClick={() => toggleCondition(condition)}
              className={`rounded-full border px-5 py-3 transition

              ${
                assessment.conditions.includes(condition)
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white hover:border-blue-300"
              }`}
            >
              {condition}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}

      <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={previousStep}
          className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          <FiArrowLeft />
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={
            !assessment.age ||
            !assessment.gender ||
            !assessment.duration
          }
          className="group flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40"
        >
          View Recommendations

          <FiArrowRight className="transition group-hover:translate-x-1" />
        </button>
      </div>
    </motion.section>
  );
}