"use client";

import BlogCard from "@/app/blogs/components/BlogCard";
import { blogs } from "@/app/data/blogs";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiClock,
} from "react-icons/fi";


export default function RelatedBlogs({ service }) {
  const relatedBlogs = blogs.filter((blog) =>
    service.relatedBlogs.includes(blog.slug)
  );

  if (!relatedBlogs.length) return null;

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Health Education
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Learn More About Your Health
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Understanding your health is the first step toward prevention.
            Explore our expert-written health articles covering symptoms,
            diagnostic tests, preventive care, nutrition, and common medical
            conditions related to this service.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {relatedBlogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog}></BlogCard>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-16 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:flex lg:items-center lg:justify-between lg:p-10">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Explore More Health Articles
            </h3>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Browse our collection of expert-written blogs covering preventive
              healthcare, laboratory testing, nutrition, common diseases, and
              wellness tips to help you make informed healthcare decisions.
            </p>
          </div>

          <Link
            href="/blogs"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-700 lg:mt-0"
          >
            View All Blogs

            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}