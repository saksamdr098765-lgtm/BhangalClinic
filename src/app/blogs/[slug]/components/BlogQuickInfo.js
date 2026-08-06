import {
  FiActivity,
  FiClock,
  FiDroplet,
  FiDollarSign,
  FiHome,
  FiFileText,
  FiHeart,
  FiShield,
  FiCheckCircle,
  FiAlertCircle,
  FiTrendingUp,
  FiInfo,
  FiUsers,
  FiList,
  FiCalendar,
} from "react-icons/fi";

const icons = {
  activity: FiActivity,
  test: FiActivity,
  price: FiDollarSign,
  sample: FiDroplet,
  clock: FiClock,
  file: FiFileText,
  home: FiHome,
  heart: FiHeart,
  shield: FiShield,
  check: FiCheckCircle,
  alert: FiAlertCircle,
  trend: FiTrendingUp,
  info: FiInfo,
  users: FiUsers,
  list: FiList,
  calendar: FiCalendar,
};

export default function BlogQuickInfo({ blog }) {
  if (!blog?.quickInfo?.length) return null;

  return (
    <section className="mt-10 overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 shadow-xl">
      {/* Header */}
      <div className="bg-[#0075BA] px-5 py-6 text-white md:px-8">
        <h2 className="text-2xl font-bold">Quick Information</h2>

        <p className="mt-2 max-w-2xl text-sm text-sky-100">
          Key facts related to this article at a glance.
        </p>
      </div>

      {/* Cards */}
<div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:p-6">
  {blog.quickInfo
    .filter((item) => item?.value)
    .map((item) => {
      const Icon = icons[item.icon] || FiInfo;

      return (
        <div
          key={item.label}
          className="group rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
        >
          {/* Mobile */}
          <div className="flex items-center gap-4 p-4 lg:hidden">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-md">
              <Icon size={20} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                {item.label}
              </p>

              <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                {item.value}
              </p>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden h-full flex-col p-6 lg:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-md">
              <Icon size={22} />
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </p>

              <p className="mt-2 text-lg font-bold leading-7 text-slate-900">
                {item.value}
              </p>
            </div>
          </div>
        </div>
      );
    })}
</div>
    </section>
  );
}