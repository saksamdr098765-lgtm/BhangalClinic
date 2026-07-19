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
      className={`my-10 rounded-3xl border ${style.border} ${style.bg} p-6 shadow-sm`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${style.iconBg}`}
        >
          <Icon className={`h-6 w-6 ${style.iconColor}`} />
        </div>

        <div className="flex-1">
          <h4
            className={`mb-2 text-lg font-bold ${style.title}`}
          >
            {title}
          </h4>

          <p className="leading-7 text-slate-600">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}