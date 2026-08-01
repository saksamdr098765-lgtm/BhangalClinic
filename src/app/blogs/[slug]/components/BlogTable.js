import React from 'react'

export default function BlogTable({block,index}) {
  return (
   <div
      key={index}
      className="my-8 overflow-x-auto rounded-2xl border border-slate-200"
    >
      {block.title && (
        <h3 className="border-b border-slate-200 bg-slate-50 px-6 py-4 text-lg font-semibold text-slate-900">
          {block.title}
        </h3>
      )}

      <table className="w-full border-collapse text-left">
        <thead className="bg-sky-50">
          <tr>
            {block.headers.map((header, i) => (
              <th
                key={i}
                className="border-b border-slate-200 px-5 py-4 text-sm font-semibold text-slate-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="even:bg-slate-50 hover:bg-sky-50 transition-colors"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b border-slate-100 px-5 py-4 text-sm text-slate-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
