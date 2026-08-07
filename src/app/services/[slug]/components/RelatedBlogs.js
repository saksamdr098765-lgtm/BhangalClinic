import BlogCard from "@/app/blogs/components/BlogCard";
import { blogs } from "@/app/data/blogs";
import TrackingLink from "@/app/components/TrackingLink";
import { FiArrowRight } from "react-icons/fi";

export default function RelatedBlogs({ service }) {
  const relatedBlogs = blogs.filter((blog) =>
    service.relatedBlogs.includes(blog.slug)
  );

  if (!relatedBlogs.length) return null;

  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Health Education
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Learn More About Your Health
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Explore expert-written articles covering symptoms, diagnostic tests, and preventive care.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:rounded-3xl sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-slate-900 sm:text-2xl">
                Explore More Health Articles
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                Browse our collection of expert-written blogs covering preventive healthcare and wellness.
              </p>
            </div>

            <div className="shrink-0">
              <TrackingLink
                href="/blogs"
                tracking={`service-related-blogs-view-all-${service.slug}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-sky-700 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
              >
                View All Blogs
                <FiArrowRight />
              </TrackingLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}