import BlogCard from "@/app/blogs/components/BlogCard";
import { blogs } from "@/app/data/blogs";
import TrackedLink from "@/app/components/TrackedLink";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

export default function HomeBlogsSection() {
  // Get the latest 3 published blogs from existing data
  const latestBlogs = blogs.slice(0, 3);

  if (!latestBlogs.length) return null;

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
              <FiBookOpen className="text-sky-600" />
              Health & Wellness Insights
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Latest Health Articles & Diagnostic Guides
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Stay informed with expert-written articles on preventive healthcare,
              diagnostic test guides, wellness tips, and medical awareness from
              Bhangal Clinical Laboratories.
            </p>
          </div>

          <div className="shrink-0">
            <TrackedLink
              href="/blogs"
              tracking="home-blogs-view-all"
              aria-label="View all health blogs"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-sky-700 hover:shadow-lg sm:w-auto"
            >
              <span>View All Blogs</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </TrackedLink>
          </div>
        </header>

        {/* 3-Column Blog Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:mt-14 xl:gap-8">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
