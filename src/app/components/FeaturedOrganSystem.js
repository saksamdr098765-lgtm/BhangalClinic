import TrackedLink from "./TrackedLink";

import {
  FaHeartPulse,
  FaBone,
} from "react-icons/fa6";

import {
  FiActivity,
  FiDroplet,
} from "react-icons/fi";

import {
  GiKidneys,
  GiLiver,
} from "react-icons/gi";

const organs = [
  {
    title: "Heart Health",
    icon: FaHeartPulse,
    slug: "heart",
    color: "rose",
  },
  {
    title: "Kidney Health",
    icon: GiKidneys,
    slug: "kidney",
    color: "blue",
  },
  {
    title: "Liver Health",
    icon: GiLiver,
    slug: "liver",
    color: "orange",
  },
  {
    title: "Thyroid",
    icon: FiActivity,
    slug: "thyroid",
    color: "indigo",
  },
  {
    title: "Blood Health",
    icon: FiDroplet,
    slug: "blood",
    color: "red",
  },
  {
    title: "Bone & Joint",
    icon: FaBone,
    slug: "bone",
    color: "amber",
  },
];

const colors = {
  rose: {
    bg: "from-rose-50 via-white to-white",
    icon: "bg-rose-100 text-rose-600",
  },
  blue: {
    bg: "from-sky-50 via-white to-white",
    icon: "bg-sky-100 text-sky-600",
  },
  orange: {
    bg: "from-orange-50 via-white to-white",
    icon: "bg-orange-100 text-orange-600",
  },
  indigo: {
    bg: "from-indigo-50 via-white to-white",
    icon: "bg-indigo-100 text-indigo-600",
  },
  red: {
    bg: "from-red-50 via-white to-white",
    icon: "bg-red-100 text-red-600",
  },
  amber: {
    bg: "from-amber-50 via-white to-white",
    icon: "bg-amber-100 text-amber-600",
  },
};

export default function FeaturedOrgansSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Browse Packages
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            Featured Body Systems
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore diagnostic packages designed for specific organs and body
            systems.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {organs.map((item) => {
            const Icon = item.icon;
            const theme = colors[item.color];

            return (
              <div key={item.slug}>
                <TrackedLink
                  href={`/packages?tag=${item.slug}`}
                  tracking={`organ-${item.slug}`}
                  className={`group flex aspect-square flex-col items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br ${theme.bg} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full ${theme.icon} transition duration-300 group-hover:scale-110`}
                  >
                    <Icon className="text-4xl" />
                  </div>

                  <h3 className="mt-5 text-center text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </TrackedLink>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}