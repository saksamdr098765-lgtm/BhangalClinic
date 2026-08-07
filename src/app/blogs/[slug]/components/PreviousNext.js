import TrackingLink from "@/app/components/TrackingLink";
import {
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

export default function PreviousNext({
  currentBlog,
  blogs,
}) {
  const currentIndex = blogs.findIndex(
    (blog) => blog.slug === currentBlog.slug
  );

  const previous =
    currentIndex > 0 ? blogs[currentIndex - 1] : null;

  const next =
    currentIndex < blogs.length - 1
      ? blogs[currentIndex + 1]
      : null;

  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
      <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
        {/* Previous */}
        {previous ? (
          <TrackingLink
            href={`/blogs/${previous.slug}`}
            tracking={`blog-prev-${previous.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg sm:rounded-3xl sm:p-6 lg:p-7"
          >
            <div className="mb-5 flex items-center gap-2 text-sky-600">
              <FiArrowLeft className="h-4 w-4" />

              <span className="text-sm font-medium">
                Previous Article
              </span>
            </div>

            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
              {previous.category}
            </span>

            <h3 className="mt-4 text-lg font-bold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-sky-600 sm:text-xl sm:leading-8">
              {previous.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-600 sm:text-base">
              {previous.excerpt}
            </p>
          </TrackingLink>
        ) : (
          <div className="hidden md:block" />
        )}

        {/* Next */}
        {next ? (
          <TrackingLink
            href={`/blogs/${next.slug}`}
            tracking={`blog-next-${next.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg md:text-right sm:rounded-3xl sm:p-6 lg:p-7"
          >
            <div className="mb-5 flex items-center gap-2 text-sky-600 md:justify-end">
              <span className="text-sm font-medium">
                Next Article
              </span>

              <FiArrowRight className="h-4 w-4" />
            </div>

            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
              {next.category}
            </span>

            <h3 className="mt-4 text-lg font-bold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-sky-600 sm:text-xl sm:leading-8">
              {next.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-600 sm:text-base">
              {next.excerpt}
            </p>
          </TrackingLink>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>
    </section>
  );
}