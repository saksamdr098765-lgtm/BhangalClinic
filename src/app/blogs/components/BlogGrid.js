import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Section Header */}

      <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Latest Articles
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900">
            Explore Health Insights
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Browse expert-written articles covering preventive healthcare,
            laboratory testing, nutrition, chronic diseases, and wellness.
            Learn how regular health checkups can help you stay healthy and
            detect medical conditions early.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Articles
          </p>

          <p className="text-3xl font-bold text-sky-600">
            {blogs.length}
          </p>
        </div>
      </div>

      {/* Blog Grid */}

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
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