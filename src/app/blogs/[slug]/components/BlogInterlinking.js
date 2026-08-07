import TrackingLink from "@/app/components/TrackingLink";
import { FiArrowRight } from "react-icons/fi";

export default function BlogInterlinking({
  title,
  description,
  items,
}) {
  return (
    <section className="my-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-3xl text-slate-600">
            {description}
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const classes =
            "group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg";

          const Content = (
            <>
              <h3 className="font-semibold text-slate-900">
                {item.title}
              </h3>

              {item.description && (
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              )}

              {item.href && (
                <div className="mt-4 flex items-center gap-2 font-medium text-sky-600">
                  Learn More
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              )}
            </>
          );

          return item.href ? (
            <TrackingLink
              key={item.href}
              href={item.href}
              tracking={`blog-interlink-${item.href}`}
              className={classes}
            >
              {Content}
            </TrackingLink>
          ) : (
            <div
              key={index}
              className={classes}
            >
              {Content}
            </div>
          );
        })}
      </div>
    </section>
  );
}