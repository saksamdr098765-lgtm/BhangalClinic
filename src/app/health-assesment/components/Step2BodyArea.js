"use client";

import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiHeart,
  FiActivity,
  FiWind,
  FiDroplet,
  FiSun,
  FiUser,
  FiUserCheck
} from "react-icons/fi";

import {
  GiBrain,
  GiStomach,
  GiKidneys,
  GiLiver,
  GiLeg,
  GiBoneKnife,
} from "react-icons/gi";

const bodyAreas = [
  {
    value: "general",
    title: "General Health",
    description: "Fatigue, fever, weakness & overall wellness",
    icon: FiActivity,
    color: "bg-blue-50 text-blue-600",
  },
  {
    value: "head",
    title: "Head & Brain",
    description: "Headache, dizziness, migraine",
    icon: GiBrain,
    color: "bg-violet-50 text-violet-600",
  },
  {
    value: "heart",
    title: "Heart",
    description: "Chest pain, BP, palpitations",
    icon: FiHeart,
    color: "bg-red-50 text-red-500",
  },
  {
    value: "lungs",
    title: "Lungs",
    description: "Cough, breathing problems",
    icon: FiWind,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    value: "digestive",
    title: "Digestive System",
    description: "Acidity, stomach pain, nausea",
    icon: GiStomach,
    color: "bg-orange-50 text-orange-600",
  },
  {
    value: "blood",
    title: "Blood",
    description: "Anemia, infection, weakness",
    icon: FiDroplet,
    color: "bg-rose-50 text-rose-600",
  },
  {
    value: "thyroid",
    title: "Thyroid",
    description: "Weight changes, hair fall",
    icon: FiSun,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    value: "kidney",
    title: "Kidneys",
    description: "Urine, swelling, kidney health",
    icon: GiKidneys,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    value: "liver",
    title: "Liver",
    description: "Jaundice, liver function",
    icon: GiLiver,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    value: "bones",
    title: "Bones & Joints",
    description: "Joint pain, vitamin deficiency",
    icon: GiBoneKnife,
    color: "bg-slate-100 text-slate-700",
  },
  {
    value: "legs",
    title: "Legs & Muscles",
    description: "Pain, cramps & weakness",
    icon: GiLeg,
    color: "bg-purple-50 text-purple-600",
  },
  {
  value: "women",
  title: "Women's Health",
  description: "PCOS, pregnancy, menstrual & hormonal health",
  icon: FiUser,
  color: "bg-pink-50 text-pink-600",
},
{
  value: "men",
  title: "Men's Health",
  description: "Prostate, testosterone & overall men's wellness",
  icon: FiUserCheck,
  color: "bg-sky-50 text-sky-600",
},
];

export default function Step2BodyArea({
  value,
  onChange,
  previousStep,
  nextStep,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[36px] border border-slate-200/70 bg-white/80 p-8 shadow-xl backdrop-blur-2xl"
    >
      {/* Heading */}

      <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
        Step 2
      </span>

      <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
        Which area is bothering you?
      </h2>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        Select the body area that best matches your symptoms. You'll be
        able to choose specific symptoms in the next step.
      </p>

      {/* Grid */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {bodyAreas.map((item) => {
          const Icon = item.icon;

          const active = value === item.value;

          return (
            <motion.button
              key={item.value}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(item.value)}
              className={`group relative overflow-hidden rounded-[28px] border p-6 text-left transition-all duration-300

              ${
                active
                  ? "border-blue-600 bg-blue-50 shadow-xl"
                  : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg"
              }`}
            >
              {active && (
                <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                  <FiCheck />
                </div>
              )}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon className="text-3xl" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Footer */}

      <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={previousStep}
          className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          <FiArrowLeft />
          Back
        </button>

        <button
          disabled={!value}
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