"use client";

import { useEffect, useState } from "react";

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

  return (
    <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-lg font-bold text-slate-900">
        Table of Contents
      </h3>

      <nav>
        <ul className="space-y-2">
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
                  className={`block rounded-xl px-3 py-2 text-sm transition-all duration-200 ${
                    active
                      ? "bg-sky-50 font-semibold text-sky-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-sky-600"
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}