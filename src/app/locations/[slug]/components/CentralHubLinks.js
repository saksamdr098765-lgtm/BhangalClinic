import TrackingLink from "@/app/components/TrackingLink";
import { FiBookOpen, FiActivity, FiTag, FiArrowRight, FiMapPin } from "react-icons/fi";

const ICON_MAP = {
  FiBookOpen,
  FiActivity,
  FiTag,
  FiMapPin,
};

export default function CentralHubLinks({ location }) {
  const hubData = location?.hubLinks;
  if (!hubData || !hubData.items || hubData.items.length === 0) return null;

  const badgeText = hubData.badge || `${location?.city || "Local"} Central Diagnostics Hub`;
  const headingText = hubData.heading || `Everything You Need to Know About Blood Tests in ${location?.city || "Garhshankar"}`;
  const descriptionText = hubData.description || `Explore our central diagnostic guides and pricing for ${location?.city || "your location"}.`;

  return (
    <section className="bg-slate-900 py-10 text-white sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 px-3.5 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-400/30">
            {badgeText}
          </span>

          <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
            {headingText}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-300 sm:text-base sm:leading-7">
            {descriptionText}
          </p>
        </div>

        {/* Dynamic Central Hub Cards from location.hubLinks */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hubData.items.map((item) => {
            const Icon = typeof item.icon === "string" ? ICON_MAP[item.icon] || FiActivity : item.icon || FiActivity;

            return (
              <TrackingLink
                key={item.href}
                href={item.href}
                tracking={`location-hub-${item.tag ? item.tag.toLowerCase().replace(/\s+/g, "-") : "link"}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-800/80 p-5 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-800 hover:shadow-sky-500/10 sm:p-6"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <Icon className="text-xl" />
                    </div>

                    {item.badge && (
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold border ${item.badgeColor || "bg-sky-100 text-sky-700 border-sky-200"}`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-sky-400 transition-colors sm:text-xl">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="mt-1 text-xs font-medium text-sky-300">
                      {item.subtitle}
                    </p>
                  )}

                  <p className="mt-3 text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-sky-400 group-hover:text-sky-300">
                  <span>{item.btnText || "Learn More"}</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </TrackingLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
