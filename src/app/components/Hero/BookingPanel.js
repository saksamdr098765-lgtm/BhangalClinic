import TrackedLink from "../TrackedLink";
import {
  FaHeartPulse,
  FaLungs,
  FaDroplet,
  FaDna,
  FaBone,
  FaHouseMedical,
} from "react-icons/fa6";
import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const healthAreas = [
  {
    title: "Heart",
    icon: FaHeartPulse,
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Liver",
    icon: FaDna,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Blood",
    icon: FaDroplet,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Thyroid",
    icon: FaDna,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Lungs",
    icon: FaLungs,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Bones",
    icon: FaBone,
    color: "bg-stone-50 text-stone-600",
  },
];

export default function BookingPanel() {
  return (
    <div className="relative w-full">
      {/* Medical Glow */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-[130px]" />

      <div className="relative w-full max-w-lg overflow-hidden rounded-[36px] border border-slate-200 bg-white p-7 shadow-[0_30px_90px_rgba(15,23,42,.12)]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-blue-600">
              <FaHouseMedical />
              <span className="text-sm font-bold">
                Healthcare Screening
              </span>
            </div>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Book Your Health Checkup
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Select your health concern and find recommended diagnostic packages.
            </p>
          </div>
        </div>

        {/* Health Areas */}
        <div className="mt-7 grid grid-cols-3 gap-3">
          {healthAreas.map((item) => (
            <TrackedLink
              href={`/packages?tag=${item.title.toLocaleLowerCase()}`}
              tracking={`hero-BookingPanel-${item.title.toLocaleLowerCase()}`}
              key={item.title}
              className="group rounded-2xl border border-slate-100 bg-white p-4 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
              >
                <item.icon size={22} />
              </div>

              <p className="mt-3 text-sm font-bold text-slate-800">
                {item.title}
              </p>
            </TrackedLink>
          ))}
        </div>

        {/* Booking Info */}
        <div className="mt-6 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-5 text-white">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
              <FaHouseMedical size={22} />
            </div>

            <div>
              <p className="text-xs text-blue-100">
                Available Service
              </p>
              <h3 className="font-bold">
                Home Sample Collection
              </h3>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-2xl bg-white/15 p-3">
            <div className="flex items-center gap-2 text-sm">
              <FiCheckCircle />
              NABL Quality Testing
            </div>

            <div className="text-sm font-bold">
              ₹399+
            </div>
          </div>

          <TrackedLink
            href="/packages"
            tracking="Hero-BookingPanel-Packages"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-bold text-blue-600 transition duration-300 hover:scale-[1.02]"
          >
            Explore Packages
            <FiArrowRight />
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}