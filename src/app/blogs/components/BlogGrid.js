import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:py-14">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700">
            Latest Articles
          </span>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Explore Health Insights
          </h2>

          <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Browse expert-written articles covering preventive healthcare, laboratory testing, nutrition, and wellness diagnostics.
          </p>
        </div>

        {/* Stats Card */}
        <div className="w-full rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs sm:w-auto sm:min-w-[150px]">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Total Articles
          </p>

          <p className="mt-1 text-2xl font-black text-sky-600 sm:text-3xl">
            {blogs.length}
          </p>
        </div>
      </div>

      {/* Blog Grid (2-column on tablet, 3-column on desktop) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
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