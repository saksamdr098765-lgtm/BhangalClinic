import {
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
} from "react-icons/fi";

const variants = {
  tip: {
    icon: FiInfo,
    bg: "bg-sky-50",
    border: "border-sky-200",
    iconBg: "bg-sky-600",
    iconColor: "text-white",
    title: "text-sky-900",
  },

  warning: {
    icon: FiAlertTriangle,
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-500",
    iconColor: "text-white",
    title: "text-amber-900",
  },

  success: {
    icon: FiCheckCircle,
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-600",
    iconColor: "text-white",
    title: "text-emerald-900",
  },
};

export default function InfoCard({
  type = "tip",
  title,
  text,
}) {
  const style = variants[type] || variants.tip;
  const Icon = style.icon;

  return (
    <div
      className={`my-8 rounded-2xl border ${style.border} ${style.bg} p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:my-10 sm:rounded-3xl sm:p-6`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.iconBg} sm:h-12 sm:w-12 sm:rounded-2xl`}
        >
          <Icon
            className={`h-5 w-5 ${style.iconColor} sm:h-6 sm:w-6`}
          />
        </div>

        <div className="min-w-0 flex-1">
          <h4
            className={`mb-2 text-base font-bold leading-6 ${style.title} sm:text-lg`}
          >
            {title}
          </h4>

          <p className="text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}