import React from 'react'
import TrackingLink from "@/app/components/TrackingLink";

export default function BlogReference({block,index}) {
  return (
      <section key={index} className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        References
      </h2>

      <ul className="space-y-3">
        {block.items.map((item, i) => (
          <li key={i} className="text-sm leading-6 text-slate-700">
            <TrackingLink
              href={item.url}
              tracking={`blog-reference-${item.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              {item.title}
            </TrackingLink>

            {item.publisher && (
              <span className="text-slate-500"> — {item.publisher}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
