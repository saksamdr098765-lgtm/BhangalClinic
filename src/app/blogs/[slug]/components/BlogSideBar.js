import SITE_CONFIG from "@/app/SITE_CONFIG";
import TrackingLink from "@/app/components/TrackingLink";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import {
  FiActivity,
  FiArrowRight,
  FiPhone,
} from "react-icons/fi";

export default function BlogSidebar({
  currentBlog,
  blogs,
}) {
  const recentBlogs = blogs
    .filter((blog) => blog.slug !== currentBlog.slug)
    .slice(0, 4);

  const categories = [...new Set(blogs.map((b) => b.category))];

  return (
    <aside className="space-y-5 sm:space-y-6">
      {/* Recent Articles */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
        <h3 className="mb-5 text-lg font-bold text-slate-900">
          Recent Articles
        </h3>

        <div className="space-y-5">
          {recentBlogs.map((blog) => (
            <TrackingLink
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              tracking={`sidebar-recent-${blog.slug}`}
              className="group block rounded-xl transition hover:bg-slate-50 hover:p-2"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                {blog.category}
              </p>

              <h4 className="mt-2 text-base font-semibold leading-6 text-slate-900 transition-colors group-hover:text-sky-600">
                {blog.title}
              </h4>

              <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors group-hover:text-sky-600">
                Read Article

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </TrackingLink>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
        <h3 className="mb-5 text-lg font-bold text-slate-900">
          Categories
        </h3>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <TrackingLink
              key={category}
              href="/blogs"
              tracking={`sidebar-category-${category}`}
              className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700 transition hover:bg-sky-100 sm:text-sm"
            >
              {category}
            </TrackingLink>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 p-5 text-white shadow-xl sm:rounded-3xl sm:p-6">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
          <FiActivity className="h-7 w-7" />
        </div>

        <h3 className="text-2xl font-bold">
          Book Your Health Checkup
        </h3>

        <p className="mt-3 text-sm leading-7 text-sky-100">
          Get accurate laboratory testing with modern technology,
          trusted professionals, and quick report delivery.
        </p>

        <TrackingLink
          href="/packages"
          tracking="sidebar-cta-packages"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 transition-all hover:scale-[1.02] hover:bg-slate-100 sm:w-auto"
        >
          View Packages

          <FiArrowRight />
        </TrackingLink>
      </div>

      {/* Contact */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
            <FiPhone className="h-5 w-5" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Need Assistance?
            </p>

            <TrackedPhoneLink
              location="sidebar-phone-call"
              className="mt-1 block text-lg font-semibold text-slate-900 transition-colors hover:text-sky-600"
            >
              {SITE_CONFIG.phone}
            </TrackedPhoneLink>
          </div>
        </div>
      </div>
    </aside>
  );
}