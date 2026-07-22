"use client";

import BlogCard from "@/app/blogs/components/BlogCard";
import { blogs } from "@/app/data/blogs";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function RelatedBlogs({ service }) {
  const relatedBlogs = blogs.filter((blog) =>
    service.relatedBlogs.includes(blog.slug)
  );

  if (!relatedBlogs.length) return null;

  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Health Education
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Learn More About Your Health
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Understanding your health is the first step toward prevention.
            Explore our expert-written articles covering symptoms, diagnostic
            tests, preventive care, nutrition, and common medical conditions
            related to this service.
          </p>
        </div>

        {/* Blog Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:mt-14 xl:grid-cols-3 xl:gap-8">
          {relatedBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        {/* CTA */}

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:mt-16">
          <div className="flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Explore More Health Articles
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Browse our collection of expert-written blogs covering
                preventive healthcare, laboratory testing, nutrition, common
                diseases, and wellness tips to help you make informed
                healthcare decisions.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/blogs"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-sky-700 hover:shadow-lg sm:w-auto"
              >
                View All Blogs
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}