"use client";

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
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
      {/* Heading */}
      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700 sm:px-4 sm:py-2 sm:text-sm">
        Step 4
      </span>

      <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
        Tell us a little more
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
        These details help us improve your laboratory test
        recommendations.
      </p>

      {/* Age & Gender */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div>
          <label htmlFor="ageInput" className="mb-2 block text-sm font-semibold text-slate-700">
            Age
          </label>

          <input
            id="ageInput"
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
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Gender
          </label>

          <div className="grid grid-cols-3 gap-2">
            {genders.map((gender) => (
              <button
                key={gender}
                type="button"
                onClick={() =>
                  setAssessment({
                    ...assessment,
                    gender,
                  })
                }
                className={`h-12 rounded-xl border text-sm font-medium transition ${
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
      <div className="mt-8">
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          How long have you had these symptoms?
        </label>

        <div className="flex flex-wrap gap-2">
          {durations.map((duration) => (
            <button
              key={duration}
              type="button"
              onClick={() =>
                setAssessment({
                  ...assessment,
                  duration,
                })
              }
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                assessment.duration === duration
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              {duration}
            </button>
          ))}
        </div>
      </div>

      {/* Medical Conditions */}
      <div className="mt-8">
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          Existing Medical Conditions
        </label>

        <div className="flex flex-wrap gap-2">
          {conditions.map((condition) => (
            <button
              key={condition}
              type="button"
              onClick={() => toggleCondition(condition)}
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                assessment.conditions.includes(condition)
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              {condition}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={previousStep}
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          <FiArrowLeft />
          Back
        </button>

        <button
          type="button"
          onClick={nextStep}
          disabled={
            !assessment.age ||
            !assessment.gender ||
            !assessment.duration
          }
          className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          View Recommendations
          <FiArrowRight className="transition group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}