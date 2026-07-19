import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      {/* Section Header */}
      <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700 sm:px-4 sm:py-1.5 sm:text-sm">
            Latest Articles
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore Health Insights
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
            Browse expert-written articles covering preventive healthcare,
            laboratory testing, nutrition, chronic diseases, and wellness.
            Learn how regular health checkups can help you stay healthy and
            detect medical conditions early.
          </p>
        </div>

        {/* Stats Card */}
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:w-auto sm:min-w-[170px] sm:p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm">
            Total Articles
          </p>

          <p className="mt-2 text-3xl font-black text-sky-600 sm:text-4xl">
            {blogs.length}
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
}