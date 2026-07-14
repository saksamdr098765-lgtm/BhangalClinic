"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiSearch,
} from "react-icons/fi";

import { symptoms as symptomData } from "./data";

export default function Step3Symptoms({
  assessment,
  setAssessment,
  previousStep,
  nextStep,
}) {
  const [search, setSearch] = useState("");

  const availableSymptoms = useMemo(() => {
    return symptomData.filter((symptom) =>
      symptom.bodyAreas.includes(assessment.bodyArea)
    );
  }, [assessment.bodyArea]);

  const filteredSymptoms = useMemo(() => {
    return availableSymptoms.filter((symptom) =>
      symptom.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [availableSymptoms, search]);

  const toggleSymptom = (symptomId) => {
    const selected = assessment.symptoms.includes(symptomId);

    if (selected) {
      setAssessment((prev) => ({
        ...prev,
        symptoms: prev.symptoms.filter((id) => id !== symptomId),
      }));
    } else {
      setAssessment((prev) => ({
        ...prev,
        symptoms: [...prev.symptoms, symptomId],
      }));
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8"
    >
      {/* Header */}

      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700 sm:px-4 sm:py-2 sm:text-sm">
        Step 3
      </span>

      <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
        Select Your Symptoms
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
        Choose all the symptoms you're currently experiencing.
      </p>

      {/* Search */}

      <div className="relative mt-8">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search symptoms..."
          className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Counter */}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          {filteredSymptoms.length} symptoms available
        </p>

        <div className="inline-flex w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          Selected {assessment.symptoms.length}
        </div>
      </div>

      {/* Symptoms */}

      <div className="mt-8 flex flex-wrap gap-3">
        {filteredSymptoms.map((symptom) => {
          const active = assessment.symptoms.includes(symptom.id);

          return (
            <motion.button
              key={symptom.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => toggleSymptom(symptom.id)}
              className={`flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium transition-all sm:px-5 ${
                active
                  ? "border-blue-600 bg-blue-600 text-white shadow-md"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              {active && <FiCheck className="shrink-0" />}

              <span>{symptom.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Empty State */}

      {filteredSymptoms.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 py-12 text-center">
          <p className="text-sm text-slate-500">
            No matching symptoms found.
          </p>
        </div>
      )}

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
          disabled={assessment.symptoms.length === 0}
          onClick={nextStep}
          className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue

          <FiArrowRight className="transition group-hover:translate-x-1" />
        </button>
      </div>
    </motion.section>
  );
}