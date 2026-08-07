import TrackingLink from "@/app/components/TrackingLink";
import { FiArrowRight } from "react-icons/fi";

import { blogs } from "@/app/data/blogs";
import BlogCard from "@/app/blogs/components/BlogCard";

export default function RelatedBlogs({ location }) {
  const relatedBlogs = blogs
    .filter((blog) => location.blogs.includes(blog.slug))
    .slice(0, 3);

  if (!relatedBlogs.length) return null;

  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            Health Education
          </span>

          <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Read Our Health & Wellness Articles
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Informative health articles to help you make knowledgeable healthcare decisions.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedBlogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Stay Updated With Reliable Health Information
              </h3>

              <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                Explore our health articles covering blood testing, preventive wellness, and common medical conditions.
              </p>
            </div>

            <div className="shrink-0">
              <TrackingLink
                href="/blogs"
                tracking={`location-blogs-view-all-${location.city}`}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-sky-700 sm:text-sm"
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