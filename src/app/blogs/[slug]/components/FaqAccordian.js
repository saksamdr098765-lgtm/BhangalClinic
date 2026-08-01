"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";


export default function FAQAccordion({ faq }) {

  const [openIndex, setOpenIndex] = useState(0);


  return (

    <div className="space-y-3 sm:space-y-4">

      {faq.map((item,index)=>{

        const isOpen = openIndex === index;


        return (

          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >

            <button
              onClick={() =>
                setOpenIndex(isOpen ? -1 : index)
              }
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >

              <span className="flex-1 text-base font-semibold text-slate-900 sm:text-lg">
                {item.question}
              </span>


              <FiChevronDown
                className={`h-5 w-5 text-sky-600 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />

            </button>


            {isOpen && (

              <div className="border-t border-slate-100 px-5 py-5 sm:px-6">

                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  {item.answer}
                </p>

              </div>

            )}

          </div>

        );

      })}

    </div>

  );
}