import SITE_CONFIG from "@/app/SITE_CONFIG";
import Link from "next/link";
import {
  FiArrowRight,
  FiPhone,
  FiActivity,
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
    <div className=" space-y-6">
      {/* Table of Contents */}


      {/* Recent Articles */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-lg font-bold text-slate-900">
          Recent Articles
        </h3>

        <div className="space-y-5">
          {recentBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group block"
            >
              <p className="text-sm text-sky-600 font-medium">
                {blog.category}
              </p>

              <h4 className="mt-1 font-semibold leading-6 text-slate-800 transition group-hover:text-sky-600">
                {blog.title}
              </h4>

              <span className="mt-2 inline-flex items-center gap-1 text-sm text-slate-500 group-hover:text-sky-600">
                Read Article
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-lg font-bold text-slate-900">
          Categories
        </h3>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}

      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-blue-700 p-6 text-white shadow-xl">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
          <FiActivity size={28} />
        </div>

        <h3 className="text-xl font-bold">
          Book Your Health Checkup
        </h3>

        <p className="mt-3 text-sm leading-7 text-sky-100">
          Get accurate diagnostic testing with modern equipment
          and experienced professionals.
        </p>

        <Link
          href="/packages"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 transition hover:scale-105"
        >
          View Packages
          <FiArrowRight />
        </Link>
      </div>

      {/* Contact */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
            <FiPhone />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Need Assistance?
            </p>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="font-semibold text-slate-900 hover:text-sky-600"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}