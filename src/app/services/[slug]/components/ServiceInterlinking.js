import TrackingLink from "@/app/components/TrackingLink";
import { FiTag, FiMapPin, FiActivity, FiArrowRight, FiBookOpen } from "react-icons/fi";

const ICON_MAP = {
  FiTag,
  FiMapPin,
  FiActivity,
  FiBookOpen,
};

export default function ServiceInterlinking({ service }) {
  const interlinkData = service?.interlinks;
  if (!interlinkData || !interlinkData.items || interlinkData.items.length === 0) return null;

  const badgeText = interlinkData.badge || "Pricing & Local Availability";
  const headingText = interlinkData.heading || "Cost & Where to Get Tested";
  const descriptionText = interlinkData.description || "Explore costs and local diagnostic lab availability for this service below.";

  return (
    <section className="bg-slate-50 py-8 sm:py-12 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            {badgeText}
          </span>

          <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
            {headingText}
          </h2>

          <p className="mt-2 text-xs text-slate-600 sm:text-base">
            {descriptionText}
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {interlinkData.items.map((item, index) => {
            const Icon = typeof item.icon === "string" ? ICON_MAP[item.icon] || FiActivity : item.icon || FiActivity;

            return (
              <TrackingLink
                key={item.href || index}
                href={item.href}
                tracking={item.tracking || `service-interlink-${index}`}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Icon className="text-lg" />
                    </div>
                    {item.badge && (
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold border ${item.badgeColor || "bg-sky-100 text-sky-800 border-sky-200"}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="mt-0.5 text-xs font-medium text-sky-600">
                      {item.subtitle}
                    </p>
                  )}

                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-sky-600">
                  <span>{item.btnText || "Learn More"}</span>
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </TrackingLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
