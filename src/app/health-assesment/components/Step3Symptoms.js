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

  // Get all symptoms for selected body area
  const availableSymptoms = useMemo(() => {
    return symptomData.filter((symptom) =>
      symptom.bodyAreas.includes(assessment.bodyArea)
    );
  }, [assessment.bodyArea]);

  // Search filter
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
      className="rounded-[36px] border border-slate-200/70 bg-white/80 p-8 shadow-xl backdrop-blur-2xl"
    >
      {/* Heading */}

      <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
        Step 3
      </span>

      <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
        Select your symptoms
      </h2>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        Choose all the symptoms you're currently experiencing.
      </p>

      {/* Search */}

      <div className="relative mt-8">
        <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search symptoms..."
          className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-5 outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Counter */}

      <div className="mt-6 flex items-center justify-between">
        <p className="text-slate-500">
          {filteredSymptoms.length} symptoms available
        </p>

        <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          Selected {assessment.symptoms.length}
        </div>
      </div>

      {/* Symptoms */}

      <div className="mt-8 flex flex-wrap gap-4">
        {filteredSymptoms.map((symptom) => {
          const active = assessment.symptoms.includes(symptom.id);

          return (
            <motion.button
              key={symptom.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => toggleSymptom(symptom.id)}
              className={`group flex items-center gap-3 rounded-full border px-5 py-4 transition-all ${
                active
                  ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50"
              }`}
            >
              {active && <FiCheck />}

              <span className="font-medium">
                {symptom.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Empty State */}

      {filteredSymptoms.length === 0 && (
        <div className="mt-12 rounded-3xl border border-dashed border-slate-300 py-16 text-center">
          <p className="text-slate-500">
            No matching symptoms found.
          </p>
        </div>
      )}

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
          disabled={assessment.symptoms.length === 0}
          onClick={nextStep}
          className="group flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue

          <FiArrowRight className="transition group-hover:translate-x-1" />
        </button>
      </div>
    </motion.section>
  );
}