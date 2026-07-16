"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiHome,
  FiCheckCircle,
} from "react-icons/fi";
import SITE_CONFIG from "@/app/SITE_CONFIG";
import { tests } from "@/app/data/tests";
import TestCard from "@/app/components/TestCard";

export default function TestGrid() {

const handleWhatsApp = (test) => {
  const message = `Hello,

I would like to book the following test.

*Test:* ${test.name}
*Description:* ${test.description}
*Price:* ${test.price}

Please share the available slots and booking process.

Thank you.`;

  const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
};
  return (
    <section id="test-grid" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p
              className="
                text-sm
                font-medium
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              Available Tests
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-black
                text-slate-900

                lg:text-4xl
              "
            >
              {tests.length}+ Laboratory Tests
            </h2>

          </div>

          <p className="text-slate-500">
            Transparent pricing • Digital reports
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            grid
            gap-6

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {tests.map((test, index) => (
        <TestCard key={test.slug} test={test}> </TestCard>
          ))}
        </div>

      </div>
    </section>
  );
}