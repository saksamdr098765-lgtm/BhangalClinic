import TrackedLink from "./TrackedLink";

import {
  FaHeartPulse,
  FaBone,
  FaFlask,
  FaPersonDress,
  FaTemperatureHigh,
} from "react-icons/fa6";
import {
  FiActivity,
  FiDroplet,
} from "react-icons/fi";
import {
  GiKidneys,
  GiLiver,
  GiSyringe,
  GiMedicines,
} from "react-icons/gi";

const organs = [
  {
    title: "Heart",
    icon: FaHeartPulse,
    slug: "heart",
    color: "rose",
  },
  {
    title: "Kidney",
    icon: GiKidneys,
    slug: "kidney",
    color: "blue",
  },
  {
    title: "Liver",
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
    title: "Blood",
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

const conditions = [
  {
    title: "Diabetes",
    icon: GiSyringe,
    slug: "diabetes",
    color: "emerald",
  },
  {
    title: "Vitamins",
    icon: FaFlask,
    slug: "vitamins",
    color: "purple",
  },
  {
    title: "Fever",
    icon: FaTemperatureHigh,
    slug: "fever",
    color: "orange",
  },
  {
    title: "Dengue",
    icon: GiMedicines,
    slug: "dengue",
    color: "red",
  },
  {
    title: "Women's Health",
    icon: FaPersonDress,
    slug: "women",
    color: "pink",
  },
  {
    title: "Senior Care",
    icon: FaHeartPulse,
    slug: "senior",
    color: "cyan",
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
  purple: {
    bg: "from-purple-50 via-white to-white",
    icon: "bg-purple-100 text-purple-600",
  },
  emerald: {
    bg: "from-emerald-50 via-white to-white",
    icon: "bg-emerald-100 text-emerald-600",
  },
  pink: {
    bg: "from-pink-50 via-white to-white",
    icon: "bg-pink-100 text-pink-600",
  },
  cyan: {
    bg: "from-cyan-50 via-white to-white",
    icon: "bg-cyan-100 text-cyan-600",
  },
};

function CardGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
      {items.map((item) => {
        const Icon = item.icon;
        const theme = colors[item.color];

        return (
          <div key={item.slug}>
            <TrackedLink
              href={`/packages?category=${item.slug}`}
              tracking={`healthbody-${item.slug}`}
              className={`
                group
                flex
                min-h-[155px]
                sm:min-h-[180px]
                lg:aspect-square
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-slate-200
                bg-gradient-to-br
                ${theme.bg}
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-xl
              `}
            >
              <div
                className={`
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  ${theme.icon}
                  transition-transform
                  duration-300
                  group-hover:scale-110
                `}
              >
                <Icon className="text-[38px]" />
              </div>

              <h4 className="mt-5 text-center text-base font-semibold text-slate-900">
                {item.title}
              </h4>
            </TrackedLink>
          </div>
        );
      })}
    </div>
  );
}

export default function HealthBodySection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="absolute left-0 top-16 h-64 w-64 rounded-full bg-blue-100/40 blur-[110px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 sm:text-sm">
            Health Packages
          </p>

          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Browse Health Packages
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore diagnostic packages by body organ or health condition.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-6 text-center text-2xl font-bold text-slate-900">
            Browse by Organ
          </h3>

          <CardGrid items={organs} />
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-center text-2xl font-bold text-slate-900">
            Browse by Health Condition
          </h3>

          <CardGrid items={conditions} />
        </div>
      </div>
    </section>
  );
}