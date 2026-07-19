import Link from "next/link";
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
    currentIndex > 0
      ? blogs[currentIndex - 1]
      : null;

  const next =
    currentIndex < blogs.length - 1
      ? blogs[currentIndex + 1]
      : null;

  return (
    <section className="mt-20">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Previous */}

        {previous ? (
          <Link
            href={`/blogs/${previous.slug}`}
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
          >
            <div className="mb-6 flex items-center gap-2 text-sky-600">
              <FiArrowLeft />

              <span className="text-sm font-medium">
                Previous Article
              </span>
            </div>

            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
              {previous.category}
            </span>

            <h3 className="mt-4 text-xl font-bold leading-8 text-slate-900 transition-colors group-hover:text-sky-600">
              {previous.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-slate-600">
              {previous.excerpt}
            </p>
          </Link>
        ) : (
          <div />
        )}

        {/* Next */}

        {next ? (
          <Link
            href={`/blogs/${next.slug}`}
            className="group rounded-3xl border border-slate-200 bg-white p-7 text-right shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
          >
            <div className="mb-6 flex items-center justify-end gap-2 text-sky-600">
              <span className="text-sm font-medium">
                Next Article
              </span>

              <FiArrowRight />
            </div>

            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
              {next.category}
            </span>

            <h3 className="mt-4 text-xl font-bold leading-8 text-slate-900 transition-colors group-hover:text-sky-600">
              {next.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-slate-600">
              {next.excerpt}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}