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
  FiUserCheck,
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
    description: "Fatigue, fever, weakness & wellness",
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
    description: "Urine & kidney health",
    icon: GiKidneys,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    value: "liver",
    title: "Liver",
    description: "Jaundice & liver function",
    icon: GiLiver,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    value: "bones",
    title: "Bones & Joints",
    description: "Joint pain & vitamin deficiency",
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
    description: "PCOS, pregnancy & hormones",
    icon: FiUser,
    color: "bg-pink-50 text-pink-600",
  },
  {
    value: "men",
    title: "Men's Health",
    description: "Prostate & testosterone",
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
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      {/* Heading */}
      <div className="max-w-3xl">
        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
          Step 2 of 5
        </span>

        <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Which body area
          <span className="block text-blue-600">
            needs attention?
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Choose the body area that best matches your symptoms.
          We'll ask more specific questions in the next step.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {bodyAreas.map((item) => {
          const Icon = item.icon;
          const active = value === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                active
                  ? "border-blue-600 bg-blue-50 shadow-lg"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
              }`}
            >
              {active && (
                <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                  <FiCheck />
                </div>
              )}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-all ${item.color} ${
                  !active && "group-hover:scale-105"
                }`}
              >
                <Icon className="text-3xl" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={previousStep}
          className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
        >
          <FiArrowLeft />
          Back
        </button>

        <button
          type="button"
          disabled={!value}
          onClick={nextStep}
          className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          Continue
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}