"use client";

import { useEffect, useState } from "react";
import { trackBlogTOC } from "@/app/lib/tracking";

export default function TableOfContents({ content }) {
  const headings = content.filter(
    (item) => item.type === "heading" && item.level === 2
  );

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = headings
      .map((heading) =>
        document.getElementById(
          heading.text
            .toLowerCase()
            .replace(/[^\w\s]/g, "")
            .replace(/\s+/g, "-")
        )
      )
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:rounded-3xl lg:p-6">
      <h3 className="mb-5 text-lg font-bold text-slate-900">
        Table of Contents
      </h3>

      <nav aria-label="Table of contents">
        <ul className="space-y-1">
          {headings.map((heading) => {
            const id = heading.text
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-");

            const active = activeId === id;

            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => trackBlogTOC(id, "toc_click")}
                  className={`relative block rounded-xl border-l-2 py-2 pl-4 pr-3 text-sm leading-6 transition-all duration-200 ${
                    active
                      ? "border-sky-600 bg-sky-50 font-semibold text-sky-700"
                      : "border-transparent text-slate-600 hover:border-sky-200 hover:bg-slate-50 hover:text-sky-700"
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}